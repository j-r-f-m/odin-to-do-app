/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background-night.jpg */ "./src/images/background-night.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* -----------------RESET----------------------------- */\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/* --------------------------------------------------------- */\r\n\r\n/* ----------------------------- background ----------------- */\r\nbody {\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n/* ----------------------------------------------------------- */\r\n\r\n/* ---------------------------- style --------------------------- */\r\n/* .sidebar-container, .heading-container, .prj-nav-con {\r\n\tborder: 1px solid purple;\r\n} */\r\n\r\n.sidebar-container, .tasks-container-overview {\r\n\tbackground-color: whitesmoke;\r\n}\r\n\r\n\r\n\r\n.heading-container, .btn {\r\n\twidth: 10rem;\r\n\tpadding: 0.5rem 0 0.5rem 0;\r\n\tmargin: 1rem;\r\n}\r\n\r\n.heading-container {\r\n\tmargin-top: 5rem;\r\n}\r\n\r\n\r\n.project, .task  {\r\n\theight: 1rem;\r\n\tmargin: 0.5rem 0 0.5rem 0;\r\n\tpadding: 0.5rem 0 0.5rem 0.5rem;\r\n}\r\n\r\n.project:hover, .project:focus, .task:hover, .task:focus {\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.prj-nav-con, .def-nav-con {\r\n\tmargin-top: 1rem;\r\n\twidth: 10rem;\r\n}\r\n\r\n.heading-project, .heading-default {\r\n\tpadding: 0.5rem 0 0.5rem 0;\r\n}\r\n\r\n.icon-chevron, .icon-chevron-down , #icon-close, #icon-plus{\r\n\tpadding: 0.5rem;\r\n\tbackground-color: grey;\r\n\theight: 1rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\n.icon-chevron:hover, .icon-chevron:focus, #icon-close:hover, #icon-close:focus, \r\n#icon-plus:hover, #icon-plus:focus\r\n {\r\n\tbackground-color: lightgrey;\r\n}\r\n\r\n.crt-tsk-con {\r\n\tbackground-color: whitesmoke;\r\n}\r\n\r\n.tsk-heading-con {\r\n\tmargin: 0.5rem;\r\n}\r\n\r\n/* ----------------------------- layout ------------------ */\r\n#content {\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start]1fr) ;\r\n\tgrid-template-rows: repeat(12, [row-start] 1fr) ;\r\n}\r\n\r\n.sidebar-container {\r\n\tgrid-column: 1 / 3;\r\n\tgrid-row: 1 / 13;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-items: center;\r\n\talign-items: center;\r\n\r\n\tmin-width: 15rem;\r\n}\r\n\r\n.tasks-container-overview {\r\n\tgrid-column: 6 / 10;\r\n\tgrid-row: 3 / 7;\r\n}\r\n\r\n.heading-container {\r\n\tgrid-column: 3 / 11;\r\n\tgrid-row: 2 / 3; \r\n\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n.def-nav-con, .prj-nav-con {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.def-h1-con, .prj-h1-con, .tsk-heading-con {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.input-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n/* -------------------------------------------------------- */\r\n\r\n/* ------------------------- text --------------------------- */\r\nbody {\r\n\tfont-family: Roboto;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: 700;\r\n\tfont-size: large;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA,wDAAwD;AACxD;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;;CAET,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA,8DAA8D;;AAE9D,+DAA+D;AAC/D;CACC,mDAAgD;CAChD,2BAA2B;CAC3B,sBAAsB;CACtB,4BAA4B;AAC7B;AACA,gEAAgE;;AAEhE,mEAAmE;AACnE;;GAEG;;AAEH;CACC,4BAA4B;AAC7B;;;;AAIA;CACC,YAAY;CACZ,0BAA0B;CAC1B,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;;AAGA;CACC,YAAY;CACZ,yBAAyB;CACzB,+BAA+B;AAChC;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,eAAe;CACf,sBAAsB;CACtB,YAAY;CACZ,mBAAmB;AACpB;;AAEA;;;CAGC,2BAA2B;AAC5B;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,cAAc;AACf;;AAEA,4DAA4D;AAC5D;CACC,aAAa;CACb,aAAa;CACb,kDAAkD;CAClD,gDAAgD;AACjD;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;;CAEhB,aAAa;CACb,sBAAsB;CACtB,qBAAqB;CACrB,mBAAmB;;CAEnB,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;;AAGA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;;;AAIA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA,6DAA6D;;AAE7D,+DAA+D;AAC/D;CACC,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n/* -----------------RESET----------------------------- */\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/* --------------------------------------------------------- */\r\n\r\n/* ----------------------------- background ----------------- */\r\nbody {\r\n\tbackground: url('./images/background-night.jpg');\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n/* ----------------------------------------------------------- */\r\n\r\n/* ---------------------------- style --------------------------- */\r\n/* .sidebar-container, .heading-container, .prj-nav-con {\r\n\tborder: 1px solid purple;\r\n} */\r\n\r\n.sidebar-container, .tasks-container-overview {\r\n\tbackground-color: whitesmoke;\r\n}\r\n\r\n\r\n\r\n.heading-container, .btn {\r\n\twidth: 10rem;\r\n\tpadding: 0.5rem 0 0.5rem 0;\r\n\tmargin: 1rem;\r\n}\r\n\r\n.heading-container {\r\n\tmargin-top: 5rem;\r\n}\r\n\r\n\r\n.project, .task  {\r\n\theight: 1rem;\r\n\tmargin: 0.5rem 0 0.5rem 0;\r\n\tpadding: 0.5rem 0 0.5rem 0.5rem;\r\n}\r\n\r\n.project:hover, .project:focus, .task:hover, .task:focus {\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.prj-nav-con, .def-nav-con {\r\n\tmargin-top: 1rem;\r\n\twidth: 10rem;\r\n}\r\n\r\n.heading-project, .heading-default {\r\n\tpadding: 0.5rem 0 0.5rem 0;\r\n}\r\n\r\n.icon-chevron, .icon-chevron-down , #icon-close, #icon-plus{\r\n\tpadding: 0.5rem;\r\n\tbackground-color: grey;\r\n\theight: 1rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\n.icon-chevron:hover, .icon-chevron:focus, #icon-close:hover, #icon-close:focus, \r\n#icon-plus:hover, #icon-plus:focus\r\n {\r\n\tbackground-color: lightgrey;\r\n}\r\n\r\n.crt-tsk-con {\r\n\tbackground-color: whitesmoke;\r\n}\r\n\r\n.tsk-heading-con {\r\n\tmargin: 0.5rem;\r\n}\r\n\r\n/* ----------------------------- layout ------------------ */\r\n#content {\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start]1fr) ;\r\n\tgrid-template-rows: repeat(12, [row-start] 1fr) ;\r\n}\r\n\r\n.sidebar-container {\r\n\tgrid-column: 1 / 3;\r\n\tgrid-row: 1 / 13;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-items: center;\r\n\talign-items: center;\r\n\r\n\tmin-width: 15rem;\r\n}\r\n\r\n.tasks-container-overview {\r\n\tgrid-column: 6 / 10;\r\n\tgrid-row: 3 / 7;\r\n}\r\n\r\n.heading-container {\r\n\tgrid-column: 3 / 11;\r\n\tgrid-row: 2 / 3; \r\n\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n.def-nav-con, .prj-nav-con {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.def-h1-con, .prj-h1-con, .tsk-heading-con {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.input-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n/* -------------------------------------------------------- */\r\n\r\n/* ------------------------- text --------------------------- */\r\nbody {\r\n\tfont-family: Roboto;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: 700;\r\n\tfont-size: large;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrjFact": () => (/* binding */ PrjFact),
/* harmony export */   "TaskFac": () => (/* binding */ TaskFac),
/* harmony export */   "addPrjObj": () => (/* binding */ addPrjObj),
/* harmony export */   "addTaskObj": () => (/* binding */ addTaskObj),
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "allTasks": () => (/* binding */ allTasks)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// managa data

