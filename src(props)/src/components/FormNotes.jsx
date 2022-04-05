import React,{useState,useEffect} from 'react'

export const FormNotes = ({addNote, note}) => {
  const [noteForm, setNoteForm] = useState({
    id:null,
    title: '',
    content: '',
  })

  const onSubmit = (event) => {
    event.preventDefault()
    noteForm.id=noteForm.id?noteForm.id:generateId()
    console.log('Form submitted', noteForm)
    addNote(noteForm)
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
    if(note.id){
      setNoteForm(note)
    }
  
  }, [note])
  


  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Title" name='title' value={noteForm.title}  onChange={handleChange} />
      <input type="text" placeholder="Content" name='content' value={noteForm.content} onChange={(e)=>handleChange(e)} />
      <button >{noteForm.id?'Edit':'Add'}</button>
    </form>
  )
}
