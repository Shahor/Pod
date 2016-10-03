const initialState = [
	'pod1',
	'pod2'
]

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PODCAST':
			return state.concat(action.podcast)
		case 'ADD_PODCASTS':
			return state.concat(action.podcasts)
		default:
			return state
	}
}
