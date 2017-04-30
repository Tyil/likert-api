// set basic variables
const port = process.env.app_port || 3000;
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

// add controllers
[
	"auth",
].forEach(x => app.use("/" + x, require("./controller/" + x)));

// start the application
app.listen(port, () => console.log("Starting the LikertAPI on port " + port));
