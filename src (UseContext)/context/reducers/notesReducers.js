import { notesTypes } from "../actions/notesActions";

export function notesReducer(state,action){
  switch(action.type){
    case notesTypes.ADD_NOTE:
      console.log("ADD_NOTE");
      return {
        ...state,
        notes: [...state.notes,action.payload]
      }
    case notesTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case notesTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
      }
    case notesTypes.SET_EDIT_NOTE:
      console.log("SET_EDIT_NOTE",action.payload);
      return {
        ...state,
        setnote: action.payload
      }
    default:
      return state
  }
}