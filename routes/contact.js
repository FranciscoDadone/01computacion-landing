var express = require('express');
var router = express.Router();



var bodyParser = require('body-parser');

// for parsing application/json
router.use(bodyParser.json()); 

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded


/* POST contact. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    var name        = req.body.name,
        email       = req.body.email,
        subject = req.body.subject,
        message     = req.body.message;

    var db = require('../database/database.js');


    var insert = 'INSERT INTO contact (name, email, subject, message) VALUES (?,?,?,?)'
    db.run(insert, [name, email, subject, message], (err) => {
        if(err == null) console.log("New contact message!");
    });
});

module.exports = router;
