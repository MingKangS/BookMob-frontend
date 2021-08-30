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
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__.default, {
          id: "demo-simple-select-outlined-label",
          variant: true,
          children: "Select attribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__.default, {
          defaultValue: "title",
          labelId: "demo-simple-select-outlined-label",
          name: "sort-by-attribute",
          id: "sort-by-attribute",
          value: sortAttribute,
          onChange: handleSelect,
          label: "Age",
          className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sortBySelector),
          variant: "filled",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
            value: "title",
            children: "Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
            value: "seller_username",
            children: "Seller"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
            value: "author",
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
            value: "price",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 106,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5jMTBjMzZhMmUwMWE2ZmIzODBhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFXQSxJQUFNYyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUN2QmQsK0NBQVEsRUFEZTtBQUFBLE1BQ3hDZSxJQUR3QztBQUFBLE1BQ2xDQyxPQURrQzs7QUFBQSxtQkFFVGhCLCtDQUFRLENBQVMsRUFBVCxDQUZDO0FBQUEsTUFFeENpQixXQUZ3QztBQUFBLE1BRTNCQyxjQUYyQjs7QUFBQSxtQkFHTGxCLCtDQUFRLENBQVMsT0FBVCxDQUhIO0FBQUEsTUFHeENtQixhQUh3QztBQUFBLE1BR3pCQyxnQkFIeUI7O0FBQUEsbUJBSWZwQiwrQ0FBUSxDQUFTYyxLQUFLLENBQUNPLFNBQWYsQ0FKTztBQUFBLE1BSXhDQyxRQUp3QztBQUFBLE1BSTlCQyxXQUo4Qjs7QUFNL0MsTUFBTUMsTUFBTSxHQUFHckIsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXdCLE9BQU87QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2R2QixnQkFBQUEsaUVBQW1CLEdBQUd3QixJQUF0QixDQUEyQixVQUFDWCxJQUFELEVBQVU7QUFDbkNDLGtCQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELGlCQUZEOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBVLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFLQUEsSUFBQUEsT0FBTztBQUNQRSxJQUFBQSxPQUFPLENBQUNDLEdB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QUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFjRSw4REFBQyxnRUFBRDtBQUFVLGlCQUFLLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQWtDRTtBQUFLLGVBQVMsRUFBRUEsbUZBQWhCO0FBQUEsZ0JBQ0NpQixRQUFRLENBQUM2QixHQUFULENBQWEsVUFBQ25CLElBQUQsRUFBT29CLEtBQVA7QUFBQSw0QkFDViw4REFBQyx5REFBRDtBQUFVLGNBQUksRUFBRXBCLElBQWhCO0FBQXNCLGdCQUFNLEVBQUUzQixpRUFBTUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBbEZEOztHQUFNUTtVQU1XVjs7O0tBTlhVOztBQW9GTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldHVwTWFzdGVyIH0gZnJvbSAnY2x1c3Rlcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZVVwbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlcic7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tDYXJkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xpc3QtYm9va3NcIik7XHJcbiAgY29uc3QgZGF0YTogYm9va1tdID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfTtcclxufVxyXG4gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgYm9vbGVhbj4oKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3NvcnRBdHRyaWJ1dGUsIHNldFNvcnRBdHRyaWJ1dGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlRpdGxlXCIpO1xyXG4gIGNvbnN0IFtib29rTGlzdCwgc2V0Qm9va0xpc3RdID0gdXNlU3RhdGU8Ym9va1tdPihib29rcy5ib29rX2xpc3QpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNoZWNrQXV0aEFuZEdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhib29rcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Qm9va0xpc3Qoc29ydEJ5QXR0cmlidXRlKFsuLi5ib29rTGlzdF0pKTtcclxuICB9LCBbc29ydEF0dHJpYnV0ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Qm9va0xpc3QgPSBbLi4uYm9va3MuYm9va19saXN0XS5maWx0ZXIoKGJvb2spID0+IHtcclxuICAgICAgcmV0dXJuIGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fCBcclxuICAgICAgICBib29rLnNlbGxlcl91c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICB9KTtcclxuICAgIHNldEJvb2tMaXN0KHNvcnRCeUF0dHJpYnV0ZShbLi4ubmV3Qm9va0xpc3RdKSk7XHJcbiAgfSwgW3NlYXJjaFZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IHNvcnRCeUF0dHJpYnV0ZSA9IChhOiBib29rW10pOiBib29rW10gPT4ge1xyXG4gICAgcmV0dXJuIGEuc29ydCgoeCx5KSA9PiB7XHJcbiAgICAgIHJldHVybiB4W3NvcnRBdHRyaWJ1dGVdID4geVtzb3J0QXR0cmlidXRlXSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTb3J0QXR0cmlidXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnRCeURpdn0+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBcclxuICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3Qtb3V0bGluZWQtbGFiZWxcIlxyXG4gICAgICAgICAgICB2YXJpYW50XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNlbGVjdCBhdHRyaWJ1dGVcclxuICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LW91dGxpbmVkLWxhYmVsXCJcclxuICAgICAgICAgICAgbmFtZT1cInNvcnQtYnktYXR0cmlidXRlXCIgXHJcbiAgICAgICAgICAgIGlkPVwic29ydC1ieS1hdHRyaWJ1dGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c29ydEF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgbGFiZWw9XCJBZ2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QnlTZWxlY3Rvcn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJzZWxsZXJfdXNlcm5hbWVcIj5TZWxsZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJhdXRob3JcIj5BdXRob3I8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJwcmljZVwiPlByaWNlPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQ2FyZENvbnRhaW5lcn0+XHJcbiAgICAgIHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm9va0NhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtzdHlsZXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGVja0F1dGhBbmRHZXRVc2VyIiwidXNlUm91dGVyIiwiU2VhcmNoQmFyIiwic3R5bGVzIiwiTWVudSIsIm5hdmJhclN0eWxlcyIsIkJvb2tDYXJkIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiRm9ybUNvbnRyb2wiLCJTZWxlY3QiLCJIb21lIiwiYm9va3MiLCJ1c2VyIiwic2V0VXNlciIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJzb3J0QXR0cmlidXRlIiwic2V0U29ydEF0dHJpYnV0ZSIsImJvb2tfbGlzdCIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJyb3V0ZXIiLCJnZXRVc2VyIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzb3J0QnlBdHRyaWJ1dGUiLCJuZXdCb29rTGlzdCIsImZpbHRlciIsImJvb2siLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWxsZXJfdXNlcm5hbWUiLCJhIiwic29ydCIsIngiLCJ5IiwiaGFuZGxlU2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhvbWVDb250YWluZXIiLCJuYXZiYXIiLCJzb3J0QnlEaXYiLCJmb3JtQ29udHJvbCIsInNvcnRCeVNlbGVjdG9yIiwiYm9va0NhcmRDb250YWluZXIiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=