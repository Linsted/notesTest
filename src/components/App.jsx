import { addNote, deleteNote, fetchNotes, updateNote } from "API/Api";
import { NotesContext } from "context";
import { useEffect, useState } from "react";
import { WorkSpace } from "./WorkSpace/WorkSpace";
import { SideBar } from "./SideBar/SideBar";
import { debounce } from 'lodash';





export const App = () => {


  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);


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
    // console.log(id)
    await deleteNote(id);
    await getNotes();

  }; 

 

  

  return (
    <NotesContext.Provider value={{ notes, deleteNoteById, handleItemClick, selectedNote, handleTextChange, createNewNote }}>
      <SideBar />
      <WorkSpace />
    </NotesContext.Provider>
  );
};
