const bcrypt = require("bcrypt-nodejs"),
	user = require("../../models").user;

module.exports = (userId, username, password) => {
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The user does not exist.'
			};
		}
		result.update({
			Username: username,
			Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		}).then(result => {
			return {
				ok: true,
				message: 'The user has been updated.'
			};
		});
	});
};
