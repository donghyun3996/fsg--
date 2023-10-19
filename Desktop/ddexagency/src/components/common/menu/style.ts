import styled from '@emotion/styled'

export const HeaderLayout = styled.header`
  width: 100vw;
  height: 40px;
  background: white;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderBottomBar = styled.div`
  background: #cdd5df;
  width: 100vw;
  height: 1px;
  z-index: 999;
  margin-left: calc(-50vw + 50%);
`

export const HeaderContentWrapper = styled.div`
  width: 98vw;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`

export const LinkMenu = styled.p`
  margin-left: 1vw;

  font-size: 14px;
`
