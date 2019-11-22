const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    // var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/login' && req.method === 'POST') {

        // service.sampleRequest(req, res);
    }
    //  else if (reqUrl.pathname == '/test' && req.method === 'POST') {

    //     // service.testRequest(req, res);

    // } else {
    //     // service.invalidRequest(req, res);

    // }
});