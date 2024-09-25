import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack } from 'tamagui'

import getColors from '~/constants/Colors'
import { useAppFonts } from '~/hooks/useAppFonts'
interface Props {
  title: string
  subtitle?: string
  onPressAuthScreen?: () => void
}

const FooterComponent: React.FC<Props> = (
  { title, subtitle, onPressAuthScreen }
) => {
  const colors = getColors(useColorScheme())
  const { fonts } = useAppFonts()

  return (
    <XStack justifyContent="center" alignItems="flex-end" gap={8} >
      <Text
        fontSize={14}
        color={colors.slateGray}
        textAlign="center">
        {title}
      </Text>

      <Text
        onPress={onPressAuthScreen}
        fontSize={14}
        fontFamily={fonts.JetBrainsMonoBold}
        color={colors.primaryTeal}
      >
        {subtitle}
      </Text>
    </XStack>

  )
}

export default FooterComponent
