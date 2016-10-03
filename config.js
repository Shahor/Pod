module.exports = {
    server : {
        method : 'http',
        host : 'localhost',
        port : 4242
    },
    podcasts : {
        searchUrl : 'https://itunes.apple.com/search',
        params : {
            limit : 25,
            media : 'podcast'
        }
    }
}
