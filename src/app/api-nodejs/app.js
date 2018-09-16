
//initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();


//body parser middleware
app.use(bodyParser.json());

//cors middleware
app.use(function (req, res, next) {
    //enabling cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//INITIALLISING CONNECTION STRING
var dbConfig = {
    user: 'sa',
    password: 'admin@123',
    server: 'TRANTUANVU',
    database: 'AdventureWorks2014',
    options: {
        instanceName: 'TRANVUSQL'
    }
}

//function to connect to database and excute query
var executeQuery = function (req, query, res) {
    sql.connect(dbConfig, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
            sql.close();
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                    sql.close();
                }
                else {
                    res.send(recordset);
                    sql.close();

                }
            });
        }
    });
}

module.exports = {
    app : app,
    executeQuery: executeQuery
}

