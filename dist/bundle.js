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
const web_components_1 = __webpack_require__(/*! ./web-components */ "./src/web-components/index.ts");
const preview_1 = __webpack_require__(/*! ./preview */ "./src/preview/index.ts");
const html = `
<hero-header>
  <span slot="title">aaaa</span>
  <img slot="cover" src="./assets/cover.jpeg">
</hero-header>
`;
const preview = new preview_1.Preview();
document.body.appendChild(preview.view);
preview.updateHTML(html);
preview.defineComponent(web_components_1.heroHeader);


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
class Preview {
    constructor() {
        this.view = document.createElement("iframe");
        this.view.srcdoc = html;
        this.defined = new Set();
        this.cue = [];
        this.isActive = false;
        const executeCue = (event) => {
            this.isActive = true;
            if (event.data === "preview iframe is activated") {
                for (const cue of this.cue) {
                    this.view.contentWindow.postMessage(cue, "*");
                }
                window.removeEventListener("message", executeCue, false);
            }
        };
        window.addEventListener("message", executeCue, false);
    }
    updateHTML(html) {
        const json = JSON.stringify({ html });
        if (this.isActive) {
            this.view.contentWindow.postMessage(json, "*");
        }
        else {
            this.cue.push(json);
        }
    }
    defineComponent(...components) {
        const unregistered = components.filter(elm => !this.defined.has(elm.name));
        if (!unregistered)
            return;
        const json = JSON.stringify({ components: unregistered });
        if (this.isActive) {
            this.view.contentWindow.postMessage(json, "*");
        }
        else {
            this.cue.push(json);
        }
        for (const elm of unregistered) {
            this.defined.add(elm.name);
        }
    }
}
exports.Preview = Preview;


/***/ }),

