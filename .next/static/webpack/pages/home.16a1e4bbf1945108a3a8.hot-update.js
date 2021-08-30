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
      setsortAttribute = _useState3[1];

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

  var handleChange = function handleChange(event) {
    setsortAttribute(event.target.value);
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sort by:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        name: "sort-by-attribute",
        id: "sort-by-attribute",
        onChange: function onChange(e) {
          return setsortAttribute(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "seller_username",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "author",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "price",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__.default, {
      variant: "outlined",
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().formControl),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__.default, {
        id: "demo-simple-select-outlined-label",
        children: "Select attribute"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__.default, {
        labelId: "demo-simple-select-outlined-label",
        name: "sort-by-attribute",
        id: "sort-by-attribute",
        value: sortAttribute,
        onChange: handleChange,
        label: "Age",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
            children: "None"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
          value: "title",
          children: "Ten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
          value: "seller_username",
          children: "Twenty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__.default, {
          value: "price",
          children: "Thirty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default().bookCardContainer),
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_9__.default, {
          book: book,
          styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_10___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(Home, "9mbu7hGc/F7BUD5887p5kSD8gew=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4xNmExZTRiYmYxOTQ1MTA4YTNhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFXQSxJQUFNYyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUN2QmQsK0NBQVEsRUFEZTtBQUFBLE1BQ3hDZSxJQUR3QztBQUFBLE1BQ2xDQyxPQURrQzs7QUFBQSxtQkFFVGhCLCtDQUFRLENBQVMsRUFBVCxDQUZDO0FBQUEsTUFFeENpQixXQUZ3QztBQUFBLE1BRTNCQyxjQUYyQjs7QUFBQSxtQkFHTGxCLCtDQUFRLENBQVMsT0FBVCxDQUhIO0FBQUEsTUFHeENtQixhQUh3QztBQUFBLE1BR3pCQyxnQkFIeUI7O0FBQUEsbUJBSWZwQiwrQ0FBUSxDQUFTYyxLQUFLLENBQUNPLFNBQWYsQ0FKTztBQUFBLE1BSXhDQyxRQUp3QztBQUFBLE1BSTlCQyxXQUo4Qjs7QUFNL0MsTUFBTUMsTUFBTSxHQUFHckIsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXdCLE9BQU87QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2R2QixnQkFBQUEsaUVBQW1CLEdBQUd3QixJQUF0QixDQUEyQixVQUFDWCxJQUFELEVBQVU7QUFDbkNDLGtCQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELGlCQUZEOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBVLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFLQUEsSUFBQUEsT0FBTztBQUNQRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWjtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RzQixJQUFBQSxXQUFXLENBQUNNLGVBQWUsQ0FBQywrSUFBSVAsUUFBTCxFQUFoQixDQUFYO0FBQ0QsR0FGUSxFQUVOLENBQUNILGFBQUQsQ0FGTSxDQUFUO0FBSUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNNkIsV0FBVyxHQUFHLCtJQUFJaEIsS0FBSyxDQUFDTyxTQUFWLEVBQXFCVSxNQUFyQixDQUE0QixVQUFDQyxJQUFELEVBQVU7QUFDeEQsYUFBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDbEIsV0FBVyxDQUFDaUIsV0FBWixFQUFsQyxLQUNMRixJQUFJLENBQUNJLGVBQUwsQ0FBcUJGLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q2xCLFdBQVcsQ0FBQ2lCLFdBQVosRUFBNUMsQ0FERjtBQUVELEtBSG1CLENBQXBCOztBQUlBWCxJQUFBQSxXQUFXLENBQUNNLGVBQWUsQ0FBQywrSUFBSUMsV0FBTCxFQUFoQixDQUFYO0FBQ0QsR0FOUSxFQU1OLENBQUNiLFdBQUQsQ0FOTSxDQUFUOztBQVFBLE1BQU1ZLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1EsQ0FBRCxFQUF1QjtBQUM3QyxXQUFPQSxDQUFDLENBQUNDLElBQUYsQ0FBTyxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBUztBQUNyQixhQUFPRCxDQUFDLENBQUNwQixhQUFELENBQUQsR0FBbUJxQixDQUFDLENBQUNyQixhQUFELENBQXBCLEdBQXNDLENBQXRDLEdBQTBDLENBQUMsQ0FBbEQ7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpEOztBQU1BLE1BQU1zQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJ0QixJQUFBQSxnQkFBZ0IsQ0FBQ3NCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWhCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXZDLCtFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRSwwRUFBaEI7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFXLGNBQU0sRUFBRUEsbUVBQW5CO0FBQWlDLHNCQUFjLEVBQUVXO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQU0sY0FBTSxFQUFFTSxNQUFkO0FBQXNCLGNBQU0sRUFBRWpCLG1FQUFZQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUYsMkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsWUFBSSxFQUFDLG1CQUFiO0FBQWlDLFVBQUUsRUFBQyxtQkFBcEM7QUFBd0QsZ0JBQVEsRUFBRSxrQkFBQzJDLENBQUQ7QUFBQSxpQkFBTzVCLGdCQUFnQixDQUFDNEIsQ0FBQyxDQUFDTCxNQUFGLENBQVNDLEtBQVYsQ0FBdkI7QUFBQSxTQUFsRTtBQUFBLGdDQUNFO0FBQVEsZUFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLGVBQUssRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQVEsZUFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFRLGVBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBZUUsOERBQUMsbUVBQUQ7QUFBYSxhQUFPLEVBQUMsVUFBckI7QUFBZ0MsZUFBUyxFQUFFdkMsNkVBQTNDO0FBQUEsOEJBQ0UsOERBQUMsa0VBQUQ7QUFBWSxVQUFFLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLDhEQUFEO0FBQ0UsZUFBTyxFQUFDLG1DQURWO0FBRUUsWUFBSSxFQUFDLG1CQUZQO0FBR0UsVUFBRSxFQUFDLG1CQUhMO0FBSUUsYUFBSyxFQUFFYyxhQUpUO0FBS0UsZ0JBQVEsRUFBRXNCLFlBTFo7QUFNRSxhQUFLLEVBQUMsS0FOUjtBQUFBLGdDQVFFLDhEQUFDLGdFQUFEO0FBQVUsZUFBSyxFQUFDLEVBQWhCO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBV0UsOERBQUMsZ0VBQUQ7QUFBVSxlQUFLLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFZRSw4REFBQyxnRUFBRDtBQUFVLGVBQUssRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFhRSw4REFBQyxnRUFBRDtBQUFVLGVBQUssRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWlDRTtBQUFLLGVBQVMsRUFBRXBDLG1GQUFoQjtBQUFBLGdCQUNDaUIsUUFBUSxDQUFDNkIsR0FBVCxDQUFhLFVBQUNuQixJQUFELEVBQU9vQixLQUFQO0FBQUEsNEJBQ1YsOERBQUMseURBQUQ7QUFBVSxjQUFJLEVBQUVwQixJQUFoQjtBQUFzQixnQkFBTSxFQUFFM0IsaUVBQU1BO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQWpGRDs7R0FBTVE7VUFNV1Y7OztLQU5YVTs7QUFtRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vayB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXInO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rQ2FyZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIpO1xyXG4gIGNvbnN0IGRhdGE6IGJvb2tbXSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9va3M6IGRhdGEgfVxyXG4gIH07XHJcbn1cclxuIFxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHsgYm9va3MgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFN0cmluZyB8IGJvb2xlYW4+KCk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtzb3J0QXR0cmlidXRlLCBzZXRzb3J0QXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJUaXRsZVwiKTtcclxuICBjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oYm9va3MuYm9va19saXN0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coYm9va3MpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvb2tMaXN0KHNvcnRCeUF0dHJpYnV0ZShbLi4uYm9va0xpc3RdKSk7XHJcbiAgfSwgW3NvcnRBdHRyaWJ1dGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Jvb2tMaXN0ID0gWy4uLmJvb2tzLmJvb2tfbGlzdF0uZmlsdGVyKChib29rKSA9PiB7XHJcbiAgICAgIHJldHVybiBib29rLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgXHJcbiAgICAgICAgYm9vay5zZWxsZXJfdXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgfSk7XHJcbiAgICBzZXRCb29rTGlzdChzb3J0QnlBdHRyaWJ1dGUoWy4uLm5ld0Jvb2tMaXN0XSkpO1xyXG4gIH0sIFtzZWFyY2hWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBzb3J0QnlBdHRyaWJ1dGUgPSAoYTogYm9va1tdKTogYm9va1tdID0+IHtcclxuICAgIHJldHVybiBhLnNvcnQoKHgseSkgPT4ge1xyXG4gICAgICByZXR1cm4geFtzb3J0QXR0cmlidXRlXSA+IHlbc29ydEF0dHJpYnV0ZV0gPyAxIDogLTE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0c29ydEF0dHJpYnV0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QnlEaXZ9PiBcclxuICAgICAgICA8bGFiZWw+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnQtYnktYXR0cmlidXRlXCIgaWQ9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0c29ydEF0dHJpYnV0ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxsZXJfdXNlcm5hbWVcIj5TZWxsZXI8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdXRob3JcIj5BdXRob3I8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZVwiPlByaWNlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LW91dGxpbmVkLWxhYmVsXCI+U2VsZWN0IGF0dHJpYnV0ZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LW91dGxpbmVkLWxhYmVsXCJcclxuICAgICAgICAgIG5hbWU9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiIFxyXG4gICAgICAgICAgaWQ9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiXHJcbiAgICAgICAgICB2YWx1ZT17c29ydEF0dHJpYnV0ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBsYWJlbD1cIkFnZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgIDxlbT5Ob25lPC9lbT5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ0aXRsZVwiPlRlbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJzZWxsZXJfdXNlcm5hbWVcIj5Ud2VudHk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwicHJpY2VcIj5UaGlydHk8L01lbnVJdGVtPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tDYXJkQ29udGFpbmVyfT5cclxuICAgICAge2Jvb2tMaXN0Lm1hcCgoYm9vaywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb29rQ2FyZCBib29rPXtib29rfSBzdHlsZXM9e3N0eWxlc30vPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNoZWNrQXV0aEFuZEdldFVzZXIiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiQm9va0NhcmQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJGb3JtQ29udHJvbCIsIlNlbGVjdCIsIkhvbWUiLCJib29rcyIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNvcnRBdHRyaWJ1dGUiLCJzZXRzb3J0QXR0cmlidXRlIiwiYm9va19saXN0IiwiYm9va0xpc3QiLCJzZXRCb29rTGlzdCIsInJvdXRlciIsImdldFVzZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInNvcnRCeUF0dHJpYnV0ZSIsIm5ld0Jvb2tMaXN0IiwiZmlsdGVyIiwiYm9vayIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlbGxlcl91c2VybmFtZSIsImEiLCJzb3J0IiwieCIsInkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaG9tZUNvbnRhaW5lciIsIm5hdmJhciIsInNvcnRCeURpdiIsImUiLCJmb3JtQ29udHJvbCIsImJvb2tDYXJkQ29udGFpbmVyIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9