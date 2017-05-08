const router = require("express").Router();
const genre = require("../models/genre").genre;

router
    .get("/genre", (req, res) => {
        console.log("Genre found");
    })
    .post("/genre/:genreName", (req, res) => {

    })
    .delete("/genre/:genreNaam", (req, res) => {

    })
;
module.exports = router;