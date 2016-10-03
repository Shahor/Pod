export function addEpisode (episode) {
	return {
		type : 'ADD_EPISODE',
		episode
	}
}

export function addEpisodes (episodes) {
	return {
		type : 'ADD_EPISODES',
		episodes
	}
}
