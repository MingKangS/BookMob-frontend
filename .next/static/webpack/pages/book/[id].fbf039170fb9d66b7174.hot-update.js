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
        className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
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
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 6
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
              children: "Date posted:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
              children: book.date_posted
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 6
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
              children: "Condition:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bookConditionStars__WEBPACK_IMPORTED_MODULE_4__.default, {
              condition: book.condition
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
              children: "Description:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
              children: book.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 6
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
              children: "Seller:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
              children: book.seller_username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 6
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
              children: ["RM ", book.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 5
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
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9vay9baWRdLmZiZjAzOTE3MGZiOWQ2NmI3MTc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUE0QkEsSUFBTU0sSUFBd0MsR0FBRyxTQUEzQ0EsSUFBMkMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5RCxNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCLENBRDhELENBRTlEOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFFRywwRUFBaEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUQseUVBQWhCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUssOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVNLE1BQWQ7QUFBc0IsY0FBTSxFQUFFTixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBT0M7QUFBSyxlQUFTLEVBQUVDLDhFQUFoQjtBQUFBLDhCQUNDLDhEQUFDLCtEQUFEO0FBQWdCLGNBQU0sRUFBRUEsZ0VBQVVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU0saUJBQVMsRUFBRUEscUZBQWpCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxrQ0FDQztBQUFPLHFCQUFTLEVBQUVBLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUcscUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSxzQkFBc0NJLElBQUksQ0FBQ1M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdBO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFFYixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFHLHVCQUFTLEVBQUVBLDJFQUFkO0FBQUEsd0JBQXNDSSxJQUFJLENBQUNVO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBT0E7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUVkLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSx3QkFBc0NJLElBQUksQ0FBQ1c7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEEsZUFXQTtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBRWYsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUMsOERBQUMsbUVBQUQ7QUFBb0IsdUJBQVMsRUFBRUksSUFBSSxDQUFDWTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFpQkE7QUFBSyxtQkFBUyxFQUFFaEIscUZBQWhCO0FBQUEsa0NBQ0M7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUVBLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSx3QkFBc0NJLElBQUksQ0FBQ2E7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFLQztBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBRWpCLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSx3QkFBc0NJLElBQUksQ0FBQ2M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQsZUFTQztBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBRWxCLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSxnQ0FBeUNJLElBQUksQ0FBQ2UsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBNENDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdEQSxDQXBERDs7R0FBTWhCO1VBQ1VOOzs7S0FEVk07O0FBc0ROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jvb2svW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBib29rU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9ib29rLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQm9va0ltZ0Rpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rSW1nRGlzcGxheSc7XHJcbmltcG9ydCB7IGJvb2ssIGJvb2tMaXN0QXBpUmVzLCBTdGF0aWNQYXRoc0Jvb2ssIEJvb2tQcm9wcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHNSZXN1bHQsIEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUGF0aHNSZXN1bHQgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEJvb2tDb25kaXRpb25TdGFycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2tDb25kaXRpb25TdGFycyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIpO1xyXG4gIGNvbnN0IGRhdGE6IGJvb2tMaXN0QXBpUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBwYXRocyA9IGRhdGEuYm9va19saXN0Lm1hcCgoYikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IGlkOiBiLmlkLnRvU3RyaW5nKCkgfVxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM9IGFzeW5jIChjb250ZXh0KTogUHJvbWlzZTxHZXRTdGF0aWNQcm9wc1Jlc3VsdDxCb29rUHJvcHM+PiA9PiB7XHJcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LWJvb2svXCIgKyBpZCk7XHJcbiAgY29uc3QgYm9vazogYm9vayA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rOiBib29rIH1cclxuICB9O1xyXG59O1xyXG4gXHJcbmNvbnN0IEJvb2s6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEJvb2tQcm9wcz4gPSAoeyBib29rIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHQvL2NvbnNvbGUubG9nKGJvb2spO1xyXG5cdFxyXG5cdHJldHVybiAoIFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5hcHBOYW1lfT5Cb29rTW9iPC9oMT5cclxuICAgICAgICA8TWVudSByb3V0ZXI9e3JvdXRlcn0gc3R5bGVzPXtuYXZiYXJTdHlsZXN9Lz5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8Qm9va0ltZ0Rpc3BsYXkgc3R5bGVzPXtib29rU3R5bGVzfS8+XHJcblx0XHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5UaXRsZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+e2Jvb2sudGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5BdXRob3I6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmF1dGhvcn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+RGF0ZSBwb3N0ZWQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmRhdGVfcG9zdGVkfTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5Db25kaXRpb246PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PEJvb2tDb25kaXRpb25TdGFycyBjb25kaXRpb249e2Jvb2suY29uZGl0aW9ufS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0NvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+U2VsbGVyOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5zZWxsZXJfdXNlcm5hbWV9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PlByaWNlOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT5STSB7Ym9vay5wcmljZX08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTWVudSIsIm5hdmJhclN0eWxlcyIsImJvb2tTdHlsZXMiLCJCb29rSW1nRGlzcGxheSIsIkJvb2tDb25kaXRpb25TdGFycyIsIkJvb2siLCJib29rIiwicm91dGVyIiwiY29udGFpbmVyIiwibmF2YmFyIiwiYXBwTmFtZSIsImJvb2tDb250YWluZXIiLCJib29rRGV0YWlsc0NvbnRhaW5lciIsImJvb2tEZXRhaWxzTGFiZWwiLCJib29rRGV0YWlsIiwidGl0bGUiLCJhdXRob3IiLCJkYXRlX3Bvc3RlZCIsImNvbmRpdGlvbiIsImRlc2NyaXB0aW9uIiwic2VsbGVyX3VzZXJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9