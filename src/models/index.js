const bcrypt = require("bcrypt-nodejs");
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

let connection;

if (process.env.NODE_ENV !== "test") {
	connection = new sequelize(
		config.database,
		config.username,
		config.password,
		config
	);

	[
		"artist",
		"token",
		"user",
		"genre",
		"like_dislike_genre",
		"mood",
		"song",
		"likert_template",
		"likert_template_result",
		"likert_template_steps",
		"likert_template_value",
	].forEach(model => {
		module.exports[model] = connection.import(__dirname + "/" + model);
	});
} else {
	const sequelizeMock = require("sequelize-mock");

	connection = new sequelizeMock();

	module.exports.token = connection.define("token", {
		userId: 1,
		token: "token"
	});

	module.exports.user = connection.define("user", {
		id: 1,
		username: "mood",
		password: bcrypt.hashSync("test")
	});

	module.exports.artist = connection.define("artist", {
		id: 1,
		name: "Micro Jackson"
	});

	module.exports.genre = connection.define("genre", {
		GenreId: 1,
		Name: "rock"
	});

	module.exports.mood = connection.define("mood", {});
	module.exports.song = connection.define("song", {});
	module.exports.likert_template = connection.define("likert_template", {});
	module.exports.likert_template_value = connection.define("likert_template_value", {});
	module.exports.likert_template_result = connection.define("likert_template_result", {});
}

module.exports.sequelize = connection;
