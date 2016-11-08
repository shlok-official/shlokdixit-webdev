const todo = require("./todo");
const connection = require("./mongoConnection");

//----------------------------------------------------------------------------------------

let TaskOne = todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
//Step 1:
let showTaskOne = TaskOne.then((newTask) => { console.log(newTask);
    return newTask;
});
//----------------------------------------------------------------------------------------
//Step 2:
let TaskTwo = showTaskOne.then((newTask) => { return todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
});
//----------------------------------------------------------------------------------------
let queryAllTasks = TaskTwo.then(() => {console.log("Querying and logging in progress of step 3:");
    return todo.getAllTasks();
});
//----------------------------------------------------------------------------------------
//Step 3:
let showTasks = queryAllTasks.then((showTask) => {console.log(showTask);
    return showTask;		
});
//----------------------------------------------------------------------------------------
//Step 4:
let removeFirstTask = showTasks.then((tasks) => { console.log("Deleting task one");
    console.log(tasks[0]._id);
    return todo.removeTask(tasks[0]._id);   
});
//----------------------------------------------------------------------------------------
//Extra Case Provoded in Question
let removeTask = todo.removeTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");
let tryToGetTask = removeTask.then(() => {
    return todo.getTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");
});

tryToGetTask.catch((error) => {
    // Should error out
    console.error(error);
})
//----------------------------------------------------------------------------------------
//Step 5:
let queryAllTasks1 = removeFirstTask.then(() => {console.log("Querying and logging in progress of step 5:");
    return todo.getAllTasks();
});

let showTasks1 = queryAllTasks1.then((displayTask) => { console.log(displayTask);
    return displayTask;
});
//----------------------------------------------------------------------------------------
//step 6:
let completeRemaining = showTasks1.then((complete) => {console.log("Complete the remaining task");
    for (let i = 0; i < complete.length; i++) {
        todo.completeTask(complete[i]._id);
    }
    return;
});

let queryAllTasks2 = completeRemaining.then((alltasks) => {console.log("Querying and logging in progress");
    return todo.getAllTasks();
});
//----------------------------------------------------------------------------------------
//Step 7:
let FinalTasks = queryAllTasks2.then((alltask) => {console.log("Updated tasks are:...");
    console.log(alltask);
    return alltask;
});
//----------------------------------------------------------------------------------------
//Error Handling:
let errordata = FinalTasks.catch((error) => {console.log(error);
    return error;
});

errordata.catch().then(() => {return connection();
}).then((db) => {return db.close();
});
