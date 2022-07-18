(function() {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 5912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ postsHandler; }
/* harmony export */ });
/* harmony import */ var _server_posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2314);

function postsHandler(req, res) {
  const posts = _server_posts_json__WEBPACK_IMPORTED_MODULE_0__;
  return res.status(200).json(posts);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [314], function() { return __webpack_exec__(5912); });
module.exports = __webpack_exports__;

})();