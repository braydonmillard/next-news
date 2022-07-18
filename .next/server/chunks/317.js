exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 1317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* reexport */ Section; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Post/PostCardStyle.ts

const Card = (external_styled_components_default()).a`
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
    0 4px 25px rgba(0, 0, 0, 0.07);
  color: black;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
      0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
const Figure = (external_styled_components_default()).figure`
  padding: 56% 0 0;
  margin: 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px 6px 0 0;

  img {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Title = (external_styled_components_default()).h3`
  margin: 10px 20px;
  font-size: 1.4rem;
`;
const Lead = (external_styled_components_default()).div`
  margin: 0 20px 20px;

  & > * {
    margin: 0 0 10px;
  }
`;
;// CONCATENATED MODULE: ./components/Post/PostCard.tsx




const PostCard = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/post/${post.id}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Figure, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          alt: post.title,
          src: post.image
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx(Lead, {
        children: post.lead
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Post/index.ts

;// CONCATENATED MODULE: ./components/Section/style.ts

const Grid = (external_styled_components_default()).div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    flex: auto;
  }

  &:after,
  & > * {
    width: calc(33% - 10px);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    &:after,
    & > * {
      width: 100%;
    }
  }
`;
const style_Title = (external_styled_components_default()).h2`
  font-size: 2.8rem;
  line-height: 1.1;
  margin: 10px 0 15px;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
const MoreLink = (external_styled_components_default()).a`
  margin: -20px 0 30px;
  display: inline-block;
  vertical-align: top;
`;
;// CONCATENATED MODULE: ./components/Section/Section.tsx





const Section = ({
  title,
  posts,
  isCompact = false
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(style_Title, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid, {
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard, {
        post: post
      }, post.id))
    }), isCompact && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${title}`,
      passHref: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreLink, {
        children: ["More in ", title]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Section/index.ts


/***/ })

};
;