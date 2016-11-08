const mongoCollections = require("../config/mongoCollections");
const classes = mongoCollections.classes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllclasses() {
        return classes().then((classesCollection) => {
            return classesCollection.find({},{_id:0,Type:1 }).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getclassesById(id) {
        return classes().then((classesCollection) => {
            return classesCollection.findOne({Type: id },{_id:0,Name:1,Professor:1,Description:1 }).then((classes1) => {
                if (!classes1) throw "education not found";
                return classes1;
            });
        });
    },
    getclassesById1(id) {
        return classes().then((classesCollection) => {
            return classesCollection.findOne({_id: id },{_id:0,Name:1,Professor:1,Description:1 }).then((classes2) => {
                if (!classes2) throw "education not found";
                return classes2;
            });
        });
    },
    addclasses(Type,Name, Professor, Description) {
        return classes().then((classesCollection) => {
            let newclasses = {
                Type: Type,
                Name: Name,
                Professor: Professor,
                Description: Description,
                _id: uuid.v1()
            };

            return classesCollection.insertOne(newclasses).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getclassesById1(newId);
            });
        });
    },
    // removeclasses(id) {
    //     return classes().then((classesCollection) => {
    //         return classesCollection.removeOne({ _id: id }).then((deletionInfo) => {
    //             if (deletionInfo.deletedCount === 0) {
    //                 throw (`Could not delete classes with id of ${id}`)
    //             }
    //         });
    //     });
    // },
    // updateclasses(id, classes) {
    //     return this.getUserById(id).then((currentUser) => {
    //         let updatedclasses = {
    //             classes: name
    //             //lastName: lastName
    //         };

    //         return classesCollection.updateOne({ _id: id }, updatedclasses).then(() => {
    //             return this.getclassesById(id);
    //         });
    //     });
    // },
}

module.exports = exportedMethods;