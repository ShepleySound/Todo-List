/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/add-todo-DOM.js":
/*!*********************************!*\
  !*** ./src/DOM/add-todo-DOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n// A full page for adding a todo to a project.\nconst markup = `\n    <h2>Add item to list: </h2>\n    <form id=\"add-form\">\n        <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"title\">\n        <textarea name=\"description\" id=\"description\" placeholder=\"description\" form=\"add-form\"></textarea>\n        <div id=\"priority-container\">\n            <label for=\"priority\">Priority</label>\n            <select name=\"priority\" id=\"priority\" form=\"add-form\">\n                <option value=\"1\">Low</option>\n                <option value=\"2\">Medium</option>\n                <option value=\"3\">High</option>\n            </select>\n    </form>\n        <div id=\"date-container\">\n            <div id=\"date-checkbox-container\">\n                <label for=\"date-checkbox\">Due Date</label>\n                <input type=\"checkbox\" name=\"date-checkbox\" id=\"date-checkbox\">\n            </div>\n            <div id=\"date-selector\" class=\"hidden\">\n                <label for=\"due-date\">Date / Time</label>\n                <input type=\"datetime-local\" name=\"due-date\" id=\"due-date\">\n            </div>\n        </div>\n        <div id=\"checklist-container\">\n            <div id=\"checklist-checkbox-container\">\n                <label for=\"checklist-checkbox\">Checklist</label>\n                <input type=\"checkbox\" name=\"checklist-checkbox\" id=\"checklist-checkbox\">\n            </div>\n            <div id=\"checklist\" class=\"hidden\"></div>\n        </div>\n        <input type=\"button\" value=\"Cancel\">\n        <a href=\"./todos.html\">\n            <input type=\"submit\" value=\"Submit\" id=\"submit\">\n        </a>\n    </div>\n`\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markup);\n\n//# sourceURL=webpack://todo-list/./src/DOM/add-todo-DOM.js?");

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-display */ \"./src/category-display.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todo_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-projects */ \"./src/todo-projects.js\");\n/* harmony import */ var _DOM_add_todo_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/add-todo-DOM */ \"./src/DOM/add-todo-DOM.js\");\n\n\n\n\n\ndocument.body.innerHTML = _DOM_add_todo_DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n\nconst currentProject = new _todo_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"myProject\")\n\n\nconst form = document.querySelector('#add-form')\nconst dateCheckbox = document.querySelector('#date-checkbox')\nconst dateSelector = document.querySelector('#date-selector')\n;(0,_category_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dateCheckbox, dateSelector)\nconst checklistCheckbox = document.querySelector('#checklist-checkbox')\nconst checklist = document.querySelector('#checklist')\n;(0,_category_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(checklistCheckbox, checklist)\n\n// Adds an item to the page's checklist.\nconst addChecklistItem = () => {\n    const checklistDiv = document.createElement('div')\n    checklistDiv.classList.add('checklist-item')\n    const checkbox = document.createElement('input')\n    checkbox.type = 'checkbox'\n    checkbox.classList.add('checklist-check')\n    const textBox = document.createElement('input')\n    textBox.type = 'text'\n    textBox.classList.add('checklist-input')\n    const addButton = document.createElement('button')\n    addButton.type = 'button'\n    addButton.id = 'add-button'\n    addButton.innerText = \"+\"\n    addButton.addEventListener('click', (e) => {\n        checklistDiv.removeChild(addButton)\n        addChecklistItem()\n    })\n    checklistDiv.append(checkbox, textBox, addButton)\n\n    \n\n    checklist.append(checklistDiv)\n}\n\n// Adds item to page's checklist if completely empty.\nif (checklist.innerHTML === '') {\n    addChecklistItem()\n}\nconst newTodo = form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](form.title.value, \n                             form.description.value, \n                             form.priority.value,\n                             dateCheckbox.checked,\n                             checklistCheckbox.checked)\n    currentProject.addTodo(newTodo)\n    localStorage.setItem(`${currentProject.title}`, JSON.stringify(currentProject))\n    console.log(JSON.parse(localStorage.getItem(`${currentProject.title}`)))\n    form.reset()\n    return newTodo\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodo);\n\n//# sourceURL=webpack://todo-list/./src/add-todo.js?");

