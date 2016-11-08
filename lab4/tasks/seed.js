const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const classes = data.classes;
const education = data.education;
const hobbies = data.hobbies;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    })
    .then(() => {
        return education.addeducatiohighschool("highSchool","Campion school")})
        .then(() => {
            return education.addeducatioundergrad("undergrad","NIT-Bhopal","BE")})
            .then(() => {
                return hobbies.addhobbies("soccer","Played soccer at school level")})
                  .then(() => {
                    return hobbies.addhobbies("fightclub","Organised fight club arean")})
                  .then(() => {
                return classes.addclasses("CS-546","WEB PROGRAMMING","PROF PHIL ","fundalmentals of web dev")})
                .then(() => {
                return classes.addclasses("CS-570","Algorithms","PROF PEFFER","intro to algo")})
                .then(() => {
                return classes.addclasses("CS-600","ADVANCED ALGORITHM","PROF REZA","implementation of advanced algo")})
                .then(() => {
                return classes.addclasses("CS-521","TCP-IP","PROF REHMAN","basics of TCP/IP")})
                .then(() => {
                return classes.addclasses("CS-800","Intro to iOS","PROF X","Mind reading")})
                .then(() => {
                return classes.addclasses("CS-801","project research","MAGNETO"," magnetronics")})
        

       .then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});
