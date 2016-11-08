const mongoCollections = require("../config/mongoCollections");
const hobbies = mongoCollections.hobbies;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllhobbies() {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.find({},{_id:0,Type:1 }).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    gethobbiesById(id) {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.findOne({ Type: id },{_id:0,Type:1,Description:1 }).then((hobbies2) => {
                if (!hobbies2) throw "hobbies not found";
                return hobbies2;
            });
        });
    },
    gethobbiesById1(id) {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.findOne({ _id: id }).then((hobbies1) => {
                if (!hobbies1) throw "hobbies not found";
                return hobbies1;
            });
        });
    },
    addhobbies(Type, Description) {
        return hobbies().then((hobbiesCollection) => {
            let newhobbies = {
                Type: Type,
                Description: Description,
                _id: uuid.v1()
            };

            return hobbiesCollection.insertOne(newhobbies).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.gethobbiesById1(newId);
            });
        });
    },
    // removeUser(id) {
    //     return users().then((userCollection) => {
    //         return userCollection.removeOne({ _id: id }).then((deletionInfo) => {
    //             if (deletionInfo.deletedCount === 0) {
    //                 throw (`Could not delete user with id of ${id}`)
    //             }
    //         });
    //     });
    // },
    // updateUser(id, firstName, lastName) {
    //     return this.getUserById(id).then((currentUser) => {
    //         let updatedUser = {
    //             firstName: name,
    //             lastName: lastName
    //         };

    //         return userCollection.updateOne({ _id: id }, updatedUser).then(() => {
    //             return this.getUserById(id);
    //         });
    //     });
    // },
}

module.exports = exportedMethods;