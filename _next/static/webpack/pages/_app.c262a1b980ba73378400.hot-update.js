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
      react_notifications_component__WEBPACK_IMPORTED_MODULE_3__["store"].addNotification(_objectSpread(_objectSpread({}, NotificationService.defaultConfig), {}, {
        title: 'Success',
        message: message,
        type: 'success'
      }));
      console.info(message);
    }
  }]);

  return NotificationService;
}();

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(NotificationService, "defaultConfig", {
  dismiss: {
    duration: 5000,
    onScreen: true,
    showIcon: true,
    pauseOnHover: true
  },
  insert: 'top',
  container: 'bottom-right',
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJtZXNzYWdlIiwiZXJyIiwic3RvcmUiLCJhZGROb3RpZmljYXRpb24iLCJkZWZhdWx0Q29uZmlnIiwidGl0bGUiLCJ0eXBlIiwiY29uc29sZSIsImVycm9yIiwiaW5mbyIsImRpc21pc3MiLCJkdXJhdGlvbiIsIm9uU2NyZWVuIiwic2hvd0ljb24iLCJwYXVzZU9uSG92ZXIiLCJpbnNlcnQiLCJjb250YWluZXIiLCJhbmltYXRpb25JbiIsImFuaW1hdGlvbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsbUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQWM0QkMsT0FkNUIsRUFjNkNDLEdBZDdDLEVBYzBEO0FBQ2xEQyx5RUFBSyxDQUFDQyxlQUFOLGlDQUNLSixtQkFBbUIsQ0FBQ0ssYUFEekI7QUFFRUMsYUFBSyxFQUFFLE9BRlQ7QUFHRUwsZUFBTyxFQUFQQSxPQUhGO0FBSUVNLFlBQUksRUFBRTtBQUpSO0FBTUFDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjUixPQUFkLEVBQXVCQyxHQUF2QjtBQUNIO0FBdEJMO0FBQUE7QUFBQSxnQ0F3QjhCRCxPQXhCOUIsRUF3QitDO0FBQ3ZDRSx5RUFBSyxDQUFDQyxlQUFOLGlDQUNLSixtQkFBbUIsQ0FBQ0ssYUFEekI7QUFFRUMsYUFBSyxFQUFFLFNBRlQ7QUFHRUwsZUFBTyxFQUFQQSxPQUhGO0FBSUVNLFlBQUksRUFBRTtBQUpSO0FBTUFDLGFBQU8sQ0FBQ0UsSUFBUixDQUFhVCxPQUFiO0FBQ0g7QUFoQ0w7O0FBQUE7QUFBQTs7Z0pBQWFELG1CLG1CQUNzQjtBQUM3QlcsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxJQURIO0FBRVBDLFlBQVEsRUFBRSxJQUZIO0FBR1BDLFlBQVEsRUFBRSxJQUhIO0FBSVBDLGdCQUFZLEVBQUU7QUFKUCxHQURvQjtBQU83QkMsUUFBTSxFQUFFLEtBUHFCO0FBUTdCQyxXQUFTLEVBQUUsY0FSa0I7QUFTN0JDLGFBQVcsRUFBRSxDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixDQVRnQjtBQVU3QkMsY0FBWSxFQUFFLENBQUMsbUJBQUQsRUFBc0Isa0JBQXRCO0FBVmUsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMyNjJhMWI5ODBiYTczMzc4NDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ3JlYWN0LW5vdGlmaWNhdGlvbnMtY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRDb25maWcgPSB7XHJcbiAgICAgIGRpc21pc3M6IHtcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBvblNjcmVlbjogdHJ1ZSxcclxuICAgICAgICBzaG93SWNvbjogdHJ1ZSwgXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbnNlcnQ6ICd0b3AnLFxyXG4gICAgICBjb250YWluZXI6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICBhbmltYXRpb25JbjogW1wiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgXCJhbmltYXRlX19mYWRlSW5cIl0sXHJcbiAgICAgIGFuaW1hdGlvbk91dDogW1wiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgXCJhbmltYXRlX19mYWRlT3V0XCJdLFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZywgZXJyPzogRXJyb3IpIHtcclxuICAgICAgICBzdG9yZS5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgLi4uTm90aWZpY2F0aW9uU2VydmljZS5kZWZhdWx0Q29uZmlnLFxyXG4gICAgICAgICAgdGl0bGU6ICdFcnJvcicsXHJcbiAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHN0b3JlLmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAuLi5Ob3RpZmljYXRpb25TZXJ2aWNlLmRlZmF1bHRDb25maWcsXHJcbiAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=