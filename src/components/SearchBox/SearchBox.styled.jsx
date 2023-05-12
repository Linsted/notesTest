import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
width: 100%; 
margin-inline: auto;
   background-color: #f5f5f5;
  display: flex; 
  justify-content: center; 
  padding: 20px 0;

`;

export const InputStyled = styled.input`
width: 50%; 
  font-size: 16px; 
  padding: 10px; 
  border-radius: 4px; 
  border: 1px solid #ccc; 
  outline: none; 

  &::placeholder{
    color: #999;
  }

  &:focus {
     border-color: #0078ff;
  }

`;