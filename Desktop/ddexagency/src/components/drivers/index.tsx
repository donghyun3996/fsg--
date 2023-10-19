import { AgencyDrivers } from '../../api/agencyDrivers'
import { useState } from 'react'
import Header from '../common/header'
import Menu from '../common/menu'
import PaginationTable from '../common/table/PaginationTable'
import * as S from './style'

export function Drivers() {
  const drivers = 'drivers'
  AgencyDrivers()
  return (
    <>
      <S.MainPageLayout>
        <Header />
        <Menu />
        <S.MainContentWrapper>
          <S.agencyH1>드라이버 조회</S.agencyH1>
          <S.InputWrapper>
            <h3>agency</h3>
            <S.agenchInput
              readOnly
              placeholder="로지웨이주식회사"
            ></S.agenchInput>
          </S.InputWrapper>
          <PaginationTable pagename={drivers} sd={''} />
        </S.MainContentWrapper>
      </S.MainPageLayout>
    </>
  )
}
