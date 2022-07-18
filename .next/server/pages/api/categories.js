(function() {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 6672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ categoriesHandler; }
});

;// CONCATENATED MODULE: ./server/categories.json
var categories_namespaceObject = JSON.parse('["Science","Technology","Arts"]');
;// CONCATENATED MODULE: ./pages/api/categories/index.ts

function categoriesHandler(req, res) {
  const categories = categories_namespaceObject;
  return res.status(200).json(categories);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6672));
module.exports = __webpack_exports__;

})();