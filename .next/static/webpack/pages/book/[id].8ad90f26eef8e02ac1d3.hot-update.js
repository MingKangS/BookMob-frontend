"use strict";
self["webpackHotUpdate_N_E"]("pages/book/[id]",{

/***/ "./pages/book/[id].tsx":
/*!*****************************!*\
  !*** ./pages/book/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_book_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/book.module.css */ "./styles/book.module.css");
/* harmony import */ var _styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BookImgDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BookImgDisplay */ "./components/BookImgDisplay.tsx");
/* harmony import */ var _components_bookConditionStars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/bookConditionStars */ "./components/bookConditionStars.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\book\\[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Book = function Book(_ref) {
  _s();

  var book = _ref.book;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); //console.log(book);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().appName),
        children: "BookMob"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_2__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookImgDisplay__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Title:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Author:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Date posted:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.date_posted
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Condition:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bookConditionStars__WEBPACK_IMPORTED_MODULE_4__.default, {
            condition: book.condition
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDescription),
            children: book.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Seller:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.seller_username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Price:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: ["RM ", book.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, _this);
};

_s(Book, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Book;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Book);

var _c;

$RefreshReg$(_c, "Book");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9vay9baWRdLjhhZDkwZjI2ZWVmOGUwMmFjMWQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUE0QkEsSUFBTU0sSUFBd0MsR0FBRyxTQUEzQ0EsSUFBMkMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5RCxNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCLENBRDhELENBRTlEOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFFRywwRUFBaEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUQseUVBQWhCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUssOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVNLE1BQWQ7QUFBc0IsY0FBTSxFQUFFTixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBT0M7QUFBSyxlQUFTLEVBQUVDLDhFQUFoQjtBQUFBLDhCQUNDLDhEQUFDLCtEQUFEO0FBQWdCLGNBQU0sRUFBRUEsZ0VBQVVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUssaUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxrQ0FDQztBQUFPLHFCQUFTLEVBQUVBLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUcscUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSxzQkFBc0NJLElBQUksQ0FBQ1U7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUlDO0FBQU8scUJBQVMsRUFBRWQsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBS0M7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLHNCQUFzQ0ksSUFBSSxDQUFDVztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxELGVBT0M7QUFBTyxxQkFBUyxFQUFFZixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQsZUFRQztBQUFHLHFCQUFTLEVBQUVBLDJFQUFkO0FBQUEsc0JBQXNDSSxJQUFJLENBQUNZO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkQsZUFVQztBQUFPLHFCQUFTLEVBQUVoQixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQsZUFXQyw4REFBQyxtRUFBRDtBQUFvQixxQkFBUyxFQUFFSSxJQUFJLENBQUNhO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBY0M7QUFBSyxtQkFBUyxFQUFFakIscUZBQWhCO0FBQUEsa0NBRUM7QUFBTyxxQkFBUyxFQUFFQSxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsZUFHQztBQUFHLHFCQUFTLEVBQUVBLGdGQUFkO0FBQUEsc0JBQTJDSSxJQUFJLENBQUNlO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQsZUFLQztBQUFPLHFCQUFTLEVBQUVuQixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQsZUFNQztBQUFHLHFCQUFTLEVBQUVBLDJFQUFkO0FBQUEsc0JBQXNDSSxJQUFJLENBQUNnQjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5ELGVBUUM7QUFBTyxxQkFBUyxFQUFFcEIsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJELGVBU0M7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLDhCQUF5Q0ksSUFBSSxDQUFDaUIsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRCxlQXVDQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEyQ0EsQ0EvQ0Q7O0dBQU1sQjtVQUNVTjs7O0tBRFZNOztBQWlETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib29rL1tpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgYm9va1N0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYm9vay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJvb2tJbWdEaXNwbGF5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0ltZ0Rpc3BsYXknO1xyXG5pbXBvcnQgeyBib29rLCBib29rTGlzdEFwaVJlcywgU3RhdGljUGF0aHNCb29rLCBCb29rUHJvcHMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzUmVzdWx0LCBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1BhdGhzUmVzdWx0IH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBCb29rQ29uZGl0aW9uU3RhcnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib29rQ29uZGl0aW9uU3RhcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGlzdC1ib29rc1wiKTtcclxuICBjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLmJvb2tfbGlzdC5tYXAoKGIpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZDogYi5pZC50b1N0cmluZygpIH1cclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPSBhc3luYyAoY29udGV4dCk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8Qm9va1Byb3BzPj4gPT4ge1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1ib29rL1wiICsgaWQpO1xyXG4gIGNvbnN0IGJvb2s6IGJvb2sgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9vazogYm9vayB9XHJcbiAgfTtcclxufTtcclxuIFxyXG5jb25zdCBCb29rOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxCb29rUHJvcHM+ID0gKHsgYm9vayB9KSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Ly9jb25zb2xlLmxvZyhib29rKTtcclxuXHRcclxuXHRyZXR1cm4gKCBcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMubmF2YmFyfT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMuYXBwTmFtZX0+Qm9va01vYjwvaDE+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0NvbnRhaW5lcn0+XHJcblx0XHRcdFx0PEJvb2tJbWdEaXNwbGF5IHN0eWxlcz17Ym9va1N0eWxlc30vPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmZsZXhSb3d9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNDb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PlRpdGxlOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay50aXRsZX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkF1dGhvcjo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+e2Jvb2suYXV0aG9yfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+RGF0ZSBwb3N0ZWQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmRhdGVfcG9zdGVkfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+Q29uZGl0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxCb29rQ29uZGl0aW9uU3RhcnMgY29uZGl0aW9uPXtib29rLmNvbmRpdGlvbn0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0NvbnRhaW5lcn0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGVzY3JpcHRpb259Pntib29rLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+U2VsbGVyOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5zZWxsZXJfdXNlcm5hbWV9PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5QcmljZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+Uk0ge2Jvb2sucHJpY2V9PC9wPlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiYm9va1N0eWxlcyIsIkJvb2tJbWdEaXNwbGF5IiwiQm9va0NvbmRpdGlvblN0YXJzIiwiQm9vayIsImJvb2siLCJyb3V0ZXIiLCJjb250YWluZXIiLCJuYXZiYXIiLCJhcHBOYW1lIiwiYm9va0NvbnRhaW5lciIsImZsZXhSb3ciLCJib29rRGV0YWlsc0NvbnRhaW5lciIsImJvb2tEZXRhaWxzTGFiZWwiLCJib29rRGV0YWlsIiwidGl0bGUiLCJhdXRob3IiLCJkYXRlX3Bvc3RlZCIsImNvbmRpdGlvbiIsImJvb2tEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2VsbGVyX3VzZXJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9