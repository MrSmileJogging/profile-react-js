import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
export default App;
