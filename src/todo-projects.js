import Todo from './todo'
class Project {
    constructor(title){
        this.title = title
    }
    static fromJSON(JSON){
        const project = new Project(JSON.title)
        return Object.assign(project, JSON)
    }
    todos = []
    addTodo(todo) {
        if (todo instanceof Todo){
            this.todos.push(todo)
            return todo
        }
    }
    editTodo(index, newTodo){
        if (newTodo instanceof Todo){
            this.todos[index] = newTodo
        }
    }
    removeTodo(index) {
        this.todos.splice(index, 1)
    }
    getTodo(index) {
            const todo = this.todos[index]
            return Todo.fromJSON(todo)
    }
    sortBy = {
        date: () => {
            function compareDate(a, b) {
                if (!a.hasDueDate){
                    return 1
                }
                return a.dueDate - b.dueDate
            }
            this.todos.sort(compareDate)
        },
        urgency: () => {
            function compareUrgency(a, b) {
                return a.priority - b.priority
            }
            this.todos.sort(compareUrgency)
        }
    }

    // sortBy = (function() {
    //     function compareDate(a, b) {
    //         return a.dueDate - b.dueDate
    //     }
    //     function compareUrgency(a, b){
    //         return a.urgency - b.urgency
    //     }
    //     return {
    //         date: function() {
    //             this.todos.sort(a, b)
    //         },
    //         urgency: function() {
    //             this.todos.sort(compareDate)
    //             this.todos.sort(compareUrgency)
    //         }
    //     }
    // })()
}

export default Project