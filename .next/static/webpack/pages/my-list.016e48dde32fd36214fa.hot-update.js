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
                setBookList(data.book_list);

              case 8:
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
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: bookList.map(function (book, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookListCard__WEBPACK_IMPORTED_MODULE_7__.default, {
          book: book,
          styles: (_styles_myList_module_css__WEBPACK_IMPORTED_MODULE_9___default())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC4wMTZlNDhkZGUzMmZkMzYyMTRmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1TLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLEdBQU07QUFBQTs7QUFBQSxrQkFDSlIsK0NBQVEsQ0FBUyxFQUFULENBREo7QUFBQSxNQUNuQ1MsV0FEbUM7QUFBQSxNQUN0QkMsY0FEc0I7O0FBQUEsbUJBRVhWLCtDQUFRLENBQVMsRUFBVCxDQUZHO0FBQUEsTUFFcENXLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUczQyxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1hLGlCQUFpQjtBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsZ0JBQUFBLEtBRG1CLEdBQ0hDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixDQURHO0FBQUE7QUFBQSx1QkFFUEMsS0FBSyxDQUFDLG9EQUFvREgsS0FBckQsQ0FGRTs7QUFBQTtBQUVuQkksZ0JBQUFBLEdBRm1CO0FBQUE7QUFBQSx1QkFHVUEsR0FBRyxDQUFDQyxJQUFKLEVBSFY7O0FBQUE7QUFHbkJDLGdCQUFBQSxJQUhtQjtBQUl6QlQsZ0JBQUFBLFdBQVcsQ0FBQ1MsSUFBSSxDQUFDQyxTQUFOLENBQVg7O0FBSnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWpCUixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsT0FBdkI7O0FBTUFBLElBQUFBLGlCQUFpQjtBQUVqQixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0FTLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixRQUFaO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFTix5RUFBaEI7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFXLGNBQU0sRUFBRUEsa0VBQW5CO0FBQWlDLHNCQUFjLEVBQUVLO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQU0sY0FBTSxFQUFFRyxNQUFkO0FBQXNCLGNBQU0sRUFBRVIsa0VBQVlBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JO0FBQUEsZ0JBQ0RNLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNiLDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFRCxJQUFwQjtBQUEwQixnQkFBTSxFQUFFcEIsa0VBQVlBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFiO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBYUM7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0FuQ0Q7O0dBQU1DO1VBR1VOOzs7S0FIVk07QUFxQ04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXktbGlzdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vaywgYm9va0xpc3RBcGlSZXMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3BzQm9vayB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaG9tZSc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzUmVzdWx0LCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQm9va0xpc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0xpc3RDYXJkJztcclxuaW1wb3J0IG15TGlzdFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbXlMaXN0Lm1vZHVsZS5jc3MnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpOiBQcm9taXNlPEdldFN0YXRpY1Byb3BzUmVzdWx0PE15TGlzdFByb3BzPj4gPT4ge1xyXG4vLyAgIGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XHJcbi8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1zZWxsZXItYm9vay1saXN0L1wiICsgdG9rZW4pO1xyXG4vLyAgIGNvbnN0IGRhdGE6IGJvb2tMaXN0QXBpUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICBjb25zb2xlLmxvZyhcIkxpc3Qgb2YgYm9va3M6XCIsIGRhdGEpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmludGVyZmFjZSBNeUxpc3RQcm9wcyB7XHJcblxyXG59XHJcbiBcclxuY29uc3QgTXlMaXN0OiBSZWFjdC5GQzxNeUxpc3RQcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cdGNvbnN0IFtib29rTGlzdCwgc2V0Qm9va0xpc3RdID0gdXNlU3RhdGU8Ym9va1tdPihbXSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRTZWxsZXJib29rTGlzdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1zZWxsZXItYm9vay1saXN0L1wiICsgdG9rZW4pO1xyXG5cdFx0XHRjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRcdHNldEJvb2tMaXN0KGRhdGEuYm9va19saXN0KTtcclxuXHRcdH07XHJcblx0XHRnZXRTZWxsZXJib29rTGlzdCgpO1xyXG5cdFx0XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zb2xlLmxvZyhib29rTGlzdCk7XHJcblxyXG5cdHJldHVybiAoIFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcbiAgICAgIDxkaXY+XHJcblx0XHRcdFx0e2Jvb2tMaXN0Lm1hcCgoYm9vaywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxCb29rTGlzdENhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtteUxpc3RTdHlsZXN9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiQm9va0xpc3RDYXJkIiwibXlMaXN0U3R5bGVzIiwiTXlMaXN0Iiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJyb3V0ZXIiLCJnZXRTZWxsZXJib29rTGlzdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJib29rX2xpc3QiLCJjb25zb2xlIiwibG9nIiwibmF2YmFyIiwibWFwIiwiYm9vayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==