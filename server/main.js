const App = require('express')();
const Request = require('./request')
const Config = require('../config')

// Middleware for CORS
App.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
})

const getSearchURL = (term) => {
	const { searchUrl, params } = Config.podcasts
	const mixedParams = Object.assign({}, params, { term })

	const url = Object.keys(mixedParams).reduce((acc, key) => {
		return acc + `${key}=${mixedParams[key]}&`
	}, searchUrl + '?')

	return Promise.resolve(url)
}

App.get('/podcast', (req, res) => {
	const term = encodeURIComponent(req.query.term)

	getSearchURL(term)
		.then(Request.https)
		.then(response => {
			res.json(JSON.parse(response));
		})
		.catch(error => {
			console.error( error)
			res.status(500).json(error)
		})
});

App.get('/episodes', (req, res) => {
	const X2JS = require('x2js')
	const Url = require('url')
	const { href, protocol } = Url.parse(req.query.url)
	const method = /https/.test(protocol) ? 'https' : 'http'

	Request[method](href)
		.then(response => {
			let p = new X2JS()
			return p.xml2js(response)
		})
		.then(episodes => {
			return episodes.rss.channel.item.map(episode => {
				console.log(episode)
				const {
					title,
					pubDate,
					link,
					enclosure
				} = episode

				return {
					title,
					pubDate,
					link,
					enclosure
				}
			})
		})
		.then(episodes => {
			res.json(episodes)
		})
})

App.listen(Config.server.port, () => {
	console.log(`Server is listening on port ${Config.server.port}`)
});
