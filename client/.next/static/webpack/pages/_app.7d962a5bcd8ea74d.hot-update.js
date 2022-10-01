"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanityClient */ \"./lib/sanityClient.js\");\n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar getEthereumContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(eth);\n    var signer = provider.getSigner();\n    var transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _lib_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    return transactionContract;\n};\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\"\n    }), formData = ref2[0], setFormData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var metamask, accounts, error;\n            var _arguments = arguments;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        metamask = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : eth;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        if (!metamask) return [\n                            2,\n                            alert(\"Please install metamask\")\n                        ];\n                        return [\n                            4,\n                            metamask.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        setCurrentAccount(accounts[0]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        throw new Error(\"No Ethereum object...\");\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    /**\r\n   * Create user profile in Sanity\r\n   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!currentAccount) return;\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var userDoc;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        userDoc = {\n                            _type: \"users\",\n                            _id: currentAccount,\n                            userName: \"Unnamed\",\n                            address: currentAccount\n                        };\n                        return [\n                            4,\n                            _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__.client.createIfNotExists(userDoc)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        })();\n    }, [\n        currentAccount\n    ]);\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var metamask, accounts, error;\n            var _arguments = arguments;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        metamask = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : eth;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        if (!metamask) return [\n                            2,\n                            alert(\"Please Install Metamask\")\n                        ];\n                        return [\n                            4,\n                            metamask.request({\n                                method: \"eth_accounts\"\n                            })\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                            console.log(\"Wallet is already connected! \");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        throw new Error(\"No Ethereum Object\");\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    /**\r\n   * Executes a transaction\r\n   * @param {*} metamask Injected MetaMask code from the browser\r\n   * @param {string} currentAccount Current user's address\r\n   */ var sendTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var metamask, connectedAccount, addressTo, amount, transactionContract, parsedAmount, transactionHash, error;\n            var _arguments = arguments;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        metamask = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : eth, connectedAccount = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : currentAccount;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            6,\n                            ,\n                            7\n                        ]);\n                        if (!metamask) return [\n                            2,\n                            alert(\"Please install metamask \")\n                        ];\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        transactionContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount);\n                        return [\n                            4,\n                            metamask.request({\n                                method: \"eth_sendTransaction\",\n                                params: [\n                                    {\n                                        from: connectedAccount,\n                                        to: addressTo,\n                                        gas: \"0x7EF40\",\n                                        value: parsedAmount._hex\n                                    }\n                                ]\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            4,\n                            transactionContract.publishTransaction(addressTo, parsedAmount, \"Transferring ETH \".concat(parsedAmount, \" to \").concat(addressTo), \"TRANSFER\")\n                        ];\n                    case 3:\n                        transactionHash = _state.sent();\n                        setIsLoading(true);\n                        return [\n                            4,\n                            transactionHash.wait()\n                        ];\n                    case 4:\n                        _state.sent();\n                        return [\n                            4,\n                            saveTransaction(transactionHash.hash, amount, connectedAccount, addressTo)\n                        ];\n                    case 5:\n                        _state.sent();\n                        setIsLoading(false);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 6:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 7:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Save Transaction to Sanity DB\n    var saveTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(txHash, amount) {\n            var fromAddress, toAddress, txDoc;\n            var _arguments = arguments;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        fromAddress = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : currentAccount, toAddress = _arguments.length > 3 ? _arguments[3] : void 0;\n                        txDoc = {\n                            _type: \"transactions\",\n                            _id: txHash,\n                            fromAddress: fromAddress,\n                            toAddress: toAddress,\n                            timestamp: new Date(Date.now()).toISOString(),\n                            txHash: txHash,\n                            amount: parseFloat(amount)\n                        };\n                        return [\n                            4,\n                            _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__.client.createIfNotExists(txDoc)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            4,\n                            _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__.client.patch(currentAccount).setIfMissing({\n                                transactions: []\n                            }).insert(\"after\", \"transactions[-1]\", [\n                                {\n                                    _key: txHash,\n                                    _ref: txHash,\n                                    _type: \"reference\"\n                                }\n                            ]).commit()\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function saveTransaction(txHash, amount) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function(e, name) {\n        setFormData(function(prevState) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, prevState), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, name, e.target.value));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n            currentAccount: currentAccount,\n            connectWallet: connectWallet,\n            sendTransaction: sendTransaction,\n            handleChange: handleChange,\n            formData: formData,\n            setFormData: setFormData\n        }, \"handleChange\", handleChange),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\Web3 Projects\\\\Web3 Uniswap Clone\\\\uniswap-clone\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 177,\n        columnNumber: 5\n    }, _this);\n};\n_s(TransactionProvider, \"poH9ov00txizJneBvGND9aP6KOE=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFQTs7NEJBQU03RCx1RUFDR2dCLEdBQWMsQ0FBQyxDQUNyQm9EOzs7Z0NBRUM7Ozt1RkFHRWhDLENBQUssRUFBRSxXQUFXO2lDQUNuQjs4QkFDRCxDQUNEcUMsTUFBTSxFQUFFOzBCQUFBOzt3QkFWWCxhQVVXO3dCQUVYOzswQkFBTTs7O1FBQ1IsQ0FBQzt3QkEvQktqQjs7O09BK0JMO0lBR0QsSUFBTWtCO1FBQ0ZuRDttQkFBMEI7U0FBdUMsQ0FBQztJQUN0RSxDQUFDO0lBRUw7UUFDaUM2QixLQUFLLEVBTzFCc0I7WUFOQTFELGNBQWMsRUFBZEE7WUFDQVMsT0FBQUEsb0ZBQUFBLENBQWE7OztZQUdiSCxRQUFRLEVBQVJBLEdBQUFBLDZEQUFRO1lBQ1JDLEdBQUFBLGdGQUFBQTtXQUNBbUQsY0FBWSxFQUFaQSxZQUFZO2tCQUVkM0QsUUFBUTs7Ozs7YUFDZ0IsQ0FDakM7QUFDRCxDQUFDO0dBbEtZRCxtQkFBbUI7QUFBbkJBLEtBQUFBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcz82OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IHtjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzfSBmcm9tIFwiLi4vbGliL2NvbnN0YW50c1wiXHJcbmltcG9ydCB7Y2xpZW50fSBmcm9tIFwiLi4vbGliL3Nhbml0eUNsaWVudFwiXHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxubGV0IGV0aDtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZXRoID0gd2luZG93LmV0aGVyZXVtXHJcbn0gXHJcblxyXG5jb25zdCBnZXRFdGhlcmV1bUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aClcclxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG4gIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgY29udHJhY3RBZGRyZXNzLFxyXG4gICAgY29udHJhY3RBQkksXHJcbiAgICBzaWduZXJcclxuICApXHJcblxyXG4gIHJldHVybiB0cmFuc2FjdGlvbkNvbnRyYWN0O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYWRkcmVzc1RvOiBcIlwiLFxyXG4gICAgICAgIGFtb3VudDogXCJcIixcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgIGlmKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIilcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KVxyXG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBFdGhlcmV1bSBvYmplY3QuLi5cIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgKiBDcmVhdGUgdXNlciBwcm9maWxlIGluIFNhbml0eVxyXG4gICAqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWN1cnJlbnRBY2NvdW50KSByZXR1cm5cclxuICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyRG9jID0ge1xyXG4gICAgICAgIF90eXBlOiAndXNlcnMnLFxyXG4gICAgICAgIF9pZDogY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgdXNlck5hbWU6ICdVbm5hbWVkJyxcclxuICAgICAgICBhZGRyZXNzOiBjdXJyZW50QWNjb3VudCxcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHVzZXJEb2MpXHJcbiAgICB9KSgpXHJcbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcclxuXHJcbiAgICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydChcIlBsZWFzZSBJbnN0YWxsIE1ldGFtYXNrXCIpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfYWNjb3VudHNcIn0pXHJcblxyXG4gICAgICAgICAgICBpZihhY2NvdW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQhIFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIEV0aGVyZXVtIE9iamVjdFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAqIEV4ZWN1dGVzIGEgdHJhbnNhY3Rpb25cclxuICAgKiBAcGFyYW0geyp9IG1ldGFtYXNrIEluamVjdGVkIE1ldGFNYXNrIGNvZGUgZnJvbSB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWNjb3VudCBDdXJyZW50IHVzZXIncyBhZGRyZXNzXHJcbiAgICovXHJcbiAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoXHJcbiAgICAgIG1ldGFtYXNrID0gZXRoLFxyXG4gICAgICBjb25uZWN0ZWRBY2NvdW50ID0gY3VycmVudEFjY291bnQsXHJcbiAgICApID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrICcpXHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzVG8sIGFtb3VudCB9ID0gZm9ybURhdGFcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpXHJcbiAgXHJcbiAgICAgICAgY29uc3QgcGFyc2VkQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoYW1vdW50KVxyXG4gIFxyXG4gICAgICAgIGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXHJcbiAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZyb206IGNvbm5lY3RlZEFjY291bnQsXHJcbiAgICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcclxuICAgICAgICAgICAgICBnYXM6ICcweDdFRjQwJywgLy8gNTIwMDAwIEd3ZWlcclxuICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50Ll9oZXgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pXHJcbiAgXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25IYXNoID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5wdWJsaXNoVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICBhZGRyZXNzVG8sXHJcbiAgICAgICAgICBwYXJzZWRBbW91bnQsXHJcbiAgICAgICAgICBgVHJhbnNmZXJyaW5nIEVUSCAke3BhcnNlZEFtb3VudH0gdG8gJHthZGRyZXNzVG99YCxcclxuICAgICAgICAgICdUUkFOU0ZFUicsXHJcbiAgICAgICAgKVxyXG4gIFxyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gIFxyXG4gICAgICAgIGF3YWl0IHRyYW5zYWN0aW9uSGFzaC53YWl0KClcclxuICBcclxuICAgICAgICBhd2FpdCBzYXZlVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICB0cmFuc2FjdGlvbkhhc2guaGFzaCxcclxuICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgIGNvbm5lY3RlZEFjY291bnQsXHJcbiAgICAgICAgICBhZGRyZXNzVG8sXHJcbiAgICAgICAgKVxyXG4gIFxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIFNhdmUgVHJhbnNhY3Rpb24gdG8gU2FuaXR5IERCXHJcbiAgICBjb25zdCBzYXZlVHJhbnNhY3Rpb24gPSBhc3luYyAoXHJcbiAgICAgIHR4SGFzaCxcclxuICAgICAgYW1vdW50LFxyXG4gICAgICBmcm9tQWRkcmVzcyA9IGN1cnJlbnRBY2NvdW50LFxyXG4gICAgICB0b0FkZHJlc3MsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgdHhEb2MgPSB7XHJcbiAgICAgICAgX3R5cGU6ICd0cmFuc2FjdGlvbnMnLFxyXG4gICAgICAgIF9pZDogdHhIYXNoLFxyXG4gICAgICAgIGZyb21BZGRyZXNzOiBmcm9tQWRkcmVzcyxcclxuICAgICAgICB0b0FkZHJlc3M6IHRvQWRkcmVzcyxcclxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdHhIYXNoOiB0eEhhc2gsXHJcbiAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCksXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHR4RG9jKVxyXG4gIFxyXG4gICAgICBhd2FpdCBjbGllbnRcclxuICAgICAgICAucGF0Y2goY3VycmVudEFjY291bnQpXHJcbiAgICAgICAgLnNldElmTWlzc2luZyh7IHRyYW5zYWN0aW9uczogW10gfSlcclxuICAgICAgICAuaW5zZXJ0KCdhZnRlcicsICd0cmFuc2FjdGlvbnNbLTFdJywgW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBfa2V5OiB0eEhhc2gsXHJcbiAgICAgICAgICAgIF9yZWY6IHR4SGFzaCxcclxuICAgICAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC5jb21taXQoKVxyXG4gIFxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICBzZXRGb3JtRGF0YShwcmV2U3RhdGUgPT4gKHsuLi5wcmV2U3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSlcclxuICAgIH1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8VHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0LFxyXG4gICAgICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHNldEZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgfX1cclxuICAgICAgICA+e2NoaWxkcmVufVxyXG4gICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbilcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJjbGllbnQiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWRkcmVzc1RvIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJtZXRhbWFzayIsImFjY291bnRzIiwiZXJyb3IiLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJ1c2VyRG9jIiwiX3R5cGUiLCJfaWQiLCJ1c2VyTmFtZSIsImFkZHJlc3MiLCJjcmVhdGVJZk5vdEV4aXN0cyIsImxlbmd0aCIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3RlZEFjY291bnQiLCJwYXJzZWRBbW91bnQiLCJ0cmFuc2FjdGlvbkhhc2giLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJnYXMiLCJ2YWx1ZSIsIl9oZXgiLCJwdWJsaXNoVHJhbnNhY3Rpb24iLCJ3YWl0Iiwic2F2ZVRyYW5zYWN0aW9uIiwiaGFzaCIsInR4SGFzaCIsImZyb21BZGRyZXNzIiwidG9BZGRyZXNzIiwidHhEb2MiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidG9JU09TdHJpbmciLCJwYXJzZUZsb2F0IiwicGF0Y2giLCJzZXRJZk1pc3NpbmciLCJ0cmFuc2FjdGlvbnMiLCJpbnNlcnQiLCJfa2V5IiwiX3JlZiIsImNvbW1pdCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldlN0YXRlIiwidGFyZ2V0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n"));

/***/ })

});