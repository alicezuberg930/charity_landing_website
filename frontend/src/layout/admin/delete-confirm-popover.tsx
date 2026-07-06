import { memo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger
} from '@/components/ui/popover'

type DeleteConfirmPopoverProps = {
  onConfirm: () => void
}

const DeleteConfirmPopover = ({ onConfirm }: DeleteConfirmPopoverProps) => {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirm()
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='bg-main-color p-3 rounded-lg' title='Xóa' type='button'>
        <Trash2 size={16} color='#fff' />
      </PopoverTrigger>
      <PopoverContent align='end' className='w-72 bg-white text-gray-900'>
        <PopoverHeader>
          <PopoverTitle>Bạn có chắc chắn không?</PopoverTitle>
          <PopoverDescription>
            Bạn sẽ không thể đảo ngược hành động
          </PopoverDescription>
        </PopoverHeader>
        <div className='flex justify-end gap-2'>
          <button
            type='button'
            className='rounded-md border border-gray-300 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100'
            onClick={() => setOpen(false)}
          >
            Hủy
          </button>
          <button
            type='button'
            className='rounded-md bg-main-color px-3 py-1.5 font-medium text-white'
            onClick={handleConfirm}
          >
            Xóa
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default memo(DeleteConfirmPopover)