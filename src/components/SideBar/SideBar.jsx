import { ListItem } from "components/ListItem/ListItem";
import { NotesContext } from "context";
import { useContext } from "react";


export const SideBar = () => {
    

    const {notes} = useContext(NotesContext);

    console.log(notes)
    // const sortedNotes = notes.sort((a, b) => b.date - a.date)
    
    return (<>
        <aside>
            <ul>{notes.map(note => <ListItem key={note.id} note={note} />)}</ul>
        </aside>
    </>)
}

