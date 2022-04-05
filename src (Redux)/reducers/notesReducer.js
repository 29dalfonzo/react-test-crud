import { ADD_NOTE,EDIT_NOTE,DELETE_NOTE,SET_NOTES } from "../types";

const initialState={
  setnote:{
    id:null,
    title:'',
    content:''
  },
  notes: [
  { id: 1, title: 'Note 1', content: 'Content 1' },
  { id: 2, title: 'Note 2', content: 'Content 2' },
]
}

export default function notesReducer(state=initialState,action){
  switch(action.type){
    case ADD_NOTE:
      console.log("ADD_NOTE");
      return {
        ...state,
        notes: [...state.notes,action.payload]
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
      }
    case SET_NOTES:
      console.log("SET_EDIT_NOTE",action.payload);
      return {
        ...state,
        setnote: action.payload
      }
    default:
      return state
  }
}
