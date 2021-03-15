import { theme } from '../../src/theme/theme'

declare module 'styled-components/native' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}
