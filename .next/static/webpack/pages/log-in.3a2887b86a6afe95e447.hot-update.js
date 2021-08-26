"use strict";
self["webpackHotUpdate_N_E"]("pages/log-in",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjNhMjg4N2I4NmE2YWZlOTVlNDQ3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBeUI7QUFDMUQsTUFBTUMsS0FBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsQ0FBdEI7QUFDQSxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUVaLE1BQU1HLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsTUFBTSxFQUFFLEtBRGE7QUFFckJDLElBQUFBLE9BQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQjtBQUZZLEdBQXZCLENBSjBELENBUzFEOztBQUNBLFNBQU9DLEtBQUssQ0FBQyx3Q0FBd0NOLEtBQXpDLEVBQWdERyxjQUFoRCxDQUFMLENBQ0pJLElBREk7QUFBQSwyU0FDQyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0FBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQURuQjtBQUFBO0FBQUE7QUFBQTs7QUFFRkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFGRTtBQUFBLHFCQUdXSCxRQUFRLENBQUNJLElBQVQsRUFIWDs7QUFBQTtBQUFBOztBQUFBO0FBQUEsK0NBS0ssS0FMTDs7QUFBQTtBQU1IOztBQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQVNELENBbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJUeXBlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tBdXRoQW5kR2V0VXNlciA9ICgpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gIGlmICghdG9rZW4pIHJldHVybjtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9O1xuXG4gIC8vdmFyIHVzZXI6IEJvb2xlYW4gfCB1c2VyVHlwZVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC11c2VyL1wiICsgdG9rZW4sIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4uXCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJjaGVja0F1dGhBbmRHZXRVc2VyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=