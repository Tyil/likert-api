const fs = require("fs");
const sequelize = require("sequelize");
const db_config = __dirname + "/../../config/database.json";

let config;

// get a database config, either by file or by env
if (fs.existsSync(db_config)) {
	console.log("Reading database config from " + db_config);
	config = require(db_config);
} else {
	console.log("Reading database config from environment");
	config = {
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	};
}

const connection = new sequelize(
	config.database,
	config.username,
	config.password,
	config
);

[
	"token",
	"user",
	"genre",
	"like_dislike_genre",
	"mood",
	"song",
].forEach(model => {
	module.exports[model] = connection.import(__dirname + "/" + model);
});

module.exports.sequelize = connection;
