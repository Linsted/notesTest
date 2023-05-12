import styled from '@emotion/styled';

export const ContainerStyled = styled.div`

  @media (max-width: 480px) {
     width: 290px;
}

 @media (max-width: 480px) {
    
}

width: 670px;



  padding: 20px;
  background-color: #fff;
  color: #333;
`;


export const ButtonStyled = styled.button`
font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
   &:not(:last-child) {
    margin-right: 10px;
  }

&:hover,&:focus {
  background-color: #e5e5e5;
}
&:disabled {
  background-color: #f5f5f5;
  color: #aaa;
  cursor: not-allowed;
}
`;

export const FormStyled = styled.form`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

export const TextStyled = styled.textarea`

  @media (max-width: 480px) {
    height: 400px;
}

width: 96%;
  height: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
  resize: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
 
   outline: none;
  border-color: #0078ff;
  }

  &::placeholder {
  color: #aaa;
}

&:disabled {
  background-color: #eee;
  color: #aaa;
}
`;