import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from 'tamagui'

export default function Home () {
  return (
    <SafeAreaView>
      <Text color="red" fontSize={25} alignSelf="center">GlowUp - application</Text>
    </SafeAreaView>
  )
}
