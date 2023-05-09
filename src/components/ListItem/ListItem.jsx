import { NotesContext } from "context";
import React, { useContext } from "react";



export const ListItem = ({ note }) => {
    
    const { handleItemClick } = useContext(NotesContext);

    return (<>
        <li onClick={() => handleItemClick(note.id)}>{note.values.cLWQpdLmjnFOkdW5JcHSoT}</li>
    </>)
};