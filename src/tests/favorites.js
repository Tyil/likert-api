const album = require("../models").album,
	artist = require("../models").artist,
	mood = require("../models").mood,
	genre = require("../models").genre,
	song = require("../models").song,
	actions = {
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
		album.create({
			id: 1,
			name: "A Night at the Opera",
			artistId: 1,
			art_Path: ""
		});
		artist.create({
			id: 1,
			name: "Freddy Mercury"
		});
		mood.create({
			id: 1,
			name: "Sad"
		});
		genre.create({
			id: 1,
			name: "rock"
		});
		song.create({
			id: 1,
			name: "Bohemian Rhapsody",
			path: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
			tag: "",
			artistId: 1,
			albumId: 1,
			genreId: 1,
			moodId: 1
		});
	});

	it("can display user preferences", function () {
		// todo finish this.
		return true;
	});
	it("can favorite albums", function () {
		actions.add.album(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The album has been added to the favorites.');
		});
	});
	it("can favorite artists", function () {
		actions.add.artist(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The artist has been added to the favorites.');
		});
	});
	it("can favorite genres", function () {
		actions.add.genre(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The genre has been added to the favorites.');
		});
	});
	it("can favorite songs", function () {
		actions.add.song(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The song has been added to the favorites.');
		});
	});
	it("can remove the favorited album", function () {
		actions.remove.album(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The album preference has been removed.');
		});
	});
	it("can remove the favorited artist", function () {
		actions.remove.artist(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The artist preference has been removed.');
		});
	});
	it("can remove the favorited genre", function () {
		actions.remove.genre(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The genre preference has been removed.');
		});
	});
	it("can remove the favorited song", function () {
		actions.remove.song(1, 1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The song preference has been removed.');
		});
	});
});
