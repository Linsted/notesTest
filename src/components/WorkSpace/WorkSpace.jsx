import { addNote, updateNote } from "API/Api";
import { NotesContext } from "context";
import { useContext, useState, useRef, useEffect } from "react";


export const WorkSpace = () => {


    

    const {notes, selectedNote, handleTextChange, createNewNote} = useContext(NotesContext);
    const [toggleButton, setToggleButton] = useState(true);
    const textAreaRef = useRef(null);

    
    


    useEffect(() => {
  if (!toggleButton) {
    textAreaRef.current.focus();
  }
    }, [toggleButton]);
    
    

    let noteSelectedByUser;
    if (selectedNote) {
        [noteSelectedByUser] = notes.filter(note => note.id === selectedNote);
    };
    // console.log(noteSelectedByUser)

    const [noteText, setNoteText] = useState(``);

    useEffect(() => {
        setNoteText(noteSelectedByUser?.values.ddQ8kFps1ff4owWPldSCow)
    },[noteSelectedByUser])


    const handleClick = () => {
        setToggleButton(false);
        addNote();
    };
    const handleChange =  (event ) => { 
        
        setNoteText(event.currentTarget.value);
        handleTextChange(noteSelectedByUser.id, event.currentTarget.value);

    };

    const handleCreateButton = () => {

        createNewNote();
        setToggleButton(false);
    };
    



    



    return (<>
        
        <div>
            <button type="button" onClick={handleCreateButton}>Create</button>
            <button type="button" onClick={handleClick} disabled={!selectedNote}>Edit</button>

           

            <form action="">
                <textarea
                    ref={textAreaRef}
                    disabled={toggleButton}
                    onChange={handleChange}
                    value={noteText}
                />
            </form>
  
        </div>
    </>);
};



