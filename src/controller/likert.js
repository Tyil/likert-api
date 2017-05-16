const router = require("express").Router(),
    likert = require("../models").likert_template;

module.exports = router
    .get('/', (req, res) => {
        likert.findAll().then(result => {
            return res.json({
                ok: true,
                message: result
            });
        });
    })
    .post('/new', (req, res) => {
        
    })
    ;
