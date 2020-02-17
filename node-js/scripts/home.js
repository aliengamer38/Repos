let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res) {
	res.writeHead(200, { "Content-Type": "application/json" });
	let obj = {
		name: "Pam",
		age: 30,
		job: "Programmer"
	};
	res.end(JSON.stringify(obj));
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
