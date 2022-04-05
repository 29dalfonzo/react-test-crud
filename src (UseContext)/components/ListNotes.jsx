import React,{ useContext} from 'react'
import { Note } from './Note'
import {GlobalContext} from '../context/GlobalState';

export const ListNotes = () => {
  const { notes } = useContext(GlobalContext)


  return (
    <div>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
    </div>
  )
}
