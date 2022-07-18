exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 8178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ UPDATE_COMMENTS_ACTION; },
/* harmony export */   "G": function() { return /* binding */ comments; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2744);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_COMMENTS_ACTION = "UPDATE_COMMENTS";
const comments = (state = [], action) => {
  var _action$payload$comme, _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return (_action$payload$comme = (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.comments) !== null && _action$payload$comme !== void 0 ? _action$payload$comme : [];

    case UPDATE_COMMENTS_ACTION:
      return action.comments;

    default:
      return state;
  }
};

/***/ }),

/***/ 683:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7561);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2744);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8178);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2354);




const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  post: _post__WEBPACK_IMPORTED_MODULE_3__/* .post */ .v,
  comments: _comments__WEBPACK_IMPORTED_MODULE_2__/* .comments */ .G
});

const makeStore = () => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combinedReducer);

const store = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: false
});

/***/ }),

/***/ 2354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ UPDATE_POST_ACTION; },
/* harmony export */   "v": function() { return /* binding */ post; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2744);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_POST_ACTION = "UPDATE_POST";
const post = (state = null, action) => {
  var _action$payload$post, _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return (_action$payload$post = (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.post) !== null && _action$payload$post !== void 0 ? _action$payload$post : null;

    case UPDATE_POST_ACTION:
      return action.post;

    default:
      return state;
  }
};

/***/ })

};
;