// object that holds all tasks
const allTasks = [
    {
        title: 'test 1',
        descr: 'testing',
        dueDate: '20.1.22',
        project: 'test project 1'
    },
    {
        title: 'test 2',
        descr: 'testing',
        dueDate: '21.1.2200',
        project: 'test project 2'
    }
];

// object that holds all tasks
const allProjects = [
    {
        title: 'Test Project 1',
    },
    {
        title: 'Test Project 2'
    }

];

// factory function that creates tasks
const TaskFac = (title, descr, dueDate, project) => {
    return {title, descr, dueDate, project}
}

// add task to global task array
const addTaskObj = (title, descr, dueDate, project) => {
    // create a new task and push it into the global object
    // gets called by clicking the submit putton
    const tempTask = TaskFac(title, descr, dueDate, project);
    allTasks.push(tempTask)
    console.log(allTasks);

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // If task has same name dont add to array
}

const PrjFact = (title) => {
    return {title}
}

const addPrjObj = (title) => {
    const tempPrj = PrjFact(title);
    allProjects.push(tempPrj)
}




/***/ }),

/***/ "./src/displayTask.js":
/*!****************************!*\
  !*** ./src/displayTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskOverview": () => (/* binding */ taskOverview)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");



// displays task to a corresponding project


const taskOverview = (e) => {
       // tasks-container
       const tskCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('tasks-container-overview', 'div', '#content').crtNode();
       // headgin container
       const headCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('tsk-heading-con', 'div', '.tasks-container-overview').crtNode();
       // index of object clicked in the allProjects-array
       const idx = parseFloat(e.target.id);
       //tasks-heading
       const tskh1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('tasks-h1','h1','.tsk-heading-con', `${_data__WEBPACK_IMPORTED_MODULE_1__.allProjects[idx].title}`).crtNode();
       // cloxe button
       const closeIcon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.IconFac)(_images_close_svg__WEBPACK_IMPORTED_MODULE_2__, 'close', 'icon-close', headCon).crtIcon();
       closeIcon.addEventListener('click', () => {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('.tasks-container-overview')
       })
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconFac": () => (/* binding */ IconFac),
/* harmony export */   "NodeFac": () => (/* binding */ NodeFac),
/* harmony export */   "crtChevronDownDef": () => (/* binding */ crtChevronDownDef),
/* harmony export */   "crtChevronDownPrj": () => (/* binding */ crtChevronDownPrj),
/* harmony export */   "crtChevronUpDef": () => (/* binding */ crtChevronUpDef),
/* harmony export */   "crtChevronUpPrj": () => (/* binding */ crtChevronUpPrj),
/* harmony export */   "crtPlusBtn": () => (/* binding */ crtPlusBtn),
/* harmony export */   "dltClassEle": () => (/* binding */ dltClassEle),
/* harmony export */   "dltNode": () => (/* binding */ dltNode),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chevron-down.svg */ "./src/images/chevron-down.svg");
/* harmony import */ var _images_chevron_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chevron-up.svg */ "./src/images/chevron-up.svg");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTask */ "./src/displayTask.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.js */ "./src/form.js");






