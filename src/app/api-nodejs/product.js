//initiallising connection string
var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'sa',  
        password: 'admin@123',  
        server: 'localhost',  
        instanceName:'TRANVUSQL',
        // server: 'TRANTUANVU-PC\TRANVUSQL',
        // port: 1433,
        // When you connect to Azure SQL Database, you need these next options.  
        options: { database: 'AdventureWorks2014'}  
    };  
   
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        if(err)
        {
            console.log(err);
        } else {
            console.log("Connected");  
        
            // async.waterfall([executeStatement],Complete)
            executeStatement();
        }
       
    });  

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  

    function Complete(err, result) {
        if(err) 
        {
            callback(err);
        } else {
            console.log("Done!");
        }
    }


    function executeStatement() {  
        request = new Request("exec getAllProduct;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  

        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }

    var express = require('express');
    var app = express();
    var bodyParser = require("body-parser");

    // Body Parser Middleware
    app.use(bodyParser.json());

    //Cors middleware
    app.use(function(req,res,next){
        //enable cors
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
        next();
    })

    //setting up server
    var server = app.listen(process.env.PORT || 8080, function(){
        var port = server.address().port;
        console .log("port is opening !!!", port);
    });

    
