import * as S from './style'

const onClick = (cell: any) => {
  const openWin = window.open(
    '/Detail',
    'pop01',
    'width=700, height=700,fullscreen=no'
  )

  localStorage.setItem('cellItem', JSON.stringify(cell.item))
  localStorage.setItem('cellCustomer', JSON.stringify(cell.customer))
  localStorage.setItem('cellDate', JSON.stringify(cell.date))
}

export const COLUMNS = [
  {
    Header: '영수증번호',
    accessor: 'item',
  },
  {
    Header: '배송상태',
    accessor: 'action',
  },
  {
    Header: '드라이버명',
    accessor: 'name',
  },
  {
    Header: '매장명',
    accessor: 'storeName',
  },
  {
    Header: '출발지',
    accessor: 'depart',
  },
  {
    Header: '도착지',
    accessor: 'arrival',
  },
  {
    Header: '날짜',
    accessor: 'date',
  },

  {
    Header: '출발시간',
    accessor: 'depart_time',
  },

  {
    Header: '도착시간',
    accessor: 'arrival_time',
  },

  {
    Header: '요금',
    accessor: 'charge',
  },

  {
    Header: '고객명',
    accessor: 'customer',
  },

  {
    Header: '상자수',
    accessor: 'box',
  },

  {
    Header: '팩수',
    accessor: 'pack',
  },

  {
    Header: '기타수',
    accessor: 'etc',
  },
  {
    Header: '상새정보',
    accessor: 'information',
    Cell: function (props: any) {
      const rowData = props.row.original

      return <S.infoBtn onClick={() => onClick(rowData)}>상세정보</S.infoBtn>
    },
  },
]
