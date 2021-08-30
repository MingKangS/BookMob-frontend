"use strict";
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/BookCard.tsx":
/*!*********************************!*\
  !*** ./components/BookCard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\BookCard.tsx",
    _this = undefined;



var BookCard = function BookCard(_ref) {
  var styles = _ref.styles,
      book = _ref.book;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/sign-up",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.bookCard,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: styles.seller,
        children: book.seller_username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: styles.image,
          src: "https://bookmob.s3-ap-southeast-1.amazonaws.com/Book images/iJjQo6rCi4EBktzGTSEMHn.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: styles.title,
        children: [" ", book.title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: styles.author,
        children: [" ", book.author, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.priceDiv,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: styles.price,
          children: [" RM ", book.price, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = BookCard;
/* harmony default export */ __webpack_exports__["default"] = (BookCard);

var _c;

$RefreshReg$(_c, "BookCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5jNTlkNzk3MzhmNWIyMTA0ZGRlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUMsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBc0I7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlELHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsTUFBTSxDQUFDRSxRQUF2QjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBRUYsTUFBTSxDQUFDRyxNQUFyQjtBQUFBLGtCQUErQkYsSUFBSSxDQUFDRztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBRUosTUFBTSxDQUFDSyxLQURwQjtBQUVFLGFBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFTRTtBQUFJLGlCQUFTLEVBQUVMLE1BQU0sQ0FBQ00sS0FBdEI7QUFBQSx3QkFBZ0NMLElBQUksQ0FBQ0ssS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFVRTtBQUFHLGlCQUFTLEVBQUVOLE1BQU0sQ0FBQ08sTUFBckI7QUFBQSx3QkFBZ0NOLElBQUksQ0FBQ00sTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUFLLGlCQUFTLEVBQUVQLE1BQU0sQ0FBQ1EsUUFBdkI7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUVSLE1BQU0sQ0FBQ1MsS0FBdEI7QUFBQSw2QkFBbUNSLElBQUksQ0FBQ1EsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXRCRDs7S0FBTVY7QUF3Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va0NhcmRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQm9va0NhcmQ6IFJlYWN0LkZDPEJvb2tDYXJkUHJvcHM+ID0gKHsgc3R5bGVzLCBib29rIH0pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tDYXJkfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWxsZXJ9PnsgYm9vay5zZWxsZXJfdXNlcm5hbWUgfTwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IFxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Jvb2ttb2IuczMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9Cb29rIGltYWdlcy9pSmpRbzZyQ2k0RUJrdHpHVFNFTUhuLnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IHsgYm9vay50aXRsZSB9IDwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT4geyBib29rLmF1dGhvciB9IDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlRGl2fT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+IFJNIHsgYm9vay5wcmljZSB9IDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICAgXHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCb29rQ2FyZDsiXSwibmFtZXMiOlsiTGluayIsIkJvb2tDYXJkIiwic3R5bGVzIiwiYm9vayIsImJvb2tDYXJkIiwic2VsbGVyIiwic2VsbGVyX3VzZXJuYW1lIiwiaW1hZ2UiLCJ0aXRsZSIsImF1dGhvciIsInByaWNlRGl2IiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9