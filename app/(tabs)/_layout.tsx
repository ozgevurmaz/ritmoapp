import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import "../../global.css"
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import CalendarScreen from "./CalendarScreen";
import HabitsScreen from "./HabitsScreen";
import GoalsScreen from "./GoalsScreen";
import SocialScreen from "./SocialScreen";
import ProfileScreen from "./ProfileScreen";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
         headerShown: false,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}

      />

      <Tabs.Screen
        name="CalendarScreen"
        options={{
          title: 'CalendarScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />

      <Tabs.Screen
        name="HabitsScreen"
        options={{
          title: 'HabitsScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="check-square" color={color} />,
        }}
      />

      <Tabs.Screen
        name="GoalsScreen"
        options={{
          title: 'GoalsScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="bullseye" color={color} />,
        }}
      />

      <Tabs.Screen
        name="SocialScreen"
        options={{
          title: 'SocialScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'ProfileScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />

    </Tabs>
  );
}
