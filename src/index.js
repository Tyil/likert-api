// set basic variables
const port = process.env.PORT || 3000;
const controllerDir = "./controller/";

// require dependencies
const express = require("express");
const bodyParser = require("body-parser");

// instantiate application
const app = express();

// add application-wide configuration
app.set("models", require("./models"));

// apply middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// add controllers
[
	"auth",
	"genre",
	"mood",
	"user",
	"song",
].forEach(x => app.use("/" + x, require("./controller/" + x)));

app.get("/", (req, res) => {
	res.json({
		version: "0.2.0"
	});
});

// start the application
app.listen(port, () => console.log("Starting the LikertAPI on port " + port));

module.exports = app;
