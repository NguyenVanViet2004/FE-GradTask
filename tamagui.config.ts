import { config as configBase } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

import { fontConfig } from '~/fonts'

const myCustomConfig = {
  ...configBase,
  fonts: {
    ...configBase.fonts,
    ...fontConfig
  }
}

export const config = createTamagui(myCustomConfig)

export default config

export type Conf = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
