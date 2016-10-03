import React from 'react'

import { connect } from 'react-redux'
import { subscribe } from '../../actions/podcasts'

const Styles = {
	section : {
		display : 'block',
		position: 'absolute',
		top : '35px',
		backgroundColor : 'red',
		maxHeight : '300px',
		overflow: 'auto'
	},
	ul : {
		margin: '0px',
		padding : '10px',
		listStyle : 'none',
		// maxHeight : '300px',
		// overflow: 'auto'
	},
	li : {
		borderBottom: 'black solid 1px',
		cursor : 'pointer',
		height: '40px',
		lineHeight : '40px',

		maxWidth: '400px',
		whiteSpace: 'nowrap',
		overflow : 'hidden',
		textOverflow : 'ellipsis'
	},
	avatar : {
		verticalAlign : 'middle',
		marginRight: '10px'
	}
}

const Search = (props) => {
	const onClick = (podcast) => {
		props.onSubscribe(podcast)
		props.onClose()
	}

	let sectionStyles = Object.assign({}, Styles.section, {
		display : props.results.length ? 'block' : 'none'
	})

	return <section className="pod-searchresults" style={sectionStyles}>
		<input type="button" onClick={props.onClose} value="Close" />
		<ul style={Styles.ul}>
			{props.results.map((podcast, index) => {
				return <li key={index} style={Styles.li}
					onClick={onClick.bind(null, podcast)}
				>
					<img src={podcast.artworkUrl30}
						alt="podcast"
						style={Styles.avatar}
					/>
					<span title={podcast.trackName}>
						{podcast.trackName}
					</span>
				</li>
			})}
		</ul>
	</section>
}

const stateToProps = (state) => {
	return {
		podcasts : state.Podcasts
	}
}

const actions = (dispatch) => {
	return {
		onSubscribe : (podcast) => {
			return dispatch(subscribe(podcast))
		}
	}
}
export default connect(stateToProps, actions)(Search)
