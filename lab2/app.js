"use strict";
const r = require('fs-promise');
const fileData = require("./fileData.js")
const textMetrics = require("./textMetrics.js")


let obj ={
        "name": "Juniper Prime",
        "codename": "The Leader",
        "role": "plotting destruction of The C Team."
    }
//Question 1- fileData.js
fileData.getFileAsString("chapter1.txt").then(function(response) {})
fileData.getFileAsJSON("the-z-team.json").then(function(response) {})
fileData.saveStringToFile("chapter2.txt","hello").then(function(response) {})
fileData.saveJSONToFile("chapter2.txt",obj).then(function(response) {})

//Question2 - textMetrics.js
 console.log(textMetrics.createMetrics("Hello, my friends! This is a great day to say hello."))

//Question 3- To read and display the 3 text files
//console.log(textMetrics.createMetrics(fileData.getFileAsString("chapter1.txt").then(function(response) {} )))


//Reading chapter 1:
r.readFile("chapter1.txt")
  .then(buffer => console.log(textMetrics.createMetrics(buffer.toString())))
  .catch(err => console.error(err.message))

//Reading chapter 2:
r.readFile("chapter2.txt")
  .then(buffer => console.log(textMetrics.createMetrics(buffer.toString())))
  .catch(err => console.error(err.message))

//Reading chapter 3:
r.readFile("chapter3.txt")
  .then(buffer => console.log(textMetrics.createMetrics(buffer.toString())))
  .catch(err => console.error(err.message))
//-----------------------------------------------------------------------
 //console.log(x)
//const prompt = require('prompt');

// function getinfo(){
// //console.log("test")
//   prompt.start();



// const functionDescription={
//   name: "functionDescription",
//       description: 'Please enter function name',     // Prompt displayed to the user. If not supplied name will be used. 
//     type: 'string',                 // Specify the type of input to expect. 
//     default: 'getFileAsString',             // Default value to use if no value is entered. 
//     required: true   
//   };

//   const pathName ={
//     name: "pathName",
//     description: "please enter the path ",
//     type: 'string',
//     required: true  
//   };

//   const quitPrompt ={
//     name:"quit",
//      description: "Do you want to quit  ",
//     type: 'Boolean',
//     required: true  
//   };


//   function stringToOperation(str) {
//         if (!str) return "getFileAsString";

//         if (str === "getFileAsJSON") return "getFileAsJSON";

//         if (str === "saveStringToFile") return "saveStringToFile";

//         if (str === "saveJSONToFile") return "saveJSONToFile";

//         return "getFileAsString";
//     }

// prompt.get([functionDescription, pathName], (err, result) =>{
// if(result){
//   let quit = result.quit;
//   let operation = stringToOperation(result.operation);
//   let operationFunction = undefined;
//   switch (operation) {
//                 case "getFileAsString":
//                     operationFunction = fileData.getFileAsString;
//                     break;
//                 case "getFileAsJSON":
//                     operationFunction = fileData.getFileAsJSON;
//                     break;
//                 case "saveStringToFile":
//                     operationFunction = fileData.saveStringToFile;
//                     break;
//                 case "saveJSONToFile":
//                     operationFunction = fileData.saveJSONToFile;
//                     break;
//             }
// let numericalResult = operationFunction(functionDescription);
// console.log(numericalResult)

// //console.log(result);
//    // getinfo();


// }else if (err){
//   console.log(err)
// }  
//  });
// }
// getinfo();
