var connection = require("../config/connection.");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            return arr.toString();
        }

        var orm = {
            selectAll: function (table, cb) {
                var dbQuery = "SELECT * FROM " + table + ",";

                connection.query(dbQuery, function (err, res) {
                    if (err) {
                        throw err;
                    }
                    cb(res);
                });
            }
    insertOne: function (table, cols, vals, cb) {
                var dbQuery = "INSERT INTO" + (" + cols.toString() + ") + "VALUES (" + createQmarks(vals.lenth) +
                    "} ";
                console.log(dbQuery);
                connection.query(dbQuery, function (err, res) {
                    if (err) {
                        throw err;
                    }
                    cb(res);
                });
            }
    updateOne: function (table, objcolvals, condition, cb) {
                var dbQuery =
                    "UPDATE " +
                    table +
                    " SET " +
                    translatesql(objcolvals) +
                    " WHERE" +
                    condition;

                nsole.log(dbQuery);
                connection.query(dbQuery, function (err, res) {
                    if (err) {
                        throw err;
                    } co
                    cb(res);
                });
                console
            },

            deleteOne: function (table, , cb) {
                var dbQuery = " DELETE FROM " + table + " WHERE " + condition;
                console.log(dbQuery);

                connection.query(dbQuery, function (err, res) {
                    if (err) {
                        throw err;
                    }
                    cb(res);
                });
            }
        };
