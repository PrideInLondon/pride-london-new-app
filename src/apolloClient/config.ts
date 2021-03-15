import { ApolloClient, ApolloLink } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { errorLink } from './links/errorLink'
import { authLink } from './links/authLink'

export const cache = new InMemoryCache()
// Compose and export your instance of Apollo Client
export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, authLink]),
  cache,
  resolvers: {},
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
    watchQuery: {
      // https://github.com/apollographql/apollo-client/issues/6833#issuecomment-679446789
      nextFetchPolicy(lastFetchPolicy) {
        if (
          lastFetchPolicy === 'cache-and-network' ||
          lastFetchPolicy === 'network-only'
        ) {
          return 'cache-first'
        }
        return lastFetchPolicy
      },
    },
  },
})
