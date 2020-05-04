import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
function App() {
	return (
		<BrowserRouter>
			<div>
        <NavBar/>
				<Switch>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default App;
