import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Starship from '../client/components/Starship'

describe('<Starship />', () => {
  it('can find the model on the render', () => {
    render(<Starship />)
    const modelField = screen.getByText(/Model:/)
    expect(modelField).not.toBe(undefined)
  })
})

test('Clicking show details will change text to hide details', () => {
  render(<Starship />)
  const button = screen.getByText(/Show details/)
  fireEvent.click(button)
  expect(button).toBe(screen.getByText(/Hide details/))
})