import React from 'react'
import { connect } from 'react-redux'

const Styles = {
	container : {
		width: '210px',
		backgroundColor : 'cyan',
	},
	ul : {
		padding : '0px',
		margin : '10px',
		listStyle : 'none'
	},
	li : {
		display : 'inline-block',
		margin : '1px'
	}
}

const Podcasts = (props) => {
	return <nav style={Styles.container}>
		<ul style={Styles.ul}>
			{props.podcasts.map((podcast, i) => {
				return <li style={Styles.li} key={i}>
					<img src={podcast.artworkUrl60} alt="avatar" />
				</li>
			})}
		</ul>
	</nav>
}

const stateToProps = (state) => {
	return {
		podcasts : state.Podcasts
	}
}
export default connect(stateToProps, null)(Podcasts)
