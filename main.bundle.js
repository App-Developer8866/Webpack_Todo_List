"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["main"],{

/***/ "./modules/addToList.js":
/*!******************************!*\
  !*** ./modules/addToList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBookData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBookData.js */ \"./modules/updateBookData.js\");\n/* harmony import */ var _displayLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLists.js */ \"./modules/displayLists.js\");\n\r\n\r\n\r\nconst addToList = (value, completed, index, toDoList) => {\r\n  toDoList.push({ value, completed, index });\r\n  (0,_updateBookData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toDoList);\r\n  (0,_displayLists_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(toDoList);\r\n  return toDoList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToList);\n\n//# sourceURL=webpack://webpack_setup/./modules/addToList.js?");

/***/ }),

/***/ "./modules/clearList.js":
/*!******************************!*\
  !*** ./modules/clearList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBookData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBookData.js */ \"./modules/updateBookData.js\");\n/* harmony import */ var _displayLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLists.js */ \"./modules/displayLists.js\");\n\r\n\r\n\r\nconst clearList = (taskList) => {\r\n  const filteredArray = taskList.filter((task) => task.completed !== false);\r\n  const filteredArray2 = taskList.filter((task) => task.completed !== true);\r\n\r\n  if (filteredArray.length === 0) {\r\n    taskList.length = 0;\r\n    localStorage.removeItem('tasksList');\r\n  } else {\r\n    taskList.length = 0;\r\n    filteredArray2.forEach((task, index) => {\r\n      task.index = index + 1;\r\n      taskList.push(task);\r\n    });\r\n\r\n    (0,_updateBookData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\r\n  }\r\n\r\n  (0,_displayLists_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearList);\n\n//# sourceURL=webpack://webpack_setup/./modules/clearList.js?");

/***/ }),

/***/ "./modules/displayLists.js":
/*!*********************************!*\
  !*** ./modules/displayLists.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeListitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeListitem.js */ \"./modules/removeListitem.js\");\n/* harmony import */ var _editList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editList.js */ \"./modules/editList.js\");\n/* harmony import */ var _markComplete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markComplete.js */ \"./modules/markComplete.js\");\n\r\n\r\n\r\n\r\nconst displayLists = (taskList) => {\r\n  let list = '';\r\n  const toDoListsDiv = document.getElementById('to-do-lists');\r\n  Object.values(taskList).forEach((task) => {\r\n    if (task.completed) {\r\n      list += ` <li data-index=\"${task.index}\">\r\n                                <div class=\"list-item\">\r\n                                    <input type=\"checkbox\" id=\"checkbox${task.index}\" class=\"checkbox\" checked=\"checked\"> \r\n                                    <label for=\"checkbox${task.index}\"></label>\r\n                                    <input  value=\"${task.value}\" class=\"list-text underline\">\r\n                                    <i class=\"fas fa-sharp list-icon fa-trash removeTask display\"></i>\r\n                                </div>\r\n                            </li>`;\r\n    } else {\r\n      list += ` <li data-index=\"${task.index}\">\r\n                                <div class=\"list-item\">\r\n                                    <input type=\"checkbox\" id=\"checkbox${task.index}\" class=\"checkbox\"> \r\n                                    <label for=\"checkbox${task.index}\"></label>\r\n                                    <input  value=\"${task.value}\" class=\"list-text\">\r\n                                    <i class=\"fas fa-sharp list-icon fa-trash removeTask display\"></i>\r\n                                </div>\r\n                            </li>`;\r\n    }\r\n  });\r\n  toDoListsDiv.innerHTML = '';\r\n  toDoListsDiv.innerHTML = list;\r\n\r\n  const listTextInputs = document.querySelectorAll('.list-text');\r\n  listTextInputs.forEach((input) => {\r\n    input.addEventListener('focus', (event) => {\r\n      const parent = event.target.parentNode;\r\n      parent.parentNode.classList.add('editing');\r\n      event.target.classList.add('editing');\r\n    });\r\n    input.addEventListener('blur', (event) => {\r\n      const parent = event.target.parentNode;\r\n      parent.parentNode.classList.remove('editing');\r\n      event.target.classList.remove('editing');\r\n      const toDoList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n      displayLists(toDoList);\r\n    });\r\n    input.addEventListener('input', (event) => {\r\n      const index = event.target.parentNode.parentNode.getAttribute('data-index');\r\n      const { value } = event.target;\r\n\r\n      if (value === '') {\r\n        (0,_removeListitem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, taskList);\r\n      } else {\r\n        (0,_editList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index, value, taskList);\r\n      }\r\n    });\r\n  });\r\n\r\n  const removeTaskIcons = document.querySelectorAll('.list-icon');\r\n  removeTaskIcons.forEach((removeTaskIcon) => {\r\n    removeTaskIcon.addEventListener('click', (event) => {\r\n      const listItem = event.target.closest('li');\r\n      const index = listItem.getAttribute('data-index');\r\n      (0,_removeListitem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, taskList);\r\n      const toDoList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n      displayLists(toDoList);\r\n    });\r\n  });\r\n\r\n  const checkboxes = document.querySelectorAll('.checkbox');\r\n  checkboxes.forEach((checkbox) => {\r\n    checkbox.addEventListener('change', (event) => {\r\n      if (event.target.checked) {\r\n        (0,_markComplete_js__WEBPACK_IMPORTED_MODULE_2__.markComplete)(event, taskList);\r\n      } else {\r\n        (0,_markComplete_js__WEBPACK_IMPORTED_MODULE_2__.markUnComplete)(event, taskList);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLists);\n\n//# sourceURL=webpack://webpack_setup/./modules/displayLists.js?");

