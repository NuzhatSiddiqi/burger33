var connection = require("../config/connection");

var orm = {
    selectAll: function (table, cb) {
        var dbQuery = "SELECT * FROM" + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (table, clos, vals, cb) {

        var dbQuery =
            "INSERT INTO" + table + "(" +  cols.toString() +
            ") " +
            "VALUES(" +
            createQmarks(vals.lenth) +
            ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });

    },
    updateOne: function (table, objcolVals, condition, cb) {
        var dbQuery =
            "UPDATE " +
            table +
            " SET" +
            translateSql(objcolVals) +
            " WHERE " +
            condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })
    },
    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });

    }

};

