// window.localStorage.setItem('Episodes', JSON.stringify({}))
const fromStorage = window.localStorage.getItem('Episodes')
const initialState = JSON.parse(fromStorage) || {}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_EPISODE':
			return Object.assign({}, state, {
				[action.podcastId] : action.episode
			})
		case 'ADD_EPISODES':
			return Object.assign({}, state, {
				[action.podcastId] : action.episodes
			})
		default:
			return state
	}
}
