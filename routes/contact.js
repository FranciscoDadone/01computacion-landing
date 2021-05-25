var express = require('express');
var router = express.Router();

/* POST contact. */
router.post('/', function(req, res, next) {
    var name        = req.body.name,
        email       = req.body.email,
        subject     = req.body.subject,
        message     = req.body.message;

    var db = require('../database/database.js');

    var insert = 'INSERT INTO contact (name, email, subject, message) VALUES (?,?,?,?)'
    if(req.cookies.form == "active") res.send("cooldown");
    else {
        db.run(insert, [name, email, subject, message], (err) => {
            if(err == null && req.cookies.form != "active") {
                console.log("-----------------------------------\n" +
                            "New contact message! \n" +
                            "From: " + name + "\n" +
                            "Message: " + message + "\n" +
                            "-----------------------------------");
                res.cookie("form", "active", { maxAge: 180000 });
                res.sendStatus(200);
            } else res.send(err);
        });
    }
});

module.exports = router;
