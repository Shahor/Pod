export function addEpisode (podcastId, episode) {
	return {
		type : 'ADD_EPISODE',
		episode,
		podcastId
	}
}

export function addEpisodes (podcastId, episodes) {
	return {
		type : 'ADD_EPISODES',
		podcastId, 
		episodes
	}
}
