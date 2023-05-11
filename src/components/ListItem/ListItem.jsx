import { NotesContext } from "context";
import React, { useContext } from "react";



export const ListItem = ({ note }) => {

    // console.log(note)
    
    const { handleItemClick } = useContext(NotesContext);

    return (<>
        <li onClick={() => handleItemClick(note.id)}><p>{note.noteText}</p></li>
    </>)
};

