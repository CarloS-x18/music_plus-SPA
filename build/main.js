/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n  font-size: 62.5%; }\\n\\n*, *:after, *:before {\\n  box-sizing: inherit; }\\n\\nbody {\\n  background-color: #1B282F;\\n  min-height: 100vh;\\n  font-family: \\\"Rubik\\\", sans-serif; }\\n\\nh1, h2, h3, p, ul, button {\\n  margin: 0;\\n  padding: 0; }\\n\\nh1, h2, h3 {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  line-height: 1.2; }\\n\\np {\\n  line-height: 1.5; }\\n\\nbutton {\\n  background-color: transparent;\\n  border-color: transparent; }\\n\\nli {\\n  list-style: none; }\\n\\na {\\n  text-decoration: none;\\n  color: black; }\\n\\ninput {\\n  background-color: transparent;\\n  border-color: transparent; }\\n\\n.navbar {\\n  height: 7.5rem;\\n  padding: 0 2.5rem;\\n  background-color: #11191E;\\n  border-radius: 0 0 15px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n  .navbar .logo {\\n    color: #FFE600;\\n    font-family: \\\"Poppins\\\", sans-serif;\\n    font-size: 3rem;\\n    font-weight: bold; }\\n    @media (min-width: 970px) {\\n      .navbar .logo {\\n        font-size: 3.5rem; } }\\n  @media (min-width: 970px) {\\n    .navbar .btn-menu {\\n      display: none; } }\\n  .navbar .pages {\\n    display: none; }\\n    .navbar .pages .links {\\n      display: flex;\\n      gap: 5rem; }\\n    .navbar .pages a {\\n      color: #FAFAFA;\\n      font-size: 2rem; }\\n      .navbar .pages a:hover {\\n        color: #FFE600; }\\n    @media (min-width: 970px) {\\n      .navbar .pages {\\n        display: block; } }\\n  .navbar .btn-mode {\\n    display: none; }\\n    @media (min-width: 970px) {\\n      .navbar .btn-mode {\\n        display: block; } }\\n  @media (min-width: 970px) {\\n    .navbar {\\n      padding: 0 5%; } }\\n\\n.bg-nav {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  background-color: #000000a3;\\n  top: 0;\\n  display: none; }\\n\\n.content-nav {\\n  height: 100vh;\\n  width: 100%;\\n  max-width: 45rem;\\n  background-color: #11191E;\\n  padding: 6rem 3rem;\\n  position: fixed;\\n  top: 0;\\n  right: -100%;\\n  transition: .25s all linear; }\\n  .content-nav .close-btn {\\n    position: absolute;\\n    top: 2rem;\\n    right: 2rem; }\\n  .content-nav .links-mobile {\\n    display: grid;\\n    gap: 2rem; }\\n    .content-nav .links-mobile .link-page-mobile {\\n      font-size: 3.5rem;\\n      font-weight: 500;\\n      color: #F2F2F2; }\\n    .content-nav .links-mobile .link-page-mobile {\\n      padding: 0 1rem; }\\n      .content-nav .links-mobile .link-page-mobile:hover {\\n        color: #FFE600; }\\n  .content-nav .btn-mode-mobile {\\n    position: absolute;\\n    bottom: 7rem;\\n    right: 2rem; }\\n\\n.btn-mode {\\n  cursor: pointer; }\\n  .btn-mode .mode-content {\\n    display: flex;\\n    justify-content: start;\\n    width: 9rem;\\n    background-color: #F2F2F2;\\n    border-radius: 50px;\\n    padding: .2rem; }\\n    .btn-mode .mode-content .mode-icon {\\n      height: 4.5rem;\\n      width: 4.5rem;\\n      padding: .7rem;\\n      background-color: #1B282F;\\n      border-radius: 100px; }\\n\\n.home {\\n  height: calc(100vh - 7.5rem);\\n  width: 100%; }\\n  @media (min-width: 990px) {\\n    .home {\\n      display: grid;\\n      place-items: center; } }\\n  .home .container {\\n    width: 90%;\\n    max-width: 120rem;\\n    margin: 5rem auto;\\n    display: grid;\\n    place-items: center;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 6rem; }\\n    @media (min-width: 1225px) {\\n      .home .container {\\n        flex-direction: row;\\n        justify-content: center;\\n        align-items: flex-start;\\n        gap: 10rem; } }\\n  .home .home-text {\\n    text-align: center; }\\n    @media (min-width: 1325px) {\\n      .home .home-text {\\n        text-align: left;\\n        margin-top: 5rem; } }\\n    .home .home-text .home-text-title {\\n      color: #fff;\\n      font-size: 3.5rem; }\\n      @media (min-width: 650px) {\\n        .home .home-text .home-text-title {\\n          font-size: 6rem; } }\\n    .home .home-text .home-text-paragraph {\\n      color: #fff;\\n      font-size: 1.4rem;\\n      margin: 4rem auto;\\n      max-width: 75rem; }\\n      .home .home-text .home-text-paragraph .text-color {\\n        color: #FFE600;\\n        font-weight: 500; }\\n      @media (min-width: 650px) {\\n        .home .home-text .home-text-paragraph {\\n          font-size: 1.8rem; } }\\n    .home .home-text .home-buttons {\\n      display: flex;\\n      justify-content: center;\\n      gap: 2rem; }\\n      @media (min-width: 1325px) {\\n        .home .home-text .home-buttons {\\n          justify-content: left;\\n          gap: 3.5rem; } }\\n    .home .home-text .home-btn-plans {\\n      background-color: #11191E;\\n      color: #FFE600;\\n      font-family: \\\"Poppins\\\", sans-serif;\\n      font-size: 1.4rem;\\n      font-weight: 600;\\n      padding: .5rem 3.2rem;\\n      border-radius: 50px;\\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\\n      cursor: pointer; }\\n      .home .home-text .home-btn-plans:active {\\n        transform: scale(1.1);\\n        transition: .2s all linear; }\\n      @media (min-width: 990px) {\\n        .home .home-text .home-btn-plans {\\n          padding: 1rem 5.6rem; } }\\n    .home .home-text .home-btn-download {\\n      background-color: #FFE600;\\n      color: #11191E;\\n      font-family: \\\"Poppins\\\", sans-serif;\\n      font-size: 1.4rem;\\n      font-weight: 600;\\n      padding: .5rem 3.2rem;\\n      border-radius: 50px;\\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\\n      cursor: pointer; }\\n      .home .home-text .home-btn-download:active {\\n        transform: scale(1.1);\\n        transition: .2s all linear; }\\n      @media (min-width: 990px) {\\n        .home .home-text .home-btn-download {\\n          padding: 1rem 5.6rem; } }\\n  .home .home-img {\\n    background-color: #00000030;\\n    display: inline-block;\\n    padding: 3rem;\\n    border-radius: 26px;\\n    width: 70%;\\n    max-width: 40rem; }\\n    .home .home-img img {\\n      width: 100%; }\\n    @media (min-width: 990px) {\\n      .home .home-img {\\n        max-width: 50rem; } }\\n\\n.contact {\\n  min-height: calc(100vh - 7.5rem);\\n  display: grid;\\n  place-items: center; }\\n  .contact .container {\\n    height: 90%;\\n    width: 85%;\\n    padding: 8rem 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    border-radius: 1.8rem;\\n    background-color: #11191E; }\\n    @media (min-width: 1250px) {\\n      .contact .container {\\n        flex-direction: row;\\n        justify-content: space-around;\\n        padding: 0 10rem; } }\\n    .contact .container .image_contact {\\n      width: 21rem; }\\n      @media (min-width: 600px) {\\n        .contact .container .image_contact {\\n          width: 29rem; } }\\n      @media (min-width: 1250px) {\\n        .contact .container .image_contact {\\n          width: 38rem; } }\\n    .contact .container .form_contact {\\n      width: 82%; }\\n      @media (min-width: 1250px) {\\n        .contact .container .form_contact {\\n          width: 50%; } }\\n    .contact .container .form_text {\\n      text-align: center;\\n      margin-bottom: 2rem; }\\n      .contact .container .form_text h2 {\\n        font-size: 2rem;\\n        color: #fff;\\n        margin-bottom: 1rem; }\\n      .contact .container .form_text p {\\n        font-weight: bold;\\n        font-size: 1.6rem;\\n        color: #FFE600;\\n        line-height: 1.2; }\\n      @media (min-width: 600px) {\\n        .contact .container .form_text h2 {\\n          font-size: 3rem; }\\n        .contact .container .form_text p {\\n          font-size: 2rem; } }\\n      @media (min-width: 1450px) {\\n        .contact .container .form_text h2 {\\n          font-size: 4.2rem;\\n          margin-bottom: 2rem; }\\n        .contact .container .form_text p {\\n          font-size: 3rem; } }\\n      @media (min-width: 1250px) {\\n        .contact .container .form_text {\\n          text-align: left;\\n          margin-bottom: 12rem; } }\\n    .contact .container .form_input {\\n      width: 100%;\\n      max-width: 50rem;\\n      height: 3rem;\\n      margin: 0 auto;\\n      display: flex; }\\n      @media (min-width: 1250px) {\\n        .contact .container .form_input {\\n          max-width: none;\\n          height: 4rem;\\n          margin: 0; } }\\n    .contact .container input[type=text] {\\n      width: 70%;\\n      padding-left: 1.5rem;\\n      border-radius: 2rem 0 0 2rem;\\n      background-color: #fff;\\n      outline: none;\\n      font-size: 1.4rem; }\\n      .contact .container input[type=text]::placeholder {\\n        color: #A5A5A5;\\n        font-family: \\\"Rubik\\\", sans-serif;\\n        font-size: 1.2rem;\\n        font-weight: bold; }\\n    .contact .container input[type=submit] {\\n      width: 30%;\\n      border-radius: 0 2rem 2rem 0;\\n      background-color: #FFE600;\\n      font-family: \\\"Poppins\\\", sans-serif;\\n      font-weight: bold;\\n      font-size: 1.4rem; }\\n\\n.show-nav {\\n  right: 0; }\\n  @media (min-width: 970px) {\\n    .show-nav {\\n      right: -100%; } }\\n\\n.show-bg-nav {\\n  display: block; }\\n  @media (min-width: 970px) {\\n    .show-bg-nav {\\n      display: none; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://musicplus_spa/./src/sass/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/views/contact.html":
/*!********************************!*\
  !*** ./src/views/contact.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"container\\\">\\r\\n    <img class=\\\"image_contact\\\" src=\\\"./img/image_contact.svg\\\" alt=\\\"contact image\\\">\\r\\n\\r\\n    <div class=\\\"form_contact\\\">\\r\\n        <div class=\\\"form_text\\\">\\r\\n            <h2>Do you any questions?</h2>\\r\\n            <p>Leave us you email and we<br> will contact you</p>\\r\\n        </div>\\r\\n        <div class=\\\"form_input\\\">\\r\\n            <input type=\\\"text\\\" placeholder=\\\"Your email\\\">\\r\\n            <input type=\\\"submit\\\" value=\\\"Send\\\">\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://musicplus_spa/./src/views/contact.html?");

/***/ }),

