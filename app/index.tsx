import React from "react"
import { View, Text, StatusBar } from "react-native"
import { Link, Stack, Tabs } from "expo-router"

export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <View>
          <Text className="text-lg">Hello World</Text>
        </View>
        <Text className="text-lg text-red-500">Universal React with Expo</Text>
      </View>
      <Stack.Screen options={{ title: "Overview" }} />
    </>
  )
}
