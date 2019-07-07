var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"

});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return.log("connected as id " + connection.thredid);
    }
    console.log("connected as id " + connection.thredid);
});
module.exports = connection;


