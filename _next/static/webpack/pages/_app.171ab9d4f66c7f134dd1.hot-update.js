webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/subcomponents/ControlPanel/ControlPanel.tsx":
/*!*********************************************************!*\
  !*** ./src/subcomponents/ControlPanel/ControlPanel.tsx ***!
  \*********************************************************/
/*! exports provided: ControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanel", function() { return ControlPanel; });
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
/* harmony import */ var src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Notification.service */ "./src/services/Notification.service.ts");
/* harmony import */ var _LoadingIndicator_LoadingIndicatorSmall_LoadingIndicatorSmall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall */ "./src/subcomponents/LoadingIndicator/LoadingIndicatorSmall/LoadingIndicatorSmall.tsx");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ControlPanel.module.css */ "./src/subcomponents/ControlPanel/ControlPanel.module.css");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14__);











var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\subcomponents\\ControlPanel\\ControlPanel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ControlPanel = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ControlPanel, _Component);

  var _super = _createSuper(ControlPanel);

  function ControlPanel() {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ControlPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      ethAmountToPay: 1,
      isLoading: false
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRewardBalance", function () {
      return window.web3.utils.fromWei(_this.props.wavectTokenBalance, 'Ether');
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getStakedCrypto", function () {
      return window.web3.utils.fromWei(_this.props.stakingBalance, 'Ether');
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitPayment", /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var amount;
      return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.state.ethAmountToPay > 0)) {
                _context.next = 18;
                break;
              }

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: true
              }));

              _context.prev = 2;
              amount = _this.state.ethAmountToPay.toString();
              amount = window.web3.utils.toWei(amount, 'Ether');
              _context.next = 7;
              return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].stakeTokens(amount);

            case 7:
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showSuccess('ETH transferred successfully.');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showError('Could not transfer ETH to Wavect.', _context.t0);

            case 13:
              _context.prev = 13;

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: false
              }));

              return _context.finish(13);

            case 16:
              _context.next = 19;
              break;

            case 18:
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showError('You cannot transfer 0 or less ETH.');

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10, 13, 16]]);
    })));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "inputChangedHandler", function (event) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        ethAmountToPay: event.target.value
      }));
    });

    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlPanel, [{
    key: "loadPaymentInput",
    value: function loadPaymentInput() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.paymentInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "price",
            className: "block text-sm font-medium text-white",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "mt-1 relative rounded-md shadow-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "text-gray-500 sm:text-sm",
                children: "\u039E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              type: "text",
              name: "price",
              id: "price",
              className: "font-bold text-center p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black",
              placeholder: "0.00",
              value: this.state.ethAmountToPay,
              onChange: function onChange(event) {
                return _this2.inputChangedHandler(event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          className: "align-middle mt-4 w-full h-12 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 disabled:opacity-50 rounded-lg focus:shadow-outline enabled:hover:bg-blue-800",
          onClick: /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.submitPayment();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })),
          disabled: this.state.isLoading,
          children: this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LoadingIndicator_LoadingIndicatorSmall_LoadingIndicatorSmall__WEBPACK_IMPORTED_MODULE_13__["LoadingIndicatorSmall"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 19
          }, this) : "Submit payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        id: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.controlPanelContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: "tracking-wider text-white bg-blue-800 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold",
          title: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fas fa-award",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 20
          }, this), " ", this.getStakedCrypto(), " ETH paid"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: "tracking-wider text-white bg-blue-400 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold",
          title: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fas fa-award",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 20
          }, this), " ", this.getRewardBalance(), " WACT earned"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          className: "mt-5 ".concat(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.header),
          children: ["Wavect", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("sup", {
            children: "\xAE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 63
          }, this), " Token"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-). At the moment this app only supports Ethereum directly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }, this);
    }
  }]);

  return ControlPanel;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N1YmNvbXBvbmVudHMvQ29udHJvbFBhbmVsL0NvbnRyb2xQYW5lbC50c3giXSwibmFtZXMiOlsiQ29udHJvbFBhbmVsIiwiZXRoQW1vdW50VG9QYXkiLCJpc0xvYWRpbmciLCJ3aW5kb3ciLCJ3ZWIzIiwidXRpbHMiLCJmcm9tV2VpIiwicHJvcHMiLCJ3YXZlY3RUb2tlbkJhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhbW91bnQiLCJ0b1N0cmluZyIsInRvV2VpIiwiQmxvY2tjaGFpblNlcnZpY2UiLCJzdGFrZVRva2VucyIsIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJzaG93U3VjY2VzcyIsInNob3dFcnJvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJwYXltZW50SW5wdXQiLCJpbnB1dENoYW5nZWRIYW5kbGVyIiwic3VibWl0UGF5bWVudCIsImNvbnRyb2xQYW5lbENvbnRhaW5lciIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJoZWFkZXIiLCJwIiwibG9hZFBheW1lbnRJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBQ2dDO0FBQ3hCQyxvQkFBYyxFQUFFLENBRFE7QUFFeEJDLGVBQVMsRUFBRTtBQUZhLEtBRGhDOztBQUFBLHVVQU0rQixZQUFNO0FBQzdCLGFBQVFDLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUMsTUFBS0MsS0FBTCxDQUFXQyxrQkFBOUMsRUFBa0UsT0FBbEUsQ0FBUDtBQUNILEtBUkw7O0FB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QUFqQixDQUFiO0FBQUEsNENBQThDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQsZUFTQztBQUFHLG1CQUFTLEVBQUVQLGdFQUFNLENBQUNRLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRELGVBVUM7QUFBRyxtQkFBUyxFQUFFUixnRUFBTSxDQUFDUSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRCxlQVdDO0FBQUcsbUJBQVMsRUFBRVIsZ0VBQU0sQ0FBQ1EsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQsRUFhRyxLQUFLQyxnQkFBTCxFQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBZUg7QUFqRkw7O0FBQUE7QUFBQSxFQUFrQ0MsZ0RBQWxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTcxYWI5ZDRmNjZjN2YxMzRkZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvQmxvY2tjaGFpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3JTbWFsbCB9IGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JTbWFsbC9Mb2FkaW5nSW5kaWNhdG9yU21hbGxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRyb2xQYW5lbC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFByb3BzIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBJQ29udHJvbFBhbmVsU3RhdGUgfSBmcm9tIFwiLi9JQ29udHJvbFBhbmVsLnN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElDb250cm9sUGFuZWxQcm9wcywgSUNvbnRyb2xQYW5lbFN0YXRlPiB7XHJcbiAgICBzdGF0ZTogSUNvbnRyb2xQYW5lbFN0YXRlID0ge1xyXG4gICAgICAgIGV0aEFtb3VudFRvUGF5OiAxLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXdhcmRCYWxhbmNlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMud2F2ZWN0VG9rZW5CYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0YWtlZENyeXB0byA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnN0YWtpbmdCYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN1Ym1pdFBheW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIGFsc28gd29ya2luZyBmb3IgdW5kZWZpbmVkIG91dC1vZi10aGUtYm94IGR1ZSB0byBqYXZhU2NyaXB0IG5hdHVyZVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheSA+IDApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgYW1vdW50ID0gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMudG9XZWkoYW1vdW50LCAnRXRoZXInKVxyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2Uuc3Rha2VUb2tlbnMoYW1vdW50KVxyXG4gICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93U3VjY2VzcygnRVRIIHRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCB0cmFuc2ZlciBFVEggdG8gV2F2ZWN0LicsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIGlzTG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1lvdSBjYW5ub3QgdHJhbnNmZXIgMCBvciBsZXNzIEVUSC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFBheW1lbnRJbnB1dCgpIHsgXHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGF5bWVudElucHV0fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSByZWxhdGl2ZSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHNtOnRleHQtc21cIj7Onjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgaWQ9XCJwcmljZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuaW5wdXRDaGFuZ2VkSGFuZGxlcihldmVudCl9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q3VycmVuY3k8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiQ3VycmVuY3lcIiBuYW1lPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgaC1mdWxsIHB5LTAgcGwtMiBwci03IGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtc20gcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+RVRIPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSBtdC00IHctZnVsbCBoLTEyIHB4LTYgdGV4dC1ibHVlLTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYmctYmx1ZS03MDAgZGlzYWJsZWQ6b3BhY2l0eS01MCByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGVuYWJsZWQ6aG92ZXI6YmctYmx1ZS04MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCB0aGlzLnN1Ym1pdFBheW1lbnQoKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfT5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgXHJcbiAgICAgICAgICAgICAgICA/IDxMb2FkaW5nSW5kaWNhdG9yU21hbGwgLz5cclxuICAgICAgICAgICAgICAgIDogXCJTdWJtaXQgcGF5bWVudFwifVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRDaGFuZ2VkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBldGhBbW91bnRUb1BheTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuY29udHJvbFBhbmVsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGUgYmctYmx1ZS04MDAgcHgtNCBweS0xIHRleHQtc20gcm91bmRlZCBsZWFkaW5nLWxvb3NlIG14LTIgZm9udC1zZW1pYm9sZFwiIHRpdGxlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXdhcmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt0aGlzLmdldFN0YWtlZENyeXB0bygpfSBFVEggcGFpZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGUgYmctYmx1ZS00MDAgcHgtNCBweS0xIHRleHQtc20gcm91bmRlZCBsZWFkaW5nLWxvb3NlIG14LTIgZm9udC1zZW1pYm9sZFwiIHRpdGxlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXdhcmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt0aGlzLmdldFJld2FyZEJhbGFuY2UoKX0gV0FDVCBlYXJuZWRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2BtdC01ICR7c3R5bGVzLmhlYWRlcn1gfT5XYXZlY3Q8c3VwPsKuPC9zdXA+IFRva2VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PldlIGF0IFdhdmVjdCBub3Qgb25seSBhY2NlcHQgY2VydGFpbiBjcnlwdG9zIHN1Y2ggYXMgRVRILCBCVEMgb3IgWE1SLCBidXQgZXZlbiB3YW50IHRvIGVuY291cmFnZSBvdXIgY3VzdG9tZXJzIHRvIGRvIHNvLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlRoZXJlZm9yZSwgZWFjaCBwYXltZW50IHNldHRsZWQgaW4gY3J5cHRvcyB3aWxsIGJlIHJld2FyZGVkIHdpdGggc28tY2FsbGVkIFdhdmVjdC1Ub2tlbnMgd2hpY2ggY2FuIGJlIHJlZGVlbWVkIGluIGZ1dHVyZSBwcm9qZWN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5CYXNpY2FsbHksIGl0J3MganVzdCBhIGZ1dHVyaXN0aWMgYW5kIHNlY3VyZSB2b3VjaGVyIDotKS4gQXQgdGhlIG1vbWVudCB0aGlzIGFwcCBvbmx5IHN1cHBvcnRzIEV0aGVyZXVtIGRpcmVjdGx5LjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7IHRoaXMubG9hZFBheW1lbnRJbnB1dCgpIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=