"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id]/index.tsx":
/*!******************************!*\
  !*** ./pages/[id]/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(function() {\n    _s();\n    var ref = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), receivedEpisodeItem = ref.receivedEpisodeItem, loading = ref.loading, error = ref.error, fetchEpisodeItem = ref.fetchEpisodeItem;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        id && fetchEpisodeItem(String(id));\n    }, [\n        id\n    ]);\n    var headContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            title: \"Episode | \".concat(name),\n            meta: []\n        };\n    }, [\n        name\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return receivedEpisodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: \"18px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"outlined\",\n                    sx: {\n                        display: \"flex\",\n                        alignSelf: \"flex-start\",\n                        mt: 3\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    children: receivedEpisodeItem.name\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body1\",\n                    children: [\n                        \"Air date: \",\n                        receivedEpisodeItem.air_date\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Episode: \",\n                        receivedEpisodeItem.episode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Characters: \",\n                        receivedEpisodeItem.characters.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\",\n                        gap: \"12px\"\n                    },\n                    children: receivedEpisodeItem.characters.map(function(character, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Chip, {\n                            label: \"\".concat(character.name, \" - \").concat(character.status),\n                            variant: \"outlined\"\n                        }, index, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"Ue/XnWwnLr3SzBvkJK7VwxEz/eQ=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n})), \"Ue/XnWwnLr3SzBvkJK7VwxEz/eQ=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFBLFlBQVk7QUFFcUM7QUFDckI7QUFFMkI7QUFDaUI7QUFDaEI7QUFDakI7QUFDRztBQUsxQyxJQUFNYSxXQUFXLEdBQWFELEdBQUFBLHlEQUFRLFNBQUMsV0FBTTs7SUFDM0MsSUFBa0VGLEdBQVcsR0FBWEEsa0VBQVMsRUFBRSxFQUFyRUksbUJBQW1CLEdBQXVDSixHQUFXLENBQXJFSSxtQkFBbUIsRUFBRUMsT0FBTyxHQUE4QkwsR0FBVyxDQUFoREssT0FBTyxFQUFFQyxLQUFLLEdBQXVCTixHQUFXLENBQXZDTSxLQUFLLEVBQUVDLGdCQUFnQixHQUFLUCxHQUFXLENBQWhDTyxnQkFBZ0I7SUFFN0QsSUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBRyxHQUFJTyxNQUFNLENBQUNFLEtBQUssQ0FBbEJELEVBQUU7SUFFVGxCLGdEQUFTLENBQUMsV0FBTTtRQUNka0IsRUFBRSxJQUFJRixnQkFBZ0IsQ0FBQ0ksTUFBTSxDQUFDRixFQUFFLENBQUMsQ0FBQztLQUNuQyxFQUFFO1FBQUNBLEVBQUU7S0FBQyxDQUFDLENBQUM7SUFFVCxJQUFNRyxXQUFXLEdBQWdCcEIsOENBQU8sQ0FDdEM7ZUFBTztZQUNMcUIsS0FBSyxFQUFFLFlBQVcsQ0FBTyxPQUFMQyxJQUFJLENBQUU7WUFDMUJDLElBQUksRUFBRSxFQUFFO1NBQ1Q7S0FBQyxFQUNGO1FBQUNELElBQUk7S0FBQyxDQUNQO0lBRUQsSUFBSVQsT0FBTyxFQUFFLHFCQUFRLDhEQUFDWCxxRUFBTTs7OzthQUFFLENBQUM7SUFFL0IsSUFBSVksS0FBSyxFQUFFO1FBQ1QscUJBQ0U7c0JBQ0EsNEVBQUNQLGdEQUFVO2dCQUFDaUIsT0FBTyxFQUFDLE9BQU87Z0JBQzNCQyxNQUFNO2dCQUNOQyxTQUFTLEVBQUMsS0FBSztnQkFBQ0MsRUFBRSxFQUFFO29CQUFDQyxPQUFPLEVBQUUsTUFBTTtvQkFBRUMsY0FBYyxFQUFFLFFBQVE7aUJBQUM7O29CQUFFLGdCQUFjO29CQUFDZixLQUFLO29CQUFDLEdBQUM7Ozs7OztxQkFBYTt5QkFDakcsQ0FDSjtLQUNGO0lBRUQsT0FBT0YsbUJBQW1CLGtCQUN4QjtrQkFDQSw0RUFBQ04sK0NBQVM7WUFBQ3FCLEVBQUUsRUFBRTtnQkFBQ0MsT0FBTyxFQUFFLE1BQU07Z0JBQUVFLGFBQWEsRUFBRSxRQUFRO2dCQUFFQyxHQUFHLEVBQUUsTUFBTTthQUFDOzs4QkFDbEUsOERBQUMzQiw0Q0FBTTtvQkFBQ29CLE9BQU8sRUFBQyxVQUFVO29CQUFDRyxFQUFFLEVBQUU7d0JBQUNDLE9BQU8sRUFBRSxNQUFNO3dCQUFFSSxTQUFTLEVBQUUsWUFBWTt3QkFBRUMsRUFBRSxFQUFFLENBQUM7cUJBQUM7OEJBQzlFLDRFQUFDaEMsa0RBQUk7d0JBQUNpQyxJQUFJLEVBQUMsR0FBRztrQ0FBQyxTQUFPOzs7Ozs2QkFBTzs7Ozs7eUJBQ3RCOzhCQUNYLDhEQUFDM0IsZ0RBQVU7b0JBQUNpQixPQUFPLEVBQUMsSUFBSTtvQkFBQ0UsU0FBUyxFQUFDLEtBQUs7OEJBQ25DZCxtQkFBbUIsQ0FBQ1UsSUFBSTs7Ozs7eUJBQ2Q7OEJBQ2IsOERBQUNmLGdEQUFVO29CQUFDaUIsT0FBTyxFQUFDLE9BQU87O3dCQUFDLFlBQVU7d0JBQUNaLG1CQUFtQixDQUFDdUIsUUFBUTs7Ozs7O3lCQUFjOzhCQUNqRiw4REFBQzVCLGdEQUFVO29CQUFDaUIsT0FBTyxFQUFDLFdBQVc7O3dCQUFDLFdBQVM7d0JBQUNaLG1CQUFtQixDQUFDd0IsT0FBTzs7Ozs7O3lCQUFjOzhCQUNuRiw4REFBQzdCLGdEQUFVO29CQUFDaUIsT0FBTyxFQUFDLFdBQVc7O3dCQUFDLGNBQVk7d0JBQUNaLG1CQUFtQixDQUFDeUIsVUFBVSxDQUFDQyxNQUFNOzs7Ozs7eUJBQWM7OEJBQ2hHLDhEQUFDbkMseUNBQUc7b0JBQUN3QixFQUFFLEVBQUU7d0JBQUNDLE9BQU8sRUFBRSxNQUFNO3dCQUFFVyxRQUFRLEVBQUUsTUFBTTt3QkFBRVIsR0FBRyxFQUFFLE1BQU07cUJBQUM7OEJBQ3hEbkIsbUJBQW1CLENBQUN5QixVQUFVLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxTQUFvQixFQUFFQyxLQUFhOzZDQUN0RSw4REFBQ3JDLDBDQUFJOzRCQUFhc0MsS0FBSyxFQUFFLEVBQUMsQ0FBc0JGLE1BQWdCLENBQXBDQSxTQUFTLENBQUNuQixJQUFJLEVBQUMsS0FBRyxDQUFtQixRQUFqQm1CLFNBQVMsQ0FBQ0csTUFBTSxDQUFFOzRCQUFFcEIsT0FBTyxFQUFDLFVBQVU7MkJBQTNFa0IsS0FBSzs7OztpQ0FBd0U7cUJBQ3pGLENBQUM7Ozs7O3lCQUNJOzs7Ozs7aUJBQ0U7cUJBQ1QsQ0FDSjtDQUNGOztRQWpEbUVsQyw4REFBUztRQUU1REMsa0RBQVM7O0dBK0N4Qjs7UUFqRGtFRCw4REFBUztRQUU1REMsa0RBQVM7O0VBK0N4Qjs7QUFFRiwrREFBZUUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vaW5kZXgudHN4Pzc2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uLy4uL2FwcC9pbnRlcmZhY2VzL0NoYXJhY3RlcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlcidcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDaGlwLCBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICcuLi8uLi9saWIvbXVpJ1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vLi4vYXBwL3Jvb3Qtc3RvcmUtY29udGV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyBIZWFkQ29udGV4dCB9IGZyb20gJy4uLy4uL2FwcC9pbnRlcmZhY2VzL2hlYWQtaW50ZXJmYWNlcydcblxuXG5cbmNvbnN0IEVwaXNvZGVJdGVtOiBSZWFjdC5GQyA9IG9ic2VydmVyKCgpID0+IHtcbiAgY29uc3QgeyByZWNlaXZlZEVwaXNvZGVJdGVtLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hFcGlzb2RlSXRlbSB9ID0gdXNlU3RvcmVzKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlkICYmIGZldGNoRXBpc29kZUl0ZW0oU3RyaW5nKGlkKSlcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgaGVhZENvbnRleHQ6IEhlYWRDb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdGl0bGU6IGBFcGlzb2RlIHwgJHtuYW1lfWAsXG4gICAgICBtZXRhOiBbXSxcbiAgICB9KSxcbiAgICBbbmFtZV1cbiAgKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKDxMb2FkZXIvPilcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICBub1dyYXBcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+T29wcyEhIEVycm9yOiB7ZXJyb3J9IDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiByZWNlaXZlZEVwaXNvZGVJdGVtICYmICggXG4gICAgPD5cbiAgICA8Q29udGFpbmVyIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogXCIxOHB4XCJ9fT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLCBtdDogM319PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+R28gYmFjazwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5uYW1lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkFpciBkYXRlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5haXJfZGF0ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5FcGlzb2RlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5lcGlzb2RlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPkNoYXJhY3RlcnM6IHtyZWNlaXZlZEVwaXNvZGVJdGVtLmNoYXJhY3RlcnMubGVuZ3RofTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogXCIxMnB4XCJ9fT5cbiAgICAgICAge3JlY2VpdmVkRXBpc29kZUl0ZW0uY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcjogQ2hhcmFjdGVyLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPENoaXAga2V5PXtpbmRleH0gbGFiZWw9e2Ake2NoYXJhY3Rlci5uYW1lfSAtICR7Y2hhcmFjdGVyLnN0YXR1c31gfSB2YXJpYW50PVwib3V0bGluZWRcIi8+XG4gICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZUl0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkxpbmsiLCJMb2FkZXIiLCJCb3giLCJCdXR0b24iLCJDaGlwIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsInVzZVN0b3JlcyIsInVzZVJvdXRlciIsIm9ic2VydmVyIiwiRXBpc29kZUl0ZW0iLCJyZWNlaXZlZEVwaXNvZGVJdGVtIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hFcGlzb2RlSXRlbSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJTdHJpbmciLCJoZWFkQ29udGV4dCIsInRpdGxlIiwibmFtZSIsIm1ldGEiLCJ2YXJpYW50Iiwibm9XcmFwIiwiY29tcG9uZW50Iiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25TZWxmIiwibXQiLCJocmVmIiwiYWlyX2RhdGUiLCJlcGlzb2RlIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImZsZXhXcmFwIiwibWFwIiwiY2hhcmFjdGVyIiwiaW5kZXgiLCJsYWJlbCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});