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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(function() {\n    _s();\n    var ref = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), receivedEpisodeItem = ref.receivedEpisodeItem, loading = ref.loading, error = ref.error, fetchEpisodeItem = ref.fetchEpisodeItem;\n    console.log(receivedEpisodeItem);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    console.log(router.query);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        id && fetchEpisodeItem(String(id));\n    }, [\n        id\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return receivedEpisodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: \"18px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"outlined\",\n                    sx: {\n                        display: \"flex\",\n                        alignSelf: \"flex-start\",\n                        mt: 3\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    children: receivedEpisodeItem.name\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body1\",\n                    children: [\n                        \"Air date: \",\n                        receivedEpisodeItem.air_date\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Episode: \",\n                        receivedEpisodeItem.episode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Characters: \",\n                        receivedEpisodeItem.characters.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\",\n                        gap: \"12px\"\n                    },\n                    children: receivedEpisodeItem.characters.map(function(character, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Chip, {\n                            label: \"\".concat(character.name, \" - \").concat(character.status),\n                            variant: \"outlined\"\n                        }, index, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"jpsDwcxz8+IetFNJBXBVsYgpuSA=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n})), \"jpsDwcxz8+IetFNJBXBVsYgpuSA=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3dCLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLFNBQW9CLEVBQUVDLEtBQWE7NkNBQ3RFLDhEQUFDcEMsMENBQUk7NEJBQWFxQyxLQUFLLEVBQUUsRUFBQyxDQUFzQkYsTUFBZ0IsQ0FBcENBLFNBQVMsQ0FBQ1AsSUFBSSxFQUFDLEtBQUcsQ0FBbUIsUUFBakJPLFNBQVMsQ0FBQ0csTUFBTSxDQUFFOzRCQUFFckIsT0FBTyxFQUFDLFVBQVU7MkJBQTNFbUIsS0FBSzs7OztpQ0FBd0U7cUJBQ3pGLENBQUM7Ozs7O3lCQUNJOzs7Ozs7aUJBQ0U7cUJBQ1QsQ0FDSjtDQUNGOztRQTdDbUVqQyw4REFBUztRQUc1REMsa0RBQVM7O0dBMEN4Qjs7UUE3Q2tFRCw4REFBUztRQUc1REMsa0RBQVM7O0VBMEN4Qjs7QUFFRiwrREFBZUUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vaW5kZXgudHN4Pzc2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IEVwaXNvZGUgfSBmcm9tICdAL2ludGVyZmFjZXMvRXBpc29kZSdcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uLy4uL2FwcC9pbnRlcmZhY2VzL0NoYXJhY3RlcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlcidcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDaGlwLCBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICcuLi8uLi9saWIvbXVpJ1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vLi4vYXBwL3Jvb3Qtc3RvcmUtY29udGV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5cblxuXG5jb25zdCBFcGlzb2RlSXRlbTogUmVhY3QuRkMgPSBvYnNlcnZlcigoKSA9PiB7XG4gIGNvbnN0IHsgcmVjZWl2ZWRFcGlzb2RlSXRlbSwgbG9hZGluZywgZXJyb3IsIGZldGNoRXBpc29kZUl0ZW0gfSA9IHVzZVN0b3JlcygpO1xuICBjb25zb2xlLmxvZyhyZWNlaXZlZEVwaXNvZGVJdGVtKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XG4gIFxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZCAmJiBmZXRjaEVwaXNvZGVJdGVtKFN0cmluZyhpZCkpXG4gIH0sIFtpZF0pO1xuXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiAoPExvYWRlci8+KVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgIG5vV3JhcFxuICAgICAgY29tcG9uZW50PVwiZGl2XCIgc3g9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT5Pb3BzISEgRXJyb3I6IHtlcnJvcn0gPC9UeXBvZ3JhcGh5PlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHJlY2VpdmVkRXBpc29kZUl0ZW0gJiYgKCBcbiAgICA8PlxuICAgIDxDb250YWluZXIgc3g9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiBcIjE4cHhcIn19PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsIG10OiAzfX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5HbyBiYWNrPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIHtyZWNlaXZlZEVwaXNvZGVJdGVtLm5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+QWlyIGRhdGU6IHtyZWNlaXZlZEVwaXNvZGVJdGVtLmFpcl9kYXRlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPkVwaXNvZGU6IHtyZWNlaXZlZEVwaXNvZGVJdGVtLmVwaXNvZGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+Q2hhcmFjdGVyczoge3JlY2VpdmVkRXBpc29kZUl0ZW0uY2hhcmFjdGVycy5sZW5ndGh9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Qm94IHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiwgZ2FwOiBcIjEycHhcIn19PlxuICAgICAgICB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5jaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyOiBDaGFyYWN0ZXIsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8Q2hpcCBrZXk9e2luZGV4fSBsYWJlbD17YCR7Y2hhcmFjdGVyLm5hbWV9IC0gJHtjaGFyYWN0ZXIuc3RhdHVzfWB9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlSXRlbTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTG9hZGVyIiwiQm94IiwiQnV0dG9uIiwiQ2hpcCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJ1c2VTdG9yZXMiLCJ1c2VSb3V0ZXIiLCJvYnNlcnZlciIsIkVwaXNvZGVJdGVtIiwicmVjZWl2ZWRFcGlzb2RlSXRlbSIsImxvYWRpbmciLCJlcnJvciIsImZldGNoRXBpc29kZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIlN0cmluZyIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnblNlbGYiLCJtdCIsImhyZWYiLCJuYW1lIiwiYWlyX2RhdGUiLCJlcGlzb2RlIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImZsZXhXcmFwIiwibWFwIiwiY2hhcmFjdGVyIiwiaW5kZXgiLCJsYWJlbCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});