require('dotenv').config()
const { getIntrospectionQuery } = require('graphql')

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

module.exports = {
  schema: [
    {
      [url]: {
        headers: {
          Authorization: 'Bearer ' + process.env.CONTENTFUL_ACCESS_TOKEN,
          method: 'POST',
        },
        body: {
          query: getIntrospectionQuery(),
          operationName: 'IntrospectionQuery',
          variables: null,
        },
      },
    },
  ],
  // documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/apolloClient/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
}
