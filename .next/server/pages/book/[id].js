(() => {
var exports = {};
exports.id = "pages/book/[id]";
exports.ids = ["pages/book/[id]"];
exports.modules = {

/***/ "./components/BookImgDisplay.tsx":
/*!***************************************!*\
  !*** ./components/BookImgDisplay.tsx ***!
  \***************************************/
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
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "@material-ui/icons/NavigateBefore");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\BookImgDisplay.tsx";




const img1 = "https://cdn.shopify.com/s/files/1/0511/7575/1837/files/SELF_HELP_e85aa831-a7bb-4109-ac24-3b970aa1bc82_450x.jpg?v=1627866670";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslv3lzJ6p-jtKwmD6K4w82GdCf5Lj9nxB8Q&usqp=CAU";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdActH06y58UxCkM_JUScrnC1qljZEU6vSkg&usqp=CAU";
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2E7EEvLfn5BXdBZzQzhJxuCbbbXHFBA6tqQ&usqp=CAU";

const BookImgDisplay = ({
  styles
}) => {
  const {
    0: selectedImgIdx,
    1: setSelectedImgIdx
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: imgDisplayWindowIdx,
    1: setImgDisplayWindowIdx
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const imgSrcArray = [img1, img2, img3, img4];
  console.log(imgDisplayWindowIdx);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles.imgDisplayContainer,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: styles.displayedImg,
      src: imgSrcArray[selectedImgIdx]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.window,
      children: [imgSrcArray.slice(imgDisplayWindowIdx, imgDisplayWindowIdx + 3).map((imgLink, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: selectedImgIdx == idx + imgDisplayWindowIdx ? styles.windowImg + " " + styles.selectedImg : styles.windowImg,
        src: imgLink,
        onClick: () => setSelectedImgIdx(idx + imgDisplayWindowIdx)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, undefined)), imgDisplayWindowIdx != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.navIconDiv + " " + styles.navIconDivPrev,
        onClick: () => setImgDisplayWindowIdx(imgDisplayWindowIdx - 1),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: styles.navIcon,
          fontSize: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }, undefined), imgDisplayWindowIdx < imgSrcArray.length - 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.navIconDiv + " " + styles.navIconDivNext,
        onClick: () => setImgDisplayWindowIdx(imgDisplayWindowIdx + 1),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_3___default()), {
          className: styles.navIcon,
          fontSize: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookImgDisplay);

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
  const logOut = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      })
    };
    fetch("http://localhost:8000/api/log-out", requestOptions).then(response => {
      if (response.status == 200) {
        localStorage.removeItem('jwt');
        console.log("You have sucessfully logged out");
        router.push('/log-in');
      }
    });
  };

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
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.dropdownContent,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "My List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        onClick: () => logOut(),
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./components/bookConditionStars.tsx":
/*!*******************************************!*\
  !*** ./components/bookConditionStars.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\bookConditionStars.tsx";



const BookConditionStars = ({
  condition
}) => {
  const starIconStyles = {
    color: "#ffee00",
    fontSize: 35
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: Array.from(Array(5).keys()).map((n, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: n + 1 <= condition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: starIconStyles
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 34
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_2___default()), {
        style: {
          color: "#ffee00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 71
      }, undefined)
    }, void 0, false))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookConditionStars);

/***/ }),

/***/ "./pages/book/[id].tsx":
/*!*****************************!*\
  !*** ./pages/book/[id].tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu.tsx");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_book_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/book.module.css */ "./styles/book.module.css");
/* harmony import */ var _styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BookImgDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BookImgDisplay */ "./components/BookImgDisplay.tsx");
/* harmony import */ var _components_bookConditionStars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/bookConditionStars */ "./components/bookConditionStars.tsx");

var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\pages\\book\\[id].tsx";






