"use strict";
const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) throw "User not found";
                return recipe;
            });
        });
    },
    addRecipe(title,ingredients,steps) {
        return recipes().then((recipeCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps:steps
                
                
            };

            return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },

    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipeCollection) => {
            let updatedData={};


                if(updatedRecipe.ingredients){
                    updatedData.ingredients=updatedRecipe.ingredients;
                }
                if(updatedRecipe.title){
                    updatedData.title=updatedRecipe.title;
                }
                if(updatedRecipe.steps){
                    updatedData.steps=updatedRecipe.steps;
                }
     
            let updateCommand = { 
                $set: updatedRecipe
            };

            return recipeCollection.updateOne({ _id: id }, updateCommand).then(() => {
                return this.getRecipeById(id);
            });
        });
    },

    
}

module.exports = exportedMethods;