import { type UIEventHandler, useState } from 'react'
import { TABLE_ROW_HEIGHT, OVER_SCAN, WINDOW_HEIGHT } from './constants'
import type { VirtualizedTableProps } from './types'
import Table from './Table'

const VirtualizedTable = ({ numberOfRows }: VirtualizedTableProps) => {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / TABLE_ROW_HEIGHT) - OVER_SCAN
  )

  let renderedNodesCount =
    Math.floor(WINDOW_HEIGHT / TABLE_ROW_HEIGHT) + 2 * OVER_SCAN
  renderedNodesCount = Math.min(numberOfRows - startIndex, renderedNodesCount)

  /**
   * Handle scroll event and update scrollTop state
   *
   * @param {UIEvent<HTMLDivElement>} event - scroll event
   */
  const handleScroll: UIEventHandler<HTMLDivElement> = (event) => {
    // Update scrollTop state based on the current scroll position
    setScrollTop(event.currentTarget.scrollTop)
  }

  return (
    <div
      className="overflow-y-scroll w-full border-2 border-black"
      // CAN'T GENERATE DYNAMIC CLASSNAMES USING TAILWIND
      // https://github.com/tailwindlabs/tailwindcss/discussions/10114
      style={{ height: `${WINDOW_HEIGHT}px` }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: `${numberOfRows * TABLE_ROW_HEIGHT}px`,
        }}
      >
        <div
          style={{
            transform: `translateY(${startIndex * TABLE_ROW_HEIGHT}px)`,
          }}
        >
          <Table
            renderedNodesCount={renderedNodesCount}
            startIndex={startIndex}
          />
        </div>
      </div>
    </div>
  )
}

export default VirtualizedTable
