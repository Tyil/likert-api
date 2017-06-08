const genre = require("../../models").genre;

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
					message: "This genre does not exist."
				};
			}
			return result.destroy().then(result => {
				return {
					ok: true,
					message: "The genre has been removed."
				};
			});
		});
};