/***/ "./src/views/home.html":
/*!*****************************!*\
  !*** ./src/views/home.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"container\\\">\\r\\n    <div class=\\\"home-text\\\">\\r\\n        <h1 class=\\\"home-text-title\\\">Live the music<br> wherever you are</h1>\\r\\n        <p class=\\\"home-text-paragraph\\\">Enjoy unlimited music without ads for as long as you want, choose the <span class=\\\"text-color\\\">plan</span> that best suits you and start listening to your favorite artists from around the world.</p>\\r\\n    \\r\\n        <div class=\\\"home-buttons\\\">\\r\\n            <a href=\\\"#/plans\\\" class=\\\"home-btn-plans\\\">Plans</a>\\r\\n            <a href=\\\"#/download\\\" class=\\\"home-btn-download\\\">Download</a>\\r\\n        </div>\\r\\n    </div>\\r\\n    \\r\\n    <div class=\\\"home-img\\\">\\r\\n        <img src=\\\"./img/img-home.svg\\\" alt=\\\"person image\\\">\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://musicplus_spa/./src/views/home.html?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://musicplus_spa/./src/sass/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://musicplus_spa/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controllers/contact.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/contact.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_contact_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/contact.html */ \"./src/views/contact.html\");\n\r\n\r\nconst Contact = () => {\r\n    const divElement = document.createElement('div');\r\n    divElement.classList.add('contact');\r\n    divElement.innerHTML = _views_contact_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    return divElement;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://musicplus_spa/./src/controllers/contact.controller.js?");

