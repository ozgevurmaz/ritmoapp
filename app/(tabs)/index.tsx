import React, { useMemo } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Avatar from "@/components/ui/Avatar";
import { getGreetingByTime } from "@/components/utils/greeting";
import { formatDate } from "@/components/utils/formatDate";


export default function Home() {
  const todayLabel = formatDate(new Date(), "en-UK");
  const greeting = getGreetingByTime();

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <StatusBar style="auto" />
      <View className="flex-1 items-stretch justify-start px-6">
        <Pressable
          accessibilityLabel="Today card"
          android_ripple={{ color: "rgba(0,0,0,0.05)" }}
          className="gap-4 w-full p-4 rounded-2xl bg-light-surface dark:bg-dark-surface border border-black/5 dark:border-white/5"
        >
          <View className="flex-row items-center gap-4">
            <Avatar name="Elif Özge" size="dashboard" ring status="online" alt="Profile avatar" />
            <View className="flex-1">
              <Text className="text-base font-medium text-light-foreground/80 dark:text-dark-foreground/80" numberOfLines={1}>
                {greeting}
              </Text>
              <Text className="text-2xl font-extrabold text-light-foreground dark:text-dark-foreground" numberOfLines={1}>
                Özge
              </Text>
            </View>
          </View>

          <View className="gap-1">
            <Text className="text-sm font-medium text-light-foreground/70 dark:text-dark-foreground/70">
              {todayLabel}
            </Text>
            <Text className="text-base leading-6 font-semibold text-light-foreground dark:text-dark-foreground">
              “Discipline is choosing between what you want now and what you want most.”
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
