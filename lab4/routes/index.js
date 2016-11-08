const classesRoutes = require("./classes");
const educationRoutes = require("./education");
const hobbiesRoutes = require("./hobbies");

const constructorMethod = (app) => {
    app.use("/classes", classesRoutes);
    app.use("/education", educationRoutes);
    app.use("/hobbies", hobbiesRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;