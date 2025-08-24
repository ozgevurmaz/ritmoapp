import { t } from "@/lib/i18n/i18n";
import { Text, View } from "react-native";



export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        {t("welcome")}
      </Text>
    </View>
  );
}


