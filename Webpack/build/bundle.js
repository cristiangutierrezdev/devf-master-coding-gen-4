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

/***/ "../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/styles.scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/styles.scss?");

/***/ }),

/***/ "../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/app.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/app.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _metodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metodos */ \"../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/metodos.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/styles.scss\");\n\r\n\r\n\r\nconst button = document.querySelector('.button-wrapper__btn');\r\n\r\nbutton.addEventListener('click', _metodos__WEBPACK_IMPORTED_MODULE_0__.changeColor);\r\n\n\n//# sourceURL=webpack://Webpack/../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/app.js?");

/***/ }),

/***/ "../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/metodos.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/metodos.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeColor\": () => (/* binding */ changeColor)\n/* harmony export */ });\nconst links = document.querySelectorAll('.mi-menu__nav-link');\r\nconst menu = document.querySelector('.mi-menu');\r\n\r\nfunction changeColor() {\r\n  menu.classList.toggle('mi-menu--bg-green');\r\n  links.forEach((link)=>{\r\n    link.classList.toggle('mi-menu--color-white');\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://Webpack/../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/metodos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../../Documents/dll2.exe/projects/Devf/Master/devf-master-coding-g4/Webpack/src/app.js");
/******/ 	
/******/ })()
;