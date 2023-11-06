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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _app_layouts_page_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/layouts/page-layout */ \"./app/layouts/page-layout.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(function() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), episodeItem = ref2.episodeItem, loading = ref2.loading, error = ref2.error, fetchEpisodeItem = ref2.fetchEpisodeItem;\n    console.log(episodeItem);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        id && fetchEpisodeItem(String(id));\n    }, [\n        id\n    ]);\n    var headContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            title: \"Episode | \".concat(episodeItem === null || episodeItem === void 0 ? void 0 : episodeItem.name),\n            meta: []\n        };\n    }, [\n        episodeItem === null || episodeItem === void 0 ? void 0 : episodeItem.name\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    mt: 4\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    if (episodeItem === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    mt: 4\n                },\n                children: \"Oops!! It seems that such an episode does not exist\"\n            }, void 0, false, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return !loading && episodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layouts_page_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            headContext: headContext,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"18px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outlined\",\n                        sx: {\n                            display: \"flex\",\n                            alignSelf: \"flex-start\",\n                            mt: 3\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"h5\",\n                        component: \"div\",\n                        children: episodeItem.name\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"body1\",\n                        children: [\n                            \"Air date: \",\n                            episodeItem.air_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"subtitle1\",\n                        children: [\n                            \"Episode: \",\n                            episodeItem.episode\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"subtitle1\",\n                        children: [\n                            \"Characters: \",\n                            (ref = episodeItem.characters) === null || ref === void 0 ? void 0 : ref.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            flexWrap: \"wrap\",\n                            gap: \"12px\"\n                        },\n                        children: (ref1 = episodeItem.characters) === null || ref1 === void 0 ? void 0 : ref1.map(function(character, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                                sx: {\n                                    maxWidth: 345\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.CardActionArea, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.CardMedia, {\n                                            component: \"img\",\n                                            height: \"140\",\n                                            image: character.image,\n                                            alt: \"character img\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 16\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    gutterBottom: true,\n                                                    variant: \"h6\",\n                                                    component: \"div\",\n                                                    children: character.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 18\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    variant: \"body2\",\n                                                    color: \"text.secondary\",\n                                                    children: character.status\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 18\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 16\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 14\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 14\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"gJUuIfOuWlopNHDRmZA/Zuxpsg8=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n})), \"gJUuIfOuWlopNHDRmZA/Zuxpsg8=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7NENBQ2ZrQixNQUFNLEVBQUMsS0FBSzs0Q0FDWkMsS0FBSyxFQUFFSixTQUFTLENBQUNJLEtBQUs7NENBQ3RCQyxHQUFHLEVBQUMsZUFBZTs7Ozs7aURBQ25CO3NEQUNGLDhEQUFDMUMsaURBQVc7OzhEQUNWLDhEQUFDSixnREFBVTtvREFBQytDLFlBQVk7b0RBQUN2QixPQUFPLEVBQUMsSUFBSTtvREFBQ0UsU0FBUyxFQUFDLEtBQUs7OERBQ3BEZSxTQUFTLENBQUNuQixJQUFJOzs7Ozt5REFDRjs4REFDYiw4REFBQ3RCLGdEQUFVO29EQUFDd0IsT0FBTyxFQUFDLE9BQU87b0RBQUN3QixLQUFLLEVBQUMsZ0JBQWdCOzhEQUNqRFAsU0FBUyxDQUFDUSxNQUFNOzs7Ozt5REFDSjs7Ozs7O2lEQUNEOzs7Ozs7eUNBQ0M7K0JBaEJOUCxLQUFLOzs7O3FDQWlCWDt5QkFFVCxDQUFDOzs7Ozs2QkFDSTs7Ozs7O3FCQUNFOzs7OztpQkFDQztxQkFDVixDQUNKO0NBQ0Y7O1FBaEYyRHJDLDhEQUFTO1FBR3BEQyxrREFBUzs7R0E2RXhCOztRQWhGMERELDhEQUFTO1FBR3BEQyxrREFBUzs7RUE2RXhCOztBQUVGLCtEQUFlRyxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS9pbmRleC50c3g/NzYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vYXBwL2ludGVyZmFjZXMvQ2hhcmFjdGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9hcHAvY29tcG9uZW50cy9jb21tb24vTG9hZGVyJ1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENoaXAsIENvbnRhaW5lciwgVHlwb2dyYXBoeSwgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQgfSBmcm9tICcuLi8uLi9saWIvbXVpJ1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vLi4vYXBwL3Jvb3Qtc3RvcmUtY29udGV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyBIZWFkQ29udGV4dCB9IGZyb20gJy4uLy4uL2FwcC9pbnRlcmZhY2VzL2hlYWQtaW50ZXJmYWNlcydcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uLy4uL2FwcC9sYXlvdXRzL3BhZ2UtbGF5b3V0J1xuXG5jb25zdCBFcGlzb2RlSXRlbTogUmVhY3QuRkMgPSBvYnNlcnZlcigoKSA9PiB7XG4gIGNvbnN0IHsgZXBpc29kZUl0ZW0sIGxvYWRpbmcsIGVycm9yLCBmZXRjaEVwaXNvZGVJdGVtIH0gPSB1c2VTdG9yZXMoKTtcbiAgY29uc29sZS5sb2coZXBpc29kZUl0ZW0pXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlkICYmIGZldGNoRXBpc29kZUl0ZW0oU3RyaW5nKGlkKSlcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgaGVhZENvbnRleHQ6IEhlYWRDb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdGl0bGU6IGBFcGlzb2RlIHwgJHtlcGlzb2RlSXRlbT8ubmFtZX1gLFxuICAgICAgbWV0YTogW10sXG4gICAgfSksXG4gICAgW2VwaXNvZGVJdGVtPy5uYW1lXVxuICApXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiAoPExvYWRlci8+KVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgIG5vV3JhcFxuICAgICAgY29tcG9uZW50PVwiZGl2XCIgc3g9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG10OiA0fX0+T29wcyEhIEVycm9yOiB7ZXJyb3J9IDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGlmKGVwaXNvZGVJdGVtID09PSBudWxsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgbm9XcmFwXG4gICAgICBjb21wb25lbnQ9XCJkaXZcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbXQ6IDR9fT5Pb3BzISEgSXQgc2VlbXMgdGhhdCBzdWNoIGFuIGVwaXNvZGUgZG9lcyBub3QgZXhpc3Q8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gIWxvYWRpbmcgJiYgZXBpc29kZUl0ZW0gJiYgKCBcbiAgICA8PlxuICAgIDxQYWdlTGF5b3V0IGhlYWRDb250ZXh0PXtoZWFkQ29udGV4dH0+XG4gICAgPENvbnRhaW5lciBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IFwiMThweFwifX0+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3g9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIiwgbXQ6IDN9fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkdvIGJhY2s8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAge2VwaXNvZGVJdGVtLm5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+QWlyIGRhdGU6IHtlcGlzb2RlSXRlbS5haXJfZGF0ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5FcGlzb2RlOiB7ZXBpc29kZUl0ZW0uZXBpc29kZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5DaGFyYWN0ZXJzOiB7ZXBpc29kZUl0ZW0uY2hhcmFjdGVycz8ubGVuZ3RofTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogXCIxMnB4XCJ9fT5cbiAgICAgICAge2VwaXNvZGVJdGVtLmNoYXJhY3RlcnM/Lm1hcCgoY2hhcmFjdGVyOiBDaGFyYWN0ZXIsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSAgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fSA+XG4gICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgICAgICAgICBpbWFnZT17Y2hhcmFjdGVyLmltYWdlfVxuICAgICAgICAgICAgICAgICBhbHQ9XCJjaGFyYWN0ZXIgaW1nXCJcbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxuICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIC8vIDxDaGlwIGtleT17aW5kZXh9IGxhYmVsPXtgJHtjaGFyYWN0ZXIubmFtZX0gLSAke2NoYXJhY3Rlci5zdGF0dXN9YH0gdmFyaWFudD1cIm91dGxpbmVkXCIvPlxuICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICAgPC9QYWdlTGF5b3V0PlxuICAgIDwvPlxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlSXRlbTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiTGluayIsIkxvYWRlciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJDYXJkIiwiQ2FyZEFjdGlvbkFyZWEiLCJDYXJkTWVkaWEiLCJDYXJkQ29udGVudCIsInVzZVN0b3JlcyIsInVzZVJvdXRlciIsIm9ic2VydmVyIiwiUGFnZUxheW91dCIsIkVwaXNvZGVJdGVtIiwiZXBpc29kZUl0ZW0iLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaEVwaXNvZGVJdGVtIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJTdHJpbmciLCJoZWFkQ29udGV4dCIsInRpdGxlIiwibmFtZSIsIm1ldGEiLCJ2YXJpYW50Iiwibm9XcmFwIiwiY29tcG9uZW50Iiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtdCIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnblNlbGYiLCJocmVmIiwiYWlyX2RhdGUiLCJlcGlzb2RlIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImZsZXhXcmFwIiwibWFwIiwiY2hhcmFjdGVyIiwiaW5kZXgiLCJtYXhXaWR0aCIsImhlaWdodCIsImltYWdlIiwiYWx0IiwiZ3V0dGVyQm90dG9tIiwiY29sb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});