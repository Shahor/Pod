// window.localStorage.setItem('Podcasts', JSON.stringify([]))
const fromStorage = window.localStorage.getItem('Podcasts')
const initialState = JSON.parse(fromStorage) || []

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SUBSCRIBE':
			return state.concat(action.podcast)
		case 'ADD_PODCASTS':
			return state.concat(action.podcasts)
		default:
			return state
	}
}
