import { Link, useNavigate } from 'react-router-dom'
import * as S from './style'
import { AgencyDrivers } from '../../../api/agencyDrivers'

function Header() {
  let loginState = true
  if (window.localStorage.getItem('token') === null) {
    loginState = false
  }
  const navigate = useNavigate()
  const logOut = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('drivers')
    window.localStorage.removeItem('main')
    window.localStorage.removeItem('deli')
    return navigate('/')
  }

  return (
    <>
      <S.HeaderLayout>
        <S.HeaderContentWrapper>
          agency
          <Link to={'/SignIn'}>
            <S.loginBtn hidden={loginState}>로그인</S.loginBtn>
          </Link>
          <S.logoutBtn hidden={!loginState} onClick={logOut}>
            로그아웃
          </S.logoutBtn>
        </S.HeaderContentWrapper>
      </S.HeaderLayout>
      <S.HeaderBottomBar />
    </>
  )
}

export default Header
