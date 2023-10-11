import { useCallback, useState } from "react";
import * as S from './style';
import { useNavigate } from "react-router-dom";

function SignIn(){

    const [ID, setID] = useState("")
    const [PW, setPW] = useState("")

    const IDOnChange = useCallback((e:any) => {
        setID(e.target.value)
    }, [])

    const PASSOnChange = useCallback((e:any) => {
        setPW(e.target.value)
    }, [])

    interface User {
        ID: String,
        password: String,
        
      }

    const users: User[] = [
        {
          ID: "leedonghun@gmail.com",
          password: "ehdgus?39",
        },
        {
          ID: "leedonghun3996@gmail.com",
          password: "ehdgus?39",
        }
      ];
    const navigate = useNavigate();
    const onSubmit = async () =>{
      if(await login(ID,PW) === undefined){
        console.log("no");
      }else{
        return navigate("/");
      }
        
        
    } ;

    const login = async (ID: String, password: String) => {
        const user: User | undefined = users.find((user: User) => {
          return user.ID === ID && user.password === password;
        });
        console.log(user);
        return user;
        
      };


return(
<>
<S.CenterAlignmentLayout>
  <S.InputWrapper>
    <S.InputBox type="text" placeholder="아이디" onChange={IDOnChange}/>
  </S.InputWrapper>

  <S.InputWrapper>
    <S.InputBox type="password" placeholder="비밀번호" onChange={PASSOnChange}/>
  </S.InputWrapper>
    
  
    <S.Button onClick={onSubmit}>로그인</S.Button>
    </S.CenterAlignmentLayout>
</>
);

}

export default SignIn;