webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/Notification.service.ts":
/*!**********************************************!*\
  !*** ./src/services/Notification.service.ts ***!
  \**********************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var NotificationService = /*#__PURE__*/function () {
  function NotificationService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationService, null, [{
    key: "showError",
    value: function showError(message, err) {
      react_notifications_component__WEBPACK_IMPORTED_MODULE_3__["store"].addNotification(_objectSpread(_objectSpread({}, NotificationService.defaultConfig), {}, {
        title: 'Error',
        message: message,
        type: 'error'
      }));
      console.error(message, err);
    }
  }, {
    key: "showSuccess",
    value: function showSuccess(message) {
      react_notifications_component__WEBPACK_IMPORTED_MODULE_3__["store"].addNotification({
        title: 'Success',
        message: message,
        type: 'success',
        insert: 'top',
        container: 'bottom-right'
      });
      console.info(message);
    }
  }]);

  return NotificationService;
}();

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(NotificationService, "defaultConfig", {
  dismiss: {
    duration: 5000,
    onScreen: true
  },
  insert: 'top',
  container: 'bottom-right'
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJtZXNzYWdlIiwiZXJyIiwic3RvcmUiLCJhZGROb3RpZmljYXRpb24iLCJkZWZhdWx0Q29uZmlnIiwidGl0bGUiLCJ0eXBlIiwiY29uc29sZSIsImVycm9yIiwiaW5zZXJ0IiwiY29udGFpbmVyIiwiaW5mbyIsImRpc21pc3MiLCJkdXJhdGlvbiIsIm9uU2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxtQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBVTRCQyxPQVY1QixFQVU2Q0MsR0FWN0MsRUFVMEQ7QUFDbERDLHlFQUFLLENBQUNDLGVBQU4saUNBQ0tKLG1CQUFtQixDQUFDSyxhQUR6QjtBQUVFQyxhQUFLLEVBQUUsT0FGVDtBQUdFTCxlQUFPLEVBQVBBLE9BSEY7QUFJRU0sWUFBSSxFQUFFO0FBSlI7QUFNQUMsYUFBTyxDQUFDQyxLQUFSLENBQWNSLE9BQWQsRUFBdUJDLEdBQXZCO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLGdDQW9COEJELE9BcEI5QixFQW9CK0M7QUFDdkNFLHlFQUFLLENBQUNDLGVBQU4sQ0FBc0I7QUFDcEJFLGFBQUssRUFBRSxTQURhO0FBRXBCTCxlQUFPLEVBQVBBLE9BRm9CO0FBR3BCTSxZQUFJLEVBQUUsU0FIYztBQUlwQkcsY0FBTSxFQUFFLEtBSlk7QUFLcEJDLGlCQUFTLEVBQUU7QUFMUyxPQUF0QjtBQU9BSCxhQUFPLENBQUNJLElBQVIsQ0FBYVgsT0FBYjtBQUNIO0FBN0JMOztBQUFBO0FBQUE7O2dKQUFhRCxtQixtQkFDc0I7QUFDN0JhLFNBQU8sRUFBRTtBQUNQQyxZQUFRLEVBQUUsSUFESDtBQUVQQyxZQUFRLEVBQUU7QUFGSCxHQURvQjtBQUs3QkwsUUFBTSxFQUFFLEtBTHFCO0FBTTdCQyxXQUFTLEVBQUU7QUFOa0IsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJmNTg3ZDNkNjFmMzg4N2ZhZTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ3JlYWN0LW5vdGlmaWNhdGlvbnMtY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRDb25maWcgPSB7XHJcbiAgICAgIGRpc21pc3M6IHtcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBvblNjcmVlbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbnNlcnQ6ICd0b3AnLFxyXG4gICAgICBjb250YWluZXI6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZywgZXJyPzogRXJyb3IpIHtcclxuICAgICAgICBzdG9yZS5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgLi4uTm90aWZpY2F0aW9uU2VydmljZS5kZWZhdWx0Q29uZmlnLFxyXG4gICAgICAgICAgdGl0bGU6ICdFcnJvcicsXHJcbiAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHN0b3JlLmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGluc2VydDogJ3RvcCcsXHJcbiAgICAgICAgICBjb250YWluZXI6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgY29uc29sZS5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==