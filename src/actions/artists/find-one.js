const Artist = require("../../models").artist;

module.exports = id => {
	return Artist.findOne({
		where: {
			id: id
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: "The requested entity does not exist."
			};
		}

		return {
			ok: true,
			artist: {
				id: result.get("id"),
				name: result.get("name")
			}
		};
	});
};
