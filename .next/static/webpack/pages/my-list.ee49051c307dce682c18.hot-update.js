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
  console.log(object);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC5lZTQ5MDUxYzMwN2RjZTY4MmMxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1TLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLEdBQU07QUFBQTs7QUFBQSxrQkFDSlIsK0NBQVEsQ0FBUyxFQUFULENBREo7QUFBQSxNQUNuQ1MsV0FEbUM7QUFBQSxNQUN0QkMsY0FEc0I7O0FBQUEsbUJBRVhWLCtDQUFRLENBQVMsRUFBVCxDQUZHO0FBQUEsTUFFcENXLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUczQyxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1hLGlCQUFpQjtBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsZ0JBQUFBLEtBRG1CLEdBQ0hDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixDQURHO0FBQUE7QUFBQSx1QkFFUEMsS0FBSyxDQUFDLG9EQUFvREgsS0FBckQsQ0FGRTs7QUFBQTtBQUVuQkksZ0JBQUFBLEdBRm1CO0FBQUE7QUFBQSx1QkFHVUEsR0FBRyxDQUFDQyxJQUFKLEVBSFY7O0FBQUE7QUFHbkJDLGdCQUFBQSxJQUhtQjtBQUl6QlQsZ0JBQUFBLFdBQVcsQ0FBQ1MsSUFBSSxDQUFDQyxTQUFOLENBQVg7O0FBSnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWpCUixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsT0FBdkI7O0FBTUFBLElBQUFBLGlCQUFpQjtBQUVqQixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0FTLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFcEIseUVBQWhCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBVyxjQUFNLEVBQUVBLGtFQUFuQjtBQUFpQyxzQkFBYyxFQUFFSztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFNLGNBQU0sRUFBRUcsTUFBZDtBQUFzQixjQUFNLEVBQUVSLGtFQUFZQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFPSTtBQUFBLGdCQUNETSxRQUFRLENBQUNnQixHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2IsOERBQUMsNkRBQUQ7QUFBYyxjQUFJLEVBQUVELElBQXBCO0FBQTBCLGdCQUFNLEVBQUVyQixrRUFBWUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWI7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFhQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQW5DRDs7R0FBTUM7VUFHVU47OztLQUhWTTtBQXFDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1saXN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rLCBib29rTGlzdEFwaVJlcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgU3RhdGljUHJvcHNCb29rIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ob21lJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHNSZXN1bHQsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBCb29rTGlzdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdENhcmQnO1xyXG5pbXBvcnQgbXlMaXN0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9teUxpc3QubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8TXlMaXN0UHJvcHM+PiA9PiB7XHJcbi8vICAgY29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXNlbGxlci1ib29rLWxpc3QvXCIgKyB0b2tlbik7XHJcbi8vICAgY29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiTGlzdCBvZiBib29rczpcIiwgZGF0YSk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuaW50ZXJmYWNlIE15TGlzdFByb3BzIHtcclxuXHJcbn1cclxuIFxyXG5jb25zdCBNeUxpc3Q6IFJlYWN0LkZDPE15TGlzdFByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3QgW2Jvb2tMaXN0LCBzZXRCb29rTGlzdF0gPSB1c2VTdGF0ZTxib29rW10+KFtdKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFNlbGxlcmJvb2tMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB0b2tlbjogU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXNlbGxlci1ib29rLWxpc3QvXCIgKyB0b2tlbik7XHJcblx0XHRcdGNvbnN0IGRhdGE6IGJvb2tMaXN0QXBpUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0c2V0Qm9va0xpc3QoZGF0YS5ib29rX2xpc3QpO1xyXG5cdFx0fTtcclxuXHRcdGdldFNlbGxlcmJvb2tMaXN0KCk7XHJcblx0XHRcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKG9iamVjdCk7XHJcblxyXG5cdHJldHVybiAoIFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdmJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZiYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdmJhclN0eWxlc30vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcbiAgICAgIDxkaXY+XHJcblx0XHRcdFx0e2Jvb2tMaXN0Lm1hcCgoYm9vaywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxCb29rTGlzdENhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtteUxpc3RTdHlsZXN9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJNZW51IiwibmF2YmFyU3R5bGVzIiwiQm9va0xpc3RDYXJkIiwibXlMaXN0U3R5bGVzIiwiTXlMaXN0Iiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJyb3V0ZXIiLCJnZXRTZWxsZXJib29rTGlzdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJib29rX2xpc3QiLCJjb25zb2xlIiwibG9nIiwib2JqZWN0IiwibmF2YmFyIiwibWFwIiwiYm9vayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==