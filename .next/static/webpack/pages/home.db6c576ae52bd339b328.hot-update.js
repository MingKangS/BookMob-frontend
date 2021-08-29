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
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.tsx");
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
      sortByAttribute = _useState3[0],
      setSortByAttribute = _useState3[1];

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
    setBookList((0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(bookList).sort(function (x, y) {
      return x[sortByAttribute] > y[sortByAttribute] ? 1 : -1;
    }));
  }, [sortByAttribute]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBookList((0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(bookList).filter(function (book) {
      return book.title.includes(searchValue) || book.seller_username.includes(searchValue);
    }));
  }, [searchValue]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_7__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_8__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_11___default().sortByDiv),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sort by:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        name: "sort-by-attribute",
        id: "sort-by-attribute",
        onChange: function onChange(e) {
          return setSortByAttribute(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "seller_username",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "author",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "price",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_11___default().bookCardContainer),
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_9__.default, {
          book: book,
          styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_11___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(Home, "5XQLYRWzuU0w28MqrW2hzjP1fqg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5kYjZjNTc2YWU1MmJkMzM5YjMyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFpQkEsSUFBTVUsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDdkJWLCtDQUFRLEVBRGU7QUFBQSxNQUN4Q1csSUFEd0M7QUFBQSxNQUNsQ0MsT0FEa0M7O0FBQUEsbUJBRVRaLCtDQUFRLENBQVMsRUFBVCxDQUZDO0FBQUEsTUFFeENhLFdBRndDO0FBQUEsTUFFM0JDLGNBRjJCOztBQUFBLG1CQUdEZCwrQ0FBUSxDQUFTLE9BQVQsQ0FIUDtBQUFBLE1BR3hDZSxlQUh3QztBQUFBLE1BR3ZCQyxrQkFIdUI7O0FBQUEsbUJBSWZoQiwrQ0FBUSxDQUFTVSxLQUFLLENBQUNPLFNBQWYsQ0FKTztBQUFBLE1BSXhDQyxRQUp3QztBQUFBLE1BSTlCQyxXQUo4Qjs7QUFNL0MsTUFBTUMsTUFBTSxHQUFHakIsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTW9CLE9BQU87QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RuQixnQkFBQUEsaUVBQW1CLEdBQUdvQixJQUF0QixDQUEyQixVQUFDWCxJQUFELEVBQVU7QUFDbkNDLGtCQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELGlCQUZEOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBVLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFLQUEsSUFBQUEsT0FBTztBQUNQRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWjtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RrQixJQUFBQSxXQUFXLENBQUMsK0lBQUlELFFBQUosRUFBY08sSUFBZCxDQUFtQixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBUztBQUFDLGFBQU9ELENBQUMsQ0FBQ1gsZUFBRCxDQUFELEdBQXFCWSxDQUFDLENBQUNaLGVBQUQsQ0FBdEIsR0FBMEMsQ0FBMUMsR0FBOEMsQ0FBQyxDQUF0RDtBQUF3RCxLQUFyRixDQUFELENBQVg7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsZUFBRCxDQUZNLENBQVQ7QUFJQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RrQixJQUFBQSxXQUFXLENBQUMsK0lBQUlELFFBQUosRUFBY1UsTUFBZCxDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDekMsYUFBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JsQixXQUFwQixLQUFvQ2dCLElBQUksQ0FBQ0csZUFBTCxDQUFxQkQsUUFBckIsQ0FBOEJsQixXQUE5QixDQUEzQztBQUNELEtBRlcsQ0FBRCxDQUFYO0FBR0QsR0FKUSxFQUlOLENBQUNBLFdBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRU4sMEVBQWhCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBVyxjQUFNLEVBQUVBLG1FQUFuQjtBQUFpQyxzQkFBYyxFQUFFTztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFNLGNBQU0sRUFBRU0sTUFBZDtBQUFzQixjQUFNLEVBQUViLG1FQUFZQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUYsMkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsWUFBSSxFQUFDLG1CQUFiO0FBQWlDLFVBQUUsRUFBQyxtQkFBcEM7QUFBd0QsZ0JBQVEsRUFBRSxrQkFBQzhCLENBQUQ7QUFBQSxpQkFBT25CLGtCQUFrQixDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBekI7QUFBQSxTQUFsRTtBQUFBLGdDQUNFO0FBQVEsZUFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLGVBQUssRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQVEsZUFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFRLGVBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBZUU7QUFBSyxlQUFTLEVBQUVoQyxtRkFBaEI7QUFBQSxnQkFDQ2EsUUFBUSxDQUFDcUIsR0FBVCxDQUFhLFVBQUNWLElBQUQsRUFBT1csS0FBUDtBQUFBLDRCQUNWLDhEQUFDLHlEQUFEO0FBQVUsY0FBSSxFQUFFWCxJQUFoQjtBQUFzQixnQkFBTSxFQUFFeEIsaUVBQU1BO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBbkREOztHQUFNSTtVQU1XTjs7O0tBTlhNOztBQXFETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldHVwTWFzdGVyIH0gZnJvbSAnY2x1c3Rlcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZVVwbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlcic7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGlzdC1ib29rc1wiLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgY29uc3QgZGF0YTogYm9va1tdID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfVxyXG5cclxufVxyXG4gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgYm9vbGVhbj4oKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3NvcnRCeUF0dHJpYnV0ZSwgc2V0U29ydEJ5QXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJUaXRsZVwiKTtcclxuICBjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oYm9va3MuYm9va19saXN0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coYm9va3MpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvb2tMaXN0KFsuLi5ib29rTGlzdF0uc29ydCgoeCx5KSA9PiB7cmV0dXJuIHhbc29ydEJ5QXR0cmlidXRlXSA+IHlbc29ydEJ5QXR0cmlidXRlXSA/IDEgOiAtMX0pKSBcclxuICB9LCBbc29ydEJ5QXR0cmlidXRlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRCb29rTGlzdChbLi4uYm9va0xpc3RdLmZpbHRlcigoYm9vaykgPT4ge1xyXG4gICAgICByZXR1cm4gYm9vay50aXRsZS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkgfHwgYm9vay5zZWxsZXJfdXNlcm5hbWUuaW5jbHVkZXMoc2VhcmNoVmFsdWUpXHJcbiAgICB9KSkgXHJcbiAgfSwgW3NlYXJjaFZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QnlEaXZ9PiBcclxuICAgICAgICA8bGFiZWw+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnQtYnktYXR0cmlidXRlXCIgaWQ9XCJzb3J0LWJ5LWF0dHJpYnV0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29ydEJ5QXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGl0bGVcIj5UaXRsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGxlcl91c2VybmFtZVwiPlNlbGxlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1dGhvclwiPkF1dGhvcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlXCI+UHJpY2U8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0NhcmRDb250YWluZXJ9PlxyXG4gICAgICB7Ym9va0xpc3QubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJvb2tDYXJkIGJvb2s9e2Jvb2t9IHN0eWxlcz17c3R5bGVzfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2hlY2tBdXRoQW5kR2V0VXNlciIsInVzZVJvdXRlciIsIlNlYXJjaEJhciIsInN0eWxlcyIsIk1lbnUiLCJuYXZiYXJTdHlsZXMiLCJCb29rQ2FyZCIsIkhvbWUiLCJib29rcyIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNvcnRCeUF0dHJpYnV0ZSIsInNldFNvcnRCeUF0dHJpYnV0ZSIsImJvb2tfbGlzdCIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJyb3V0ZXIiLCJnZXRVc2VyIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzb3J0IiwieCIsInkiLCJmaWx0ZXIiLCJib29rIiwidGl0bGUiLCJpbmNsdWRlcyIsInNlbGxlcl91c2VybmFtZSIsIm5hdmJhciIsInNvcnRCeURpdiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJvb2tDYXJkQ29udGFpbmVyIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9