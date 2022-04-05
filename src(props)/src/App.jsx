import React,{useState} from 'react'
import './App.css'
import { FormNotes } from './components/FormNotes'
import { ListNotes } from './components/ListNotes'

function App() {
  const [notes, setNotes] = useState(dataNotes)
  const [note, setNote] = useState({
    id: '',
    title: '',
    content: ''
  })

  const addNote = (noteIn) =>{
    let findedNote = notes.find(noteFinded => noteFinded.id === noteIn.id)
    console.log(findedNote,noteIn);
    if (findedNote) {
      //edit
      console.log('edit');
      setNotes(notes.map(note => noteIn.id === note.id ? noteIn : note))
      
    } else {
      //new
      console.log('new');
      setNotes(prevNotes =>{
        return [...prevNotes, noteIn]
      })
    }
  }

  const deleteNote = (id) =>{
    setNotes(prevNotes =>{
      return prevNotes.filter(note => note.id !== id)
    })
  }

  const setEditNote = (id) =>{
    let finded= notes.find(note => note.id === id)
    setNote(finded)
  }

  return (
    <div className="App">
      <FormNotes addNote={addNote} setEditNote={setEditNote} note={note} />
      <ListNotes notes={notes} deleteNote={deleteNote} setEditNote={setEditNote} />
    </div>
  )
}

export default App


export const dataNotes = [
  { id: 1, title: 'Note 1', content: 'Content 1' },
  { id: 2, title: 'Note 2', content: 'Content 2' },
  { id: 3, title: 'Note 3', content: 'Content 3' },
]