var express = require('express');
var router = express.Router();

/* POST adminDeleteMessage. */
router.post('/', function(req, res, next) {

    var db = require('../database/database.js');
    var sql = 'DELETE FROM contact WHERE ID=' + req.body.id + ';';
    db.run(sql, (err) => {
        if(err) throw err;
    });

    var send = {
        "status":0,
        "db":{}
    };
    sql = 'SELECT * FROM contact;'
    db.all(sql, [], (err, rows) => {
        if (err) throw err;
        send["status"] = 200;
        send["db"] = rows;

        res.render('admin', { data: send,
                              token: req.body.token });
    });
});

module.exports = router;
