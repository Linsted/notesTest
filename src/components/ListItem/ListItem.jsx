import { NotesContext } from "context";
import React, { useContext } from "react";
import { ItemStyled,HeaderStyled, TextStyled  } from "./ListItem.styled";



export const ListItem = ({ note }) => {

    // console.log(note)
    
    const { handleItemClick, selectedNote } = useContext(NotesContext);

    return (<>
        <ItemStyled isSelected={selectedNote === note.id} onClick={() => handleItemClick(note.id)}><HeaderStyled>{`${note.noteText.slice(0, 15)}...`}</HeaderStyled>
            <TextStyled>{note.noteText}</TextStyled>
        </ItemStyled>
    </>)
};

