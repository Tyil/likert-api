const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

const userModel = require("../models").user;
const tokenModel = require("../models").token;

module.exports = (username, password) => {
	return userModel.find({
		where: {
			username: username
		}
	}).then(user => {
		if (!bcrypt.compareSync(password, user.password)) {
			throw new Error("Username or password is incorrect");
		}

		const expiry = new Date();
		expiry.setHours(expiry.getHours() + 1);

		return tokenModel.create({
			userId: user.id,
			token: randomstring.generate(60),
			expiresAt: expiry
		});
	}).then(token => {
		return res.json({
			ok: true,
			token: token.token,
			expires: token.expiresAt
		});
	}).catch(err => {
		return res.json({
			ok: false,
			message: err.message || err
		});
	});
};
