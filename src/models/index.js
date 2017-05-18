const sequelize = require("sequelize"),
	config = require(__dirname + "/../../config/database.json"),
  SequelizeMock = require("sequelize-mock"),
	bcrypt = require("bcrypt-nodejs");
let connection;

process.env.NODE_ENV = '';

if (process.env.NODE_ENV != 'test') {
	connection = new sequelize(
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
		"likert_template",
		"likert_template_result",
		"likert_template_steps",
	].forEach(model => {
		module.exports[model] = connection.import(__dirname + "/" + model);
	});
} else {
  console.log("Mocking");
	connection = new SequelizeMock();
	[
		"token",
		"user",
		"genre",
		"like_dislike_genre",
		"mood",
		"likert_template",
		"likert_template_result",
		"likert_template_steps",
	].forEach(model => {
		module.exports[model] = connection.import(__dirname + "/" + "mocks" + "/" + model);
	});
}

module.exports.sequelize = connection;
