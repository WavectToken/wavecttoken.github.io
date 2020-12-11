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
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_2__);



var NotificationService = /*#__PURE__*/function () {
  function NotificationService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationService, null, [{
    key: "showError",
    value: function showError(message, err) {
      react_notifications_component__WEBPACK_IMPORTED_MODULE_2__["store"].addNotification({
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
      react_notifications_component__WEBPACK_IMPORTED_MODULE_2__["store"].addNotification({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJtZXNzYWdlIiwiZXJyIiwic3RvcmUiLCJhZGROb3RpZmljYXRpb24iLCJ0aXRsZSIsInR5cGUiLCJpbnNlcnQiLCJjb250YWluZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLG1CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFDNEJDLE9BRDVCLEVBQzZDQyxHQUQ3QyxFQUMwRDtBQUNsREMseUVBQUssQ0FBQ0MsZUFBTixDQUFzQjtBQUNwQkMsYUFBSyxFQUFFLE9BRGE7QUFFcEJKLGVBQU8sRUFBUEEsT0FGb0I7QUFHcEJLLFlBQUksRUFBRSxPQUhjO0FBSXBCQyxjQUFNLEVBQUUsS0FKWTtBQUtwQkMsaUJBQVMsRUFBRTtBQUxTLE9BQXRCO0FBT0FDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjVCxPQUFkLEVBQXVCQyxHQUF2QjtBQUNIO0FBVkw7QUFBQTtBQUFBLGdDQVk4QkQsT0FaOUIsRUFZK0M7QUFDdkNFLHlFQUFLLENBQUNDLGVBQU4sQ0FBc0I7QUFDcEJDLGFBQUssRUFBRSxTQURhO0FBRXBCSixlQUFPLEVBQVBBLE9BRm9CO0FBR3BCSyxZQUFJLEVBQUUsU0FIYztBQUlwQkMsY0FBTSxFQUFFLEtBSlk7QUFLcEJDLGlCQUFTLEVBQUU7QUFMUyxPQUF0QjtBQU9BQyxhQUFPLENBQUNFLElBQVIsQ0FBYVYsT0FBYjtBQUNIO0FBckJMOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYjJjNjJlODg2NWM2MjI0MjI4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGVycj86IEVycm9yKSB7XHJcbiAgICAgICAgc3RvcmUuYWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICBpbnNlcnQ6ICd0b3AnLFxyXG4gICAgICAgICAgY29udGFpbmVyOiAnYm90dG9tLXJpZ2h0JyxcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHN0b3JlLmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGluc2VydDogJ3RvcCcsXHJcbiAgICAgICAgICBjb250YWluZXI6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgY29uc29sZS5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==