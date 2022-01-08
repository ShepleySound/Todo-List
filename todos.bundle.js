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

/***/ "./src/DOM/generate-todo-DOM.js":
/*!**************************************!*\
  !*** ./src/DOM/generate-todo-DOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n\n\n// Generate a DOM representation of a Todo object.\n\nconst generateTodoDOM = (Todo) => {\n    const container = document.createElement('div')\n    container.classList.add('todo')\n    \n    const checkAndTitleContainer = document.createElement('div')\n    checkAndTitleContainer.classList.add('check-and-title')\n\n    const checkbox = document.createElement('input')\n    checkbox.type = 'checkbox'\n    checkbox.classList.add('todo-complete')\n    const title = document.createElement('h3')\n    title.classList.add('title')\n\n    checkAndTitleContainer.append(checkbox, title)\n    \n    const description = document.createElement('p')\n    description.classList.add('description')\n\n    title.innerText = Todo.title\n    description.innerText = Todo.description\n\n    container.append(checkAndTitleContainer, description)\n    return container\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTodoDOM);\n\n//# sourceURL=webpack://todo-list/./src/DOM/generate-todo-DOM.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n    #complete = false\n\n    // All public for now. Maybe change to #private later.\n    constructor(title, description, priority, hasDueDate = false, hasChecklist = false){\n        if (title === undefined || title === '') {\n            throw new Error(\"Title is undefined or empty\")\n        }\n        if (description === undefined) {\n            throw new Error(\"Description is undefined\")\n        }\n        if (priority === undefined) {\n            throw new Error(\"Priority is undefined\")\n        }\n        if (isNaN(parseInt(priority))) {\n            console.log(typeof priority)\n            throw new Error(\"Priority is not a valid integer\")\n        }\n        if (priority < 1 || priority > 3) {\n            throw new Error(\"Priority must be between 1 - 3\")\n        }\n        this.title = title\n        this.description = description\n        this.priority = parseInt(priority)\n        this.hasDueDate = hasDueDate\n        this.hasChecklist = hasChecklist\n    }\n    dueDate = new Date()\n    checkList = []\n    toggleHasDueDate() {\n        return this.hasDueDate = !this.hasDueDate\n    }\n    toggleHasChecklist() {\n        return this.hasChecklist = !this.hasChecklist\n    }\n    getComplete() {\n        return this.#complete\n    }\n    triggerComplete() {\n        return this.#complete = true\n    }\n    setDueDate(dueDate) {\n        if (!(dueDate instanceof Date)) {\n            throw new Error(\"Due date is not a date\")\n        }\n        if (new Date() > dueDate){\n            throw new Error(\"Due date/time must be after current date/time\")\n        }\n        return this.dueDate = dueDate\n    }\n    addCheckItem(text, index = this.checkList.length) {\n        this.checkList.splice(index, 0, text)\n    }\n    removeCheckItem(index = (this.checkList.length - 1)) {\n        this.checkList.splice(index, 1)\n    }    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todos-page.js":
/*!***************************!*\
  !*** ./src/todos-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_generate_todo_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/generate-todo-DOM */ \"./src/DOM/generate-todo-DOM.js\");\n\nconsole.log(localStorage.getItem(\"currentProject\"))\n;(0,_DOM_generate_todo_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(localStorage.getItem(\"currentProject\"))\n\n//# sourceURL=webpack://todo-list/./src/todos-page.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todos-page.js");
/******/ 	
/******/ })()
;