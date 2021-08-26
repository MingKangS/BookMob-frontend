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
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/signUp.module.css */ "./styles/signUp.module.css");
/* harmony import */ var _styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AuthForm */ "./components/AuthForm.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\sign-up.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var signUp = function signUp() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var checkAuth = /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.checkAuthAndGetUser)().then(function (isAuthenticated) {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_3__.default, {
    formType: "Sign up",
    handleSubmit: handleSubmit,
    setEmail: setEmail,
    setUsername: setUsername,
    setPassword: setPassword,
    errorMessage: errorMessage,
    styles: (_styles_signUp_module_css__WEBPACK_IMPORTED_MODULE_7___default())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(signUp, "ktQNiUKtmME9YtI1FNX9E20eDhM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC45YTU2MWJlMGVmZDdlOGU4ODg0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hKLCtDQUFRLENBQVMsRUFBVCxDQURMO0FBQUEsTUFDdEJLLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFR04sK0NBQVEsQ0FBUyxFQUFULENBRlg7QUFBQSxNQUV0Qk8sUUFGc0I7QUFBQSxNQUVaQyxXQUZZOztBQUFBLG1CQUdHUiwrQ0FBUSxDQUFTLEVBQVQsQ0FIWDtBQUFBLE1BR3RCUyxRQUhzQjtBQUFBLE1BR1pDLFdBSFk7O0FBQUEsbUJBSVdWLCtDQUFRLENBQVMsRUFBVCxDQUpuQjtBQUFBLE1BSXRCVyxZQUpzQjtBQUFBLE1BSVJDLGVBSlE7O0FBSzdCLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWEsU0FBUztBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJYLGdCQUFBQSxpRUFBbUIsR0FBR1ksSUFBdEIsQ0FBMkIsVUFBQ0MsZUFBRCxFQUFxQjtBQUM5QyxzQkFBSUEsZUFBSixFQUFxQkgsTUFBTSxDQUFDSSxJQUFQLENBQVksT0FBWjtBQUN0QixpQkFGRDs7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEgsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUtBQSxJQUFBQSxTQUFTO0FBQ1YsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQTJDO0FBQzlEQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNENmLFFBQTVDLEVBQXNERSxRQUF0RDtBQUNBLFFBQU1jLGNBQWMsR0FBRztBQUNyQkMsTUFBQUEsTUFBTSxFQUFFLE1BRGE7QUFFckJDLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZZO0FBR3JCQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CdkIsUUFBQUEsS0FBSyxFQUFFQSxLQURZO0FBRW5CRSxRQUFBQSxRQUFRLEVBQUVBLFFBRlM7QUFHbkJFLFFBQUFBLFFBQVEsRUFBRUE7QUFIUyxPQUFmO0FBSGUsS0FBdkI7QUFVQW9CLElBQUFBLEtBQUssQ0FBQyxtQ0FBRCxFQUFzQ04sY0FBdEMsQ0FBTCxDQUNHUixJQURIO0FBQUEsOFNBQ1Msa0JBQU9lLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0RBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQURsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVtQkQsUUFBUSxDQUFDRSxJQUFULEVBRm5COztBQUFBO0FBRUdDLGdCQUFBQSxPQUZIO0FBR0haLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q1csT0FBdkM7QUFFQUMsZ0JBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QkYsT0FBTyxDQUFDLE9BQUQsQ0FBbkM7QUFDQXBCLGdCQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxPQUFaO0FBTkc7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBUStCYSxRQUFRLENBQUNFLElBQVQsRUFSL0I7O0FBQUE7QUFRR0ksZ0JBQUFBLEdBUkg7QUFTR0MsZ0JBQUFBLEdBVEgsR0FTaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxHQUFkLEVBQW1CSSxRQUFuQixFQVRqQjtBQVVINUIsZ0JBQUFBLGVBQWUsQ0FBQ3lCLEdBQUQsQ0FBZjs7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0QsR0E1QkQ7O0FBOEJBLHNCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsWUFBUSxFQUFDLFNBRFg7QUFFRSxnQkFBWSxFQUFFbkIsWUFGaEI7QUFHRSxZQUFRLEVBQUVaLFFBSFo7QUFJRSxlQUFXLEVBQUVFLFdBSmY7QUFLRSxlQUFXLEVBQUVFLFdBTGY7QUFNRSxnQkFBWSxFQUFFQyxZQU5oQjtBQU9FLFVBQU0sRUFBRWQsa0VBQU1BO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBekREOztHQUFNTztVQUtXRjs7O0FBc0RqQiwrREFBZUUsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLXVwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zaWduVXAubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhGb3JtJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2lnblVwUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2F1dGgnXHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbiBcclxuY29uc3Qgc2lnblVwOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPFN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY2hlY2tBdXRoQW5kR2V0VXNlcigpLnRoZW4oKGlzQXV0aGVudGljYXRlZCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNoZWNrQXV0aCgpXHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaGUgY3JlZGVudGlhbHMgZW50ZXJlZCBhcmU6XCIsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2lnbi11cFwiLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgLnRoZW4oIGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaWduIHVwIHJlc3BvbnNlIEpTT046IFwiLCByZXNKc29uKTtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzSnNvbltcInRva2VuXCJdKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXM6IHNpZ25VcFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QgZXJyOiBzdHJpbmcgPSBPYmplY3QudmFsdWVzKHJlcykudG9TdHJpbmcoKTtcclxuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxBdXRoRm9ybSBcclxuICAgICAgZm9ybVR5cGU9XCJTaWduIHVwXCIgXHJcbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBzZXRFbWFpbD17c2V0RW1haWx9IFxyXG4gICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9IFxyXG4gICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9IFxyXG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cclxuICAgICAgc3R5bGVzPXtzdHlsZXN9IFxyXG4gICAgLz5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25VcDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkF1dGhGb3JtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImNoZWNrQXV0aEFuZEdldFVzZXIiLCJzaWduVXAiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJyb3V0ZXIiLCJjaGVja0F1dGgiLCJ0aGVuIiwiaXNBdXRoZW50aWNhdGVkIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwicmVzSnNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXMiLCJlcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=