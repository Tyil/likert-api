const Artist = require("../../models").artist;

module.exports = id => {
	return Artist.findOne({
		where: {
			id: id
		}
	})
	.then(result => {
		if (result === null) {
			return {
				ok: false,
				message: "This artist does not exist."
			};
		}

		result.destroy();

		return {
			ok: true,
			message: "This artist has been removed."
		};
	});
};
