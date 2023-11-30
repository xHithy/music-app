import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Upload from "./screens/Upload";
import Statistics from "./screens/Statistics";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/upload'
					element={<Upload />}
				/>
				<Route
					path='/statistics'
					element={<Statistics />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
