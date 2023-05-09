import { fetchNotes } from "API/Api";
import { NotesContext } from "context";
import { useEffect, useState } from "react";
import { WorkSpace } from "./WorkSpace/WorkSpace";
import { SideBar } from "./SideBar/SideBar";




export const App = () => {


  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);


  const handleItemClick = (id) => {
    
    setSelectedNote(id);
    
  };



  useEffect(() => {
    
    const getNotes = async () => {
      try {
        const data = await fetchNotes();
  
        setNotes(data)
      } catch (error) {
        console.log(error)
      }
    
    }
    getNotes()

  }, []);

  

  return (
    <NotesContext.Provider value={{ notes, handleItemClick, selectedNote }}>
      <SideBar notes={notes} />
    <WorkSpace />
    </NotesContext.Provider>
  );
};
