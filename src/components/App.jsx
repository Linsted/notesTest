import { addNote, deleteNote, fetchNotes, updateNote } from "API/Api";
import { NotesContext } from "context";
import { useEffect, useState } from "react";
import { WorkSpace } from "./WorkSpace/WorkSpace";
import { SideBar } from "./SideBar/SideBar";
import { debounce } from 'lodash';
import { SearchBox } from "./SearchBox/SearchBox";
import { ContainerStyled, ContainerSideStyled } from "./App.styled";
import toast, { Toaster } from 'react-hot-toast';






export const App = () => {

  const errorText = 'Sorry, there is a problem with the server or internet connection. Please, contact to your administrator!';
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


 useEffect(() => {getNotes()}, []);

  const handleItemClick = (id) => {setSelectedNote(id)};
  
  const handleTextChange = debounce(async (id, text) => {
    try {
    await updateNote({ id, text });
    toast.success('Your changes saved!', {duration: 1500});
      getNotes();
       } catch (error) {
      toast.error(errorText, {duration: 5000});
    }
  }, 2000);

  const createNewNote = async () => {
    try {
    await addNote();
      await getNotes();
      toast.success('Note created!', {duration: 1500});
       } catch (error) {
      toast.error(errorText, { duration: 5000 });
    }
  };



  const getNotes = async () => {
    try {
      const data = await fetchNotes();
      if (data === null) {
        toast.error(errorText, { duration: 5000 });
        console.error("Data is null");
        return;
      }
      setNotes(data);
    } catch (error) {
      toast.error(errorText, {duration: 5000});
    }
  };

  const deleteNoteById = async (id) => {
    try {
      await deleteNote(id);
      toast.error('Note deleted!', {duration: 1500});
      await getNotes();
    } catch (error) {
      toast.error(errorText, { duration: 5000 });
    }
  };

    const handleSearchChange = (event) => {setSearchTerm(event.target.value)};

   const filteredNotes = notes.filter(note =>
    note.noteText.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
 
  const contextValue = {
    errorText, filteredNotes, searchTerm,
    handleSearchChange, notes, deleteNoteById,
    handleItemClick, selectedNote, handleTextChange,
    setSelectedNote, createNewNote
  };
  

  return (
    <NotesContext.Provider value={contextValue}>
      <ContainerStyled>
          <SearchBox />
         <ContainerSideStyled >
        <SideBar />
        <WorkSpace />
        </ContainerSideStyled>
        <Toaster />
      </ContainerStyled>
    </NotesContext.Provider>
  );
};
