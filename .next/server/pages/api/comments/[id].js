(function() {
var exports = {};
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 2206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ commentsHandler; }
});

;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs/promises"
var promises_namespaceObject = require("fs/promises");;
;// CONCATENATED MODULE: ./server/comments.json
var comments_namespaceObject = JSON.parse('[{"id":1,"author":"Albert Einstein","content":"If you can\'t explain it to a six year old, you don\'t understand it yourself.","time":"1 hour ago","post":1},{"id":2,"author":"Oprah Winfrey","content":"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.","time":"2 hours ago","post":1},{"id":3,"author":"Archimedes","content":"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.","time":"1 hour ago","post":2},{"id":4,"author":"Mother Teresa","content":"Spread love everywhere you go. Let no one ever come to you without leaving happier.","time":"2 hours ago","post":2},{"id":5,"author":"Steve Jobs","content":"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.","time":"1 hour ago","post":3},{"id":6,"author":"Helen Keller","content":"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","time":"2 hours ago","post":3},{"id":7,"author":"Anne Frank","content":"Whoever is happy will make others happy too.","time":"1 hour ago","post":4},{"id":8,"author":"Ralph Waldo Emerson","content":"Do not go where the path may lead, go instead where there is no path and leave a trail.","time":"2 hours ago","post":4},{"id":9,"author":"D. H. Lawrence","content":"Life is ours to be spent, not to be saved.","time":"1 hour ago","post":5},{"id":10,"author":"Marilyn Monroe","content":"Keep smiling, because life is a beautiful thing and there\'s so much to smile about.","time":"2 hours ago","post":5},{"id":11,"author":"Henry Ford","content":"Whether you think you can or you think you can\'t, you\'re right.","time":"1 hour ago","post":6},{"id":12,"author":"Rosa Parks","content":"I have learned over the years that when one\'s mind is made up, this diminishes fear.","time":"2 hours ago","post":6},{"id":13,"author":"Theodore Roosevelt","content":"Believe you can and you\'re halfway there.","time":"1 hour ago","post":7},{"id":14,"author":"Maya Angelou","content":"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","time":"2 hours ago","post":7},{"id":15,"author":"Ralph Waldo Emerson","content":"The only person you are destined to become is the person you decide to be.","time":"1 hour ago","post":8},{"id":16,"author":"Ayn Rand","content":"The question isn\'t who is going to let me; it\'s who is going to stop me.","time":"2 hours ago","post":8},{"id":17,"author":"Audrey Hepburn","content":"Nothing is impossible, the word itself says, ‘I\'m possible!\'","time":"1 hour ago","post":9},{"id":18,"author":"Confucius","content":"It does not matter how slowly you go as long as you do not stop.","time":"2 hours ago","post":9}]');
;// CONCATENATED MODULE: ./pages/api/comments/[id].ts



const comments = comments_namespaceObject;

function commentsForPost(postId) {
  return comments.filter(({
    post
  }) => post === postId);
}

function commentsHandler(req, res) {
  const postId = Number(req.query.id);

  switch (req.method) {
    case "GET":
      {
        return res.status(200).json(commentsForPost(postId));
      }

    case "POST":
      {
        comments.push({
          id: comments.length + 1,
          author: req.body.name,
          content: req.body.comment,
          post: postId,
          time: "Less than a minute ago"
        });
        (0,promises_namespaceObject.writeFile)(external_path_default().resolve(process.cwd(), "server/comments.json"), JSON.stringify(comments));
        return res.json(commentsForPost(postId));
      }

    default:
      return res.status(404);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2206));
module.exports = __webpack_exports__;

})();