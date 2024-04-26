import { ticketPriority, ticketStatus } from './constants'

export type VirtualizedTableProps = {
  numberOfRows: number
  numberOfColumns?: number
}

export type GenerateRows = {
  renderedNodesCount: number
  startIndex: number
  numberOfItems?: number
  ITEM_HEIGHT?: number
}

export type TicketPriority = (typeof ticketPriority)[number]
export type TicketStatus = (typeof ticketStatus)[number]
