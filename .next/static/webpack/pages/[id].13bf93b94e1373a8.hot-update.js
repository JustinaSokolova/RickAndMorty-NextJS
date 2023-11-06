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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _app_layouts_page_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/layouts/page-layout */ \"./app/layouts/page-layout.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(function() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), receivedEpisodeItem = ref2.receivedEpisodeItem, loading = ref2.loading, error = ref2.error, fetchEpisodeItem = ref2.fetchEpisodeItem;\n    console.log(receivedEpisodeItem);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        id && fetchEpisodeItem(String(id));\n    }, [\n        id\n    ]);\n    var headContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            title: \"Episode | \".concat(receivedEpisodeItem === null || receivedEpisodeItem === void 0 ? void 0 : receivedEpisodeItem.name),\n            meta: []\n        };\n    }, [\n        receivedEpisodeItem === null || receivedEpisodeItem === void 0 ? void 0 : receivedEpisodeItem.name\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    mt: 4\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    if (receivedEpisodeItem === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    mt: 4\n                },\n                children: \"Oops!! It seems that such an episode does not exist\"\n            }, void 0, false, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return receivedEpisodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layouts_page_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            headContext: headContext,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"18px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outlined\",\n                        sx: {\n                            display: \"flex\",\n                            alignSelf: \"flex-start\",\n                            mt: 3\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"h5\",\n                        component: \"div\",\n                        children: receivedEpisodeItem.name\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"body1\",\n                        children: [\n                            \"Air date: \",\n                            receivedEpisodeItem.air_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"subtitle1\",\n                        children: [\n                            \"Episode: \",\n                            receivedEpisodeItem.episode\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"subtitle1\",\n                        children: [\n                            \"Characters: \",\n                            (ref = receivedEpisodeItem.characters) === null || ref === void 0 ? void 0 : ref.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            flexWrap: \"wrap\",\n                            gap: \"12px\"\n                        },\n                        children: (ref1 = receivedEpisodeItem.characters) === null || ref1 === void 0 ? void 0 : ref1.map(function(character, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Chip, {\n                                label: \"\".concat(character.name, \" - \").concat(character.status),\n                                variant: \"outlined\"\n                            }, index, false, {\n                                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"Ue/XnWwnLr3SzBvkJK7VwxEz/eQ=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n})), \"Ue/XnWwnLr3SzBvkJK7VwxEz/eQ=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0csTUFBTSxDQUFFO2dDQUFFcEIsT0FBTyxFQUFDLFVBQVU7K0JBQTNFa0IsS0FBSzs7OztxQ0FBd0U7eUJBQ3pGLENBQUM7Ozs7OzZCQUNJOzs7Ozs7cUJBQ0U7Ozs7O2lCQUNDO3FCQUNWLENBQ0o7Q0FDRjs7UUE5RG1FckMsOERBQVM7UUFHNURDLGtEQUFTOztHQTJEeEI7O1FBOURrRUQsOERBQVM7UUFHNURDLGtEQUFTOztFQTJEeEI7O0FBRUYsK0RBQWVHLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baWRdL2luZGV4LnRzeD83NjAxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9hcHAvaW50ZXJmYWNlcy9DaGFyYWN0ZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXInXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2hpcCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnLi4vLi4vbGliL211aSdcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJy4uLy4uL2FwcC9yb290LXN0b3JlLWNvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgSGVhZENvbnRleHQgfSBmcm9tICcuLi8uLi9hcHAvaW50ZXJmYWNlcy9oZWFkLWludGVyZmFjZXMnXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi8uLi9hcHAvbGF5b3V0cy9wYWdlLWxheW91dCdcblxuXG5cbmNvbnN0IEVwaXNvZGVJdGVtOiBSZWFjdC5GQyA9IG9ic2VydmVyKCgpID0+IHtcbiAgY29uc3QgeyByZWNlaXZlZEVwaXNvZGVJdGVtLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hFcGlzb2RlSXRlbSB9ID0gdXNlU3RvcmVzKCk7XG4gIGNvbnNvbGUubG9nKHJlY2VpdmVkRXBpc29kZUl0ZW0pXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlkICYmIGZldGNoRXBpc29kZUl0ZW0oU3RyaW5nKGlkKSlcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgaGVhZENvbnRleHQ6IEhlYWRDb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdGl0bGU6IGBFcGlzb2RlIHwgJHtyZWNlaXZlZEVwaXNvZGVJdGVtPy5uYW1lfWAsXG4gICAgICBtZXRhOiBbXSxcbiAgICB9KSxcbiAgICBbcmVjZWl2ZWRFcGlzb2RlSXRlbT8ubmFtZV1cbiAgKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKDxMb2FkZXIvPilcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICBub1dyYXBcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtdDogNH19Pk9vcHMhISBFcnJvcjoge2Vycm9yfSA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBpZihyZWNlaXZlZEVwaXNvZGVJdGVtID09PSBudWxsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgbm9XcmFwXG4gICAgICBjb21wb25lbnQ9XCJkaXZcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbXQ6IDR9fT5Pb3BzISEgSXQgc2VlbXMgdGhhdCBzdWNoIGFuIGVwaXNvZGUgZG9lcyBub3QgZXhpc3Q8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRFcGlzb2RlSXRlbSAmJiAoIFxuICAgIDw+XG4gICAgPFBhZ2VMYXlvdXQgaGVhZENvbnRleHQ9e2hlYWRDb250ZXh0fT5cbiAgICA8Q29udGFpbmVyIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogXCIxOHB4XCJ9fT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLCBtdDogM319PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+R28gYmFjazwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5uYW1lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkFpciBkYXRlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5haXJfZGF0ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5FcGlzb2RlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5lcGlzb2RlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPkNoYXJhY3RlcnM6IHtyZWNlaXZlZEVwaXNvZGVJdGVtLmNoYXJhY3RlcnM/Lmxlbmd0aH08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxCb3ggc3g9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IFwiMTJweFwifX0+XG4gICAgICAgIHtyZWNlaXZlZEVwaXNvZGVJdGVtLmNoYXJhY3RlcnM/Lm1hcCgoY2hhcmFjdGVyOiBDaGFyYWN0ZXIsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8Q2hpcCBrZXk9e2luZGV4fSBsYWJlbD17YCR7Y2hhcmFjdGVyLm5hbWV9IC0gJHtjaGFyYWN0ZXIuc3RhdHVzfWB9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvUGFnZUxheW91dD5cbiAgICA8Lz5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZUl0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkxpbmsiLCJMb2FkZXIiLCJCb3giLCJCdXR0b24iLCJDaGlwIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsInVzZVN0b3JlcyIsInVzZVJvdXRlciIsIm9ic2VydmVyIiwiUGFnZUxheW91dCIsIkVwaXNvZGVJdGVtIiwicmVjZWl2ZWRFcGlzb2RlSXRlbSIsImxvYWRpbmciLCJlcnJvciIsImZldGNoRXBpc29kZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIlN0cmluZyIsImhlYWRDb250ZXh0IiwidGl0bGUiLCJuYW1lIiwibWV0YSIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm10IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImFsaWduU2VsZiIsImhyZWYiLCJhaXJfZGF0ZSIsImVwaXNvZGUiLCJjaGFyYWN0ZXJzIiwibGVuZ3RoIiwiZmxleFdyYXAiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpbmRleCIsImxhYmVsIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});