import { addNote, fetchNotes, updateNote } from "API/Api";
import { NotesContext } from "context";
import { useEffect, useState } from "react";
import { WorkSpace } from "./WorkSpace/WorkSpace";
import { SideBar } from "./SideBar/SideBar";
import { debounce } from 'lodash';





export const App = () => {


  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);


  const handleItemClick = (id) => { setSelectedNote(id) };
  
  const handleTextChange = debounce(async (id, text) => {
    await updateNote({id, text});
    getNotes();
  }, 1000);

  const createNewNote = async () => {

    
    await addNote();
    getNotes();
    handleItemClick(notes[0].id)

  }



  const getNotes = async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };


 useEffect(() => {
    getNotes();
  }, []);

  

  return (
    <NotesContext.Provider value={{ notes, handleItemClick, selectedNote, handleTextChange, createNewNote }}>
      <SideBar notes={notes} />
    <WorkSpace />
    </NotesContext.Provider>
  );
};
