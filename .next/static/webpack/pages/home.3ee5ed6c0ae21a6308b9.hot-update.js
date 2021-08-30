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
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.tsx");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Home = function Home(_ref) {
  _s();

  var books = _ref.books;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Title"),
      sortAttribute = _useState3[0],
      setSortAttribute = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(books.book_list),
      bookList = _useState4[0],
      setBookList = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var getUser = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.checkAuthAndGetUser)().then(function (user) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBookList(sortByAttribute((0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(bookList)));
  }, [sortAttribute]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var newBookList = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(books.book_list).filter(function (book) {
      return book.title.toLowerCase().includes(searchValue.toLowerCase()) || book.seller_username.toLowerCase().includes(searchValue.toLowerCase());
    });

    setBookList(sortByAttribute((0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newBookList)));
  }, [searchValue]);

  var sortByAttribute = function sortByAttribute(a) {
    return a.sort(function (x, y) {
      return x[sortAttribute] > y[sortAttribute] ? 1 : -1;
    });
  };

  var handleSelect = function handleSelect(event) {
    setSortAttribute(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().homeContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_7__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_8__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sortByDiv),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__.default, {
        variant: "outlined",
        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().formControl),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          id: "select-label",
          className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().selectorLabel),
          children: "Sort by:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__.default, {
          defaultValue: "title",
          labelId: "select-label",
          name: "sort-by-attribute",
          id: "sort-by-attribute",
          value: sortAttribute,
          onChange: handleSelect,
          label: "Age",
          className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sortBySelector),
          variant: "filled",
          displayEmpty: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
            value: "title",
            children: "Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
            value: "seller_username",
            children: "Seller"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
            value: "author",
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
            value: "price",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().bookCardContainer),
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_9__.default, {
          book: book,
          styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(Home, "CZCqK26uWZiWt7XbnXj/3qgfYjg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4zZWU1ZWQ2YzBhZTIxYTYzMDhiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTs7QUFXQSxJQUFNYSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUN2QmIsK0NBQVEsRUFEZTtBQUFBLE1BQ3hDYyxJQUR3QztBQUFBLE1BQ2xDQyxPQURrQzs7QUFBQSxtQkFFVGYsK0NBQVEsQ0FBUyxFQUFULENBRkM7QUFBQSxNQUV4Q2dCLFdBRndDO0FBQUEsTUFFM0JDLGNBRjJCOztBQUFBLG1CQUdMakIsK0NBQVEsQ0FBUyxPQUFULENBSEg7QUFBQSxNQUd4Q2tCLGFBSHdDO0FBQUEsTUFHekJDLGdCQUh5Qjs7QUFBQSxtQkFJZm5CLCtDQUFRLENBQVNhLEtBQUssQ0FBQ08sU0FBZixDQUpPO0FBQUEsTUFJeENDLFFBSndDO0FBQUEsTUFJOUJDLFdBSjhCOztBQU0vQyxNQUFNQyxNQUFNLEdBQUdwQixzREFBUyxFQUF4QjtBQUVBRixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNdUIsT0FBTztBQUFBLDhTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZHRCLGdCQUFBQSxpRUFBbUIsR0FBR3VCLElBQXRCLENBQTJCLFVBQUNYLElBQUQsRUFBVTtBQUNuQ0Msa0JBQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsaUJBRkQ7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBUFUsT0FBTztBQUFBO0FBQUE7QUFBQSxPQUFiOztBQUtBQSxJQUFBQSxPQUFPO0FBQ1BFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZ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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBZUUsOERBQUMsZ0VBQUQ7QUFBVSxpQkFBSyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUE4QkU7QUFBSyxlQUFTLEVBQUVBLG1GQUFoQjtBQUFBLGdCQUNDZ0IsUUFBUSxDQUFDOEIsR0FBVCxDQUFhLFVBQUNwQixJQUFELEVBQU9xQixLQUFQO0FBQUEsNEJBQ1YsOERBQUMseURBQUQ7QUFBVSxjQUFJLEVBQUVyQixJQUFoQjtBQUFzQixnQkFBTSxFQUFFMUIsaUVBQU1BO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQTlFRDs7R0FBTU87VUFNV1Q7OztLQU5YUzs7QUFnRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vayB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXInO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rQ2FyZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIpO1xyXG4gIGNvbnN0IGRhdGE6IGJvb2tbXSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9va3M6IGRhdGEgfVxyXG4gIH07XHJcbn1cclxuIFxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHsgYm9va3MgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFN0cmluZyB8IGJvb2xlYW4+KCk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtzb3J0QXR0cmlidXRlLCBzZXRTb3J0QXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJUaXRsZVwiKTtcclxuICBjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oYm9va3MuYm9va19saXN0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coYm9va3MpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvb2tMaXN0KHNvcnRCeUF0dHJpYnV0ZShbLi4uYm9va0xpc3RdKSk7XHJcbiAgfSwgW3NvcnRBdHRyaWJ1dGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Jvb2tMaXN0ID0gWy4uLmJvb2tzLmJvb2tfbGlzdF0uZmlsdGVyKChib29rKSA9PiB7XHJcbiAgICAgIHJldHVybiBib29rLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgXHJcbiAgICAgICAgYm9vay5zZWxsZXJfdXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgfSk7XHJcbiAgICBzZXRCb29rTGlzdChzb3J0QnlBdHRyaWJ1dGUoWy4uLm5ld0Jvb2tMaXN0XSkpO1xyXG4gIH0sIFtzZWFyY2hWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBzb3J0QnlBdHRyaWJ1dGUgPSAoYTogYm9va1tdKTogYm9va1tdID0+IHtcclxuICAgIHJldHVybiBhLnNvcnQoKHgseSkgPT4ge1xyXG4gICAgICByZXR1cm4geFtzb3J0QXR0cmlidXRlXSA+IHlbc29ydEF0dHJpYnV0ZV0gPyAxIDogLTE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U29ydEF0dHJpYnV0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QnlEaXZ9PiBcclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGlkPVwic2VsZWN0LWxhYmVsXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0b3JMYWJlbH0+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJzZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwic29ydC1ieS1hdHRyaWJ1dGVcIiBcclxuICAgICAgICAgICAgaWQ9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzb3J0QXR0cmlidXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFnZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNvcnRCeVNlbGVjdG9yfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJzZWxsZXJfdXNlcm5hbWVcIj5TZWxsZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJhdXRob3JcIj5BdXRob3I8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJwcmljZVwiPlByaWNlPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQ2FyZENvbnRhaW5lcn0+XHJcbiAgICAgIHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm9va0NhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtzdHlsZXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGVja0F1dGhBbmRHZXRVc2VyIiwidXNlUm91dGVyIiwiU2VhcmNoQmFyIiwic3R5bGVzIiwiTWVudSIsIm5hdmJhclN0eWxlcyIsIkJvb2tDYXJkIiwiTWVudUl0ZW0iLCJGb3JtQ29udHJvbCIsIlNlbGVjdCIsIkhvbWUiLCJib29rcyIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNvcnRBdHRyaWJ1dGUiLCJzZXRTb3J0QXR0cmlidXRlIiwiYm9va19saXN0IiwiYm9va0xpc3QiLCJzZXRCb29rTGlzdCIsInJvdXRlciIsImdldFVzZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInNvcnRCeUF0dHJpYnV0ZSIsIm5ld0Jvb2tMaXN0IiwiZmlsdGVyIiwiYm9vayIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlbGxlcl91c2VybmFtZSIsImEiLCJzb3J0IiwieCIsInkiLCJoYW5kbGVTZWxlY3QiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaG9tZUNvbnRhaW5lciIsIm5hdmJhciIsInNvcnRCeURpdiIsImZvcm1Db250cm9sIiwic2VsZWN0b3JMYWJlbCIsInNvcnRCeVNlbGVjdG9yIiwiYm9va0NhcmRDb250YWluZXIiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=