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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assest_fonts_IskraCYR_Light_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assest/fonts/IskraCYR-Light.woff */ \"./src/assest/fonts/IskraCYR-Light.woff\");\n/* harmony import */ var _assest_fonts_GothaProReg_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assest/fonts/GothaProReg.woff */ \"./src/assest/fonts/GothaProReg.woff\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assest_fonts_IskraCYR_Light_woff__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assest_fonts_GothaProReg_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\r\\n    font-family: \\\"Iskra\\\";\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff\\\");\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    font-family: \\\"Gotha\\\";\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = function (url, options) {\r\n    if (!options) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        options = {};\r\n    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\r\n    url = url && url.__esModule ? url.default : url;\r\n    if (typeof url !== 'string') {\r\n        return url;\r\n    } // If url is already wrapped in quotes, remove them\r\n    if (/^['\"].*['\"]$/.test(url)) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url = url.slice(1, -1);\r\n    }\r\n    if (options.hash) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url += options.hash;\r\n    } // Should url be wrapped?\r\n    // See https://drafts.csswg.org/css-values-3/#urls\r\n    if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\r\n        return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\r\n    }\r\n    return url;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\n__webpack_require__(/*! ./css/main.global.css */ \"./src/css/main.global.css\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar reducers_1 = __importDefault(__webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\"));\r\nvar container_1 = __importDefault(__webpack_require__(/*! ./containers/container */ \"./src/containers/container.js\"));\r\nvar initialStore = [];\r\nvar store = redux_1.createStore(reducers_1.default, initialStore, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nvar timeout = function () { return function (dispatch, getState) {\r\n    dispatch({ type: 'START' });\r\n    setTimeout(function () {\r\n        dispatch({ type: 'FINISH' });\r\n    }, 1500);\r\n}; };\r\nfunction AppComponent() {\r\n    react_1.useEffect(function () {\r\n        store.dispatch(timeout());\r\n    });\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(container_1.default, null),\r\n        \",\")\r\n    // document.getElementById('react_root')\r\n    );\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setUserData = exports.addComment = void 0;\r\nvar customDate_1 = __importDefault(__webpack_require__(/*! ../js/customDate */ \"./src/js/customDate.js\"));\r\nvar commentId = 0;\r\nvar addComment = function (name, text) {\r\n    return {\r\n        type: 'ADD_COMMENT',\r\n        id: commentId++,\r\n        name: name,\r\n        text: text,\r\n        date: customDate_1.default(),\r\n    };\r\n};\r\nexports.addComment = addComment;\r\nvar setUserData = function () { return function (dispatch, getState) {\r\n    var token = getState().app.token;\r\n    dispatch(showLoader());\r\n    axios\r\n        .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n        headers: { Authorization: \"bearer \" + token },\r\n    })\r\n        .then(function (resp) {\r\n        dispatch({\r\n            type: SET_USERDATA,\r\n            name: resp.data.name,\r\n            iconImg: uriToLink(resp.data.icon_img),\r\n            messageCount: resp.data.inbox_count.toString(),\r\n        });\r\n        dispatch(hideLoader());\r\n    })\r\n        .catch(function (er) {\r\n        dispatch(showAlert(\"\\u0412\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445 \\u043F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430. \\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u043F\\u0440\\u043E\\u0431\\u0443\\u0439\\u0442\\u0435 \\u043F\\u043E\\u0437\\u0434\\u043D\\u0435\\u0435. \" + er));\r\n        dispatch(hideLoader());\r\n    });\r\n}; };\r\nexports.setUserData = setUserData;\r\n\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/assest/fonts/GothaProReg.woff":
/*!*******************************************!*\
  !*** ./src/assest/fonts/GothaProReg.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/GothaProReg.woff\");\n\n//# sourceURL=webpack:///./src/assest/fonts/GothaProReg.woff?");

/***/ }),

