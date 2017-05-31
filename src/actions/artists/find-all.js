const Artist = require("../../models").artist;

module.exports = () => {
	return Artist.findAll().then(artists => {
		return {
			ok: true,
			artists: artists
		};
	});
};
