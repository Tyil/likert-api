const tokenModel = require("../../models").token;

module.exports = (id) => {
	return tokenModel.destroy({
		where: {
			id: id
		}
	}).then(response => {
		return {
			ok: true
		}
	}).catch(err => {
		return {
			ok: false,
			message: err
		}
	});
};
