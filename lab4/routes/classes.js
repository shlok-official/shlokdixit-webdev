const express = require('express');
const router = express.Router();
const data = require("../data");
const classesData = data.classes;



router.get("/:id", (req, res) => {
    classesData.getclassesById(req.query.Type).then((class1) => {
        res.json(class1);
    }, (error) => { 
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
  //  res.send('Hello World')
    classesData.getAllclasses().then((classesList) => {
        var cllength = classesList.length
        if(cllength >= 5)
        res.json(classesList);
        else
        res.json("number of claases less than 5")
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