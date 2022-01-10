import Todo from './todo-class';

class Project {
  constructor(title) {
    this.title = title;
  }

  static fromJSON(JSON) {
    const project = new Project(JSON.title);
    const todos = [];
    JSON.todos.forEach((todo) => {
      todos.push(Todo.fromJSON(todo));
    });
    return Object.assign(project, JSON, { todos });
  }

  todos = [];

  // eslint-disable-next-line consistent-return
  addTodo(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
      return todo;
    }
  }

  editTodo(oldTodo, newTodo) {
    if (newTodo instanceof Todo) {
      const index = this.todos.indexOf(oldTodo);
      this.todos[index] = newTodo;
    }
  }

  spliceTodo(index, newTodo) {
    if (newTodo instanceof Todo) {
      this.todos[index] = newTodo;
    }
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getTodo(index) {
    const todo = this.todos[index];
    return Todo.fromJSON(todo);
  }

  getAllTodos() {
    const todos = [];
    this.todos.forEach((todo) => {
      todos.push(Todo.fromJSON(todo));
    });
    return todos;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }
}

export default Project;
