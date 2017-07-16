var todoList = {
   todos: ['item 1', 'item 2', 'item 3'],
   displayTodos: function() {
   console.log('My Todos', this.todos);
   for(var i = 0; i < this.todos.length; i++ ) {
    //this.todos.length has 3 items
	// i=0 // i=1 // i=2
	console.log(this.todos[i].todoText);
   }
 
  },
  addTodo: function(todoText) {
   this.todos.push({
    todoText: todoText,
    completed: false
	});
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

todoList.displayTodos();
todoList.addTodo('first');
todoList.addTodo('second');
