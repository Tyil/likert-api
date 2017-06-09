const router = require("express").Router(),
	find_likert = require("../actions/likert/find-likert"),
	create_likert = require("../actions/likert/create-likert"),
	alter_likert = require("../actions/likert/alter-likert"),
	delete_likert = require("../actions/likert/remove-likert"),
	add_response = require("../actions/likert/add-likert-response"),
	get_scale = require("../actions/likert/get-scale"),
	find = require("../actions/likert/find-likert-scale");

module.exports = router
	.get('/:id', (req, res) => {
		find(req.params.id).then(result => {
			return res.json(result);
		});
	})
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
		add_response(req.params.id, req.token.userId, req.body.songId, req.body.moodId, req.body.scaleScore).then(result => {
			return res.json(result);
		});
	})
	.post('/', (req, res) => {
		create_likert(req.body.name, req.body.description, req.body.scaleItems).then(result => {
			return res.json(result);
		});
	})
	.put('/', (req, res) => {
		req.body.ids.forEach((id, updateItem) => {
			alter_likert(req.body.ids).then(result => {
				return res.json(result);
			});
		});
	})
	.patch('/', (req, res) => {
		req.body.ids.forEach(id => {
			remove_likert(id).then(result => {
				return res.json(result);
			});
		});
	});
