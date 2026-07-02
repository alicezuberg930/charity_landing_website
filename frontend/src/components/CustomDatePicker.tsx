import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const DatePickerComponent = DatePicker as any

const CustomDatePicker = ({ name, initialDate }: any) => {
  const [startDate, setStartDate] = useState<Date | null>(initialDate ?? new Date())

  useEffect(() => {
    setStartDate(initialDate ?? null)
  }, [initialDate])

  const CustomInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => {
    return (
      <input value={value} onClick={onClick} ref={ref} readOnly name={name}
        className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
      />
    )
  })

  return (<DatePickerComponent dateFormat={'dd/MM/yyyy'} selected={startDate} onChange={(date: Date | null) => setStartDate(date)} customInput={<CustomInput />} />)
}

export default CustomDatePicker
