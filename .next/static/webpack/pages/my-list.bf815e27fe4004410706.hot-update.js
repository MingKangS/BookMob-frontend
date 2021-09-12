"use strict";
self["webpackHotUpdate_N_E"]("pages/my-list",{

/***/ "./pages/my-list/index.tsx":
/*!*********************************!*\
  !*** ./pages/my-list/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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







 // export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<MyListProps>> => {
//   const token: String = localStorage.getItem('jwt');
// 	const res = await fetch("http://localhost:8000/api/get-seller-book-list/" + token);
//   const data: bookListApiRes = await res.json();
//   console.log("List of books:", data);
//   return {
//     props: { books: data }
//   };
// };

var MyList = function MyList() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      bookList = _useState2[0],
      setBookList = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getSellerbookList = /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
                console.log(data);
                setBookList(data.book_list);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getSellerbookList() {
        return _ref.apply(this, arguments);
      };
    }();

    getSellerbookList();
  }, []);
  console.log(bookList);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookListCard__WEBPACK_IMPORTED_MODULE_7__.default, {
          book: book,
          styles: (_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, _this);
};

_s(MyList, "86jMyROQOZzD0CE5WgbuzXKtUb4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = MyList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5iZjgxNWUyN2ZlNDAwNDQxMDcwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1TLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLEdBQU07QUFBQTs7QUFBQSxrQkFDSlIsK0NBQVEsQ0FBUyxFQUFULENBREo7QUFBQSxNQUNuQ1MsV0FEbUM7QUFBQSxNQUN0QkMsY0FEc0I7O0FBQUEsbUJBRVhWLCtDQUFRLENBQVMsRUFBVCxDQUZHO0FBQUEsTUFFcENXLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUczQyxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1hLGlCQUFpQjtBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsZ0JBQUFBLEtBRG1CLEdBQ0hDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixDQURHO0FBQUE7QUFBQSx1QkFFUEMsS0FBSyxDQUFDLG9EQUFvREgsS0FBckQsQ0FGRTs7QUFBQTtBQUVuQkksZ0JBQUFBLEdBRm1CO0FBQUE7QUFBQSx1QkFHVUEsR0FBRyxDQUFDQyxJQUFKLEVBSFY7O0FBQUE7QUFHbkJDLGdCQUFBQSxJQUhtQjtBQUl6QkMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FULGdCQUFBQSxXQUFXLENBQUNTLElBQUksQ0FBQ0csU0FBTixDQUFYOztBQUx5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFqQlYsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLE9BQXZCOztBQU9BQSxJQUFBQSxpQkFBaUI7QUFFakIsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosUUFBWjtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRU4seUVBQWhCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBVyxjQUFNLEVBQUVBLGtFQUFuQjtBQUFpQyxzQkFBYyxFQUFFSztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFNLGNBQU0sRUFBRUcsTUFBZDtBQUFzQixjQUFNLEVBQUVSLGtFQUFZQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFPSTtBQUFBLGdCQUNETSxRQUFRLENBQUNlLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDYiw4REFBQyw2REFBRDtBQUFjLGNBQUksRUFBRUQsSUFBcEI7QUFBMEIsZ0JBQU0sRUFBRXBCLGtFQUFZQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBYjtBQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQWFDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUJBLENBcENEOztHQUFNQztVQUdVTjs7O0tBSFZNO0FBc0NOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215LWxpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lUHJvcHMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGJvb2ssIGJvb2tMaXN0QXBpUmVzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldHVwTWFzdGVyIH0gZnJvbSAnY2x1c3Rlcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTdGF0aWNQcm9wc0Jvb2sgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCwgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEJvb2tMaXN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jvb2tMaXN0Q2FyZCc7XHJcbmltcG9ydCBteUxpc3RTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL215TGlzdC5tb2R1bGUuY3NzJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKTogUHJvbWlzZTxHZXRTdGF0aWNQcm9wc1Jlc3VsdDxNeUxpc3RQcm9wcz4+ID0+IHtcclxuLy8gICBjb25zdCB0b2tlbjogU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQtc2VsbGVyLWJvb2stbGlzdC9cIiArIHRva2VuKTtcclxuLy8gICBjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgY29uc29sZS5sb2coXCJMaXN0IG9mIGJvb2tzOlwiLCBkYXRhKTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgYm9va3M6IGRhdGEgfVxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5pbnRlcmZhY2UgTXlMaXN0UHJvcHMge1xyXG5cclxufVxyXG4gXHJcbmNvbnN0IE15TGlzdDogUmVhY3QuRkM8TXlMaXN0UHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHRjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oW10pO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0U2VsbGVyYm9va0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQtc2VsbGVyLWJvb2stbGlzdC9cIiArIHRva2VuKTtcclxuXHRcdFx0Y29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0c2V0Qm9va0xpc3QoZGF0YS5ib29rX2xpc3QpO1xyXG5cdFx0fTtcclxuXHRcdGdldFNlbGxlcmJvb2tMaXN0KCk7XHJcblx0XHRcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGJvb2tMaXN0KTtcclxuXHJcblx0cmV0dXJuICggXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuICAgICAgPGRpdj5cclxuXHRcdFx0XHR7Ym9va0xpc3QubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEJvb2tMaXN0Q2FyZCBib29rPXtib29rfSBzdHlsZXM9e215TGlzdFN0eWxlc30vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHQgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE15TGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNlYXJjaEJhciIsIk1lbnUiLCJuYXZiYXJTdHlsZXMiLCJCb29rTGlzdENhcmQiLCJteUxpc3RTdHlsZXMiLCJNeUxpc3QiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiYm9va0xpc3QiLCJzZXRCb29rTGlzdCIsInJvdXRlciIsImdldFNlbGxlcmJvb2tMaXN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJib29rX2xpc3QiLCJuYXZiYXIiLCJtYXAiLCJib29rIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9