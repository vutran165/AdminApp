// //Initiallising node modules
// var express = require("express");
// var bodyParser = require("body-parser");
// var sql = require("mssql");
// var app = express();

// // Body Parser Middleware
// app.use(bodyParser.json());

// //CORS Middleware
// app.use(function (req, res, next) {
//     //Enabling CORS 
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
//     next();
// });

// //Setting up server
// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
// });

// //Initiallising connection string
// var dbConfig = {
//     user: 'sa',
//     password: 'admin@123',
//     // server: 'TRANTUANVU-PC',
//     server:'TRANTUANVU',
//     database: 'AdventureWorks2014',
//     options: {
//         instanceName: 'TRANVUSQL'
//     }
// };

// //Function to connect to database and execute query
// var executeQuery = function (req, query, res) {

//     sql.connect(dbConfig, function (err) {
//         if (err) {
//             console.log("Error while connecting database :- " + err);
//             res.send(err);
//             sql.close();
//         }
//         else {
//             // create Request object
//             var request = new sql.Request();
//             // query to the database
//             request.query(query, function (err, recordset) {
//                 if (err) {
//                     console.log("Error while querying database :- " + err);
//                     res.send(err);
//                     sql.close();
//                 }
//                 else {
//                     res.send(recordset);               
//                     sql.close();
                   
//                 }
//             });
//         }
//     });
// }



var connection = require('./app.js');

//GET API
connection.app.get("/api/user", function (req, res) {
    var query = "select * from [user]";
    connection.executeQuery(req, query);
});

//GET API ALL PRODUCT
connection.app.get("/api/getAllProduct", function (req, res) {
    var query = "exec getAllProduct;";
    connection.executeQuery(req, query, res);
    
});

//POST API

//PUT API
connection.app.put("/api/user/:id", function (req, res) {
    var query = "UPDATE [user] SET Name= " + req.body.Name + " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    connection.executeQuery(res, query);
});

// DELETE API
connection.app.delete("/api/user /:id", function (req, res) {
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery(res, query);
});