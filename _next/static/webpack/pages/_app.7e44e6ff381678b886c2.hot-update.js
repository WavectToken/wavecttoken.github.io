webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/Blockchain.service.ts":
/*!********************************************!*\
  !*** ./src/services/Blockchain.service.ts ***!
  \********************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification.service */ "./src/services/Notification.service.ts");
/* harmony import */ var _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abis/WavectToken.json */ "./src/abis/WavectToken.json");
var _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/WavectToken.json */ "./src/abis/WavectToken.json", 1);
/* harmony import */ var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json");
var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json", 1);
/* harmony import */ var _Event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Event.service */ "./src/services/Event.service.ts");










var BlockchainService = /*#__PURE__*/function () {
  function BlockchainService() {
    Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BlockchainService);
  }

  Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BlockchainService, null, [{
    key: "stakeTokens",
    value: function () {
      var _stakeTokens = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(amount, invoiceReference) {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return BlockchainService._wavectTokenContract.methods.increaseAllowance(BlockchainService._tokenFarmContract._address, amount).send({
                  from: BlockchainService._account
                });

              case 3:
                _context.next = 5;
                return BlockchainService._tokenFarmContract.methods.stakeTokens(amount, invoiceReference).send({
                  from: BlockchainService._account,
                  to: BlockchainService._tokenFarmContract._address,
                  value: amount
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);
                return _context.finish(6);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0,, 6, 9]]);
      }));

      function stakeTokens(_x, _x2) {
        return _stakeTokens.apply(this, arguments);
      }

      return stakeTokens;
    }()
  }, {
    key: "connectToBlockchain",
    value: function () {
      var _connectToBlockchain = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.t0 = BlockchainService;
                _context2.next = 4;
                return BlockchainService.loadWeb3();

              case 4:
                _context2.t1 = _context2.sent;
                _context2.next = 7;
                return _context2.t0.loadBlockchainData.call(_context2.t0, _context2.t1);

              case 7:
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t2 = _context2["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('You need to allow your browser to connect to our Web3 service.', _context2.t2);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function connectToBlockchain() {
        return _connectToBlockchain.apply(this, arguments);
      }

      return connectToBlockchain;
    }()
  }, {
    key: "getWavectTokenBalance",
    value: function () {
      var _getWavectTokenBalance = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(refresh) {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!(!BlockchainService._wavectTokenBalance || refresh)) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = BlockchainService._wavectTokenContract.methods;
                _context3.next = 5;
                return BlockchainService.getCurrentAccount();

              case 5:
                _context3.t1 = _context3.sent;
                _context3.next = 8;
                return _context3.t0.balanceOf.call(_context3.t0, _context3.t1).call();

              case 8:
                BlockchainService._wavectTokenBalance = _context3.sent.toString();

              case 9:
                return _context3.abrupt("return", BlockchainService._wavectTokenBalance);

              case 12:
                _context3.prev = 12;
                _context3.t2 = _context3["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch Wavect Token balance.', _context3.t2);

              case 15:
                return _context3.abrupt("return", '0');

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }));

      function getWavectTokenBalance(_x3) {
        return _getWavectTokenBalance.apply(this, arguments);
      }

      return getWavectTokenBalance;
    }()
  }, {
    key: "getStakingBalance",
    value: function () {
      var _getStakingBalance = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(refresh) {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!(!BlockchainService._stakingBalance || refresh)) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = BlockchainService._tokenFarmContract.methods;
                _context4.next = 5;
                return BlockchainService.getCurrentAccount();

              case 5:
                _context4.t1 = _context4.sent;
                _context4.next = 8;
                return _context4.t0.stakingBalance.call(_context4.t0, _context4.t1).call();

              case 8:
                BlockchainService._stakingBalance = _context4.sent.toString();

              case 9:
                return _context4.abrupt("return", BlockchainService._stakingBalance);

              case 12:
                _context4.prev = 12;
                _context4.t2 = _context4["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch staking balance.', _context4.t2);

              case 15:
                return _context4.abrupt("return", '0');

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));

      function getStakingBalance(_x4) {
        return _getStakingBalance.apply(this, arguments);
      }

      return getStakingBalance;
    }()
  }, {
    key: "getCurrentAccount",
    value: function () {
      var _getCurrentAccount = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (BlockchainService._account) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 4;
                return window.web3.eth.getAccounts();

              case 4:
                BlockchainService._account = _context5.sent[0];

              case 5:
                return _context5.abrupt("return", BlockchainService._account);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch account.', _context5.t0);

              case 11:
                return _context5.abrupt("return", '0x0');

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function getCurrentAccount() {
        return _getCurrentAccount.apply(this, arguments);
      }

      return getCurrentAccount;
    }()
  }, {
    key: "loadWavectTokenContract",
    value: function () {
      var _loadWavectTokenContract = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(networkId) {
        var wavectTokenData;
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                wavectTokenData = _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__.networks[networkId];

                if (wavectTokenData) {
                  BlockchainService._wavectTokenContract = new window.web3.eth.Contract(_abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__.abi, wavectTokenData.address);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('WavectToken contract not deployed to detected network.');
                }

                return _context6.abrupt("return", BlockchainService._wavectTokenBalance);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function loadWavectTokenContract(_x5) {
        return _loadWavectTokenContract.apply(this, arguments);
      }

      return loadWavectTokenContract;
    }()
  }, {
    key: "loadTokenFarmContract",
    value: function () {
      var _loadTokenFarmContract = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(networkId) {
        var tokenFarmData;
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                tokenFarmData = _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__.networks[networkId];

                if (tokenFarmData) {
                  BlockchainService._tokenFarmContract = new window.web3.eth.Contract(_abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__.abi, tokenFarmData.address);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('TokenFarm contract not deployed to detected network.');
                }

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function loadTokenFarmContract(_x6) {
        return _loadTokenFarmContract.apply(this, arguments);
      }

      return loadTokenFarmContract;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(web3) {
        var networkId;
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!web3) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 3;
                return window.web3.eth.net.getId();

              case 3:
                networkId = _context8.sent;
                _context8.next = 6;
                return BlockchainService.loadWavectTokenContract(networkId);

              case 6:
                _context8.next = 8;
                return BlockchainService.loadTokenFarmContract(networkId);

              case 8:
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].once(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"], function () {
                  return _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showSuccess('Connected to Blockchain.');
                });
                setTimeout(function () {
                  _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);
                }, 100); // need to wait to let components to subscribe to this event

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function loadBlockchainData(_x7) {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "loadWeb3",
    value: function () {
      var _loadWeb = Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!window.ethereum) {
                  _context9.next = 6;
                  break;
                }

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(window.ethereum);
                _context9.next = 4;
                return window.ethereum.enable();

              case 4:
                _context9.next = 7;
                break;

              case 6:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(window.web3.currentProvider);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Non-Ethereum browser detected. You should consider trying MetaMask!');
                }

              case 7:
                return _context9.abrupt("return", window.web3);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function loadWeb3() {
        return _loadWeb.apply(this, arguments);
      }

      return loadWeb3;
    }()
  }]);

  return BlockchainService;
}();

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_tokenFarmContract", void 0);

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_stakingBalance", void 0);

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_wavectTokenContract", void 0);

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_wavectTokenBalance", void 0);

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_account", void 0);

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "convertWeiToETH", function (wei) {
  return window.web3.utils.fromWei(wei, 'Ether');
});

