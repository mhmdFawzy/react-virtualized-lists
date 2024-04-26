import React from 'react'
import { TicketPriority } from '../VirtualizedTable'

const priorityClasses: Record<TicketPriority, string> = {
  Low: 'bg-blue-200 text-blue-800',
  Medium: 'bg-yellow-200 text-yellow-800',
  High: 'bg-red-200 text-red-800',
}

const Tag = ({ variant }: { variant: TicketPriority }) => {
  const classes = priorityClasses[variant]

  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${classes}`}
    >
      {variant}
    </span>
  )
}

export default Tag
