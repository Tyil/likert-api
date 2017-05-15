const user = require("../models").user;

module.exports = (userId) => {
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			return res.json({
				ok: false,
				message: 'This user does not exist.'
			});
		}
		return res.json({
			ok: true,
			message: {
                id: result.id,
                username: result.username,
                password: result.password
            }
		});
	});
};
