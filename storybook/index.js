// if you use expo remove this line
import React from 'react'
import { AppRegistry } from 'react-native'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from '../theme/theme'
import { loadStories } from './storyLoader'
import './rn-addons'

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

// enables knobs for all stories
addDecorator(withKnobs)
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CenterView>{story()}</CenterView>
  </ThemeProvider>
))

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

// export default StorybookUIRoot
