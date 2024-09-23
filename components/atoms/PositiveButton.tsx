import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

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
      borderRadius={10}
    >{props.title}</Button>
  )
}
