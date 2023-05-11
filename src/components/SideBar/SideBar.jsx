import { ListItem } from "components/ListItem/ListItem";
import { NotesContext } from "context";
import { useContext } from "react";
import { ListStyled } from "./Sidebar.styled";


export const SideBar = () => {
    

    const {filteredNotes} = useContext(NotesContext);

  
    
    
    return (<>
        <aside>
            <ListStyled>{filteredNotes.reverse().map(note => <ListItem key={note.id} note={note} />)}</ListStyled>
        </aside>
    </>)
}

