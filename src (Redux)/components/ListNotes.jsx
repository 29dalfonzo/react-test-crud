import { Note } from './Note'
import { useSelector } from 'react-redux';

export const ListNotes = () => {
	const state=useSelector(state => state.notes);
	const {notes}=state


	return (
		<div>
			{notes.map(note => (
				<Note key={note.id} note={note} />
			))}
		</div>
	)
}
