const router = require("express").Router(),
	find_likert = require("../actions/likert/find-likert"),
	create_likert = require("../actions/likert/create-likert"),
	alter_likert = require("../actions/likert/alter-likert"),
	delete_likert = require("../actions/likert/remove-likert"),
	add_response = require("../actions/likert/add-likert-response"),
	get_scale = require("../actions/likert/get-scale");

module.exports = router
	.get('/:id/scale', (req, res) => {
		get_scale(req.params.id).then(result => {
			return res.json(result);
		});
	})
	.get('/:id/:userId', (req, res) => {
		find_likert(req.params.id, req.params.userId).then(result => {
			return res.json(result);
		});
	})
	.post('/:id', (req, res) => {
		add_response(req.params.id, req.body.userId, req.body.songId, req.body.moodId).then(result => {
			return res.json(result);
		});
	})
	.post('/', (req, res) => {
		create_likert(req.body.name, req.body.description, req.body.max_value, req.body.scaleItems).then(result => {
			return res.json(result);
		});
	})
	.put('/', (req, res) => {
		alter_likert(req.body.id).then(result => {
			return res.json(result);
		});
	})
	.patch('/', (req, res) => {
		remove_likert(req.body.id).then(result => {
			return res.json(result);
		});
	});
