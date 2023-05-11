import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
width: 100%; 
margin-inline: auto;
   background-color: #f5f5f5;
  display: flex; /* використовує flexbox для вирівнювання елементів */
  justify-content: center; /* вирівнює поле пошуку по центру */
  padding: 20px 0;

`;

export const InputStyled = styled.input`
width: 50%; /* ширина поля пошуку - 50% від ширини хедера */
  font-size: 16px; /* розмір шрифту в полі пошуку */
  padding: 10px; /* відступи всередині поля пошуку */
  border-radius: 4px; /* закруглені кути поля пошуку */
  border: 1px solid #ccc; /* сірий контур навколо поля пошуку */
  outline: none; 

  &::placeholder{
    color: #999;
  }

  &:focus {
     border-color: #0078ff;
  }

`;