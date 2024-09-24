import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { RADIUS_BUTTON } from '~/constants/Constants'
type Props = {
  title: string
  onPress?: () => void
} & ButtonProps
const TransparentButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      onPress={props.onPress}
      bg="$colorTransparent"
      borderRadius={RADIUS_BUTTON}
      color={colors.white}
      borderColor={colors.white}
      fontSize={16}
      borderWidth={1}
      fontWeight={'bold'}
      alignItems="center">
      {props.title}
    </Button>
  )
}

export default TransparentButton
