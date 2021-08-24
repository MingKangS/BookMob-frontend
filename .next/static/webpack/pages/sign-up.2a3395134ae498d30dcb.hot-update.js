"use strict";
self["webpackHotUpdate_N_E"]("pages/sign-up",{

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
        className: "logInForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "formTitle",
          children: formType == "Log in" ? "Log in" : "Welcome to BookMob!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this), formType == "Sign up" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formGroup",
          "data-validate": "Please enter email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inputDescription",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "input",
            type: "email",
            name: "email",
            placeholder: "Enter your email",
            autocomplete: "off",
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
          className: "formGroup",
          "data-validate": "Please enter username",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inputDescription",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "input",
            type: "text",
            name: "username",
            placeholder: "Enter your username",
            onChange: function onChange(e) {
              return setUsername(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formGroup",
          "data-validate": "Please enter password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inputDescription",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "input",
            type: "password",
            name: "pass",
            placeholder: "Enter your password",
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "formButton",
            onClick: function onClick(e) {
              return handleSubmit(e);
            },
            children: formType == "Log in" ? "Log in" : "Sign up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "errMessage",
          children: [" ", errorMessage, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formSpan",
          children: formType == "Log in" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "txt1 p-b-9",
            children: ["Don\u2019t have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/sign-up",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "a",
                  children: "Sign up now"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 67
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 42
            }, _this), "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "txt1 p-b-9",
            children: ["Already have an account? Click here to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/log-in",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "a",
                children: "log in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 79
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 58
            }, _this), "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC4yYTMzOTUxMzRhZTQ5OGQzMGRjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBd0Y7QUFBQSxNQUF0RkMsUUFBc0YsUUFBdEZBLFFBQXNGO0FBQUEsTUFBNUVDLFlBQTRFLFFBQTVFQSxZQUE0RTtBQUFBLE1BQTlEQyxRQUE4RCxRQUE5REEsUUFBOEQ7QUFBQSxNQUFwREMsV0FBb0QsUUFBcERBLFdBQW9EO0FBQUEsTUFBdkNDLFdBQXVDLFFBQXZDQSxXQUF1QztBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDaEksc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxNQUFNLENBQUNDLFNBQXZCO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxvQkFDR1AsUUFBUSxJQUFJLFFBQVosR0FBdUIsUUFBdkIsR0FBa0M7QUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU1JQSxRQUFRLElBQUksU0FBWixpQkFFQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQiwyQkFBYyxvQkFBekM7QUFBQSxrQ0FDQTtBQUFNLHFCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFDRSxxQkFBUyxFQUFDLE9BRFo7QUFFRSxnQkFBSSxFQUFDLE9BRlA7QUFHRSxnQkFBSSxFQUFDLE9BSFA7QUFJRSx1QkFBVyxFQUFDLGtCQUpkO0FBS0Usd0JBQVksRUFBQyxLQUxmO0FBTUUsb0JBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtBQUFBLHFCQUFPTixRQUFRLENBQUNNLENBQUMs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bS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXV0aEZvcm1Qcm9wcyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hdXRoXCI7XHJcbiBcclxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPEF1dGhGb3JtUHJvcHM+ID0gKHtmb3JtVHlwZSwgaGFuZGxlU3VibWl0LCBzZXRFbWFpbCwgc2V0VXNlcm5hbWUsIHNldFBhc3N3b3JkLCBlcnJvck1lc3NhZ2UsIHN0eWxlc30pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9nSW5Gb3JtXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybVRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtmb3JtVHlwZSA9PSBcIkxvZyBpblwiID8gXCJMb2cgaW5cIiA6IFwiV2VsY29tZSB0byBCb29rTW9iIVwifVxyXG4gICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlID09IFwiU2lnbiB1cFwiICYmXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtR3JvdXBcIiBkYXRhLXZhbGlkYXRlPVwiUGxlYXNlIGVudGVyIGVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0RGVzY3JpcHRpb25cIj5FbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUdyb3VwXCIgZGF0YS12YWxpZGF0ZT1cIlBsZWFzZSBlbnRlciB1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0RGVzY3JpcHRpb25cIj5Vc2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtR3JvdXBcIiBkYXRhLXZhbGlkYXRlID0gXCJQbGVhc2UgZW50ZXIgcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXREZXNjcmlwdGlvblwiPlBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzXCIgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybUJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgIHtmb3JtVHlwZSA9PSBcIkxvZyBpblwiID8gXCJMb2cgaW5cIiA6IFwiU2lnbiB1cFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsgZXJyb3JNZXNzYWdlICYmIDxzcGFuIGNsYXNzTmFtZT1cImVyck1lc3NhZ2VcIj4geyBlcnJvck1lc3NhZ2UgfSA8L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1TcGFuXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHtmb3JtVHlwZSA9PSBcIkxvZyBpblwiID8gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHQxIHAtYi05XCI+XHJcbiAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyA8Yj48TGluayBocmVmPVwiL3NpZ24tdXBcIj48YSBjbGFzc05hbWU9XCJhXCI+U2lnbiB1cCBub3c8L2E+PC9MaW5rPjwvYj4hXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dDEgcC1iLTlcIj5cclxuICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IENsaWNrIGhlcmUgdG8gPExpbmsgaHJlZj1cIi9sb2ctaW5cIj48YSBjbGFzc05hbWU9XCJhXCI+bG9nIGluPC9hPjwvTGluaz4uXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07Il0sIm5hbWVzIjpbIkxpbmsiLCJBdXRoRm9ybSIsImZvcm1UeXBlIiwiaGFuZGxlU3VibWl0Iiwic2V0RW1haWwiLCJzZXRVc2VybmFtZSIsInNldFBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==