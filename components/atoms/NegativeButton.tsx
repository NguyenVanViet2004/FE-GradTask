import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { HEIGHT_BUTTON, RADIUS_BUTTON } from '~/constants/Constants'

type Props = {
  title: string
} & ButtonProps

export const NegativeButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      justifyContent="center"
      height={HEIGHT_BUTTON}
      flexDirection="row"
      fontSize={16}
      borderWidth={1}
      borderColor={colors.oceanTeal}
      borderRadius={RADIUS_BUTTON}
    >
      {props.title}
    </Button>
  )
}
