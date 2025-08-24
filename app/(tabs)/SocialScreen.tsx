import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function SocialScreen() {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <StatusBar style="auto" />
      <View className='bg-light-background dark:bg-dark-background flex-1 items-center justify-center '>
        <Pressable className="mt-6 rounded-xl px-4 py-2 bg-light-surface dark:bg-dark-surface">
          <Text className="text-primary font-bold">Primary</Text>
          <Text className="text-secondary font-bold">Secondary</Text>
          <Text className="text-success font-bold">Success</Text>
          <Text className="text-warning font-bold">Warning</Text>
          <Text className="text-info font-bold">Info</Text>
          <Text className="text-error font-bold">Error</Text>
          <Text className="text-light-foreground dark:text-dark-foreground font-bold">Foreground</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

