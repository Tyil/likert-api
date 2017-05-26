const genre = require("../models").genre;

module.exports = (genreName) => {
	return genre.findOne({
		where: {
			name: genreName,
		}
	}).then(result => {
		if (result !== null) {
			return {
				ok: false,
				message: "This genre already exists."
			};
		}
		return genre.create({
			name: genreName,
		}).then(result => {
			return {
				ok: true,
				message: "This genre has been added."
			};
		});
	});
};
