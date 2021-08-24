self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/auth.css */ "./styles/auth.css");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import App from "next/app";



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this)
  }, void 0, false);
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps }
// }


_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./styles/auth.css":
/*!*************************!*\
  !*** ./styles/auth.css ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./auth.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/auth.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./auth.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/auth.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./auth.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/auth.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/auth.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/auth.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\r\n  height: 100vh; \r\n  display: -moz-box; \r\n  display: flex;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n.formTitle {\r\n  margin-top: 0px;\r\n  font-weight: bold;\r\n  font-family: \"Nunito\";\r\n  text-align: center;\r\n  color: #07083b;\r\n}\r\n\r\n.formGroup {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.inputDescription {\r\n  font-family: \"Nunito\";\r\n  font-size: large;\r\n  font-weight: lighter;\r\n  margin-left: 5px;\r\n}\r\n\r\n.input {\r\n  outline: none;\r\n\tborder: none;\r\n  height: 35px;\r\n  font-size: large;\r\n  position: relative;\r\n  display: block;\r\n  width: 316px;\r\n  background: #f3f3f3;\r\n  padding: 0 15px 0 15px;\r\n  font-family: \"Nunito\";\r\n  margin-top: 5px;\r\n  border: 0px;\r\n  border-bottom: 2px solid #07083b;\r\n}\r\n\r\n.formButton {\r\n  height: 45px;\r\n  margin-top: 35px;\r\n  font-size: large;\r\n  position: relative;\r\n  display: block;\r\n  width: 350px;\r\n  background: #07083b;\r\n  font-family: \"Nunito\";\r\n  color: white;\r\n}\r\n\r\n.formButton:hover {\r\n  cursor: pointer;\r\n  font-size: larger;\r\n}\r\n\r\n.errMessage {\r\n  font-size: x-small;\r\n  font-family: \"Nunito\";\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  color: red;\r\n\r\n}\r\n\r\n.formSpan {\r\n  font-family: \"Nunito\";\r\n  font-weight: lighter;\r\n}\r\n\r\n.a {\r\n  color: #07083b;\r\n}\r\n\r\n@media only screen and (max-width: 510px) {\r\n  .input {\r\n    width: 224px;\r\n    padding: 0 8px 0 8px;\r\n  }\r\n  \r\n  .formButton {\r\n    width: 240px;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://styles/auth.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,iBAAa;EAAb,aAAa;EACb,qBAAuB;OAAvB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,aAAa;CACd,YAAY;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;;AAEZ;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,YAAY;IACZ,oBAAoB;EACtB;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');\r\n\r\n.wrapper {\r\n  height: 100vh; \r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n.formTitle {\r\n  margin-top: 0px;\r\n  font-weight: bold;\r\n  font-family: \"Nunito\";\r\n  text-align: center;\r\n  color: #07083b;\r\n}\r\n\r\n.formGroup {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.inputDescription {\r\n  font-family: \"Nunito\";\r\n  font-size: large;\r\n  font-weight: lighter;\r\n  margin-left: 5px;\r\n}\r\n\r\n.input {\r\n  outline: none;\r\n\tborder: none;\r\n  height: 35px;\r\n  font-size: large;\r\n  position: relative;\r\n  display: block;\r\n  width: 316px;\r\n  background: #f3f3f3;\r\n  padding: 0 15px 0 15px;\r\n  font-family: \"Nunito\";\r\n  margin-top: 5px;\r\n  border: 0px;\r\n  border-bottom: 2px solid #07083b;\r\n}\r\n\r\n.formButton {\r\n  height: 45px;\r\n  margin-top: 35px;\r\n  font-size: large;\r\n  position: relative;\r\n  display: block;\r\n  width: 350px;\r\n  background: #07083b;\r\n  font-family: \"Nunito\";\r\n  color: white;\r\n}\r\n\r\n.formButton:hover {\r\n  cursor: pointer;\r\n  font-size: larger;\r\n}\r\n\r\n.errMessage {\r\n  font-size: x-small;\r\n  font-family: \"Nunito\";\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  color: red;\r\n\r\n}\r\n\r\n.formSpan {\r\n  font-family: \"Nunito\";\r\n  font-weight: lighter;\r\n}\r\n\r\n.a {\r\n  color: #07083b;\r\n}\r\n\r\n@media only screen and (max-width: 510px) {\r\n  .input {\r\n    width: 224px;\r\n    padding: 0 8px 0 8px;\r\n  }\r\n  \r\n  .formButton {\r\n    width: 240px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZmVhZThkOTI5NzRmMDI1M2RhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQW1EO0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFDakQsc0JBQU87QUFBQSwyQkFBRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBRixtQkFBUDtBQUNELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztLQWRTRjtBQWdCVCwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLHFaQUFzTTs7QUFFeE87O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scVpBQXNNO0FBQzVNO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscVpBQXNNOztBQUVoTzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RCwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6STtBQUNBLG9EQUFvRCxxQkFBcUIseUJBQXlCLG9CQUFvQiw0QkFBNEIsbUNBQW1DLGdDQUFnQyxLQUFLLG9CQUFvQixzQkFBc0Isd0JBQXdCLDhCQUE4Qix5QkFBeUIscUJBQXFCLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLDJCQUEyQiw4QkFBOEIsdUJBQXVCLDJCQUEyQix1QkFBdUIsS0FBSyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsdUJBQXVCLHlCQUF5QixxQkFBcUIsbUJBQW1CLDBCQUEwQiw2QkFBNkIsOEJBQThCLHNCQUFzQixrQkFBa0IsdUNBQXVDLEtBQUsscUJBQXFCLG1CQUFtQix1QkFBdUIsdUJBQXVCLHlCQUF5QixxQkFBcUIsbUJBQW1CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEtBQUssMkJBQTJCLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIseUJBQXlCLDhCQUE4Qix3QkFBd0IseUJBQXlCLGlCQUFpQixTQUFTLG1CQUFtQiw4QkFBOEIsMkJBQTJCLEtBQUssWUFBWSxxQkFBcUIsS0FBSyxtREFBbUQsY0FBYyxxQkFBcUIsNkJBQTZCLE9BQU8seUJBQXlCLHFCQUFxQixPQUFPLEtBQUssT0FBTyxnRkFBZ0YsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssK0ZBQStGLElBQUksSUFBSSxtQkFBbUIsa0JBQWtCLHFCQUFxQixvQkFBb0IsOEJBQThCLGdDQUFnQyxLQUFLLG9CQUFvQixzQkFBc0Isd0JBQXdCLDhCQUE4Qix5QkFBeUIscUJBQXFCLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLDJCQUEyQiw4QkFBOEIsdUJBQXVCLDJCQUEyQix1QkFBdUIsS0FBSyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsdUJBQXVCLHlCQUF5QixxQkFBcUIsbUJBQW1CLDBCQUEwQiw2QkFBNkIsOEJBQThCLHNCQUFzQixrQkFBa0IsdUNBQXVDLEtBQUsscUJBQXFCLG1CQUFtQix1QkFBdUIsdUJBQXVCLHlCQUF5QixxQkFBcUIsbUJBQW1CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEtBQUssMkJBQTJCLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIseUJBQXlCLDhCQUE4Qix3QkFBd0IseUJBQXlCLGlCQUFpQixTQUFTLG1CQUFtQiw4QkFBOEIsMkJBQTJCLEtBQUssWUFBWSxxQkFBcUIsS0FBSyxtREFBbUQsY0FBYyxxQkFBcUIsNkJBQTZCLE9BQU8seUJBQXlCLHFCQUFxQixPQUFPLEtBQUssbUJBQW1CO0FBQ3pqSTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYXV0aC5jc3M/NTA1YyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2F1dGguY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgLyosIEFwcENvbnRleHQgKi8gfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2F1dGguY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiA8PjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48Lz5cclxufVxyXG5cclxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXHJcbi8vIGV2ZXJ5IHNpbmdsZSBwYWdlIGluIHlvdXIgYXBwbGljYXRpb24uIFRoaXMgZGlzYWJsZXMgdGhlIGFiaWxpdHkgdG9cclxuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXHJcbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxyXG4vL1xyXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xyXG4vLyAgIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcclxuLy8gICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XHJcblxyXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vYXV0aC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL2F1dGguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9hdXRoLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDsgXFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDsgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxyXFxufVxcclxcblxcclxcbi5mb3JtVGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzA3MDgzYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Hcm91cCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXREZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcclxcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNzA4M2I7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDcwODNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVyck1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybVNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxufVxcclxcblxcclxcbi5hIHtcXHJcXG4gIGNvbG9yOiAjMDcwODNiO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XFxyXFxuICAuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMjI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybUJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9hdXRoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtDQUNkLFlBQVk7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoOyBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxyXFxufVxcclxcblxcclxcbi5mb3JtVGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzA3MDgzYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Hcm91cCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXREZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcclxcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNzA4M2I7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDcwODNiO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVyck1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybVNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxufVxcclxcblxcclxcbi5hIHtcXHJcXG4gIGNvbG9yOiAjMDcwODNiO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XFxyXFxuICAuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMjI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybUJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=