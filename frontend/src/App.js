import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
const App = () => {
	return (
		<Router>
			<Header/>
			<main className='App'>
				<Route path='/' component={Home} exact />
			</main>
			<Footer/>
		</Router>
	);
};

export default App;
