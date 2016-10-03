import React from 'react'
import { connect } from 'react-redux'

import { addEpisodes } from "../../actions/episodes"

import Config from "../../../config"

const getPodcast = (podcasts, trackId) => {
	return podcasts.find(podcast => {
		return podcast.trackId === trackId
	})
}

const getEpisodes = (episodes, podcast, addEpisodes) => {
	if (!episodes[podcast.trackId]) {
		const { method, host, port } = Config.server

		// TODO : There's probably a better way to do this :)
		fetch(`${method}://${host}:${port}/episodes?url=${podcast.feedUrl}`)
			.then(reponse => {
				return reponse.json()
			})
			.then(episodes => {
				addEpisodes(podcast.trackId, episodes)
			})

		return {}
	}

	return episodes[podcast.trackId]
}

const PodcastContainer = (props) => {
	const podcastId = parseInt(props.params.id, 10)
	const podcast = getPodcast(props.podcasts, podcastId)
	const episodes = getEpisodes(props.episodes, podcast, props.addEpisodes)

	if (!Object.keys(episodes).length) {
		return <section>
			Loading...
		</section>
	}

	return <section>
		<img src={podcast.artworkUrl600} width={300} alt="Cover" />

		<ul>
			{episodes.map((episode, index) => {
				return <li key={index}>
					<span>{episode.title}</span>
					{/* <audio src={episode.enclosure._url} controls></audio> */}
				</li>
			})}
		</ul>
	</section>
}

const props = (state) => {
	return {
		podcasts : state.Podcasts,
		episodes : state.Episodes
	}
}

const actions = (dispatch) => {
	return {
		addEpisodes : (...args) => {
			return dispatch(addEpisodes(...args))
		}
	}
}

export default connect(props, actions)(PodcastContainer)
