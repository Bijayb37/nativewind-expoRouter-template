import { StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-xl">Tab Two</Text>
      <View
        className="h-1 width-8 my-8"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  )
}
