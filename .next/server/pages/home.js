(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./components/BookCard.tsx":
/*!*********************************!*\
  !*** ./components/BookCard.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\BookCard.tsx";

const BookCard = ({
  styles,
  book
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles.bookCard,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: book.seller_username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://bookmob.s3-ap-southeast-1.amazonaws.com/Book images/iJjQo6rCi4EBktzGTSEMHn.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: [" ", book.title, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [" ", book.author, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
      children: [" ", book.price, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookCard);

/***/ }),

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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.tsx");

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
  console.log(data);
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
    0: sortByAttribute,
    1: setSortByAttribute
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Title");
  const {
    0: bookList,
    1: setBookList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(books.book_list);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getUser = async () => {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkAuthAndGetUser)().then(user => {
        setUser(user);
      });
    };

    getUser();
    console.log(books);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setBookList([...bookList].sort((x, y) => {
      return x[sortByAttribute] > y[sortByAttribute] ? 1 : -1;
    }));
  }, [sortByAttribute]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_5__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().sortByDiv),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sort by:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        name: "sort-by-attribute",
        id: "sort-by-attribute",
        onChange: e => setSortByAttribute(e.target.value),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "seller_username",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "author",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "price",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().bookCardContainer),
      children: bookList.map((book, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        book: book,
        styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAuthAndGetUser": () => (/* binding */ checkAuthAndGetUser)
/* harmony export */ });
const checkAuthAndGetUser = () => {
  const token = localStorage.getItem('jwt');
  if (!token) return;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }; //var user: Boolean | userType

  return fetch("http://localhost:8000/api/get-user/" + token, requestOptions).then(async response => {
    if (response.status == 200) {
      console.log("This user is already logged in.");
      return await response.json();
    } else {
      return false;
    }

    ;
  });
};

/***/ }),

/***/ "./styles/home.module.css":
/*!********************************!*\
  !*** ./styles/home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"sortByDiv": "home_sortByDiv__3kMgX",
	"bookCardContainer": "home_bookCardContainer__1d7AH",
	"bookCard": "home_bookCard__3PLCY"
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RlksR0FBdkIsQ0FKa0UsQ0FTbEU7O0FBQ0EsU0FBT0UsS0FBSyxDQUFDLHdDQUF3QzBCLEtBQXpDLEVBQWdEOUIsY0FBaEQsQ0FBTCxDQUNKcUIsSUFESSxDQUNDLE1BQU9ZLFFBQVAsSUFBb0I7QUFDeEIsUUFBSUEsUUFBUSxDQUFDQyxNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCM0IsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQSxhQUFPLE1BQU15QixRQUFRLENBQUMzQixJQUFULEVBQWI7QUFDRCxLQUhELE1BR087QUFDTCxhQUFPLEtBQVA7QUFDRDs7QUFBQTtBQUNGLEdBUkksQ0FBUDtBQVNELENBbkJNOzs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb29rQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tDYXJkUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcblxyXG5jb25zdCBCb29rQ2FyZDogUmVhY3QuRkM8Qm9va0NhcmRQcm9wcz4gPSAoeyBzdHlsZXMsIGJvb2sgfSkgPT4ge1xyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQ2FyZH0+XHJcbiAgICAgIDxwPnsgYm9vay5zZWxsZXJfdXNlcm5hbWUgfTwvcD5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Jvb2ttb2IuczMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9Cb29rIGltYWdlcy9pSmpRbzZyQ2k0RUJrdHpHVFNFTUhuLnBuZ1wiIC8+XHJcbiAgICAgIDxoND4geyBib29rLnRpdGxlIH0gPC9oND5cclxuICAgICAgPHA+IHsgYm9vay5hdXRob3IgfSA8L3A+XHJcbiAgICAgIDxoNT4geyBib29rLnByaWNlIH0gPC9oNT5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQm9va0NhcmQ7IiwiaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHJvdXRlciwgc3R5bGVzIH0pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BidG59PkRyb3Bkb3duXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPXtzdHlsZXMuZmEgKyBzdHlsZXMuZmFDYXJldERvd259PjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25Db250ZW50fT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPk15IExpc3Q8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5BY2NvdW50PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+TG9nIG91dDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IHsgU2VhcmNoQmFyUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4gXHJcbmNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8U2VhcmNoQmFyUHJvcHM+ID0gKHtzdHlsZXMsIHNldFNlYXJjaFZhbHVlfSkgPT4ge1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZShpbnB1dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJhcn0gb25TdWJtaXQ9eyhlKSA9PiB7aGFuZGxlRm9ybVN1Ym1pdChlKX19PlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIG5hbWU9XCJzZWFyY2hcIiBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB0aXRsZSBvciBzZWxsZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIvPlxyXG4gICAgPC9mb3JtPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGJvb2sgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNoZWNrQXV0aEFuZEdldFVzZXIgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0dXBNYXN0ZXIgfSBmcm9tICdjbHVzdGVyJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBuYXZiYXJTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlVXBsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyJztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9saXN0LWJvb2tzXCIsIHJlcXVlc3RPcHRpb25zKTtcclxuICBjb25zdCBkYXRhOiBib29rW10gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJvb2tzOiBkYXRhIH1cclxuICB9XHJcblxyXG59XHJcbiBcclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9ICh7IGJvb2tzIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxTdHJpbmcgfCBib29sZWFuPigpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbc29ydEJ5QXR0cmlidXRlLCBzZXRTb3J0QnlBdHRyaWJ1dGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlRpdGxlXCIpO1xyXG4gIGNvbnN0IFtib29rTGlzdCwgc2V0Qm9va0xpc3RdID0gdXNlU3RhdGU8Ym9va1tdPihib29rcy5ib29rX2xpc3QpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNoZWNrQXV0aEFuZEdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhib29rcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Qm9va0xpc3QoWy4uLmJvb2tMaXN0XS5zb3J0KCh4LHkpID0+IHtyZXR1cm4geFtzb3J0QnlBdHRyaWJ1dGVdID4geVtzb3J0QnlBdHRyaWJ1dGVdID8gMSA6IC0xfSkpIFxyXG4gIH0sIFtzb3J0QnlBdHRyaWJ1dGVdKTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnRCeURpdn0+IFxyXG4gICAgICAgIDxsYWJlbD5Tb3J0IGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydC1ieS1hdHRyaWJ1dGVcIiBpZD1cInNvcnQtYnktYXR0cmlidXRlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0QnlBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsbGVyX3VzZXJuYW1lXCI+U2VsbGVyPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXV0aG9yXCI+QXV0aG9yPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VcIj5QcmljZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQ2FyZENvbnRhaW5lcn0+XHJcbiAgICAgIHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm9va0NhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtzdHlsZXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiZXhwb3J0IGNvbnN0IGNoZWNrQXV0aEFuZEdldFVzZXIgPSAoKTogUHJvbWlzZTxTdHJpbmcgfCBib29sZWFuPiA9PiB7XG4gIGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gIGlmICghdG9rZW4pIHJldHVybjtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9O1xuXG4gIC8vdmFyIHVzZXI6IEJvb2xlYW4gfCB1c2VyVHlwZVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC11c2VyL1wiICsgdG9rZW4sIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4uXCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNvcnRCeURpdlwiOiBcImhvbWVfc29ydEJ5RGl2X18za01nWFwiLFxuXHRcImJvb2tDYXJkQ29udGFpbmVyXCI6IFwiaG9tZV9ib29rQ2FyZENvbnRhaW5lcl9fMWQ3QUhcIixcblx0XCJib29rQ2FyZFwiOiBcImhvbWVfYm9va0NhcmRfXzNQTENZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hCYXJcIjogXCJuYXZiYXJfc2VhcmNoQmFyX18xeE1vbFwiLFxuXHRcIm5hdmJhclwiOiBcIm5hdmJhcl9uYXZiYXJfXzlISU9rXCIsXG5cdFwiZHJvcGRvd25cIjogXCJuYXZiYXJfZHJvcGRvd25fXzJuZm8zXCIsXG5cdFwiZHJvcGJ0blwiOiBcIm5hdmJhcl9kcm9wYnRuX18yeGhRY1wiLFxuXHRcImRyb3Bkb3duQ29udGVudFwiOiBcIm5hdmJhcl9kcm9wZG93bkNvbnRlbnRfXzJWc0JrXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkJvb2tDYXJkIiwic3R5bGVzIiwiYm9vayIsImJvb2tDYXJkIiwic2VsbGVyX3VzZXJuYW1lIiwidGl0bGUiLCJhdXRob3IiLCJwcmljZSIsIk1lbnUiLCJyb3V0ZXIiLCJkcm9wZG93biIsImRyb3BidG4iLCJmYSIsImZhQ2FyZXREb3duIiwiZHJvcGRvd25Db250ZW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaEJhciIsInNldFNlYXJjaFZhbHVlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hCYXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImNoZWNrQXV0aEFuZEdldFVzZXIiLCJ1c2VSb3V0ZXIiLCJuYXZiYXJTdHlsZXMiLCJnZXRTdGF0aWNQcm9wcyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJib29rcyIsIkhvbWUiLCJ1c2VyIiwic2V0VXNlciIsInNlYXJjaFZhbHVlIiwic29ydEJ5QXR0cmlidXRlIiwic2V0U29ydEJ5QXR0cmlidXRlIiwiYm9va0xpc3QiLCJzZXRCb29rTGlzdCIsImJvb2tfbGlzdCIsImdldFVzZXIiLCJ0aGVuIiwic29ydCIsIngiLCJ5IiwibmF2YmFyIiwic29ydEJ5RGl2IiwiYm9va0NhcmRDb250YWluZXIiLCJtYXAiLCJpbmRleCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==