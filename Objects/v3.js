// It should store the todos array on an object
var todoList = {
 todos: ['item 1', 'item 2', 'item 3'],
};
console.log(todoList);

// It should have a displayTodos method
var todo_List = {
 todos: ['item 1', 'item 2', 'item 3'],
 displayTodos: function() {
   console.log('My Todos', this.todos);
 }
};
todo_List.displayTodos();
//It should have a addTodo method

var todo_Lists = {
   todos: ['item 1', 'item 2', 'item 3'],
   displayTodos: function() {
   console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
   this.todos.push(todo);
   this.displayTodos();
}
};
todo_Lists.addTodo('plunker');

// It should have a changeTodo method

var todo_changeList = {
 
   todos: ['item 1', 'item 2', 'item 3'],
 
   displayTodos: function() {
   
   console.log('My Todos', this.todos);
 
  },
  addTodo: function(todo) {
   this.todos.push(todo);
   this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] =  newValue;
    this.displayTodos();
}
  
};

todo_changeList.changeTodo(0, 'first');

//It should have a deleteTodo method

var todo_deleteList = {
   todos: ['item 1', 'item 2', 'item 3'],
   displayTodos: function() {
   console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
   this.todos.push(todo);
   this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] =  newValue;
    this.displayTodos();
},
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
}
  
};

todo_deleteList.deleteTodo(1);
