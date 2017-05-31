const Artist = require("../../models").artist;

module.exports = (id, name) => {
	return Artist.findOne({
		where: {
			id: id
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: "This artist does not exist."
			};
		}

		return result.update({
			name: name
		}).then(result => {
			return {
				ok: true,
				message: "This artist has been updated."
			};
		}).catch(err => {
			return {
				ok: false,
				message: err.message || err
			};
		});
	});
};
