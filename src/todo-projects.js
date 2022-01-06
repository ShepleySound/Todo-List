import Todo from './todo'
class Project {
    constructor(title){
        this.title = title
    }
    todos = []
    addTodo(todo) {
        if (todo instanceof Todo)
        this.todos.push(todo)
        return todo
    }
}

export default Project