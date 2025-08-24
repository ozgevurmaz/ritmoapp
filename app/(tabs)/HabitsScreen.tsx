import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function HabitsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <StatusBar style="auto" />
      <View className="flex-1 items-stretch justify-start px-6">
        <Text className='text-light-foreground dark:text-dark-foreground'>HabitsScreen</Text>
      </View>
    </SafeAreaView>
  )
}
