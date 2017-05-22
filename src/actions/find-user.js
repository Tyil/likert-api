const user = require("../models").user;

module.exports = (isAuthenticated, userId) => {
	if (!isAuthenticated && process.env.NODE_ENV != 'test') {
		return {
			ok: false,
			message: "Not logged in."
		};
	}
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'This user does not exist.'
			};
		}
		return {
			ok: true,
			message: {
				id: result.id,
				username: result.username,
				password: result.password
			}
		};
	});
};
