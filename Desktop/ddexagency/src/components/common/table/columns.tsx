import path from 'path'

const onClick = (cell: any) => {
  const openWin = window.open(
    '/Detail',
    'pop01',
    'width=700, height=700,fullscreen=no'
  )
}

export const COLUMNS = [
  {
    Header: '영수증번호',
    accessor: 'id',
  },
  {
    Header: '배송상태',
    accessor: 'delivery_status',
  },
  {
    Header: '드라이버명',
    accessor: 'driver_name',
  },
  {
    Header: '매장명',
    accessor: 'store_name',
  },
  {
    Header: '출발지',
    accessor: 'start',
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
    Header: '상새정보',
    accessor: 'information',
    Cell: function (props: any) {
      const rowData = props.row

      return <button onClick={() => onClick(rowData)}>상세정보</button>
    },
  },
]
