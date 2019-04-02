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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/browser/index.js":
/*!******************************!*\
  !*** ./src/browser/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/src/browser/index.js: Unexpected token (19:4)\\n\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39mhydrate (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 19 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mMain\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Parser.unexpected (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5165:16)\\n    at Parser.parseExprAtom (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:6330:20)\\n    at Parser.parseExprSubscripts (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5916:23)\\n    at Parser.parseMaybeUnary (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Parser.parseExprOps (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Parser.parseMaybeConditional (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Parser.parseMaybeAssign (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Parser.parseExprListItem (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:6979:18)\\n    at Parser.parseCallExpressionArguments (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:6123:22)\\n    at Parser.parseSubscript (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:6018:29)\\n    at Parser.parseSubscripts (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5937:19)\\n    at Parser.parseExprSubscripts (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5926:17)\\n    at Parser.parseMaybeUnary (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Parser.parseExprOps (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Parser.parseMaybeConditional (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Parser.parseMaybeAssign (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Parser.parseExpression (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:5651:23)\\n    at Parser.parseStatementContent (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:7422:23)\\n    at Parser.parseStatement (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:7293:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:7879:25)\\n    at Parser.parseBlockBody (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:7866:10)\\n    at Parser.parseTopLevel (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:7222:10)\\n    at Parser.parse (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:8871:17)\\n    at parse (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/parser/lib/index.js:11133:38)\\n    at parser (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/itzikshaoulian/Desktop/gitPractice/hamilton-beach/node_modules/@babel/core/lib/transform.js:34:34)\");\n\n//# sourceURL=webpack:///./src/browser/index.js?");

/***/ })

/******/ });