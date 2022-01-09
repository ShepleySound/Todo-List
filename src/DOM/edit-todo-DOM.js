
// A full page for editing a todo from a project.

const editMarkup = (project) => {
    const markup = `
        <div id="add-header">
        <h2>Edit todo from ${project}</h2>
        </div>
        <form id="add-form">
            <input type="text" name="title" id="title" placeholder="title">
            <textarea name="description" id="description" placeholder="description" form="add-form"></textarea>
            <div id="priority-container">
                <label for="priority">Priority</label>
                <select name="priority" id="priority" form="add-form">
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
        </form>
            <div id="date-container">
                <div id="date-checkbox-container">
                    <label for="date-checkbox">Due Date</label>
                    <input type="checkbox" name="date-checkbox" id="date-checkbox">
                </div>
                <div id="date-selector" class="hidden">
                    <input type="datetime-local" name="due-date" id="due-date">
                </div>
            </div>
            <div id="checklist-container">
                <div id="checklist-checkbox-container">
                    <label for="checklist-checkbox">Checklist</label>
                    <input type="checkbox" name="checklist-checkbox" id="checklist-checkbox">
                </div>
                <div id="checklist" class="hidden"></div>
            </div>
            <input type="button" value="Cancel" id="cancel">
            <input type="submit" value="Submit" id="submit">
        </div>
    `
    document.body.innerHTML = markup
}


export default editMarkup