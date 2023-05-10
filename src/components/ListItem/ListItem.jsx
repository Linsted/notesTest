import { NotesContext } from "context";
import React, { useContext } from "react";



export const ListItem = ({ note }) => {
    
    const { handleItemClick } = useContext(NotesContext);

    return (<>
        <li onClick={() => handleItemClick(note.id)}><p>{note.values.ddQ8kFps1ff4owWPldSCow}</p></li>
    </>)
};

// cLWQpdLmjnFOkdW5JcHSoT - header
// ddQ8kFps1ff4owWPldSCow - text 