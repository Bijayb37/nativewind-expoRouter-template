import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-xl">Tab Two</Text>
      <View
        className="h-1 width-8 my-8"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}
