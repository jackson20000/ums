const db = require('../config/db');

module.exports.users = (req,res) => {
    db.query('select username,fname,lname,dob,id from users where type != 0 order by id asc',(error, result)=>{
        if(error){
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
        }
        res.status(200).json(result);
    })
}

module.exports.user = (req,res) => {
    db.query(`select username,fname,lname,dob,id,type from users where type != 0 and id=${req.params.id}`,(error, result)=>{
        if(error){
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
        }
        res.status(200).json(result);
    })
}

module.exports.userUpdate = (req,res) => {
    db.query(`UPDATE users SET ? where id=${req.body.id}`,[req.body],(error, result)=>{
        if(error){
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
        }
        res.status(200).json(result);
    })
}