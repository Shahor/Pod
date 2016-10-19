const initialState = {
	loading : false,
	play : false,
	pause : false,
	stop : false,
	url : '',
	duration : 0,
	current : 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD':
			return Object.assign({}, state, {
				loading : true,
				url : action.url
			})
		case 'PLAY':
			return Object.assign({}, state, {
				play : true,
				pause : false,
				loading : false
			})
		case 'PAUSE':
			return Object.assign({}, state, {
				pause : true
			})
		case 'STOP':
			return Object.assign({}, state, {
				play: false,
				pause : false,
				stop : true,
			})
		default:
			return state
	}
}
