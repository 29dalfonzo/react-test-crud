import { useDispatch } from 'react-redux';
import {setEditNote,deleteNote} from '../actions/notesActions'

export const Note = ({note}) => {
	const dispatch= useDispatch()

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={()=>dispatch(deleteNote(note.id))}>Delete</button>
      <button onClick={()=>dispatch(setEditNote(note))}>Edit</button>
    </div>
  )
}