// dom manipulation

const NodeFac = (nameClass, typeOfElement, parent, txt) => {
    // factory function that creates node objects with a class and appends it to
    // its parent

    // creates node and returns it
    const crtNode = ()=> {
        // select parent element
        const parentElement = document.querySelector(parent);   

        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent= txt;
        parentElement.appendChild(createDomElement);

        // created node is returned -> element methods can be used
        return createDomElement;
    }

    return {crtNode};

}

const dltClassEle = (nameOfClass) => {
    // remove all elements with specific class 

    // get all elements you want to delete by their class names
    const classElements = document.querySelectorAll(nameOfClass);
    // iterate over them to delete them
    classElements.forEach(classElements => {
        classElements.remove();
    })
}

const dltNode = (selector) => {
    // check if element exists befor trying to delete it
    if (document.querySelector(selector)) {
        // delete node
        const node = document.querySelector(selector);
        node.remove();
    }
}

// create chevron up button
const crtChevronUpDef = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    // purpose of button ist to close the dropdown
    // 1. delete list of task
    // 2. delete button and add chevron up button
    tempChevron.addEventListener('click', () => {
        // delete task list
        dltNode('.default-tasks');
        crtChevronDownDef(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0__, 'icon-chevron', 'icon-chevron-down-def', parent);
        // delete chevron up
        dltNode('#icon-chevron-up-def');

    })
}
// create chevron down button for Default Projects
const crtChevronDownDef = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    
    tempChevron.addEventListener('click', () => {
        // create container for tasks
        const defaultTasks = NodeFac('default-tasks', 'div', '.def-nav-con').crtNode();
        // display tasks in sidebar
        taskList(_data__WEBPACK_IMPORTED_MODULE_3__.allTasks, '.default-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUpDef(_images_chevron_up_svg__WEBPACK_IMPORTED_MODULE_1__, 'icon-chevron', 'icon-chevron-up-def', parent);
        
        // delete chevron down
        dltNode('#icon-chevron-down-def');
    })
};

