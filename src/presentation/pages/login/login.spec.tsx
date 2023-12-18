import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should not render spinner and error on start', () => {
    render(<Login />)
  })
})
