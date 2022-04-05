import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Note = ({note}) => {
  const { deleteNote, setEditNote } = useContext(GlobalContext)
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={()=>deleteNote(note.id)}>Delete</button>
      <button onClick={()=>setEditNote(note)}>Edit</button>
    </div>
  )
}
