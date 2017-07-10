//It should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];
//It should have a way to display todos
console.log('My todos:', todos);
//It should have a way to add new todos
todos.push('new todo');
//Changing the first item
todos[0] = 'Changed!';
// Deleteing the first item
todos.splice(0, 1);
