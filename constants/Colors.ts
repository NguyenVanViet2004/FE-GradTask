import { type ColorSchemeName } from 'react-native'

import { type Colors } from '~/interfaces/Colors'

const colors: Record<'light' | 'dark', Colors> = {
  dark: {
    black: '#000000',
    blueSapphire: '#156778',
    gray: '#757575',
    inputBackground: '#1C2655',
    labelButton: '#000000',
    lightMist: '#1C2655',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    midnightGlow: '#141B3D',
    oceanMist: '#F4E5E5',
    oceanTeal: '#21A7C3',
    placeholderColor: '#ADB3BC',
    skyLight: '#3548A3',
    text: '#fff',
    white: '#FFFFFF'
  },
  light: {
    black: '#000000',
    blueSapphire: '#156778',
    gray: '#757575',
    inputBackground: '#FFFFFF',
    labelButton: '#156778',
    lightMist: '#F0F3F6',
    lightTransparentBlack: 'rgba(0, 0, 0, 0.3)',
    midnightGlow: '#FFFFFF',
    oceanMist: '#50555C',
    oceanTeal: '#156778',
    placeholderColor: '#ADB3BC',
    skyLight: '#FFFFFF',
    text: '#000',
    white: '#FFFFFF'
  }
}

const getColors = (colorScheme: ColorSchemeName): Colors => {
  return colors[colorScheme ?? 'light']
}

export default getColors
