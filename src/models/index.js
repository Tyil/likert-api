const sequelize = require("sequelize"),
 config = require(__dirname + "/../../config/database.json"),
 mock = require("sequelize-mock"),
 bcrypt = require("bcrypt-nodejs");

const connection = new sequelize(
	config.database,
	config.username,
	config.password,
	config
);


if (process.env.NODE_ENV != 'test') {
	[
		"token",
		"user",
		"genre",
		"like_dislike_genre",
		"mood"
	].forEach(model => {
		module.exports[model] = connection.import(__dirname + "/" + model);
	});
}else{
  const connection = new SequelizeMock();
  module.exports["token"] = connection.define("token", {
    userId: 1,
    token: "token"
  });
  module.exports["user"] = connection.define("user", {
    UserId: 1,
    Username: "MoodAPI",
    Password: "test"
  });
  module.exports["genre"] = connection.define("genre", {
    GenreId: 1,
    Name: "rock"
  });
}

module.exports.sequelize = connection;
