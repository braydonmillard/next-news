(function() {
var exports = {};
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 6360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ postHandler; }
/* harmony export */ });
/* harmony import */ var _server_posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2314);

function postHandler(req, res) {
  const posts = _server_posts_json__WEBPACK_IMPORTED_MODULE_0__;
  const wantedId = String(req.query.id);
  const post = posts.find(({
    id
  }) => String(id) === wantedId);
  return res.status(200).json(post);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [314], function() { return __webpack_exec__(6360); });
module.exports = __webpack_exports__;

})();