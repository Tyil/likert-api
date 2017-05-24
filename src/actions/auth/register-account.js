const bcrypt = require("bcrypt-nodejs");

const userModel = require("../../models").user;

module.exports = (username, password) => {
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
};
