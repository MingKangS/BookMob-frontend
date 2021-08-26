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


/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAuthAndGetUser": function() { return /* binding */ checkAuthAndGetUser; }
/* harmony export */ });
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var checkAuthAndGetUser = function checkAuthAndGetUser() {
  var token = localStorage.getItem('jwt');
  if (!token) return;
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }; //var user: Boolean | userType

  return fetch("http://localhost:8000/api/get-user/" + token, requestOptions).then( /*#__PURE__*/function () {
    var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(response) {
      return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(response.status == 200)) {
                _context.next = 7;
                break;
              }

              console.log("This user is already logged in.");
              _context.next = 4;
              return response.json();

            case 4:
              return _context.abrupt("return", _context.sent);

            case 7:
              return _context.abrupt("return", false);

            case 8:
              ;

            case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC5mMjBlZWI3YjcwOGMyZTljNTk1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1LLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSx3QkFDSEgscURBQUEsQ0FBdUIsRUFBdkIsQ0FERztBQUFBO0FBQUEsTUFDdEJLLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSx5QkFFR04scURBQUEsQ0FBdUIsRUFBdkIsQ0FGSDtBQUFBO0FBQUEsTUFFdEJPLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSx5QkFHR1IscURBQUEsQ0FBdUIsRUFBdkIsQ0FISDtBQUFBO0FBQUEsTUFHdEJTLFFBSHNCO0FBQUEsTUFHWkMsV0FIWTs7QUFBQSx5QkFJV1YscURBQUEsQ0FBdUIsRUFBdkIsQ0FKWDtBQUFBO0FBQUEsTUFJdEJXLFlBSnNCO0FBQUEsTUFJUkMsZUFKUTs7QUFLN0IsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4QjtBQUVBYSxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSw2U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCYixnQkFBQUEsaUVBQW1CLEdBQUdjLElBQXRCLENBQTJCLFVBQUNDLGVBQUQsRUFBcUI7QUFDOUMsc0JBQUlBLGVBQUosRUFBcUJKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLE9BQVo7QUFDdEIsaUJBRkQ7O0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRILFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFLQUEsSUFBQUEsU0FBUztBQUNWLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxF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RUFIWDs7QUFBQTtBQUFBOztBQUFBO0FBQUEsK0NBS0ssS0FMTDs7QUFBQTtBQU1IOztBQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQVNELENBbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24tdXAudHN4Iiwid2VicGFjazovL19OX0UvLi91dGlscy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zaWduVXAubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhGb3JtJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNpZ25VcFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hdXRoJ1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG4gXHJcbmNvbnN0IHNpZ25VcDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNoZWNrQXV0aEFuZEdldFVzZXIoKS50aGVuKChpc0F1dGhlbnRpY2F0ZWQpID0+IHtcclxuICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjaGVja0F1dGgoKVxyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNyZWRlbnRpYWxzIGVudGVyZWQgYXJlOlwiLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NpZ24tdXBcIiwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKCBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbiB1cCByZXNwb25zZSBKU09OOiBcIiwgcmVzSnNvbik7XHJcblxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHJlc0pzb25bXCJ0b2tlblwiXSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmVzOiBzaWduVXBSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnN0IGVycjogc3RyaW5nID0gT2JqZWN0LnZhbHVlcyhyZXMpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8QXV0aEZvcm0gXHJcbiAgICAgIGZvcm1UeXBlPVwiU2lnbiB1cFwiIFxyXG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgc2V0RW1haWw9e3NldEVtYWlsfSBcclxuICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfSBcclxuICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfSBcclxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XHJcbiAgICAgIHN0eWxlcz17c3R5bGVzfSBcclxuICAgIC8+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBzaWduVXA7XHJcbiIsImV4cG9ydCBjb25zdCBjaGVja0F1dGhBbmRHZXRVc2VyID0gKCk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdG9rZW46IFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgaWYgKCF0b2tlbikgcmV0dXJuO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIH07XG5cbiAgLy92YXIgdXNlcjogQm9vbGVhbiB8IHVzZXJUeXBlXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0LXVzZXIvXCIgKyB0b2tlbiwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpbi5cIik7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH07XG4gICAgfSk7XG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkF1dGhGb3JtIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJjaGVja0F1dGhBbmRHZXRVc2VyIiwic2lnblVwIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VFZmZlY3QiLCJjaGVja0F1dGgiLCJ0aGVuIiwiaXNBdXRoZW50aWNhdGVkIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwicmVzSnNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXMiLCJlcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0b1N0cmluZyIsInRva2VuIiwiZ2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=