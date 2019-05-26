webpackHotUpdate("main",{

/***/ "./src/components/profilecard/index.js":
/*!*********************************************!*\
  !*** ./src/components/profilecard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/profilecard/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/papatmayuri/workspace/react-admin-theme/react-admin-dashboard-dark/src/components/profilecard/index.js";


class ProfileCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user-profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.user_profile.image,
      alt: "",
      className: "user-profile-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.user_profile.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user-role clr_darkgray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.user_profile.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user-email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.user_profile.email));
  }

}

/***/ })

})
//# sourceMappingURL=main.d6e02fd8627d33307eee.hot-update.js.map