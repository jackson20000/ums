const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config/config')
const db = require('../config/db');

exports.login = (req, res) => {
    
    db.query(`select * from users where username="${req.body.username}" limit 1`, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'internal server error' });
        } else {
            if(result.length == 1){
                bcrypt.compare(req.body.password, result[0].password, function(err, response) {
                    if(err){
                        res.status(500).json({ error: 'internal server error' });
                    }
                    if(response){
                        let token = jwt.sign({ username: req.body.username, type: result[0].type},
                            config.secret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }
                        );
                        res.status(200).json({
                            success: true,
                            message: 'Authentication successful!',
                            token: token
                        });
                    }else{
                        res.status(200).json({
                            success: false,
                            message: 'Authentication failed!'
                        });
                    }
                });
            }else{
                res.status(200).json({
                    success: false,
                    message: 'Authentication failed!'
                });
            }
        }
    });

};