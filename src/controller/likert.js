const router = require("express").Router(),
    find_likert = require("../actions/find-likert")
    ;

module.exports = router
    .get('/:id', (req, res) => {
        find_likert(req.params.id).then(result => {
            return res.json(result);
        });
    })
    .post('/:id', (req, res) => {
        
    })
    .put('/:id', (req, res) => {

    })
    .patch('/:id', (req, res) => {

    })
    ;
