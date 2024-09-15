import { useFonts } from 'expo-font'
import { fromPairs } from 'lodash'

const FontList = {
  JetBrains: require('~/assets/fonts/JetBrainsMono-Medium.ttf'),
  JetBrainsMonoBold: require('~/assets/fonts/JetBrainsMono-Bold.ttf'),
  JetBrainsMonoItalic: require('~/assets/fonts/JetBrainsMono-Italic.ttf'),
  JetBrainsMonoLight: require('~/assets/fonts/JetBrainsMono-Light.ttf'),
  JetBrainsMonoRegular: require('~/assets/fonts/JetBrainsMono-Regular.ttf'),
  JetBrainsMonoThin: require('~/assets/fonts/JetBrainsMono-Thin.ttf'),
  unset: require('~/assets/fonts/JetBrainsMono-Medium.ttf')
}
interface AppFontsResponse {
  fontsLoaded: boolean
  fontError: Error | null
  fonts: typeof FontList
}

export const useAppFonts = (): AppFontsResponse => {
  const [fontsLoaded, fontError] = useFonts(FontList)
  const fonts = fromPairs(
    Object.keys(FontList).map(item => [item, item])
  ) as typeof FontList
  return {
    fontError,
    fonts,
    fontsLoaded
  }
}