const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/api/list-books");
  const data = await res.json();
  console.log(data);
  const paths = data.book_list.map(b => {
    return {
      params: {
        id: b.id.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8000/api/get-book/" + id);
  const book = await res.json();
  return {
    props: {
      book: book
    }
  };
};

const Book = ({
  book
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); //console.log(book);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().appName),
        children: "BookMob"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_2__.default, {
        router: router,
        styles: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookImgDisplay__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Title:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Author:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Date posted:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.date_posted
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Condition:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bookConditionStars__WEBPACK_IMPORTED_MODULE_4__.default, {
            condition: book.condition
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDescription),
            children: book.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Seller:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: book.seller_username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetailsLabel),
            children: "Price:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_book_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookDetail),
            children: ["RM ", book.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);

/***/ }),

/***/ "./styles/book.module.css":
/*!********************************!*\
  !*** ./styles/book.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "book_container__2MZHJ",
	"bookContainer": "book_bookContainer__FBXC5",
	"imgDisplayContainer": "book_imgDisplayContainer__CVMex",
	"displayedImg": "book_displayedImg__14Zg4",
	"window": "book_window__1SaTQ",
	"windowImg": "book_windowImg__1sfOH",
	"selectedImg": "book_selectedImg__2IJQS",
	"navIconDiv": "book_navIconDiv__2R4YT",
	"navIconDivPrev": "book_navIconDivPrev__nSa53",
	"navIconDivNext": "book_navIconDivNext__34D9f",
	"navIcon": "book_navIcon__VFZhX",
	"flexRow": "book_flexRow__180O8",
	"bookDetailsContainer": "book_bookDetailsContainer__3IBcg",
	"bookDetailsLabel": "book_bookDetailsLabel__3YA_y",
	"bookDetail": "book_bookDetail__12yVb",
	"bookDescription": "book_bookDescription__1OTn1"
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
	"appName": "navbar_appName__1w8JB",
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

/***/ "@material-ui/icons/NavigateBefore":
/*!****************************************************!*\
  !*** external "@material-ui/icons/NavigateBefore" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/NavigateBefore");

/***/ }),

