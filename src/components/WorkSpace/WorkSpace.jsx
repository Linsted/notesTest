import { NotesContext } from "context";
import { useContext } from "react";

export const WorkSpace = () => {


    const {notes, selectedNote} = useContext(NotesContext);

   

    let noteSelectedByUser;
    if (selectedNote) {
        [noteSelectedByUser] = notes.filter(note => note.id === selectedNote)
    }


    
    const handleChange = () =>{}
    // console.log(notes);
    return (<>
        
        <textarea
            
            onChange={handleChange()}
        defaultValue={ selectedNote === null ? `` : noteSelectedByUser.values.ddQ8kFps1ff4owWPldSCow}
        >
            
        </textarea>

    </>)
};