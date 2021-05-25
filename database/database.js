var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "database/db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE contact (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            name    VARCHAR(50), 
            email   VARCHAR(50),
            subject VARCHAR(100),
            message text
            )`,
        (err) => {
            // table already created
        });  
    }
});

module.exports = db
