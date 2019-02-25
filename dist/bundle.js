/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preview_1 = __webpack_require__(/*! ./preview */ "./src/preview/index.ts");
const web_components_1 = __webpack_require__(/*! ./web-components */ "./src/web-components/index.ts");
const json = {
    html: `
    <hero-header>
      <span slot="title">aaaa</span>
      <img slot="cover" src="./assets/cover.jpeg">
    </hero-header>
  `,
    components: [web_components_1.heroHeader]
};
document.body.appendChild(preview_1.preview);
setTimeout(() => {
    preview_1.preview.contentWindow.postMessage(JSON.stringify(json), "*");
}, 1000);


/***/ }),

/***/ "./src/preview/index.ts":
/*!******************************!*\
  !*** ./src/preview/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const html = __webpack_require__(/*! ./template.html */ "./src/preview/template.html");
const iframe = document.createElement("iframe");
iframe.srcdoc = html;
exports.preview = iframe;


/***/ }),

/***/ "./src/preview/template.html":
/*!***********************************!*\
  !*** ./src/preview/template.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"urf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!-- ress.css * v1.2.2 -->\n<style>\nhtml{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}\n</style>\n</head>\n<body>\n<script>\nconst defineComponent = (name, html, css) => {\n  class Element extends HTMLElement {\n    constructor() {\n      super();\n      const shadow = this.attachShadow({ mode: \"open\" });\n      shadow.innerHTML = html;\n      if (css) {\n        const style = document.createElement(\"style\");\n        style.textContent = css;\n        shadow.appendChild(style);\n      }\n    }\n  }\n\n  customElements.define(name, Element);\n};\n\nwindow.addEventListener(\"message\", event => {\n  const json = JSON.parse(event.data);\n  for (const component of json.components) {\n    defineComponent(component.name, component.html, component.css);\n  }\n  document.body.innerHTML = json.html;\n}, false);\n</script>\n</body>\n</html>";

/***/ }),

/***/ "./src/web-components/container/hero-header/index.ts":
/*!***********************************************************!*\
  !*** ./src/web-components/container/hero-header/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const template = __webpack_require__(/*! ./template.html */ "./src/web-components/container/hero-header/template.html");
const style = __webpack_require__(/*! ./style.scss */ "./src/web-components/container/hero-header/style.scss");
exports.heroHeader = {
    name: "hero-header",
    html: template,
    css: style,
    container: true,
    slot: {
        cover: "image",
        title: "text"
    }
};


/***/ }),

/***/ "./src/web-components/container/hero-header/style.scss":
/*!*************************************************************!*\
  !*** ./src/web-components/container/hero-header/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-header {\n  position: relative; }\n  .hero-header__cover ::slotted(img) {\n    width: 100%; }\n  .hero-header__title {\n    position: absolute;\n    color: var(--title-color);\n    font-size: 5rem;\n    left: 50%;\n    bottom: 10px;\n    transform: translateX(-50%); }\n"

/***/ }),

/***/ "./src/web-components/container/hero-header/template.html":
/*!****************************************************************!*\
  !*** ./src/web-components/container/hero-header/template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"hero-header\">\n  <div class=\"hero-header__cover\">\n    <slot name=\"cover\"></slot>\n  </div>\n  <h1 class=\"hero-header__title\">\n    <slot name=\"title\"></slot>\n  </h1>\n</header>";

/***/ }),

/***/ "./src/web-components/index.ts":
/*!*************************************!*\
  !*** ./src/web-components/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hero_header_1 = __webpack_require__(/*! ./container/hero-header */ "./src/web-components/container/hero-header/index.ts");