/***/ "@material-ui/icons/NavigateNext":
/*!**************************************************!*\
  !*** external "@material-ui/icons/NavigateNext" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/StarBorder");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/book/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYm9vay9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsTUFBTUksSUFBSSxHQUFHLDZIQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLHFHQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLHFHQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLHFHQUFiOztBQUVBLE1BQU1DLGNBQTRELEdBQUcsQ0FBQztBQUFDQyxFQUFBQTtBQUFELENBQUQsS0FBYztBQUNsRixRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ1YsK0NBQVEsQ0FBUyxDQUFULENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQWdEWiwrQ0FBUSxDQUFTLENBQVQsQ0FBOUQ7QUFFQSxRQUFNYSxXQUFXLEdBQUcsQ0FBQ1YsSUFBRCxFQUFNQyxJQUFOLEVBQVdDLElBQVgsRUFBZ0JDLElBQWhCLENBQXBCO0FBQ0FRLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixtQkFBWjtBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFFSCxNQUFNLENBQUNRLG1CQUF2QjtBQUFBLDRCQUNDO0FBQ0MsZUFBUyxFQUFFUixNQUFNLENBQUNTLFlBRG5CO0FBRUMsU0FBRyxFQUFFSixXQUFXLENBQUNKLGNBQUQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUtDO0FBQUssZUFBUyxFQUFFRCxNQUFNLENBQUNVLE1BQXZCO0FBQUEsaUJBQ0VMLFdBQVcsQ0FBQ00sS0FBWixDQUFrQlIsbUJBQWxCLEVBQXNDQSxtQkFBbUIsR0FBQyxDQUExRCxFQUE2RFMsR0FBN0QsQ0FBaUUsQ0FBQ0MsT0FBRCxFQUFVQyxHQUFWLGtCQUNoRTtBQUNDLGlCQUFTLEVBQUViLGNBQWMsSUFBSWEsR0FBRyxHQUFDWCxtQkFBdEIsR0FBNENILE1BQU0sQ0FBQ2UsU0FBUCxHQUFtQixHQUFuQixHQUF5QmYsTUFBTSxDQUFDZ0IsV0FBNUUsR0FBMEZoQixNQUFNLENBQUNlLFNBRDdHO0FBRUMsV0FBRyxFQUFFRixPQUZOO0FBR0MsZUFBTyxFQUFFLE1BQU1YLGlCQUFpQixDQUFDWSxHQUFHLEdBQUNYLG1CQUFMO0FBSGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FERixFQVNFQSxtQkFBbUIsSUFBSSxDQUF2QixpQkFDQTtBQUNDLGlCQUFTLEVBQUVILE1BQU0sQ0FBQ2lCLFVBQVAsR0FBb0IsR0FBcEIsR0FBMEJqQixNQUFNLENBQUNrQixjQUQ3QztBQUVDLGVBQU8sRUFBRSxNQUFNZCxzQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUMsQ0FBckIsQ0FGdEM7QUFBQSwrQkFJQyw4REFBQywwRUFBRDtBQUFvQixtQkFBUyxFQUFFSCxNQUFNLENBQUNtQixPQUF0QztBQUErQyxrQkFBUSxFQUFFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLEVBa0JFaEIsbUJBQW1CLEdBQUdFLFdBQVcsQ0FBQ2UsTUFBWixHQUFtQixDQUF6QyxpQkFDQTtBQUNDLGlCQUFTLEVBQUVwQixNQUFNLENBQUNpQixVQUFQLEdBQW9CLEdBQXBCLEdBQTBCakIsTUFBTSxDQUFDcUIsY0FEN0M7QUFFQyxlQUFPLEVBQUUsTUFBTWpCLHNCQUFzQixDQUFDRCxtQkFBbUIsR0FBQyxDQUFyQixDQUZ0QztBQUFBLCtCQUlDLDhEQUFDLHdFQUFEO0FBQWtCLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ21CLE9BQXBDO0FBQTZDLGtCQUFRLEVBQUU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQXFDQSxDQTNDRDs7QUE2Q0EsaUVBQWVwQixjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBR0EsTUFBTXdCLElBQXlCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVV4QixFQUFBQTtBQUFWLENBQUQsS0FBd0I7QUFDekQsUUFBTXlCLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFVBQU1DLGNBQWMsR0FBRztBQUNuQkMsTUFBQUEsTUFBTSxFQUFFLE1BRFc7QUFFbkJDLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZVO0FBR25CQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxRQUFBQSxLQUFLLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQjtBQURZLE9BQWY7QUFIYSxLQUF2QjtBQVFFQyxJQUFBQSxLQUFLLENBQUMsbUNBQUQsRUFBc0NULGNBQXRDLENBQUwsQ0FDR1UsSUFESCxDQUNTQyxRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDQyxNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFBQSxZQUFZLENBQUNNLFVBQWIsQ0FBd0IsS0FBeEI7QUFDTGpDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBRUtpQixRQUFBQSxNQUFNLENBQUNnQixJQUFQLENBQVksU0FBWjtBQUNEO0FBQ0YsS0FSSDtBQVNGLEdBbEJEOztBQW9CQyxzQkFDRTtBQUFLLGFBQVMsRUFBRXhDLE1BQU0sQ0FBQ3lDLFFBQXZCO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUV6QyxNQUFNLENBQUMwQyxPQUExQjtBQUFBLDZCQUNFLDhEQUFDLHVFQUFEO0FBQWlCLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssZUFBUyxFQUFFM0MsTUFBTSxDQUFDNEMsZUFBdkI7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFPLEVBQUUsTUFBTW5CLE1BQU0sRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FsQ0Q7O0FBb0NBLGlFQUFlRixJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTs7QUFPQSxNQUFNd0Isa0JBQXFELEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBbUI7QUFDaEYsUUFBTUMsY0FBYyxHQUFHO0FBQ3RCQyxJQUFBQSxLQUFLLEVBQUUsU0FEZTtBQUV0QlAsSUFBQUEsUUFBUSxFQUFFO0FBRlksR0FBdkI7QUFJQSxzQkFDQztBQUFBLGNBQ0VRLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNFLElBQVQsRUFBWCxFQUE0QnpDLEdBQTVCLENBQWdDLENBQUMwQyxDQUFELEVBQUl4QyxHQUFKLGtCQUMxQjtBQUFBLGdCQUFJd0MsQ0FBQyxHQUFDLENBQUYsSUFBT04sU0FBUCxnQkFBbUIsOERBQUMsZ0VBQUQ7QUFBVSxhQUFLLEVBQUVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5CLGdCQUF3RCw4REFBQyxzRUFBRDtBQUFnQixhQUFLLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1RCxxQkFETjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQU9BLENBWkQ7O0FBY0EsaUVBQWVILGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRU8sTUFBTVcsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLEdBQUcsR0FBRyxNQUFNeEIsS0FBSyxDQUFDLHNDQUFELENBQXZCO0FBQ0EsUUFBTXlCLElBQW9CLEdBQUcsTUFBTUQsR0FBRyxDQUFDRSxJQUFKLEVBQW5DO0FBQ0R2RCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXFELElBQVo7QUFDQyxRQUFNRSxLQUFLLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlbkQsR0FBZixDQUFvQm9ELENBQUQsSUFBTztBQUN0QyxXQUFPO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxFQUFFLEVBQUVGLENBQUMsQ0FBQ0UsRUFBRixDQUFLQyxRQUFMO0FBQU47QUFESCxLQUFQO0FBR0QsR0FKYSxDQUFkO0FBTUEsU0FBTztBQUNMTCxJQUFBQSxLQURLO0FBRUxNLElBQUFBLFFBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQWRNO0FBZ0JBLE1BQU1DLGNBQThCLEdBQUUsTUFBT0MsT0FBUCxJQUE2RDtBQUN4RyxRQUFNSixFQUFFLEdBQUdJLE9BQU8sQ0FBQ0wsTUFBUixDQUFlQyxFQUExQjtBQUNBLFFBQU1QLEdBQUcsR0FBRyxNQUFNeEIsS0FBSyxDQUFDLHdDQUF3QytCLEVBQXpDLENBQXZCO0FBQ0EsUUFBTUssSUFBVSxHQUFHLE1BQU1aLEdBQUcsQ0FBQ0UsSUFBSixFQUF6QjtBQUVBLFNBQU87QUFDTFcsSUFBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLElBQUksRUFBRUE7QUFBUjtBQURGLEdBQVA7QUFHRCxDQVJNOztBQVVQLE1BQU1FLElBQXdDLEdBQUcsQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FBYztBQUM5RCxRQUFNL0MsTUFBTSxHQUFHK0Isc0RBQVMsRUFBeEIsQ0FEOEQsQ0FFOUQ7O0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVFLDBFQUFoQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFRCx5RUFBaEI7QUFBQSw4QkFDQztBQUFJLGlCQUFTLEVBQUVBLDBFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUssOERBQUMscURBQUQ7QUFBTSxjQUFNLEVBQUVoQyxNQUFkO0FBQXNCLGNBQU0sRUFBRWdDLGtFQUFZQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQU9DO0FBQUssZUFBUyxFQUFFQyw4RUFBaEI7QUFBQSw4QkFDQyw4REFBQywrREFBRDtBQUFnQixjQUFNLEVBQUVBLGdFQUFVQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBSyxpQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLHFGQUFoQjtBQUFBLGtDQUNDO0FBQU8scUJBQVMsRUFBRUEsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLHNCQUFzQ2MsSUFBSSxDQUFDVztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELGVBSUM7QUFBTyxxQkFBUyxFQUFFekIsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpELGVBS0M7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLHNCQUFzQ2MsSUFBSSxDQUFDWTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxELGVBT0M7QUFBTyxxQkFBUyxFQUFFMUIsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBELGVBUUM7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLHNCQUFzQ2MsSUFBSSxDQUFDYTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJELGVBVUM7QUFBTyxxQkFBUyxFQUFFM0IsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBV0MsOERBQUMsbUVBQUQ7QUFBb0IscUJBQVMsRUFBRWMsSUFBSSxDQUFDdkI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFjQztBQUFLLG1CQUFTLEVBQUVTLHFGQUFoQjtBQUFBLGtDQUVDO0FBQU8scUJBQVMsRUFBRUEsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELGVBR0M7QUFBRyxxQkFBUyxFQUFFQSxnRkFBZDtBQUFBLHNCQUEyQ2MsSUFBSSxDQUFDZTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhELGVBS0M7QUFBTyxxQkFBUyxFQUFFN0IsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxELGVBTUM7QUFBRyxxQkFBUyxFQUFFQSwyRUFBZDtBQUFBLHNCQUFzQ2MsSUFBSSxDQUFDZ0I7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORCxlQVFDO0FBQU8scUJBQVMsRUFBRTlCLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRCxlQVNDO0FBQUcscUJBQVMsRUFBRUEsMkVBQWQ7QUFBQSw4QkFBeUNjLElBQUksQ0FBQ2lCLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRCxlQXVDQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBMkNBLENBL0NEOztBQWlEQSxpRUFBZWYsSUFBZjs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jvb2tJbWdEaXNwbGF5LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9va0NvbmRpdGlvblN0YXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rL1tpZF0udHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9ib29rLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51VHdvVG9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZpZ2F0ZUJlZm9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlJztcclxuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEJvb2tJbWdEaXNwbGF5UHJvcHMge1xyXG5cdHN0eWxlczoge3JlYWRvbmx5IFtrZXk6IHN0cmluZ106IHN0cmluZzt9LFxyXG59XHJcblxyXG5jb25zdCBpbWcxID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUxMS83NTc1LzE4MzcvZmlsZXMvU0VMRl9IRUxQX2U4NWFhODMxLWE3YmItNDEwOS1hYzI0LTNiOTcwYWExYmM4Ml80NTB4LmpwZz92PTE2Mjc4NjY2NzBcIjtcclxuY29uc3QgaW1nMiA9IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU3NsdjNseko2cC1qdEt3bUQ2SzR3ODJHZENmNUxqOW54QjhRJnVzcXA9Q0FVXCI7XHJcbmNvbnN0IGltZzMgPSBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RkQWN0SDA2eTU4VXhDa01fSlVTY3JuQzFxbGpaRVU2dlNrZyZ1c3FwPUNBVVwiO1xyXG5jb25zdCBpbWc0ID0gXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTMkU3RUV2TGZuNUJYZEJaelF6aEp4dUNiYmJYSEZCQTZ0cVEmdXNxcD1DQVVcIjtcclxuIFxyXG5jb25zdCBCb29rSW1nRGlzcGxheTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Qm9va0ltZ0Rpc3BsYXlQcm9wcz4gPSAoe3N0eWxlc30pID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRJbWdJZHgsIHNldFNlbGVjdGVkSW1nSWR4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblx0Y29uc3QgW2ltZ0Rpc3BsYXlXaW5kb3dJZHgsIHNldEltZ0Rpc3BsYXlXaW5kb3dJZHhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcblx0Y29uc3QgaW1nU3JjQXJyYXkgPSBbaW1nMSxpbWcyLGltZzMsaW1nNF1cclxuXHRjb25zb2xlLmxvZyhpbWdEaXNwbGF5V2luZG93SWR4KTtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGlzcGxheUNvbnRhaW5lcn0gPlxyXG5cdFx0XHQ8aW1nIFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXllZEltZ30gXHJcblx0XHRcdFx0c3JjPXtpbWdTcmNBcnJheVtzZWxlY3RlZEltZ0lkeF19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2luZG93fSA+XHJcblx0XHRcdFx0e2ltZ1NyY0FycmF5LnNsaWNlKGltZ0Rpc3BsYXlXaW5kb3dJZHgsaW1nRGlzcGxheVdpbmRvd0lkeCszKS5tYXAoKGltZ0xpbmssIGlkeCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8aW1nIFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c2VsZWN0ZWRJbWdJZHggPT0gaWR4K2ltZ0Rpc3BsYXlXaW5kb3dJZHggPyBzdHlsZXMud2luZG93SW1nICsgXCIgXCIgKyBzdHlsZXMuc2VsZWN0ZWRJbWcgOiBzdHlsZXMud2luZG93SW1nfSBcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2ltZ0xpbmt9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJbWdJZHgoaWR4K2ltZ0Rpc3BsYXlXaW5kb3dJZHgpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nRGlzcGxheVdpbmRvd0lkeCAhPSAwICYmXHJcblx0XHRcdFx0XHQ8ZGl2IFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5uYXZJY29uRGl2ICsgXCIgXCIgKyBzdHlsZXMubmF2SWNvbkRpdlByZXZ9ICBcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SW1nRGlzcGxheVdpbmRvd0lkeChpbWdEaXNwbGF5V2luZG93SWR4LTEpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TmF2aWdhdGVCZWZvcmVJY29uIGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb259IGZvbnRTaXplPXtcImxhcmdlXCJ9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdEaXNwbGF5V2luZG93SWR4IDwgaW1nU3JjQXJyYXkubGVuZ3RoLTMgJiZcclxuXHRcdFx0XHRcdDxkaXYgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb25EaXYgKyBcIiBcIiArIHN0eWxlcy5uYXZJY29uRGl2TmV4dH0gXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEltZ0Rpc3BsYXlXaW5kb3dJZHgoaW1nRGlzcGxheVdpbmRvd0lkeCsxKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PE5hdmlnYXRlTmV4dEljb24gY2xhc3NOYW1lPXtzdHlsZXMubmF2SWNvbn0gZm9udFNpemU9e1wibGFyZ2VcIn0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblx0ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCb29rSW1nRGlzcGxheTsiLCJpbXBvcnQgeyBNZW51UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCBNZW51VHdvVG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnVUd29Ub25lJztcclxuaW1wb3J0IHsgR2lIYW1idXJnZXJNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvR2knO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHJvdXRlciwgc3R5bGVzIH0pID0+IHtcclxuXHRjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKVxyXG4gICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZy1vdXRcIiwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0Jyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIllvdSBoYXZlIHN1Y2Vzc2Z1bGx5IGxvZ2dlZCBvdXRcIik7XHJcblxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2ctaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cdH1cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wYnRufT5cclxuICAgICAgICA8TWVudVR3b1RvbmVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiA1MCB9fS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duQ29udGVudH0+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBMaXN0PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+QWNjb3VudDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5Mb2cgb3V0PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgU3Rhckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXInO1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgeyBncmVlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgQm9va0NvbmRpdGlvblN0YXJzUHJvcHMge1xyXG5cdGNvbmRpdGlvbjogbnVtYmVyXHJcbn1cclxuIFxyXG5jb25zdCBCb29rQ29uZGl0aW9uU3RhcnM6IFJlYWN0LkZDPEJvb2tDb25kaXRpb25TdGFyc1Byb3BzPiA9ICh7IGNvbmRpdGlvbiB9KSA9PiB7XHJcblx0Y29uc3Qgc3Rhckljb25TdHlsZXMgPSB7XHJcblx0XHRjb2xvcjogXCIjZmZlZTAwXCIsXHJcblx0XHRmb250U2l6ZTogMzVcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtBcnJheS5mcm9tKEFycmF5KDUpLmtleXMoKSkubWFwKChuLCBpZHgpID0+IChcclxuICAgICAgICAgIDw+eyBuKzEgPD0gY29uZGl0aW9uID8gPFN0YXJJY29uIHN0eWxlPXtzdGFySWNvblN0eWxlc30vPiA6IDxTdGFyQm9yZGVySWNvbiBzdHlsZT17eyBjb2xvcjogXCIjZmZlZTAwXCIgfX0vPn08Lz5cclxuICAgICAgICApKX1cclxuXHRcdDwvZGl2PlxyXG5cdCApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQm9va0NvbmRpdGlvblN0YXJzOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IG5hdmJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgYm9va1N0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYm9vay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJvb2tJbWdEaXNwbGF5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0ltZ0Rpc3BsYXknO1xyXG5pbXBvcnQgeyBib29rLCBib29rTGlzdEFwaVJlcywgU3RhdGljUGF0aHNCb29rLCBCb29rUHJvcHMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ob21lXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzUmVzdWx0LCBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1BhdGhzUmVzdWx0IH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBCb29rQ29uZGl0aW9uU3RhcnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib29rQ29uZGl0aW9uU3RhcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGlzdC1ib29rc1wiKTtcclxuICBjb25zdCBkYXRhOiBib29rTGlzdEFwaVJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLmJvb2tfbGlzdC5tYXAoKGIpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZDogYi5pZC50b1N0cmluZygpIH1cclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPSBhc3luYyAoY29udGV4dCk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8Qm9va1Byb3BzPj4gPT4ge1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldC1ib29rL1wiICsgaWQpO1xyXG4gIGNvbnN0IGJvb2s6IGJvb2sgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYm9vazogYm9vayB9XHJcbiAgfTtcclxufTtcclxuIFxyXG5jb25zdCBCb29rOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxCb29rUHJvcHM+ID0gKHsgYm9vayB9KSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Ly9jb25zb2xlLmxvZyhib29rKTtcclxuXHRcclxuXHRyZXR1cm4gKCBcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMubmF2YmFyfT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtuYXZiYXJTdHlsZXMuYXBwTmFtZX0+Qm9va01vYjwvaDE+XHJcbiAgICAgICAgPE1lbnUgcm91dGVyPXtyb3V0ZXJ9IHN0eWxlcz17bmF2YmFyU3R5bGVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0NvbnRhaW5lcn0+XHJcblx0XHRcdFx0PEJvb2tJbWdEaXNwbGF5IHN0eWxlcz17Ym9va1N0eWxlc30vPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib29rU3R5bGVzLmZsZXhSb3d9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNDb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PlRpdGxlOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay50aXRsZX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkF1dGhvcjo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+e2Jvb2suYXV0aG9yfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+RGF0ZSBwb3N0ZWQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWx9Pntib29rLmRhdGVfcG9zdGVkfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+Q29uZGl0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxCb29rQ29uZGl0aW9uU3RhcnMgY29uZGl0aW9uPXtib29rLmNvbmRpdGlvbn0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0NvbnRhaW5lcn0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtib29rU3R5bGVzLmJvb2tEZXRhaWxzTGFiZWx9PkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGVzY3JpcHRpb259Pntib29rLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbHNMYWJlbH0+U2VsbGVyOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsfT57Ym9vay5zZWxsZXJfdXNlcm5hbWV9PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Ym9va1N0eWxlcy5ib29rRGV0YWlsc0xhYmVsfT5QcmljZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Jvb2tTdHlsZXMuYm9va0RldGFpbH0+Uk0ge2Jvb2sucHJpY2V9PC9wPlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImJvb2tfY29udGFpbmVyX18yTVpISlwiLFxuXHRcImJvb2tDb250YWluZXJcIjogXCJib29rX2Jvb2tDb250YWluZXJfX0ZCWEM1XCIsXG5cdFwiaW1nRGlzcGxheUNvbnRhaW5lclwiOiBcImJvb2tfaW1nRGlzcGxheUNvbnRhaW5lcl9fQ1ZNZXhcIixcblx0XCJkaXNwbGF5ZWRJbWdcIjogXCJib29rX2Rpc3BsYXllZEltZ19fMTRaZzRcIixcblx0XCJ3aW5kb3dcIjogXCJib29rX3dpbmRvd19fMVNhVFFcIixcblx0XCJ3aW5kb3dJbWdcIjogXCJib29rX3dpbmRvd0ltZ19fMXNmT0hcIixcblx0XCJzZWxlY3RlZEltZ1wiOiBcImJvb2tfc2VsZWN0ZWRJbWdfXzJJSlFTXCIsXG5cdFwibmF2SWNvbkRpdlwiOiBcImJvb2tfbmF2SWNvbkRpdl9fMlI0WVRcIixcblx0XCJuYXZJY29uRGl2UHJldlwiOiBcImJvb2tfbmF2SWNvbkRpdlByZXZfX25TYTUzXCIsXG5cdFwibmF2SWNvbkRpdk5leHRcIjogXCJib29rX25hdkljb25EaXZOZXh0X18zNEQ5ZlwiLFxuXHRcIm5hdkljb25cIjogXCJib29rX25hdkljb25fX1ZGWmhYXCIsXG5cdFwiZmxleFJvd1wiOiBcImJvb2tfZmxleFJvd19fMTgwTzhcIixcblx0XCJib29rRGV0YWlsc0NvbnRhaW5lclwiOiBcImJvb2tfYm9va0RldGFpbHNDb250YWluZXJfXzNJQmNnXCIsXG5cdFwiYm9va0RldGFpbHNMYWJlbFwiOiBcImJvb2tfYm9va0RldGFpbHNMYWJlbF9fM1lBX3lcIixcblx0XCJib29rRGV0YWlsXCI6IFwiYm9va19ib29rRGV0YWlsX18xMnlWYlwiLFxuXHRcImJvb2tEZXNjcmlwdGlvblwiOiBcImJvb2tfYm9va0Rlc2NyaXB0aW9uX18xT1RuMVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwibmF2YmFyX25hdmJhcl9fOUhJT2tcIixcblx0XCJhcHBOYW1lXCI6IFwibmF2YmFyX2FwcE5hbWVfXzF3OEpCXCIsXG5cdFwic2VhcmNoQmFyXCI6IFwibmF2YmFyX3NlYXJjaEJhcl9fMXhNb2xcIixcblx0XCJzZWFyY2hJbnB1dFwiOiBcIm5hdmJhcl9zZWFyY2hJbnB1dF9fM09sTThcIixcblx0XCJzZWFyY2hCdXR0b25cIjogXCJuYXZiYXJfc2VhcmNoQnV0dG9uX19Tb0NnM1wiLFxuXHRcImRyb3Bkb3duXCI6IFwibmF2YmFyX2Ryb3Bkb3duX18ybmZvM1wiLFxuXHRcImRyb3BidG5cIjogXCJuYXZiYXJfZHJvcGJ0bl9fMnhoUWNcIixcblx0XCJkcm9wZG93bkNvbnRlbnRcIjogXCJuYXZiYXJfZHJvcGRvd25Db250ZW50X18yVnNCa1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVUd29Ub25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRlQmVmb3JlSWNvbiIsIk5hdmlnYXRlTmV4dEljb24iLCJpbWcxIiwiaW1nMiIsImltZzMiLCJpbWc0IiwiQm9va0ltZ0Rpc3BsYXkiLCJzdHlsZXMiLCJzZWxlY3RlZEltZ0lkeCIsInNldFNlbGVjdGVkSW1nSWR4IiwiaW1nRGlzcGxheVdpbmRvd0lkeCIsInNldEltZ0Rpc3BsYXlXaW5kb3dJZHgiLCJpbWdTcmNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJpbWdEaXNwbGF5Q29udGFpbmVyIiwiZGlzcGxheWVkSW1nIiwid2luZG93Iiwic2xpY2UiLCJtYXAiLCJpbWdMaW5rIiwiaWR4Iiwid2luZG93SW1nIiwic2VsZWN0ZWRJbWciLCJuYXZJY29uRGl2IiwibmF2SWNvbkRpdlByZXYiLCJuYXZJY29uIiwibGVuZ3RoIiwibmF2SWNvbkRpdk5leHQiLCJNZW51VHdvVG9uZUljb24iLCJNZW51Iiwicm91dGVyIiwibG9nT3V0IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZHJvcGRvd24iLCJkcm9wYnRuIiwiZm9udFNpemUiLCJkcm9wZG93bkNvbnRlbnQiLCJTdGFySWNvbiIsIlN0YXJCb3JkZXJJY29uIiwiQm9va0NvbmRpdGlvblN0YXJzIiwiY29uZGl0aW9uIiwic3Rhckljb25TdHlsZXMiLCJjb2xvciIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJuIiwidXNlUm91dGVyIiwibmF2YmFyU3R5bGVzIiwiYm9va1N0eWxlcyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZGF0YSIsImpzb24iLCJwYXRocyIsImJvb2tfbGlzdCIsImIiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJib29rIiwicHJvcHMiLCJCb29rIiwiY29udGFpbmVyIiwibmF2YmFyIiwiYXBwTmFtZSIsImJvb2tDb250YWluZXIiLCJmbGV4Um93IiwiYm9va0RldGFpbHNDb250YWluZXIiLCJib29rRGV0YWlsc0xhYmVsIiwiYm9va0RldGFpbCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZV9wb3N0ZWQiLCJib29rRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInNlbGxlcl91c2VybmFtZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==