const tokenModel = require("../../models").token;

module.exports = (id) => {
	return tokenModel.destroy({
		where: {
			id: id
		}
	});
};
