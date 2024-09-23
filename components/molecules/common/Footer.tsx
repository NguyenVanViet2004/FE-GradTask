import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
  onPressAuthScreen?: () => void
}

const Footer: React.FC<Props> = (
  { title, subtitle, onPressAuthScreen }
) => {
  const colors = getColors(useColorScheme())

  return (
    <XStack justifyContent="center" alignItems="flex-end" >
      <XStack justifyContent="center" gap={8} marginBottom={10}>
        <Text
          fontSize={14}
          color={colors.slateGray}
          textAlign="center">
          {title}
        </Text>

        <Text
          onPress={onPressAuthScreen}
          fontSize={14}
          color={colors.primaryTeal}
        >
          {subtitle}
        </Text>

      </XStack>
    </XStack>

  )
}

export default Footer
