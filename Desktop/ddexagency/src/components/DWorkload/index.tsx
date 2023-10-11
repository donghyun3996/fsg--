import Calendar from '../common/calendar/calendar'
import Header from '../common/header'
import Menu from '../common/menu'
import PaginationTable from '../common/table/PaginationTable'
import * as S from './style'

function DWorkload() {
  const dworkload = 'dworkload'
  return (
    <>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

      <Header />
      <Menu />
      <S.MainContentWrapper>
        <h1>일별 업무량 조회</h1>
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

        <PaginationTable pagename={dworkload} />
      </S.MainContentWrapper>
    </>
  )
}

export default DWorkload
