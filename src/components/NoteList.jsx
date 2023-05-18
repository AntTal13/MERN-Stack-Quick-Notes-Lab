import NoteListItem from "./NoteListItem";

export default function NoteList({ notes }) {
    let noteListItem
    if (notes.length > 0) {
        noteListItem = notes.map((n, idx) => (
            <NoteListItem note={n} key={idx} />
        ));
    } else noteListItem = <h1>No Notes Yet!</h1>
  
    return (
        <div className="NoteList">
            {noteListItem}
        </div>
    );
}
