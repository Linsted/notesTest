import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
width: 670px;


/* display: flex;
  flex-direction: column; */
  /* align-items: flex-start; */
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

&:hover {
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
width: 96%;
  height: 900px;
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