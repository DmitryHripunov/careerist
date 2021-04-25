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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (url, options) {
    if (!options) {
        // eslint-disable-next-line no-param-reassign
        options = {};
    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    url = url && url.__esModule ? url.default : url;
    if (typeof url !== 'string') {
        return url;
    } // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(1, -1);
    }
    if (options.hash) {
        // eslint-disable-next-line no-param-reassign
        url += options.hash;
    } // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url) || options.needQuotes) {
        return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
    }
    return url;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assest_fonts_IskraCYR_Light_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _assest_fonts_GothaProReg_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assest_fonts_IskraCYR_Light_woff__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assest_fonts_GothaProReg_woff__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n    font-family: \"Iskra\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Gotha\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "fonts/IskraCYR-Light.32eFE.woff");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "fonts/GothaProReg.1RbSF.woff");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(8));
var server_1 = __importDefault(__webpack_require__(9));
var App_1 = __webpack_require__(10);
var indexTemplate_1 = __webpack_require__(21);
var app = express_1.default();
app.use("/static", express_1.default.static("./dist/client"));
app.get("/", function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
// app.get("/auth", (req, res) => {
//   axios
//     .post(
//       "https://www.reddit.com/api/v1/access_token",
//       `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:9000/auth`,
//       {
//         auth: {
//           username: process.env.CLIENT_ID,
//           password: "WdtP8Xgim-btpjaKsgi7smwRdawUHQ",
//         },
//         headers: { "Content-type": "application/x-www-form-urlencoded" },
//       }
//     )
//     .then(({ data }) => {
//       res.send(
//         indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
//       );
//     })
//     .catch(console.log);
// });
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
__webpack_require__(11);
var redux_1 = __webpack_require__(12);
var react_redux_1 = __webpack_require__(3);
// import ReactDOM from 'react-dom';
var react_1 = __importDefault(__webpack_require__(0));
var redux_devtools_extension_1 = __webpack_require__(13);
var root_1 = __webpack_require__(14);
var reducers_1 = __importDefault(__webpack_require__(15));
var container_1 = __importDefault(__webpack_require__(16));
var initialStore = [];
var store = redux_1.createStore(reducers_1.default, initialStore, redux_devtools_extension_1.composeWithDevTools());
function AppComponent() {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(container_1.default, null),
        ",")
    // document.getElementById('react_root')
    );
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* @import \"~normalize.css\"; */\r\n\r\nbody {\r\n  font-family: \"Gotha\", sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute !important;\r\n  clip: rect(1px 1px 1px 1px);\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  padding: 0 !important;\r\n  border: 0 !important;\r\n  height: 1px !important;\r\n  width: 1px !important;\r\n  overflow: hidden;\r\n}\r\n\r\n.comments-container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  list-style: none; \r\n  padding-left: 0;\r\n  margin-top: 0;\r\n  max-width: 700px;\r\n}\r\n\r\n.comment-item {\r\n  position: relative;\r\n  padding: 20px;\r\n  border: 1px solid #cecece;\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.comment-user {\r\n  font-family: \"Iskra\";\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment-data {\r\n  display: block;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: center;\r\n  margin-bottom: 40px; \r\n}\r\n\r\n.comments-form-label {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comments-form-input,\r\n.comments-form-textarea {\r\n  font-family: \"Gotha\";\r\n  font-size: 20px;\r\n  max-width: 500px;\r\n  min-height: 40px;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.comments-form-btn {\r\n  font-family: \"Gotha\";\r\n  font-size: 16px;\r\n  max-width: 300px;\r\n  min-height: 40px;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n  border: none;\r\n  background-color: #cecece;\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.error {\r\n  border-color: red;\r\n  width: 100%;\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rootReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_COMMENT':
            return __spreadArray(__spreadArray([], state), [
                { id: action.id, name: action.name, text: action.text, date: action.date },
            ]);
        default: return state;
    }
};
exports.default = rootReducer;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(3);
var CommentForm_1 = __importDefault(__webpack_require__(17));
var CommentList_1 = __importDefault(__webpack_require__(18));
var actions_1 = __webpack_require__(19);
var Container = function (_a) {
    var comments = _a.comments, addComment = _a.addComment, removeComment = _a.removeComment;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(CommentForm_1.default, { addComment: addComment }),
        react_1.default.createElement(CommentList_1.default, { comments: comments, removeComment: removeComment })));
};
var mapStateToProps = function (state) {
    return {
        comments: state,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addComment: function (name, text) { return dispatch(actions_1.addComment(name, text)); },
        removeComment: function (id) { return dispatch(actions_1.removeComment(id)); },
    };
};
Container = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Container);
exports.default = Container;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var CommentForm = function (_a) {
    var addComment = _a.addComment;
    var inputName;
    var inputText;
    return (react_1.default.createElement("form", { className: "comments-form", onSubmit: function (e) {
            e.preventDefault();
            if (!inputName.value.trim() || !inputText.value.trim()) {
                alert('заполните все поля');
                return;
            }
            addComment(inputName.value, inputText.value);
            inputName.value = '';
            inputText.value = '';
        } },
        react_1.default.createElement("label", { className: "comments-form-label" },
            react_1.default.createElement("input", { className: "comments-form-input", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F", type: "text", ref: function (name) {
                    inputName = name;
                } })),
        react_1.default.createElement("label", { className: "comments-form-label" },
            react_1.default.createElement("textarea", { className: "comments-form-textarea", placeholder: "\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", name: "comment", ref: function (text) {
                    inputText = text;
                } })),
        react_1.default.createElement("button", { className: "comments-form-btn", type: "submit" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")));
};
exports.default = CommentForm;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var CommentList = function (_a) {
    var comments = _a.comments;
    return (react_1.default.createElement("ul", { className: "comment-list comments-container" }, comments.map(function (comment) {
        return (react_1.default.createElement("li", { className: "comment-item", key: comment.id },
            react_1.default.createElement("article", null,
                react_1.default.createElement("header", { className: "comment-user" },
                    react_1.default.createElement("span", { className: "comment-data" }, comment.date),
                    react_1.default.createElement("h2", null, comment.name)),
                react_1.default.createElement("p", { className: "comment-text" }, comment.text))));
    })));
};
exports.default = CommentList;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComment = exports.addComment = void 0;
var customDate_1 = __importDefault(__webpack_require__(20));
var commentId = 0;
var addComment = function (name, text) {
    return {
        type: 'ADD_COMMENT',
        id: commentId++,
        name: name,
        text: text,
        date: customDate_1.default(),
    };
};
exports.addComment = addComment;
var removeComment = function (id) {
    return {
        type: 'REMOVE_COMMENT',
        id: id,
    };
};
exports.removeComment = removeComment;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FORM_DATE = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
};
var DECL_HOUR = ['час', 'часа', 'часов'];
var DECL_MINUTE = ['минута', 'минуты', 'минут'];
function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
;
function printDate() {
    var date = new Date();
    var hours = date.getHours();
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var stringHours = declOfNum(hours, DECL_HOUR);
    var stringMinute = declOfNum(minutes, DECL_MINUTE);
    return "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438: \n    " + date.toLocaleString('ru-RU', FORM_DATE) + "\n    " + year + " \u0433\u043E\u0434\u0430 \n    " + hours + " " + stringHours + "  \n    " + minutes + " " + stringMinute;
}
;
exports.default = printDate;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Rd</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n  </script>\n</head>\n<body>\n  <div id=\"react_root\">" + content + "</div>\n</body>\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);