import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, type TextProps, XStack } from 'tamagui'

import { TextTitle } from '~/components/atoms/TextTitle'
import getColors from '~/constants/Colors'

type Props = {
  heading: string
  linkText: string
  onLinkPress?: () => void
} & TextProps

const TextWithLink: React.FC<Props> = (
  { heading, linkText, onLinkPress }
) => {
  const colors = getColors(useColorScheme())

  return (
    <XStack justifyContent="center" alignItems="flex-end" gap={8} >
      <Text
        fontSize={14}
        color={colors.oceanMist}
      >{heading}</Text>

      <TextTitle
        text={linkText}
        onPress={onLinkPress}
        color={colors.oceanTeal}
      />
    </XStack>

  )
}

export default TextWithLink
