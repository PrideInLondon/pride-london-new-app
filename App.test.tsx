import React from 'react'
import { render } from '@testing-library/react-native'
import styled from 'styled-components/native'
import { App } from './App'

const Test = styled.View`
  background-color: ${({ theme }) => theme.colors.indigo};
`

test('it should be able to render components that require the themeprovider', () => {
  const { getByTestId } = render(<Test testID="styled-component" />)
  expect(getByTestId('styled-component')).toBeDefined()
})

test('it should render the app', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('app-body')).toBeDefined()
})
