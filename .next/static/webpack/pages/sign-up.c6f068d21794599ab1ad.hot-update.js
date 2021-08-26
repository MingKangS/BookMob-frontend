"use strict";
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.tsx":
/*!***************************!*\
  !*** ./pages/sign-up.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/signUp.module.css */ "./styles/signUp.module.css");
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AuthForm */ "./components/AuthForm.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\sign-up.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var signUp = function signUp() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState(""),
      _React$useState2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),
      email = _React$useState2[0],
      setEmail = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(""),
      _React$useState4 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState3, 2),
      username = _React$useState4[0],
      setUsername = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(""),
      _React$useState6 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState5, 2),
      password = _React$useState6[0],
      setPassword = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(""),
      _React$useState8 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState7, 2),
      errorMessage = _React$useState8[0],
      setErrorMessage = _React$useState8[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("The credentials entered are:", username, password);
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password
      })
    };
    fetch("http://localhost:8000/api/sign-up", requestOptions).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(response) {
        var resJson, res, err;
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(response.status == 201)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return response.json();

              case 3:
                resJson = _context.sent;
                console.log("Log in response JSON: ", resJson);
                localStorage.setItem('jwt', resJson["token"]);
                router.push('/home');
                _context.next = 14;
                break;

              case 9:
                _context.next = 11;
                return response.json();

              case 11:
                res = _context.sent;
                err = Object.values(res).toString();
                setErrorMessage(err);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    formType: "Sign up",
    handleSubmit: handleSubmit,
    setEmail: setEmail,
    setUsername: setUsername,
    setPassword: setPassword,
    errorMessage: errorMessage,
    styles: (_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7___default())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(signUp, "H31FY7xlxPXUOupRNCgkrqk4Piw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (signUp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC5jNmYwNjhkMjE3OTQ1OTlhYjFhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdBLElBQU1JLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSx3QkFDSEYscURBQUEsQ0FBdUIsRUFBdkIsQ0FERztBQUFBO0FBQUEsTUFDdEJJLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSx5QkFFR0wscURBQUEsQ0FBdUIsRUFBdkIsQ0FGSDtBQUFBO0FBQUEsTUFFdEJNLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSx5QkFHR1AscURBQUEsQ0FBdUIsRUFBdkIsQ0FISDtBQUFBO0FBQUEsTUFHdEJRLFFBSHNCO0FBQUEsTUFHWkMsV0FIWTs7QUFBQSx5QkFJV1QscURBQUEsQ0FBdUIsRUFBdkIsQ0FKWDtBQUFBO0FBQUEsTUFJdEJVLFlBSnNCO0FBQUEsTUFJUkMsZUFKUTs7QUFNN0IsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQTJDO0FBQzlEQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNENYLFFBQTVDLEVBQXNERSxRQUF0RDtBQUNBLFFBQU1VLGNBQWMsR0FBRztBQUNyQkMsTUFBQUEsTUFBTSxFQUFFLE1BRGE7QUFFckJDLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZZO0FBR3JCQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CbkIsUUFBQUEsS0FBSyxFQUFFQSxLQURZO0FBRW5CRSxRQUFBQSxRQUFRLEVBQUVBLFFBRlM7QUFHbkJFLFFBQUFBLFFBQVEsRUFBRUE7QUFIUyxPQUFmO0FBSGUsS0FBdkI7QUFVQWdCLElBQUFBLEtBQUssQ0FBQyxtQ0FBRCxFQUFzQ04sY0FBdEMsQ0FBTCxDQUNHTyxJQURIO0FBQUEsNlNBQ1MsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0RBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQURsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVtQkQsUUFBUSxDQUFDRSxJQUFULEVBRm5COztBQUFBO0FBRUdDLGdCQUFBQSxPQUZIO0FBR0hiLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1ksT0FBdEM7QUFFQUMsZ0JBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QkYsT0FBTyxDQUFDLE9BQUQsQ0FBbkM7QUFDQWpCLGdCQUFBQSxNQUFNLENBQUNvQixJQUFQLENBQVksT0FBWjtBQU5HO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQVErQk4sUUFBUSxDQUFDRSxJQUFULEVBUi9COztBQUFBO0FBUUdLLGdCQUFBQSxHQVJIO0FBU0dDLGdCQUFBQSxHQVRILEdBU2lCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsR0FBZCxFQUFtQkksUUFBbkIsRUFUakI7QUFVSDFCLGdCQUFBQSxlQUFlLENBQUN1QixHQUFELENBQWY7O0FBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNELEdBNUJEOztBQThCQSxzQkFDRSw4REFBQyx5REFBRDtBQUNFLFlBQVEsRUFBQyxTQURYO0FBRUUsZ0JBQVksRUFBRXJCLFlBRmhCO0FBR0UsWUFBUSxFQUFFUixRQUhaO0FBSUUsZUFBVyxFQUFFRSxXQUpmO0FBS0UsZUFBVyxFQUFFRSxXQUxmO0FBTUUsZ0JBQVksRUFBRUMsWUFOaEI7QUFPRSxVQUFNLEVBQUVaLGtFQUFNQTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWpERDs7R0FBTUk7VUFNV0Q7OztBQTZDakIsK0RBQWVDLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi11cC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2lnblVwLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoRm9ybSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzaWduVXBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aCdcclxuIFxyXG5jb25zdCBzaWduVXA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNyZWRlbnRpYWxzIGVudGVyZWQgYXJlOlwiLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NpZ24tdXBcIiwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKCBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nIGluIHJlc3BvbnNlIEpTT046IFwiLCByZXNKc29uKTtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzSnNvbltcInRva2VuXCJdKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXM6IHNpZ25VcFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QgZXJyOiBzdHJpbmcgPSBPYmplY3QudmFsdWVzKHJlcykudG9TdHJpbmcoKTtcclxuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxBdXRoRm9ybSBcclxuICAgICAgZm9ybVR5cGU9XCJTaWduIHVwXCIgXHJcbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBzZXRFbWFpbD17c2V0RW1haWx9IFxyXG4gICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9IFxyXG4gICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9IFxyXG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cclxuICAgICAgc3R5bGVzPXtzdHlsZXN9IFxyXG4gICAgLz5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25VcDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkF1dGhGb3JtIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJzaWduVXAiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsInJlc0pzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsInJlcyIsImVyciIsIk9iamVjdCIsInZhbHVlcyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==