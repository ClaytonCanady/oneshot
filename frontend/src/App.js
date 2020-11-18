import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import OneShotScreen from './Screens/OneShotScreen'
import OneShotList from './Screens/OneShotList'
import oneShots from './oneShots';
const App = () => {
	return (
		<Router>
			<Header />
			<main className='App'>
				<Route path='/' component={HomeScreen} exact oneShots={oneShots} />
				<Route
					path='/oneshot/:id'
					component={OneShotScreen}
					oneShots={oneShots}
				/>
				<Route path='/one-shots' component={OneShotList} oneShots={oneShots} />
			</main>
			<Footer />
		</Router>
	);
};

export default App;
