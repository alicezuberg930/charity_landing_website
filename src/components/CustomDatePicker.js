import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const CustomDatePicker = ({ name }) => {
  const [startDate, setStartDate] = useState(new Date())

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <input
        value={value}
        onClick={onClick}
        ref={ref}
        readOnly
        name={name}
        className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
      />
    )
  })

  return (
    <DatePicker
      dateFormat={'dd/MM/YYYY'}
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
    />
  )
}

export default CustomDatePicker
