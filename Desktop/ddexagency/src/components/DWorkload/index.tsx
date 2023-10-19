import { useState } from 'react'
import { Calendar, ECalendar } from '../common/calendar/calendar'
import Header from '../common/header'
import Menu from '../common/menu'
import PaginationTable from '../common/table/PaginationTable'
import * as S from './style'
import { Store } from '../../api/store'
import { AgencyTotal } from '../../api/agencyTotal'
import { useEffect } from 'react'
import { AgencyDeli } from '../../api/agencyDeli'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './dateStyle.css'
function DWorkload() {
  const [SelectedSDate, setSelectedSDate] = useState<Date | null>(new Date())
  const [SelectedEDate, setSelectedEDate] = useState<Date | null>(new Date())
  useEffect(() => {
    AgencyDeli(SelectedSDate, SelectedEDate)
  }, [])

  const ss = () => {
    AgencyDeli(SelectedSDate, SelectedEDate)
  }
  const dworkload = 'dworkload'
  const stores = Store()
  const storeName =
    stores && stores.map((store: any) => <option>{store.label}</option>)
  AgencyTotal()
  return (
    <>
      <S.MainPageLayout>
        <Header />
        <Menu />
        <S.MainContentWrapper>
          <S.agencyH1>일별 업무량 조회</S.agencyH1>
          <S.InputWrapper>
            <h3>매장명</h3>
            <S.storeSelect>{storeName}</S.storeSelect>
          </S.InputWrapper>
          <S.InputWrapper>
            <h3>시작일</h3>
            <DatePicker
              dateFormat="yyyy-MM-dd" // 날짜 형태
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              selected={SelectedSDate}
              onChange={(date) => setSelectedSDate(date)}
              className="datePicker"
              onCalendarClose={ss}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <h3>종료일</h3>
            <DatePicker
              dateFormat="yyyy-MM-dd" // 날짜 형태
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              selected={SelectedEDate}
              onChange={(date) => setSelectedEDate(date)}
              className="datePicker"
              onCalendarClose={ss}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <h3>agency</h3>
            <S.agenchInput
              readOnly
              placeholder="로지웨이주식회사"
            ></S.agenchInput>
          </S.InputWrapper>
          <PaginationTable pagename={dworkload} sd={''} ed={''} />
        </S.MainContentWrapper>
      </S.MainPageLayout>
    </>
  )
}

export default DWorkload
