import React, { ReactElement } from 'react'
import { render } from '@testing-library/react-native'

// TODO: Add context providers such as ThemeProvider from styled components when styled system is setup.
const Providers: React.FC = ({ children }) => <>{children}</>

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
