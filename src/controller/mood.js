const router = require("express").Router(),
    actions = require('../actions/add-remove-moods'),
    update = require('../actions/update-moods'),
    specific = require('../actions/specific-moods'),
    moods = require('../models').mood;

module.exports = router
	.get('/', (req, res) => {
        moods.findAll().then(result => {
            return res.json(result);
        });
	})
    .get('/:mood', (req, res) => {
        specific(req.params.mood).then(result => {
            return res.json(result);
        });
    })
    .post('/add', (req, res) => {
        actions(req.body.mood, 'add').then(result => {
            return res.json(result);
        });
    })
    .post('/update', (req, res) => {
        update(req.body.oldMood, req.body.newMood).then(result => {
            return res.json(result);
        });
    })
    .delete('/remove', (req, res) => {
        actions(req.body.mood, 'remove').then(result => {
            return res.json(result);
        });
    })
    ;