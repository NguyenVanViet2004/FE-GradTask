import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
  onPressAuthScreen?: () => void
}

const FooterComponent: React.FC<Props> = (
  { title, subtitle, onPressAuthScreen }
) => {
  const colors = getColors(useColorScheme())

  return (
    <XStack justifyContent="center" alignItems="flex-end" gap={8} >
      <Text
        fontSize={14}
        color={colors.gray}
        textAlign="center">
        {title}
      </Text>

      <Text
        onPress={onPressAuthScreen}
        fontSize={14}
        fontFamily={'JetBrainsMonoBold'}
        color={colors.primaryTeal}
      >
        {subtitle}
      </Text>
    </XStack>

  )
}

export default FooterComponent
