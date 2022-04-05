import React from 'react'
import { Note } from './Note'

export const ListNotes = ({notes, deleteNote, setEditNote}) => {
  return (
    <div>
        {notes.map(note => (
          <Note key={note.id} note={note}  deleteNote={deleteNote} setEditNote={setEditNote} />
        ))}
    </div>
  )
}
