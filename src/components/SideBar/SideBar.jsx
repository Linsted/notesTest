import { ListItem } from "components/ListItem/ListItem"

export const SideBar = ({ notes }) => {
    

        console.log(notes)
    const sortedNotes = notes.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    
    return (<>
        <aside>
            <ul>{sortedNotes.map(note => <ListItem key={note.id} note={note} />)}</ul>
        </aside>
    </>)
}

// cLWQpdLmjnFOkdW5JcHSoT - header
// ddQ8kFps1ff4owWPldSCow - text 