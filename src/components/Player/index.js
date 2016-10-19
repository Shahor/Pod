import React from 'react'
import { connect } from 'react-redux'

import { play, pause, stop } from '../../actions/player'

const Styles = {
	height : '100px'
}

const audio = new Audio()
audio.volume = 1

const isPlaying = (props) => {
	console.log("Plop")
	const text = props.pause ? 'Play' : 'Pause'
	const method = props.pause ? 'play' : 'pause'

	return <div>
		<input type="button" value={text} onClick={() => {
			props[method]()
		}} />
		<input type="button" value="Stop" onClick={() => {
			props.stop()
		}} />
	</div>
}

const isLoading = (props) => {
	audio.src = props.url

	const cb = () => {
		props.play()
		audio.removeEventListener('canplaythrough', cb)
	}
	audio.addEventListener('canplaythrough', cb)
	return "Loading"
}

const Player = (props) => {
	const gonnaPlay = audio.paused && !props.play
	const gonnaPause = !audio.paused && props.pause
	const gonnaStop = !audio.paused && !props.stop

	debugger
	if (gonnaPlay) {
		// audio.play()
	}

	if (gonnaPause) {
		audio.pause()
	}

	if (gonnaStop) {
		audio.stop()
	}

	return <section style={Styles} className="pod-player">
		{props.loading && isLoading(props)}
		{props.play && isPlaying(props)}
	</section>
}

const stateToProps = (state) => {
	return state.Player
}

const actions = (dispatch) => {
	return {
		play : (...args) => {
			return dispatch(play())
		},
		pause : (...args) => {
			return dispatch(pause())
		},
		stop : (...args) => {
			return dispatch(stop())
		}
	}
}

export default connect(stateToProps, actions)(Player)
