
import { NotesContext } from "context";
import { useContext, useState, useRef, useEffect } from "react";


export const WorkSpace = () => {


    

    const {notes, selectedNote, handleTextChange, createNewNote, deleteNoteById} = useContext(NotesContext);
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
    

    const [noteText, setNoteText] = useState(``);

    useEffect(() => {
        setNoteText(noteSelectedByUser?.noteText)
    },[noteSelectedByUser])


    const handleEditClick = () => {
        setToggleButton(false);

    };

    const handleChange =  (event ) => { 

        setNoteText(event.currentTarget.value);
        handleTextChange(noteSelectedByUser.id, event.currentTarget.value);

    };

    const handleCreateButton = () => createNewNote();
    const handleDeleteButton = () => {
        deleteNoteById(noteSelectedByUser.id);
        setNoteText('');
        setToggleButton(true);
    };



    



    return (<>
        
        <div>
            <button type="button" onClick={handleCreateButton}>Create</button>
            <button type="button" onClick={handleEditClick} disabled={!selectedNote}>Edit</button>
            <button type="button" onClick={handleDeleteButton}  disabled={!selectedNote}>Delete</button>
           

            <form>
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



