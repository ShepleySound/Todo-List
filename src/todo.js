class Todo {
    #complete = false

    // All public for now. Maybe change to #private later.
    constructor(title, description, priority, hasDueDate = true){
        if (title === undefined) {
            throw new Error("Title is undefined")
        }
        if (description === undefined) {
            throw new Error("Description is undefined")
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
        this.priority = parseInt(priority)
        this.hasDueDate = hasDueDate
    }
    dueDate = new Date()
    checkList = []
    toggleHasDueDate() {
        return this.hasDueDate = !this.hasDueDate
    }
    getComplete() {
        return this.#complete
    }
    triggerComplete() {
        return this.#complete = true
    }
    setDueDate(dueDate) {
        if (!(dueDate instanceof Date)) {
            throw new Error("Due date is not a date")
        }
        if (new Date() > dueDate){
            throw new Error("Due date/time must be after current date/time")
        }
        return this.dueDate = dueDate
    }
    addCheckItem(text, index = this.checkList.length) {
        this.checkList.splice(index, 0, text)
    }
    removeCheckItem(index = (this.checkList.length - 1)) {
        this.checkList.splice(index, 1)
    }    
}
export default Todo
