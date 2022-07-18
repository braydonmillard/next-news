exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 4885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pE": function() { return /* binding */ fetchCategories; },
  "jn": function() { return /* binding */ fetchCategory; },
  "tH": function() { return /* binding */ fetchComments; },
  "SD": function() { return /* binding */ fetchPost; },
  "T6": function() { return /* binding */ fetchPosts; },
  "rd": function() { return /* binding */ submitComment; }
});

;// CONCATENATED MODULE: ./request/config.ts
const IS_PRODUCTION = true;
const protocol = IS_PRODUCTION ? "https" : "http";
const host = process.env.NEXT_PUBLIC_VERCEL_URL;
const config = {
  baseUrl: `${protocol}://${host}/api`
};
;// CONCATENATED MODULE: ./request/index.ts

const {
  baseUrl
} = config;
console.log({
  baseUrl
});

async function request(url) {
  const response = await fetch(`${baseUrl}/${url}`);
  const data = await response.json();
  return data;
}

async function post(url, data) {
  return fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(data)
  });
}

const fetchPosts = () => request("posts");
const fetchPost = id => request(`posts/${id}`);
const fetchCategories = () => request("categories");
const fetchCategory = categoryId => request(`categories/${categoryId}`);
const fetchComments = postId => request(`comments/${postId}`);
const submitComment = (postId, name, comment) => post(`comments/${postId}`, {
  name,
  comment
});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;