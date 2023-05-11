import styled from '@emotion/styled';


export const ModalStyled = styled.div`
     position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ModalContentStyled = styled.div`
   background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalTextStyled = styled.p`
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const ModalButtonStyled = styled.button`
   background-color: #dc3545; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  padding: 8px 20px; 
  cursor: pointer; 
  transition: background-color 0.3s ease;
  &:nth-last-of-type(2){
    margin-right: 8px;
  }

  &:hover {
  background-color: #c82333; 
}
`;