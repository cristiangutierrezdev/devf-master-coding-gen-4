import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Home from './views/Home';
import ClassComponent from './views/ClassComponent';
import FunctionalComponent from './views/FunctionalComponent';
import { FetchApi } from './views/FetchApi';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/FunctionalComponent'>
					<FunctionalComponent />
				</Route>
				<Route exact path='/ClassComponent'>
					<ClassComponent />
				</Route>
				<Route exact path='/FetchApi'>
					<FetchApi />
				</Route>
				<Redirect push to='/' />
			</Switch>
		</Router>
	);
}

export default App;
