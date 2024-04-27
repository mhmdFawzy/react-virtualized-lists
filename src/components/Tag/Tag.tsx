import React from 'react'
import type { TicketPriority } from '../VirtualizedTable'
import { priorityClasses } from './config'

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
