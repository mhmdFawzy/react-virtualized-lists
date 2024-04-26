import React from 'react'
import { generateRows } from './config'
import { TABLE_ROW_HEIGHT } from '../constants'
import type { TableProps } from './types'

const Table = ({ startIndex, renderedNodesCount }: TableProps) => {
  return (
    <table className="table-auto w-full">
      <thead
        className="sticky bg-white z-10"
        style={{
          top: `-${startIndex * TABLE_ROW_HEIGHT}px`,
        }}
      >
        <tr>
          <th className="border px-4 py-2">-</th>
          <th className="border px-4 py-2">Subject</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Priority</th>
        </tr>
      </thead>
      <tbody>{generateRows({ renderedNodesCount, startIndex })}</tbody>
    </table>
  )
}

export default Table
