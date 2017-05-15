const user = require("../models").user;

module.exports = (userId) => {
	return user.findOne({
		where: {
			UserId: userId
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
