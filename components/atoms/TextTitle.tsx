import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, type TextProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { useAppFonts } from '~/hooks/useAppFonts'

type Props = {
  text: string
} & TextProps

export const TextTitle = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { fonts } = useAppFonts();

  return (
    <Text
      {...props}
      fontSize={14}
      fontFamily={fonts.JetBrainsMonoBold}
      color={colors.primaryTeal}
    >{props.text}</Text>
  )
}
