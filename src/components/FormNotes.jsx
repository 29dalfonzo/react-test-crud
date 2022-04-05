import React,{useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addNote,editNote} from '../actions/notesActions'

export const FormNotes = () => {
	const state=useSelector(state => state.notes);
	const {setnote}=state
	const dispatch=useDispatch()
  const [noteForm, setNoteForm] = useState({
    id:null,
    title: '',
    content: '',
  })

  const onSubmit = (event) => {
    event.preventDefault()
    if (noteForm.id) {
      dispatch(editNote(noteForm))
    } else {
    noteForm.id=generateId()
      dispatch(addNote(noteForm))
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
