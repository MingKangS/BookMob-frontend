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
                setBookList(data.book_list);

              case 8:
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

    getSellerbookList();
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

_s(MyList, "9m846Nx0rguOlAwrm3h/+BGrJdw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXktbGlzdC4yMTU3OWU2MGY5NzgwZjgwOGFmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1TLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ2JULCtDQUFRLENBQVMsRUFBVCxDQURLO0FBQUEsTUFDNUNVLFdBRDRDO0FBQUEsTUFDL0JDLGNBRCtCOztBQUFBLG1CQUVwQlgsK0NBQVEsQ0FBU1MsS0FBSyxDQUFDRyxTQUFmLENBRlk7QUFBQSxNQUU3Q0MsUUFGNkM7QUFBQSxNQUVuQ0MsV0FGbUM7O0FBR3BELE1BQU1DLE1BQU0sR0FBR2Isc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWUsaUJBQWlCO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxnQkFBQUEsS0FEbUIsR0FDSEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLENBREc7QUFBQTtBQUFBLHVCQUVQQyxLQUFLLENBQUMsb0RBQW9ESCxLQUFyRCxDQUZFOztBQUFBO0FBRW5CSSxnQkFBQUEsR0FGbUI7QUFBQTtBQUFBLHVCQUdVQSxHQUFHLENBQUNDLElBQUosRUFIVjs7QUFBQTtBQUduQkMsZ0JBQUFBLElBSG1CO0FBSXpCVCxnQkFBQUEsV0FBVyxDQUFDUyxJQUFJLENBQUNYLFNBQU4sQ0FBWDs7QUFKeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBakJJLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxPQUF2Qjs7QUFNQUEsSUFBQUEsaUJBQWlCO0FBRWpCLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVYLHlFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQVcsY0FBTSxFQUFFQSxrRUFBbkI7QUFBaUMsc0JBQWMsRUFBRU07QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVJLE1BQWQ7QUFBc0IsY0FBTSxFQUFFVixrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBT0k7QUFBQSxnQkFDRFEsUUFBUSxDQUFDWSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2IsOERBQUMsNkRBQUQ7QUFBYyxjQUFJLEVBQUVELElBQXBCO0FBQTBCLGdCQUFNLEVBQUVuQixrRUFBWUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWI7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFhQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQWpDRDs7R0FBTUM7VUFHVU47OztLQUhWTTtBQW1DTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1saXN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rLCBib29rTGlzdEFwaVJlcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgU3RhdGljUHJvcHNCb29rIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ob21lJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHNSZXN1bHQsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBCb29rTGlzdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdENhcmQnO1xyXG5pbXBvcnQgbXlMaXN0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9teUxpc3QubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8TXlMaXN0UHJvcHM+PiA9PiB7XHJcbi8vICAgY29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXNlbGxlci1ib29rLWxpc3QvXCIgKyB0b2tlbik7XHJcbi8vICAgY29uc3QgZGF0YTogYm9va0xpc3RBcGlSZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiTGlzdCBvZiBib29rczpcIiwgZGF0YSk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuaW50ZXJmYWNlIE15TGlzdFByb3BzIHtcclxuXHRib29rczoge1xyXG4gICAgYm9va19saXN0OiBib29rW11cclxuICB9XHJcbn1cclxuIFxyXG5jb25zdCBNeUxpc3Q6IFJlYWN0LkZDPE15TGlzdFByb3BzPiA9ICh7IGJvb2tzIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3QgW2Jvb2tMaXN0LCBzZXRCb29rTGlzdF0gPSB1c2VTdGF0ZTxib29rW10+KGJvb2tzLmJvb2tfbGlzdCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRTZWxsZXJib29rTGlzdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1zZWxsZXItYm9vay1saXN0L1wiICsgdG9rZW4pO1xyXG5cdFx0XHRjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRcdHNldEJvb2tMaXN0KGRhdGEuYm9va19saXN0KTtcclxuXHRcdH07XHJcblx0XHRnZXRTZWxsZXJib29rTGlzdCgpO1xyXG5cdFx0XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKCBcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8U2VhcmNoQmFyIHN0eWxlcz17bmF2YmFyU3R5bGVzfSBzZXRTZWFyY2hWYWx1ZT17c2V0U2VhcmNoVmFsdWV9Lz5cclxuICAgICAgICA8TWVudSByb3V0ZXI9e3JvdXRlcn0gc3R5bGVzPXtuYXZiYXJTdHlsZXN9Lz5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblx0XHRcdFxyXG4gICAgICA8ZGl2PlxyXG5cdFx0XHRcdHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8Qm9va0xpc3RDYXJkIGJvb2s9e2Jvb2t9IHN0eWxlcz17bXlMaXN0U3R5bGVzfS8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cdCApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTXlMaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU2VhcmNoQmFyIiwiTWVudSIsIm5hdmJhclN0eWxlcyIsIkJvb2tMaXN0Q2FyZCIsIm15TGlzdFN0eWxlcyIsIk15TGlzdCIsImJvb2tzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImJvb2tfbGlzdCIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJyb3V0ZXIiLCJnZXRTZWxsZXJib29rTGlzdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJuYXZiYXIiLCJtYXAiLCJib29rIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9