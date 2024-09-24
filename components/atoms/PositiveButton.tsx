import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { RADIUS_BUTTON } from '~/constants/Constants'

type Props = {
  title: string
} & ButtonProps

export const PositiveButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      height={53}
      fontSize={16}
      color={colors.white}
      backgroundColor={colors.primaryTeal}
      borderRadius={RADIUS_BUTTON}
    >{props.title}</Button>
  )
}
