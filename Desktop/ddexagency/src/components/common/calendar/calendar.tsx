import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect } from 'react'
import { ko } from 'date-fns/esm/locale'
import './style.css'
export const Calendar = () => {
  const [SelectedDate, setSelectedDate] = useState<Date | null>(new Date())
  useEffect(() => {
    if (SelectedDate !== null) {
      localStorage.setItem('sdate', SelectedDate.toDateString())
    } else {
      localStorage.setItem('sdate', new Date().toDateString())
    }
  }, [])
  console.log(SelectedDate)
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      selected={SelectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="datePicker"
    />
  )
}

export const ECalendar = () => {
  const [SelectedDate, setSelectedDate] = useState<Date | null>(new Date())
  console.log(SelectedDate)
  useEffect(() => {
    if (SelectedDate !== null) {
      localStorage.setItem('edate', SelectedDate.toDateString())
    } else {
      localStorage.setItem('edate', new Date().toDateString())
    }
  }, [])

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      selected={SelectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="datePicker"
    />
  )
}
