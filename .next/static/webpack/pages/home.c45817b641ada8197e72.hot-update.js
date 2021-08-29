"use strict";
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/ImageUploader.tsx":
/*!**************************************!*\
  !*** ./components/ImageUploader.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_aws_s3_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aws-s3-typescript */ "./node_modules/react-aws-s3-typescript/dist/index.js");
/* harmony import */ var react_aws_s3_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aws_s3_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\VS Code\\VSCode\\BookMob\\frontend\\components\\ImageUploader.tsx",
    _this = undefined;


var config = {
  bucketName: 'bookmob',
  region: 'ap-southeast-1',
  accessKeyId: 'AKIAQLAHBKARMDEMNZHJ',
  secretAccessKey: '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',
  dirName: dirName
};

var ImageUploader = function ImageUploader() {
  var upload = /*#__PURE__*/function () {
    var _ref = (0,C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var s3, filename, res;
      return C_Users_user_VS_Code_VSCode_BookMob_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              s3 = new (react_aws_s3_typescript__WEBPACK_IMPORTED_MODULE_3___default())(config);
              filename = 'filename-to-be-uploaded';
              _context.prev = 2;
              _context.next = 5;
              return s3.uploadFile(e.target.files[0]);

            case 5:
              res = _context.sent;
              console.log(res);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              /* handle the exception */

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function upload(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    type: "file",
    onChange: function onChange(e) {
      return setTimeout(function () {
        return upload(e);
      }, 3000);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = ImageUploader;
/* harmony default export */ __webpack_exports__["default"] = (ImageUploader);

var _c;

$RefreshReg$(_c, "ImageUploader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5jNDU4MTdiNjQxYWRhODE5N2U3Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BLElBQU1DLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxVQUFVLEVBQUUsU0FEQztBQUViQyxFQUFBQSxNQUFNLEVBQUUsZ0JBRks7QUFHYkMsRUFBQUEsV0FBVyxFQUFFLHNCQUhBO0FBSWJDLEVBQUFBLGVBQWUsRUFBRSwwQ0FKSjtBQUtiQyxFQUFBQSxPQUFPLEVBQVBBO0FBTGEsQ0FBZjs7QUFRQSxJQUFNQyxhQUEyQyxHQUFHLFNBQTlDQSxhQUE4QyxHQUFNO0FBRXhELE1BQU1DLE1BQU07QUFBQSwyU0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsY0FBQUEsRUFGTyxHQUVGLElBQUlWLGdFQUFKLENBQWtCQyxNQUFsQixDQUZFO0FBSVBVLGNBQUFBLFFBSk8sR0FJSSx5QkFKSjtBQUFBO0FBQUE7QUFBQSxxQkFNU0QsRUFBRSxDQUFDRSxVQUFILENBQWNILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFkLENBTlQ7O0FBQUE7QUFNSEMsY0FBQUEsR0FORztBQVFUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQVJTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1RDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBOztBQVpTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5ULE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFlQSxzQkFDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9TLFVBQVUsQ0FBQztBQUFBLGVBQU1WLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFaO0FBQUEsT0FBRCxFQUFrQixJQUFsQixDQUFqQjtBQUFBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBcEJEOztLQUFNRjtBQXNCTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdFMzQ2xpZW50IGZyb20gJ3JlYWN0LWF3cy1zMy10eXBlc2NyaXB0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VVcGxvYWRlclByb3BzIHtcclxuICBcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGJ1Y2tldE5hbWU6ICdib29rbW9iJyxcclxuICByZWdpb246ICdhcC1zb3V0aGVhc3QtMScsXHJcbiAgYWNjZXNzS2V5SWQ6ICdBS0lBUUxBSEJLQVJNREVNTlpISicsXHJcbiAgc2VjcmV0QWNjZXNzS2V5OiAneUxVMSt2bVl0NkxLVTBKWkpUMTNrc29QcTJGQ2hlTmRlUnVDanhUKycsXHJcbiAgZGlyTmFtZVxyXG59XHJcbiBcclxuY29uc3QgSW1hZ2VVcGxvYWRlcjogUmVhY3QuRkM8SW1hZ2VVcGxvYWRlclByb3BzPiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgdXBsb2FkID0gYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICBjb25zdCBzMyA9IG5ldyBSZWFjdFMzQ2xpZW50KGNvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWUgPSAnZmlsZW5hbWUtdG8tYmUtdXBsb2FkZWQnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzMy51cGxvYWRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhleGNlcHRpb24pO1xyXG4gICAgICAgIC8qIGhhbmRsZSB0aGUgZXhjZXB0aW9uICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoIFxyXG4gICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHVwbG9hZChlKSwgMzAwMCl9Lz5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0UzNDbGllbnQiLCJjb25maWciLCJidWNrZXROYW1lIiwicmVnaW9uIiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJkaXJOYW1lIiwiSW1hZ2VVcGxvYWRlciIsInVwbG9hZCIsImUiLCJzMyIsImZpbGVuYW1lIiwidXBsb2FkRmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9