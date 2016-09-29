const App = require('express')();
const Request = require('./request')

// Middleware for CORS
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})

const PODCAST_SEARCH = 'https://itunes.apple.com/search?limit=25&media=podcast&term=#TERM#'

App.get('/podcast', function (req, res) {
    const search = encodeURIComponent(req.query.term)

    Request.https(PODCAST_SEARCH.replace('#TERM#', search))
        .then(response => {
            res.json(JSON.parse(response));
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

App.listen(process.argv[2], function () {
    console.log(`Server is listening on port ${process.argv[2]}`)
});
