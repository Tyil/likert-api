const bcrypt = require("bcrypt-nodejs");

const userModel = require("../../models").user;

module.exports = (username, password) => {
	return userModel.findOne({
		where: {
			username: username
		}
	}).then(result => {
		console.log(result);
		if (result !== null) {
			return {
				ok: false,
				message: 'The username is already taken.'
			};
		}

		console.log(username);
		console.log(password);
		console.log(bcrypt.hashSync(password, bcrypt.genSaltSync(10)));

		return userModel.create({
			username: username,
			password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		}).then(user => {
			return {
				ok: true
			};
		}).catch(err => {
			return {
				ok: false,
				message: err.message || err
			};
		});
	});
};
