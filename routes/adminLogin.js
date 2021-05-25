var express = require('express');
var router = express.Router();
var credentials = require('../keys/adminKeys');

/* POST adminLogin. */
router.post('/', function(req, res, next) {
    var username = req.body.username,
        password = req.body.password;
    var send = {
        "status":0,
        "db":{}
    };

    if(credentials.username == username && credentials.password == password) {
        send["status"] = 200;

        var db = require('../database/database.js');
        var sql = 'SELECT * FROM contact;'
        db.all(sql, [], (err, rows) => {
            if (err) throw err;
            send["db"] = rows;

            res.render('admin', { data: send });
        });
        
    } else {
        send["status"] = "Invalid username or password.";
        res.send(send);
    }
});

module.exports = router;