/***/ "./src/assest/fonts/IskraCYR-Light.woff":
/*!**********************************************!*\
  !*** ./src/assest/fonts/IskraCYR-Light.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/IskraCYR-Light.woff\");\n\n//# sourceURL=webpack:///./src/assest/fonts/IskraCYR-Light.woff?");

/***/ }),

/***/ "./src/components/CommentForm.js":
/*!***************************************!*\
  !*** ./src/components/CommentForm.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentForm = function (_a) {\r\n    var addComment = _a.addComment;\r\n    var inputName;\r\n    var inputText;\r\n    return (react_1.default.createElement(\"form\", { className: \"comments-form\", onSubmit: function (e) {\r\n            e.preventDefault();\r\n            if (!inputName.value.trim() || !inputText.value.trim()) {\r\n                alert('заполните все поля');\r\n                return;\r\n            }\r\n            addComment(inputName.value, inputText.value);\r\n            inputName.value = '';\r\n            inputText.value = '';\r\n        } },\r\n        react_1.default.createElement(\"label\", { className: \"comments-form-label\" },\r\n            react_1.default.createElement(\"input\", { className: \"comments-form-input\", placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0438\\u043C\\u044F\", type: \"text\", ref: function (name) {\r\n                    inputName = name;\r\n                } })),\r\n        react_1.default.createElement(\"label\", { className: \"comments-form-label\" },\r\n            react_1.default.createElement(\"textarea\", { className: \"comments-form-textarea\", placeholder: \"\\u0412\\u0430\\u0448 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\", name: \"comment\", ref: function (text) {\r\n                    inputText = text;\r\n                } })),\r\n        react_1.default.createElement(\"button\", { className: \"comments-form-btn\", type: \"submit\" }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")));\r\n};\r\nexports.default = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/components/CommentForm.js?");

/***/ }),

/***/ "./src/components/CommentList.js":
/*!***************************************!*\
  !*** ./src/components/CommentList.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentList = function (_a) {\r\n    var comments = _a.comments;\r\n    return (react_1.default.createElement(\"ul\", { className: \"comment-list comments-container\" }, comments.map(function (comment) {\r\n        return (react_1.default.createElement(\"li\", { className: \"comment-item\", key: comment.id },\r\n            react_1.default.createElement(\"article\", null,\r\n                react_1.default.createElement(\"header\", { className: \"comment-user\" },\r\n                    react_1.default.createElement(\"span\", { className: \"comment-data\" }, comment.date),\r\n                    react_1.default.createElement(\"h2\", null, comment.name)),\r\n                react_1.default.createElement(\"p\", { className: \"comment-text\" }, comment.text))));\r\n    })));\r\n};\r\nexports.default = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/components/CommentList.js?");

/***/ }),

/***/ "./src/containers/container.js":
/*!*************************************!*\
  !*** ./src/containers/container.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ../components/CommentForm */ \"./src/components/CommentForm.js\"));\r\nvar CommentList_1 = __importDefault(__webpack_require__(/*! ../components/CommentList */ \"./src/components/CommentList.js\"));\r\nvar actions_1 = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\r\nvar Container = function (_a) {\r\n    var comments = _a.comments, addComment = _a.addComment;\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(CommentForm_1.default, { addComment: addComment }),\r\n        react_1.default.createElement(CommentList_1.default, { comments: comments })));\r\n};\r\nvar mapStateToProps = function (state) {\r\n    return {\r\n        comments: state,\r\n    };\r\n};\r\nvar mapDispatchToProps = function (dispatch) {\r\n    return {\r\n        addComment: function (name, text) { return dispatch(actions_1.addComment(name, text)); },\r\n    };\r\n};\r\nContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Container);\r\nexports.default = Container;\r\n\n\n//# sourceURL=webpack:///./src/containers/container.js?");

/***/ }),

