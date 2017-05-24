const Artist = require("../models").artist;

module.exports = name => {
	return Artist.findOne({
		where: {
			name: name,
		}
	}).then(result => {
		if (result !== null) {
			return {
				ok: false,
				message: "This artist already exists."
			};
		}

		Artist.create({
			name: name,
		}).then(result => {
			return res.json({
				ok: true,
				message: "This artist has been added.",
				id: result.get("id")
			});
		});
	});
};
