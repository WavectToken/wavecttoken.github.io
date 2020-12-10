webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".LoadingIndicatorSmall_ldsRipple__2Jji4 {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n}\n\n.LoadingIndicatorSmall_ldsRipple__2Jji4 div {\n  position: absolute;\n  border: 2px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: LoadingIndicatorSmall_lds-ripple__2RSOQ 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: LoadingIndicatorSmall_lds-ripple__2RSOQ 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.LoadingIndicatorSmall_ldsRipple__2Jji4 div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n@-webkit-keyframes LoadingIndicatorSmall_lds-ripple__2RSOQ {\n  0% {\n    top: 18px;\n    left: 18px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 36px;\n    height: 36px;\n    opacity: 0;\n  }\n}\n\n@keyframes LoadingIndicatorSmall_lds-ripple__2RSOQ {\n  0% {\n    top: 18px;\n    left: 18px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 36px;\n    height: 36px;\n    opacity: 0;\n  }\n}\r\n  ", "",{"version":3,"sources":["webpack://src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css"],"names":[],"mappings":"AACA;EACI,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,mGAA8D;UAA9D,2FAA8D;AAChE;;AACA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AACA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;;EACA;IACE,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;EACZ;AACF;;AAfA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;;EACA;IACE,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;EACZ;AACF","sourcesContent":["\r\n.ldsRipple {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  .ldsRipple div {\r\n    position: absolute;\r\n    border: 2px solid #fff;\r\n    opacity: 1;\r\n    border-radius: 50%;\r\n    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n  }\r\n  .ldsRipple div:nth-child(2) {\r\n    animation-delay: -0.5s;\r\n  }\r\n  @keyframes lds-ripple {\r\n    0% {\r\n      top: 18px;\r\n      left: 18px;\r\n      width: 0;\r\n      height: 0;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 36px;\r\n      height: 36px;\r\n      opacity: 0;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ldsRipple": "LoadingIndicatorSmall_ldsRipple__2Jji4",
	"lds-ripple": "LoadingIndicatorSmall_lds-ripple__2RSOQ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/subcomponents/LoadingIndicator/LoadingIndicator.tsx":
/*!*****************************************************************!*\
  !*** ./src/subcomponents/LoadingIndicator/LoadingIndicator.tsx ***!
  \*****************************************************************/
/*! exports provided: LoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicator.module.css */ "./src/subcomponents/LoadingIndicator/LoadingIndicator.module.css");
/* harmony import */ var _LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingIndicatorSmall_LoadingIndicatorSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicatorSmall/LoadingIndicatorSmall */ "./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.tsx");

var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\subcomponents\\LoadingIndicator\\LoadingIndicator.tsx";


function LoadingIndicator(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-black bg-opacity-80 p-6 rounded-md w-max ".concat(_LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loadingContainer),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoadingIndicatorSmall_LoadingIndicatorSmall__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorSmall"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white",
      children: "Loading.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
_c = LoadingIndicator;

var _c;

$RefreshReg$(_c, "LoadingIndicator");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css":
/*!***************************************************************************************************!*\
  !*** ./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicatorSmall.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicatorSmall.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicatorSmall.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
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

/***/ "./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.tsx":
/*!********************************************************************************************!*\
  !*** ./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.tsx ***!
  \********************************************************************************************/
/*! exports provided: LoadingIndicatorSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorSmall", function() { return LoadingIndicatorSmall; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingIndicatorSmall_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicatorSmall.module.css */ "./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.module.css");
/* harmony import */ var _LoadingIndicatorSmall_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingIndicatorSmall_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\subcomponents\\LoadingIndicator\\LoadingIndicatorSmall\\LoadingIndicatorSmall.tsx";

function LoadingIndicatorSmall(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-1 ".concat(_LoadingIndicatorSmall_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ldsRipple),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 56
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 67
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}
_c = LoadingIndicatorSmall;

var _c;

