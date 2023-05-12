import { NotesContext } from "context";
import { useContext } from "react";
import { HeaderStyled, InputStyled } from "./SearchBox.styled";

export const SearchBox = () => {
  

    const {searchTerm, handleSearchChange } = useContext(NotesContext);

  return (
    <HeaderStyled>
      <InputStyled
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </HeaderStyled>);
};