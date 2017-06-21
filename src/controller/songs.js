const addHistory = require("../actions/songs/add-history");
const genre = require("../models").genre;
const gimme = require("../actions/recommend-songs");
const history = require("../actions/songs/get-history");
const router = require("express").Router();
const song = require("../models").song;

module.exports = router
	.get('/', (req, res) => {
		song.findAll().then(result => {
			return res.json({
				ok: true,
				message: result
			});
		});
	})
	.get("/recent", (req, res) => {
		history(req.token.userId, 1).then(result => {
			result.message = result.message[0];

			return res.json(result);
		});
	})
	.get("/recent/:count", (req, res) => {
		history(req.token.userId, req.params.count).then(result => {
			return res.json(result);
		});
	})
	.get('/:id', (req, res) => {
		return song.findOne({
			include: [
				{ model: artist, as: "artist" },
			],
			where: {
				id: req.params.id
			}
		}).then(result => {
			if(result === null){
				return res.json({
					ok: false,
					message: 'The song does not exist.'
				});
			}

			addHistory(req.token.userId, result.id);

			return res.json({
				ok: true,
				message: result
			});
		});
	})
	.post('/search', (req, res) => {
		song.findAll({
			where: {
				Name: {
					$like: '%' + req.body.search + '%'
				}
			}
		}).then(result => {
			return res.json({
				ok: true,
				message: result
			});
		});
	})
	.get('/recommend/:genre/:likertId', (req, res) => {
		gimme(req.params.genre, req.params.likertId).then(result => {
			return res.json(result);
		});
	})
	;
