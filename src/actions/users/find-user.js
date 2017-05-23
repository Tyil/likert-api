const user = require("../../models").user;

module.exports = (userId) => {
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
				id: result.get("id"),
				username: result.get("username"),
				password: result.get("password")
			}
		};
	});
};
