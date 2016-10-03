import React from 'react'
import { connect } from 'react-redux'

const Styles = {
	backgroundColor : 'cyan',
	flexGrow : 1
}

const Podcasts = (props) => {
	return <nav style={Styles}>
		<ul>
			{props.podcasts.map((podcast, i) => {
				return <li key={i}>
					{podcast}
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
