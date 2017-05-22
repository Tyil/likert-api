module.exports = function (SequelizeMock) {
	return SequelizeMock.define('like_dislike_genre', {
		userId: 1,
		genreId: 1,
		like_dislike: "like"
	});
};
