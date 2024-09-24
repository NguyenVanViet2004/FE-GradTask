import { type ColorSchemeName } from 'react-native'

import { type Colors } from '~/interfaces/Colors'

const colors: Record<'light' | 'dark', Colors> = {
  dark: {
    blueSapphire: '#156778',
    gray: '#757575',
    lightMist: '#F0F3F6',
    primaryTeal: '#156778',
    slateGray: '#50555C',
    text: '#fff',
    white: '#fff',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
  },
  light: {
    blueSapphire: '#156778',
    gray: '#757575',
    lightMist: '#F0F3F6',
    primaryTeal: '#156778',
    slateGray: '#50555C',
    text: '#000',
    white: '#fff',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)'
  }
}

const getColors = (colorScheme: ColorSchemeName): Colors => {
  return colors[colorScheme ?? 'light']
}

export default getColors
