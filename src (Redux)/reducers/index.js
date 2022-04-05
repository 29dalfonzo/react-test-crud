import { combineReducers } from "redux";
import notesReducer from "./notesReducer";

const reducer = combineReducers({
	notes: notesReducer,
	// reducers
});


export default reducer;
