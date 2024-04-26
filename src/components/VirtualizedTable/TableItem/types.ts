import type { TicketPriority, TicketStatus } from '../types'

export type ListItemProps = {
  index: number
  subject: string
  priority: TicketPriority
  description: string
  status: TicketStatus
}
