"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/mui.js
var mui = __webpack_require__(6205);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/EpisodeCard/index.tsx
"use client";




const EpisodeCard = (episode)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/${episode.id}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(CardStyle, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(mui.Card, {
                    sx: {
                        width: 295,
                        height: 170
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.CardContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkStyle, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                                    variant: "h5",
                                    component: "div",
                                    children: episode.name
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                                variant: "body1",
                                children: [
                                    "Air date: ",
                                    episode.air_date
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                                variant: "subtitle1",
                                children: [
                                    "Episode: ",
                                    episode.episode
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
const LinkStyle = external_styled_components_default().a.withConfig({
    componentId: "sc-4484ef90-0"
})`
  transition: all 0.3s;
`;
const CardStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-4484ef90-1"
})`
cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05)
  }

  &:hover ${LinkStyle} {
    color: #1976d2;
  }
`;
/* harmony default export */ const components_EpisodeCard = (EpisodeCard);

// EXTERNAL MODULE: ./app/components/common/Loader.tsx
var Loader = __webpack_require__(3331);
// EXTERNAL MODULE: ./app/root-store-context.ts
var root_store_context = __webpack_require__(5721);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
;// CONCATENATED MODULE: ./app/components/EpisodesList/index.tsx
"use client";







const EpisodesList = (0,external_mobx_react_lite_.observer)(()=>{
    const { episodes , totalCount , loading , error , setSortedEpisodes , getSortedEpisodes  } = (0,root_store_context/* useStores */.m)();
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(5);
    const { 0: sortBy , 1: setSortBy  } = (0,external_react_.useState)("");
    const getFilteredEpisodes = (sortBy)=>{
        // @ts-ignore
        const filteredEpisodes = episodes.sort((a, b)=>{
            let dateA = new Date(Date.parse(a.air_date));
            let dateB = new Date(Date.parse(b.air_date));
            // @ts-ignore
            if (sortBy === "asc") return dateA - dateB;
            // @ts-ignore
            if (sortBy === "dest") return dateB - dateA;
        });
        return setSortedEpisodes(filteredEpisodes);
    };
    const handleChangeSort = (event)=>{
        setSortBy(event.target.value);
        getFilteredEpisodes(event.target.value);
    };
    const handleMoreEpisodes = ()=>{
        setVisible((prevValue)=>prevValue + 5);
    };
    const episodesForShow = getSortedEpisodes.length ? getSortedEpisodes : episodes;
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                variant: "body1",
                noWrap: true,
                component: "div",
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: [
                    "Oops!! Error: ",
                    error,
                    " "
                ]
            })
        });
    }
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {});
    if (totalCount === null) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
            variant: "body1",
            noWrap: true,
            component: "div",
            sx: {
                display: "flex",
                justifyContent: "center"
            },
            children: "Sorry, there are no episodes with this name :("
        })
    });
    return episodes.length ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Container, {
            sx: {
                display: "flex",
                flexDirection: "column",
                gap: "24px"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Typography, {
                    variant: "h4",
                    sx: {
                        color: "#000"
                    },
                    children: [
                        "Episodes (",
                        totalCount,
                        ")"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Box, {
                    sx: {
                        minWidth: 120
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
                            variant: "body1",
                            sx: {
                                color: "#000",
                                mb: 2
                            },
                            children: "Sorted by Date:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.FormControl, {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(mui.InputLabel, {
                                    id: "demo-simple-select-label",
                                    children: "Select"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Select, {
                                    labelId: "demo-simple-select-label",
                                    id: "demo-simple-select",
                                    value: sortBy,
                                    label: "Select",
                                    onChange: handleChangeSort,
                                    sx: {
                                        maxWidth: "320px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(mui.MenuItem, {
                                            value: "dest",
                                            children: "newest"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(mui.MenuItem, {
                                            value: "asc",
                                            children: "oldest"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mui.Grid, {
                    container: true,
                    spacing: 3,
                    children: episodesForShow.slice(0, visible).map((episode, index)=>/*#__PURE__*/ jsx_runtime_.jsx(mui.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_EpisodeCard, {
                                ...episode
                            })
                        }, `${episode.id}${episode.name}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mui.Button, {
                    variant: "outlined",
                    sx: {
                        alignSelf: "center",
                        mb: 3
                    },
                    onClick: handleMoreEpisodes,
                    children: "Load more"
                })
            ]
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx(mui.Typography, {
        variant: "body1",
        noWrap: true,
        component: "div",
        sx: {
            display: "flex",
            justifyContent: "center"
        },
        children: "Use the input field to search for episodes"
    });
});
/* harmony default export */ const components_EpisodesList = (EpisodesList);

;// CONCATENATED MODULE: ./app/components/SearchForm/index.tsx
"use client";





const SearchForm = (0,external_mobx_react_lite_.observer)(()=>{
    const { searchQuery , setSearchQuery , fetchEpisodes  } = (0,root_store_context/* useStores */.m)();
    const handleSearch = ()=>{
        if (searchQuery.length) fetchEpisodes();
    };
    const handleKeyDown = (event)=>{
        if (event.code === "Enter") event.preventDefault();
        if (searchQuery.length) {
            fetchEpisodes();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui.Box, {
            sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                mt: 3
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(mui.Box, {
                    component: "form",
                    sx: {
                        "& .MuiTextField-root": {
                            m: 1,
                            width: "45ch"
                        }
                    },
                    noValidate: true,
                    autoComplete: "off",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(mui.FormControl, {
                        fullWidth: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(mui.TextField, {
                            type: "text",
                            id: "outlined-basic",
                            variant: "outlined",
                            label: "Name",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            onKeyDown: (event)=>handleKeyDown(event),
                            color: "primary"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mui.Button, {
                    variant: "outlined",
                    type: "button",
                    onClick: handleSearch,
                    children: "Enter"
                })
            ]
        })
    });
});
/* harmony default export */ const components_SearchForm = (SearchForm);

// EXTERNAL MODULE: ./app/layouts/page-layout.tsx
var page_layout = __webpack_require__(1711);
;// CONCATENATED MODULE: ./app/components/common/titles/sub-title.tsx



const SubTitle = ({ children , align , mb , mt  })=>/*#__PURE__*/ jsx_runtime_.jsx(StyledSubTitle, {
        mb: mb,
        mt: mt,
        align: align,
        children: children
    });
const StyledSubTitle = external_styled_components_default().h2.withConfig({
    componentId: "sc-be080d56-0"
})`
  font-size: 22px;
  text-align: ${(props)=>props.align};
  width: 100%;
  margin-top: ${(props)=>`${props.mt}px`};
  margin-bottom: ${(props)=>`${props.mb}px`};

  @media (max-width: 768px) {
    text-align: center;
  }
`;
/* harmony default export */ const sub_title = (SubTitle);

;// CONCATENATED MODULE: ./pages/index.tsx






const backgroundimage = "https://img.goodfon.ru/original/3360x1050/3/4d/vinda-rik-rick-windows-10-rick-and-morty-rik-i-morti-morti-r.jpg";
const headContext = {
    title: "Rick and Morty App",
    meta: [
        {
            name: "description",
            content: "Rick and Morty App created with NextJS, MobX, GraphQL, MUI and styled components"
        }, 
    ]
};
const Main = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(page_layout/* default */.Z, {
        headContext: headContext,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BackgroundWrapper, {
                backgroundimage: backgroundimage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(sub_title, {
                    align: "center",
                    mt: 18,
                    children: "Which episode would you like to find?"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SearchForm, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_EpisodesList, {})
                ]
            })
        ]
    });
};
const BackgroundWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a5e7fc72-0"
})`
  position: relative;
  height: 420px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
        

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // object-fit: cover
    background-image: url(${(props)=>props.backgroundimage});
    background-repeat: no-repeat;
    background-position: left 85%;
    background-size: cover;
  }
`;
const Header = external_styled_components_default().section.withConfig({
    componentId: "sc-a5e7fc72-1"
})`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`;
const Content = external_styled_components_default().section.withConfig({
    componentId: "sc-a5e7fc72-2"
})`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
/* harmony default export */ const pages = (Main);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,467], () => (__webpack_exec__(3481)));
module.exports = __webpack_exports__;

})();