/***/ }),

/***/ "./modules/editList.js":
/*!*****************************!*\
  !*** ./modules/editList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBookData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBookData.js */ \"./modules/updateBookData.js\");\n\r\n\r\nconst editList = (index, value, toDoList) => {\r\n  const updatedTasks = toDoList.filter((tasks) => {\r\n    if (tasks.index === parseInt(index, 10)) {\r\n      tasks.value = value;\r\n      return true;\r\n    }\r\n    return true;\r\n  });\r\n  toDoList = updatedTasks;\r\n  (0,_updateBookData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toDoList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editList);\n\n//# sourceURL=webpack://webpack_setup/./modules/editList.js?");

/***/ }),

/***/ "./modules/markComplete.js":
/*!*********************************!*\
  !*** ./modules/markComplete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"markComplete\": () => (/* binding */ markComplete),\n/* harmony export */   \"markUnComplete\": () => (/* binding */ markUnComplete)\n/* harmony export */ });\n/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStatus.js */ \"./modules/updateStatus.js\");\n\r\n\r\nconst markComplete = (event, toDoList) => {\r\n  const checkbox = event.target;\r\n\r\n  const parent = checkbox.parentElement;\r\n  parent.querySelector('.list-text').classList.add('underline');\r\n  const label = parent.querySelector('label');\r\n  label.classList.toggle('checked');\r\n  const index = parent.parentElement.getAttribute('data-index');\r\n  (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, true, toDoList);\r\n};\r\n\r\nconst markUnComplete = (event, toDoList) => {\r\n  const checkbox = event.target;\r\n  const parent = checkbox.parentElement;\r\n  parent.querySelector('.list-text').classList.remove('underline');\r\n  const label = parent.querySelector('label');\r\n  label.classList.toggle('checked');\r\n  const index = parent.parentElement.getAttribute('data-index');\r\n  (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, false, toDoList);\r\n};\n\n//# sourceURL=webpack://webpack_setup/./modules/markComplete.js?");

/***/ }),

/***/ "./modules/refreshList.js":
/*!********************************!*\
  !*** ./modules/refreshList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLists.js */ \"./modules/displayLists.js\");\n\r\n\r\nconst refreshList = (toDoList) => {\r\n  localStorage.removeItem('tasksList');\r\n  toDoList.length = 0;\r\n  (0,_displayLists_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toDoList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshList);\n\n//# sourceURL=webpack://webpack_setup/./modules/refreshList.js?");

/***/ }),

/***/ "./modules/removeListitem.js":
/*!***********************************!*\
  !*** ./modules/removeListitem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBookData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBookData.js */ \"./modules/updateBookData.js\");\n\r\n\r\nconst removeListitem = (index, toDoList) => {\r\n  toDoList = toDoList.filter((task) => task.index !== parseInt(index, 10));\r\n\r\n  toDoList = toDoList.map((task, index) => {\r\n    task.index = index + 1;\r\n    return task;\r\n  });\r\n  (0,_updateBookData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toDoList);\r\n  return toDoList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeListitem);\n\n//# sourceURL=webpack://webpack_setup/./modules/removeListitem.js?");

/***/ }),

/***/ "./modules/updateBookData.js":
/*!***********************************!*\
  !*** ./modules/updateBookData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateBookData = (collectionData) => {\r\n  localStorage.setItem('tasksList', JSON.stringify(collectionData));\r\n  const tasksList = JSON.parse(localStorage.getItem('tasksList'));\r\n\r\n  const addListField = document.getElementById('addList');\r\n  if (addListField) {\r\n    addListField.value = '';\r\n  }\r\n\r\n  return tasksList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBookData);\n\n//# sourceURL=webpack://webpack_setup/./modules/updateBookData.js?");

/***/ }),

