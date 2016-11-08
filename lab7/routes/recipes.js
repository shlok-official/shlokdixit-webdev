"use strict";
const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "User not found" });
    });
});

router.get("/", (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    let recipeInfo = req.body;


    recipeData.addRecipe(recipeInfo.title, recipeInfo.ingredients, recipeInfo.steps)
        .then((newRecipe) => {
            res.json(newRecipe);
        }, () => {
            res.sendStatus(500);
        });
});

router.put("/:id", (req, res) => {
    let recipeInfo = req.body;

 

    let getRecipe = recipeData.getRecipeById(req.params.id).then(() => {
        return recipeData.updateRecipe(req.params.id, recipeInfo)
            .then((updatedUser) => {
                res.json(updatedUser);
            }, () => {
                res.sendStatus(500);
            });
    }).catch(() => {
        res.status(404).json({ error: "User not found" });
    });

});




module.exports = router;