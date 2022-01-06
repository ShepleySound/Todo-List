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
    sortByDate() {
        function compareDate(a, b) {
            if (!a.hasDueDate){
                return 1
            }
            return a.dueDate - b.dueDate
        }
        this.todos.sort(compareDate)
    }
    sortByUrgency() {
        function compareUrgency(a, b) {
            return a.priority - b.priority
        }
        this.sortByDate()
        this.todos.sort(compareUrgency)
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