const crtChevronUpPrj = (source, nameOfClass, nameOfId, parent) => {
    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    // purpose of button ist to close the dropdown
    // 1. delete list of task
    // 2. delete button and add chevron up button
    tempChevron.addEventListener('click', () => {
        // delete task list
        dltNode('.projects-tasks');
        crtChevronDownPrj(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0__, 'icon-chevron', 'icon-chevron-down-prj', parent);
        // delete chevron up
        dltNode('#icon-chevron-up-prj');
    })
}

// create chevron up button for Default Projects
const crtChevronDownPrj = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    
    tempChevron.addEventListener('click', () => {
        // create container for tasks
        const defaultProjects = NodeFac('projects-tasks', 'div', '.prj-nav-con').crtNode();
        // display tasks in sidebar
        projectsList(_data__WEBPACK_IMPORTED_MODULE_3__.allProjects, '.projects-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUpPrj(_images_chevron_up_svg__WEBPACK_IMPORTED_MODULE_1__, 'icon-chevron', 'icon-chevron-up-prj', parent);
        
        // delete chevron down
        dltNode('#icon-chevron-down-prj');
    })
};

//const addPrj = IconFac();
const IconFac = (source, nameOfClass, nameOfId, parent) => {
    // create icon

    const crtIcon = () => {
        const icon = new Image();
        icon.src = source;
        icon.id = nameOfId
        icon.className = nameOfClass;
        parent.appendChild(icon);
        return icon;
    }
    return {crtIcon}
}

const crtPlusBtn =  (source, nameOfClass, nameOfId, parent) => {
    const tempPlus = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    tempPlus.addEventListener('click', () => {
        console.log('lol')
        ;(0,_form_js__WEBPACK_IMPORTED_MODULE_4__.crtPrjForm)();
    })

}

const taskList = (arr, parent) => {
    // display all tasks in sidebar
    for (let i = 0;i < arr.length; i++) {
        const newTask = NodeFac('task', 'div', parent, `${arr[i].title} - ${arr[i].dueDate}`).crtNode();
        newTask.setAttribute('data', `${arr[i].title}`);
    }
}

const projectsList = (arr, parent) => {
        // display all projects in sidebar
        for (let i = 0;i < arr.length; i++) {
            // create the project-div 
            crtPrjsBtn('project', 'div', parent, `${arr[i].title}`, `${i}`);
        }
}

const crtPrjsBtn = (nameClass, typeOfElement, parent, txt, idOfEle) => {
    // create the projects elemnts in the side bar and add eventllistener
    // with the last argument the position of the project in the allProjects array
    // is passed and can be used with the event-argument
    const prj = NodeFac(nameClass, typeOfElement, parent, txt, idOfEle).crtNode();
    prj.id = idOfEle;
    prj.addEventListener('click', (e) => {
  
        dltNode('.tasks-container-overview');
        (0,_displayTask__WEBPACK_IMPORTED_MODULE_2__.taskOverview)(e);
    })
}



