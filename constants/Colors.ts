import { type ColorSchemeName } from 'react-native'

import { type Colors } from '~/interfaces/Colors'

const colors: Record<'light' | 'dark', Colors> = {
  dark: {
    blueSapphire: '#156778',
    gray: '#757575',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    text: '#fff',
    white: '#FFFFFF'
  },
  light: {
    blueSapphire: '#156778',
    gray: '#757575',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    text: '#000',
    white: '#FFFFFF'
  }
}

const getColors = (colorScheme: ColorSchemeName): Colors => {
  return colors[colorScheme ?? 'light']
}

export default getColors
