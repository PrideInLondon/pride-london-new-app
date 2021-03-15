import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components/native'
import { client } from '../../apolloClient/config'
import { theme } from '../../theme/theme'

export const Providers: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  )
}
