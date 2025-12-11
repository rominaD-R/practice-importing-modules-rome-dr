// Create the taskManager.js Module:
// ○ Define and export the following functions:
//      1. addTask(tasks, task): Adds a new task to the task list.
//      2. listTasks(tasks): Logs all tasks to the console.

// 2. Create the fileHandler.js Module:
// ○ Use the fs (File System) built-in module to define and export the
// following functions:
// 1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON
// format.
// 2. loadTasks(filePath): Reads and parses the tasks from the file.
// If the file doesn’t exist, return an empty array.

// 3. Use the Modules in app.js:
// ○ Import the custom modules (taskManager.js and fileHandler.js)
// and the path built-in module.
// ○ Implement the following functionality:
//      1. Load existing tasks from a file named tasks.json.
//      2. Add new tasks to the list.
//      3. List all tasks.
//      4. Save the updated task list back to the file.

const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const taskList = ['water the cat', 'feed the garden', 'take a dishwasher', 'run the shower']

// taskManager.listTasks(taskList);
taskManager.addTask(taskList, 'buy h2o');
taskManager.listTasks(taskList);

// fileHandler.saveTasks('tasks.json', taskManager.addTask(taskList, 'buy something'));
fileHandler.saveTasks('tasks.json', taskList);

