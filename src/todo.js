class Todo {
    #complete = false

    // All public for now. Maybe change to #private later.
    constructor(title, description, dueDate, priority){
        if (title === undefined) {
            throw new Error("Title is undefined")
        }
        if (description === undefined) {
            throw new Error("Description is undefined")
        }
        if (dueDate === undefined) {
            throw new Error("Due Date is undefined")
        }
        if (!(dueDate instanceof Date)) {
            throw new Error("Due Date is not a date")
        }
        if (priority === undefined) {
            throw new Error("Priority is undefined")
        }
        if (isNaN(parseInt(priority))) {
            console.log(typeof priority)
            throw new Error("Priority is not a valid integer")
        }
        if (priority < 1 || priority > 3) {
            throw new Error("Priority must be between 1 - 3")
        }
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = parseInt(priority)
    }
    getComplete() {
        return this.#complete
    }
    setComplete() {
        this.#complete = true
    }
}
let todo = new Todo("Create task", "Create a task for a to-do list", new Date(2022, 2, 2), 3)
export {todo}