/***/ "./modules/updateStatus.js":
/*!*********************************!*\
  !*** ./modules/updateStatus.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBookData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBookData.js */ \"./modules/updateBookData.js\");\n\r\n\r\nconst updateStatus = (index, status, toDoList) => {\r\n  const updatedTasks = toDoList.filter((tasks) => {\r\n    if (tasks.index === parseInt(index, 10)) {\r\n      tasks.completed = status;\r\n      return true;\r\n    }\r\n    return true;\r\n  });\r\n  toDoList = updatedTasks;\r\n  (0,_updateBookData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toDoList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack://webpack_setup/./modules/updateStatus.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".heading {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  width: 40%;\\r\\n  box-shadow: 1px 1px 2px 2px #aeabab;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.head {\\r\\n  display: flex;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n}\\r\\n\\r\\n.form-head {\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.head p {\\r\\n  flex: 9;\\r\\n  border: 0;\\r\\n  padding-left: 2%;\\r\\n}\\r\\n\\r\\n.addList {\\r\\n  flex: 9;\\r\\n  border: 0;\\r\\n  padding-left: 2%;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.addList:focus {\\r\\n  border-color: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.click-icon,\\r\\n.recycle_icon {\\r\\n  flex: 1;\\r\\n  margin-top: auto;\\r\\n  margin-bottom: auto;\\r\\n  color: #ddd;\\r\\n  display: flex !important;\\r\\n  justify-content: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.checkbox-list {\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.checkbox-list li {\\r\\n  border-bottom: 1px solid #ddd;\\r\\n}\\r\\n\\r\\n.checkbox-list input[type=\\\"checkbox\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.list-text {\\r\\n  flex: 8.5;\\r\\n  border: 0;\\r\\n  height: 100%;\\r\\n  padding: 3% 3%;\\r\\n  font-size: 16px;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.list-text:focus {\\r\\n  border-color: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.checkbox-list label {\\r\\n  display: inline-block;\\r\\n  cursor: pointer;\\r\\n  flex: 0.5;\\r\\n  margin: auto 0;\\r\\n  padding-left: 2%;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.checkbox-list label::before {\\r\\n  content: \\\"\\\";\\r\\n  display: inline-block;\\r\\n  width: 16px;\\r\\n  height: 16px;\\r\\n  border: 1px solid #ccc;\\r\\n  background-color: #fff;\\r\\n  margin-right: 5px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n.list-icon {\\r\\n  flex: 1;\\r\\n  margin-top: auto;\\r\\n  margin-bottom: auto;\\r\\n  color: #ddd;\\r\\n  display: flex !important;\\r\\n  justify-content: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.checkbox-list input[type=\\\"checkbox\\\"]:checked + label::before {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.checkbox-list input[type=\\\"checkbox\\\"]:checked + label::after {\\r\\n  content: \\\"\\\\f00c\\\";\\r\\n  color: #2196f3;\\r\\n  font-family: \\\"Font Awesome 5 Free\\\", sans-serif;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 29%;\\r\\n  font-weight: 900;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  display: flex !important;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background: #f6f6f6;\\r\\n  display: flex;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.clear-list {\\r\\n  appearance: none;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  margin: auto;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.clear-list:hover {\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  display: inline-block;\\r\\n  cursor: pointer;\\r\\n  flex: 0.5;\\r\\n  margin-top: auto;\\r\\n  margin-bottom: auto;\\r\\n  padding-left: 2%;\\r\\n  color: #2e8ae6;\\r\\n}\\r\\n\\r\\n.underline {\\r\\n  color: rgba(0, 0, 0, 0.45);\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.editing {\\r\\n  background-color: #fffeca !important;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addToList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/addToList.js */ \"./modules/addToList.js\");\n/* harmony import */ var _modules_clearList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/clearList.js */ \"./modules/clearList.js\");\n/* harmony import */ var _modules_refreshList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/refreshList.js */ \"./modules/refreshList.js\");\n/* harmony import */ var _modules_displayLists_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/displayLists.js */ \"./modules/displayLists.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n(0,_modules_displayLists_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(taskList);\r\n\r\nconst addListField = document.getElementById('addList');\r\nconst addListBtn = document.getElementById('addListBtn');\r\nconst toDoListsDiv = document.getElementById('to-do-lists');\r\nconst clearlist = document.getElementById('clear-list');\r\nconst recycle = document.getElementById('recycle');\r\naddListBtn.addEventListener('click', () => {\r\n  let childCount = toDoListsDiv.childElementCount;\r\n  const { value } = addListField;\r\n  childCount += 1;\r\n  const refreshTaskList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n  if (value !== '') {\r\n    (0,_modules_addToList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, false, childCount, refreshTaskList);\r\n  }\r\n});\r\naddListField.addEventListener('keydown', (event) => {\r\n  if (event.key === 'Enter') {\r\n    let childCount = toDoListsDiv.childElementCount;\r\n    const { value } = addListField;\r\n    childCount += 1;\r\n    const refreshTaskList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n\r\n    if (value !== '') {\r\n      (0,_modules_addToList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, false, childCount, refreshTaskList);\r\n    }\r\n  }\r\n});\r\nclearlist.addEventListener('click', () => {\r\n  const refreshTaskList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n  (0,_modules_clearList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(refreshTaskList);\r\n});\r\nrecycle.addEventListener('click', () => {\r\n  const refreshTaskList = JSON.parse(localStorage.getItem('tasksList')) || [];\r\n  (0,_modules_refreshList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(refreshTaskList);\r\n});\n\n//# sourceURL=webpack://webpack_setup/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);