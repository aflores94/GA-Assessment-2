//jshint esversion:6 
const data = require('./data/todos');

const todos = [
    {todo: String, done: String},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, todo) {
    todos.splice(id, 1, todo);
}

function deleteOne(id) {
    todos.splice(id, 1);
}

function create(todo) {
    todos.push(todo);
}

function getOne(id) {
    return todos[id];
}

function getAll() {
    return todos;
}