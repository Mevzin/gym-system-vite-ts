import styled from 'styled-components';

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Line = styled.div`
  height: 1px;
  width: 40%;
  background-color: #fcfcfc;
`;

export const ButtonGoogleAuth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  margin-top: 15px;
  transition: 0.3s;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  &:hover{
    background-color: gray;
  }
`;