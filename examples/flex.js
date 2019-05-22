webpackJsonp([2],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dxc_flex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dxc_flex__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Flex = function (_Component) {
  _inherits(Flex, _Component);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Flex.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { style: { margin: 50 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        null,
        "Flex \u5E03\u5C40"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        "\u522B\u5728\u7528\u5C34\u5C2C\u768412\u6805\u683C\u548C24\u6805\u683C\uFF0C\u6765\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u641E\u5B9A\u4E00\u5207\u3002"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "\u5E73\u5206\u5BBD\u5EA6"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
        { vertical: "center", style: { width: 300, height: 300, borderWidth: 1, border: "1px solid #333" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "1"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "2"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "3"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "\u56FA\u5B9A\u5BBD\u5EA6+\u5269\u4F59\u81EA\u52A8\u586B\u6EE1"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
        { vertical: "center", style: { width: 300, height: 300, borderWidth: 1, border: "1px solid #333" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { width: 120, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "\u56FA\u5B9A\u5BBD\u5EA6120px"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "\u81EA\u52A8\u586B\u6EE1\u5269\u4F59\u90E8\u5206"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "\u6309\u6BD4\u4F8B\uFF1A2:1:1"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
        { vertical: "center", style: { width: 300, height: 300, borderWidth: 1, border: "1px solid #333" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 2, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "2"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "1"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "1"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "\u5782\u76F4\u5E03\u5C40\u5199\u6CD5\u4E00\u6837"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
        { layout: "vertical", horizontal: "center", style: { width: 300, height: 300, borderWidth: 1, border: "1px solid #333" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 2, width: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "2"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, width: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "1"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_dxc_flex___default.a,
          { horizontal: "center", vertical: "center", style: { flex: 1, width: 80, background: "#f1f1f1", border: "1px solid #333" } },
          "1"
        )
      )
    );
  };

  return Flex;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Flex, null), document.getElementById("__react-content"));

/***/ })

},[8]);
//# sourceMappingURL=flex.js.map