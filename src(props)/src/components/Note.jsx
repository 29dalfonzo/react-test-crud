import React from 'react'

export const Note = ({note,deleteNote,setEditNote}) => {
  return (
    <div >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={()=>deleteNote(note.id)}>Delete</button>
      <button onClick={()=>setEditNote(note.id)}>Edit</button>

    </div>
  )
}
