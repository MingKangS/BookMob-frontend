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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjJhMzM5NTEzNGFlNDk4ZDMwZGNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUF3RjtBQUFBLE1BQXRGQyxRQUFzRixRQUF0RkEsUUFBc0Y7QUFBQSxNQUE1RUMsWUFBNEUsUUFBNUVBLFlBQTRFO0FBQUEsTUFBOURDLFFBQThELFFBQTlEQSxRQUE4RDtBQUFBLE1BQXBEQyxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q0MsV0FBdUMsUUFBdkNBLFdBQXVDO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNoSSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLE1BQU0sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLG9CQUNHUCxRQUFRLElBQUksUUFBWixHQUF1QixRQUF2QixHQUFrQztBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBTUlBLFFBQVEsSUFBSSxTQUFaLGlCQUVBO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLDJCQUFjLG9CQUF6QztBQUFBLGtDQUNBO0FBQU0scUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUNFLHFCQUFTLEVBQUMsT0FEWjtBQUVFLGdCQUFJLEVBQUMsT0FGUDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLHVCQUFXLEVBQUMsa0JBSmQ7QUFLRSx3QkFBWSxFQUFDLEtBTGY7QUFNRSxvQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEscUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxD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LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBdXRoRm9ybVByb3BzIGZyb20gXCIuLi9pbnRlcmZhY2VzL2F1dGhcIjtcclxuIFxyXG5jb25zdCBBdXRoRm9ybTogUmVhY3QuRkM8QXV0aEZvcm1Qcm9wcz4gPSAoe2Zvcm1UeXBlLCBoYW5kbGVTdWJtaXQsIHNldEVtYWlsLCBzZXRVc2VybmFtZSwgc2V0UGFzc3dvcmQsIGVycm9yTWVzc2FnZSwgc3R5bGVzfSkgPT4ge1xyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dJbkZvcm1cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3JtVGl0bGVcIj5cclxuICAgICAgICAgICAge2Zvcm1UeXBlID09IFwiTG9nIGluXCIgPyBcIkxvZyBpblwiIDogXCJXZWxjb21lIHRvIEJvb2tNb2IhXCJ9XHJcbiAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9ybVR5cGUgPT0gXCJTaWduIHVwXCIgJiZcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Hcm91cFwiIGRhdGEtdmFsaWRhdGU9XCJQbGVhc2UgZW50ZXIgZW1haWxcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXREZXNjcmlwdGlvblwiPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtR3JvdXBcIiBkYXRhLXZhbGlkYXRlPVwiUGxlYXNlIGVudGVyIHVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXREZXNjcmlwdGlvblwiPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Hcm91cFwiIGRhdGEtdmFsaWRhdGUgPSBcIlBsZWFzZSBlbnRlciBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dERlc2NyaXB0aW9uXCI+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3NcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtQnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAge2Zvcm1UeXBlID09IFwiTG9nIGluXCIgPyBcIkxvZyBpblwiIDogXCJTaWduIHVwXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgeyBlcnJvck1lc3NhZ2UgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyTWVzc2FnZVwiPiB7IGVycm9yTWVzc2FnZSB9IDwvc3Bhbj4gfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVNwYW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge2Zvcm1UeXBlID09IFwiTG9nIGluXCIgPyBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dDEgcC1iLTlcIj5cclxuICAgICAgICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IDxiPjxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPjxhIGNsYXNzTmFtZT1cImFcIj5TaWduIHVwIG5vdzwvYT48L0xpbms+PC9iPiFcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0MSBwLWItOVwiPlxyXG4gICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gQ2xpY2sgaGVyZSB0byA8TGluayBocmVmPVwiL2xvZy1pblwiPjxhIGNsYXNzTmFtZT1cImFcIj5sb2cgaW48L2E+PC9MaW5rPi5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTsiXSwibmFtZXMiOlsiTGluayIsIkF1dGhGb3JtIiwiZm9ybVR5cGUiLCJoYW5kbGVTdWJtaXQiLCJzZXRFbWFpbCIsInNldFVzZXJuYW1lIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9