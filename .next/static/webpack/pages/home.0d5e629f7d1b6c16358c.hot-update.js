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
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/navBar.module.css */ "./styles/navBar.module.css");
/* harmony import */ var _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_6__);
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default())
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

/***/ "./styles/navBar.module.css":
/*!**********************************!*\
  !*** ./styles/navBar.module.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navBar.module.css");

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
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navBar.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navBar.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navBar.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/navBar.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navbar container */\r\n.navBar_navbar__1ieRn {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  font-family: Arial;\r\n}\r\n\r\n/* Links inside the navbar */\r\n.navBar_navbar__1ieRn a {\r\n  float: left;\r\n  font-size: 16px;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* The dropdown container */\r\n.navBar_dropdown__2C-UE {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Dropdown button */\r\n.navBar_dropdown__2C-UE .navBar_dropbtn__3tVCj {\r\n  font-size: 16px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit; /* Important for vertical align on mobile phones */\r\n  margin: 0; /* Important for vertical align on mobile phones */\r\n}\r\n\r\n/* Add a red background color to navbar links on hover */\r\n.navBar_navbar__1ieRn a:hover, .navBar_dropdown__2C-UE:hover .navBar_dropbtn__3tVCj {\r\n  background-color: red;\r\n}\r\n\r\n/* Dropdown content (hidden by default) */\r\n.navBar_dropdown-content__1aiB5 {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.navBar_dropdown-content__1aiB5 a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n.navBar_dropdown-content__1aiB5 a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n.navBar_dropdown__2C-UE:hover .navBar_dropdown-content__1aiB5 {\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://styles/navBar.module.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB,EAAE,kDAAkD;EACxE,SAAS,EAAE,kDAAkD;AAC/D;;AAEA,wDAAwD;AACxD;EACE,qBAAqB;AACvB;;AAEA,yCAAyC;AACzC;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,oDAA4C;UAA5C,4CAA4C;EAC5C,UAAU;AACZ;;AAEA,8BAA8B;AAC9B;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;AAClB;;AAEA,2DAA2D;AAC3D;EACE,sBAAsB;AACxB;;AAEA,oCAAoC;AACpC;EACE,cAAc;AAChB","sourcesContent":["/* Navbar container */\r\n.navbar {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  font-family: Arial;\r\n}\r\n\r\n/* Links inside the navbar */\r\n.navbar a {\r\n  float: left;\r\n  font-size: 16px;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* The dropdown container */\r\n.dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Dropdown button */\r\n.dropdown .dropbtn {\r\n  font-size: 16px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit; /* Important for vertical align on mobile phones */\r\n  margin: 0; /* Important for vertical align on mobile phones */\r\n}\r\n\r\n/* Add a red background color to navbar links on hover */\r\n.navbar a:hover, .dropdown:hover .dropbtn {\r\n  background-color: red;\r\n}\r\n\r\n/* Dropdown content (hidden by default) */\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n.dropdown-content a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navbar": "navBar_navbar__1ieRn",
	"dropdown": "navBar_dropdown__2C-UE",
	"dropbtn": "navBar_dropbtn__3tVCj",
	"dropdown-content": "navBar_dropdown-content__1aiB5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4wZDVlNjI5ZjdkMWI2YzE2MzU4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWdCQSxJQUFNTyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUN2QlAsK0NBQVEsRUFEZTtBQUFBLE1BQ3hDUSxJQUR3QztBQUFBLE1BQ2xDQyxPQURrQzs7QUFBQSxtQkFFVFQsK0NBQVEsQ0FBUyxFQUFULENBRkM7QUFBQSxNQUV4Q1UsV0FGd0M7QUFBQSxNQUUzQkMsY0FGMkI7O0FBQUEsbUJBR0RYLCtDQUFRLEVBSFA7QUFBQSxNQUd4Q1ksZUFId0M7QUFBQSxNQUd2QkMsa0JBSHVCOztBQUsvQyxNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCLENBTCtDLENBTy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQVcsY0FBTSxFQUFFRSxnRUFBbkI7QUFBMkIsc0JBQWMsRUFBRVE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVHLE1BQWQ7QUFBc0IsY0FBTSxFQUFFVCxrRUFBWUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBeEJEOztHQUFNQztVQUtXTDs7O0tBTFhLOztBQTBCTiwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLHVhQUErTTs7QUFFalA7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sdWFBQStNO0FBQ3JOO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsdWFBQStNOztBQUV6Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQ25GQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsMkZBQTJGLHVCQUF1Qiw2QkFBNkIseUJBQXlCLEtBQUssa0VBQWtFLGtCQUFrQixzQkFBc0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEtBQUssaUVBQWlFLGtCQUFrQix1QkFBdUIsS0FBSyxpRkFBaUYsc0JBQXNCLG1CQUFtQixvQkFBb0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsNEJBQTRCLG9FQUFvRSx3REFBd0QsMEpBQTBKLDRCQUE0QixLQUFLLHVGQUF1RixvQkFBb0IseUJBQXlCLGdDQUFnQyx1QkFBdUIsMkRBQTJELDJEQUEyRCxpQkFBaUIsS0FBSyw4RUFBOEUsa0JBQWtCLG1CQUFtQix5QkFBeUIsNEJBQTRCLHFCQUFxQix1QkFBdUIsS0FBSyxpSEFBaUgsNkJBQTZCLEtBQUssZ0hBQWdILHFCQUFxQixLQUFLLE9BQU8sZ0dBQWdHLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLHlCQUF5Qix1QkFBdUIsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSw2REFBNkQsdUJBQXVCLDZCQUE2Qix5QkFBeUIsS0FBSyxvREFBb0Qsa0JBQWtCLHNCQUFzQixtQkFBbUIseUJBQXlCLHlCQUF5Qiw0QkFBNEIsS0FBSyxtREFBbUQsa0JBQWtCLHVCQUF1QixLQUFLLHFEQUFxRCxzQkFBc0IsbUJBQW1CLG9CQUFvQixtQkFBbUIseUJBQXlCLGdDQUFnQyw0QkFBNEIsb0VBQW9FLHdEQUF3RCxnSEFBZ0gsNEJBQTRCLEtBQUsseUVBQXlFLG9CQUFvQix5QkFBeUIsZ0NBQWdDLHVCQUF1QixtREFBbUQsaUJBQWlCLEtBQUssZ0VBQWdFLGtCQUFrQixtQkFBbUIseUJBQXlCLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUssbUdBQW1HLDZCQUE2QixLQUFLLG9GQUFvRixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDdHBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9uYXZCYXIubW9kdWxlLmNzcz85NmI0Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvbmF2QmFyLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vayB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdkJhclN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2QmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIsIHJlcXVlc3RPcHRpb25zKTtcclxuICBjb25zdCBkYXRhOiBib29rW10gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfVxyXG5cclxufVxyXG4gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgYm9vbGVhbj4oKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlckF0dHJpYnV0ZSwgc2V0RmlsdGVyQXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIC8vICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VXNlcigpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc3R5bGVzPXtzdHlsZXN9IHNldFNlYXJjaFZhbHVlPXtzZXRTZWFyY2hWYWx1ZX0vPlxyXG4gICAgICAgIDxNZW51IHJvdXRlcj17cm91dGVyfSBzdHlsZXM9e25hdkJhclN0eWxlc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbmF2QmFyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL25hdkJhci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9uYXZCYXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOYXZiYXIgY29udGFpbmVyICovXFxyXFxuLm5hdkJhcl9uYXZiYXJfXzFpZVJuIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xcclxcbi5uYXZCYXJfbmF2YmFyX18xaWVSbiBhIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXFxyXFxuLm5hdkJhcl9kcm9wZG93bl9fMkMtVUUge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gKi9cXHJcXG4ubmF2QmFyX2Ryb3Bkb3duX18yQy1VRSAubmF2QmFyX2Ryb3BidG5fXzN0VkNqIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xcclxcbiAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXFxyXFxuLm5hdkJhcl9uYXZiYXJfXzFpZVJuIGE6aG92ZXIsIC5uYXZCYXJfZHJvcGRvd25fXzJDLVVFOmhvdmVyIC5uYXZCYXJfZHJvcGJ0bl9fM3RWQ2oge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cXHJcXG4ubmF2QmFyX2Ryb3Bkb3duLWNvbnRlbnRfXzFhaUI1IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcclxcbi5uYXZCYXJfZHJvcGRvd24tY29udGVudF9fMWFpQjUgYSB7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXFxyXFxuLm5hdkJhcl9kcm9wZG93bi1jb250ZW50X18xYWlCNSBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cXHJcXG4ubmF2QmFyX2Ryb3Bkb3duX18yQy1VRTpob3ZlciAubmF2QmFyX2Ryb3Bkb3duLWNvbnRlbnRfXzFhaUI1IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL25hdkJhci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUUsa0RBQWtEO0VBQ3hFLFNBQVMsRUFBRSxrREFBa0Q7QUFDL0Q7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwyREFBMkQ7QUFDM0Q7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZiYXIgY29udGFpbmVyICovXFxyXFxuLm5hdmJhciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cXHJcXG4ubmF2YmFyIGEge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cXHJcXG4uZHJvcGRvd24ge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gKi9cXHJcXG4uZHJvcGRvd24gLmRyb3BidG4ge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXFxyXFxuICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cXHJcXG4ubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcclxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2YmFyXCI6IFwibmF2QmFyX25hdmJhcl9fMWllUm5cIixcblx0XCJkcm9wZG93blwiOiBcIm5hdkJhcl9kcm9wZG93bl9fMkMtVUVcIixcblx0XCJkcm9wYnRuXCI6IFwibmF2QmFyX2Ryb3BidG5fXzN0VkNqXCIsXG5cdFwiZHJvcGRvd24tY29udGVudFwiOiBcIm5hdkJhcl9kcm9wZG93bi1jb250ZW50X18xYWlCNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2VhcmNoQmFyIiwic3R5bGVzIiwiTWVudSIsIm5hdkJhclN0eWxlcyIsIkhvbWUiLCJib29rcyIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpbHRlckF0dHJpYnV0ZSIsInNldEZpbHRlckF0dHJpYnV0ZSIsInJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=