/***/ }),

/***/ "./src/category-display.js":
/*!*********************************!*\
  !*** ./src/category-display.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst categoryDisplay = (checkbox, category) => {\n    checkbox.addEventListener('change', (e) => {\n        if (e.target.checked) {\n            category.classList.remove('hidden')\n        }\n        else {\n            category.classList.add('hidden')\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryDisplay);\n\n//# sourceURL=webpack://todo-list/./src/category-display.js?");

/***/ }),

/***/ "./src/todo-projects.js":
/*!******************************!*\
  !*** ./src/todo-projects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\nclass Project {\n    constructor(title){\n        this.title = title\n    }\n    todos = []\n    addTodo(todo) {\n        if (todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n        this.todos.push(todo)\n        return todo\n    }\n    sortBy = {\n        date: () => {\n            function compareDate(a, b) {\n                if (!a.hasDueDate){\n                    return 1\n                }\n                return a.dueDate - b.dueDate\n            }\n            this.todos.sort(compareDate)\n        },\n        urgency: () => {\n            function compareUrgency(a, b) {\n                return a.priority - b.priority\n            }\n            this.todos.sort(compareUrgency)\n        }\n    }\n\n    // sortBy = (function() {\n    //     function compareDate(a, b) {\n    //         return a.dueDate - b.dueDate\n    //     }\n    //     function compareUrgency(a, b){\n    //         return a.urgency - b.urgency\n    //     }\n    //     return {\n    //         date: function() {\n    //             this.todos.sort(a, b)\n    //         },\n    //         urgency: function() {\n    //             this.todos.sort(compareDate)\n    //             this.todos.sort(compareUrgency)\n    //         }\n    //     }\n    // })()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/todo-projects.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n    #complete = false\n\n    // All public for now. Maybe change to #private later.\n    constructor(title, description, priority, hasDueDate = false, hasChecklist = false){\n        if (title === undefined || title === '') {\n            throw new Error(\"Title is undefined or empty\")\n        }\n        if (description === undefined) {\n            throw new Error(\"Description is undefined\")\n        }\n        if (priority === undefined) {\n            throw new Error(\"Priority is undefined\")\n        }\n        if (isNaN(parseInt(priority))) {\n            console.log(typeof priority)\n            throw new Error(\"Priority is not a valid integer\")\n        }\n        if (priority < 1 || priority > 3) {\n            throw new Error(\"Priority must be between 1 - 3\")\n        }\n        this.title = title\n        this.description = description\n        this.priority = parseInt(priority)\n        this.hasDueDate = hasDueDate\n        this.hasChecklist = hasChecklist\n    }\n    dueDate = new Date()\n    checkList = []\n    toggleHasDueDate() {\n        return this.hasDueDate = !this.hasDueDate\n    }\n    toggleHasChecklist() {\n        return this.hasChecklist = !this.hasChecklist\n    }\n    getComplete() {\n        return this.#complete\n    }\n    triggerComplete() {\n        return this.#complete = true\n    }\n    setDueDate(dueDate) {\n        if (!(dueDate instanceof Date)) {\n            throw new Error(\"Due date is not a date\")\n        }\n        if (new Date() > dueDate){\n            throw new Error(\"Due date/time must be after current date/time\")\n        }\n        return this.dueDate = dueDate\n    }\n    addCheckItem(text, index = this.checkList.length) {\n        this.checkList.splice(index, 0, text)\n    }\n    removeCheckItem(index = (this.checkList.length - 1)) {\n        this.checkList.splice(index, 1)\n    }    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/add-todo.js");
/******/ 	
/******/ })()
;