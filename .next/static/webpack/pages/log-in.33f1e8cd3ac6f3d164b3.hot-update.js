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
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.checkAuthAndGetUser)().then(function (isAuth) {});

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

    isAuthenticated; // isAuthenticated().then((auth) => {
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
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjMzZjFlOGNkM2FjNmYzZDE2NGIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0lOLHFEQUFBLENBQXVCLEVBQXZCLENBREo7QUFBQTtBQUFBLE1BQ3JCUSxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBQUEseUJBRUlULHFEQUFBLENBQXVCLEVBQXZCLENBRko7QUFBQTtBQUFBLE1BRXJCVSxRQUZxQjtBQUFBLE1BRVhDLFdBRlc7O0FBQUEseUJBR1lYLHFEQUFBLENBQXVCLEVBQXZCLENBSFo7QUFBQTtBQUFBLE1BR3JCWSxZQUhxQjtBQUFBLE1BR1BDLGVBSE87O0FBSTVCLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWMsZUFBZTtBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEI7QUFDQTtBQUNBVixnQkFBQUEsaUVBQW1CLEdBQUdXLElBQXRCLENBQTJCLFVBQUNDLE1BQUQsRUFBWSxDQUV0QyxDQUZEOztBQUhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFmRixlQUFlO0FBQUE7QUFBQTtBQUFBLE9BQXJCOztBQVFBQSxJQUFBQSxlQUFlLENBVEQsQ0FVZDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVELEdBdkJRLEVBdUJOLEVBdkJNLENBQVQ7O0FBeUJBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBMkM7QUFDOURBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q2QsUUFBNUMsRUFBc0RFLFFBQXREO0FBQ0EsUUFBTWEsY0FBYyxHQUFHO0FBQ3JCQyxNQUFBQSxNQUFNLEVBQUUsTUFEYTtBQUVyQkMsTUFBQUEsT0FBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRlk7QUFHckJDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJwQixRQUFBQSxRQUFRLEVBQUVBLFFBRFM7QUFFbkJFLFFBQUFBLFFBQVEsRUFBRUE7QUFGUyxPQUFmO0FBSGUsS0FBdkI7QUFTQW1CLElBQUFBLEtBQUssQ0FBQyxrQ0FBRCxFQUFxQ04sY0FBckMsQ0FBTCxDQUNHUCxJQURIO0FBQUEsOFNBQ1Esa0JBQU9jLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0FBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQURuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVvQkQsUUFBUSxDQUFDRSxJQUFULEVBRnBCOztBQUFBO0FBRUlDLGdCQUFBQSxPQUZKO0FBR0ZaLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1csT0FBdEM7QUFFQUMsZ0JBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QkYsT0FBTyxDQUFDLE9BQUQsQ0FBbkM7QUFDQW5CLGdCQUFBQSxNQUFNLENBQUNzQixJQUFQLENBQVksT0FBWjtBQU5FO0FBQUE7O0FBQUE7QUFRRk4sZ0JBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQmhCLElBQWhCLENBQXFCLFVBQUNxQixJQUFELEVBQVU7QUFDN0J4QixrQkFBQUEsZUFBZSxDQUFDd0IsSUFBSSxDQUFDLGFBQUQsQ0FBTCxDQUFmO0FBQ0QsaUJBRkQ7O0FBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVELEdBNUJEOztBQThCQSxzQkFDRSw4REFBQyx5REFBRDtBQUNFLFlBQVEsRUFBQyxRQURYO0FBRUUsZ0JBQVksRUFBRW5CLFlBRmhCO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxlQUFXLEVBQUVULFdBSmY7QUFLRSxlQUFXLEVBQUVFLFdBTGY7QUFNRSxnQkFBWSxFQUFFQyxZQU5oQjtBQU9FLFVBQU0sRUFBRVYsaUVBQU1BO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBeEVEOztHQUFNSTtVQUlXSDs7O0FBc0VqQiwrREFBZUcsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dJbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhGb3JtJztcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuIFxyXG5jb25zdCBsb2dJbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gY29uc3QgaXNBdXRoID0gYXdhaXQgY2hlY2tBdXRoQW5kR2V0VXNlcjsgXHJcbiAgICAgIC8vIHJldHVybiBpc0F1dGhcclxuICAgICAgY2hlY2tBdXRoQW5kR2V0VXNlcigpLnRoZW4oKGlzQXV0aCkgPT4ge1xyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaXNBdXRoZW50aWNhdGVkXHJcbiAgICAvLyBpc0F1dGhlbnRpY2F0ZWQoKS50aGVuKChhdXRoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGF1dGgpXHJcbiAgICAvLyAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pXHJcbiAgICBcclxuICAgIC8vIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgIC8vICAgLy9yb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coaXNBdXRoZW50aWNhdGVkKVxyXG4gICAgLy8gfVxyXG5cclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjcmVkZW50aWFscyBlbnRlcmVkIGFyZTpcIiwgdXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZy1pblwiLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZyBpbiByZXNwb25zZSBKU09OOiBcIiwgcmVzSnNvbik7XHJcblxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHJlc0pzb25bXCJ0b2tlblwiXSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGRhdGFbXCJCYWQgUmVxdWVzdFwiXSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8QXV0aEZvcm0gXHJcbiAgICAgIGZvcm1UeXBlPVwiTG9nIGluXCIgXHJcbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBzZXRFbWFpbD17bnVsbH0gXHJcbiAgICAgIHNldFVzZXJuYW1lPXtzZXRVc2VybmFtZX0gXHJcbiAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH0gXHJcbiAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxyXG4gICAgICBzdHlsZXM9e3N0eWxlc30gXHJcbiAgICAvPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgbG9nSW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInN0eWxlcyIsInVzZVJvdXRlciIsIkF1dGhGb3JtIiwiY2hlY2tBdXRoQW5kR2V0VXNlciIsImxvZ0luIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInJvdXRlciIsImlzQXV0aGVudGljYXRlZCIsInRoZW4iLCJpc0F1dGgiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsInJlc0pzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9