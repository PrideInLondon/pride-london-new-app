import React from 'react'
import { render } from './utils/testing'
import { App } from './App'

test('it should render the app', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('app-body')).toBeDefined()
})
