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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/common/Loader */ \"./app/components/common/Loader.tsx\");\n/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mui */ \"./lib/mui.js\");\n/* harmony import */ var _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/root-store-context */ \"./app/root-store-context.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\nvar EpisodeItem = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.observer)(_c = _s(function() {\n    _s();\n    var ref = (0,_app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores)(), receivedEpisodeItem = ref.receivedEpisodeItem, loading = ref.loading, error = ref.error, fetchEpisodeItem = ref.fetchEpisodeItem;\n    console.log(receivedEpisodeItem);\n    // const router = useRouter();\n    // const {id} = router.query\n    // useEffect(() => {\n    //   fetchEpisodeItem(String(id))\n    // }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_common_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 24\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                component: \"div\",\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    \"Oops!! Error: \",\n                    error,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n    return receivedEpisodeItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: \"24px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"outlined\",\n                    sx: {\n                        display: \"flex\",\n                        alignSelf: \"flex-start\",\n                        mt: 3\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    children: receivedEpisodeItem.name\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body1\",\n                    children: [\n                        \"Air date: \",\n                        receivedEpisodeItem.air_date\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Episode: \",\n                        receivedEpisodeItem.episode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"subtitle1\",\n                    children: [\n                        \"Characters: \",\n                        receivedEpisodeItem.characters.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body1\",\n                    children: [\n                        \"Character List: \",\n                        receivedEpisodeItem.air_date\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    children: receivedEpisodeItem.characters.map(function(character, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_mui__WEBPACK_IMPORTED_MODULE_4__.Chip, {\n                            label: \"\".concat(character.name, \" - \").concat(character.status),\n                            variant: \"outlined\"\n                        }, index, false, {\n                            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justinasokolova/Desktop/Frontend Dev /Result School/Module 2 - React/rick-and-morty_task/pages/[id]/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n}, \"wRHVd69iGOdD9gyWe3pE/Ec4pEY=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores\n    ];\n})), \"wRHVd69iGOdD9gyWe3pE/Ec4pEY=\", false, function() {\n    return [\n        _app_root_store_context__WEBPACK_IMPORTED_MODULE_5__.useStores\n    ];\n});\n_c1 = EpisodeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EpisodeItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"EpisodeItem$observer\");\n$RefreshReg$(_c1, \"EpisodeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTsyQkFBM0VrQixLQUFLOzs7O2lDQUF3RTtxQkFDekYsQ0FBQzs7Ozs7eUJBQ0k7Ozs7OztpQkFDRTtxQkFDVCxDQUNKO0NBQ0Y7O1FBL0NtRTNCLDhEQUFTOztHQStDM0U7O1FBL0NrRUEsOERBQVM7O0VBK0MzRTs7QUFFRiwrREFBZUUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vaW5kZXgudHN4Pzc2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IEVwaXNvZGUgfSBmcm9tICdAL2ludGVyZmFjZXMvRXBpc29kZSdcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJ0AvaW50ZXJmYWNlcy9DaGFyYWN0ZXInXG5pbXBvcnQgeyBHRVRfRVBJU09ERSB9IGZyb20gJ0AvZ3FsL3F1ZXJpZXMvZ2V0X2VwaXNvZGUnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXInXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2hpcCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnLi4vLi4vbGliL211aSdcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJy4uLy4uL2FwcC9yb290LXN0b3JlLWNvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuXG5cblxuY29uc3QgRXBpc29kZUl0ZW06IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICBjb25zdCB7IHJlY2VpdmVkRXBpc29kZUl0ZW0sIGxvYWRpbmcsIGVycm9yLCBmZXRjaEVwaXNvZGVJdGVtIH0gPSB1c2VTdG9yZXMoKTtcbiAgY29uc29sZS5sb2cocmVjZWl2ZWRFcGlzb2RlSXRlbSlcblxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxuICBcbiAgXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2hFcGlzb2RlSXRlbShTdHJpbmcoaWQpKVxuICAvLyB9LCBbXSk7XG5cblxuICBpZiAobG9hZGluZykgcmV0dXJuICg8TG9hZGVyLz4pXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgbm9XcmFwXG4gICAgICBjb21wb25lbnQ9XCJkaXZcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19Pk9vcHMhISBFcnJvcjoge2Vycm9yfSA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRFcGlzb2RlSXRlbSAmJiAoIFxuICAgIDw+XG4gICAgPENvbnRhaW5lciBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IFwiMjRweFwifX0+XG4gICAgICBcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLCBtdDogM319PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+R28gYmFjazwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIFxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAge3JlY2VpdmVkRXBpc29kZUl0ZW0ubmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5BaXIgZGF0ZToge3JlY2VpdmVkRXBpc29kZUl0ZW0uYWlyX2RhdGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+RXBpc29kZToge3JlY2VpdmVkRXBpc29kZUl0ZW0uZXBpc29kZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5DaGFyYWN0ZXJzOiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5jaGFyYWN0ZXJzLmxlbmd0aH08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkNoYXJhY3RlciBMaXN0OiB7cmVjZWl2ZWRFcGlzb2RlSXRlbS5haXJfZGF0ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxCb3g+XG4gICAgICAgIHtyZWNlaXZlZEVwaXNvZGVJdGVtLmNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXI6IENoYXJhY3RlciwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxDaGlwIGtleT17aW5kZXh9IGxhYmVsPXtgJHtjaGFyYWN0ZXIubmFtZX0gLSAke2NoYXJhY3Rlci5zdGF0dXN9YH0gdmFyaWFudD1cIm91dGxpbmVkXCIvPlxuICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGVJdGVtOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJMb2FkZXIiLCJCb3giLCJCdXR0b24iLCJDaGlwIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsInVzZVN0b3JlcyIsIm9ic2VydmVyIiwiRXBpc29kZUl0ZW0iLCJyZWNlaXZlZEVwaXNvZGVJdGVtIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hFcGlzb2RlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50Iiwibm9XcmFwIiwiY29tcG9uZW50Iiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25TZWxmIiwibXQiLCJocmVmIiwibmFtZSIsImFpcl9kYXRlIiwiZXBpc29kZSIsImNoYXJhY3RlcnMiLCJsZW5ndGgiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpbmRleCIsImxhYmVsIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});