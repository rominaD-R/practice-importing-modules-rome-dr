// 2. Create the fileHandler.js Module:
//      ○ Use the fs (File System) built-in module to define and export the following functions:
//      1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format.
//      2. loadTasks(filePath): Reads and parses the tasks from the file.
//          If the file doesn’t exist, return an empty array.

// const taskManager = require('./taskManager');
const fs = require('fs');

function saveTasks(filePath, tasks) {
    fs.appendFileSync(filePath, tasks.toString());
}

const updatedContent = fs.readFileSync('tasks.json', 'utf-8');

// saveTasks(tasks.json, ___);

console.log(updatedContent);

module.exports = { saveTasks }
