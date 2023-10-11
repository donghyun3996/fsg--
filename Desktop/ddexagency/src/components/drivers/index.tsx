import Calendar from '../common/calendar/calendar'
import Header from '../common/header'
import Menu from '../common/menu'
import PaginationTable from '../common/table/PaginationTable'
import * as S from './style'

function Drivers() {
  const drivers = 'drivers'
  return (
    <>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

      <Header />
      <Menu />
      <S.MainContentWrapper>
        <h1>드라이버 조회</h1>
        <S.InputWrapper>
          <h3>매장명</h3>
          <select>
            <option>adf</option>
            <option>adf</option>
            <option>adf</option>
          </select>
        </S.InputWrapper>
        <S.InputWrapper>
          <h3>시작일</h3>
          <Calendar />
        </S.InputWrapper>
        <S.InputWrapper>
          <h3>종료일</h3>
          <Calendar />
        </S.InputWrapper>

        <PaginationTable pagename={drivers} />
      </S.MainContentWrapper>
    </>
  )
}

export default Drivers
