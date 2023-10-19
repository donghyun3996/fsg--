import { useCallback, useState } from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { SignInApi } from '../../../api/auth'
import { AgencyDrivers } from '../../../api/agencyDrivers'
function SignIn() {
  const [ID, setID] = useState('')
  const [PW, setPW] = useState('')
  const [accessToken, getToken] = useState('')

  const IDOnChange = useCallback((e: any) => {
    setID(e.target.value)
  }, [])

  const PASSOnChange = useCallback((e: any) => {
    setPW(e.target.value)
  }, [])

  const navigate = useNavigate()
  const onClick = async () => {
    await SignInApi(ID, PW)

    return navigate('/')
  }

  return (
    <>
      <S.CenterAlignmentLayout>
        <h1>다다익스</h1>
        <S.InputWrapper>
          <S.InputBox type="text" placeholder="아이디" onChange={IDOnChange} />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputBox
            type="password"
            placeholder="비밀번호"
            onChange={PASSOnChange}
          />
        </S.InputWrapper>

        <S.Button onClick={onClick}>로그인</S.Button>
      </S.CenterAlignmentLayout>
    </>
  )
}

export default SignIn
