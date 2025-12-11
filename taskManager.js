// ○ Define and export the following functions:
//      1. addTask(tasks, task): Adds a new task to the task list.
//      2. listTasks(tasks): Logs all tasks to the console.

// const taskList = ['water the cat', 'feed the garden', 'take a dishwasher', 'run the shower']

function addTask(tasks, task) {
    tasks.push(task);
    return `${tasks} the ${task}`;
}

function listTasks(tasks) {
    for (const task of tasks) {
        console.log(task);
    }
    console.log('=================');
}

module.exports = { addTask, listTasks }
