import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Input } from '@/components/ui/input'
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const DatePickerComponent = DatePicker as any

const CustomDatePicker = ({ name, initialDate }: any) => {
  const [startDate, setStartDate] = useState<Date | null>(initialDate ?? new Date())

  useEffect(() => {
    setStartDate(initialDate ?? null)
  }, [initialDate])

  const DatePickerInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => {
    return (
      <Input value={value} onClick={onClick} ref={ref} readOnly name={name} />
    )
  })

  DatePickerInput.displayName = 'DatePickerInput'

  return (<DatePickerComponent dateFormat={'dd/MM/yyyy'} selected={startDate} onChange={(date: Date | null) => setStartDate(date)} customInput={<DatePickerInput />} />)
}

export default CustomDatePicker
