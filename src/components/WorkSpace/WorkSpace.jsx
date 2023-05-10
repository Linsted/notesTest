import { NotesContext } from "context";
import { useContext, useState, useRef } from "react";

export const WorkSpace = () => {


    const {notes, selectedNote} = useContext(NotesContext);
    const [toggleButton, setToggleButton] = useState(true);
    const textAreaRef = useRef(null);
    

   
    

   const handleClick = () => {
  setToggleButton(!toggleButton);
       if (!toggleButton) {
      console.log(textAreaRef.current.focus())
    textAreaRef.current.focus();
  }
};

    let noteSelectedByUser;
    if (selectedNote) {
        [noteSelectedByUser] = notes.filter(note => note.id === selectedNote);
    }


    
    const handleChange = () =>{}
    // console.log(notes);
    return (<>
        
        <div>
            <button onClick={handleClick} disabled={!selectedNote}>Edit</button>
            <textarea
                ref={textAreaRef}
            disabled={toggleButton}
            onChange={handleChange}
        defaultValue={ selectedNote === null ? `` : noteSelectedByUser.values.ddQ8kFps1ff4owWPldSCow}
        >
            
        </textarea>
        </div>
    </>)
};