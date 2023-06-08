import { View, Text, StatusBar } from "react-native"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className="text-lg">Hello World</Text>
      </View>
      <Text className="text-lg text-red-500">Universal React with Expo</Text>
    </View>
  )
}
