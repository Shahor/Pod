import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Styles = {
	nav : {
		width: '225px',
		minWidth: '225px',
		backgroundColor : 'cyan',
		padding : '10px',
		overflow : 'auto'
	},
	ul : {
		padding : '0px',
		margin : '0px',
		listStyle : 'none',
		width : '100%',

		display : 'flex',
		flexWrap : 'wrap',
		justifyContent : 'center'
	},
	li : {
		display : 'inline-block',
		margin : '1px'
	},
	avatar : {
		cursor : 'pointer'
	}
}

const Podcasts = (props) => {
	return <nav style={Styles.nav}>
		<ul style={Styles.ul}>
			{props.podcasts.map((podcast, i) => {
				return <li style={Styles.li} key={i}>
					<Link to={`/podcast/${podcast.trackId}`}>
						<img src={podcast.artworkUrl60} alt="avatar" />
					</Link>
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
