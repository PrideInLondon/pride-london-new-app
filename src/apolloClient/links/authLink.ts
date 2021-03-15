// https://www.apollographql.com/docs/link/links/context/
import { setContext } from '@apollo/client/link/context'
import Config from 'react-native-config'

export const authLink = setContext(async (operation, { headers }) => {
  const token = Config.CONTENTFUL_ACCESS_TOKEN

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : null,
      ...headers,
    },
  }
})
