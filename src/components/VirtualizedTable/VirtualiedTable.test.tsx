import { render, fireEvent } from '@testing-library/react'
import VirtualizedTable from './VirtualizedTable'
import { OVER_SCAN, TABLE_ROW_HEIGHT, WINDOW_HEIGHT } from './constants'

describe('VirtualizedTable', () => {
  test('renders without errors', () => {
    render(<VirtualizedTable numberOfRows={100} />)
  })

  test('handles scroll event and updates scrollTop', () => {
    const { container } = render(<VirtualizedTable numberOfRows={100} />)
    const div = container.firstChild as HTMLDivElement

    fireEvent.scroll(div, { target: { scrollTop: 200 } })

    expect(div.scrollTop).toBe(200)
  })

  test('renders correct rows based on scroll position', () => {
    const { container } = render(<VirtualizedTable numberOfRows={100} />)
    const table = container.firstChild as HTMLDivElement

    fireEvent.scroll(table, { target: { scrollTop: 200 } })

    // Get the rendered rows within the table body
    const tableBody = table.querySelector('tbody')
    const renderedRows = tableBody?.querySelectorAll('tr')

    // Calculate the expected range of rows based on the scroll position
    // const startIndex = Math.floor(200 / TABLE_ROW_HEIGHT) - OVER_SCAN
    const startIndex = Math.max(
      0,
      Math.floor(200 / TABLE_ROW_HEIGHT) - OVER_SCAN
    )
    const endIndex =
      startIndex + Math.floor(WINDOW_HEIGHT / TABLE_ROW_HEIGHT) + 2 * OVER_SCAN

    // Assert that the number of rendered rows matches the expected range
    expect(renderedRows?.length).toBe(endIndex - startIndex)
  })
})
