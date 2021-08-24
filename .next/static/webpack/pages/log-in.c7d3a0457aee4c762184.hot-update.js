"use strict";
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\AuthForm.tsx",
    _this = undefined;



var AuthForm = function AuthForm(_ref) {
  var formType = _ref.formType,
      handleSubmit = _ref.handleSubmit,
      setEmail = _ref.setEmail,
      setUsername = _ref.setUsername,
      setPassword = _ref.setPassword,
      errorMessage = _ref.errorMessage,
      styles = _ref.styles;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: styles.logInForm,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: styles.formTitle,
          children: formType == "Log in" ? "Log in" : "Welcome to BookMob!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this), formType == "Sign up" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: styles.formGroup,
          "data-validate": "Please enter email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: styles.inputDescription,
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: styles.input,
            type: "email",
            name: "email",
            placeholder: "Enter your email",
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: styles.formGroup,
          "data-validate": "Please enter username",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: styles.inputDescription,
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: styles.input,
            type: "text",
            name: "username",
            placeholder: "Enter your username",
            onChange: function onChange(e) {
              return setUsername(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: styles.formGroup,
          "data-validate": "Please enter password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: styles.inputDescription,
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: styles.input,
            type: "password",
            name: "pass",
            placeholder: "Enter your password",
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: styles.formGroup,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: styles.formButton,
            onClick: function onClick(e) {
              return handleSubmit(e);
            },
            children: formType == "Log in" ? "Log in" : "Sign up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: styles.errMessage,
          children: [" ", errorMessage, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: styles.formSpan,
          children: formType == "Log in" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "txt1 p-b-9",
            children: ["Don\u2019t have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/sign-up",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: styles.a,
                children: "Sign up now"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 64
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 42
            }, _this), "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "txt1 p-b-9",
            children: ["Already have an account? Click here to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/log-in",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: styles.a,
                children: "log in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 79
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 58
            }, _this), "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLmM3ZDNhMDQ1N2FlZTRjNzYyMTg0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUF3RjtBQUFBLE1BQXRGQyxRQUFzRixRQUF0RkEsUUFBc0Y7QUFBQSxNQUE1RUMsWUFBNEUsUUFBNUVBLFlBQTRFO0FBQUEsTUFBOURDLFFBQThELFFBQTlEQSxRQUE4RDtBQUFBLE1BQXBEQyxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q0MsV0FBdUMsUUFBdkNBLFdBQXVDO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNoSSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLE1BQU0sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUVELE1BQU0sQ0FBQ0UsU0FBeEI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVGLE1BQU0sQ0FBQ0csU0FBdEI7QUFBQSxvQkFDR1QsUUFBUSxJQUFJLFFBQVosR0FBdUIsUUFBdkIsR0FBa0M7QUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU1JQSxRQUFRLElBQUksU0FBWixpQkFFQTtBQUFLLG1CQUFTLEVBQUVNLE1BQU0sQ0FBQ0ksU0FBdkI7QUFBa0MsMkJBQWMsb0JBQWhEO0FBQUEsa0NBQ0E7QUFBTSxxQkFBUyxFQUFFSixNQUFNLENBQUNLLGdCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQ0UscUJBQVMsRUFBRUwsTUFBTSxDQUFDTSxLQURwQjtBQUVFLGdCQUFJLEVBQUMsT0FGUDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLHVCQUFXLEVBQUMsa0JBSmQ7QUFLRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEscUJBQU9YLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFvQkk7QUFBSyxtQkFBUyxFQUFFVCxNQUFNLENBQUNJLFNBQXZCO0FBQWtDLDJCQUFjLHVCQUFoRDtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBRUosTUFBTSxDQUFDSyxnQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUVMLE1BQU0sQ0FBQ00sS0FEcEI7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxnQkFBSSxFQUFDLFVBSFA7QUFJRSx1QkFBVyxFQUFDLHFCQUpkO0FBS0Usb0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHFCQUFPVixXQUFXLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkosZUErQkU7QUFBSyxtQkFBUyxFQUFFVCxNQUFNLENBQUNJLFNBQXZCO0FBQWtDLDJCQUFnQix1QkFBbEQ7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssZ0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFFTCxNQUFNLENBQUNNLEtBRHBCO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBR0UsZ0JBQUksRUFBQyxNQUhQO0FBSUUsdUJBQVcsRUFBQyxxQkFKZDtBQUtFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxxQkFBT1QsV0FBVyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGLGVBMENFO0FBQUssbUJBQVMsRUFBRVQsTUFBTSxDQUFDSSxTQUF2QjtBQUFBLGlDQUNFO0FBQVEscUJBQVMsRUFBRUosTUFBTSxDQUFDVSxVQUExQjtBQUFzQyxtQkFBTyxFQUFFLGlCQUFDSCxDQUFEO0FBQUEscUJBQU9aLFlBQVksQ0FBQ1ksQ0FBRCxDQUFuQjtBQUFBLGFBQS9DO0FBQUEsc0JBQ0diLFFBQVEsSUFBSSxRQUFaLEdBQXVCLFFBQXZCLEdBQWtDO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFDRixFQWdESUssWUFBWSxpQkFBSTtBQUFNLG1CQUFTLEVBQUVDLE1BQU0sQ0FBQ1csVUFBeEI7QUFBQSwwQkFBdUNaLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoRHBCLGVBa0RFO0FBQUssbUJBQVMsRUFBRUMsTUFBTSxDQUFDWSxRQUF2QjtBQUFBLG9CQUVLbEIsUUFBUSxJQUFJLFFBQVosZ0JBQ0M7QUFBTSxxQkFBUyxFQUFDLFlBQWhCO0FBQUEsb0VBQ3lCLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQXNCO0FBQUcseUJBQVMsRUFBRU0sTUFBTSxDQUFDYSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZ0JBS0M7QUFBTSxxQkFBUyxFQUFDLFlBQWhCO0FBQUEsK0VBQ3lDLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxTQUFYO0FBQUEscUNBQXFCO0FBQUcseUJBQVMsRUFBRWIsTUFBTSxDQUFDYSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBdkVEOztLQUFNcEI7QUF5RU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXV0aEZvcm1Qcm9wcyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hdXRoXCI7XHJcbiBcclxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPEF1dGhGb3JtUHJvcHM+ID0gKHtmb3JtVHlwZSwgaGFuZGxlU3VibWl0LCBzZXRFbWFpbCwgc2V0VXNlcm5hbWUsIHNldFBhc3N3b3JkLCBlcnJvck1lc3NhZ2UsIHN0eWxlc30pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9nSW5Gb3JtfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtVGl0bGV9PlxyXG4gICAgICAgICAgICB7Zm9ybVR5cGUgPT0gXCJMb2cgaW5cIiA/IFwiTG9nIGluXCIgOiBcIldlbGNvbWUgdG8gQm9va01vYiFcIn1cclxuICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JtVHlwZSA9PSBcIlNpZ24gdXBcIiAmJlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfSBkYXRhLXZhbGlkYXRlPVwiUGxlYXNlIGVudGVyIGVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RGVzY3JpcHRpb259PkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfSBkYXRhLXZhbGlkYXRlPVwiUGxlYXNlIGVudGVyIHVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXREZXNjcmlwdGlvbn0+VXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfSBkYXRhLXZhbGlkYXRlID0gXCJQbGVhc2UgZW50ZXIgcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXREZXNjcmlwdGlvbn0+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3NcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b259IG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgIHtmb3JtVHlwZSA9PSBcIkxvZyBpblwiID8gXCJMb2cgaW5cIiA6IFwiU2lnbiB1cFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsgZXJyb3JNZXNzYWdlICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVyck1lc3NhZ2V9PiB7IGVycm9yTWVzc2FnZSB9IDwvc3Bhbj4gfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVNwYW59PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7Zm9ybVR5cGUgPT0gXCJMb2cgaW5cIiA/IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0MSBwLWItOVwiPlxyXG4gICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWduLXVwXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuYX0+U2lnbiB1cCBub3c8L2E+PC9MaW5rPiFcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0MSBwLWItOVwiPlxyXG4gICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gQ2xpY2sgaGVyZSB0byA8TGluayBocmVmPVwiL2xvZy1pblwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmF9PmxvZyBpbjwvYT48L0xpbms+LlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtOyJdLCJuYW1lcyI6WyJMaW5rIiwiQXV0aEZvcm0iLCJmb3JtVHlwZSIsImhhbmRsZVN1Ym1pdCIsInNldEVtYWlsIiwic2V0VXNlcm5hbWUiLCJzZXRQYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImxvZ0luRm9ybSIsImZvcm1UaXRsZSIsImZvcm1Hcm91cCIsImlucHV0RGVzY3JpcHRpb24iLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1CdXR0b24iLCJlcnJNZXNzYWdlIiwiZm9ybVNwYW4iLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==