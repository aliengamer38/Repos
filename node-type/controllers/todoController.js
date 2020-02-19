let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [
    { item: "get milk" },
    { item: "walk dog" },
    { item: "kick some coding ass" }
];
module.exports = function(app) {
    app.get("/todo", function(req, res) {
        // render todo.ejs in views folder
        res.render("todo", { todos: data });
    });
    app.post("/todo", urlencodedParser, function(req, res) {
        console.log("pushing: post");
        data.push(req.body);
        console.log("pushing: rendering");
        res.json(data);
    });
    app.delete("/todo/:item", function(req, res) {
        console.log("deleting");
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data);
    });
};
