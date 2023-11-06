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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(function() {\n    _s();\n    var ref = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), receivedEpisodeItem = ref.receivedEpisodeItem, loading = ref.loading, error = ref.error, fetchEpisodeItem = ref.fetchEpisodeItem;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        id && fetchEpisodeItem(String(id));\n    }, [\n        id\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return receivedEpisodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: \"18px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"outlined\",\n                    sx: {\n                        display: \"flex\",\n                        alignSelf: \"flex-start\",\n                        mt: 3\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    children: receivedEpisodeItem.name\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body1\",\n                    children: [\n                        \"Air date: \",\n                        receivedEpisodeItem.air_date\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Episode: \",\n                        receivedEpisodeItem.episode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Characters: \",\n                        receivedEpisodeItem.characters.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\",\n                        gap: \"12px\"\n                    },\n                    children: receivedEpisodeItem.characters.map(function(character, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Chip, {\n                            label: \"\".concat(character.name, \" - \").concat(character.status),\n                            variant: \"outlined\"\n                        }, index, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"jpsDwcxz8+IetFNJBXBVsYgpuSA=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n})), \"jpsDwcxz8+IetFNJBXBVsYgpuSA=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBc0JGLE1BQWdCLENBQXBDQSxTQUFTLENBQUNQLElBQUksRUFBQyxLQUFHLENBQW1CLFFBQWpCTyxTQUFTLENBQUNHLE1BQU0sQ0FBRTs0QkFBRXJCLE9BQU8sRUFBQyxVQUFVOzJCQUEzRW1CLEtBQUs7Ozs7aUNBQXdFO3FCQUN6RixDQUFDOzs7Ozt5QkFDSTs7Ozs7O2lCQUNFO3FCQUNULENBQ0o7Q0FDRjs7UUExQ21FL0IsOERBQVM7UUFFNURDLGtEQUFTOztHQXdDeEI7O1FBMUNrRUQsOERBQVM7UUFFNURDLGtEQUFTOztFQXdDeEI7O0FBRUYsK0RBQWVFLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baWRdL2luZGV4LnRzeD83NjAxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBFcGlzb2RlIH0gZnJvbSAnQC9pbnRlcmZhY2VzL0VwaXNvZGUnXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9hcHAvaW50ZXJmYWNlcy9DaGFyYWN0ZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXInXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2hpcCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnLi4vLi4vbGliL211aSdcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJy4uLy4uL2FwcC9yb290LXN0b3JlLWNvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuXG5cblxuY29uc3QgRXBpc29kZUl0ZW06IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICBjb25zdCB7IHJlY2VpdmVkRXBpc29kZUl0ZW0sIGxvYWRpbmcsIGVycm9yLCBmZXRjaEVwaXNvZGVJdGVtIH0gPSB1c2VTdG9yZXMoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWQgJiYgZmV0Y2hFcGlzb2RlSXRlbShTdHJpbmcoaWQpKVxuICB9LCBbaWRdKTtcblxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKDxMb2FkZXIvPilcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICBub1dyYXBcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+T29wcyEhIEVycm9yOiB7ZXJyb3J9IDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiByZWNlaXZlZEVwaXNvZGVJdGVtICYmICggXG4gICAgPD5cbiAgICA8Q29udGFpbmVyIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogXCIxOHB4XCJ9fT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLCBtdDogM319PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+R28gYmFjazwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5uYW1lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkFpciBkYXRlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5haXJfZGF0ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5FcGlzb2RlOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5lcGlzb2RlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPkNoYXJhY3RlcnM6IHtyZWNlaXZlZEVwaXNvZGVJdGVtLmNoYXJhY3RlcnMubGVuZ3RofTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogXCIxMnB4XCJ9fT5cbiAgICAgICAge3JlY2VpdmVkRXBpc29kZUl0ZW0uY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcjogQ2hhcmFjdGVyLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPENoaXAga2V5PXtpbmRleH0gbGFiZWw9e2Ake2NoYXJhY3Rlci5uYW1lfSAtICR7Y2hhcmFjdGVyLnN0YXR1c31gfSB2YXJpYW50PVwib3V0bGluZWRcIi8+XG4gICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZUl0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGluayIsIkxvYWRlciIsIkJveCIsIkJ1dHRvbiIsIkNoaXAiLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwidXNlU3RvcmVzIiwidXNlUm91dGVyIiwib2JzZXJ2ZXIiLCJFcGlzb2RlSXRlbSIsInJlY2VpdmVkRXBpc29kZUl0ZW0iLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaEVwaXNvZGVJdGVtIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIlN0cmluZyIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnblNlbGYiLCJtdCIsImhyZWYiLCJuYW1lIiwiYWlyX2RhdGUiLCJlcGlzb2RlIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImZsZXhXcmFwIiwibWFwIiwiY2hhcmFjdGVyIiwiaW5kZXgiLCJsYWJlbCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});