/***/ }),

/***/ "./src/controllers/home.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/home.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/views/home.html\");\n\r\n\r\nconst Home = () => {\r\n    const divElement = document.createElement('div');\r\n    divElement.classList.add('home');\r\n    divElement.innerHTML = _views_home_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    return divElement;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://musicplus_spa/./src/controllers/home.controller.js?");

/***/ }),

/***/ "./src/controllers/index.controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/index.controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.controller */ \"./src/controllers/home.controller.js\");\n/* harmony import */ var _contact_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.controller */ \"./src/controllers/contact.controller.js\");\n\r\n\r\n\r\nconst pages = {\r\n    Home: _home_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    Contact: _contact_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages);\n\n//# sourceURL=webpack://musicplus_spa/./src/controllers/index.controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.scss */ \"./src/sass/app.scss\");\n/* harmony import */ var _routes_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/index.routes */ \"./src/routes/index.routes.js\");\n\r\n\r\n\r\n// variables \r\nconst btnMenu = document.querySelector('.btn-menu');\r\nconst navMobile = document.querySelector('.content-nav');\r\nconst bgNav = document.querySelector('.bg-nav');\r\nconst btnClose = document.querySelector('.close-btn');\r\nconst pagesNavMobile = document.querySelectorAll('.link-page-mobile');\r\n\r\n// show nav mobile to click button menu\r\nbtnMenu.addEventListener('click', () => {\r\n    navMobile.classList.add('show-nav');\r\n    bgNav.classList.add('show-bg-nav');\r\n});\r\n\r\n// remove nav mobile to click button close\r\nbtnClose.addEventListener('click', () => {\r\n    navMobile.classList.remove('show-nav');\r\n    bgNav.classList.remove('show-bg-nav');\r\n});\r\n\r\npagesNavMobile.forEach( page => {\r\n    page.addEventListener('click', e => {\r\n        navMobile.classList.remove('show-nav');\r\n        bgNav.classList.remove('show-bg-nav');\r\n    })\r\n});\r\n\r\n// Page in base to route\r\nwindow.addEventListener('hashchange', () => {\r\n    (0,_routes_index_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window.location.hash);\r\n})\n\n//# sourceURL=webpack://musicplus_spa/./src/index.js?");

/***/ }),

/***/ "./src/routes/index.routes.js":
/*!************************************!*\
  !*** ./src/routes/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_index_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index.controller */ \"./src/controllers/index.controller.js\");\n\r\n\r\nconst main = document.querySelector('.root');\r\n\r\nconst router = (route) => {\r\n\r\n    main.innerHTML = '';\r\n\r\n    switch (route) {\r\n        case '#/':\r\n            return main.appendChild(_controllers_index_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Home());\r\n        case '#/download':\r\n            return console.log('Download')\r\n        case '#/plans':\r\n                return console.log('Plans');\r\n        case '#/contact':\r\n            return main.appendChild(_controllers_index_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Contact());\r\n        default:\r\n            return console.log(404);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://musicplus_spa/./src/routes/index.routes.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;