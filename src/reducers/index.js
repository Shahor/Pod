import { combineReducers } from 'redux'

import Podcasts from './Podcasts'
import Episodes from './Episodes'
import Player from './Player'

export default combineReducers({
	Podcasts,
	Episodes,
	Player
})
