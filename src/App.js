import { Cards } from './Components/Cards';
function App() {

	function randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
	}
	
	
console.log(randomDate(new Date(2019, 0, 1), new Date()));
	return (
		<div>
			<Cards />
		</div>
	);
}

export default App;
