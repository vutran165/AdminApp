import koa from 'koa';
import Router from 'koa-router';
import * as paginate from 'koa-ctx-paginate';

// const 

var connection = require('./app.js');

//GET API
connection.app.get("/user", function (req, res) {
    var query = "select * from [user]";
    connection.executeQuery(req, query);
});

//GET API ALL PRODUCT
connection.app.get("/getAllProduct/:page", function (req, res, next) {
    var pageNo = req.params.page;
    var size = 10;
    // var query = {};
    if (pageNo < 0 || pageNo === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" }
        return res.json(response);
      
    }
    var query = "exec getAllProduct;";
    connection.executeQuery(req, query, res);
   



});

//POST API

//PUT API
connection.app.put("/user/:id", function (req, res) {
    var query = "UPDATE [user] SET Name= " + req.body.Name + " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    connection.executeQuery(res, query);
});

// DELETE API
connection.app.delete("/deleteuser/:id", function (req, res) {
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery(res, query);
});