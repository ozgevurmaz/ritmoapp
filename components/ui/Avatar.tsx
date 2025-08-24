import React, { useMemo, useState } from "react";
import { Image, View, Text, Pressable } from "react-native";

type AvatarSize = "mini" | "social" | "dashboard";
type Status = "online" | "offline" | "busy" | "away";

type Props = {
  /** Image URL (can be undefined) */
  src?: string;
  /** Full name for initials + color hashing */
  name?: string;
  /** One of: mini | social | dashboard */
  size?: AvatarSize;
  /** Optional status dot */
  status?: Status;
  /** Show a tinted ring around the avatar */
  ring?: boolean;
  /** Accessibility label */
  alt?: string;
  /** Optional onPress handler */
  onPress?: () => void;
  /** Extra Tailwind classes for NativeWind */
  className?: string;
};

const SIZE_MAP: Record<AvatarSize, number> = {
  mini: 22,       // shared habits/goals
  social: 40,     // social
  dashboard: 72,  // dashboard/profile
};

const STATUS_COLOR: Record<Status, string> = {
  online: "#22c55e",   // green
  offline: "#9ca3af",  // gray
  busy: "#ef4444",     // red
  away: "#f59e0b",     // amber
};

function getInitials(name?: string) {
  if (!name) return "•";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[1]?.[0] ?? "";
  return (first + last).toUpperCase() || "•";
}

function hashToHsl(name?: string) {
  // Simple deterministic hash → pleasant pastel HSL
  const str = name || "user";
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    // keep in 32-bit range
    // eslint-disable-next-line no-bitwise
    hash &= hash;
  }
  const hue = Math.abs(hash) % 360;
  // pastel-ish
  const saturation = 65;
  const lightness = 78;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

export default function Avatar({
  src,
  name,
  size = "social",
  status,
  ring,
  alt,
  onPress,
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);

  const px = SIZE_MAP[size];
  const fontSize =
    size === "mini" ? 10 :
    size === "social" ? 16 : 28;

  const dotSize =
    size === "mini" ? 6 :
    size === "social" ? 9 : 12;

  const ringWidth =
    size === "mini" ? 1.5 :
    size === "social" ? 2 : 3;

  const bgColor = useMemo(() => ({ backgroundColor: hashToHsl(name) }), [name]);

  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={alt || name || "Avatar"}
      onPress={onPress}
      className={`rounded-full ${className}`}
      style={{
        width: px,
        height: px,
      }}
    >
      <View
        className="rounded-full overflow-hidden items-center justify-center"
        style={{
          width: px,
          height: px,
          // ring effect via outer container border
          borderWidth: ring ? ringWidth : 0,
          borderColor: "rgba(255, 138, 77, 0.7)", // matches your orange-ish brand; tweak as needed
        }}
      >
        {src && !failed ? (
          <Image
            source={{ uri: src }}
            onError={() => setFailed(true)}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <View
            className="w-full h-full items-center justify-center"
            style={bgColor}
          >
            <Text
              className="font-semibold text-neutral-800"
              style={{ fontSize }}
              numberOfLines={1}
            >
              {getInitials(name)}
            </Text>
          </View>
        )}
      </View>

      {status && (
        <View
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: STATUS_COLOR[status],
            right: -1,
            bottom: -1,
            borderWidth: Math.max(1, ringWidth),
            borderColor: "white",
          }}
        />
      )}
    </Wrapper>
  );
}
