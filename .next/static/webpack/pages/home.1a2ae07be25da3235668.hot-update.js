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
  dirName: 'Book images'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4xYTJhZTA3YmUyNWRhMzIzNTY2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BLElBQU1DLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxVQUFVLEVBQUUsU0FEQztBQUViQyxFQUFBQSxNQUFNLEVBQUUsZ0JBRks7QUFHYkMsRUFBQUEsV0FBVyxFQUFFLHNCQUhBO0FBSWJDLEVBQUFBLGVBQWUsRUFBRSwwQ0FKSjtBQUtiQyxFQUFBQSxPQUFPLEVBQUU7QUFMSSxDQUFmOztBQVFBLElBQU1DLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLEdBQU07QUFFeEQsTUFBTUMsTUFBTTtBQUFBLDJTQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxjQUFBQSxFQUZPLEdBRUYsSUFBSVYsZ0VBQUosQ0FBa0JDLE1BQWxCLENBRkU7QUFJUFUsY0FBQUEsUUFKTyxHQUlJLHlCQUpKO0FBQUE7QUFBQTtBQUFBLHFCQU1TRCxFQUFFLENBQUNFLFVBQUgsQ0FBY0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQWQsQ0FOVDs7QUFBQTtBQU1IQyxjQUFBQSxHQU5HO0FBUVRDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBUlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXVEMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0E7O0FBWlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTlQsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQWVBLHNCQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT1MsVUFBVSxDQUFDO0FBQUEsZUFBTVYsTUFBTSxDQUFDQyxDQUFELENBQVo7QUFBQSxPQUFELEVBQWtCLElBQWxCLENBQWpCO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0FwQkQ7O0tBQU1GO0FBc0JOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0UzNDbGllbnQgZnJvbSAncmVhY3QtYXdzLXMzLXR5cGVzY3JpcHQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVVwbG9hZGVyUHJvcHMge1xyXG4gIFxyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYnVja2V0TmFtZTogJ2Jvb2ttb2InLFxyXG4gIHJlZ2lvbjogJ2FwLXNvdXRoZWFzdC0xJyxcclxuICBhY2Nlc3NLZXlJZDogJ0FLSUFRTEFIQktBUk1ERU1OWkhKJyxcclxuICBzZWNyZXRBY2Nlc3NLZXk6ICd5TFUxK3ZtWXQ2TEtVMEpaSlQxM2tzb1BxMkZDaGVOZGVSdUNqeFQrJyxcclxuICBkaXJOYW1lOiAnQm9vayBpbWFnZXMnXHJcbn1cclxuIFxyXG5jb25zdCBJbWFnZVVwbG9hZGVyOiBSZWFjdC5GQzxJbWFnZVVwbG9hZGVyUHJvcHM+ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB1cGxvYWQgPSBhc3luYyAoZSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHMzID0gbmV3IFJlYWN0UzNDbGllbnQoY29uZmlnKTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9ICdmaWxlbmFtZS10by1iZS11cGxvYWRlZCc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHMzLnVwbG9hZEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgLyogaGFuZGxlIHRoZSBleGNlcHRpb24gKi9cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICggXHJcbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVvdXQoKCkgPT4gdXBsb2FkKGUpLCAzMDAwKX0vPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjsiXSwibmFtZXMiOlsiUmVhY3RTM0NsaWVudCIsImNvbmZpZyIsImJ1Y2tldE5hbWUiLCJyZWdpb24iLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsImRpck5hbWUiLCJJbWFnZVVwbG9hZGVyIiwidXBsb2FkIiwiZSIsInMzIiwiZmlsZW5hbWUiLCJ1cGxvYWRGaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=