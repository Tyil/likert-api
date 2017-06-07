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

function handleRequest(req, res, action) {
	if (!req.authenticated) {
		return res.json(unauthError);
	}

	const favorables = [
		"genre",
		"artist",
		"album",
		"song",
	];

	if (!favorables.includes(req.body.type)) {
		return {
			ok: false,
			message: "Yo what the fuck"
		};
	}

	// something like this, not tested!
	actions[action][req.body.type]()(req.token.userId, req.body.genreId).then(result => {
		return res.json(result);
	});
}

module.exports = router
	.get('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		findAll(req.token.userId).then(result => {
			return res.json(result);
		});
	})

	.post('/', (req, res) => handleRequest(req, res, "add"))
	.delete('/', (req, res) => handleRequest(req, req, "remove"))
;
