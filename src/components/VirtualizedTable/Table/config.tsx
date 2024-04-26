import TableItem from '../TableItem'
import { ticketPriority, ticketStatus } from '../constants'
import { GenerateRows, TicketPriority, TicketStatus } from '../types'

const getRandomValue = <T extends typeof ticketStatus | typeof ticketPriority>(
  value: T
) => {
  const randomIndex = Math.floor(Math.random() * value.length)
  return value[randomIndex] as T extends typeof ticketStatus
    ? TicketStatus
    : TicketPriority
}

export const generateRows = ({
  renderedNodesCount,
  startIndex,
}: GenerateRows) => {
  const items: JSX.Element[] = []

  for (let i = 0; i < renderedNodesCount; i += 1) {
    const index = i + startIndex
    items.push(
      <TableItem
        index={index}
        key={crypto.randomUUID()}
        subject="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        description="Lorem Ipsum"
        status={getRandomValue(ticketStatus)}
        priority={getRandomValue(ticketPriority)}
      />
    )
  }

  return items
}
