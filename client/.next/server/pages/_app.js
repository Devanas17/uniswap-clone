/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nlet eth;\nif (false) {}\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert(\"Please install metamask\");\n            const accounts = await metamask.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No Ethereum object...\");\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert(\"Please Install Metamask\");\n            const accounts = await metamask.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log(\"Wallet is already connected! \");\n            }\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No Ethereum Object\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount,\n            connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\Web3 Projects\\\\Web3 Uniswap Clone\\\\uniswap-clone\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUV6QyxNQUFNRyxrQkFBa0IsaUJBQUdILDBEQUFtQixFQUFFLENBQUM7QUFFeEQsSUFBSUssR0FBRztBQUVQLElBQUksS0FBNEIsRUFBQyxFQUVoQztBQUVNLE1BQU1HLG1CQUFtQixHQUFHLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEdBQUs7SUFDL0MsTUFBTSxLQUFDQyxjQUFjLE1BQUVDLGlCQUFpQixNQUFJViwrQ0FBUSxFQUFFO0lBRXREQyxnREFBUyxDQUFDLElBQU07UUFDWlUsd0JBQXdCLEVBQUUsQ0FBQztJQUMvQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sTUFBTUMsYUFBYSxHQUFHLE9BQU9DLFFBQVEsR0FBR1QsR0FBRyxHQUFLO1FBQzVDLElBQUk7WUFDSixJQUFHLENBQUNTLFFBQVEsRUFBRSxPQUFPQyxLQUFLLENBQUMseUJBQXlCLENBQUM7WUFDckQsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO2dCQUFDQyxNQUFNLEVBQUUscUJBQXFCO2FBQUMsQ0FBQztZQUN4RVAsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEVBQUUsT0FBTUcsS0FBSyxFQUFFO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7WUFDbEIsTUFBTSxJQUFJRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDNUMsQ0FBQztJQUVELENBQUM7SUFFRCxNQUFNVix3QkFBd0IsR0FBRyxPQUFPRSxRQUFRLEdBQUdULEdBQUcsR0FBSztRQUN2RCxJQUFJO1lBQ0EsSUFBRyxDQUFDUyxRQUFRLEVBQUUsT0FBT0MsS0FBSyxDQUFDLHlCQUF5QixDQUFDO1lBRXJELE1BQU1DLFFBQVEsR0FBRyxNQUFNRixRQUFRLENBQUNHLE9BQU8sQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLGNBQWM7YUFBQyxDQUFDO1lBRWpFLElBQUdGLFFBQVEsQ0FBQ08sTUFBTSxFQUFFO2dCQUNoQlosaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO1lBQ2hELENBQUM7UUFDTCxFQUFFLE9BQU9GLEtBQUssRUFBRTtZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1lBQ2xCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBR0wscUJBQ0ksOERBQUNuQixrQkFBa0IsQ0FBQ3FCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQzVCZixjQUFjO1lBQ2RHLGFBQWE7U0FDaEI7a0JBQ0NKLFFBQVE7Ozs7O2lCQUNnQixDQUNqQztBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcz82OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxubGV0IGV0aDtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZXRoID0gd2luZG93LmV0aGVyZXVtXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiKVxyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7bWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIn0pXHJcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIEV0aGVyZXVtIG9iamVjdC4uLlwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgSW5zdGFsbCBNZXRhbWFza1wiKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX2FjY291bnRzXCJ9KVxyXG5cclxuICAgICAgICAgICAgaWYoYWNjb3VudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGlzIGFscmVhZHkgY29ubmVjdGVkISBcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBFdGhlcmV1bSBPYmplY3RcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxucmV0dXJuIChcclxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgIGNvbm5lY3RXYWxsZXQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICA+e2NoaWxkcmVufVxyXG4gICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbilcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJtZXRhbWFzayIsImFsZXJ0IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJsZW5ndGgiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Github\\\\Web3 Projects\\\\Web3 Uniswap Clone\\\\uniswap-clone\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\Web3 Projects\\\\Web3 Uniswap Clone\\\\uniswap-clone\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNtQztBQUVqRSxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDQSw4REFBQ0gsNEVBQW1CO2tCQUNwQiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNOLENBQ3JCO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7VHJhbnNhY3Rpb25Qcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0XCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gIDxUcmFuc2FjdGlvblByb3ZpZGVyPlxuICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvVHJhbnNhY3Rpb25Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlRyYW5zYWN0aW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();