import data from './Data/allpages.json'

import { Cards } from './Components/Cards';
function App() {
	console.log(data);
	return (
		<div>
			<Cards />
		</div>
	);
}

export default App;
