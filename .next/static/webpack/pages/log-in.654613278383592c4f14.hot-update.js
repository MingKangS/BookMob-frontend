"use strict";
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./pages/log-in.tsx":
/*!**************************!*\
  !*** ./pages/log-in.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_logIn_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/logIn.module.css */ "./styles/logIn.module.css");
/* harmony import */ var _styles_logIn_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_logIn_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AuthForm */ "./components/AuthForm.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\log-in.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var logIn = function logIn() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(""),
      _React$useState2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),
      username = _React$useState2[0],
      setUsername = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(""),
      _React$useState4 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState3, 2),
      password = _React$useState4[0],
      setPassword = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(""),
      _React$useState6 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState5, 2),
      errorMessage = _React$useState6[0],
      setErrorMessage = _React$useState6[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var check = /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.checkAuthAndGetUser)().then(function (isAuth) {
                  if (isAuth) router.push('/home');
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function check() {
        return _ref.apply(this, arguments);
      };
    }();

    isAuthenticated();
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("The credentials entered are:", username, password);
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
    fetch("http://localhost:8000/api/log-in", requestOptions).then( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(response) {
        var resJson;
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(response.status == 200)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 3;
                return response.json();

              case 3:
                resJson = _context2.sent;
                console.log("Log in response JSON: ", resJson);
                localStorage.setItem('jwt', resJson["token"]);
                router.push('/home');
                _context2.next = 10;
                break;

              case 9:
                response.json().then(function (data) {
                  setErrorMessage(data["Bad Request"]);
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_6__.default, {
    formType: "Log in",
    handleSubmit: handleSubmit,
    setEmail: null,
    setUsername: setUsername,
    setPassword: setPassword,
    errorMessage: errorMessage,
    styles: (_styles_logIn_module_css__WEBPACK_IMPORTED_MODULE_8___default())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s(logIn, "yJSoB5KWIvxWrsTvHmiX74cZp0E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (logIn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjY1NDYxMzI3ODM4MzU5MmM0ZjE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0lOLHFEQUFBLENBQXVCLEVBQXZCLENBREo7QUFBQTtBQUFBLE1BQ3JCUSxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBQUEseUJBRUlULHFEQUFBLENBQXVCLEVBQXZCLENBRko7QUFBQTtBQUFBLE1BRXJCVSxRQUZxQjtBQUFBLE1BRVhDLFdBRlc7O0FBQUEseUJBR1lYLHFEQUFBLENBQXVCLEVBQXZCLENBSFo7QUFBQTtBQUFBLE1BR3JCWSxZQUhxQjtBQUFBLE1BR1BDLGVBSE87O0FBSTVCLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWMsS0FBSztBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWlYsZ0JBQUFBLGlFQUFtQixHQUFHVyxJQUF0QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDckMsc0JBQUlBLE1BQUosRUFBWUgsTUFBTSxDQUFDSSxJQUFQLENBQVksT0FBWjtBQUNiLGlCQUZEOztBQURZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUxILEtBQUs7QUFBQTtBQUFBO0FBQUEsT0FBWDs7QUFLQUksSUFBQUEsZUFBZTtBQUNoQixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBMkM7QUFDOURBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q2hCLFFBQTVDLEVBQXNERSxRQUF0RDtBQUNBLFFBQU1lLGNBQWMsR0FBRztBQUNyQkMsTUFBQUEsTUFBTSxFQUFFLE1BRGE7QUFFckJDLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZZO0FBR3JCQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CdEIsUUFBQUEsUUFBUSxFQUFFQSxRQURTO0FBRW5CRSxRQUFBQSxRQUFRLEVBQUVBO0FBRlMsT0FBZjtBQUhlLEtBQXZCO0FBU0FxQixJQUFBQSxLQUFLLENBQUMsa0NBQUQsRUFBcUNOLGNBQXJDLENBQUwsQ0FDR1QsSUFESDtBQUFBLDhTQUNRLGtCQUFPZ0IsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDQUEsUUFBUSxDQUFDQyxNQUFULElBQW1CLEdBRG5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBRW9CRCxRQUFRLENBQUNFLElBQVQsRUFGcEI7O0FBQUE7QUFFSUMsZ0JBQUFBLE9BRko7QUFHRlosZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDVyxPQUF0QztBQUVBQyxnQkFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCRixPQUFPLENBQUMsT0FBRCxDQUFuQztBQUNBckIsZ0JBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE9BQVo7QUFORTtBQUFBOztBQUFBO0FBUUZjLGdCQUFBQSxRQUFRLENBQUNFLElBQVQsR0FBZ0JsQixJQUFoQixDQUFxQixVQUFDc0IsSUFBRCxFQUFVO0FBQzdCekIsa0JBQUFBLGVBQWUsQ0FBQ3lCLElBQUksQ0FBQyxhQUFELENBQUwsQ0FBZjtBQUNELGlCQUZEOztBQVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlRCxHQTVCRDs7QUE4QkEsc0JBQ0UsOERBQUMseURBQUQ7QUFDRSxZQUFRLEVBQUMsUUFEWDtBQUVFLGdCQUFZLEVBQUVsQixZQUZoQjtBQUdFLFlBQVEsRUFBRSxJQUhaO0FBSUUsZUFBVyxFQUFFWCxXQUpmO0FBS0UsZUFBVyxFQUFFRSxXQUxmO0FBTUUsZ0JBQVksRUFBRUMsWUFOaEI7QUFPRSxVQUFNLEVBQUVWLGlFQUFNQTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXhERDs7R0FBTUk7VUFJV0g7OztBQXNEakIsK0RBQWVHLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9nLWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbG9nSW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoRm9ybSc7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbiBcclxuY29uc3QgbG9nSW46IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVjayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY2hlY2tBdXRoQW5kR2V0VXNlcigpLnRoZW4oKGlzQXV0aCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0F1dGgpIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGlzQXV0aGVudGljYXRlZCgpXHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaGUgY3JlZGVudGlhbHMgZW50ZXJlZCBhcmU6XCIsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9sb2ctaW5cIiwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb2cgaW4gcmVzcG9uc2UgSlNPTjogXCIsIHJlc0pzb24pO1xyXG5cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCByZXNKc29uW1widG9rZW5cIl0pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShkYXRhW1wiQmFkIFJlcXVlc3RcIl0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPEF1dGhGb3JtIFxyXG4gICAgICBmb3JtVHlwZT1cIkxvZyBpblwiIFxyXG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgc2V0RW1haWw9e251bGx9IFxyXG4gICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9IFxyXG4gICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9IFxyXG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cclxuICAgICAgc3R5bGVzPXtzdHlsZXN9IFxyXG4gICAgLz5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ0luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJBdXRoRm9ybSIsImNoZWNrQXV0aEFuZEdldFVzZXIiLCJsb2dJbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJyb3V0ZXIiLCJjaGVjayIsInRoZW4iLCJpc0F1dGgiLCJwdXNoIiwiaXNBdXRoZW50aWNhdGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJyZXNKc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9