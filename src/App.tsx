import Selector from "./components/Selector/Selector";

function App() {
	return (
		<div className="App">
			<h1>Prisoner</h1>
			<Selector player={1} />
			<Selector player={2} />
		</div>
	);
}

export default App;
