webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/subcomponents/LoadingIndicator/LoadingIndicator.module.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/subcomponents/LoadingIndicator/LoadingIndicator.module.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes LoadingIndicator_loader-rotate__3Q9Ux {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes LoadingIndicator_loader-rotate__3Q9Ux {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.LoadingIndicator_loadingContainer__97Kvm {\n  /* Center */\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  text-align: center;\n}\n\n@media only screen and (max-width: 600px) {\n  .LoadingIndicator_loadingContainer__97Kvm {\n    top: 50%;\n  }\n}\n\n.LoadingIndicator_loader__17Oi0 {\n  border-right-color: transparent;\n  -webkit-animation: LoadingIndicator_loader-rotate__3Q9Ux 1s linear infinite;\n          animation: LoadingIndicator_loader-rotate__3Q9Ux 1s linear infinite;\n}\n\n.LoadingIndicator_ldsRipple__2Yu2d {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n}\n\n.LoadingIndicator_ldsRipple__2Yu2d div {\n  position: absolute;\n  border: 2px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: LoadingIndicator_lds-ripple__jJAP9 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: LoadingIndicator_lds-ripple__jJAP9 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.LoadingIndicator_ldsRipple__2Yu2d div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n@-webkit-keyframes LoadingIndicator_lds-ripple__jJAP9 {\n  0% {\n    top: 18px;\n    left: 18px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 36px;\n    height: 36px;\n    opacity: 0;\n  }\n}\n\n@keyframes LoadingIndicator_lds-ripple__jJAP9 {\n  0% {\n    top: 18px;\n    left: 18px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 36px;\n    height: 36px;\n    opacity: 0;\n  }\n}\r\n  ", "",{"version":3,"sources":["webpack://src/subcomponents/LoadingIndicator/LoadingIndicator.module.css"],"names":[],"mappings":"AAAA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AAPA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AACA;EACK,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,kBAAkB;AACvB;;AACA;EACI;IACI,QAAQ;EACZ;AACJ;;AACA;EACI,+BAA+B;EAC/B,2EAA2C;UAA3C,mEAA2C;AAC/C;;AAIA;EACI,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,8FAA8D;UAA9D,sFAA8D;AAChE;;AACA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AACA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;;EACA;IACE,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;EACZ;AACF;;AAfA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;;EACA;IACE,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;EACZ;AACF","sourcesContent":["@keyframes loader-rotate {\r\n    0% {\r\n        transform: rotate(0);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.loadingContainer {\r\n     /* Center */\r\n     position: absolute;\r\n     top: 30%;\r\n     left: 50%;\r\n     transform: translate(-50%,-50%);\r\n     text-align: center;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .loadingContainer {\r\n        top: 50%;\r\n    }\r\n}\r\n.loader {\r\n    border-right-color: transparent;\r\n    animation: loader-rotate 1s linear infinite;\r\n}\r\n\r\n\r\n\r\n.ldsRipple {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  .ldsRipple div {\r\n    position: absolute;\r\n    border: 2px solid #fff;\r\n    opacity: 1;\r\n    border-radius: 50%;\r\n    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n  }\r\n  .ldsRipple div:nth-child(2) {\r\n    animation-delay: -0.5s;\r\n  }\r\n  @keyframes lds-ripple {\r\n    0% {\r\n      top: 18px;\r\n      left: 18px;\r\n      width: 0;\r\n      height: 0;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 36px;\r\n      height: 36px;\r\n      opacity: 0;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loadingContainer": "LoadingIndicator_loadingContainer__97Kvm",
	"loader": "LoadingIndicator_loader__17Oi0",
	"loader-rotate": "LoadingIndicator_loader-rotate__3Q9Ux",
	"ldsRipple": "LoadingIndicator_ldsRipple__2Yu2d",
	"lds-ripple": "LoadingIndicator_lds-ripple__jJAP9"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N1YmNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZEQUE2RCxRQUFRLDJCQUEyQixLQUFLLFlBQVksZ0NBQWdDLEtBQUssR0FBRyxzREFBc0QsUUFBUSwyQkFBMkIsS0FBSyxZQUFZLGdDQUFnQyxLQUFLLEdBQUcsK0NBQStDLHVDQUF1QyxhQUFhLGNBQWMsb0NBQW9DLHVCQUF1QixHQUFHLCtDQUErQywrQ0FBK0MsZUFBZSxLQUFLLEdBQUcscUNBQXFDLG9DQUFvQyxnRkFBZ0YsZ0ZBQWdGLEdBQUcsd0NBQXdDLDBCQUEwQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLDRDQUE0Qyx1QkFBdUIsMkJBQTJCLGVBQWUsdUJBQXVCLG1HQUFtRyxtR0FBbUcsR0FBRyx5REFBeUQsbUNBQW1DLG1DQUFtQyxHQUFHLDJEQUEyRCxRQUFRLGdCQUFnQixpQkFBaUIsZUFBZSxnQkFBZ0IsaUJBQWlCLEtBQUssWUFBWSxlQUFlLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsbURBQW1ELFFBQVEsZ0JBQWdCLGlCQUFpQixlQUFlLGdCQUFnQixpQkFBaUIsS0FBSyxZQUFZLGVBQWUsZ0JBQWdCLGtCQUFrQixtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxhQUFhLCtIQUErSCxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLG1EQUFtRCxZQUFZLGlDQUFpQyxTQUFTLGNBQWMsc0NBQXNDLFNBQVMsS0FBSyx1QkFBdUIsaURBQWlELGtCQUFrQixtQkFBbUIseUNBQXlDLDRCQUE0QixLQUFLLCtDQUErQywyQkFBMkIscUJBQXFCLFNBQVMsS0FBSyxhQUFhLHdDQUF3QyxvREFBb0QsS0FBSyw0QkFBNEIsOEJBQThCLDJCQUEyQixvQkFBb0IscUJBQXFCLE9BQU8sc0JBQXNCLDJCQUEyQiwrQkFBK0IsbUJBQW1CLDJCQUEyQix1RUFBdUUsT0FBTyxtQ0FBbUMsK0JBQStCLE9BQU8sNkJBQTZCLFlBQVksb0JBQW9CLHFCQUFxQixtQkFBbUIsb0JBQW9CLHFCQUFxQixTQUFTLGNBQWMsbUJBQW1CLG9CQUFvQixzQkFBc0IsdUJBQXVCLHFCQUFxQixTQUFTLE9BQU8seUJBQXlCO0FBQzFnSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZjdkYjMzMTQ1ZmJhMjNjNWI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIExvYWRpbmdJbmRpY2F0b3JfbG9hZGVyLXJvdGF0ZV9fM1E5VXgge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIExvYWRpbmdJbmRpY2F0b3JfbG9hZGVyLXJvdGF0ZV9fM1E5VXgge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uTG9hZGluZ0luZGljYXRvcl9sb2FkaW5nQ29udGFpbmVyX185N0t2bSB7XFxuICAvKiBDZW50ZXIgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkxvYWRpbmdJbmRpY2F0b3JfbG9hZGluZ0NvbnRhaW5lcl9fOTdLdm0ge1xcbiAgICB0b3A6IDUwJTtcXG4gIH1cXG59XFxuXFxuLkxvYWRpbmdJbmRpY2F0b3JfbG9hZGVyX18xN09pMCB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IExvYWRpbmdJbmRpY2F0b3JfbG9hZGVyLXJvdGF0ZV9fM1E5VXggMXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IExvYWRpbmdJbmRpY2F0b3JfbG9hZGVyLXJvdGF0ZV9fM1E5VXggMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uTG9hZGluZ0luZGljYXRvcl9sZHNSaXBwbGVfXzJZdTJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uTG9hZGluZ0luZGljYXRvcl9sZHNSaXBwbGVfXzJZdTJkIGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBMb2FkaW5nSW5kaWNhdG9yX2xkcy1yaXBwbGVfX2pKQVA5IDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogTG9hZGluZ0luZGljYXRvcl9sZHMtcmlwcGxlX19qSkFQOSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcbn1cXG5cXG4uTG9hZGluZ0luZGljYXRvcl9sZHNSaXBwbGVfXzJZdTJkIGRpdjpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgTG9hZGluZ0luZGljYXRvcl9sZHMtcmlwcGxlX19qSkFQOSB7XFxuICAwJSB7XFxuICAgIHRvcDogMThweDtcXG4gICAgbGVmdDogMThweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIExvYWRpbmdJbmRpY2F0b3JfbGRzLXJpcHBsZV9fakpBUDkge1xcbiAgMCUge1xcbiAgICB0b3A6IDE4cHg7XFxuICAgIGxlZnQ6IDE4cHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N1YmNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUNJLG9CQUFvQjtFQUN4Qjs7RUFDQTtJQUNJLHlCQUF5QjtFQUM3QjtBQUNKOztBQVBBO0VBQ0k7SUFDSSxvQkFBb0I7RUFDeEI7O0VBQ0E7SUFDSSx5QkFBeUI7RUFDN0I7QUFDSjs7QUFDQTtFQUNLLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3ZCOztBQUNBO0VBQ0k7SUFDSSxRQUFRO0VBQ1o7QUFDSjs7QUFDQTtFQUNJLCtCQUErQjtFQUMvQiwyRUFBMkM7VUFBM0MsbUVBQTJDO0FBQy9DOztBQUlBO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDhGQUE4RDtVQUE5RCxzRkFBOEQ7QUFDaEU7O0FBQ0E7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGOztBQWZBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgbG9hZGVyLXJvdGF0ZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubG9hZGluZ0NvbnRhaW5lciB7XFxyXFxuICAgICAvKiBDZW50ZXIgKi9cXHJcXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgIHRvcDogMzAlO1xcclxcbiAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXHJcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAubG9hZGluZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubG9hZGVyIHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYW5pbWF0aW9uOiBsb2FkZXItcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxkc1JpcHBsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcbiAgLmxkc1JpcHBsZSBkaXYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICAubGRzUmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRvcDogMThweDtcXHJcXG4gICAgICBsZWZ0OiAxOHB4O1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRvcDogMHB4O1xcclxcbiAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9hZGluZ0NvbnRhaW5lclwiOiBcIkxvYWRpbmdJbmRpY2F0b3JfbG9hZGluZ0NvbnRhaW5lcl9fOTdLdm1cIixcblx0XCJsb2FkZXJcIjogXCJMb2FkaW5nSW5kaWNhdG9yX2xvYWRlcl9fMTdPaTBcIixcblx0XCJsb2FkZXItcm90YXRlXCI6IFwiTG9hZGluZ0luZGljYXRvcl9sb2FkZXItcm90YXRlX18zUTlVeFwiLFxuXHRcImxkc1JpcHBsZVwiOiBcIkxvYWRpbmdJbmRpY2F0b3JfbGRzUmlwcGxlX18yWXUyZFwiLFxuXHRcImxkcy1yaXBwbGVcIjogXCJMb2FkaW5nSW5kaWNhdG9yX2xkcy1yaXBwbGVfX2pKQVA5XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==