import React from 'react'
import { connect } from 'react-redux'

let Styles = {
	backgroundColor : 'yellow',
	flexGrow : 4
}

const Episodes = (props) => {
	return <main style={Styles}>
		<ul>
			{props.episodes.map((episode, i) => {
				return <li key={i}>
					{episode}
				</li>
			})}
		</ul>
	</main>
}


const stateToProps = (state) => {
	return {
		episodes : state.Episodes
	}
}
export default connect(stateToProps, null)(Episodes)
