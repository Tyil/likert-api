// set basic variables
const port = process.env.PORT || 3000;
const controllerDir = "./controller/";

// require dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// instantiate application
const app = express();

// add application-wide configuration
app.set("models", require("./models"));

// apply middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(require("./middlewares/bearer"));
//app.use(require("./middlewares/cors"));
app.use(cors());

// configure cors
app.options('*', cors());

// add controllers
[
	"artists",
	"auth",
	"genres",
	"moods",
	"users",
	"likerts",
	"songs",
	"favorites",
].forEach(x => app.use("/" + x, require("./controller/" + x)));

// root handler
app.get("/", (req, res) => {
	res.json({
		version: require("../package.json").version
	});
});

// 404 handler
app.use((req, res, next) => {
	res.status(404);
	res.json({
		ok: false,
		message: "The endpoint you requested was not found"
	});

	next();
});

// start the application
app.listen(port, () => console.log("Starting the LikertAPI on port " + port));

module.exports = app;
