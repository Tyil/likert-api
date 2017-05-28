const actions = {
	findAll: require("../actions/favorites/all"),
	add: {
		album: require("../actions/favorites/add/album"),
		artist: require("../actions/favorites/add/artist"),
		genre: require("../actions/favorites/add/genre"),
		song: require("../actions/favorites/add/song")
	},
	remove: {
		album: require("../actions/favorites/remove/album"),
		artist: require("../actions/favorites/remove/artist"),
		genre: require("../actions/favorites/remove/genre"),
		song: require("../actions/favorites/remove/song")
	}
};

describe("Favorites routes", function () {
	beforeAll(() => {

	});

	it("can display user preferences", function () {
		// todo finish this.
		return true;
	});
	it("can favorite albums", function () {
		actions.add.album(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can favorite artists", function () {
		actions.add.artist(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can favorite genres", function () {
		actions.add.genre(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can favorite songs", function () {
		actions.add.song(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can remove the favorited album", function () {
		actions.remove.album(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can remove the favorited artist", function () {
		actions.remove.artist(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can remove the favorited genre", function () {
		actions.remove.genre(1, 1).then(result => {
			return res.json(result);
		});
	});
	it("can remove the favorited song", function () {
		actions.remove.song(1, 1).then(result => {
			return res.json(result);
		});
	});
});
