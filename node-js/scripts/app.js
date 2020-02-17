let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res) {
	res.send("this is the homepage");
});
app.get("/contact", function(req, res) {
	res.send("this is the contact");
});
app.get("/profile/:id", function(req, res) {
	let data = { hobbies: ["eating", "sleeping", "running"] };
	res.render("profile", {
		person: req.params.id,
		data: data
	});
});
app.get("/index", function(req, res) {
	res.render("index");
});
console.log("app starting");
app.listen(3000);
