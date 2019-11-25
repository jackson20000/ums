const bcrypt = require("bcrypt");
const config = require('../config/config')
const db = require('../config/db');

exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 15, function (err, hash) {
        if (err) {
            res.status(401).res({ err: 'internal server error' })
        } else {
            req.body.password = hash;
            db.query('INSERT INTO users SET ?', req.body, function (err, result) {
                if (err) {
                    res.status(401).res({ err: 'internal server error' })
                } else {
                    console.log(result);
                    res.status(200).json({ success: true });
                }
            });
        }
    });

}