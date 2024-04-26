import Tag from '../../Tag/Tag'
import { TABLE_ROW_HEIGHT } from '../constants'
import type { ListItemProps } from './types'

const TableItem = ({
  index,
  subject,
  priority,
  description,
  status,
}: ListItemProps) => {
  return (
    <tr
      style={{
        height: `${TABLE_ROW_HEIGHT}px`,
        backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
      }}
      className="text-center w-full"
    >
      <td className="border px-4 py-2">{index + 1}</td>
      <td className="border px-4 py-2">{subject}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">{status}</td>
      <td className="border px-4 py-2">
        <Tag variant={priority} />
      </td>
    </tr>
  )
}

export default TableItem
