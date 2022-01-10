class Todo {
  complete = false;

  // All public for now. Maybe change to #private later.
  constructor(title, description, priority, project, hasDueDate = false, hasChecklist = false) {
    if (title === undefined || title === '') {
      throw new Error('Title is undefined or empty');
    }
    if (description === undefined) {
      throw new Error('Description is undefined');
    }
    if (priority === undefined) {
      throw new Error('Priority is undefined');
    }
    if (Number.isNaN(parseInt(priority, 10))) {
      throw new Error('Priority is not a valid integer');
    }
    if (priority < 1 || priority > 3) {
      throw new Error('Priority must be between 1 - 3');
    }
    this.title = title;
    this.description = description;
    this.priority = parseInt(priority, 10);
    this.hasDueDate = hasDueDate;
    this.hasChecklist = hasChecklist;
    this.project = project;
  }

  static fromJSON(JSON) {
    const todo = new Todo(
      JSON.title,
      JSON.description,
      JSON.priority,
      JSON.project,
      JSON.hasDueDate,
      JSON.hasChecklist,
    );
    return Object.assign(todo, JSON);
  }

  checkList = [];

  toggleHasDueDate() {
    this.hasDueDate = !this.hasDueDate;
  }

  toggleHasChecklist() {
    this.hasChecklist = !this.hasChecklist;
  }

  setDueDate(dueDate) {
    if (!(dueDate instanceof Date)) {
      throw new Error('Due date is not a date');
    }
    if (new Date() > dueDate) {
      throw new Error('Due date/time must be after current date/time');
    }
    if (dueDate.toString() === 'Invalid Date') {
      throw new Error('Invalid Date');
    }
    this.dueDate = dueDate;
  }

  addCheckItem(text, index = this.checkList.length) {
    this.checkList.splice(index, 0, text);
  }

  removeCheckItem(index = (this.checkList.length - 1)) {
    this.checkList.splice(index, 1);
  }
}
export default Todo;
