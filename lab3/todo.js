const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todo;
 var uuid = require('node-uuid');



let exportedMethods = {

getTask(id) {
   if (!id) 
   return Promise.reject("Enter an id to get going :)");    
return todo().then((todoCollection) => {
            return todoCollection.findOne({ _id: id });
        });

},

createTask(title, description) {
     if (!title || !description)
                return Promise.reject("Please provide title and description ");
return todo().then((todoCollection) => {
            let newTask = {
                _id:uuid.v4(),
                title: title,
                description: description,
               completed: false,
                completedAt:Date.now()
            };
            return todoCollection.insertOne(newTask).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getTask(newId);
            });
        });

},


  
getAllTasks() {
    return todo().then((todoCollection) => {
            return todoCollection.find().toArray();
        });


},

completeTask(id) {
     if (!id) 
                return Promise.reject("Enter an id to get going :)");
      return todo().then((todoCollection) => {   
            return todoCollection.updateOne({ _id: id }, {$set:{'completed':true,'completedAt':new Date()}}).then(() => {
                return this.getTask(id);
            });
        });
},
removeTask(id) {
     if (!id)
                return Promise.reject("Enter an id to get going :)");
    return todo().then((todoCollection) => {
            return todoCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete task with id of ${id}`)
                }
                return deletionInfo;
            });
        });
}
}
module.exports = exportedMethods;