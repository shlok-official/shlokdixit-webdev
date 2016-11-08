const express = require('express');
const router = express.Router();
const data = require("../data");
const educationData = data.education;
//var prettyjson = require('prettyjson');

//router.set('json spaces', 2);
//educationData.addeducation("Campion School")
router.get("/:id", (req, res) => {
    educationData.geteducationById(req.params.id).then((education) => {
        res.json(education);
    }, (error) => { 
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    //res.send('Hello World')
    educationData.getAlleducation().then((educationList) => {
        res.json(educationList);
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