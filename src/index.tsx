import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/globals.css';

import { Collection } from './pages/Collection';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/collection" component={Collection} />
			</Switch>
		</Router>
	);
}

render(<App />, document.getElementById('root'));
