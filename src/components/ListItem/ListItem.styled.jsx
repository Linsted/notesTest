import styled from '@emotion/styled';

export const ItemStyled = styled.li`

    @media (max-width: 480px) {
    padding: 5px;
}

    padding: 10px;
  border-bottom: 1px solid #ccc; 
  cursor: pointer; 
background-color: ${props => props.isSelected ? '#f0f0f0' : 'transparent'};
    &:hover{
         background-color: #f0f0f0;
    }
`;


export const HeaderStyled = styled.p`
font-size: 18px; 
  font-weight: bold; 
  margin-bottom: 10px; 

`;


export const TextStyled = styled.p`
font-size: 14px; 
  color: #666; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

`;