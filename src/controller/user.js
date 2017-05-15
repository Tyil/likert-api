const router = require("express").Router(),
    updateUser = require("../actions/update-user"),
    findUser = require("../actions/find-user");

module.exports = router
    .get('/', (req, res) => {
        findUser(req.token.id).then(result => {
            return res.json(result);
        });
    })
    .get('/:user', (req, res) => {
        findUser(req.params.user).then(result => {
            return res.json(result);
        });
    })
    .post('/update', (req, res) => {
        updateUser(req.body.id, req.body.username, req.body.password).then(result => {
            return res.json(result);
        });
    })
    .post('/update/:id', (req, res) => {
        updateUser(req.params.id, req.body.username, req.body.password).then(result => {
            return res.json(result);
        });
    })
    ;