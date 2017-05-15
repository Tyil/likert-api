const genre = require("../models").genre;

module.exports = (genreName) => {
	return genre.findOne({
			where: {
				name: genreName
			}
		})
		.then(result => {
			if (result === null) {
				return {
					ok: false,
					message: "This genre did not exist."
				};
			} else {
				result.destroy();
				return {
					ok: true,
					message: "The genre has been removed."
				};
			}
		});
};
