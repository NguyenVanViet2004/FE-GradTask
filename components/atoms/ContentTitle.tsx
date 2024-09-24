import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
}

const ContentTitle: React.FC<Props> = ({ title, subtitle }) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack gap={10}>
      <Text
        fontSize={24}
        fontFamily={'JetBrainsMonoBold'}
        color={colors.primaryTeal}>
        {title}
      </Text>
      <Text fontSize={14} color={colors.slateGray}>{subtitle}</Text>
    </YStack>
  )
}

export default ContentTitle