Object(C_Users_WSDT_Desktop_Wavect_io_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "convertStringToByte32", function (stringToEncode) {
  return window.web3.utils.fromAscii(stringToEncode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsImludm9pY2VSZWZlcmVuY2UiLCJfd2F2ZWN0VG9rZW5Db250cmFjdCIsIm1ldGhvZHMiLCJpbmNyZWFzZUFsbG93YW5jZSIsIl90b2tlbkZhcm1Db250cmFjdCIsIl9hZGRyZXNzIiwic2VuZCIsImZyb20iLCJfYWNjb3VudCIsInN0YWtlVG9rZW5zIiwidG8iLCJ2YWx1ZSIsIkVtaXR0ZXIiLCJlbWl0IiwiRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJzaG93RXJyb3IiLCJyZWZyZXNoIiwiX3dhdmVjdFRva2VuQmFsYW5jZSIsImdldEN1cnJlbnRBY2NvdW50IiwiYmFsYW5jZU9mIiwiY2FsbCIsInRvU3RyaW5nIiwiX3N0YWtpbmdCYWxhbmNlIiwic3Rha2luZ0JhbGFuY2UiLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXR3b3JrSWQiLCJ3YXZlY3RUb2tlbkRhdGEiLCJXYXZlY3RUb2tlbiIsIm5ldHdvcmtzIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwidG9rZW5GYXJtRGF0YSIsIlRva2VuRmFybSIsIm5ldCIsImdldElkIiwibG9hZFdhdmVjdFRva2VuQ29udHJhY3QiLCJsb2FkVG9rZW5GYXJtQ29udHJhY3QiLCJvbmNlIiwic2hvd1N1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIiwid2VpIiwidXRpbHMiLCJmcm9tV2VpIiwic3RyaW5nVG9FbmNvZGUiLCJmcm9tQXNjaWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNB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LHFCQU91QixVQUFDcUQsR0FBRCxFQUFpQjtBQUMvQyxTQUFReEIsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJ3QixLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUNGLEdBQW5DLEVBQXdDLE9BQXhDLENBQVA7QUFDRCxDOztxSkFUUXJELGlCLDJCQVc2QixVQUFDd0QsY0FBRCxFQUE0QjtBQUNoRSxTQUFRM0IsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJ3QixLQUFyQixDQUEyQkcsU0FBM0IsQ0FBcUNELGNBQXJDLENBQVA7QUFDRCxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2U0NGU2ZmYzODE2NzhiODg2YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL05vdGlmaWNhdGlvbi5zZXJ2aWNlXCJcclxuaW1wb3J0IFdhdmVjdFRva2VuIGZyb20gJy4uL2FiaXMvV2F2ZWN0VG9rZW4uanNvbidcclxuaW1wb3J0IFRva2VuRmFybSBmcm9tICcuLi9hYmlzL1Rva2VuRmFybS5qc29uJ1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCB9IGZyb20gXCIuL0V2ZW50LnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja2NoYWluU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdG9rZW5GYXJtQ29udHJhY3Q7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc3Rha2luZ0JhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3dhdmVjdFRva2VuQmFsYW5jZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FjY291bnQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRXZWlUb0VUSCA9ICh3ZWk6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh3ZWksICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFN0cmluZ1RvQnl0ZTMyID0gKHN0cmluZ1RvRW5jb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21Bc2NpaShzdHJpbmdUb0VuY29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFrZVRva2VucyhhbW91bnQ6IHN0cmluZywgaW52b2ljZVJlZmVyZW5jZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gbmVlZGVkIGZvciB0cmFuc2ZlckZyb20gLS0+IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiB1c2VyLWNvbnRleHQsIHRoYXQncyB3aHkgaXQncyBub3QgaW4gdGhlIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAuaW5jcmVhc2VBbGxvd2FuY2UoQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0Ll9hZGRyZXNzLCBhbW91bnQpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7ZnJvbTogQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnR9KSBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQsIGludm9pY2VSZWZlcmVuY2UpLnNlbmQoeyBcclxuICAgICAgICAgICAgICBmcm9tOiBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudCwgXHJcbiAgICAgICAgICAgICAgdG86IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5fYWRkcmVzcyxcclxuICAgICAgICAgICAgICB2YWx1ZTogYW1vdW50LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBFbWl0dGVyLmVtaXQoRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBjb25uZWN0VG9CbG9ja2NoYWluKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRCbG9ja2NoYWluRGF0YShcclxuICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkV2ViMygpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdZb3UgbmVlZCB0byBhbGxvdyB5b3VyIGJyb3dzZXIgdG8gY29ubmVjdCB0byBvdXIgV2ViMyBzZXJ2aWNlLicsIGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRXYXZlY3RUb2tlbkJhbGFuY2UocmVmcmVzaD86IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlIHx8IHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2UgPSAoYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuZ2V0Q3VycmVudEFjY291bnQoKSkuY2FsbCgpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIFdhdmVjdCBUb2tlbiBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN0YWtpbmdCYWxhbmNlKHJlZnJlc2g/OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICghQmxvY2tjaGFpblNlcnZpY2UuX3N0YWtpbmdCYWxhbmNlIHx8IHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fc3Rha2luZ0JhbGFuY2UgPSAoYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0Lm1ldGhvZHMuc3Rha2luZ0JhbGFuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldEN1cnJlbnRBY2NvdW50KCkpLmNhbGwoKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSBcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggc3Rha2luZyBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQgPSAoYXdhaXQgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLmdldEFjY291bnRzKCkpWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50O1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBhY2NvdW50LicsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcweDAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHdhdmVjdFRva2VuRGF0YSA9IFdhdmVjdFRva2VuLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYod2F2ZWN0VG9rZW5EYXRhKSB7XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChXYXZlY3RUb2tlbi5hYmksIHdhdmVjdFRva2VuRGF0YS5hZGRyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdXYXZlY3RUb2tlbiBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuRmFybURhdGEgPSBUb2tlbkZhcm0ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICAgICAgaWYodG9rZW5GYXJtRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLkNvbnRyYWN0KFRva2VuRmFybS5hYmksIHRva2VuRmFybURhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignVG9rZW5GYXJtIGNvbnRyYWN0IG5vdCBkZXBsb3llZCB0byBkZXRlY3RlZCBuZXR3b3JrLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKHdlYjM6IGFueSkge1xyXG4gICAgICAgIGlmICh3ZWIzKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXR3b3JrSWQ6IHN0cmluZyA9IGF3YWl0ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5uZXQuZ2V0SWQoKVxyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkKTtcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRUb2tlbkZhcm1Db250cmFjdChuZXR3b3JrSWQpO1xyXG5cclxuICAgICAgICAgIEVtaXR0ZXIub25jZShFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCwgKCkgPT4gTm90aWZpY2F0aW9uU2VydmljZS5zaG93U3VjY2VzcygnQ29ubmVjdGVkIHRvIEJsb2NrY2hhaW4uJykpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBFbWl0dGVyLmVtaXQoRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQpO1xyXG4gICAgICAgICAgfSwgMTAwKSAvLyBuZWVkIHRvIHdhaXQgdG8gbGV0IGNvbXBvbmVudHMgdG8gc3Vic2NyaWJlIHRvIHRoaXMgZXZlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgICAgICAgIGlmICgod2luZG93IGFzIGFueSkuZXRoZXJldW0pIHtcclxuICAgIFxyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSlcclxuICAgICAgICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkud2ViMykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjM7XHJcbiAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=