/***/ "./src/preview/template.html":
/*!***********************************!*\
  !*** ./src/preview/template.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"urf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!-- ress.css * v1.2.2 -->\n<style>\nhtml{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}\n</style>\n</head>\n<body>\n<script>\nconst defineComponent = (name, html, css) => {\n  class Element extends HTMLElement {\n    constructor() {\n      super();\n      const shadow = this.attachShadow({ mode: \"open\" });\n      shadow.innerHTML = html;\n      if (css) {\n        const style = document.createElement(\"style\");\n        style.textContent = css;\n        shadow.appendChild(style);\n      }\n    }\n  }\n\n  customElements.define(name, Element);\n};\n\nwindow.addEventListener(\"message\", event => {\n  const json = JSON.parse(event.data);\n\n  if (json.components) {\n    for (const component of json.components) {\n      defineComponent(component.name, component.html, component.css);\n    }\n  }\n\n  if (json.html) {\n    document.body.innerHTML = json.html;\n  }\n}, false);\n\nwindow.parent.postMessage(\"preview iframe is activated\", \"*\");\n</script>\n</body>\n</html>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wcmV2aWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wcmV2aWV3L3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi1jb21wb25lbnRzL2NvbnRhaW5lci9oZXJvLWhlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViLWNvbXBvbmVudHMvY29udGFpbmVyL2hlcm8taGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi1jb21wb25lbnRzL2NvbnRhaW5lci9oZXJvLWhlYWRlci90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy93ZWItY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFH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a0NBQWtDLG9DQUFvQyxTQUFTLE9BQU8sS0FBSywyQ0FBMkMsSUFBSSxtREFBbUQsd0NBQXdDLDRCQUE0QixnREFBZ0QsdUVBQXVFLE9BQU8sS0FBSyxzQkFBc0IsMENBQTBDLEtBQUssR0FBRyxTQUFTLHNFQUFzRSwrQjs7Ozs7Ozs7Ozs7Ozs7QUNDL3JILE1BQU0sUUFBUSxHQUFHLG1CQUFPLENBQUMsaUZBQWlCLENBQVcsQ0FBQztBQUN0RCxNQUFNLEtBQUssR0FBRyxtQkFBTyxDQUFDLDJFQUFjLENBQVcsQ0FBQztBQUVuQyxrQkFBVSxHQUFjO0lBQ25DLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsSUFBSTtJQUNmLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxPQUFPO1FBQ2QsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ2JGLGdDQUFnQyx1QkFBdUIsRUFBRSx3Q0FBd0Msa0JBQWtCLEVBQUUseUJBQXlCLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLGdCQUFnQixtQkFBbUIsa0NBQWtDLEVBQUUsRzs7Ozs7Ozs7Ozs7QUNBcFMsK047Ozs7Ozs7Ozs7Ozs7O0FDQUEsOEhBQXFEO0FBQTVDLDZDQUFVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgaGVyb0hlYWRlciB9IGZyb20gXCIuL3dlYi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBQcmV2aWV3IH0gZnJvbSBcIi4vcHJldmlld1wiO1xuXG5jb25zdCBodG1sID0gYFxuPGhlcm8taGVhZGVyPlxuICA8c3BhbiBzbG90PVwidGl0bGVcIj5hYWFhPC9zcGFuPlxuICA8aW1nIHNsb3Q9XCJjb3ZlclwiIHNyYz1cIi4vYXNzZXRzL2NvdmVyLmpwZWdcIj5cbjwvaGVyby1oZWFkZXI+XG5gO1xuXG5jb25zdCBwcmV2aWV3ID0gbmV3IFByZXZpZXcoKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcmV2aWV3LnZpZXcpO1xucHJldmlldy51cGRhdGVIVE1MKGh0bWwpO1xucHJldmlldy5kZWZpbmVDb21wb25lbnQoaGVyb0hlYWRlcik7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vd2ViLWNvbXBvbmVudHMvY29tcG9uZW50XCI7XG5jb25zdCBodG1sID0gcmVxdWlyZShcIi4vdGVtcGxhdGUuaHRtbFwiKTtcblxuaW50ZXJmYWNlIEN1ZSB7XG4gIHR5cGU6IFwidXBkYXRlSFRNTFwiIHwgXCJkZWZpbmVDb21wb25lbnRcIjtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUHJldmlldyB7XG4gIHZpZXc6IEhUTUxJRnJhbWVFbGVtZW50O1xuICBwcml2YXRlIGRlZmluZWQ6IFNldDxzdHJpbmc+O1xuICBwcml2YXRlIGN1ZTogc3RyaW5nW107XG4gIHByaXZhdGUgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICB0aGlzLnZpZXcuc3JjZG9jID0gaHRtbDtcbiAgICB0aGlzLmRlZmluZWQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5jdWUgPSBbXTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBleGVjdXRlQ3VlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKGV2ZW50LmRhdGEgPT09IFwicHJldmlldyBpZnJhbWUgaXMgYWN0aXZhdGVkXCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBjdWUgb2YgdGhpcy5jdWUpIHtcbiAgICAgICAgICB0aGlzLnZpZXcuY29udGVudFdpbmRvdyEucG9zdE1lc3NhZ2UoY3VlLCBcIipcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV4ZWN1dGVDdWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV4ZWN1dGVDdWUsIGZhbHNlKTtcbiAgfVxuXG4gIHVwZGF0ZUhUTUwoaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHsgaHRtbCB9KTtcblxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICB0aGlzLnZpZXcuY29udGVudFdpbmRvdyEucG9zdE1lc3NhZ2UoanNvbiwgXCIqXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1ZS5wdXNoKGpzb24pO1xuICAgIH1cbiAgfVxuXG4gIGRlZmluZUNvbXBvbmVudCguLi5jb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xuICAgIGNvbnN0IHVucmVnaXN0ZXJlZCA9IGNvbXBvbmVudHMuZmlsdGVyKGVsbSA9PiAhdGhpcy5kZWZpbmVkLmhhcyhlbG0ubmFtZSkpO1xuICAgIGlmICghdW5yZWdpc3RlcmVkKSByZXR1cm47XG5cbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoeyBjb21wb25lbnRzOiB1bnJlZ2lzdGVyZWQgfSk7XG5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy52aWV3LmNvbnRlbnRXaW5kb3chLnBvc3RNZXNzYWdlKGpzb24sIFwiKlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdWUucHVzaChqc29uKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVsbSBvZiB1bnJlZ2lzdGVyZWQpIHtcbiAgICAgIHRoaXMuZGVmaW5lZC5hZGQoZWxtLm5hbWUpO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sPlxcbjxoZWFkPlxcbjxtZXRhIGNoYXJzZXQ9XFxcInVyZi04XFxcIj5cXG48bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiPlxcbjxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVxcXCI+XFxuPCEtLSByZXNzLmNzcyAqIHYxLjIuMiAtLT5cXG48c3R5bGU+XFxuaHRtbHtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3cteTpzY3JvbGw7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Kiw6YWZ0ZXIsOmJlZm9yZXtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7Ym94LXNpemluZzppbmhlcml0fTphZnRlciw6YmVmb3Jle3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9KntwYWRkaW5nOjA7bWFyZ2luOjB9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1ocntvdmVyZmxvdzp2aXNpYmxlfWFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLG1haW4sbWVudSxuYXYsc2VjdGlvbixzdW1tYXJ5e2Rpc3BsYXk6YmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX1zbWFsbHtmb250LXNpemU6ODAlfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOjFweCBkb3R0ZWQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0c31hOmFjdGl2ZSxhOmhvdmVye291dGxpbmUtd2lkdGg6MH1jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGRlcn1kZm57Zm9udC1zdHlsZTppdGFsaWN9bWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7Y29sb3I6IzAwMH1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWlucHV0e2JvcmRlci1yYWRpdXM6MH1bcm9sZT1idXR0b25dLFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9ue2N1cnNvcjpwb2ludGVyfVtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9W3R5cGU9bnVtYmVyXXt3aWR0aDphdXRvfVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztyZXNpemU6dmVydGljYWx9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250OmluaGVyaXR9b3B0Z3JvdXB7Zm9udC13ZWlnaHQ6NzAwfWJ1dHRvbntvdmVyZmxvdzp2aXNpYmxlfVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTowO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1bdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b24saHRtbCBbdHlwZT1idXR0b25dey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixpbnB1dCxzZWxlY3QsdGV4dGFyZWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6bm9uZTtjb2xvcjppbmhlcml0fXNlbGVjdHstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1zZWxlY3Q6Oi1tcy1leHBhbmR7ZGlzcGxheTpub25lfXNlbGVjdDo6LW1zLXZhbHVle2NvbG9yOmN1cnJlbnRDb2xvcn1sZWdlbmR7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vcm1hbH06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4fWltZ3tib3JkZXItc3R5bGU6bm9uZX1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59YXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrfUBtZWRpYSBzY3JlZW57W2hpZGRlbn49c2NyZWVuXXtkaXNwbGF5OmluaGVyaXR9W2hpZGRlbn49c2NyZWVuXTpub3QoOmFjdGl2ZSk6bm90KDpmb2N1cyk6bm90KDp0YXJnZXQpe3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50fX1bYXJpYS1idXN5PXRydWVde2N1cnNvcjpwcm9ncmVzc31bYXJpYS1jb250cm9sc117Y3Vyc29yOnBvaW50ZXJ9W2FyaWEtZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fTo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjojYjNkNGZjO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6bm9uZX06OnNlbGVjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNiM2Q0ZmM7Y29sb3I6IzAwMDt0ZXh0LXNoYWRvdzpub25lfVxcbjwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbjxzY3JpcHQ+XFxuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGh0bWwsIGNzcykgPT4ge1xcbiAgY2xhc3MgRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcXG4gICAgY29uc3RydWN0b3IoKSB7XFxuICAgICAgc3VwZXIoKTtcXG4gICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFxcXCJvcGVuXFxcIiB9KTtcXG4gICAgICBzaGFkb3cuaW5uZXJIVE1MID0gaHRtbDtcXG4gICAgICBpZiAoY3NzKSB7XFxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXFxcInN0eWxlXFxcIik7XFxuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcXG4gICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgRWxlbWVudCk7XFxufTtcXG5cXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcXFwibWVzc2FnZVxcXCIsIGV2ZW50ID0+IHtcXG4gIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xcblxcbiAgaWYgKGpzb24uY29tcG9uZW50cykge1xcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBqc29uLmNvbXBvbmVudHMpIHtcXG4gICAgICBkZWZpbmVDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5odG1sLCBjb21wb25lbnQuY3NzKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgaWYgKGpzb24uaHRtbCkge1xcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGpzb24uaHRtbDtcXG4gIH1cXG59LCBmYWxzZSk7XFxuXFxud2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXFwicHJldmlldyBpZnJhbWUgaXMgYWN0aXZhdGVkXFxcIiwgXFxcIipcXFwiKTtcXG48L3NjcmlwdD5cXG48L2JvZHk+XFxuPC9odG1sPlwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRcIjtcbmNvbnN0IHRlbXBsYXRlID0gcmVxdWlyZShcIi4vdGVtcGxhdGUuaHRtbFwiKSBhcyBzdHJpbmc7XG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlLnNjc3NcIikgYXMgc3RyaW5nO1xuXG5leHBvcnQgY29uc3QgaGVyb0hlYWRlcjogQ29tcG9uZW50ID0ge1xuICBuYW1lOiBcImhlcm8taGVhZGVyXCIsXG4gIGh0bWw6IHRlbXBsYXRlLFxuICBjc3M6IHN0eWxlLFxuICBjb250YWluZXI6IHRydWUsXG4gIHNsb3Q6IHtcbiAgICBjb3ZlcjogXCJpbWFnZVwiLFxuICAgIHRpdGxlOiBcInRleHRcIlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oZXJvLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5oZXJvLWhlYWRlcl9fY292ZXIgOjpzbG90dGVkKGltZykge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmhlcm8taGVhZGVyX190aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlciBjbGFzcz1cXFwiaGVyby1oZWFkZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVyby1oZWFkZXJfX2NvdmVyXFxcIj5cXG4gICAgPHNsb3QgbmFtZT1cXFwiY292ZXJcXFwiPjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGgxIGNsYXNzPVxcXCJoZXJvLWhlYWRlcl9fdGl0bGVcXFwiPlxcbiAgICA8c2xvdCBuYW1lPVxcXCJ0aXRsZVxcXCI+PC9zbG90PlxcbiAgPC9oMT5cXG48L2hlYWRlcj5cIjsiLCJleHBvcnQgeyBoZXJvSGVhZGVyIH0gZnJvbSBcIi4vY29udGFpbmVyL2hlcm8taGVhZGVyXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9