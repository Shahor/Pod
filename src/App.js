import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Podcasts from './components/Podcasts'
import Episodes from './components/Episodes'

let Styles = {
	podContainer : {
		display : 'flex',
		height : 'calc(100% - 50px)'
	}
}

class App extends Component {
	render() {
		return (
			<section id="main-container">
				<Header />
				<section className="pod-container" style={Styles.podContainer}>
					<Podcasts />
					<Episodes />
				</section>
			</section>
		);
	}
}

export default App;
