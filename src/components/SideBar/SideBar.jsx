import { ListItem } from "components/ListItem/ListItem"

export const SideBar = ({ notes }) => {
    
    
    return (<>
        <aside>
            <ul>{notes.map(note => <ListItem key={note.id} note={note} />)}</ul>
        </aside>
    </>)
}