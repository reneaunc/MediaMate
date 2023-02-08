const express = require('express');
const router = express.Router();
const knex = require('./knex');

router.get('/', function(req, res, next) {
    knex.select("*")
        .from("consumedmedia")
        .then((result)=>{
            console.log('result', result)
            res.send(result);
        })
        .catch((error)=>{
            res.status(500);
            console.log("ERROR OCCURRED:", error)
            res.send("There was an error performing the operation.");
        });
});

module.exports = router;