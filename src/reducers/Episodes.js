const initialState = [
    'ep1',
    'ep2'
]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EPISODE':
            return state.concat(action.episode)
        case 'ADD_EPISODES':
            return state.concat(action.episodes)
        default:
            return state
    }
}
