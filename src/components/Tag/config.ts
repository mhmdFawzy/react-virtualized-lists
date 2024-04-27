import type { TicketPriority } from '../VirtualizedTable'

export const priorityClasses: Record<TicketPriority, string> = {
  Low: 'bg-blue-200 text-blue-800',
  Medium: 'bg-yellow-200 text-yellow-800',
  High: 'bg-red-200 text-red-800',
}
