import TableItem from '../TableItem'
import { ticketPriority, ticketStatus } from '../constants'
import { GenerateRows, TicketPriority, TicketStatus } from '../types'

/**
+ * Gets a random value from an array of values.
+ *
+ * @template T - Type of the array. Must be typeof ticketStatus or typeof ticketPriority.
+ *
+ * @param value - Array of values to get a random value from.
+ *
+ * @returns Random value from the array. If T is typeof ticketStatus, returns TicketStatus.
+ * If T is typeof ticketPriority, returns TicketPriority.
+ */
const getRandomValue = <T extends typeof ticketStatus | typeof ticketPriority>(
  value: T
) => {
  const randomIndex = Math.floor(Math.random() * value.length)
  return value[randomIndex] as T extends typeof ticketStatus
    ? TicketStatus
    : TicketPriority
}

/**
+ * Generates rows of a table to be rendered.
+ * @param renderedNodesCount - number of rows to be generated
+ * @param startIndex - the first index of the rows that will be rendered
+ * @returns JSX.Element[] - table rows
+ */
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
