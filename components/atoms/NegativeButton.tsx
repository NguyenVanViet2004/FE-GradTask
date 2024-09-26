import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { RADIUS_BUTTON } from '~/constants/Constants'

type Props = {
  title: string
} & ButtonProps

export const NegativeButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      unstyled
      pressStyle={{ backgroundColor: colors.gray }}
      justifyContent="center"
      paddingVertical={16}
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
