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
            lineNumber: 29,
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
            lineNumber: 30,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formGroup",
          "data-validate": "Please enter password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inputDescription",
            children: ">Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
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
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formGroup",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "formButton",
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
          className: "errMessage",
          children: [" ", errorMessage, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formSpan",
          children: formType == "Log in" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "txt1 p-b-9",
            children: ["Don\u2019t have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/sign-up",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLmM0NWI1ZGU2OGU0NWMxOTU5YmI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUF3RjtBQUFBLE1BQXRGQyxRQUFzRixRQUF0RkEsUUFBc0Y7QUFBQSxNQUE1RUMsWUFBNEUsUUFBNUVBLFlBQTRFO0FBQUEsTUFBOURDLFFBQThELFFBQTlEQSxRQUE4RDtBQUFBLE1BQXBEQyxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q0MsV0FBdUMsUUFBdkNBLFdBQXVDO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNoSSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLE1BQU0sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLG9CQUNHUCxRQUFRLElBQUksUUFBWixHQUF1QixRQUF2QixHQUFrQztBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBTUlBLFFBQVEsSUFBSSxTQUFaLGlCQUVBO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLDJCQUFjLG9CQUF6QztBQUFBLGtDQUNBO0FBQU0scUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUNFLHFCQUFTLEVBQUMsT0FEWjtBQUVFLGdCQUFJLEVBQUMsT0FGUDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLHVCQUFXLEVBQUMsa0JBSmQ7QUFLRSxvQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEscUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFvQkk7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBMkIsMkJBQWMsdUJBQXpDO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UscUJBQVMsRUFBQyxPQURaO0FBRUUsZ0JBQUksRUFBQyxNQUZQO0FBR0UsZ0JBQUksRUFBQyxVQUhQO0FBSUUsdUJBQVcsRUFBQyxxQkFKZDtBQUtFLG9CQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSxxQkFBT0wsV0FBVyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKLGVBK0JFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLDJCQUFnQix1QkFBM0M7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFDLE9BRFo7QUFFRSxnQkFBSSxFQUFDLFVBRlA7QUFHRSxnQkFBSSxFQUFDLE1BSFA7QUFJRSx1QkFBVyxFQUFDLHFCQUpkO0FBS0Usb0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHFCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkYsZUEwQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUMsWUFBbEI7QUFBK0IsbUJBQU8sRUFBRSxpQkFBQ0YsQ0FBRDtBQUFBLHFCQUFPUCxZQUFZLENBQUNPLENBQUQsQ0FBbkI7QUFBQSxhQUF4QztBQUFBLHNCQUNHUixRQUFRLElBQUksUUFBWixHQUF1QixRQUF2QixHQUFrQztBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0YsRUFnRElLLFlBQVksaUJBQUk7QUFBTSxtQkFBUyxFQUFDLFlBQWhCO0FBQUEsMEJBQWdDQSxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERwQixlQWtERTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLG9CQUVLTCxRQUFRLElBQUksUUFBWixnQkFDQztBQUFNLHFCQUFTLEVBQUMsWUFBaEI7QUFBQSxvRUFDeUIsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQSxxQ0FBc0I7QUFBRyx5QkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGdCQUtDO0FBQU0scUJBQVMsRUFBQyxZQUFoQjtBQUFBLCtFQUN5Qyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsU0FBWDtBQUFBLHFDQUFxQjtBQUFHLHlCQUFTLEVBQUVNLE1BQU0sQ0FBQ0ssQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNFRCxDQXZFRDs7S0FBTVo7QUF5RU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXV0aEZvcm1Qcm9wcyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hdXRoXCI7XHJcbiBcclxuY29uc3QgQXV0aEZvcm06IFJlYWN0LkZDPEF1dGhGb3JtUHJvcHM+ID0gKHtmb3JtVHlwZSwgaGFuZGxlU3VibWl0LCBzZXRFbWFpbCwgc2V0VXNlcm5hbWUsIHNldFBhc3N3b3JkLCBlcnJvck1lc3NhZ2UsIHN0eWxlc30pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9nSW5Gb3JtXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybVRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtmb3JtVHlwZSA9PSBcIkxvZyBpblwiID8gXCJMb2cgaW5cIiA6IFwiV2VsY29tZSB0byBCb29rTW9iIVwifVxyXG4gICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlID09IFwiU2lnbiB1cFwiICYmXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtR3JvdXBcIiBkYXRhLXZhbGlkYXRlPVwiUGxlYXNlIGVudGVyIGVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0RGVzY3JpcHRpb25cIj5FbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Hcm91cFwiIGRhdGEtdmFsaWRhdGU9XCJQbGVhc2UgZW50ZXIgdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dERlc2NyaXB0aW9uXCI+VXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUdyb3VwXCIgZGF0YS12YWxpZGF0ZSA9IFwiUGxlYXNlIGVudGVyIHBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0RGVzY3JpcHRpb25cIj4+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3NcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtQnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAge2Zvcm1UeXBlID09IFwiTG9nIGluXCIgPyBcIkxvZyBpblwiIDogXCJTaWduIHVwXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgeyBlcnJvck1lc3NhZ2UgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyTWVzc2FnZVwiPiB7IGVycm9yTWVzc2FnZSB9IDwvc3Bhbj4gfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVNwYW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge2Zvcm1UeXBlID09IFwiTG9nIGluXCIgPyBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dDEgcC1iLTlcIj5cclxuICAgICAgICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPjxhIGNsYXNzTmFtZT1cIlwiPlNpZ24gdXAgbm93PC9hPjwvTGluaz4hXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dDEgcC1iLTlcIj5cclxuICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IENsaWNrIGhlcmUgdG8gPExpbmsgaHJlZj1cIi9sb2ctaW5cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5hfT5sb2cgaW48L2E+PC9MaW5rPi5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTsiXSwibmFtZXMiOlsiTGluayIsIkF1dGhGb3JtIiwiZm9ybVR5cGUiLCJoYW5kbGVTdWJtaXQiLCJzZXRFbWFpbCIsInNldFVzZXJuYW1lIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==