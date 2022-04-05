import React, {createContext, useReducer} from 'react';
import { notesReducer } from './reducers/notesReducers';
import { notesTypes } from "./actions/notesActions";

export const notesInitialState = {
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

//create context
export const GlobalContext = createContext(notesInitialState);


//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, notesInitialState);

  function addNote(note) {
    console.log(note);
    dispatch({
      type: notesTypes.ADD_NOTE,
      payload: note
    });
  }

  function deleteNote(id) {
    dispatch({
      type: notesTypes.DELETE_NOTE,
      payload: id
    });
  }

  function editNote(note) {
    dispatch({
      type: notesTypes.EDIT_NOTE,
      payload: note
    });

  }

  function setEditNote(note){
    dispatch({
      type: notesTypes.SET_EDIT_NOTE,
      payload: note
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        notes: state.notes,
        setnote: state.setnote,
        addNote,
        deleteNote,
        editNote,
        setEditNote
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}