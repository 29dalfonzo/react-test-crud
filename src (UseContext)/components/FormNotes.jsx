import React,{useState,useEffect, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const FormNotes = () => {
  const {addNote,setnote, editNote } = useContext(GlobalContext)
  const [noteForm, setNoteForm] = useState({
    id:null,
    title: '',
    content: '',
  })

  const onSubmit = (event) => {
    event.preventDefault()
    if (noteForm.id) {
      editNote(noteForm)
    } else {
    noteForm.id=generateId()
      addNote(noteForm)
    console.log('Form submitted', noteForm)
    }
    setNoteForm({
      id:null,
      title: '',
      content: ''
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNoteForm(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
   })
  }

  
  const generateId = () => {
    return Math.floor(Math.random() * 100000000)
  }

  useEffect(() => {
    if(setnote.id){
      setNoteForm(setnote)
    }
  
  }, [setnote])
  


  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Title" name='title' value={noteForm.title}  onChange={handleChange} />
      <input type="text" placeholder="Content" name='content' value={noteForm.content} onChange={(e)=>handleChange(e)} />
      <button >{noteForm.id?'Edit':'Add'}</button>
    </form>
  )
}
