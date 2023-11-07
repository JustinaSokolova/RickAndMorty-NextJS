"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ 7325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
;// CONCATENATED MODULE: external "graphql"
const external_graphql_namespaceObject = require("graphql");
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./app/gql/queries/get_episodes.ts

const GET_EPISODES = client_namespaceObject.gql`
query SearchEpisodes($filter: FilterEpisode){
  episodes(filter: $filter) {
    info {
      count
      pages
    }
    results {
      id
      name
      episode
      air_date
    }
  }
}
`;

;// CONCATENATED MODULE: external "mobx"
const external_mobx_namespaceObject = require("mobx");
;// CONCATENATED MODULE: ./app/gql/queries/get_episode.ts

const GET_EPISODE = client_namespaceObject.gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
        status
      }
    }
  }
`;

;// CONCATENATED MODULE: ./app/stores/episodes-store.ts




class EpisodeStore {
    episodes = [];
    sortedEpisodes = [];
    totalCount = 0;
    loading = false;
    error = null;
    searchQuery = "";
    // countVisible = 5;
    // sortedDate = "";
    constructor(root){
        this.root = root;
        (0,external_mobx_namespaceObject.makeAutoObservable)(this);
    }
    setEpisodes = (0,external_mobx_namespaceObject.action)((episodes)=>{
        this.episodes = episodes;
    });
    setSortedEpisodes = (0,external_mobx_namespaceObject.action)((sortedEpisodes)=>{
        this.sortedEpisodes = sortedEpisodes;
    });
    setEpisodeItem = (0,external_mobx_namespaceObject.action)((episodeItem)=>{
        this.episodeItem = episodeItem;
    });
    setTotalCount = (0,external_mobx_namespaceObject.action)((totalCount)=>{
        this.totalCount = totalCount;
    });
    setLoading = (0,external_mobx_namespaceObject.action)((loading)=>{
        this.loading = loading;
    });
    setError = (0,external_mobx_namespaceObject.action)((error)=>{
        this.error = error;
    });
    setSearchQuery = (0,external_mobx_namespaceObject.action)((searchQuery)=>{
        this.searchQuery = searchQuery;
    });
    // get receivedEpisodes() {
    //   return this.episodes;
    // };
    // get receivedCountEpisodes() {
    //   return this.totalCount;
    // }
    // get receivedEpisodeItem() {
    //   return this.episodeItem;
    // };
    get getSortedEpisodes() {
        return this.sortedEpisodes;
    }
    get getSearchQuery() {
        return this.searchQuery;
    }
    hydrate = (data)=>{
        if (!data) return;
        this.setEpisodes(data);
    };
    fetchEpisodes = async ()=>{
        try {
            this.setLoading(true);
            const response = await fetch("https://rickandmortyapi.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: (0,external_graphql_namespaceObject.print)(GET_EPISODES),
                    variables: {
                        filter: {
                            name: this.searchQuery
                        }
                    }
                })
            });
            const { data  } = await response.json();
            const { episodes  } = data;
            (0,external_mobx_namespaceObject.runInAction)(()=>{
                this.setEpisodes(episodes.results);
                this.setTotalCount(episodes.info.count);
                this.setError(null);
            });
        } catch (error) {
            console.log(error);
            (0,external_mobx_namespaceObject.runInAction)(()=>this.setError(error));
        } finally{
            (0,external_mobx_namespaceObject.runInAction)(()=>this.setLoading(false));
        }
    };
    fetchEpisodeItem = async (id)=>{
        try {
            this.setLoading(true);
            const response = await fetch("https://rickandmortyapi.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: (0,external_graphql_namespaceObject.print)(GET_EPISODE),
                    variables: {
                        id
                    }
                })
            });
            const { data  } = await response.json();
            const { episode  } = data;
            (0,external_mobx_namespaceObject.runInAction)(()=>{
                this.setEpisodeItem(episode);
                this.setError(null);
            });
        } catch (error) {
            (0,external_mobx_namespaceObject.runInAction)(()=>this.setError(error));
        } finally{
            (0,external_mobx_namespaceObject.runInAction)(()=>this.setLoading(false));
        }
    };
}
/* harmony default export */ const episodes_store = (EpisodeStore);

;// CONCATENATED MODULE: ./app/stores/index.js


// import { RootStore } from "./RootStore";
// enable static rendering ONLY on server
(0,external_mobx_react_lite_.enableStaticRendering)("undefined" === "undefined");
// init a client store that we will send to client (one store for client)
let clientStore;
const initStore = (initData)=>{
    // check if we already declare store (client Store), otherwise create one
    const store = clientStore ?? new episodes_store();
    // hydrate to store if receive initial data
    if (initData) store.hydrate(initData);
    // Create a store on every server request
    if (true) return store;
    // Otherwise it's client, remember this store and return
    if (!clientStore) clientStore = store;
    return store;
};
// Hook for using store
function useStore(initData) {
    return initStore(initData);
}

// EXTERNAL MODULE: ./app/root-store-context.ts
var root_store_context = __webpack_require__(5721);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./app/styles/global-styles.tsx
"use client";

const GlobalStyle = external_styled_components_.createGlobalStyle`
html,
body {
  font-family: 'Courier New', Courier, monospace;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;
/* harmony default export */ const global_styles = (GlobalStyle);

;// CONCATENATED MODULE: ./app/components/common/titles/title.tsx



const Title = ({ children , align , mt , mb  })=>/*#__PURE__*/ jsx_runtime_.jsx(StyledTitle, {
        align: align,
        mt: mt,
        mb: mb,
        children: children
    });
const StyledTitle = external_styled_components_default().h1.withConfig({
    componentId: "sc-76571c0d-0"
})`
  font-size: 28px;
  text-align: ${(props)=>props.align};
  width: 100%;
  display: block;
  margin-top: ${(props)=>`${props.mt}px`};
  margin-bottom: ${(props)=>`${props.mb}px`};
  color: #fff;
`;
/* harmony default export */ const title = (Title);

;// CONCATENATED MODULE: ./app/components/common/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(title, {
            align: "center",
            children: "Rick and Morty App"
        })
    });
};
const Container = external_styled_components_default().header.withConfig({
    componentId: "sc-82948e9c-0"
})`
  width: 100%;
  min-height: 56px;
  background-color: #1f1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/* harmony default export */ const common_Header = (Header);

;// CONCATENATED MODULE: ./pages/_app.tsx






const MyApp = ({ Component , pageProps  })=>{
    const store = useStore(pageProps.initialState);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(global_styles, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(root_store_context/* RootStoreContext.Provider */.y.Provider, {
                value: store,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(common_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

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
var __webpack_exports__ = (__webpack_exec__(7325));
module.exports = __webpack_exports__;

})();