const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    // var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({'text':'asdasd'}));
        res.end();
    }
     else if (reqUrl.pathname == '/login' && req.method === 'POST') {

        // service.testRequest(req, res);
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(req);
        // res.write(JSON.stringify(req.body));
        res.end();

    } else {
        // url not found
        res.write('url not found');
        res.end();
    }
});