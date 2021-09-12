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
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_BookListCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BookListCard */ "./components/BookListCard.tsx");
/* harmony import */ var _styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/myList.module.css */ "./styles/myList.module.css");
/* harmony import */ var _styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\my-list\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var MyList = function MyList(_ref) {
  _s();

  var books = _ref.books;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(books.book_list),
      bookList = _useState2[0],
      setBookList = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getSellerbookList = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var token, res, data;
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem('jwt');
                _context.next = 3;
                return fetch("http://localhost:8000/api/get-seller-book-list/" + token);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getSellerbookList() {
        return _ref2.apply(this, arguments);
      };
    }();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default())
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
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookListCard__WEBPACK_IMPORTED_MODULE_7__.default, {
          book: book,
          styles: (_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, _this);
};

_s(MyList, "9m846Nx0rguOlAwrm3h/+BGrJdw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC43NTAzYzUzOTc4NzRkNjkzNTVmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7O0FBa0JBLElBQU1TLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ2JULCtDQUFRLENBQVMsRUFBVCxDQURLO0FBQUEsTUFDNUNVLFdBRDRDO0FBQUEsTUFDL0JDLGNBRCtCOztBQUFBLG1CQUVwQlgsK0NBQVEsQ0FBU1MsS0FBSyxDQUFDRyxTQUFmLENBRlk7QUFBQSxNQUU3Q0MsUUFGNkM7QUFBQSxNQUVuQ0MsV0FGbUM7O0FBR3BELE1BQU1DLE1BQU0sR0FBR2Isc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWUsaUJBQWlCO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxnQkFBQUEsS0FEbUIsR0FDSEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLENBREc7QUFBQTtBQUFBLHVCQUVQQyxLQUFLLENBQUMsb0RBQW9ESCxLQUFyRCxDQUZFOztBQUFBO0FBRW5CSSxnQkFBQUEsR0FGbUI7QUFBQTtBQUFBLHVCQUdVQSxHQUFHLENBQUNDLElBQUosRUFIVjs7QUFBQTtBQUduQkMsZ0JBQUFBLElBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWpCUCxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsT0FBdkI7QUFNQSxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFWCx5RUFBaEI7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFXLGNBQU0sRUFBRUEsa0VBQW5CO0FBQWlDLHNCQUFjLEVBQUVNO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQU0sY0FBTSxFQUFFSSxNQUFkO0FBQXNCLGNBQU0sRUFBRVYsa0VBQVlBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JO0FBQUEsZ0JBQ0RRLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNiLDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFRCxJQUFwQjtBQUEwQixnQkFBTSxFQUFFbkIsa0VBQVlBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFiO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBYUM7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0EvQkQ7O0dBQU1DO1VBR1VOOzs7S0FIVk07O0FBaUNOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215LWxpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lUHJvcHMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGJvb2ssIGJvb2tMaXN0QXBpUmVzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldHVwTWFzdGVyIH0gZnJvbSAnY2x1c3Rlcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTdGF0aWNQcm9wc0Jvb2sgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCwgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEJvb2tMaXN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jvb2tMaXN0Q2FyZCc7XHJcbmltcG9ydCBteUxpc3RTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL215TGlzdC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKTogUHJvbWlzZTxHZXRTdGF0aWNQcm9wc1Jlc3VsdDxNeUxpc3RQcm9wcz4+ID0+IHtcclxuICBjb25zdCB0b2tlbjogU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQtc2VsbGVyLWJvb2stbGlzdC9cIiArIHRva2VuKTtcclxuICBjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coXCJMaXN0IG9mIGJvb2tzOlwiLCBkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9va3M6IGRhdGEgfVxyXG4gIH07XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgTXlMaXN0UHJvcHMge1xyXG5cdGJvb2tzOiB7XHJcbiAgICBib29rX2xpc3Q6IGJvb2tbXVxyXG4gIH1cclxufVxyXG4gXHJcbmNvbnN0IE15TGlzdDogUmVhY3QuRkM8TXlMaXN0UHJvcHM+ID0gKHsgYm9va3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHRjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oYm9va3MuYm9va19saXN0KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFNlbGxlcmJvb2tMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB0b2tlbjogU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXNlbGxlci1ib29rLWxpc3QvXCIgKyB0b2tlbik7XHJcblx0XHRcdGNvbnN0IGRhdGE6IGJvb2tMaXN0QXBpUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuICggXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuICAgICAgPGRpdj5cclxuXHRcdFx0XHR7Ym9va0xpc3QubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEJvb2tMaXN0Q2FyZCBib29rPXtib29rfSBzdHlsZXM9e215TGlzdFN0eWxlc30vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHQgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE15TGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNlYXJjaEJhciIsIk1lbnUiLCJuYXZiYXJTdHlsZXMiLCJCb29rTGlzdENhcmQiLCJteUxpc3RTdHlsZXMiLCJNeUxpc3QiLCJib29rcyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJib29rX2xpc3QiLCJib29rTGlzdCIsInNldEJvb2tMaXN0Iiwicm91dGVyIiwiZ2V0U2VsbGVyYm9va0xpc3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwibmF2YmFyIiwibWFwIiwiYm9vayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==