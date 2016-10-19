import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Store from "./stores"
import { Provider } from 'react-redux'
import { Route
    , Router
    , hashHistory
    , IndexRoute
} from "react-router"

import AppContainer from './containers/App'
import HomeContainer from './containers/Home'
import PodcastContainer from "./containers/Podcast"

ReactDOM.render(
	<Provider store={Store}>
		<Router history={hashHistory}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={HomeContainer} />
				<Route path="/podcast/:id" component={PodcastContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

window.addEventListener('beforeunload', () => {
	const state = Store.getState()

	// Save all the things
	for (let key of Object.keys(state)) {
		// window.localStorage.setItem(
		// 	key,
		// 	JSON.stringify(state[key])
		// )
	}
})
