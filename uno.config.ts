import presetIcons from '@unocss/preset-icons'
import presetWind4 from '@unocss/preset-wind4'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind4({
      preflight: {
        reset: true,
      },
    }),
  ],
})
