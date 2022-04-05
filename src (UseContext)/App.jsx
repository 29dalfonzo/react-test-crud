import './App.css'
import { FormNotes } from './components/FormNotes'
import { ListNotes } from './components/ListNotes'
import { GlobalProvider } from './context/GlobalState'

function App() {

	return (
		<GlobalProvider>
			<div className="App">
				<FormNotes />
				<ListNotes  />
			</div>
		</GlobalProvider>
	)
}

export default App

