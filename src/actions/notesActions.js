import {ADD_NOTE,DELETE_NOTE,EDIT_NOTE,SET_NOTES} from "../types/";

export const addNote=(note)=>({
	type: ADD_NOTE,
	payload: note
})

export const deleteNote=(id)=>({
	type: DELETE_NOTE,
	payload: id
})

export const editNote=(note)=>({
	type: EDIT_NOTE,
	payload: note
})

export const setEditNote=(note)=>({
	type: SET_NOTES,
	payload: note
})
