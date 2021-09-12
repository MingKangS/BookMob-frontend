"use strict";
self["webpackHotUpdate_N_E"]("pages/my-list",{

/***/ "./components/BookListCard.tsx":
/*!*************************************!*\
  !*** ./components/BookListCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\BookListCard.tsx",
    _this = undefined;




var BookListCard = function BookListCard(_ref) {
  var styles = _ref.styles,
      book = _ref.book;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/book/" + book.id,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: styles.image,
        src: "https://cdn.shopify.com/s/files/1/0511/7575/1837/files/SELF_HELP_e85aa831-a7bb-4109-ac24-3b970aa1bc82_450x.jpg?v=1627866670"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: book.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: book.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: book.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = BookListCard;
/* harmony default export */ __webpack_exports__["default"] = (BookListCard);

var _c;

$RefreshReg$(_c, "BookListCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5lNmQyNDMwNzI5ZmFjYmI5NWI2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUUsWUFBcUMsR0FBRyxTQUF4Q0EsWUFBd0MsT0FBcUI7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2xFLHNCQUNDLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFLFdBQVNBLElBQUksQ0FBQ0MsRUFBMUI7QUFBQSwyQkFDQztBQUFBLDhCQUNDO0FBQ0MsaUJBQVMsRUFBRUYsTUFBTSxDQUFDRyxLQURuQjtBQUVDLFdBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUtDO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFBLG9CQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQUdDO0FBQUEsb0JBQUlKLElBQUksQ0FBQ0s7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBVUM7QUFBQSwrQkFDQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQW5CRDs7S0FBTVA7QUFxQk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGlzdENhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCB7IEJvb2tDYXJkUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbiBcclxuY29uc3QgQm9va0xpc3RDYXJkOiBSZWFjdC5GQzxCb29rQ2FyZFByb3BzPiA9ICh7IHN0eWxlcywgYm9va30pID0+IHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDxMaW5rIGhyZWY9e1wiL2Jvb2svXCIrYm9vay5pZH0+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGltZyBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBcclxuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTExLzc1NzUvMTgzNy9maWxlcy9TRUxGX0hFTFBfZTg1YWE4MzEtYTdiYi00MTA5LWFjMjQtM2I5NzBhYTFiYzgyXzQ1MHguanBnP3Y9MTYyNzg2NjY3MFwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgyPntib29rLnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHQ8aDM+e2Jvb2suYXV0aG9yfTwvaDM+XHJcblx0XHRcdFx0XHQ8cD57Ym9vay5wcmljZX08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxEZWxldGVJY29uLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xpbms+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdENhcmQ7Il0sIm5hbWVzIjpbIkxpbmsiLCJEZWxldGVJY29uIiwiQm9va0xpc3RDYXJkIiwic3R5bGVzIiwiYm9vayIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImF1dGhvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==