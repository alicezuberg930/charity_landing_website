import { type ColumnDef } from '@tanstack/react-table'
import { type Post } from '@/@types/post'
import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/data-table'
import { DataTableRowActions } from './data-table-row-actions'

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const normalizeDateFilterValue = (value: unknown) => {
  const raw = String(value ?? '').trim()
  if (!raw) return ''

  const dateParts = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
  if (dateParts) {
    const [, day, month, year] = dateParts
    return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
  }

  const date = new Date(raw)
  if (Number.isNaN(date.getTime())) return raw.toLowerCase()

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${day}-${month}-${date.getFullYear()}`
}

const formatDateTime = (value?: string) => {
  if (!value) return '-'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString('vi-VN')
}

export const postsColumns: ColumnDef<Post>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tiêu đề' />,
    cell: ({ row }) => (
      <div className='max-w-64 line-clamp-3 font-medium'>
        {row.original.title}
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Mô tả' />,
    cell: ({ row }) => (
      <div className='max-w-80 line-clamp-3 text-muted-foreground'>
        {stripHtml(row.original.description)}
      </div>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày' />,
    cell: ({ row }) => <span className='whitespace-nowrap'>{row.original.date}</span>,
    filterFn: (row, id, value) =>
      normalizeDateFilterValue(row.getValue(id)) ===
      normalizeDateFilterValue(value),
  },
  {
    accessorKey: 'category',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Loại' />,
    cell: ({ row }) => (
      <Badge variant='outline' className='whitespace-nowrap'>
        {row.original.category}
      </Badge>
    ),
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: 'cover',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ảnh bìa' />,
    cell: ({ row }) => (
      <div className='h-20 w-28 overflow-hidden rounded-md border bg-muted'>
        <img
          src={row.original.cover}
          alt={row.original.title}
          className='h-full w-full object-cover'
        />
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày tạo' />,
    cell: ({ row }) => (
      <span className='whitespace-nowrap'>{formatDateTime(row.original.createdAt)}</span>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày cập nhật' />,
    cell: ({ row }) => (
      <span className='whitespace-nowrap'>{formatDateTime(row.original.updatedAt)}</span>
    ),
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
    enableHiding: false,
    enableSorting: false,
  },
]
