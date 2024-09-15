import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'tamagui'

export default function Home (): React.ReactElement {
  return (
    <SafeAreaView>
      <Text color="red" fontSize={25} alignSelf="center">
        GlowUp - application
      </Text>
    </SafeAreaView>
  )
}
