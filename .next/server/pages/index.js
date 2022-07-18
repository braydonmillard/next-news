(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Front; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Section/index.ts + 5 modules
var Section = __webpack_require__(1317);
;// CONCATENATED MODULE: ./components/Feed/Feed.tsx



const Feed = ({
  posts,
  categories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: categories.map(category => {
      const inSection = posts.filter(post => post.category === category);
      return /*#__PURE__*/jsx_runtime_.jsx(Section/* Section */.$, {
        title: category,
        posts: inSection,
        isCompact: true
      }, category);
    })
  });
};
;// CONCATENATED MODULE: ./components/Feed/index.ts

// EXTERNAL MODULE: ./request/index.ts + 1 modules
var request = __webpack_require__(4885);
;// CONCATENATED MODULE: ./pages/index.tsx







async function getServerSideProps() {
  const categories = await (0,request/* fetchCategories */.pE)();
  const posts = await (0,request/* fetchPosts */.T6)();
  return {
    props: {
      posts,
      categories
    }
  };
}
function Front({
  posts,
  categories
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Front page of the Internet"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Feed, {
        posts: posts,
        categories: categories
      })
    })]
  });
}

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,489,317], function() { return __webpack_exec__(3615); });
module.exports = __webpack_exports__;

})();