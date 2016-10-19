import React from 'react';

import Header from '../../components/Header'
import Podcasts from '../../components/Podcasts'
import Player from "../../components/Player"

let Styles = {
	podContainer : {
		display : 'flex',
		height : 'calc(100% - 150px)'
	},
	main : {
		flexGrow : 4,
		backgroundColor : 'yellow',
		padding : '10px',
		overflow : 'auto'
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

			<Player />
		</section>
	);
}

export default App;
