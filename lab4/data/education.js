const mongoCollections = require("../config/mongoCollections");
const education = mongoCollections.education;
const uuid = require('node-uuid');

let exportedMethods = {
    getAlleducation() {
        return education().then((educationCollection) => {
            return educationCollection.find({},{_id:0,Name:1 }).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    geteducationById(id) {
        return education().then((educationCollection) => {
            return educationCollection.findOne({Type: id },{_id:0,Name:1 }).then((education) => {
                if (!education) throw "education not found";
                return education;
            });
        });
    },
    geteducationById1(id) {
        return education().then((educationCollection) => {
            return educationCollection.findOne({_id: id }).then((education) => {
                if (!education) throw "education not found";
                return education;
            });
        });
    },
    addeducatiohighschool(Type, Name) {
        return education().then((educationCollection) => {
            let neweducation = {
                Type: Type,
                Name: Name,
                _id: uuid.v1()
            };

            return educationCollection.insertOne(neweducation).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.geteducationById1(newId);
            });
        });
    },
       addeducatioundergrad(Type, Name, Degree) {
        return education().then((educationCollection) => {
            let neweducation = {
                Type: Type,
                Name: Name,
                Degree: Degree,
                _id: uuid.v1()
            };

            return educationCollection.insertOne(neweducation).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.geteducationById1(newId);
            });
        });
    },
    // removeeducation(id) {
    //     return education().then((educationCollection) => {
    //         return educationCollection.removeOne({ _id: id }).then((deletionInfo) => {
    //             if (deletionInfo.deletedCount === 0) {
    //                 throw (`Could not delete education with id of ${id}`)
    //             }
    //         });
    //     });
    // },
    // updateeducation(id, education) {
    //     return this.geteducationById(id).then((currenteducation) => {
    //         let updatededucation = {
    //             education: name
    //             //lastName: lastName
    //         };

    //         return educationCollection.updateOne({ _id: id }, updatededucation).then(() => {
    //             return this.geteducationById(id);
    //         });
    //     });
    // },
}

module.exports = exportedMethods;