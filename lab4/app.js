const express = require("express");
//sconst bodyParser= require('body-parser')
let app = express();
//app.use(bodyParser.urlencoded({extended: true}))
let configRoutes = require("./routes");

configRoutes(app);



app.listen(3000, () => {
    console.log("We've now got a server 8080")
});
