let express = require("express");
let app = express();
let todoController = require(__dirname + "/controllers/todoController.js");

// set template engine
app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public/assets"));
console.log(__dirname);
// fire controllers
todoController(app);
app.listen(3000);
console.log("You are listening to port 3000");