/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crtPrjForm": () => (/* binding */ crtPrjForm),
/* harmony export */   "crtTskForm": () => (/* binding */ crtTskForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chevron-down.svg */ "./src/images/chevron-down.svg");
/* harmony import */ var _images_chevron_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chevron-up.svg */ "./src/images/chevron-up.svg");
// create from to create task







const crtTskForm = () => {
    // create input form with model to get data for task

    //modal - create dialog
    const inputModal = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('dialog', 'dialog', '#content').crtNode();
    inputModal.setAttribute('id', 'ipt-dialog');

    //------------------------------- form ------------------------------
    const form = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input-form', 'form', '.dialog').crtNode();
    form.setAttribute('method', 'dialog');
    // title
    const labelTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('label', 'label', '.input-form', 'Title').crtNode();
    labelTitle.setAttribute('for', 'title');
    const inputTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input', 'input', '.input-form').crtNode();
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('id', 'task-title');
    inputTitle.required = true;
    //description
    const labeDescr = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('label', 'label', '.input-form', 'Description').crtNode();
    labeDescr.setAttribute('for', 'description');
    const inputDescr = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input', 'input', '.input-form').crtNode();
    inputDescr.setAttribute('type', 'text');
    inputDescr.setAttribute('name', 'description');
    inputDescr.setAttribute('id', 'task-description');
    inputDescr.required = true;
    // due date
    const labelDue = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('label', 'label', '.input-form', 'Due Date').crtNode();
    labelDue.setAttribute('for', 'due-date');
    const inputDue = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input', 'input', '.input-form').crtNode();
    inputDue.setAttribute('type', 'text');
    inputDue.setAttribute('name', 'due-date');
    inputDue.setAttribute('id', 'due-date');
    inputDue.required = true;
    // Project
    const labelproject = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('label', 'label', '.input-form', 'Project: ').crtNode();
    labelproject.setAttribute('for', 'Project');
    const inputProject = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input', 'input', '.input-form').crtNode();
    inputProject.setAttribute('type', 'text');
    inputProject.setAttribute('name', 'project');
    inputProject.setAttribute('id', 'project');
    inputProject.required = true;
    // cancel button
    const cancelBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('btn', 'button', '.input-form', 'Cancel').crtNode();
    cancelBtn.addEventListener('click', () => {
        // delete dialog
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('#ipt-dialog');
        inputModal.close();
    })


    // get parent of the default tasks list heading in order to add new chevron 
    // down icons
    const defH1Con = document.querySelector('.def-h1-con');
    const prjH1Con = document.querySelector('.prj-h1-con');

    // confirm button
    const confirmBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('btn', 'input', '.input-form', 'Confirm').crtNode();
    confirmBtn.setAttribute('type', 'submit');

    confirmBtn.addEventListener('click', () => {
        // Form validation
        if (inputTitle.value === '') {
            return
        } else if (inputDescr.value === '') {
            return
        } else if (inputDue.value === '') {
            return 
        } else if (inputProject.value === '') {
            return
        } else {
            // if validation is passed then create new task object
            (0,_data__WEBPACK_IMPORTED_MODULE_1__.addTaskObj)(inputTitle.value, inputDescr.value, inputDue.value, inputProject.value);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('#ipt-dialog');
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('.default-tasks');

            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltClassEle)('.icon-chevron');
            // dltNode('#icon-chevron-up');
            // dltNode('#icon-chevron-down');
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.crtChevronDownDef)(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__, 'icon-chevron', 'icon-chevron-down-def', defH1Con);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.crtChevronDownPrj)(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__, 'icon-chevron', 'icon-chevron-down-prj', prjH1Con);
            //crtChevronDown(ChevronDown, 'icon-chevron', 'icon-chevron-down', prjH1Con);
        }
    })

    // show modal
    inputModal.showModal();
}

