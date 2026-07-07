import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { type RequestLog } from '@/@types/log'
import { useDeleteLogHook } from '@/hooks/log.hook'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

type LogsDeleteDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: RequestLog
}

export const LogsDeleteDialog = ({
  open,
  onOpenChange,
  currentRow,
}: LogsDeleteDialogProps) => {
  const [value, setValue] = useState('')
  const remove = useDeleteLogHook()
  const confirmValue = currentRow.path || currentRow._id
  const isConfirmed = value.trim() === confirmValue

  const handleDelete = () => {
    if (!isConfirmed) return

    remove.mutate(
      { id: currentRow._id },
      {
        onSuccess() {
          setValue('')
          onOpenChange(false)
        },
      }
    )
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        if (!state) setValue('')
        onOpenChange(state)
      }}
    >
      <DialogContent>
        <DialogHeader className='text-start'>
          <DialogTitle className='text-destructive'>
            <AlertTriangle className='me-1 inline-block stroke-destructive' size={18} />
            Xoa log
          </DialogTitle>
          <DialogDescription>
            Thao tac nay se xoa vinh vien log da chon.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          <p>
            Nhap lai duong dan{' '}
            <span className='font-semibold'>{confirmValue}</span> de xac nhan.
          </p>
          <Field>
            <FieldLabel>Duong dan</FieldLabel>
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder='Nhap duong dan de xac nhan'
            />
          </Field>
          <Alert variant='destructive'>
            <AlertTitle>Canh bao</AlertTitle>
            <AlertDescription>
              Log da xoa khong the khoi phuc.
            </AlertDescription>
          </Alert>
        </div>
        <DialogFooter>
          <Button
            type='button'
            variant='destructive'
            disabled={!isConfirmed || remove.isPending}
            onClick={handleDelete}
          >
            {remove.isPending ? 'Dang xoa...' : 'Xoa'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
