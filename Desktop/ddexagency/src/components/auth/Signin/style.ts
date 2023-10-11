import styled from '@emotion/styled'




export const InputBox = styled.input`
  width: 15.5vw;
  min-width: 266px;
  height: 40px;
  border-radius: 8px;
  color: black;
  padding-left: 16px;
  border: #EE3939;
  background: #E5F1FF;

  ::placeholder {
    color: #black;
  }
`;

export const InputWrapper = styled.div`
  width: 16.5vw;
  min-width: 284px;
  display: flex;
  flex-direction: column;
  margin-top: 2.08vh;
`;

export const CenterAlignmentLayout = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0000;
`;

export const Button = styled.button`
  width: 16.5vw;
  min-width: 255px;
  height: 40px;
  background: #0075ff;
  border-radius: 8px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 7.5vh;

  &:hover {
    border: 1px solid #0075ff;
    border-radius: 10px;
    color: #0075ff;
    background: none;
    box-sizing: border-box;
  }
`;