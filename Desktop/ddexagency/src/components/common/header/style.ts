import styled from '@emotion/styled'

export const HeaderLayout = styled.header`
  width: 100%;
  height: 45px;
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
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1050px) {
    width: 100vw;
  }
`

export const loginBtn = styled.button`
  width: 4vw;
  height: 2.5vh;
  border-radius: 8px;
  border: 1px solid #0075ff;
  background: #0075ff;
  color: white;

  &:hover {
    border: 1px solid #0075ff;
    border-radius: 8px;
    color: #0075ff;
    background: none;
    box-sizing: border-box;
  }
`

export const logoutBtn = styled.button`
  width: 4vw;
  height: 2.5vh;
  border-radius: 8px;
  border: 1px solid #0075ff;
  background: #0075ff;
  color: white;

  &:hover {
    border: 1px solid #0075ff;
    border-radius: 8px;
    color: #0075ff;
    background: none;
    box-sizing: border-box;
  }
`
