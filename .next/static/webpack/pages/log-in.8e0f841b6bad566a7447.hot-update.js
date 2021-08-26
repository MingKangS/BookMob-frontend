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
    var isAuthenticated = /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const isAuth = await checkAuthAndGetUser; 
                // return isAuth
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.checkAuthAndGetUser)().then(function (isAuth) {
                  console.log(isAuth);
                  if (isAuth) router.push('/home');
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function isAuthenticated() {
        return _ref.apply(this, arguments);
      };
    }();

    isAuthenticated(); // isAuthenticated().then((auth) => {
    //   console.log(auth)
    //   if (auth) {
    //     router.push('/home');
    //   }
    // })
    // if (isAuthenticated) {
    //   //router.push('/home');
    //   console.log(isAuthenticated)
    // }
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
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjhlMGY4NDFiNmJhZDU2NmE3NDQ3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0lOLHFEQUFBLENBQXVCLEVBQXZCLENBREo7QUFBQTtBQUFBLE1BQ3JCUSxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBQUEseUJBRUlULHFEQUFBLENBQXVCLEVBQXZCLENBRko7QUFBQTtBQUFBLE1BRXJCVSxRQUZxQjtBQUFBLE1BRVhDLFdBRlc7O0FBQUEseUJBR1lYLHFEQUFBLENBQXVCLEVBQXZCLENBSFo7QUFBQTtBQUFBLE1BR3JCWSxZQUhxQjtBQUFBLE1BR1BDLGVBSE87O0FBSTVCLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWMsZUFBcUI7QUFBQSw2U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVCO0FBQ0E7QUFDQVYsZ0JBQUFBLGlFQUFtQixHQUFHVyxJQUF0QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDckNDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLHNCQUFJQSxNQUFKLEVBQVlILE1BQU0sQ0FBQ00sSUFBUCxDQUFZLE9BQVo7QUFDYixpQkFIRDs7QUFINEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBckJMLGVBQXFCO0FBQUE7QUFBQTtBQUFBLE9BQTNCOztBQVNBQSxJQUFBQSxlQUFlLEdBVkQsQ0FXZDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVELEdBeEJRLEVBd0JOLEVBeEJNLENBQVQ7O0FBMEJBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBMkM7QUFDOURBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q1gsUUFBNUMsRUFBc0RFLFFBQXREO0FBQ0EsUUFBTWMsY0FBYyxHQUFHO0FBQ3JCQyxNQUFBQSxNQUFNLEVBQUUsTUFEYTtBQUVyQkMsTUFBQUEsT0FBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRlk7QUFHckJDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJyQixRQUFBQSxRQUFRLEVBQUVBLFFBRFM7QUFFbkJFLFFBQUFBLFFBQVEsRUFBRUE7QUFGUyxPQUFmO0FBSGUsS0FBdkI7QUFTQW9CLElBQUFBLEtBQUssQ0FBQyxrQ0FBRCxFQUFxQ04sY0FBckMsQ0FBTCxDQUNHUixJQURIO0FBQUEsOFNBQ1Esa0JBQU9lLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0FBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQURuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVvQkQsUUFBUSxDQUFDRSxJQUFULEVBRnBCOztBQUFBO0FBRUlDLGdCQUFBQSxPQUZKO0FBR0ZoQixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NlLE9BQXRDO0FBRUFDLGdCQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEJGLE9BQU8sQ0FBQyxPQUFELENBQW5DO0FBQ0FwQixnQkFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVksT0FBWjtBQU5FO0FBQUE7O0FBQUE7QUFRRlcsZ0JBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQmpCLElBQWhCLENBQXFCLFVBQUNxQixJQUFELEVBQVU7QUFDN0J4QixrQkFBQUEsZUFBZSxDQUFDd0IsSUFBSSxDQUFDLGFBQUQsQ0FBTCxDQUFmO0FBQ0QsaUJBRkQ7O0FBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVELEdBNUJEOztBQThCQSxzQkFDRSw4REFBQyx5REFBRDtBQUNFLFlBQVEsRUFBQyxRQURYO0FBRUUsZ0JBQVksRUFBRWhCLFlBRmhCO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxlQUFXLEVBQUVaLFdBSmY7QUFLRSxlQUFXLEVBQUVFLFdBTGY7QUFNRSxnQkFBWSxFQUFFQyxZQU5oQjtBQU9FLFVBQU0sRUFBRVYsaUVBQU1BO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBekVEOztHQUFNSTtVQUlXSDs7O0FBdUVqQiwrREFBZUcsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dJbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhGb3JtJztcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuIFxyXG5jb25zdCBsb2dJbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZDogdm9pZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gY29uc3QgaXNBdXRoID0gYXdhaXQgY2hlY2tBdXRoQW5kR2V0VXNlcjsgXHJcbiAgICAgIC8vIHJldHVybiBpc0F1dGhcclxuICAgICAgY2hlY2tBdXRoQW5kR2V0VXNlcigpLnRoZW4oKGlzQXV0aCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzQXV0aClcclxuICAgICAgICBpZiAoaXNBdXRoKSByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaXNBdXRoZW50aWNhdGVkKClcclxuICAgIC8vIGlzQXV0aGVudGljYXRlZCgpLnRoZW4oKGF1dGgpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coYXV0aClcclxuICAgIC8vICAgaWYgKGF1dGgpIHtcclxuICAgICAgICBcclxuICAgIC8vICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIFxyXG4gICAgLy8gaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgLy8gICAvL3JvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhpc0F1dGhlbnRpY2F0ZWQpXHJcbiAgICAvLyB9XHJcblxyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGNyZWRlbnRpYWxzIGVudGVyZWQgYXJlOlwiLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbG9nLWluXCIsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nIGluIHJlc3BvbnNlIEpTT046IFwiLCByZXNKc29uKTtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzSnNvbltcInRva2VuXCJdKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZGF0YVtcIkJhZCBSZXF1ZXN0XCJdKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxBdXRoRm9ybSBcclxuICAgICAgZm9ybVR5cGU9XCJMb2cgaW5cIiBcclxuICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIHNldEVtYWlsPXtudWxsfSBcclxuICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfSBcclxuICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfSBcclxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XHJcbiAgICAgIHN0eWxlcz17c3R5bGVzfSBcclxuICAgIC8+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBsb2dJbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlUm91dGVyIiwiQXV0aEZvcm0iLCJjaGVja0F1dGhBbmRHZXRVc2VyIiwibG9nSW4iLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwicm91dGVyIiwiaXNBdXRoZW50aWNhdGVkIiwidGhlbiIsImlzQXV0aCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsInJlc0pzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=