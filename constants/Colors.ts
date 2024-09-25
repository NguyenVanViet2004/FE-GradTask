import { type ColorSchemeName } from 'react-native'

import { type Colors } from '~/interfaces/Colors'

const colors: Record<'light' | 'dark', Colors> = {
  dark: {
    backGround: '#141B3D',
    blueSapphire: '#156778',
    gray: '#757575',
    inputBackground: '#1C2655',
    lightMist: '#1C2655',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    primaryTeal: '#156778',
    slateGray: '#50555C',
    text: '#fff',
    white: '#FFFFFF'
  },
  light: {
    backGround: '#FFFFFF',
    blueSapphire: '#156778',
    gray: '#757575',
    inputBackground: '#FFFFFF',
    lightMist: '#F0F3F6',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    primaryTeal: '#156778',
    slateGray: '#50555C',
    text: '#000',
    white: '#FFFFFF'
  }
}

const getColors = (colorScheme: ColorSchemeName): Colors => {
  return colors[colorScheme ?? 'light']
}

export default getColors
