import styled from '@emotion/styled'

export const MainPageLayout = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background: #e5f1ff;
  @media screen and {
    width: 100vw;
  }
`

export const MainContentWrapper = styled.div`
  background: white;
  width: 98%;
  margin-left: 1vw;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const InputWrapper = styled.div`
  display: inline-block;
  margin-left: 2vw;
`
export const storeSelect = styled.select`
  width: 14vw;
  height: 3.2vh;
  border-radius: 8px;
  border: 1px solid #0075ff;
`

export const agencyH1 = styled.h2`
  padding-top: 2vh;
  padding-left: 2vw;
`
export const agenchInput = styled.input`
  width: 14vw;
  height: 3vh;
  border-radius: 8px;
  border: 1px solid #0075ff;
`
