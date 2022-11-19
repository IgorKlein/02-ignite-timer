import 'styled-components/'
import { defaultTheme } from '../styles/themes/default'

// This file contains an overwriting of typing on Typescript.

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
