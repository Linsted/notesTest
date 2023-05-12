
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { NotesContext } from "context";
import { useContext, useState, useRef, useEffect } from "react";
import { ContainerStyled,ButtonStyled, FormStyled,TextStyled  } from "./WorkSpace.styled";


export const WorkSpace = () => {


    

    const {notes, selectedNote, handleTextChange, setSelectedNote, createNewNote, deleteNoteById} = useContext(NotesContext);
    const [toggleButton, setToggleButton] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
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

    const handleCancel = () => setShowConfirmation(false);
    const handleDelete = () => {
        setShowConfirmation(false);
        deleteNoteById(noteSelectedByUser.id);
       
        setNoteText('');
        setToggleButton(true);
        setSelectedNote(null);
    };





    const handleChange =  (event ) => { 

        setNoteText(event.currentTarget.value);
        handleTextChange(noteSelectedByUser.id, event.currentTarget.value);
        
    };

    const handleCreateButton = () => createNewNote();
  

    const props = {
        id: noteSelectedByUser?.id,
        handleCancel,
        handleDelete,
    };



    return (<>
        
        <ContainerStyled>
            <ButtonStyled type="button" onClick={handleCreateButton}>+</ButtonStyled>
            <ButtonStyled type="button" onClick={handleEditClick} disabled={!selectedNote}>Edit</ButtonStyled>
            <ButtonStyled type="button" onClick={() => setShowConfirmation(true)}  disabled={!selectedNote}>Delete</ButtonStyled>
           

            <FormStyled>
                <TextStyled
                    ref={textAreaRef}
                    disabled={toggleButton}
                    onChange={handleChange}
                    value={noteText}
                />
            </FormStyled>

            {showConfirmation && <ModalWindow {...props} />}
  
        </ContainerStyled>
    </>);
};



