const express = require('express');
const router = express.Router();
const data = require("../data");
const hobbiesData = data.hobbies;

router.get("/:id", (req, res) => {
    hobbiesData.gethobbiesById(req.params.id).then((hobbies) => {
        res.json(hobbies);
    }, (error) => { 
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    hobbiesData.getAllhobbies().then((hobbiesList) => {
        res.json(hobbiesList);
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    // Not implemented
    res.sendStatus(501);
});


module.exports = router;