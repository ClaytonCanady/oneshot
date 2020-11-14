import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import OneShotScreen from './Screens/OneShotScreen'
const App = () => {
	return (
		<Router>
			<Header />
			<main className='App'>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/oneshot/:id' component={OneShotScreen}/>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
