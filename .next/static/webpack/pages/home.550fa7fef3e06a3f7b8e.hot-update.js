"use strict";
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home(_ref) {
  _s();

  var books = _ref.books;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Title"),
      sortByAttribute = _useState3[0],
      setsortByAttribute = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getUser = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.checkAuthAndGetUser)().then(function (user) {
                  setUser(user);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUser() {
        return _ref2.apply(this, arguments);
      };
    }();

    getUser();
    console.log(books);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    books.book_list.sort(function (x, y) {
      return x[sortByAttribute] > y[sortByAttribute] ? 1 : 0;
    });
    console.log(books.book_list);
  }, [sortByAttribute]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_7__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sortByDiv),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sort by:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        name: "sort-by-attribute",
        id: "sort-by-attribute",
        onChange: function onChange(e) {
          return setsortByAttribute(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "seller",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "author",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "price",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: books.book_list.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_8__.default, {
          book: book
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_s(Home, "EKkGaBbyxfVDAou1JLtsb0i+Zrg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS41NTBmYTdmZWYzZTA2YTNmN2I4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBaUJBLElBQU1VLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ3ZCViwrQ0FBUSxFQURlO0FBQUEsTUFDeENXLElBRHdDO0FBQUEsTUFDbENDLE9BRGtDOztBQUFBLG1CQUVUWiwrQ0FBUSxDQUFTLEVBQVQsQ0FGQztBQUFBLE1BRXhDYSxXQUZ3QztBQUFBLE1BRTNCQyxjQUYyQjs7QUFBQSxtQkFHRGQsK0NBQVEsQ0FBUyxPQUFULENBSFA7QUFBQSxNQUd4Q2UsZUFId0M7QUFBQSxNQUd2QkMsa0JBSHVCOztBQUsvQyxNQUFNQyxNQUFNLEdBQUdkLHNEQUFTLEVBQXhCO0FBRUFGLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1pQixPQUFPO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkaEIsZ0JBQUFBLGlFQUFtQixHQUFHaUIsSUFBdEIsQ0FBMkIsVUFBQ1IsSUFBRCxFQUFVO0FBQ25DQyxrQkFBQUEsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFDRCxpQkFGRDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQTyxPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQWI7O0FBS0FBLElBQUFBLE9BQU87QUFDUEUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUFULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUyxJQUFBQSxLQUFLLENBQUNZLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQUMsYUFBT0QsQ0FBQyxDQUFDVCxlQUFELENBQUQsR0FBcUJVLENBQUMsQ0FBQ1YsZUFBRCxDQUF0QixHQUEwQyxDQUExQyxHQUE4QyxDQUFyRDtBQUF1RCxLQUF0RjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBSyxDQUFDWSxTQUFsQjtBQUNELEdBSFEsRUFHTixDQUFDUCxlQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVSLHlFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQVcsY0FBTSxFQUFFQSxrRUFBbkI7QUFBaUMsc0JBQWMsRUFBRU87QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVHLE1BQWQ7QUFBc0IsY0FBTSxFQUFFVixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSyxlQUFTLEVBQUVGLDJFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLFlBQUksRUFBQyxtQkFBYjtBQUFpQyxVQUFFLEVBQUMsbUJBQXBDO0FBQXdELGdCQUFRLEVBQUUsa0JBQUN1QixDQUFEO0FBQUEsaUJBQU9aLGtCQUFrQixDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBLFNBQWxFO0FBQUEsZ0NBQ0U7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQVEsZUFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFRLGVBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQWVFO0FBQUEsZ0JBQ0NwQixLQUFLLENBQUNZLFNBQU4sQ0FBZ0JTLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNqQiw4REFBQyx5REFBRDtBQUFVLGNBQUksRUFBRUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEaUI7QUFBQSxPQUFwQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTdDRDs7R0FBTXZCO1VBS1dOOzs7S0FMWE07O0FBK0NOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGJvb2sgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlVXBsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyJztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIsIHJlcXVlc3RPcHRpb25zKTtcclxuICBjb25zdCBkYXRhOiBib29rW10gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuICB9XHJcblxyXG59XHJcbiBcclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9ICh7IGJvb2tzIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxTdHJpbmcgfCBib29sZWFuPigpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbc29ydEJ5QXR0cmlidXRlLCBzZXRzb3J0QnlBdHRyaWJ1dGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlRpdGxlXCIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNoZWNrQXV0aEFuZEdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhib29rcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYm9va3MuYm9va19saXN0LnNvcnQoKHgseSkgPT4ge3JldHVybiB4W3NvcnRCeUF0dHJpYnV0ZV0gPiB5W3NvcnRCeUF0dHJpYnV0ZV0gPyAxIDogMH0pO1xyXG4gICAgY29uc29sZS5sb2coYm9va3MuYm9va19saXN0KTtcclxuICB9LCBbc29ydEJ5QXR0cmlidXRlXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QnlEaXZ9PiBcclxuICAgICAgICA8bGFiZWw+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnQtYnktYXR0cmlidXRlXCIgaWQ9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0c29ydEJ5QXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGl0bGVcIj5UaXRsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGxlclwiPlNlbGxlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1dGhvclwiPkF1dGhvcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlXCI+UHJpY2U8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHtib29rcy5ib29rX2xpc3QubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJvb2tDYXJkIGJvb2s9e2Jvb2t9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2hlY2tBdXRoQW5kR2V0VXNlciIsInVzZVJvdXRlciIsIlNlYXJjaEJhciIsInN0eWxlcyIsIk1lbnUiLCJuYXZiYXJTdHlsZXMiLCJCb29rQ2FyZCIsIkhvbWUiLCJib29rcyIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNvcnRCeUF0dHJpYnV0ZSIsInNldHNvcnRCeUF0dHJpYnV0ZSIsInJvdXRlciIsImdldFVzZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImJvb2tfbGlzdCIsInNvcnQiLCJ4IiwieSIsIm5hdmJhciIsInNvcnRCeURpdiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImJvb2siLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=