$RefreshReg$(_c, "LoadingIndicatorSmall");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N1YmNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yU21hbGwvTG9hZGluZ0luZGljYXRvclNtYWxsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdWJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdWJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclNtYWxsL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC5tb2R1bGUuY3NzPzk2YTAiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdWJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclNtYWxsL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC50c3giXSwibmFtZXMiOlsiTG9hZGluZ0luZGljYXRvciIsInByb3BzIiwic3R5bGVzIiwibG9hZGluZ0NvbnRhaW5lciIsIkxvYWRpbmdJbmRpY2F0b3JTbWFsbCIsImxkc1JpcHBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRDQUE0QywwQkFBMEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyxpREFBaUQsdUJBQXVCLDJCQUEyQixlQUFlLHVCQUF1Qix3R0FBd0csd0dBQXdHLEdBQUcsOERBQThELG1DQUFtQyxtQ0FBbUMsR0FBRyxnRUFBZ0UsUUFBUSxnQkFBZ0IsaUJBQWlCLGVBQWUsZ0JBQWdCLGlCQUFpQixLQUFLLFlBQVksZUFBZSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLHdEQUF3RCxRQUFRLGdCQUFnQixpQkFBaUIsZUFBZSxnQkFBZ0IsaUJBQWlCLEtBQUssWUFBWSxlQUFlLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsYUFBYSwwSkFBMEosWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUsseUNBQXlDLDhCQUE4QiwyQkFBMkIsb0JBQW9CLHFCQUFxQixPQUFPLHNCQUFzQiwyQkFBMkIsK0JBQStCLG1CQUFtQiwyQkFBMkIsdUVBQXVFLE9BQU8sbUNBQW1DLCtCQUErQixPQUFPLDZCQUE2QixZQUFZLG9CQUFvQixxQkFBcUIsbUJBQW1CLG9CQUFvQixxQkFBcUIsU0FBUyxjQUFjLG1CQUFtQixvQkFBb0Isc0JBQXNCLHVCQUF1QixxQkFBcUIsU0FBUyxPQUFPLHlCQUF5QjtBQUN2OEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFzQztBQUN6QyxzQkFBTztBQUFLLGFBQVMsd0RBQWlEQyxtRUFBTSxDQUFDQyxnQkFBeEQsQ0FBZDtBQUFBLDRCQUNDLHFFQUFDLGtHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUdDO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIO0tBTmVILGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEIsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw4WEFBNEw7O0FBRTlOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDhYQUE0TDtBQUNsTTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDhYQUE0TDs7QUFFdE47O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFFTyxTQUFTSSxxQkFBVCxDQUErQkgsS0FBL0IsRUFBMkM7QUFDOUMsc0JBQU87QUFBSyxhQUFTLGlCQUFVQyx3RUFBTSxDQUFDRyxTQUFqQixDQUFkO0FBQUEsNEJBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNUMsZUFBdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIO0tBRmVELHFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTBlMDA3MDZmZTc2YTlhOWZiMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Mb2FkaW5nSW5kaWNhdG9yU21hbGxfbGRzUmlwcGxlX18ySmppNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLkxvYWRpbmdJbmRpY2F0b3JTbWFsbF9sZHNSaXBwbGVfXzJKamk0IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBMb2FkaW5nSW5kaWNhdG9yU21hbGxfbGRzLXJpcHBsZV9fMlJTT1EgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nSW5kaWNhdG9yU21hbGxfbGRzLXJpcHBsZV9fMlJTT1EgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLkxvYWRpbmdJbmRpY2F0b3JTbWFsbF9sZHNSaXBwbGVfXzJKamk0IGRpdjpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgTG9hZGluZ0luZGljYXRvclNtYWxsX2xkcy1yaXBwbGVfXzJSU09RIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxOHB4O1xcbiAgICBsZWZ0OiAxOHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgTG9hZGluZ0luZGljYXRvclNtYWxsX2xkcy1yaXBwbGVfXzJSU09RIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxOHB4O1xcbiAgICBsZWZ0OiAxOHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdWJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclNtYWxsL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1HQUE4RDtVQUE5RCwyRkFBOEQ7QUFDaEU7O0FBQ0E7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGOztBQWZBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5sZHNSaXBwbGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIC5sZHNSaXBwbGUgZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgLmxkc1JpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0b3A6IDE4cHg7XFxyXFxuICAgICAgbGVmdDogMThweDtcXHJcXG4gICAgICB3aWR0aDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0b3A6IDBweDtcXHJcXG4gICAgICBsZWZ0OiAwcHg7XFxyXFxuICAgICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxkc1JpcHBsZVwiOiBcIkxvYWRpbmdJbmRpY2F0b3JTbWFsbF9sZHNSaXBwbGVfXzJKamk0XCIsXG5cdFwibGRzLXJpcHBsZVwiOiBcIkxvYWRpbmdJbmRpY2F0b3JTbWFsbF9sZHMtcmlwcGxlX18yUlNPUVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nSW5kaWNhdG9yLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yU21hbGwgfSBmcm9tICcuL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC9Mb2FkaW5nSW5kaWNhdG9yU21hbGwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IocHJvcHM6IGFueSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgYmctYmxhY2sgYmctb3BhY2l0eS04MCBwLTYgcm91bmRlZC1tZCB3LW1heCAke3N0eWxlcy5sb2FkaW5nQ29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvclNtYWxsIC8+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YG1iLTMgdy0yMCBoLTIwIGJvcmRlci00IGJvcmRlci13aGl0ZSByb3VuZGVkLWZ1bGwgJHtzdHlsZXMubG9hZGVyfWB9PjwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPkxvYWRpbmcuLjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGluZ0luZGljYXRvclNtYWxsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yU21hbGwocHJvcHM6IGFueSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgbXQtMSAke3N0eWxlcy5sZHNSaXBwbGV9YH0+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=