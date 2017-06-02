const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

const userModel = require("../../models").user;
const tokenModel = require("../../models").token;

module.exports = (username, password) => {
	return userModel.findOne({
		where: {
			username: username
		}
	}).then(user => {
		if (user === null || !bcrypt.compareSync(password, user.get("password"))) {
			throw new Error("Username or password is incorrect");
		}

		const expiry = new Date();
		expiry.setHours(expiry.getHours() + (1 * 24 * 7));

		return tokenModel.create({
			userId: user.id,
			token: randomstring.generate(60),
			expiresAt: expiry
		});
	}).then(token => {
		return {
			ok: true,
			token: token.get("token"),
			expires: token.get("expiresAt")
		};
	}).catch(err => {
		return {
			ok: false,
			message: err.message || err
		};
	});
};
