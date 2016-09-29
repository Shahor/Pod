const doQuery = (module, url) => {
    return new Promise((resolve, reject) => {
        module.get(url, (res) => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk
            });

            res.on('end', () => {
                resolve(data)
            })
        }).on('error', (e) => {
            reject(e)
        });
    })
}

exports.http = (url) => {
    const Http = require('http')

    return doQuery(Http, url)
}

exports.https = (url) => {
    const Https = require('https')

    return doQuery(Https, url)
}
