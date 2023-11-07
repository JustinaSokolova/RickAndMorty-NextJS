"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 3331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6205);
"use client";



const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_mui__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            display: "flex",
            justifyContent: "center",
            mt: 3
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_mui__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 1711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const PageLayout = ({ children , headContext  })=>{
    const { title , meta  } = headContext;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    meta.map(({ property , content , key , name  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: name || "",
                            content: content || "",
                            property: property || ""
                        }, key || "")),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "../../favicon.png"
                    })
                ]
            }),
            children
        ]
    });
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-4a853704-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);


/***/ }),

/***/ 5721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useStores),
/* harmony export */   "y": () => (/* binding */ RootStoreContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";

// import {RootStore} from "./stores/RootStore.ts";
const RootStoreContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useStores = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RootStoreContext);
    if (context === null) {
        throw new Error("useStore must be used within RootStoreProvider");
    }
    return context;
};


/***/ }),

/***/ 6205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Box")) __webpack_require__.d(__webpack_exports__, { "Box": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Button")) __webpack_require__.d(__webpack_exports__, { "Button": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Button; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Card")) __webpack_require__.d(__webpack_exports__, { "Card": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Card; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "CardContent")) __webpack_require__.d(__webpack_exports__, { "CardContent": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.CardContent; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "CardMedia")) __webpack_require__.d(__webpack_exports__, { "CardMedia": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.CardMedia; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "CircularProgress")) __webpack_require__.d(__webpack_exports__, { "CircularProgress": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.CircularProgress; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Container")) __webpack_require__.d(__webpack_exports__, { "Container": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Container; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "FormControl")) __webpack_require__.d(__webpack_exports__, { "FormControl": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Grid")) __webpack_require__.d(__webpack_exports__, { "Grid": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "InputLabel")) __webpack_require__.d(__webpack_exports__, { "InputLabel": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "MenuItem")) __webpack_require__.d(__webpack_exports__, { "MenuItem": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Select")) __webpack_require__.d(__webpack_exports__, { "Select": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Select; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "TextField")) __webpack_require__.d(__webpack_exports__, { "TextField": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_mui_material__WEBPACK_IMPORTED_MODULE_0__, "Typography")) __webpack_require__.d(__webpack_exports__, { "Typography": function() { return _mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography; } });
"use client";



/***/ })

};
;