exports.heroHeader = hero_header_1.heroHeader;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wcmV2aWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wcmV2aWV3L3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi1jb21wb25lbnRzL2NvbnRhaW5lci9oZXJvLWhlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViLWNvbXBvbmVudHMvY29udGFpbmVyL2hlcm8taGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi1jb21wb25lbnRzL2NvbnRhaW5lci9oZXJvLWhlYWRlci90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy93ZWItY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFH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Z0MsdUJBQXVCLEVBQUUsd0NBQXdDLGtCQUFrQixFQUFFLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHNCQUFzQixnQkFBZ0IsbUJBQW1CLGtDQUFrQyxFQUFFLEc7Ozs7Ozs7Ozs7O0FDQXBTLCtOOzs7Ozs7Ozs7Ozs7OztBQ0FBLDhIQUFxRDtBQUE1Qyw2Q0FBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IHByZXZpZXcgfSBmcm9tIFwiLi9wcmV2aWV3XCI7XG5pbXBvcnQgeyBoZXJvSGVhZGVyIH0gZnJvbSBcIi4vd2ViLWNvbXBvbmVudHNcIjtcblxuY29uc3QganNvbiA9IHtcbiAgaHRtbDogYFxuICAgIDxoZXJvLWhlYWRlcj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJ0aXRsZVwiPmFhYWE8L3NwYW4+XG4gICAgICA8aW1nIHNsb3Q9XCJjb3ZlclwiIHNyYz1cIi4vYXNzZXRzL2NvdmVyLmpwZWdcIj5cbiAgICA8L2hlcm8taGVhZGVyPlxuICBgLFxuICBjb21wb25lbnRzOiBbaGVyb0hlYWRlcl1cbn07XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJldmlldyk7XG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgcHJldmlldy5jb250ZW50V2luZG93IS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShqc29uKSwgXCIqXCIpO1xufSwgMTAwMCk7XG4iLCJjb25zdCBodG1sID0gcmVxdWlyZShcIi4vdGVtcGxhdGUuaHRtbFwiKTtcblxuY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbmlmcmFtZS5zcmNkb2MgPSBodG1sO1xuXG5leHBvcnQgY29uc3QgcHJldmlldyA9IGlmcmFtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbD5cXG48aGVhZD5cXG48bWV0YSBjaGFyc2V0PVxcXCJ1cmYtOFxcXCI+XFxuPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIj5cXG48bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcbjwhLS0gcmVzcy5jc3MgKiB2MS4yLjIgLS0+XFxuPHN0eWxlPlxcbmh0bWx7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93LXk6c2Nyb2xsOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfSosOmFmdGVyLDpiZWZvcmV7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JveC1zaXppbmc6aW5oZXJpdH06YWZ0ZXIsOmJlZm9yZXt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0fSp7cGFkZGluZzowO21hcmdpbjowfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9aHJ7b3ZlcmZsb3c6dmlzaWJsZX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixtYWluLG1lbnUsbmF2LHNlY3Rpb24sc3VtbWFyeXtkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19c21hbGx7Zm9udC1zaXplOjgwJX1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkO3RleHQtZGVjb3JhdGlvbjpub25lfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHN9YTphY3RpdmUsYTpob3ZlcntvdXRsaW5lLXdpZHRoOjB9Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZX1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfW1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmYwO2NvbG9yOiMwMDB9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1pbnB1dHtib3JkZXItcmFkaXVzOjB9W3JvbGU9YnV0dG9uXSxbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbntjdXJzb3I6cG9pbnRlcn1bZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fVt0eXBlPW51bWJlcl17d2lkdGg6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfXRleHRhcmVhe292ZXJmbG93OmF1dG87cmVzaXplOnZlcnRpY2FsfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Zm9udDppbmhlcml0fW9wdGdyb3Vwe2ZvbnQtd2VpZ2h0OjcwMH1idXR0b257b3ZlcmZsb3c6dmlzaWJsZX1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6MDtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOm5vbmU7Y29sb3I6aW5oZXJpdH1zZWxlY3R7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9c2VsZWN0OjotbXMtZXhwYW5ke2Rpc3BsYXk6bm9uZX1zZWxlY3Q6Oi1tcy12YWx1ZXtjb2xvcjpjdXJyZW50Q29sb3J9bGVnZW5ke2JvcmRlcjowO2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3JtYWx9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31AbWVkaWEgc2NyZWVue1toaWRkZW5+PXNjcmVlbl17ZGlzcGxheTppbmhlcml0fVtoaWRkZW5+PXNjcmVlbl06bm90KDphY3RpdmUpOm5vdCg6Zm9jdXMpOm5vdCg6dGFyZ2V0KXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7Y2xpcDpyZWN0KDAgMCAwIDApIWltcG9ydGFudH19W2FyaWEtYnVzeT10cnVlXXtjdXJzb3I6cHJvZ3Jlc3N9W2FyaWEtY29udHJvbHNde2N1cnNvcjpwb2ludGVyfVthcmlhLWRpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH06Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6I2IzZDRmYztjb2xvcjojMDAwO3RleHQtc2hhZG93Om5vbmV9OjpzZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjojYjNkNGZjO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6bm9uZX1cXG48L3N0eWxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG48c2NyaXB0PlxcbmNvbnN0IGRlZmluZUNvbXBvbmVudCA9IChuYW1lLCBodG1sLCBjc3MpID0+IHtcXG4gIGNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XFxuICAgIGNvbnN0cnVjdG9yKCkge1xcbiAgICAgIHN1cGVyKCk7XFxuICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcXFwib3BlblxcXCIgfSk7XFxuICAgICAgc2hhZG93LmlubmVySFRNTCA9IGh0bWw7XFxuICAgICAgaWYgKGNzcykge1xcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxcXCJzdHlsZVxcXCIpO1xcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XFxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIEVsZW1lbnQpO1xcbn07XFxuXFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXFxcIm1lc3NhZ2VcXFwiLCBldmVudCA9PiB7XFxuICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcXG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGpzb24uY29tcG9uZW50cykge1xcbiAgICBkZWZpbmVDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5odG1sLCBjb21wb25lbnQuY3NzKTtcXG4gIH1cXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0ganNvbi5odG1sO1xcbn0sIGZhbHNlKTtcXG48L3NjcmlwdD5cXG48L2JvZHk+XFxuPC9odG1sPlwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRcIjtcbmNvbnN0IHRlbXBsYXRlID0gcmVxdWlyZShcIi4vdGVtcGxhdGUuaHRtbFwiKSBhcyBzdHJpbmc7XG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlLnNjc3NcIikgYXMgc3RyaW5nO1xuXG5leHBvcnQgY29uc3QgaGVyb0hlYWRlcjogQ29tcG9uZW50ID0ge1xuICBuYW1lOiBcImhlcm8taGVhZGVyXCIsXG4gIGh0bWw6IHRlbXBsYXRlLFxuICBjc3M6IHN0eWxlLFxuICBjb250YWluZXI6IHRydWUsXG4gIHNsb3Q6IHtcbiAgICBjb3ZlcjogXCJpbWFnZVwiLFxuICAgIHRpdGxlOiBcInRleHRcIlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oZXJvLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5oZXJvLWhlYWRlcl9fY292ZXIgOjpzbG90dGVkKGltZykge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmhlcm8taGVhZGVyX190aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlciBjbGFzcz1cXFwiaGVyby1oZWFkZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVyby1oZWFkZXJfX2NvdmVyXFxcIj5cXG4gICAgPHNsb3QgbmFtZT1cXFwiY292ZXJcXFwiPjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGgxIGNsYXNzPVxcXCJoZXJvLWhlYWRlcl9fdGl0bGVcXFwiPlxcbiAgICA8c2xvdCBuYW1lPVxcXCJ0aXRsZVxcXCI+PC9zbG90PlxcbiAgPC9oMT5cXG48L2hlYWRlcj5cIjsiLCJleHBvcnQgeyBoZXJvSGVhZGVyIH0gZnJvbSBcIi4vY29udGFpbmVyL2hlcm8taGVhZGVyXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9