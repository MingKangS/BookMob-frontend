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
        className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().flex),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9vay9baWRdLmY0ZGMxNmZhOTNmODU4N2JiOTQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUE0QkEsSUFBTU0sSUFBd0MsR0FBRyxTQUEzQ0EsSUFBMkMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5RCxNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCLENBRDhELENBRTlEOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFFRywwRUFBaEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUQseUVBQWhCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUssOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVNLE1BQWQ7QUFBc0IsY0FBTSxFQUFFTixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBT0M7QUFBSyxlQUFTLEVBQUVDLDhFQUFoQjtBQUFBLDhCQUNDLDhEQUFDLCtEQUFEO0FBQWdCLGNBQU0sRUFBRUEsZ0VBQVVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxrQ0FDQztBQUFPLHFCQUFTLEVBQUVBLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUcscUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSxzQkFBc0NJLElBQUksQ0FBQ1U7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdBO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFFZCxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFHLHVCQUFTLEVBQUVBLDJFQUFkO0FBQUEsd0JBQXNDSSxJQUFJLENBQUNXO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBT0E7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUVmLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSx3QkFBc0NJLElBQUksQ0FBQ1k7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEEsZUFXQTtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBRWhCLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDLDhEQUFDLG1FQUFEO0FBQW9CLHVCQUFTLEVBQUVJLElBQUksQ0FBQ2E7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBaUJBO0FBQUssbUJBQVMsRUFBRWpCLHFGQUFoQjtBQUFBLGtDQUNDO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFFQSxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFHLHVCQUFTLEVBQUVBLDJFQUFkO0FBQUEsd0JBQXNDSSxJQUFJLENBQUNjO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBS0M7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUVsQixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFHLHVCQUFTLEVBQUVBLDJFQUFkO0FBQUEsd0JBQXNDSSxJQUFJLENBQUNlO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxELGVBU0M7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUVuQixpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFHLHVCQUFTLEVBQUVBLDJFQUFkO0FBQUEsZ0NBQXlDSSxJQUFJLENBQUNnQixLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUE0Q0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZ0RBLENBcEREOztHQUFNakI7VUFDVU47OztLQURWTTs7QUFzRE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9vay9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGJvb2tTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Jvb2subW9kdWxlLmNzcyc7XHJcbmltcG9ydCBCb29rSW1nRGlzcGxheSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jvb2tJbWdEaXNwbGF5JztcclxuaW1wb3J0IHsgYm9vaywgYm9va0xpc3RBcGlSZXMsIFN0YXRpY1BhdGhzQm9vaywgQm9va1Byb3BzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCwgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQYXRoc1Jlc3VsdCB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQm9va0NvbmRpdGlvblN0YXJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9va0NvbmRpdGlvblN0YXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xpc3QtYm9va3NcIik7XHJcbiAgY29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5ib29rX2xpc3QubWFwKChiKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGIuaWQudG9TdHJpbmcoKSB9XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcz0gYXN5bmMgKGNvbnRleHQpOiBQcm9taXNlPEdldFN0YXRpY1Byb3BzUmVzdWx0PEJvb2tQcm9wcz4+ID0+IHtcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQtYm9vay9cIiArIGlkKTtcclxuICBjb25zdCBib29rOiBib29rID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJvb2s6IGJvb2sgfVxyXG4gIH07XHJcbn07XHJcbiBcclxuY29uc3QgQm9vazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Qm9va1Byb3BzPiA9ICh7IGJvb2sgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdC8vY29uc29sZS5sb2coYm9vayk7XHJcblx0XHJcblx0cmV0dXJuICggXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLmFwcE5hbWV9PkJvb2tNb2I8L2gxPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxCb29rSW1nRGlzcGxheSBzdHlsZXM9e2Jvb2tTdHlsZXN9Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5mbGV4fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5UaXRsZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+e2Jvb2sudGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5BdXRob3I6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmF1dGhvcn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+RGF0ZSBwb3N0ZWQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmRhdGVfcG9zdGVkfTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5Db25kaXRpb246PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PEJvb2tDb25kaXRpb25TdGFycyBjb25kaXRpb249e2Jvb2suY29uZGl0aW9ufS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0NvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+U2VsbGVyOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5zZWxsZXJfdXNlcm5hbWV9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PlByaWNlOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT5STSB7Ym9vay5wcmljZX08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTWVudSIsIm5hdmJhclN0eWxlcyIsImJvb2tTdHlsZXMiLCJCb29rSW1nRGlzcGxheSIsIkJvb2tDb25kaXRpb25TdGFycyIsIkJvb2siLCJib29rIiwicm91dGVyIiwiY29udGFpbmVyIiwibmF2YmFyIiwiYXBwTmFtZSIsImJvb2tDb250YWluZXIiLCJmbGV4IiwiYm9va0RldGFpbHNDb250YWluZXIiLCJib29rRGV0YWlsc0xhYmVsIiwiYm9va0RldGFpbCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZV9wb3N0ZWQiLCJjb25kaXRpb24iLCJkZXNjcmlwdGlvbiIsInNlbGxlcl91c2VybmFtZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==