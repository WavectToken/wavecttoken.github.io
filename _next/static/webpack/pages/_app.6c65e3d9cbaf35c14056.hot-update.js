webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/subcomponents/Main/Main.tsx":
/*!*****************************************!*\
  !*** ./src/subcomponents/Main/Main.tsx ***!
  \*****************************************/
/*! exports provided: Main, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/Blockchain.service */ "./src/services/Blockchain.service.ts");
/* harmony import */ var src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Event.service */ "./src/services/Event.service.ts");
/* harmony import */ var _BgVideo_BgVideo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../BgVideo/BgVideo */ "./src/subcomponents/BgVideo/BgVideo.tsx");
/* harmony import */ var _ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ControlPanel/ControlPanel */ "./src/subcomponents/ControlPanel/ControlPanel.tsx");
/* harmony import */ var _LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LoadingIndicator/LoadingIndicator */ "./src/subcomponents/LoadingIndicator/LoadingIndicator.tsx");











var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\subcomponents\\Main\\Main.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Main = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _Component);

  var _super = _createSuper(Main);

  function Main() {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      wavectTokenBalance: '0',
      stakingBalance: '0',
      isLoading: true
    });

    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Main, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Load blockchain data once
                src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__["default"].on(src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__["EVENT_BLOCKCHAIN_DATA_CHANGED"], /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.t0 = _this2;
                          _context.next = 4;
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getWavectTokenBalance(true);

                        case 4:
                          _context.t1 = _context.sent;
                          _context.next = 7;
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getStakingBalance(true);

                        case 7:
                          _context.t2 = _context.sent;
                          _context.t3 = {
                            wavectTokenBalance: _context.t1,
                            stakingBalance: _context.t2,
                            isLoading: false
                          };

                          _context.t0.setState.call(_context.t0, _context.t3);

                          _context.next = 14;
                          break;

                        case 12:
                          _context.prev = 12;
                          _context.t4 = _context["catch"](0);

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 12]]);
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadMaintenanceScreen",
    value: function loadMaintenanceScreen() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
        className: "text-white text-5xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
          children: "Wavect\xAE Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 48
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 78
        }, this), "coming soon.."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 12
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_BgVideo_BgVideo__WEBPACK_IMPORTED_MODULE_13__["BgVideo"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }, this), this.props.isConnectingToBlockchain || this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["LoadingIndicator"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          id: "content",
          className: "mt-3 ml-2 mr-2 absolute inset-0 flex items-center justify-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "bg-black bg-opacity-80 p-6 rounded-md w-max",
            children: this.props.showMaintenanceMode ? this.loadMaintenanceScreen() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__["ControlPanel"], {
              wavectTokenBalance: this.state.wavectTokenBalance,
              stakingBalance: this.state.stakingBalance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this)]
      }, void 0, true);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Main);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N1YmNvbXBvbmVudHMvTWFpbi9NYWluLnRzeCJdLCJuYW1lcyI6WyJNYWluIiwid2F2ZWN0VG9rZW5CYWxhbmNlIiwic3Rha2luZ0JhbGFuY2UiLCJpc0xvYWRpbmciLCJFbWl0dGVyIiwib24iLCJFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCIsIkJsb2NrY2hhaW5TZXJ2aWNlIiwiZ2V0V2F2ZWN0VG9rZW5CYWxhbmNlIiwiZ2V0U3Rha2luZ0JhbGFuY2UiLCJzZXRTdGF0ZSIsInByb3BzIiwiaXNDb25uZWN0aW5nVG9CbG9ja2NoYWluIiwic3RhdGUiLCJzaG93TWFpbnRlbmFuY2VNb2RlIiwibG9hZE1haW50ZW5hbmNlU2NyZWVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBRXNCO0FBQ2xCQyx3QkFBa0IsRUFBRSxHQURGO0FBRWxCQyxvQkFBYyxFQUFFLEdBRkU7QUFHbEJDLGVBQVMsRUFBRTtBQUhPLEtBRnRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJO0FBQ0FDLG1GQUFPLENBQUNDLEVBQVIsQ0FBV0MseUZBQVgsNFNBQTBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUV0QyxNQUZzQztBQUFBO0FBQUEsaUNBR1RDLGtGQUFpQixDQUFDQyxxQkFBbEIsQ0FBd0MsSUFBeEMsQ0FIUzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FJYkQsa0ZBQWlCLENBQUNFLGlCQUFsQixDQUFvQyxJQUFwQyxDQUphOztBQUFBO0FBQUE7QUFBQTtBQUdwQ1IsOENBSG9DO0FBSXBDQywwQ0FKb0M7QUFLcENDLHFDQUxvQyxFQUt6QjtBQUx5Qjs7QUFBQSxzQ0FFakNPLFFBRmlDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUExQzs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0F1QmtDO0FBQzlCLDBCQUFPO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGdDQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBcEMsZUFBa0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDtBQXpCSDtBQUFBO0FBQUEsNkJBMkJXO0FBQ1AsMEJBQ0U7QUFBQSxnQ0FDQSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUUsS0FBS0MsS0FBTCxDQUFXQyx3QkFBWCxJQUF1QyxLQUFLQyxLQUFMLENBQVdWLFNBQWxELGdCQUNJLHFFQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZ0JBRUk7QUFBSyxZQUFFLEVBQUMsU0FBUjtBQUFrQixtQkFBUyxFQUFDLGtFQUE1QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHNCQUNJLEtBQUtRLEtBQUwsQ0FBV0csbUJBQVgsR0FDRSxLQUFLQyxxQkFBTCxFQURGLGdCQUVFLHFFQUFDLHdFQUFEO0FBQWMsZ0NBQWtCLEVBQUUsS0FBS0YsS0FBTCxDQUFXWixrQkFBN0M7QUFDRSw0QkFBYyxFQUFFLEtBQUtZLEtBQUwsQ0FBV1g7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpOO0FBQUEsc0JBREY7QUFnQkQ7QUE1Q0g7O0FBQUE7QUFBQSxFQUEwQmMsZ0RBQTFCO0FBK0NlaEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YzY1ZTNkOWNiYWYzNWMxNDA1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9CbG9ja2NoYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9FdmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmdWaWRlbyB9IGZyb20gJy4uL0JnVmlkZW8vQmdWaWRlbyc7XHJcbmltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gJy4uL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWwnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnLi4vTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yJztcclxuaW1wb3J0IHsgSU1haW5Qcm9wcyB9IGZyb20gJy4vSU1haW4ucHJvcHMnO1xyXG5pbXBvcnQgeyBJTWFpblN0YXRlIH0gZnJvbSAnLi9JTWFpbi5zdGF0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5Qcm9wcywgSU1haW5TdGF0ZT4ge1xyXG5cclxuICBzdGF0ZTogSU1haW5TdGF0ZSA9IHtcclxuICAgIHdhdmVjdFRva2VuQmFsYW5jZTogJzAnLFxyXG4gICAgc3Rha2luZ0JhbGFuY2U6ICcwJyxcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIExvYWQgYmxvY2tjaGFpbiBkYXRhIG9uY2VcclxuICAgIEVtaXR0ZXIub24oRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQsIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHdhdmVjdFRva2VuQmFsYW5jZTogKGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldFdhdmVjdFRva2VuQmFsYW5jZSh0cnVlKSksXHJcbiAgICAgICAgICBzdGFraW5nQmFsYW5jZTogKGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldFN0YWtpbmdCYWxhbmNlKHRydWUpKSxcclxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRNYWludGVuYW5jZVNjcmVlbigpIHtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTV4bFwiPjxzdHJvbmc+V2F2ZWN0wq4gVG9rZW48L3N0cm9uZz48YnIgLz5jb21pbmcgc29vbi4uPC9oMT5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxCZ1ZpZGVvIC8+XHJcbiAgICAgIHsgdGhpcy5wcm9wcy5pc0Nvbm5lY3RpbmdUb0Jsb2NrY2hhaW4gfHwgdGhpcy5zdGF0ZS5pc0xvYWRpbmdcclxuICAgICAgICAgID8gPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgICAgIDogPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJtdC0zIG1sLTIgbXItMiBhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTgwIHAtNiByb3VuZGVkLW1kIHctbWF4XCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuc2hvd01haW50ZW5hbmNlTW9kZSBcclxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvYWRNYWludGVuYW5jZVNjcmVlbigpXHJcbiAgICAgICAgICAgICAgICAgIDogPENvbnRyb2xQYW5lbCB3YXZlY3RUb2tlbkJhbGFuY2U9e3RoaXMuc3RhdGUud2F2ZWN0VG9rZW5CYWxhbmNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWtpbmdCYWxhbmNlPXt0aGlzLnN0YXRlLnN0YWtpbmdCYWxhbmNlfSAvPiB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=