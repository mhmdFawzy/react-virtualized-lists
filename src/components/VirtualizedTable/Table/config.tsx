import TableItem from '../TableItem'
import { ticketPriority, ticketStatus } from '../constants'
import { GenerateRows, TicketPriority, TicketStatus } from '../types'

export function getRandomValue(value: typeof ticketPriority): TicketPriority
export function getRandomValue(value: typeof ticketStatus): TicketStatus
/**
 * Returns a random value from the provided array.
 * @param value - array of values
 * @returns a random value from the provided array
 */
export function getRandomValue(
  value: typeof ticketPriority | typeof ticketStatus
): TicketPriority | TicketStatus {
  // Generate a random index based on the length of the array
  const randomIndex = Math.floor(Math.random() * value.length)

  // Return a value at the generated index
  return value[randomIndex]
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
