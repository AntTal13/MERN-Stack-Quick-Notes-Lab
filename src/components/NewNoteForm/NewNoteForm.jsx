import { useState } from "react";

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: "",
  });

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote({
      text: evt.target.text.value,
      createdAt: Date.now(),
    });
    setNewNote({
      text: "",
    });
  }

  return (
    <form className="NewNoteForm" onSubmit={handleAddNote}>
      <label> Note </label>
      <input
        name="text"
        type="text"
        value={newNote.text}
        onChange={(evt) => setNewNote({ text: evt.target.value })}
        required
      />
      <button type="submit"> ADD NOTE </button>
    </form>
  );
}
