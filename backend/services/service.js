const db = require('../config/db');
const jwt = require('jsonwebtoken');
const { parse } = require('querystring');
const config = require('../config/config');
var bcrypt = require('bcrypt');

module.exports.login = (req, res) => {

    collectRequestData(req, (result) => {
        if (result.username && result.password) {

            db.query(`select * from users where username="${result.username}" and password="${result.password}" limit 1`, (error, result) => {
                if (error) {
                    console.log(error);
                    res.writeHead(500);
                    res.write(JSON.stringify({ err: 'Internal server error' }));
                    res.end();
                }
                else {
                    if(result.length == 1){
                        let token = jwt.sign({username: result.username},
                            config.secret,
                            { expiresIn: '24h' // expires in 24 hours
                            }
                          );
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({
                            success: true,
                            message: 'Authentication successful!',
                            token: token
                        }));
                        res.end();
                    } else{
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({
                            success: false,
                            message: 'Authentication failed!'
                        }));
                        res.end();
                    }
                }
            });
        }
    });
};

module.exports.register = (req,res) => {
    collectRequestData(req, result => {
        
    });
}

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';

    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}