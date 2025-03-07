import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Load saved notes from localStorage on first render
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState("");

  // Save Notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = () => {
    if (newNote.trim() !== "") {
      const newNotes = [...notes, { id: Date.now(), text: newNote, isEditing: false }];
      setNotes(newNotes);
      setNewNote("");
    }
  };

  // Delete Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Enable Edit Mode
  const enableEdit = (id) => {
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, isEditing: true } : note
    ));
  };

  // Save Edited Note
  const saveEdit = (id, newText) => {
    if (newText.trim() === "") return;
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, text: newText, isEditing: false } : note
    ));
  };

  // Handle Input Change for Editing
  const handleEditChange = (id, value) => {
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, text: value } : note
    ));
  };

  return (
    <div className="app">
      <h1>📝 Notes Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.isEditing ? (
              <input
                type="text"
                value={note.text}
                onChange={(e) => handleEditChange(note.id, e.target.value)}
                onBlur={(e) => saveEdit(note.id, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit(note.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => enableEdit(note.id)}>{note.text}</span>
            )}
            <div className="button-container">
              <button className="icon-btn edit" onClick={() => enableEdit(note.id)}>
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="icon-btn delete" onClick={() => deleteNote(note.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;
