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
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\my-list\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var MyList = function MyList() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookCard, {
          book: book,
          styles: styles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, _this);
};

_s(MyList, "GF0HY0Ob24gBoqx57cKGbKc+gOA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5lZTg2MGVkNmZhYTJmZDU2Mzk4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7O0FBd0JBLElBQU1NLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLEdBQU07QUFBQTs7QUFBQSxrQkFDSkwsK0NBQVEsQ0FBUyxFQUFULENBREo7QUFBQSxNQUNuQ00sV0FEbUM7QUFBQSxNQUN0QkMsY0FEc0I7O0FBRTNDLE1BQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVHLHlFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQVcsY0FBTSxFQUFFQSxrRUFBbkI7QUFBaUMsc0JBQWMsRUFBRUc7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVDLE1BQWQ7QUFBc0IsY0FBTSxFQUFFSixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBT0k7QUFBQSxnQkFDRE0sUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2IsOERBQUMsUUFBRDtBQUFVLGNBQUksRUFBRUQsSUFBaEI7QUFBc0IsZ0JBQU0sRUFBRUU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWI7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFhQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQXJCRDs7R0FBTVQ7VUFFVUo7OztLQUZWSTs7QUF1Qk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXktbGlzdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vaywgYm9va0xpc3RBcGlSZXMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3BzQm9vayB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaG9tZSc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzUmVzdWx0LCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpOiBQcm9taXNlPEdldFN0YXRpY1Byb3BzUmVzdWx0PEhvbWVQcm9wcz4+ID0+IHtcclxuICBjb25zdCB0b2tlbjogU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQtc2VsbGVyLWJvb2stbGlzdC9cIik7XHJcbiAgY29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKFwiTGlzdCBvZiBib29rczpcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTXlMaXN0UHJvcHMge1xyXG5cdFxyXG59XHJcbiBcclxuY29uc3QgTXlMaXN0OiBSZWFjdC5GQzxNeUxpc3RQcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRyZXR1cm4gKCBcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8U2VhcmNoQmFyIHN0eWxlcz17bmF2YmFyU3R5bGVzfSBzZXRTZWFyY2hWYWx1ZT17c2V0U2VhcmNoVmFsdWV9Lz5cclxuICAgICAgICA8TWVudSByb3V0ZXI9e3JvdXRlcn0gc3R5bGVzPXtuYXZiYXJTdHlsZXN9Lz5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblx0XHRcdFxyXG4gICAgICA8ZGl2PlxyXG5cdFx0XHRcdHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8Qm9va0NhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtzdHlsZXN9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiTXlMaXN0Iiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInJvdXRlciIsIm5hdmJhciIsImJvb2tMaXN0IiwibWFwIiwiYm9vayIsImluZGV4Iiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==