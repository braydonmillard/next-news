(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Center/style.ts

const Center = (external_styled_components_default()).div`
  max-width: 1000px;
  padding: 0 20px;
  margin: auto;

  @media (max-width: 800px) {
    max-width: 520px;
    padding: 0 15px;
  }
`;
;// CONCATENATED MODULE: ./components/Center/index.ts

;// CONCATENATED MODULE: ./components/Header/style.ts

const Container = (external_styled_components_default()).header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  height: 50px;
  padding: 7px 0;

  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;
const Logo = (external_styled_components_default()).h1`
  font-size: 1.6rem;
  font-family: ${p => p.theme.fonts.accent};

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: ${p => p.theme.colors.pink};
  }
`;
;// CONCATENATED MODULE: ./components/Header/Header.tsx




const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Center, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "What's Next?!"
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Header/index.ts

;// CONCATENATED MODULE: ./components/Footer/style.ts

const style_Container = (external_styled_components_default()).footer`
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  height: 50px;
`;
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx




const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/jsx_runtime_.jsx(style_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Center, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://newline.co",
        children: "Newline.co"
      }), " ", currentYear]
    })
  });
};
;// CONCATENATED MODULE: ./components/Footer/index.ts

;// CONCATENATED MODULE: ./shared/theme.ts

const theme = {
  fonts: {
    basic: "Helvetica, sans-serif",
    accent: '"Permanent Marker", cursive'
  },
  colors: {
    orange: "#f4ae40",
    blue: "#387af5",
    pink: "#eb57a3",
    // Credits: https://colors.lol/fou.
    gray: "#aaa"
  }
};
const GlobalStyle = external_styled_components_.createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({
  theme
}) => theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before { box-sizing: border-box; }

  h1, h2, h3, h4, h5, h6 { margin: 0; }
  a { color: ${({
  theme
}) => theme.colors.blue} }
  a:hover { color: ${({
  theme
}) => theme.colors.pink} }

  input,
  textarea,
  button {
    font-family: ${({
  theme
}) => theme.fonts.basic};
  }

  .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
  }
`;
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(683);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {
      theme: theme
    }), /*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "What's Next?!"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "main",
      children: /*#__PURE__*/jsx_runtime_.jsx(Center, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/* harmony default export */ var _app = (store/* store.withRedux */.h.withRedux(MyApp));

/***/ }),

/***/ 2744:
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

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

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,683], function() { return __webpack_exec__(7763); });
module.exports = __webpack_exports__;

})();