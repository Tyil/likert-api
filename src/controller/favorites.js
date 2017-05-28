const router = require("express").Router(),
	unauthError = require("../responses/unauthenticated.json"),
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

module.exports = router
	.get('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		findAll(req.token.userId).then(result => {
			return res.json(result);
		});
	})

	.post('/genre', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.add.genre(req.token.userId, req.body.genreId).then(result => {
			return res.json(result);
		});
	})
	.post('/artist', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.add.artist(req.token.userId, req.body.artistId).then(result => {
			return res.json(result);
		});
	})
	.post('/album', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.add.album(req.token.userId, req.body.albumId).then(result => {
			return res.json(result);
		});
	})
	.post('/song', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.add.song(req.token.userId, req.body.songId).then(result => {
			return res.json(result);
		});
	})

	.delete('/genre', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.remove.genre(req.token.userId, req.body.genreId).then(result => {
			return res.json(result);
		});
	})
	.delete('/artist', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.remove.artist(req.token.userId, req.body.artistId).then(result => {
			return res.json(result);
		});
	})
	.delete('/album', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.remove.album(req.token.userId, req.body.artistId).then(result => {
			return res.json(result);
		});
	})
	.delete('/song', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		actions.remove.song(req.token.userId, req.body.songId).then(result => {
			return res.json(result);
		});
	});
