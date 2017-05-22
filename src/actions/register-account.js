const bcrypt = require("bcrypt-nodejs");

const userModel = require("../models").user;

module.exports = (username, password) => {
	return userModel.create({
		Username: username,
		Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
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
