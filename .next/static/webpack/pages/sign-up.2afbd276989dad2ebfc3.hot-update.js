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
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/signUp.module.css */ "./styles/signUp.module.css");
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AuthForm */ "./components/AuthForm.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
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
  useEffect(function () {
    var checkAuth = /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.checkAuthAndGetUser)().then(function (isAuthenticated) {
                  if (isAuthenticated) router.push('/home');
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function checkAuth() {
        return _ref.apply(this, arguments);
      };
    }();

    checkAuth();
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
        email: email,
        username: username,
        password: password
      })
    };
    fetch("http://localhost:8000/api/sign-up", requestOptions).then( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(response) {
        var resJson, res, err;
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(response.status == 201)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 3;
                return response.json();

              case 3:
                resJson = _context2.sent;
                console.log("Sign up response JSON: ", resJson);
                localStorage.setItem('jwt', resJson["token"]);
                router.push('/home');
                _context2.next = 14;
                break;

              case 9:
                _context2.next = 11;
                return response.json();

              case 11:
                res = _context2.sent;
                err = Object.values(res).toString();
                setErrorMessage(err);

              case 14:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    formType: "Sign up",
    handleSubmit: handleSubmit,
    setEmail: setEmail,
    setUsername: setUsername,
    setPassword: setPassword,
    errorMessage: errorMessage,
    styles: (_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_8___default())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(signUp, "ktQNiUKtmME9YtI1FNX9E20eDhM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC4yYWZiZDI3Njk4OWRhZDJlYmZjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1LLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSx3QkFDSEgscURBQUEsQ0FBdUIsRUFBdkIsQ0FERztBQUFBO0FBQUEsTUFDdEJLLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSx5QkFFR04scURBQUEsQ0FBdUIsRUFBdkIsQ0FGSDtBQUFBO0FBQUEsTUFFdEJPLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSx5QkFHR1IscURBQUEsQ0FBdUIsRUFBdkIsQ0FISDtBQUFBO0FBQUEsTUFHdEJTLFFBSHNCO0FBQUEsTUFHWkMsV0FIWTs7QUFBQSx5QkFJV1YscURBQUEsQ0FBdUIsRUFBdkIsQ0FKWDtBQUFBO0FBQUEsTUFJdEJXLFlBSnNCO0FBQUEsTUFJUkMsZUFKUTs7QUFLN0IsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4QjtBQUVBYSxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSw2U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCYixnQkFBQUEsaUVBQW1CLEdBQUdjLElBQXRCLENBQTJCLFVBQUNDLGVBQUQsRUFBcUI7QUFDOUMsc0JBQUlBLGVBQUosRUFBcUJKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLE9BQVo7QUFDdEIsaUJBRkQ7O0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRILFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFLQUEsSUFBQUEsU0FBUztBQUNWLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUEyQztBQUM5REEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLEVBQTRDaEIsUUFBNUMsRUFBc0RFLFFBQXREO0FBQ0EsUUFBTWUsY0FBYyxHQUFHO0FBQ3JCQyxNQUFBQSxNQUFNLEVBQUUsTUFEYTtBQUVyQkMsTUFBQUEsT0FBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRlk7QUFHckJDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJ4QixRQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJFLFFBQUFBLFFBQVEsRUFBRUEsUUFGUztBQUduQkUsUUFBQUEsUUFBUSxFQUFFQTtBQUhTLE9BQWY7QUFIZSxLQUF2QjtBQVVBcUIsSUFBQUEsS0FBSyxDQUFDLG1DQUFELEVBQXNDTixjQUF0QyxDQUFMLENBQ0dSLElBREg7QUFBQSw4U0FDUyxrQkFBT2UsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDREEsUUFBUSxDQUFDQyxNQUFULElBQW1CLEdBRGxCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBRW1CRCxRQUFRLENBQUNFLElBQVQsRUFGbkI7O0FBQUE7QUFFR0MsZ0JBQUFBLE9BRkg7QUFHSFosZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDVyxPQUF2QztBQUVBQyxnQkFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCRixPQUFPLENBQUMsT0FBRCxDQUFuQztBQUNBckIsZ0JBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLE9BQVo7QUFORztBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFRK0JhLFFBQVEsQ0FBQ0UsSUFBVCxFQVIvQjs7QUFBQTtBQVFHSSxnQkFBQUEsR0FSSDtBQVNHQyxnQkFBQUEsR0FUSCxHQVNpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNILEdBQWQsRUFBbUJJLFFBQW5CLEVBVGpCO0FBVUg3QixnQkFBQUEsZUFBZSxDQUFDMEIsR0FBRCxDQUFmOztBQVZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjRCxHQTVCRDs7QUE4QkEsc0JBQ0UsOERBQUMseURBQUQ7QUFDRSxZQUFRLEVBQUMsU0FEWDtBQUVFLGdCQUFZLEVBQUVuQixZQUZoQjtBQUdFLFlBQVEsRUFBRWIsUUFIWjtBQUlFLGVBQVcsRUFBRUUsV0FKZjtBQUtFLGVBQVcsRUFBRUUsV0FMZjtBQU1FLGdCQUFZLEVBQUVDLFlBTmhCO0FBT0UsVUFBTSxFQUFFYixrRUFBTUE7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0F6REQ7O0dBQU1LO1VBS1dGOzs7QUFzRGpCLCtEQUFlRSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24tdXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3NpZ25VcC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEF1dGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aEZvcm0nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzaWduVXBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aCdcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuIFxyXG5jb25zdCBzaWduVXA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigoaXNBdXRoZW50aWNhdGVkKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkgcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgY2hlY2tBdXRoKClcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjcmVkZW50aWFscyBlbnRlcmVkIGFyZTpcIiwgdXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaWduLXVwXCIsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAudGhlbiggYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ24gdXAgcmVzcG9uc2UgSlNPTjogXCIsIHJlc0pzb24pO1xyXG5cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCByZXNKc29uW1widG9rZW5cIl0pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJlczogc2lnblVwUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBlcnI6IHN0cmluZyA9IE9iamVjdC52YWx1ZXMocmVzKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPEF1dGhGb3JtIFxyXG4gICAgICBmb3JtVHlwZT1cIlNpZ24gdXBcIiBcclxuICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH0gXHJcbiAgICAgIHNldFVzZXJuYW1lPXtzZXRVc2VybmFtZX0gXHJcbiAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH0gXHJcbiAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxyXG4gICAgICBzdHlsZXM9e3N0eWxlc30gXHJcbiAgICAvPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgc2lnblVwO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQXV0aEZvcm0iLCJSZWFjdCIsInVzZVJvdXRlciIsImNoZWNrQXV0aEFuZEdldFVzZXIiLCJzaWduVXAiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInJvdXRlciIsInVzZUVmZmVjdCIsImNoZWNrQXV0aCIsInRoZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJyZXNKc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlcyIsImVyciIsIk9iamVjdCIsInZhbHVlcyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==