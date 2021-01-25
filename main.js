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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst contactPage = (() => {\n  const load = () => {\n    const content = document.getElementById('content');\n\n    content.innerHTML = '';\n\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.textContent = 'Contact';\n\n    header.appendChild(title);\n\n    content.appendChild(header);\n  };\n\n  return {\n    load,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst homePage = (() => {\n  const content = document.getElementById('content');\n  const createHeader = () => {\n    content.innerHTML = '';\n\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.textContent = 'Chozen Noodle';\n\n    header.appendChild(title);\n\n    content.appendChild(header);\n  };\n\n  const createParagraphs = (parent) => {\n    const firstPara = document.createElement('p');\n    firstPara.textContent =\n      'We’d like to say our origins can be traced back to Genghis Khan, but that’s only partly true.';\n    parent.appendChild(firstPara);\n    const secondPara = document.createElement('p');\n    secondPara.textContent =\n      'For those of you old enough to remember, we started out with a create-your-own-stir-fry concept called Mongolian Barbeque. Lots of fun but it was difficult to get the 8-foot iron grill set up in a shopping centre or motorway service station, let alone all the horses, swords, and associated weaponry you need these days.';\n    parent.appendChild(secondPara);\n    const thirdPara = document.createElement('p');\n    thirdPara.textContent =\n      ' So we looked for something simpler that allowed us to pursue our love of healthy tasty Asian food that used fresh ingredients. The result was Chozen Noodle.';\n    parent.appendChild(thirdPara);\n  };\n\n  const createAboutSection = (parent) => {\n    const homeContent = document.createElement('section');\n    homeContent.classList.add('home-content');\n    const subheading = document.createElement('h2');\n    subheading.classList.add('subheading');\n    subheading.textContent = 'About';\n    homeContent.appendChild(subheading);\n    createParagraphs(homeContent);\n    parent.appendChild(homeContent);\n  };\n\n  const createHomeImage = (parent) => {\n    const imgContainer = document.createElement('section');\n    imgContainer.classList.add('img-container');\n    const img = document.createElement('img');\n    img.classList.add('home-img');\n    img.src =\n      'https://images.unsplash.com/photo-1552538962-40822613a09d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1830&q=80';\n    imgContainer.appendChild(img);\n    parent.appendChild(imgContainer);\n  };\n\n  const createMain = () => {\n    const main = document.createElement('main');\n    createAboutSection(main);\n    createHomeImage(main);\n    content.appendChild(main);\n  };\n\n  const load = () => {\n    createHeader();\n    createMain();\n  };\n\n  return {\n    load,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.default.load();\n\nconst homeBtn = document.getElementById('home-btn');\n\nconst menuBtn = document.getElementById('menu-btn');\n\nconst contactBtn = document.getElementById('contact-btn');\n\nconst allBtns = document.querySelectorAll('.nav-btn');\n\nconst handleClick = (e) => {\n  allBtns.forEach((btn) => {\n    btn.classList.remove('active');\n  });\n  e.target.classList.add('active');\n};\n\nallBtns.forEach((btn) => btn.addEventListener('click', handleClick));\n\nhomeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.default.load);\n\nmenuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.default.load);\n\ncontactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.default.load);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst menuPage = (() => {\n  const load = () => {\n    const content = document.getElementById('content');\n\n    content.innerHTML = '';\n\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.textContent = 'Menu';\n\n    header.appendChild(title);\n\n    content.appendChild(header);\n  };\n\n  return {\n    load,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;