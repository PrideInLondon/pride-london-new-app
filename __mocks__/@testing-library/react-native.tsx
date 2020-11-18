import React, { ReactElement } from 'react'
import { RenderOptions } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../theme/theme'

const lib = jest.requireActual('@testing-library/react-native')

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
const { render } = lib
const customRender = (ui: ReactElement<any>, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options })

// jest won't pick up the mock unless its module.exports syntax instead of export default.
module.exports = {
  ...lib,
  render: customRender,
}
