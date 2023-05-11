import { addNote, deleteNote, fetchNotes, updateNote } from "API/Api";
import { NotesContext } from "context";
import { useEffect, useState } from "react";
import { WorkSpace } from "./WorkSpace/WorkSpace";
import { SideBar } from "./SideBar/SideBar";
import { debounce } from 'lodash';
import { SearchBox } from "./SearchBox/SearchBox";
import { ContainerStyled, ContainerSideStyled } from "./App.styled";





export const App = () => {


  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


 useEffect(() => {getNotes()}, []);

  const handleItemClick = (id) => {setSelectedNote(id)};
  
  const handleTextChange = debounce(async (id, text) => {
    await updateNote({id, text});
    getNotes();
  }, 3000);

  const createNewNote = async () => {
    await addNote();
    await getNotes();
  };



  const getNotes = async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNoteById = async (id) => {

    await deleteNote(id);
    await getNotes();

  }; 

    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

   const filteredNotes = notes.filter(note =>
    note.noteText.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
 
const contextValue = { filteredNotes, searchTerm, handleSearchChange, notes, deleteNoteById, handleItemClick, selectedNote, handleTextChange, createNewNote }
  

  return (
    <NotesContext.Provider value={contextValue}>
      <ContainerStyled>
        
          <SearchBox />
        
         <ContainerSideStyled >
        <SideBar />
        <WorkSpace />
        </ContainerSideStyled>
        </ContainerStyled>
    </NotesContext.Provider>
  );
};
