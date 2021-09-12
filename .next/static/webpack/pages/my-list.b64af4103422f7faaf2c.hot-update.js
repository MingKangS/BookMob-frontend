"use strict";
self["webpackHotUpdate_N_E"]("pages/my-list",{

/***/ "./pages/my-list/index.tsx":
/*!*********************************!*\
  !*** ./pages/my-list/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BookListCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BookListCard */ "./components/BookListCard.tsx");
/* harmony import */ var _styles_myList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/myList.module.css */ "./styles/myList.module.css");
/* harmony import */ var _styles_myList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\my-list\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var MyList = function MyList(_ref) {
  _s();

  var books = _ref.books;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(books.book_list),
      bookList = _useState2[0],
      setBookList = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookListCard__WEBPACK_IMPORTED_MODULE_5__.default, {
          book: book,
          styles: (_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_7___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }, _this);
};

_s(MyList, "9m846Nx0rguOlAwrm3h/+BGrJdw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = MyList;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MyList);

var _c;

$RefreshReg$(_c, "MyList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5iNjRhZjQxMDM0MjJmN2ZhYWYyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOztBQWtCQSxJQUFNUyxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNiVCwrQ0FBUSxDQUFTLEVBQVQsQ0FESztBQUFBLE1BQzVDVSxXQUQ0QztBQUFBLE1BQy9CQyxjQUQrQjs7QUFBQSxtQkFFcEJYLCtDQUFRLENBQVNTLEtBQUssQ0FBQ0csU0FBZixDQUZZO0FBQUEsTUFFN0NDLFFBRjZDO0FBQUEsTUFFbkNDLFdBRm1DOztBQUdwRCxNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVJLHlFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQVcsY0FBTSxFQUFFQSxrRUFBbkI7QUFBaUMsc0JBQWMsRUFBRU07QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVJLE1BQWQ7QUFBc0IsY0FBTSxFQUFFVixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBT0k7QUFBQSxnQkFDRFEsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2IsOERBQUMsNkRBQUQ7QUFBYyxjQUFJLEVBQUVELElBQXBCO0FBQTBCLGdCQUFNLEVBQUVYLGtFQUFZQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBYjtBQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQWFDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUJBLENBMUJEOztHQUFNQztVQUdVTjs7O0tBSFZNOztBQTRCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1saXN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rLCBib29rTGlzdEFwaVJlcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgU3RhdGljUHJvcHNCb29rIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ob21lJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHNSZXN1bHQsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBCb29rTGlzdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdENhcmQnO1xyXG5pbXBvcnQgbXlMaXN0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9teUxpc3QubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8TXlMaXN0UHJvcHM+PiA9PiB7XHJcbiAgY29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXNlbGxlci1ib29rLWxpc3QvXCIgKyB0b2tlbik7XHJcbiAgY29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKFwiTGlzdCBvZiBib29rczpcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuICB9O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIE15TGlzdFByb3BzIHtcclxuXHRib29rczoge1xyXG4gICAgYm9va19saXN0OiBib29rW11cclxuICB9XHJcbn1cclxuIFxyXG5jb25zdCBNeUxpc3Q6IFJlYWN0LkZDPE15TGlzdFByb3BzPiA9ICh7IGJvb2tzIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3QgW2Jvb2tMaXN0LCBzZXRCb29rTGlzdF0gPSB1c2VTdGF0ZTxib29rW10+KGJvb2tzLmJvb2tfbGlzdCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoIFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcbiAgICAgIDxkaXY+XHJcblx0XHRcdFx0e2Jvb2tMaXN0Lm1hcCgoYm9vaywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxCb29rTGlzdENhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtteUxpc3RTdHlsZXN9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiQm9va0xpc3RDYXJkIiwibXlMaXN0U3R5bGVzIiwiTXlMaXN0IiwiYm9va3MiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiYm9va19saXN0IiwiYm9va0xpc3QiLCJzZXRCb29rTGlzdCIsInJvdXRlciIsIm5hdmJhciIsIm1hcCIsImJvb2siLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=