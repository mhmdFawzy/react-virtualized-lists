import React from 'react'
import { render } from '@testing-library/react'
import Tag from './Tag'

describe('Tag', () => {
  test('renders correctly with "Low" variant', () => {
    const { getByText } = render(<Tag variant="Low" />)
    const tagElement = getByText('Low')

    expect(tagElement).toBeInTheDocument()
    expect(tagElement).toHaveClass('bg-blue-200 text-blue-800')
  })

  test('renders correctly with "Medium" variant', () => {
    const { getByText } = render(<Tag variant="Medium" />)
    const tagElement = getByText('Medium')

    expect(tagElement).toBeInTheDocument()
    expect(tagElement).toHaveClass('bg-yellow-200 text-yellow-800')
  })

  test('renders correctly with "High" variant', () => {
    const { getByText } = render(<Tag variant="High" />)
    const tagElement = getByText('High')

    expect(tagElement).toBeInTheDocument()
    expect(tagElement).toHaveClass('bg-red-200 text-red-800')
  })
})
