import React, { type PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'
import { LinearGradient } from 'tamagui/linear-gradient'

import getColors from '~/constants/Colors'

type GradientBackgroundProps = PropsWithChildren<Record<string, unknown>>

const LinearGradientBackground: React.FC<GradientBackgroundProps> = (
  { children }
) => {
  const colors = getColors(useColorScheme())

  return (
    <LinearGradient
      colors={[colors.midnightGlow, colors.skyLight]}
      flex={1}>
      {children}
    </LinearGradient>
  )
}

export default LinearGradientBackground
