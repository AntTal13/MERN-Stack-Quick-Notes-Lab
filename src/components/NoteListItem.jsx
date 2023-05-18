export default function NoteListItem({ note, index }) {
    let date = new Date(note.createdAt).toLocaleDateString()
    return (
      <div className="NoteListItem">
        <p>{date}</p>
        <p>{note.text}</p>
      </div>
    );
  }
  