const crtPrjForm = () => {
        //modal - create dialog
        const inputModal = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('dialog', 'dialog', '#content').crtNode();
        inputModal.setAttribute('id', 'ipt-dialog');
        // form    
        const form = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input-form', 'form', '.dialog').crtNode();
        form.setAttribute('method', 'dialog');
        // title
        const labelTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('label', 'label', '.input-form', 'Title').crtNode();
        labelTitle.setAttribute('for', 'title');
        const inputTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('input', 'input', '.input-form').crtNode();
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('name', 'title');
        inputTitle.setAttribute('id', 'task-title');
        inputTitle.required = true;

        // cancel button
        const cancelBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('btn', 'button', '.input-form', 'Cancel').crtNode();
        cancelBtn.addEventListener('click', () => {
            // delete dialog
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('#ipt-dialog');
            inputModal.close();
        })

        // confirm button
        const confirmBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('btn', 'input', '.input-form', 'Confirm').crtNode();
        confirmBtn.setAttribute('type', 'submit');

        confirmBtn.addEventListener('click', () => {
            // Form validation
            if (inputTitle.value === '') {
                return
            } else {
                // if validation is passed then create new task object
                (0,_data__WEBPACK_IMPORTED_MODULE_1__.addPrjObj)(inputTitle.value);
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('#ipt-dialog');
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('.default-tasks');
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('.projects-tasks');
                // display tasks in sidebar
                const crtPrjsTsk = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('projects-tasks', 'div', '.prj-nav-con').crtNode();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectsList)(_data__WEBPACK_IMPORTED_MODULE_1__.allProjects, '.projects-tasks');

            }
        })

        inputModal.showModal();
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chevron-down.svg */ "./src/images/chevron-down.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
// create the "home"-page






const home = () => {
    // this html gets created the first time the side is used
    // its the default starting page

    // --------------------- SIDEBAR --------------------------
    // sidebar-container
    const sideCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('sidebar-container', 'div', '#content').crtNode();

    // header container
    const headerCon = 
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('heading-container', 'div', '.sidebar-container').
        crtNode();
    // heading sidebar
    const sidebarH1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)
        ('heading-sidebar', 'h1', '.heading-container', "To Do's")
        .crtNode();

    // create task btn
    const taskBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)
        ('btn', 'button', '.sidebar-container', '+ Create Task')
        .crtNode();
    taskBtn.setAttribute('id', 'create-taskBtn')
    taskBtn.addEventListener('click', () => {
        ;(0,_form__WEBPACK_IMPORTED_MODULE_1__.crtTskForm)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNode)('.tasks-container-overview')
    });

    

    // create all task summary
    const defaultCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('def-nav-con', 'div', '.sidebar-container').crtNode();
    const defH1Con = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('def-h1-con', 'div', '.def-nav-con').crtNode();
    const defaultH1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('heading-default', 'h1', '.def-h1-con', 'Default').crtNode();

    // create chevron down button for default
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.crtChevronDownDef)(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__, 'icon-chevron', 'icon-chevron-down-def', defH1Con);

    // create chevron down button for projects
    // create project nav container
    const projectsCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('prj-nav-con', 'div', '.sidebar-container').crtNode();
    const prjH1Con = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('prj-h1-con', 'div', '.prj-nav-con').crtNode();    
    const projectH1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)('heading-project', 'h1', '.prj-h1-con', 'Projects').crtNode();
    // create plus button for adding new projects
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.crtPlusBtn)(_images_plus_svg__WEBPACK_IMPORTED_MODULE_3__, 'icon', 'icon-plus', prjH1Con);
    //create chevron down for projects 
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.crtChevronDownPrj)(_images_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__, 'icon-chevron', 'icon-chevron-down-prj', prjH1Con);

    

}



/***/ }),

/***/ "./src/images/background-night.jpg":
/*!*****************************************!*\
  !*** ./src/images/background-night.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background-night.jpg";

/***/ }),

/***/ "./src/images/chevron-down.svg":
/*!*************************************!*\
  !*** ./src/images/chevron-down.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chevron-down.svg";

/***/ }),

/***/ "./src/images/chevron-up.svg":
/*!***********************************!*\
  !*** ./src/images/chevron-up.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chevron-up.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");





(() => {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();
    _data__WEBPACK_IMPORTED_MODULE_2__.allTasks;

})();

})();

/******/ })()
;
//# sourceMappingURL=bundleecdc920c0168e33d3e86.js.map