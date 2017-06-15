// set basic variables
const port = process.env.PORT || 3000;
const controllerDir = "./controller/";

// require dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// parse commandline flags
let flags = [];

if (process.argv.length > 0) {
	process.argv.forEach(arg => {
		if (!arg.startsWith("--")) {
			return;
		};

		flags.push(arg.replace(/^--/, ""));
	});
}

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
].forEach(x => {
	const controller = require("./controller/" + x);

	app.use("/" + x, controller);

	if (flags.includes("list-routes")) {
		require("express-list-routes")({prefix: "/" + x}, null, controller);
	}
});

if (flags.includes("list-routes")) {
	// dont continue execution, all that was requested was a list of all routes
	process.exit(0);
}

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
