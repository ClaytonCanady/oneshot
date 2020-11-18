import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import OneShotScreen from './Screens/OneShotScreen'
import OneShotList from './Screens/OneShotList'
import MonsterList from './Screens/MonsterList'
import MonsterScreen from './Screens/MonsterScreen'
const App = () => {
	return (
		<Router>
			<Header />
			<main className='App'>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/oneshot/:id' component={OneShotScreen} />
				<Route path='/one-shots' component={OneShotList} />
				<Route path='/monster/:id' component={MonsterScreen} />
				<Route path='/monsters' component={MonsterList} />
			</main>
			<Footer />
		</Router>
	);
};

export default App;
