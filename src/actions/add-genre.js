const genre = require("../models").genre;

module.exports = (genreName) => {
	return genre.findOne({
		where: {
			name: genreName,
		}
	}).then(result => {
		if (result === null) {
			genre.create({
				name: genreName,
			});
			return {
				ok: true,
				message: "This genre has been added."
			};
		} else {
			return {
				ok: false,
				message: "This genre already exists."
			};
		}
	})
};
