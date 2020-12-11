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




var NotificationService = /*#__PURE__*/function () {
  function NotificationService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationService, null, [{
    key: "showError",
    value: function showError(message, err) {
      react_notifications_component__WEBPACK_IMPORTED_MODULE_3__["store"].addNotification({
        title: 'Error',
        message: message,
        type: 'error',
        insert: 'top',
        container: 'bottom-right'
      });
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
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJtZXNzYWdlIiwiZXJyIiwic3RvcmUiLCJhZGROb3RpZmljYXRpb24iLCJ0aXRsZSIsInR5cGUiLCJpbnNlcnQiLCJjb250YWluZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJpbmZvIiwiZGlzbWlzcyIsImR1cmF0aW9uIiwib25TY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxtQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBUTRCQyxPQVI1QixFQVE2Q0MsR0FSN0MsRUFRMEQ7QUFDbERDLHlFQUFLLENBQUNDLGVBQU4sQ0FBc0I7QUFDcEJDLGFBQUssRUFBRSxPQURhO0FBRXBCSixlQUFPLEVBQVBBLE9BRm9CO0FBR3BCSyxZQUFJLEVBQUUsT0FIYztBQUlwQkMsY0FBTSxFQUFFLEtBSlk7QUFLcEJDLGlCQUFTLEVBQUU7QUFMUyxPQUF0QjtBQU9BQyxhQUFPLENBQUNDLEtBQVIsQ0FBY1QsT0FBZCxFQUF1QkMsR0FBdkI7QUFDSDtBQWpCTDtBQUFBO0FBQUEsZ0NBbUI4QkQsT0FuQjlCLEVBbUIrQztBQUN2Q0UseUVBQUssQ0FBQ0MsZUFBTixDQUFzQjtBQUNwQkMsYUFBSyxFQUFFLFNBRGE7QUFFcEJKLGVBQU8sRUFBUEEsT0FGb0I7QUFHcEJLLFlBQUksRUFBRSxTQUhjO0FBSXBCQyxjQUFNLEVBQUUsS0FKWTtBQUtwQkMsaUJBQVMsRUFBRTtBQUxTLE9BQXRCO0FBT0FDLGFBQU8sQ0FBQ0UsSUFBUixDQUFhVixPQUFiO0FBQ0g7QUE1Qkw7O0FBQUE7QUFBQTs7Z0pBQWFELG1CLG1CQUNzQjtBQUM3QlksU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxJQURIO0FBRVBDLFlBQVEsRUFBRTtBQUZIO0FBRG9CLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYjA2YjcyOWQ0ZWQ4NDc3NGU0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgICBkaXNtaXNzOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgICAgb25TY3JlZW46IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZywgZXJyPzogRXJyb3IpIHtcclxuICAgICAgICBzdG9yZS5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgdGl0bGU6ICdFcnJvcicsXHJcbiAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgIGluc2VydDogJ3RvcCcsXHJcbiAgICAgICAgICBjb250YWluZXI6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd1N1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3RvcmUuYWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcycsXHJcbiAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgaW5zZXJ0OiAndG9wJyxcclxuICAgICAgICAgIGNvbnRhaW5lcjogJ2JvdHRvbS1yaWdodCcsXHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgICBjb25zb2xlLmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9