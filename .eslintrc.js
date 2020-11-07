/**
 * See repository for list of eslint rules and config extended from @react-native-community
 * https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js
 */
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/first': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    'import/prefer-default-export': 'off',
    semi: 'off', /** handled by prettier */
  },
  settings: {
    /** required to fix false import error as react-native package uses newer import syntax */
    'import/ignore': ['react-native'], 
},
}
