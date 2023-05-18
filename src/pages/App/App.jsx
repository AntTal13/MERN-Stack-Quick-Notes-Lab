import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteList from '../../components/NoteList';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([
  ])
  const [showNotes, setShowNotes] = useState(true);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  return (
    <main>
      { user ?
          <>
            <div>
            <NavBar user={user} setUser={setUser} />
            <h1>Notes</h1>
            {showNotes && <NoteList notes={notes} user={user} />}
            <hr />
            <NewNoteForm addNote={addNote} />
            </div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
