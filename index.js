/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { App } from './App'
import { name as appName } from './app.json'
import { StorybookUIRoot } from './storybook'

const STORYBOOK_START = true

AppRegistry.registerComponent(appName, () =>
  STORYBOOK_START ? StorybookUIRoot : App,
)
