self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home(_ref) {
  _s();

  var books = _ref.books;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      filterAttribute = _useState3[0],
      setFilterAttribute = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // useEffect(() => {
  //   const getUser = async () => {
  //     checkAuthAndGetUser().then((user) => {
  //       setUser(user);
  //     })
  //   };
  //   getUser();
  // }, []);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(Home, "cTY90l7DxrkEuy9VwlhH40kvKDA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./styles/navbar.module.css":
/*!**********************************!*\
  !*** ./styles/navbar.module.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navbar.module.css");

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
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navbar.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navbar.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navbar.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navbar.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navbar container */\r\n.navbar_navbar__9HIOk {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  font-family: Arial;\r\n}\r\n\r\n/* Links inside the navbar */\r\n.navbar_navbar__9HIOk a {\r\n  float: left;\r\n  font-size: 16px;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* The dropdown container */\r\n.navbar_dropdown__2nfo3 {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Dropdown button */\r\n.navbar_dropdown__2nfo3 .navbar_dropbtn__2xhQc {\r\n  font-size: 16px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit; /* Important for vertical align on mobile phones */\r\n  margin: 0; /* Important for vertical align on mobile phones */\r\n}\r\n\r\n/* Add a red background color to navbar links on hover */\r\n.navbar_navbar__9HIOk a:hover, .navbar_dropdown__2nfo3:hover .navbar_dropbtn__2xhQc {\r\n  background-color: red;\r\n}\r\n\r\n/* Dropdown content (hidden by default) */\r\n.navbar_dropdownContent__2VsBk {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.navbar_dropdownContent__2VsBk a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n.navbar_dropdownContent__2VsBk a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n.navbar_dropdown__2nfo3:hover .navbar_dropdownContent__2VsBk {\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://styles/navbar.module.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB,EAAE,kDAAkD;EACxE,SAAS,EAAE,kDAAkD;AAC/D;;AAEA,wDAAwD;AACxD;EACE,qBAAqB;AACvB;;AAEA,yCAAyC;AACzC;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,oDAA4C;UAA5C,4CAA4C;EAC5C,UAAU;AACZ;;AAEA,8BAA8B;AAC9B;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;AAClB;;AAEA,2DAA2D;AAC3D;EACE,sBAAsB;AACxB;;AAEA,oCAAoC;AACpC;EACE,cAAc;AAChB","sourcesContent":["/* Navbar container */\r\n.navbar {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  font-family: Arial;\r\n}\r\n\r\n/* Links inside the navbar */\r\n.navbar a {\r\n  float: left;\r\n  font-size: 16px;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* The dropdown container */\r\n.dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Dropdown button */\r\n.dropdown .dropbtn {\r\n  font-size: 16px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit; /* Important for vertical align on mobile phones */\r\n  margin: 0; /* Important for vertical align on mobile phones */\r\n}\r\n\r\n/* Add a red background color to navbar links on hover */\r\n.navbar a:hover, .dropdown:hover .dropbtn {\r\n  background-color: red;\r\n}\r\n\r\n/* Dropdown content (hidden by default) */\r\n.dropdownContent {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdownContent a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n.dropdownContent a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdownContent {\r\n  display: block;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navbar": "navbar_navbar__9HIOk",
	"dropdown": "navbar_dropdown__2nfo3",
	"dropbtn": "navbar_dropbtn__2xhQc",
	"dropdownContent": "navbar_dropdownContent__2VsBk"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS40YmExMzdmNTZmYTk5ZDNjYmY2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7O0FBZ0JBLElBQU1NLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ3ZCTiwrQ0FBUSxFQURlO0FBQUEsTUFDeENPLElBRHdDO0FBQUEsTUFDbENDLE9BRGtDOztBQUFBLG1CQUVUUiwrQ0FBUSxDQUFTLEVBQVQsQ0FGQztBQUFBLE1BRXhDUyxXQUZ3QztBQUFBLE1BRTNCQyxjQUYyQjs7QUFBQSxtQkFHRFYsK0NBQVEsRUFIUDtBQUFBLE1BR3hDVyxlQUh3QztBQUFBLE1BR3ZCQyxrQkFIdUI7O0FBSy9DLE1BQU1DLE1BQU0sR0FBR1osc0RBQVMsRUFBeEIsQ0FMK0MsQ0FPL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRyx5RUFBaEI7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFXLGNBQU0sRUFBRUEsa0VBQW5CO0FBQWlDLHNCQUFjLEVBQUVNO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQU0sY0FBTSxFQUFFRyxNQUFkO0FBQXNCLGNBQU0sRUFBRVQsa0VBQVlBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXhCRDs7R0FBTUM7VUFLV0o7OztLQUxYSTs7QUEwQk4sK0RBQWVBLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREEsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyx1YUFBK007O0FBRWpQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHVhQUErTTtBQUNyTjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHVhQUErTTs7QUFFek87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDJGQUEyRix1QkFBdUIsNkJBQTZCLHlCQUF5QixLQUFLLGtFQUFrRSxrQkFBa0Isc0JBQXNCLG1CQUFtQix5QkFBeUIseUJBQXlCLDRCQUE0QixLQUFLLGlFQUFpRSxrQkFBa0IsdUJBQXVCLEtBQUssaUZBQWlGLHNCQUFzQixtQkFBbUIsb0JBQW9CLG1CQUFtQix5QkFBeUIsZ0NBQWdDLDRCQUE0QixvRUFBb0Usd0RBQXdELDBKQUEwSiw0QkFBNEIsS0FBSyxzRkFBc0Ysb0JBQW9CLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLDJEQUEyRCwyREFBMkQsaUJBQWlCLEtBQUssNkVBQTZFLGtCQUFrQixtQkFBbUIseUJBQXlCLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUssZ0hBQWdILDZCQUE2QixLQUFLLCtHQUErRyxxQkFBcUIsS0FBSyxPQUFPLGdHQUFnRyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsNkRBQTZELHVCQUF1Qiw2QkFBNkIseUJBQXlCLEtBQUssb0RBQW9ELGtCQUFrQixzQkFBc0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEtBQUssbURBQW1ELGtCQUFrQix1QkFBdUIsS0FBSyxxREFBcUQsc0JBQXNCLG1CQUFtQixvQkFBb0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsNEJBQTRCLG9FQUFvRSx3REFBd0QsZ0hBQWdILDRCQUE0QixLQUFLLHdFQUF3RSxvQkFBb0IseUJBQXlCLGdDQUFnQyx1QkFBdUIsbURBQW1ELGlCQUFpQixLQUFLLCtEQUErRCxrQkFBa0IsbUJBQW1CLHlCQUF5Qiw0QkFBNEIscUJBQXFCLHVCQUF1QixLQUFLLGtHQUFrRyw2QkFBNkIsS0FBSyxtRkFBbUYscUJBQXFCLEtBQUssbUJBQW1CO0FBQzlvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3M/MjNhOSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGJvb2sgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZCYXJTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGlzdC1ib29rc1wiLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgY29uc3QgZGF0YTogYm9va1tdID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9va3M6IGRhdGEgfVxyXG4gIH1cclxuXHJcbn1cclxuIFxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHsgYm9va3MgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFN0cmluZyB8IGJvb2xlYW4+KCk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJBdHRyaWJ1dGUsIHNldEZpbHRlckF0dHJpYnV0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY2hlY2tBdXRoQW5kR2V0VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAvLyAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfTtcclxuICAvLyAgIGdldFVzZXIoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e25hdkJhclN0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtuYXZCYXJTdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdkJhclN0eWxlc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbmF2YmFyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL25hdmJhci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9uYXZiYXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOYXZiYXIgY29udGFpbmVyICovXFxyXFxuLm5hdmJhcl9uYXZiYXJfXzlISU9rIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xcclxcbi5uYXZiYXJfbmF2YmFyX185SElPayBhIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXFxyXFxuLm5hdmJhcl9kcm9wZG93bl9fMm5mbzMge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gKi9cXHJcXG4ubmF2YmFyX2Ryb3Bkb3duX18ybmZvMyAubmF2YmFyX2Ryb3BidG5fXzJ4aFFjIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xcclxcbiAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXFxyXFxuLm5hdmJhcl9uYXZiYXJfXzlISU9rIGE6aG92ZXIsIC5uYXZiYXJfZHJvcGRvd25fXzJuZm8zOmhvdmVyIC5uYXZiYXJfZHJvcGJ0bl9fMnhoUWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cXHJcXG4ubmF2YmFyX2Ryb3Bkb3duQ29udGVudF9fMlZzQmsge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICBtaW4td2lkdGg6IDE2MHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXFxyXFxuLm5hdmJhcl9kcm9wZG93bkNvbnRlbnRfXzJWc0JrIGEge1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5uYXZiYXJfZHJvcGRvd25Db250ZW50X18yVnNCayBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cXHJcXG4ubmF2YmFyX2Ryb3Bkb3duX18ybmZvMzpob3ZlciAubmF2YmFyX2Ryb3Bkb3duQ29udGVudF9fMlZzQmsge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsU0FBUyxFQUFFLGtEQUFrRDtBQUMvRDs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9EQUE0QztVQUE1Qyw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdmJhciBjb250YWluZXIgKi9cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xcclxcbi5uYXZiYXIgYSB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xcclxcbi5kcm9wZG93biB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xcclxcbi5kcm9wZG93biAuZHJvcGJ0biB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXFxyXFxuLmRyb3Bkb3duQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cXHJcXG4uZHJvcGRvd25Db250ZW50IGEge1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5kcm9wZG93bkNvbnRlbnQgYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXFxyXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmJhclwiOiBcIm5hdmJhcl9uYXZiYXJfXzlISU9rXCIsXG5cdFwiZHJvcGRvd25cIjogXCJuYXZiYXJfZHJvcGRvd25fXzJuZm8zXCIsXG5cdFwiZHJvcGJ0blwiOiBcIm5hdmJhcl9kcm9wYnRuX18yeGhRY1wiLFxuXHRcImRyb3Bkb3duQ29udGVudFwiOiBcIm5hdmJhcl9kcm9wZG93bkNvbnRlbnRfXzJWc0JrXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hCYXIiLCJNZW51IiwibmF2QmFyU3R5bGVzIiwiSG9tZSIsImJvb2tzIiwidXNlciIsInNldFVzZXIiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZmlsdGVyQXR0cmlidXRlIiwic2V0RmlsdGVyQXR0cmlidXRlIiwicm91dGVyIiwibmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==