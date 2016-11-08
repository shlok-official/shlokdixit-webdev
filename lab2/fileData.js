"use strict"; 
//References: https://github.com/kevinbeaty/fs-promise

const fsp = require('fs-promise');

//const exports = module.exports={
// exports.getFileAsString = function (path) {
//   r.readFile(path)
//     .then(buffer => console.log(buffer.toString()))
//     .catch(err => console.error(err.message))
// };//Error catch : 
// //compiler will throw any type of errors

// //---------------------------------------------------------

// exports.getFileAsJSON = function (path) {
//   r.readFile(path)
//     .then(buffer => console.log(JSON.parse(buffer.toString())))
//     .catch(err => console.error(err.message))
// };//Error catch : 
// //compiler will throw any type of errors

//---------------------------------------------------------
exports.getFileAsString = function (path){
  if(!path || path === null){
    console.log("Invalid pathname or no path provided")
  }
  return  fsp.readFile(path,'utf8')
    .then(val => console.log(val))
    .catch(err =>console.log(err))}

//----------------------------------------------------------
exports.getFileAsJSON = function (path){
  if(!path || path === null){
    console.log("Invalid pathname or no path provided")
  }
   return   fsp.readFile(path,'utf8')
    .then(val => console.log(JSON.parse(val)))
    .catch(err =>console.log(err))};

//----------------------------------------------------------
exports.saveStringToFile = function (path, text){
  if(!path || path === null){
    console.log("Invalid pathname or no path provided")
  }
  else if (!text){
    console.log("Please provide the text to be written at a given destination")
  }
 return fsp.writeFile(path, text)
    .then(console.log("file saved successfully"))//Message to show successful operation
    .catch(err => console.error(err.message))};//Error catch : 
//compiler will throw any type of errors

//----------------------------------------------------------

exports.saveJSONToFile = function (path, obj){
   if(!path || path === null){
    console.log("Invalid pathname or no path provided")
  }
  else if (!obj){
    console.log("Please provide the obj to be saved at a given destination")
  }
  var str = JSON.stringify(obj);//To convert JSON object to string
  return fsp.writeFile(path, str)
    .catch(err => console.error(err.message))}//Error catch : 
                                            //compiler will throw any type of errors