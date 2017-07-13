function sayHiTo(person) {
 console.log('hi', person);
}
sayHiTo('gordon');

//It should have a function to display todos
var todos = ['item 1', 'item 2', 'item 3']
function displayTodos() {
  console.log('My todos:', todos); 
}
displayTodos();
//It should have a function to add todos
function addTodo() {
  todos.push('new todo');
}
addTodo();
displayTodos();
addTodo();
displayTodos();
function addTodo() {
 todos.push('new todo');
 displayTodos();
}
function addTodo() {
 todos.push('new todo');
 displayTodos();
}
addTodo();
function addTodo(todo) {
 todos.push(todo);
 displayTodos();
}
addTodo('hello there');
//It should have a function to change todos
function changeTodo(position, newValue) {
 todos[position] = newValue;
}
displayTodos();
changeTodo(0, 'changed');
displayTodos();
function changeTodo(position, newValue) {
 todos[position] = newValue;
 displayTodos();
}
displayTodos();
changeTodo(0, 'changed again');
//It should have a function to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
deleteTodo();
deleteTodo(0);
deleteTodo(2, 2);

