"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 9170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/common/Loader.tsx
var Loader = __webpack_require__(3331);
// EXTERNAL MODULE: ./lib/mui.js
var mui = __webpack_require__(6205);
// EXTERNAL MODULE: ./app/root-store-context.ts
var root_store_context = __webpack_require__(5721);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
// EXTERNAL MODULE: ./app/layouts/page-layout.tsx
var page_layout = __webpack_require__(1711);
;// CONCATENATED MODULE: ./pages/[id]/index.tsx
"use client";









const EpisodeItem = (0,external_mobx_react_lite_.observer)(()=>{
    const { episodeItem , loading , error , fetchEpisodeItem  } = (0,root_store_context/* useStores */.m)();
    const router = (0,router_namespaceObject.useRouter)();
    const { id  } = router.query;
    (0,external_react_.useEffect)(()=>{
        id && fetchEpisodeItem(String(id));
    }, [
        id
    ]);
    const headContext = (0,external_react_.useMemo)(()=>({
            title: `Episode | ${episodeItem?.name}`,
            meta: []
        }), [
        episodeItem?.name
    ]);
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {});
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                variant: "body1",
                noWrap: true,
                component: "div",
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    mt: 4
                },
                children: [
                    "Oops!! Error: ",
                    error,
                    " "
                ]
            })
        });
    }
    if (episodeItem === null) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                variant: "body1",
                noWrap: true,
                component: "div",
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    mt: 4
                },
                children: "Oops!! It seems that such an episode does not exist"
            })
        });
    }
    return !loading && episodeItem && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(page_layout/* default */.Z, {
            headContext: headContext,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Container, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(mui.Button, {
                        variant: "outlined",
                        sx: {
                            display: "flex",
                            alignSelf: "flex-start",
                            mt: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Go back"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                        variant: "h5",
                        component: "div",
                        children: episodeItem.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                        variant: "body1",
                        children: [
                            "Air date: ",
                            episodeItem.air_date
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                        variant: "subtitle1",
                        children: [
                            "Episode: ",
                            episodeItem.episode
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                        variant: "subtitle1",
                        children: [
                            "Characters: ",
                            episodeItem.characters?.length
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mui.Box, {
                        sx: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px"
                        },
                        children: episodeItem.characters?.map((character, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Card, {
                                sx: {
                                    width: 160
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(mui.CardMedia, {
                                        component: "img",
                                        height: "160",
                                        image: character.image,
                                        alt: "character img"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.CardContent, {
                                        sx: {
                                            padding: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                                                gutterBottom: true,
                                                variant: "body1",
                                                component: "div",
                                                children: character.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                                                variant: "subtitle2",
                                                color: "text.secondary",
                                                children: character.status
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const _id_ = (EpisodeItem);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,467], () => (__webpack_exec__(9170)));
module.exports = __webpack_exports__;

})();