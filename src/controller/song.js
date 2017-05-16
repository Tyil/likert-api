const router = require("express").Router(),
    song = require("../models").song,
    genre = require("../models").genre,
    gimme = require("../actions/recommend-songs");

module.exports = router
    .get('/', (req, res) => {
        song.findAll().then(result => {
            return res.json({
                ok: true,
                message: result
            });
        });
    })
    .get('/:id', (req, res) => {
        return song.findOne({
            where: {
                SongId: req.params.id
            }
        }).then(result => {
            if(result === null){
                return res.json({
                    ok: false,
                    message: 'The song does not exist.'
                });
            }
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
    .get('/recommend/:genre', (req, res) => {
        gimme(req.params.genre).then(result => {
            return res.json(result);
        });
    })
    ;