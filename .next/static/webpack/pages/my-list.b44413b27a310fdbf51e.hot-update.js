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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookListCard__WEBPACK_IMPORTED_MODULE_5__.default, {
          book: book,
          styles: (_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_7___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, _this);
};

_s(MyList, "LekF/JAs0wJW7DCi96kfbSbnYNQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5iNDQ0MTNiMjdhMzEwZmRiZjUxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOztBQWtCQSxJQUFNUSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNiUiwrQ0FBUSxDQUFTLEVBQVQsQ0FESztBQUFBLE1BQzVDUyxXQUQ0QztBQUFBLE1BQy9CQyxjQUQrQjs7QUFBQSxtQkFFcEJWLCtDQUFRLENBQVNRLEtBQUssQ0FBQ0csU0FBZixDQUZZO0FBQUEsTUFFN0NDLFFBRjZDO0FBQUEsTUFFbkNDLFdBRm1DOztBQUdwRCxNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFRyx5RUFBaEI7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFXLGNBQU0sRUFBRUEsa0VBQW5CO0FBQWlDLHNCQUFjLEVBQUVNO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQU0sY0FBTSxFQUFFSSxNQUFkO0FBQXNCLGNBQU0sRUFBRVYsa0VBQVlBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JO0FBQUEsZ0JBQ0RRLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNiLDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFRCxJQUFwQjtBQUEwQixnQkFBTSxFQUFFWCxrRUFBWUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWI7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFhQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQXhCRDs7R0FBTUM7VUFHVU47OztLQUhWTTs7QUEwQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXktbGlzdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vaywgYm9va0xpc3RBcGlSZXMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3BzQm9vayB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaG9tZSc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzUmVzdWx0LCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQm9va0xpc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0xpc3RDYXJkJztcclxuaW1wb3J0IG15TGlzdFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbXlMaXN0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpOiBQcm9taXNlPEdldFN0YXRpY1Byb3BzUmVzdWx0PE15TGlzdFByb3BzPj4gPT4ge1xyXG4gIGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1zZWxsZXItYm9vay1saXN0L1wiICsgdG9rZW4pO1xyXG4gIGNvbnN0IGRhdGE6IGJvb2tMaXN0QXBpUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhcIkxpc3Qgb2YgYm9va3M6XCIsIGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfTtcclxufTtcclxuXHJcbmludGVyZmFjZSBNeUxpc3RQcm9wcyB7XHJcblx0Ym9va3M6IHtcclxuICAgIGJvb2tfbGlzdDogYm9va1tdXHJcbiAgfVxyXG59XHJcbiBcclxuY29uc3QgTXlMaXN0OiBSZWFjdC5GQzxNeUxpc3RQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cdGNvbnN0IFtib29rTGlzdCwgc2V0Qm9va0xpc3RdID0gdXNlU3RhdGU8Ym9va1tdPihib29rcy5ib29rX2xpc3QpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRcclxuXHJcblx0cmV0dXJuICggXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuICAgICAgPGRpdj5cclxuXHRcdFx0XHR7Ym9va0xpc3QubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEJvb2tMaXN0Q2FyZCBib29rPXtib29rfSBzdHlsZXM9e215TGlzdFN0eWxlc30vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHQgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE15TGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNlYXJjaEJhciIsIk1lbnUiLCJuYXZiYXJTdHlsZXMiLCJCb29rTGlzdENhcmQiLCJteUxpc3RTdHlsZXMiLCJNeUxpc3QiLCJib29rcyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJib29rX2xpc3QiLCJib29rTGlzdCIsInNldEJvb2tMaXN0Iiwicm91dGVyIiwibmF2YmFyIiwibWFwIiwiYm9vayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==