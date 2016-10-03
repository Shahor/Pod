import React, { Component } from 'react';

import Header from '../../components/Header'
import Podcasts from '../../components/Podcasts'
import Episodes from '../../components/Episodes'

let Styles = {
	podContainer : {
		display : 'flex',
		height : 'calc(100% - 50px)'
	},
	main : {
		backgroundColor : 'yellow',
		flexGrow : 4
	}
}

const App = (props) => {
	return (
		<section id="main-container">
			<Header />
			
			<section className="pod-container" style={Styles.podContainer}>
				<Podcasts />

				<main style={Styles.main}>
					{props.children}
				</main>
			</section>
		</section>
	);
}

export default App;
