(function() {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 6570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": function() { return /* reexport */ Loader; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Loader/style.ts

const Container = (external_styled_components_default()).div`
  font-family: ${p => p.theme.fonts.accent};
`;
;// CONCATENATED MODULE: ./components/Loader/Loader.tsx


const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: "Loading..."
  });
};
;// CONCATENATED MODULE: ./components/Loader/index.ts


/***/ }),

/***/ 6903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./request/index.ts + 1 modules
var request = __webpack_require__(4885);
// EXTERNAL MODULE: ./components/Section/index.ts + 5 modules
var Section = __webpack_require__(1317);
// EXTERNAL MODULE: ./components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(6570);
;// CONCATENATED MODULE: ./pages/category/[id].tsx





const getServerSideProps = async ({
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const posts = await (0,request/* fetchCategory */.jn)(params.id);
  return {
    props: {
      posts
    }
  };
};

const Category = ({
  posts
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  return /*#__PURE__*/jsx_runtime_.jsx(Section/* Section */.$, {
    posts: posts,
    title: String(router.query.id)
  });
};

/* harmony default export */ var _id_ = (Category);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,489,317], function() { return __webpack_exec__(6903); });
module.exports = __webpack_exports__;

})();