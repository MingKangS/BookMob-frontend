"use strict";
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/SearchTwoTone */ "./node_modules/@material-ui/icons/SearchTwoTone.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\SearchBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var SearchBar = function SearchBar(_ref) {
  _s();

  var styles = _ref.styles,
      setSearchValue = _ref.setSearchValue;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      input = _useState[0],
      setInput = _useState[1];

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    setSearchValue(input);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    autoComplete: "off",
    className: styles.searchBar,
    onSubmit: function onSubmit(e) {
      handleFormSubmit(e);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: styles.searchInput,
      type: "text",
      name: "search",
      placeholder: "Search by title or seller",
      onChange: function onChange(e) {
        return setInput(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2__.default, {
      classes: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: styles.searchButton,
      type: "submit",
      value: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(SearchBar, "RL+Zbs2TIka0YpcBOJptmHqCgYA=");

_c = SearchBar;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

var _c;

$RefreshReg$(_c, "SearchBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4zODlkOTAwZjU4ZjI5Nzc3NTJlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1HLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BQThCO0FBQUE7O0FBQUEsTUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLE1BQXBCQyxjQUFvQixRQUFwQkEsY0FBb0I7O0FBQUEsa0JBQzlDSiwrQ0FBUSxDQUFTLEVBQVQsQ0FEc0M7QUFBQSxNQUNqRUssS0FEaUU7QUFBQSxNQUMxREMsUUFEMEQ7O0FBR3hFLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUF5QztBQUNoRUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FMLElBQUFBLGNBQWMsQ0FBQ0MsS0FBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFNLGdCQUFZLEVBQUMsS0FBbkI7QUFBeUIsYUFBUyxFQUFFRixNQUFNLENBQUNPLFNBQTNDO0FBQXNELFlBQVEsRUFBRSxrQkFBQ0YsQ0FBRCxFQUFPO0FBQUNELE1BQUFBLGdCQUFnQixDQUFDQyxDQUFELENBQWhCO0FBQW9CLEtBQTVGO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVMLE1BQU0sQ0FBQ1EsV0FEcEI7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUksRUFBQyxRQUhQO0FBSUUsaUJBQVcsRUFBQywyQkFKZDtBQUtFLGNBQVEsRUFBRSxrQkFBQ0gsQ0FBRDtBQUFBLGVBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUUsOERBQUMscUVBQUQ7QUFBbUIsYUFBTztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRTtBQUFPLGVBQVMsRUFBRVYsTUFBTSxDQUFDVyxZQUF6QjtBQUF1QyxVQUFJLEVBQUMsUUFBNUM7QUFBcUQsV0FBSyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBckJEOztHQUFNWjs7S0FBQUE7QUF1Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlYXJjaFR3b1RvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hUd29Ub25lJztcclxuIFxyXG5jb25zdCBTZWFyY2hCYXI6IFJlYWN0LkZDPFNlYXJjaEJhclByb3BzPiA9ICh7c3R5bGVzLCBzZXRTZWFyY2hWYWx1ZX0pID0+IHtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoVmFsdWUoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCYXJ9IG9uU3VibWl0PXsoZSkgPT4ge2hhbmRsZUZvcm1TdWJtaXQoZSl9fT5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgbmFtZT1cInNlYXJjaFwiIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHRpdGxlIG9yIHNlbGxlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTZWFyY2hUd29Ub25lSWNvbiBjbGFzc2VzLz5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIvPlxyXG4gICAgPC9mb3JtPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2VhcmNoVHdvVG9uZUljb24iLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJzZXRTZWFyY2hWYWx1ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoQmFyIiwic2VhcmNoSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=