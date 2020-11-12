import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
const App = () => {
	return (
		<Router>
			<Header/>
			<main className='App'>
				<h1>test</h1>
			</main>
		</Router>
	);
};

export default App;