/***/ "./src/css/main.global.css":
/*!*********************************!*\
  !*** ./src/css/main.global.css ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* @import \\\"~normalize.css\\\"; */\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Gotha\\\", sans-serif;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.visually-hidden {\\r\\n  position: absolute !important;\\r\\n  clip: rect(1px 1px 1px 1px);\\r\\n  clip: rect(1px, 1px, 1px, 1px);\\r\\n  padding: 0 !important;\\r\\n  border: 0 !important;\\r\\n  height: 1px !important;\\r\\n  width: 1px !important;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 0 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column-reverse;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  display: flex;\\r\\n  flex-direction: column-reverse;\\r\\n  align-items: center;\\r\\n  list-style: none; \\r\\n  padding-left: 0;\\r\\n  margin-top: 0;\\r\\n  max-width: 700px;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  position: relative;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #cecece;\\r\\n  margin-bottom: 20px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comment-user {\\r\\n  font-family: \\\"Iskra\\\";\\r\\n  font-weight: 700;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.comment-data {\\r\\n  display: block;\\r\\n  font-size: 14px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.comments-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  margin-bottom: 40px; \\r\\n}\\r\\n\\r\\n.comments-form-label {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-form-input,\\r\\n.comments-form-textarea {\\r\\n  font-family: \\\"Gotha\\\";\\r\\n  font-size: 20px;\\r\\n  max-width: 500px;\\r\\n  min-height: 40px;\\r\\n  width: 100%;\\r\\n  margin-bottom: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.comments-form-btn {\\r\\n  font-family: \\\"Gotha\\\";\\r\\n  font-size: 16px;\\r\\n  max-width: 300px;\\r\\n  min-height: 40px;\\r\\n  width: 100%;\\r\\n  margin-bottom: 20px;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n  border-radius: 3px;\\r\\n  border: none;\\r\\n  background-color: #cecece;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  border-color: red;\\r\\n  width: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/main.global.css?");

/***/ }),

/***/ "./src/js/customDate.js":
/*!******************************!*\
  !*** ./src/js/customDate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar FORM_DATE = {\r\n    day: 'numeric',\r\n    month: 'long',\r\n    weekday: 'long',\r\n};\r\nvar DECL_HOUR = ['час', 'часа', 'часов'];\r\nvar DECL_MINUTE = ['минута', 'минуты', 'минут'];\r\nfunction declOfNum(number, titles) {\r\n    var cases = [2, 0, 1, 1, 1, 2];\r\n    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];\r\n}\r\n;\r\nfunction printDate() {\r\n    var date = new Date();\r\n    var hours = date.getHours();\r\n    var year = date.getFullYear();\r\n    var minutes = date.getMinutes();\r\n    var seconds = date.getSeconds();\r\n    var stringHours = declOfNum(hours, DECL_HOUR);\r\n    var stringMinute = declOfNum(minutes, DECL_MINUTE);\r\n    return \"\\u0414\\u0430\\u0442\\u0430 \\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u0438: \\n    \" + date.toLocaleString('ru-RU', FORM_DATE) + \"\\n    \" + year + \" \\u0433\\u043E\\u0434\\u0430 \\n    \" + hours + \" \" + stringHours + \"  \\n    \" + minutes + \" \" + stringMinute;\r\n}\r\n;\r\nexports.default = printDate;\r\n\n\n//# sourceURL=webpack:///./src/js/customDate.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar rootReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case 'ADD_COMMENT':\r\n            return __spreadArray(__spreadArray([], state), [\r\n                { id: action.id, name: action.name, text: action.text, date: action.date },\r\n            ]);\r\n        default: return state;\r\n    }\r\n};\r\nexports.default = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Careerist-test-app</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n  </script>\\n</head>\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.js\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar PORT = process.env.PORT || 5000;\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\nif (!IS_DEV) {\r\n    app.use(compression_1.default());\r\n    app.use(helmet_1.default({\r\n        contentSecurityPolicy: false,\r\n    }));\r\n}\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"Server started on http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });