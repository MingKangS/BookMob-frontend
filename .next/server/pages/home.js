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
/* harmony import */ var _material_ui_icons_MenuTwoTone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/MenuTwoTone */ "@material-ui/icons/MenuTwoTone");
/* harmony import */ var _material_ui_icons_MenuTwoTone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuTwoTone__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\Menu.tsx";


const Menu = ({
  router,
  styles
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles.dropdown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: styles.dropbtn,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_MenuTwoTone__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: {
          fontSize: 50
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.dropdownContent,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "My List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
/* harmony import */ var _material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/SearchTwoTone */ "@material-ui/icons/SearchTwoTone");
/* harmony import */ var _material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2__);

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
    autoComplete: "off",
    className: styles.searchBar,
    onSubmit: e => {
      handleFormSubmit(e);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: styles.searchInput,
      type: "text",
      name: "search",
      placeholder: "Search by title or seller",
      onChange: e => setInput(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_SearchTwoTone__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: styles.searchButton,
      style: {
        fontSize: 48
      },
      onClick: () => {
        setSearchValue(input);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setBookList([...bookList].filter(book => {
      return book.title.toLowerCase().includes(searchValue.toLowerCase()) || book.seller_username.toLowerCase().includes(searchValue.toLowerCase());
    }));
  }, [searchValue]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.default, {
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default()),
        setSearchValue: setSearchValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_5__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().sortByDiv),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sort by:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "seller_username",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "author",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "price",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().bookCardContainer),
      children: bookList.map((book, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        book: book,
        styles: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
	"navbar": "navbar_navbar__9HIOk",
	"searchBar": "navbar_searchBar__1xMol",
	"searchInput": "navbar_searchInput__3OlM8",
	"searchButton": "navbar_searchButton__SoCg3",
	"dropdown": "navbar_dropdown__2nfo3",
	"dropbtn": "navbar_dropbtn__2xhQc",
	"dropdownContent": "navbar_dropdownContent__2VsBk"
};


/***/ }),

/***/ "@material-ui/icons/MenuTwoTone":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MenuTwoTone" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/MenuTwoTone");

/***/ }),

/***/ "@material-ui/icons/SearchTwoTone":
/*!***************************************************!*\
  !*** external "@material-ui/icons/SearchTwoTone" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/SearchTwoTone");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDVEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jvb2tDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVR3b1RvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoVHdvVG9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rQ2FyZFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5cclxuY29uc3QgQm9va0NhcmQ6IFJlYWN0LkZDPEJvb2tDYXJkUHJvcHM+ID0gKHsgc3R5bGVzLCBib29rIH0pID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0NhcmR9PlxyXG4gICAgICA8cD57IGJvb2suc2VsbGVyX3VzZXJuYW1lIH08L3A+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9ib29rbW9iLnMzLWFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vQm9vayBpbWFnZXMvaUpqUW82ckNpNEVCa3R6R1RTRU1Ibi5wbmdcIiAvPlxyXG4gICAgICA8aDQ+IHsgYm9vay50aXRsZSB9IDwvaDQ+XHJcbiAgICAgIDxwPiB7IGJvb2suYXV0aG9yIH0gPC9wPlxyXG4gICAgICA8aDU+IHsgYm9vay5wcmljZSB9IDwvaDU+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tDYXJkOyIsImltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IE1lbnVUd29Ub25lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVR3b1RvbmUnO1xyXG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9HaSc7XHJcblxyXG5jb25zdCBNZW51OiBSZWFjdC5GQzxNZW51UHJvcHM+ID0gKHsgcm91dGVyLCBzdHlsZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGJ0bn0+XHJcbiAgICAgICAgPE1lbnVUd29Ub25lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogNTAgfX0vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bkNvbnRlbnR9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+TXkgTGlzdDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPkFjY291bnQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5Mb2cgb3V0PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgeyBTZWFyY2hCYXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hvbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWFyY2hUd29Ub25lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoVHdvVG9uZSc7XHJcbiBcclxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxTZWFyY2hCYXJQcm9wcz4gPSAoe3N0eWxlcywgc2V0U2VhcmNoVmFsdWV9KSA9PiB7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaFZhbHVlKGlucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfSBvblN1Ym1pdD17KGUpID0+IHtoYW5kbGVGb3JtU3VibWl0KGUpfX0+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH1cclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIG5hbWU9XCJzZWFyY2hcIiBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB0aXRsZSBvciBzZWxsZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8U2VhcmNoVHdvVG9uZUljb24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnV0dG9ufSBcclxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogNDggfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VhcmNoVmFsdWUoaW5wdXQpO319XHJcbiAgICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBib29rIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjaGVja0F1dGhBbmRHZXRVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldHVwTWFzdGVyIH0gZnJvbSAnY2x1c3Rlcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgbmF2YmFyU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZVVwbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlcic7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGlzdC1ib29rc1wiLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgY29uc3QgZGF0YTogYm9va1tdID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBib29rczogZGF0YSB9XHJcbiAgfVxyXG5cclxufVxyXG4gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgYm9vbGVhbj4oKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3NvcnRCeUF0dHJpYnV0ZSwgc2V0U29ydEJ5QXR0cmlidXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJUaXRsZVwiKTtcclxuICBjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVN0YXRlPGJvb2tbXT4oYm9va3MuYm9va19saXN0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjaGVja0F1dGhBbmRHZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coYm9va3MpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvb2tMaXN0KFsuLi5ib29rTGlzdF0uc29ydCgoeCx5KSA9PiB7XHJcbiAgICAgIHJldHVybiB4W3NvcnRCeUF0dHJpYnV0ZV0gPiB5W3NvcnRCeUF0dHJpYnV0ZV0gPyAxIDogLTFcclxuICAgIH0pKSBcclxuICB9LCBbc29ydEJ5QXR0cmlidXRlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRCb29rTGlzdChbLi4uYm9va0xpc3RdLmZpbHRlcigoYm9vaykgPT4ge1xyXG4gICAgICByZXR1cm4gYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8IFxyXG4gICAgICAgIGJvb2suc2VsbGVyX3VzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgIH0pKSBcclxuICB9LCBbc2VhcmNoVmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyU3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzdHlsZXM9e25hdmJhclN0eWxlc30gc2V0U2VhcmNoVmFsdWU9e3NldFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnRCeURpdn0+IFxyXG4gICAgICAgIDxsYWJlbD5Tb3J0IGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydC1ieS1hdHRyaWJ1dGVcIiBpZD1cInNvcnQtYnktYXR0cmlidXRlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0QnlBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsbGVyX3VzZXJuYW1lXCI+U2VsbGVyPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXV0aG9yXCI+QXV0aG9yPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VcIj5QcmljZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQ2FyZENvbnRhaW5lcn0+XHJcbiAgICAgIHtib29rTGlzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm9va0NhcmQgYm9vaz17Ym9va30gc3R5bGVzPXtzdHlsZXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiZXhwb3J0IGNvbnN0IGNoZWNrQXV0aEFuZEdldFVzZXIgPSAoKTogUHJvbWlzZTxTdHJpbmcgfCBib29sZWFuPiA9PiB7XG4gIGNvbnN0IHRva2VuOiBTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gIGlmICghdG9rZW4pIHJldHVybjtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9O1xuXG4gIC8vdmFyIHVzZXI6IEJvb2xlYW4gfCB1c2VyVHlwZVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC11c2VyL1wiICsgdG9rZW4sIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4uXCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNvcnRCeURpdlwiOiBcImhvbWVfc29ydEJ5RGl2X18za01nWFwiLFxuXHRcImJvb2tDYXJkQ29udGFpbmVyXCI6IFwiaG9tZV9ib29rQ2FyZENvbnRhaW5lcl9fMWQ3QUhcIixcblx0XCJib29rQ2FyZFwiOiBcImhvbWVfYm9va0NhcmRfXzNQTENZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZiYXJcIjogXCJuYXZiYXJfbmF2YmFyX185SElPa1wiLFxuXHRcInNlYXJjaEJhclwiOiBcIm5hdmJhcl9zZWFyY2hCYXJfXzF4TW9sXCIsXG5cdFwic2VhcmNoSW5wdXRcIjogXCJuYXZiYXJfc2VhcmNoSW5wdXRfXzNPbE04XCIsXG5cdFwic2VhcmNoQnV0dG9uXCI6IFwibmF2YmFyX3NlYXJjaEJ1dHRvbl9fU29DZzNcIixcblx0XCJkcm9wZG93blwiOiBcIm5hdmJhcl9kcm9wZG93bl9fMm5mbzNcIixcblx0XCJkcm9wYnRuXCI6IFwibmF2YmFyX2Ryb3BidG5fXzJ4aFFjXCIsXG5cdFwiZHJvcGRvd25Db250ZW50XCI6IFwibmF2YmFyX2Ryb3Bkb3duQ29udGVudF9fMlZzQmtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51VHdvVG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoVHdvVG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkJvb2tDYXJkIiwic3R5bGVzIiwiYm9vayIsImJvb2tDYXJkIiwic2VsbGVyX3VzZXJuYW1lIiwidGl0bGUiLCJhdXRob3IiLCJwcmljZSIsIk1lbnVUd29Ub25lSWNvbiIsIk1lbnUiLCJyb3V0ZXIiLCJkcm9wZG93biIsImRyb3BidG4iLCJmb250U2l6ZSIsImRyb3Bkb3duQ29udGVudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJTZWFyY2hUd29Ub25lSWNvbiIsIlNlYXJjaEJhciIsInNldFNlYXJjaFZhbHVlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoQnV0dG9uIiwidXNlRWZmZWN0IiwiY2hlY2tBdXRoQW5kR2V0VXNlciIsInVzZVJvdXRlciIsIm5hdmJhclN0eWxlcyIsImdldFN0YXRpY1Byb3BzIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImJvb2tzIiwiSG9tZSIsInVzZXIiLCJzZXRVc2VyIiwic2VhcmNoVmFsdWUiLCJzb3J0QnlBdHRyaWJ1dGUiLCJzZXRTb3J0QnlBdHRyaWJ1dGUiLCJib29rTGlzdCIsInNldEJvb2tMaXN0IiwiYm9va19saXN0IiwiZ2V0VXNlciIsInRoZW4iLCJzb3J0IiwieCIsInkiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmF2YmFyIiwic29ydEJ5RGl2IiwiYm9va0NhcmRDb250YWluZXIiLCJtYXAiLCJpbmRleCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==