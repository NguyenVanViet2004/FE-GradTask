import React from 'react'
import { Text, View } from 'tamagui'

import { useAppFonts } from '~/hooks/useAppFonts'

const HomeTemplate = (): React.ReactElement => {
  const { fonts } = useAppFonts()

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Text
        fontSize={20}
        fontFamily={fonts.JetBrainsMonoBold}>
        HomeTemplate
      </Text>
    </View>
  )
}

export default HomeTemplate
