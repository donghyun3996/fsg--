import { Link } from 'react-router-dom';
import * as S from './style'; 

function Menu(){
    return(
        <>
        <S.HeaderLayout>
            <S.HeaderContentWrapper>
                <S.LinkMenu><Link to={'/'} style={{ textDecoration: "none", color: '#4D4D4D' }}>업무내역 조회</Link></S.LinkMenu>
                <S.LinkMenu><Link to={'/Drivers'} style={{ textDecoration: "none", color: '#4D4D4D' }}>드라이버 조회</Link></S.LinkMenu>
                <S.LinkMenu><Link to={'/Dworkload'} style={{ textDecoration: "none", color: '#4D4D4D' }}>일별 업무량 조회</Link></S.LinkMenu>
            </S.HeaderContentWrapper>
          </S.HeaderLayout>
          <S.HeaderBottomBar/>
        </>
    )
}

export default Menu;