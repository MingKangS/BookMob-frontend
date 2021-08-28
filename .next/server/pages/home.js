(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\Menu.tsx";

const Menu = ({
  router,
  styles
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles.dropdown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: styles.dropbtn,
      children: ["Dropdown", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: styles.fa + styles.faCaretDown
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.dropdownContent,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "My List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\SearchBar.tsx";


const SearchBar = ({
  styles,
  setSearchValue
}) => {
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchValue(input);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: styles.searchBar,
    onSubmit: e => {
      handleFormSubmit(e);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: "",
      type: "text",
      name: "search",
      placeholder: "Search by title or seller",
      onChange: e => setInput(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "submit",
      value: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\home.tsx";





const getStaticProps = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const res = await fetch("http://localhost:8000/api/list-books", requestOptions);
  const data = await res.json();
  return {
    props: {
      books: data
    }
  };
};

const Home = ({
  books
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: filterAttribute,
    1: setFilterAttribute
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // useEffect(() => {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./styles/navbar.module.css":
/*!**********************************!*\
  !*** ./styles/navbar.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"searchBar": "navbar_searchBar__1xMol",
	"navbar": "navbar_navbar__9HIOk",
	"dropdown": "navbar_dropdown__2nfo3",
	"dropbtn": "navbar_dropbtn__2xhQc",
	"dropdownContent": "navbar_dropdownContent__2VsBk"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBeUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQUY7QUFBVUMsRUFBQUE7QUFBVixDQUFELEtBQXdCO0FBQ3hELHNCQUNFO0FBQUssYUFBUyxFQUFFQSxNQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUVELE1BQU0sQ0FBQ0UsT0FBMUI7QUFBQSwwQ0FDRTtBQUFHLGlCQUFTLEVBQUVGLE1BQU0sQ0FBQ0csRUFBUCxHQUFZSCxNQUFNLENBQUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssZUFBdkI7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FiRDs7QUFlQSxpRUFBZVAsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBLE1BQU1VLFNBQW1DLEdBQUcsQ0FBQztBQUFDUixFQUFBQSxNQUFEO0FBQVNTLEVBQUFBO0FBQVQsQ0FBRCxLQUE4QjtBQUN4RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLCtDQUFRLENBQVMsRUFBVCxDQUFsQzs7QUFFQSxRQUFNSyxnQkFBZ0IsR0FBSUMsQ0FBRCxJQUF5QztBQUNoRUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FMLElBQUFBLGNBQWMsQ0FBQ0MsS0FBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFNLGFBQVMsRUFBRVYsTUFBTSxDQUFDZSxTQUF4QjtBQUFtQyxZQUFRLEVBQUdGLENBQUQsSUFBTztBQUFDRCxNQUFBQSxnQkFBZ0IsQ0FBQ0MsQ0FBRCxDQUFoQjtBQUFvQixLQUF6RTtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLEVBRFo7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUksRUFBQyxRQUhQO0FBSUUsaUJBQVcsRUFBQywyQkFKZDtBQUtFLGNBQVEsRUFBR0EsQ0FBRCxJQUFPRixRQUFRLENBQUNFLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWO0FBTDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FwQkQ7O0FBc0JBLGlFQUFlVCxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFFTyxNQUFNWSxjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLE1BQU0sRUFBRSxLQURhO0FBRXJCQyxJQUFBQSxPQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEI7QUFGWSxHQUF2QjtBQUtBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsc0NBQUQsRUFBeUNKLGNBQXpDLENBQXZCO0FBQ0EsUUFBTUssSUFBWSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUEzQjtBQUNBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRUg7QUFBVDtBQURGLEdBQVA7QUFJRCxDQVpNOztBQWNQLE1BQU1JLElBQXlCLEdBQUcsQ0FBQztBQUFFRCxFQUFBQTtBQUFGLENBQUQsS0FBZTtBQUMvQyxRQUFNO0FBQUEsT0FBQ0UsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0J6QiwrQ0FBUSxFQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDMEIsV0FBRDtBQUFBLE9BQWN4QjtBQUFkLE1BQWdDRiwrQ0FBUSxDQUFTLEVBQVQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQzJCLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0M1QiwrQ0FBUSxFQUF0RDtBQUVBLFFBQU1SLE1BQU0sR0FBR21CLHNEQUFTLEVBQXhCLENBTCtDLENBTy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMseUVBQWhCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBVyxjQUFNLEVBQUVBLGtFQUFuQjtBQUFpQyxzQkFBYyxFQUFFVjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVWLE1BQWQ7QUFBc0IsY0FBTSxFQUFFb0Isa0VBQVlBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0F4QkQ7O0FBMEJBLGlFQUFlVyxJQUFmOzs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcblxyXG5jb25zdCBNZW51OiBSZWFjdC5GQzxNZW51UHJvcHM+ID0gKHsgcm91dGVyLCBzdHlsZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGJ0bn0+RHJvcGRvd25cclxuICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlcy5mYSArIHN0eWxlcy5mYUNhcmV0RG93bn0+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bkNvbnRlbnR9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+TXkgTGlzdDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPkFjY291bnQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5Mb2cgb3V0PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgeyBTZWFyY2hCYXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbiBcclxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxTZWFyY2hCYXJQcm9wcz4gPSAoe3N0eWxlcywgc2V0U2VhcmNoVmFsdWV9KSA9PiB7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaFZhbHVlKGlucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfSBvblN1Ym1pdD17KGUpID0+IHtoYW5kbGVGb3JtU3VibWl0KGUpfX0+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgbmFtZT1cInNlYXJjaFwiIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHRpdGxlIG9yIHNlbGxlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgYm9vayB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgY2hlY2tBdXRoQW5kR2V0VXNlciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXR1cE1hc3RlciB9IGZyb20gJ2NsdXN0ZXInO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIsIHJlcXVlc3RPcHRpb25zKTtcclxuICBjb25zdCBkYXRhOiBib29rW10gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfVxyXG5cclxufVxyXG4gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgYm9vbGVhbj4oKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlckF0dHJpYnV0ZSwgc2V0RmlsdGVyQXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIC8vICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VXNlcigpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJhclwiOiBcIm5hdmJhcl9zZWFyY2hCYXJfXzF4TW9sXCIsXG5cdFwibmF2YmFyXCI6IFwibmF2YmFyX25hdmJhcl9fOUhJT2tcIixcblx0XCJkcm9wZG93blwiOiBcIm5hdmJhcl9kcm9wZG93bl9fMm5mbzNcIixcblx0XCJkcm9wYnRuXCI6IFwibmF2YmFyX2Ryb3BidG5fXzJ4aFFjXCIsXG5cdFwiZHJvcGRvd25Db250ZW50XCI6IFwibmF2YmFyX2Ryb3Bkb3duQ29udGVudF9fMlZzQmtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiTWVudSIsInJvdXRlciIsInN0eWxlcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImZhIiwiZmFDYXJldERvd24iLCJkcm9wZG93bkNvbnRlbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2VhcmNoQmFyIiwic2V0U2VhcmNoVmFsdWUiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaEJhciIsInRhcmdldCIsInZhbHVlIiwidXNlUm91dGVyIiwibmF2YmFyU3R5bGVzIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJib29rcyIsIkhvbWUiLCJ1c2VyIiwic2V0VXNlciIsInNlYXJjaFZhbHVlIiwiZmlsdGVyQXR0cmlidXRlIiwic2V0RmlsdGVyQXR0cmlidXRlIiwibmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==