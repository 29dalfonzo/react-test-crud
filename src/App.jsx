import { Provider } from 'react-redux'
import './App.css'
import { FormNotes } from './components/FormNotes'
import { ListNotes } from './components/ListNotes'
import store from "./store";

function App() {

	return (
		<Provider store={store}>
			<div className="App">
				<FormNotes />
				<ListNotes  />
			</div>
		</Provider>
	)
}

export default App

