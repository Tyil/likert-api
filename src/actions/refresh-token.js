const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

const tokenModel = require("../models").token;

module.exports = (id) => {
	const expiry = new Date();
	expiry.setHours(expiry.getHours() + (1 * 24 * 7));

	return tokenModel.update({
		expiresAt: expiry
	}, {
		where: {
			id: id
		}
	}).then(records => {
		return {
			ok: true,
			expires: expiry
		};
	}).catch(err => {
		return {
			ok: false,
			message: err.message || err
		};
	});
};
