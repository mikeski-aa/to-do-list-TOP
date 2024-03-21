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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(10, 10, 10);
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}


h1 {
    margin: 0;
}

button:hover {
    cursor: pointer;
    background-color: rgb(35, 35, 35);
    color: white;
    border: 1px solid white;
}

.actionButtons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.actionButtons>button:hover {
    cursor: pointer;
    background-color: rgb(35, 35, 35);
    color: white;
    border: 0;
}

.actionButtons>button {
    border-radius: 50px;
    
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;
    background-color: rgb(44, 44, 44);
    width: 100vw;
    color: white;
    padding-bottom: 1em;
    border: 0;
    border-bottom: 15px;
    border: 5px solid white;
    border-color: white;
    border-radius:  0px 0px 55px 55px; 
   
}

header>button{
    font-size: 1rem;
    border: 0;
    font-weight: bold;
    border-radius: 12px;
    border-bottom: 2px solid black;
}

button {
    border: 0;
    font-weight: bold;
    
}
.content {
    display: grid;
    justify-content: center;
    width: 100vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.1fr));
    gap: 1rem;
}

.content>div {
    height: 300px;
    background: rgb(35, 35, 35);
    border: 2px solid black;
    display: grid;
}

.content>[class*='NewProj'] {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    min-height: 14vh;
    max-height: fit-content;
    border-radius: 25px 50px 50px 25px;
    border-right: 21px solid white;

    padding: 0.5rem;
}

.OpenProject {
   width: 45%;
   height: 75%;
   margin-right: 10px;
 
}
.OpenProject:hover {
    background-color: rgba(1, 255, 1, 0.37);
   
}
.DeleteProject {
    width: 45%;
    height: 75%;
    
 }

 .DeleteProject:hover {
    border: 0;
    color: rgba(255, 145, 0, 0.986);
    background-color: rgb(35, 35 ,35);
    outline: 1px solid white;
 }

 .Delete, .DeleteProject {
    background-color: rgba(255, 145, 0, 0.986);
    
 }

.content>[class*='NewProj']>h3 {
    margin: 0;
    width: 100%;
    padding-left: 15px;
    text-align: left;
}

.content>[class*='NewProj']>button {
    max-height: 34px;
    padding: 0;
    justify-items: center;
    border-radius: 12px;
    margin-bottom: 0.25rem;
 
}

.content>[class*='NewProj']>button {
    
}

.projectTitle {
    overflow: hidden;
    
}
[class*='firstItem'], [class*='secondItem'], [class*='thirdItem'] {
    overflow: hidden;
    height: 1em;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgb(255, 255, 255);
    padding: 0.5em;
}

form {
    margin-top: 1rem;
    display: grid;
    visibility: hidden;
    height: 0;
    border-radius: 55px;
    border: 2px solid black;
    padding: 0.5rem;
    justify-items: center;
    gap: 0.4rem;
    background-color: rgb(56, 56, 56);
    margin-bottom: 2rem;
}

label, legend {
    font-weight: bold;
}

div>label{
    font-weight: unset;
}

[class='dateSelect'] {
    display: grid;
    gap: 0.25rem;
    font-weight: bold;
    
}

#taskDate{
    border-radius: 12px;
    padding: 0.11rem;
    border: 1px solid black;
}
form>input, form>textarea{
    border-radius: 12px;
    border: 1px solid black;
    padding: 0.5rem;
}
#submitForm, #resetForm, #hideForm{
    border: 0;
    border-radius: 12px;
    padding:0.5em;
}

hr{
    width: 300px;
    display:block;
    height:1px;
    border: 0;
    border-top: 1px solid white;
    margin: 1em 0;
    padding: 0;
}

.content>[class*='NewCard'] {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    align-content: space-between;
    min-height: 7vh;
    max-height: fit-content;
    border: 0;
    border-radius: 25px 50px 50px 25px;
    border-right: 21px solid #ffffff;
    padding: 0.5rem;
    text-align: center;
    min-width: 150px;
}
.descVal {
    display: flex;
    overflow: hidden;
    max-height: 51px;
    flex-grow: 0;
}
[class*='NewCard']>h3 {
    width: 100%;
    margin: 0;
    text-align: left;
}
[class*='NewCard']>button {
    border-radius: 55px;
    width: 4rem;
    height:2rem;
    border: 0;
    font-weight: bold;
}
.Delete:hover {
    background-color: black;
    color: rgb(255, 0, 0)
}

[class*='NewCard']>button:hover {
    background-color: rgb(35, 35, 35);
    color: white;
    border: 1px solid white;
    
}



.description, .priority, .date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px dotted grey;
  
}

.description {
    display: flex;
    justify-content: space-between;
}

.descTemp, .prioTemp, .dateTemp {
    font-weight: bold;
}

.descTemp {
    margin-right: 12px;
}

.dateVal {
    font-weight: bold;
    color: rgb(255, 196, 0);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(10, 10, 10);\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: white;\n}\n\n\nh1 {\n    margin: 0;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 1px solid white;\n}\n\n.actionButtons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n}\n\n.actionButtons>button:hover {\n    cursor: pointer;\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 0;\n}\n\n.actionButtons>button {\n    border-radius: 50px;\n    \n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap:2rem;\n    background-color: rgb(44, 44, 44);\n    width: 100vw;\n    color: white;\n    padding-bottom: 1em;\n    border: 0;\n    border-bottom: 15px;\n    border: 5px solid white;\n    border-color: white;\n    border-radius:  0px 0px 55px 55px; \n   \n}\n\nheader>button{\n    font-size: 1rem;\n    border: 0;\n    font-weight: bold;\n    border-radius: 12px;\n    border-bottom: 2px solid black;\n}\n\nbutton {\n    border: 0;\n    font-weight: bold;\n    \n}\n.content {\n    display: grid;\n    justify-content: center;\n    width: 100vw;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 0.1fr));\n    gap: 1rem;\n}\n\n.content>div {\n    height: 300px;\n    background: rgb(35, 35, 35);\n    border: 2px solid black;\n    display: grid;\n}\n\n.content>[class*='NewProj'] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: space-between;\n    min-height: 14vh;\n    max-height: fit-content;\n    border-radius: 25px 50px 50px 25px;\n    border-right: 21px solid white;\n\n    padding: 0.5rem;\n}\n\n.OpenProject {\n   width: 45%;\n   height: 75%;\n   margin-right: 10px;\n \n}\n.OpenProject:hover {\n    background-color: rgba(1, 255, 1, 0.37);\n   \n}\n.DeleteProject {\n    width: 45%;\n    height: 75%;\n    \n }\n\n .DeleteProject:hover {\n    border: 0;\n    color: rgba(255, 145, 0, 0.986);\n    background-color: rgb(35, 35 ,35);\n    outline: 1px solid white;\n }\n\n .Delete, .DeleteProject {\n    background-color: rgba(255, 145, 0, 0.986);\n    \n }\n\n.content>[class*='NewProj']>h3 {\n    margin: 0;\n    width: 100%;\n    padding-left: 15px;\n    text-align: left;\n}\n\n.content>[class*='NewProj']>button {\n    max-height: 34px;\n    padding: 0;\n    justify-items: center;\n    border-radius: 12px;\n    margin-bottom: 0.25rem;\n \n}\n\n.content>[class*='NewProj']>button {\n    \n}\n\n.projectTitle {\n    overflow: hidden;\n    \n}\n[class*='firstItem'], [class*='secondItem'], [class*='thirdItem'] {\n    overflow: hidden;\n    height: 1em;\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px solid rgb(255, 255, 255);\n    padding: 0.5em;\n}\n\nform {\n    margin-top: 1rem;\n    display: grid;\n    visibility: hidden;\n    height: 0;\n    border-radius: 55px;\n    border: 2px solid black;\n    padding: 0.5rem;\n    justify-items: center;\n    gap: 0.4rem;\n    background-color: rgb(56, 56, 56);\n    margin-bottom: 2rem;\n}\n\nlabel, legend {\n    font-weight: bold;\n}\n\ndiv>label{\n    font-weight: unset;\n}\n\n[class='dateSelect'] {\n    display: grid;\n    gap: 0.25rem;\n    font-weight: bold;\n    \n}\n\n#taskDate{\n    border-radius: 12px;\n    padding: 0.11rem;\n    border: 1px solid black;\n}\nform>input, form>textarea{\n    border-radius: 12px;\n    border: 1px solid black;\n    padding: 0.5rem;\n}\n#submitForm, #resetForm, #hideForm{\n    border: 0;\n    border-radius: 12px;\n    padding:0.5em;\n}\n\nhr{\n    width: 300px;\n    display:block;\n    height:1px;\n    border: 0;\n    border-top: 1px solid white;\n    margin: 1em 0;\n    padding: 0;\n}\n\n.content>[class*='NewCard'] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    justify-items: center;\n    align-content: space-between;\n    min-height: 7vh;\n    max-height: fit-content;\n    border: 0;\n    border-radius: 25px 50px 50px 25px;\n    border-right: 21px solid #ffffff;\n    padding: 0.5rem;\n    text-align: center;\n    min-width: 150px;\n}\n.descVal {\n    display: flex;\n    overflow: hidden;\n    max-height: 51px;\n    flex-grow: 0;\n}\n[class*='NewCard']>h3 {\n    width: 100%;\n    margin: 0;\n    text-align: left;\n}\n[class*='NewCard']>button {\n    border-radius: 55px;\n    width: 4rem;\n    height:2rem;\n    border: 0;\n    font-weight: bold;\n}\n.Delete:hover {\n    background-color: black;\n    color: rgb(255, 0, 0)\n}\n\n[class*='NewCard']>button:hover {\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 1px solid white;\n    \n}\n\n\n\n.description, .priority, .date {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px dotted grey;\n  \n}\n\n.description {\n    display: flex;\n    justify-content: space-between;\n}\n\n.descTemp, .prioTemp, .dateTemp {\n    font-weight: bold;\n}\n\n.descTemp {\n    margin-right: 12px;\n}\n\n.dateVal {\n    font-weight: bold;\n    color: rgb(255, 196, 0);\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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


(function () {
  // factory function to create a new to-do object

  const createNewTodo = (title, details, dueDate, prio) => {
    const toDoTitle = title;
    const toDoDetails = details;
    const toDoDueDate = dueDate;
    const toDoPrio = prio;
    const toDoCompleted = false;
    const toDoID = 0;

    const print = () => {
      console.log(
        `Title: ${toDoTitle}, Details: ${toDoDetails}, Due Date: ${toDoDueDate}, Priority: ${toDoPrio}`
      );
    };

    return {
      toDoTitle,
      toDoDetails,
      toDoDueDate,
      toDoPrio,
      toDoCompleted,
      toDoID,
      print,
    };
  };

  //factory function for creation of new projects which are to go into projects array

  const createNewProject = (title, id) => {
    const projectTitle = title;
    const projectID = id;
    const firstOpen = true;
    // const projectFirstTask = task;

    return {
      projectTitle,
      id,
      firstOpen,
      // task,
    };
  };

  // storing objects in an array, all to do lists live within their own project
  const toDoObjects = () => {
    const array = [];

    // function toDoContainer(myItem) {
    //   array.push(myItem);
    // }

    return {
      // toDoContainer,
      array,
    };
  };

  //create a new container object for easier handling
  function createContentContainer() {
    let body = document.querySelector("body");
    let newContainer = document.createElement("div");
    newContainer.classList.add("content");
    body.appendChild(newContainer);
  }

  //dom manipulation to be done here ---------------------------------------------------------
  const domElementManipulation = () => {
    let content = document.querySelector(".content");

    const createNewDiv = (divName) => {
      let content = document.querySelector(".content");
      let newDiv = document.createElement("div");
      newDiv.classList.add(divName);
      content.appendChild(newDiv);
    };

    const createNewBtn = (targetAppend, btnTxt) => {
      let target;

      if (targetAppend == "header") {
        target = document.querySelector(targetAppend);
      } else {
        target = document.querySelector(`.${targetAppend}`);
      }

      let btn = document.createElement("button");
      btn.classList.add(`${btnTxt}`);
      if (btnTxt == "add") {
        btn.textContent = "Add a new To Do item!";
      } else if (btnTxt == "home") {
        btn.textContent = "Go back to project list!";
      } else if (btnTxt == "OpenProject") {
        btn.textContent = "Open Project";
      } else if (btnTxt == "DeleteProject") {
        btn.textContent = "Delete this project";
      } else if (btnTxt == "sortDesc") {
        btn.textContent = "Sort prio - High to Low";
      } else if (btnTxt == "sortAsc") {
        btn.textContent = "Sort prio - Low to High";
      } else if (btnTxt == "Done") {
        btn.textContent = "Mark done";
      } else {
        btn.textContent = btnTxt;
      }

      target.appendChild(btn);
    };

    // creates a div inside div with additional functionality to create a paragraph within subsequent div
    const createNewDivInsideDiv = (targetDiv, newDivClass) => {
      let target = document.querySelector(`.${targetDiv}`);
      let newDiv = document.createElement("div");
      newDiv.classList.add(newDivClass);
      target.appendChild(newDiv);
    };

    const crateNewDivInsideHeader = () => {
      let target = document.querySelector("header");
      let newDiv = document.createElement("div");
      newDiv.classList.add("actionButtons");
      target.appendChild(newDiv);
    };
    // this should create new paragraph inside div
    const createNewParaInsideDiv = (
      targetParentDiv,
      targetDiv,
      newDivClass
    ) => {
      let targetParent = document.querySelector(`.${targetParentDiv}`);
      let target = targetParent.querySelector(`.${targetDiv}`);
      let newP = document.createElement("p");
      newP.classList.add(newDivClass);
      target.appendChild(newP);
    };

    //this should create new div inside new div
    const createNewTitleInsideDiv = (targetDiv, newDivClass) => {
      let target = document.querySelector(`.${targetDiv}`);
      let newDiv = document.createElement("h3");
      newDiv.classList.add(newDivClass);
      target.appendChild(newDiv);
    };

    // creates an empty project card boilerplate
    const createProjectCardBoilerplate = (projectName) => {
      createNewDiv(projectName);

      createNewTitleInsideDiv(projectName, "projectTitle");
      createNewDivInsideDiv(projectName, "firstItem");
      createNewDivInsideDiv(projectName, "secondItem");
      createNewDivInsideDiv(projectName, "thirdItem");

      createNewBtn(projectName, "OpenProject");
      createNewBtn(projectName, "DeleteProject");
    };

    // remove project button
    const removeProjectCard = (targetCard, sourceObject) => {
      let btn = targetCard.querySelector(".DeleteProject");
      let content = document.querySelector(".content");

      btn.addEventListener("click", (e) => {
        if (
          confirm(
            "Are you sure you want to delete this project and ALL of the To Do items within?"
          ) === true
        ) {
          let child = btn.closest("div");
          content.removeChild(child);

          toDoMap.delete(sourceObject.id);
          setToDoStorage();

          projectContainer.array.splice(
            projectContainer.array.indexOf(sourceObject),
            1
          );
          setContainer();
        } else {
          return;
        }
      });
    };

    // open project button
    const openProjectCard = (targetCard, sourceObject) => {
      let openProjCard = targetCard.querySelector(".OpenProject");

      openProjCard.addEventListener("click", () => {
        delCont();
        // alert(sourceObject.id);
        // alert(sourceObject.firstOpen);
        let projectTitle =
          targetCard.querySelector(".projectTitle").textContent;

        if (toDoMap.has(sourceObject.id) === false) {
          // alert("nothing mapped yet");
          toDoMap.set(sourceObject.id);

          let container = toDoObjects();
          renderToDoPage(sourceObject.id, container, projectTitle);
        } else {
          renderToDoPage(
            sourceObject.id,
            toDoMap.get(sourceObject.id),
            projectTitle
          );
        }

        return;
      });
    };

    // append project card
    // if statement displays up to 3 of the projects in the card - top 3 projects relative to the page
    const appendProjectCard = (targetCard, sourceObject, sourceContainer) => {
      let target = document.querySelector(`.${targetCard}`);
      let projectTitle = target.querySelector(".projectTitle");
      let firstItem = target.querySelector(".firstItem");
      let secondItem = target.querySelector(".secondItem");
      let thirdItem = target.querySelector(".thirdItem");
      projectTitle.textContent = sourceObject.projectTitle;

      if (
        toDoMap.has(sourceObject.id) &&
        toDoMap.get(sourceObject.id).array.length > 2
      ) {
        firstItem.textContent =
          toDoMap.get(sourceObject.id).array[0].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[0].toDoDueDate;
        secondItem.textContent =
          toDoMap.get(sourceObject.id).array[1].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[1].toDoDueDate;
        thirdItem.textContent =
          toDoMap.get(sourceObject.id).array[2].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[2].toDoDueDate;
      } else if (
        toDoMap.has(sourceObject.id) &&
        toDoMap.get(sourceObject.id).array.length > 1
      ) {
        firstItem.textContent =
          toDoMap.get(sourceObject.id).array[0].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[0].toDoDueDate;
        secondItem.textContent =
          toDoMap.get(sourceObject.id).array[1].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[1].toDoDueDate;
      } else if (
        toDoMap.has(sourceObject.id) &&
        toDoMap.get(sourceObject.id).array.length > 0
      ) {
        firstItem.textContent =
          toDoMap.get(sourceObject.id).array[0].toDoTitle +
          " - " +
          toDoMap.get(sourceObject.id).array[0].toDoDueDate;
      } else {
        firstItem.textContent = "No To Do tasks added yet!";
      }

      openProjectCard(target, sourceObject);
      removeProjectCard(target, sourceObject);
    };

    // creates an empty boilerplate card to be filled with user values
    const createCardBoilerplate = (toDoName) => {
      createNewTitleInsideDiv(toDoName, "title");

      createNewDivInsideDiv(toDoName, "description");
      createNewParaInsideDiv(toDoName, "description", "descTemp");
      createNewParaInsideDiv(toDoName, "description", "descVal");

      createNewDivInsideDiv(toDoName, "priority");
      createNewParaInsideDiv(toDoName, "priority", "prioTemp");
      createNewParaInsideDiv(toDoName, "priority", "prioVal");

      createNewDivInsideDiv(toDoName, "date");
      createNewParaInsideDiv(toDoName, "date", "dateTemp");
      createNewParaInsideDiv(toDoName, "date", "dateVal");

      createNewBtn(toDoName, "Done");
      createNewBtn(toDoName, "Delete");
      createNewBtn(toDoName, "Edit");
      createNewBtn(toDoName, "Save");
    };
    // creates new to-do card using data from stored object within the container.array array
    const appendCardFromArray = (targetCard, sourceObject, container) => {
      let target = document.querySelector(`.${targetCard}`);
      let title = target.querySelector(".title");
      let desc = target.querySelector(".description");
      let prio = target.querySelector(".priority");
      let date = target.querySelector(".date");
      let dateTitle = date.querySelector(".dateTemp");
      let dateCont = date.querySelector(".dateVal");
      let descTitle = desc.querySelector(".descTemp");
      let descCont = desc.querySelector(".descVal");
      let prioTitle = prio.querySelector(".prioTemp");
      let prioCont = prio.querySelector(".prioVal");

      title.textContent = sourceObject.toDoTitle;

      descTitle.textContent = "Details: ";
      descCont.textContent = sourceObject.toDoDetails;

      prioTitle.textContent = "Priority: ";
      prioCont.textContent = sourceObject.toDoPrio;

      dateTitle.textContent = "Due date: ";
      dateCont.textContent = sourceObject.toDoDueDate;

      removeCard(target, sourceObject, container);
      taskStatus(target, sourceObject, container);
      editToDo(target, sourceObject);
      saveToDo(target, sourceObject, container);

      // check for completed status, change background if completed
      if (sourceObject.toDoCompleted === true) {
        target.style.borderRightColor = "#A4FF9C";
        let title = target.querySelector("h3");
        title.textContent = `${sourceObject.toDoTitle}`;
        title.textContent = `Task \"${title.textContent}\" completed!`;
      } else {
        changeColor(sourceObject, target);
        let title = target.querySelector("h3");
        title.textContent = `${sourceObject.toDoTitle}`;
      }
    };

    //function for changing background colour
    // set colour of background depending on priority
    const changeColor = (sourceObject, target) => {
      if (sourceObject.toDoPrio === "HIGH") {
        target.style.borderRightColor = "#FF9A52";
      } else if (sourceObject.toDoPrio === "MED") {
        // edit visibility for this shit if when toggled
        target.style.borderRightColor = "#FFF766";
      } else if (sourceObject.toDoPrio === "LOW") {
        target.style.borderRightColor = "#82C9FF";
      }
    };
    // removes click target from visible card (deletes dom object) and from array
    const removeCard = (target, sourceObject, container) => {
      let content = document.querySelector(".content");
      let btn = target.querySelector(".Delete");
      btn.addEventListener("click", (e) => {
        if (
          confirm("Are you sure you want to delete this to do list?") === true
        ) {
          let child = btn.closest("div");
          content.removeChild(child);
          container.array.splice(container.array.indexOf(sourceObject), 1);
          toDoMap.set(sourceObject.id, container);
          setToDoStorage();
        } else {
          return;
        }
      });
    };
    // enables task status toggle on card and within array
    const taskStatus = (target, sourceObject, container) => {
      let btn = target.querySelector(".Done");
      btn.addEventListener("click", (e) => {
        if (sourceObject.toDoCompleted === true) {
          sourceObject.toDoCompleted = false;

          toDoMap.set(sourceObject.id, container);
          setToDoStorage();
          let parent = btn.closest("div");
          changeColor(sourceObject, target);
          let title = parent.querySelector("h3");
          title.textContent = `${sourceObject.toDoTitle}`;
          
          btn.textContent = "Toggle done";
        } else {
          sourceObject.toDoCompleted = true;
          toDoMap.set(sourceObject.id, container);

          setToDoStorage();
          let parent = btn.closest("div");
          parent.style.borderRightColor = "#A4FF9C";
          let title = parent.querySelector("h3");
          title.textContent = `${sourceObject.toDoTitle}`;
          title.textContent = `Task \"${title.textContent}\" completed!`;
          btn.textContent = "Toggle done";
        }
      });
    };

    // edit buttons lets you edit stuff on the card
    const editToDo = (target) => {
      let btn = target.querySelector(".Edit");
      btn.addEventListener("click", (e) => {
        let parent = btn.closest("div");
        let descVal = parent.querySelector(".descVal");
        let titleVal = parent.querySelector(".title");
        descVal.contentEditable = true;
        titleVal.contentEditable = true;
        descVal.style.backgroundColor = "#dddbdb";
        titleVal.style.backgroundColor = "#dddbdb";
      });
    };

    // save edit
    const saveToDo = (target, sourceObject, container) => {
      let btn = target.querySelector(".Save");
      btn.addEventListener("click", (e) => {
        let parent = btn.closest("div");
        let descVal = parent.querySelector(".descVal");
        let titleVal = parent.querySelector(".title");
        descVal.contentEditable = false;
        titleVal.contentEditable = false;
        sourceObject.toDoDetails = descVal.textContent;
        sourceObject.toDoTitle = titleVal.textContent;
        descVal.style.backgroundColor = "#FFFFFF";
        titleVal.style.backgroundColor = "#FFFFFF";
        toDoMap.set(sourceObject.id, container);
        setToDoStorage();
      });
    };

    // toggle form visibility - form is invisible with height 0 by default
    const toggleFormVisibility = () => {
      let form = document.querySelector("form");
      let addBtn = document.querySelector(".add");

      addBtn.addEventListener("click", () => {
        if (form.style.visibility === "visible") {
          form.style.visibility = "hidden";
          form.style.height = "0";
          addBtn.textContent = "Add a new To Do item!";
        } else {
          form.style.visibility = "visible";
          form.style.height = "100%";
          addBtn.textContent = "Click to hide form!";
        }
      });
    };

    // changes page title
    const changeTitle = (newTitle) => {
      let title = document.querySelector("h1");
      title.textContent = newTitle;
    };

    const changeTitleToDoPage = (newTitle, projectTitle) => {
      let title = document.querySelector("h1");
      title.textContent = newTitle + ' for project: "' + projectTitle + '"';
    };

    // this will delete all cards in container
    const clearCards = () => {
      let body = document.querySelector("body");
      let child = document.querySelector(".content");
      body.removeChild(child);
      createContentContainer();
    };

    // this function renders all cards from the container array
    // in the future i need to add functionality for switching between arrays otherwise only first project will work correctly.

    const renderToDoCards = (container) => {
      // alert(container.array.length + "The length of the container array is this");
      clearCards();
      let noOfCards = container.array.length;

      let renderCounter = 0;

      for (let i = 0; i < noOfCards; i++) {
        createNewDiv(`NewCard${i}`);
        goDom.createCardBoilerplate(`NewCard${i}`);
        goDom.appendCardFromArray(`NewCard${i}`, container.array[i], container);
        renderCounter++;
      }
    };

    const renderProjectCards = () => {
      let noOfProjects = projectContainer.array.length;

      let projectRenderCounter = 0;

      for (let i = 0; i < noOfProjects; i++) {
        goDom.createProjectCardBoilerplate(`NewProj${projectRenderCounter}`);
        goDom.appendProjectCard(
          `NewProj${projectRenderCounter}`,
          projectContainer.array[i],
          projectContainer
        );
        projectRenderCounter++;
      }
    };

    const submitFormButtonAction = (container, sourceObjectID) => {
      let submit = document.querySelector("#submitForm");
      submit.onclick = function (event) {
        event.preventDefault();
        formSubmit(container, sourceObjectID);
      };
    };

    const submitFormResetAction = () => {
      let reset = document.querySelector("#resetForm");
      reset.onclick = function () {
        formReset();
      };
    };

    const hideFormButtonAction = () => {
      let hideForm = document.querySelector("#hideForm");
      let form = document.querySelector("form");
      let addBtn = document.querySelector(".add");
      hideForm.onclick = function () {
        if (form.style.visibility === "visible") {
          form.style.visibility = "hidden";
          form.style.height = "0";
          addBtn.textContent = "Add a new To Do item!";
        } else {
          form.style.visibility = "visible";
          form.style.height = "100%";
          addBtn.textContent = "Click to hide form!";
        }
      };
    };
    // handles button clicks for going back home form in ascending order
    const goBackHome = (sourceObjectID, container) => {
      let home = document.querySelector(".home");
      home.addEventListener("click", () => {
        backToMainMenu(sourceObjectID, container);
      });
    };
    // handles button clicks for sorting form in ascending order
    const sortAscAction = (container) => {
      let home = document.querySelector(".sortAsc");
      home.addEventListener("click", () => {
        sortCardsAsc(container);
      });
    };
    // handles button clicks for sorting form in descending order
    const sortDescAction = (container) => {
      let home = document.querySelector(".sortDesc");
      home.addEventListener("click", () => {
        sortCardsDesc(container);
      });
    };
    // sorts card in ascending order - note that this will not save the state unless you go back
    // in case user would like to keep the cards unordered via refresh
    const sortCardsAsc = (container) => {
      let holder = [];
      for (let x of container.array) {
        if (x.toDoPrio === "LOW") {
          holder.push(x);
        }
      }

      for (let x of container.array) {
        if (x.toDoPrio === "MED") {
          holder.push(x);
        }
      }

      for (let x of container.array) {
        if (x.toDoPrio === "HIGH") {
          holder.push(x);
        }
      }
      container.array = holder;

      renderToDoCards(container);
    };
    // sorts card in descending order - note that this will not save the state unless you go back
    // in case user would like to keep the cards unordered via refresh
    const sortCardsDesc = (container) => {
      let holder = [];
      for (let x of container.array) {
        if (x.toDoPrio === "HIGH") {
          holder.push(x);
        }
      }

      for (let x of container.array) {
        if (x.toDoPrio === "MED") {
          holder.push(x);
        }
      }

      for (let x of container.array) {
        if (x.toDoPrio === "LOW") {
          holder.push(x);
        }
      }
      container.array = holder;

      renderToDoCards(container);
    };

    return {
      changeTitleToDoPage,
      hideFormButtonAction,
      goBackHome,
      submitFormResetAction,
      submitFormButtonAction,
      crateNewDivInsideHeader,
      sortAscAction,
      sortDescAction,
      renderToDoCards,
      appendProjectCard,
      renderProjectCards,
      changeTitle,
      createProjectCardBoilerplate,
      toggleFormVisibility,
      createNewBtn,
      createNewDiv,
      createNewDivInsideDiv,
      appendCardFromArray,
      createCardBoilerplate,
    };
  };

  // submit form logic
  function formSubmit(container, sourceObjectID) {
    let formToDoTitle = document.querySelector("#title");
    let formToDoDesc = document.querySelector("#taskDesc");

    let formToDoDate = document.querySelector("#taskDate");

    // converts date to EU date format
    let euDate = formToDoDate.value.split("-");
    euDate = euDate[2] + "-" + euDate[1] + "-" + euDate[0];

    let formToDoPrioLow = document.querySelector("#prioLow");
    let formToDoPrioMed = document.querySelector("#prioMed");
    let formToDoPrioHigh = document.querySelector("#prioHigh");
    let formToDoPrio;

    // checking to make sure correct form submission format is followed
    if (formToDoTitle.value == "") {
      alert("Title cannot be empty!");
      return;
    } else if (formToDoDate.value == "") {
      alert("Date cannot be empty!");
      return;
    } else if (
      +formToDoDate.value.split("-")[0] > +taskDate.max.split("-")[0]
    ) {
      alert("Due date cannot be more than 1 year in the future!");
      return;
    } else if (
      +formToDoDate.value.split("-")[0] < +taskDate.min.split("-")[0]
    ) {
      alert("Due date cannot be before today!");
      return;
    }

    // checking to make sure at least one priority is selected
    if (
      formToDoPrioLow.checked === false &&
      formToDoPrioMed.checked === false &&
      formToDoPrioHigh.checked === false
    ) {
      alert("You must select one task priority!");
      return;
    }

    // for setting priority depending on buttons pressed

    if (formToDoPrioLow.checked === true) {
      formToDoPrio = "LOW";
    } else if (formToDoPrioMed.checked === true) {
      formToDoPrio = "MED";
    } else {
      formToDoPrio = "HIGH";
    }

    let newItem = createNewTodo(
      formToDoTitle.value,
      formToDoDesc.value,
      euDate,
      formToDoPrio
    );

    container.array.push(newItem);
    goDom.renderToDoCards(container);
    toDoMap.set(sourceObjectID, container);
    setToDoStorage();
    // createNewCard(newItem, `NewCard${counter}`, container);

    formReset(
      formToDoDate,
      formToDoTitle,
      formToDoDesc,
      formToDoPrioLow,
      formToDoPrioMed,
      formToDoPrioHigh
    );

    return;
  }

  // function to create new project cards when button is pressed
  // this function needs to check for project ID ?
  const addNewProjectCard = () => {
    goDom.createNewBtn("header", "NewProject");
    let counterP = projectContainer.array.length;

    let btn = document.querySelector(".NewProject");
    btn.addEventListener("click", () => {
      let newProject = prompt("Enter the new project name");
      // if (prompt())
      if (newProject === null) {
        return;
      }

      if (newProject === "") {
        alert("You must enter a project name");
        return;
      }

      let newProjectItem = createNewProject(newProject, counterP);

      createNewProjectCard(newProjectItem, `NewProj${counterP}`);
      counterP++;
      setContainer();
    });

    return counterP;
  };

  //function for creating new project cards
  function createNewProjectCard(contItem, projName) {
    let arrLength = projectContainer.array.length;
    projectContainer.array.push(contItem);
    goDom.createProjectCardBoilerplate(projName);
    goDom.appendProjectCard(projName, projectContainer.array[arrLength]);
  }

  //function to reset form
  function formReset() {
    let formToDoTitle = document.querySelector("#title");
    let formToDoDesc = document.querySelector("#taskDesc");
    let formToDoDate = document.querySelector("#taskDate");
    let formToDoPrioLow = document.querySelector("#prioLow");
    let formToDoPrioMed = document.querySelector("#prioMed");
    let formToDoPrioHigh = document.querySelector("#prioHigh");

    formToDoDate.value = null;
    formToDoTitle.value = "";
    formToDoDesc.value = "";
    formToDoPrioLow.checked = false;
    formToDoPrioMed.checked = false;
    formToDoPrioHigh.checked = false;
  }

  // //function to delete to do content container
  function delContTd() {
    let body = document.querySelector("body");
    let child = document.querySelector(".content");
    let header = document.querySelector("header");
    let actionButtons = document.querySelector(".actionButtons");
    let form = document.querySelector("form");
    form.style.visibility = "hidden";
    form.style.height = "0";

    body.removeChild(child);
    header.removeChild(actionButtons);
  }

  // function to delete current container
  function delCont() {
    let body = document.querySelector("body");
    let child = document.querySelector(".content");
    let header = document.querySelector("header");
    let childbutton = document.querySelector(".NewProject");

    body.removeChild(child);
    header.removeChild(childbutton);
  }

  // takes back to main menu, clears pervious page
  function backToMainMenu(sourceObjectID, container) {
    let title = document.querySelector("h1");

    if (title !== "Your active projects To Do projects") {
      toDoMap.delete(sourceObjectID);
      toDoMap.set(sourceObjectID, container);

      setToDoStorage();

      delContTd();

      renderHomePage(sourceObjectID);

      return sourceObjectID.array;
    } else return;
  }

  // function set min and max current dates
  function setMinMaxDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    year = year + 1;

    if (month < 10) {
      month = "0" + `${month}`;
    }

    let maxDate = `${year}-${month}-${day}`;

    //sets max date to current date + 1 year;
    taskDate.max = maxDate;

    // sets min dat to current date
    taskDate.min = new Date().toISOString().split("T")[0];
  }

  // renders the home page  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function renderHomePage(sourceObjectID) {
    goDom.changeTitle("Your active To Do projects");
    createContentContainer();

    // goDom.createNewBtn("header", "NewProject");

    let addNewProjectCardHere = addNewProjectCard();
    addNewProjectCardHere;
    goDom.renderProjectCards();
  }

  /// renders the to do page - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function renderToDoPage(sourceObjectID, holderInput, projectTitle) {
    let container = holderInput;

    goDom.changeTitleToDoPage("To Do List", projectTitle);
    createContentContainer();

    goDom.crateNewDivInsideHeader();
    goDom.createNewBtn("actionButtons", "home");
    goDom.createNewBtn("actionButtons", "add");
    goDom.createNewBtn("actionButtons", "sortDesc");
    goDom.createNewBtn("actionButtons", "sortAsc");

    goDom.renderToDoCards(container);
    goDom.toggleFormVisibility();

    // sort Ascending prio
    goDom.sortAscAction(container);

    // sort Desc prio
    goDom.sortDescAction(container);

    // go back home
    goDom.goBackHome(sourceObjectID, container);

    // handles submission of form
    goDom.submitFormButtonAction(container, sourceObjectID);

    // handles form reset
    goDom.submitFormResetAction();

    // handles form hide - extra button for better clickability
    goDom.hideFormButtonAction();

    // set current time for today to prevent selection of dates earlier than toady
    setMinMaxDate();
  }

  // localstorage testing for presence of files

  function checkProjectStorage() {
    if (localStorage.getItem("ProjectStore") === null) {
      let testCont = toDoObjects();
      return (projectContainer = testCont);
    } else {
      let projectcontainer_serializd = localStorage.getItem("ProjectStore");
      let projectcontainer_normal = JSON.parse(projectcontainer_serializd);

      return (projectContainer = projectcontainer_normal);
    }
  }

  // // storing projectcontainer in local data

  function setContainer() {
    let projectcontainer_serializd = JSON.stringify(projectContainer);
    localStorage.setItem("ProjectStore", projectcontainer_serializd);
    // localStorage.removeItem('1');
  }

  // function to check if to do items exist
  function checkToDoStorage() {
    console.log()
    if (localStorage.myMap === undefined) {
      let testCont = new Map();
      return (toDoMap = testCont);
    } else {
      let toDoMap_normal;
      toDoMap_normal = new Map(JSON.parse(localStorage.myMap));
      return (toDoMap = toDoMap_normal);
    }
  }

  // function to save state of current to do projects
  function setToDoStorage() {
    localStorage.myMap = JSON.stringify(Array.from(toDoMap.entries()));
  }

  // for testing purposes / removing stored elements
  // localStorage.removeItem("ProjectStore");
  // localStorage.removeItem("ToDoStorage");
  // localStorage.removeItem("myMap");

  // sets variables to be used throughout the application for storing the map and project container
  let projectContainer;
  let toDoMap;

  // checking storage whether any saved values are present
  // if not present, render new values
  checkToDoStorage();
  checkProjectStorage();

  // need to include this or nothing works  - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - -
  let goDom = domElementManipulation();

  // renders home page for start of website
  renderHomePage();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFROztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsTUFBTTtBQUM3Qjs7QUFFQSxxQkFBcUIsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmFjdGlvbkJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5hY3Rpb25CdXR0b25zPmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6MnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogIDBweCAwcHggNTVweCA1NXB4OyBcbiAgIFxufVxuXG5oZWFkZXI+YnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDAuMWZyKSk7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uY29udGVudD5kaXYge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAzNSwgMzUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDE0dmg7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgd2hpdGU7XG5cbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5PcGVuUHJvamVjdCB7XG4gICB3aWR0aDogNDUlO1xuICAgaGVpZ2h0OiA3NSU7XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gXG59XG4uT3BlblByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMjU1LCAxLCAwLjM3KTtcbiAgIFxufVxuLkRlbGV0ZVByb2plY3Qge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgXG4gfVxuXG4gLkRlbGV0ZVByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUgLDM1KTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XG4gfVxuXG4gLkRlbGV0ZSwgLkRlbGV0ZVByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcbiAgICBcbiB9XG5cbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5oMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+YnV0dG9uIHtcbiAgICBtYXgtaGVpZ2h0OiAzNHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiBcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XG4gICAgXG59XG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgXG59XG5bY2xhc3MqPSdmaXJzdEl0ZW0nXSwgW2NsYXNzKj0nc2Vjb25kSXRlbSddLCBbY2xhc3MqPSd0aGlyZEl0ZW0nXSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5sYWJlbCwgbGVnZW5kIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2PmxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiB1bnNldDtcbn1cblxuW2NsYXNzPSdkYXRlU2VsZWN0J10ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuXG4jdGFza0RhdGV7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAwLjExcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuZm9ybT5pbnB1dCwgZm9ybT50ZXh0YXJlYXtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cbiNzdWJtaXRGb3JtLCAjcmVzZXRGb3JtLCAjaGlkZUZvcm17XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzowLjVlbTtcbn1cblxuaHJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaGVpZ2h0OjFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3Q2FyZCddIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDd2aDtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG4uZGVzY1ZhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDUxcHg7XG4gICAgZmxleC1ncm93OiAwO1xufVxuW2NsYXNzKj0nTmV3Q2FyZCddPmgzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OjJyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLkRlbGV0ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApXG59XG5cbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgXG59XG5cblxuXG4uZGVzY3JpcHRpb24sIC5wcmlvcml0eSwgLmRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgZ3JleTtcbiAgXG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZXNjVGVtcCwgLnByaW9UZW1wLCAuZGF0ZVRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY1RlbXAge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmRhdGVWYWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7SUFDVixtSkFBbUo7SUFDbkosWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lB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SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix1QkFBdUI7O0FBRTNCOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uYWN0aW9uQnV0dG9ucz5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAgMHB4IDBweCA1NXB4IDU1cHg7IFxcbiAgIFxcbn1cXG5cXG5oZWFkZXI+YnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMC4xZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudD5kaXYge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkIHdoaXRlO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5PcGVuUHJvamVjdCB7XFxuICAgd2lkdGg6IDQ1JTtcXG4gICBoZWlnaHQ6IDc1JTtcXG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuIFxcbn1cXG4uT3BlblByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDI1NSwgMSwgMC4zNyk7XFxuICAgXFxufVxcbi5EZWxldGVQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIFxcbiB9XFxuXFxuIC5EZWxldGVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1ICwzNSk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG4gfVxcblxcbiAuRGVsZXRlLCAuRGVsZXRlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcXG4gICAgXFxuIH1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+aDMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5idXR0b24ge1xcbiAgICBtYXgtaGVpZ2h0OiAzNHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuIFxcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+YnV0dG9uIHtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG59XFxuW2NsYXNzKj0nZmlyc3RJdGVtJ10sIFtjbGFzcyo9J3NlY29uZEl0ZW0nXSwgW2NsYXNzKj0ndGhpcmRJdGVtJ10ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5sYWJlbCwgbGVnZW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdj5sYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xcbn1cXG5cXG5bY2xhc3M9J2RhdGVTZWxlY3QnXSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4jdGFza0RhdGV7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDAuMTFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5mb3JtPmlucHV0LCBmb3JtPnRleHRhcmVhe1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4jc3VibWl0Rm9ybSwgI3Jlc2V0Rm9ybSwgI2hpZGVGb3Jte1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6MC41ZW07XFxufVxcblxcbmhye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGhlaWdodDoxcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdDYXJkJ10ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1pbi1oZWlnaHQ6IDd2aDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbn1cXG4uZGVzY1ZhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDUxcHg7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG59XFxuW2NsYXNzKj0nTmV3Q2FyZCddPmgzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuW2NsYXNzKj0nTmV3Q2FyZCddPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6MnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLkRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMClcXG59XFxuXFxuW2NsYXNzKj0nTmV3Q2FyZCddPmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgXFxufVxcblxcblxcblxcbi5kZXNjcmlwdGlvbiwgLnByaW9yaXR5LCAuZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgZ3JleTtcXG4gIFxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXNjVGVtcCwgLnByaW9UZW1wLCAuZGF0ZVRlbXAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlc2NUZW1wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZGF0ZVZhbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHRvLWRvIG9iamVjdFxuXG4gIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW8pID0+IHtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCB0b0RvRGV0YWlscyA9IGRldGFpbHM7XG4gICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGNvbnN0IHRvRG9QcmlvID0gcHJpbztcbiAgICBjb25zdCB0b0RvQ29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgdG9Eb0lEID0gMDtcblxuICAgIGNvbnN0IHByaW50ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBUaXRsZTogJHt0b0RvVGl0bGV9LCBEZXRhaWxzOiAke3RvRG9EZXRhaWxzfSwgRHVlIERhdGU6ICR7dG9Eb0R1ZURhdGV9LCBQcmlvcml0eTogJHt0b0RvUHJpb31gXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9Eb1RpdGxlLFxuICAgICAgdG9Eb0RldGFpbHMsXG4gICAgICB0b0RvRHVlRGF0ZSxcbiAgICAgIHRvRG9QcmlvLFxuICAgICAgdG9Eb0NvbXBsZXRlZCxcbiAgICAgIHRvRG9JRCxcbiAgICAgIHByaW50LFxuICAgIH07XG4gIH07XG5cbiAgLy9mYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGlvbiBvZiBuZXcgcHJvamVjdHMgd2hpY2ggYXJlIHRvIGdvIGludG8gcHJvamVjdHMgYXJyYXlcblxuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHRpdGxlLCBpZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IGlkO1xuICAgIGNvbnN0IGZpcnN0T3BlbiA9IHRydWU7XG4gICAgLy8gY29uc3QgcHJvamVjdEZpcnN0VGFzayA9IHRhc2s7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdFRpdGxlLFxuICAgICAgaWQsXG4gICAgICBmaXJzdE9wZW4sXG4gICAgICAvLyB0YXNrLFxuICAgIH07XG4gIH07XG5cbiAgLy8gc3RvcmluZyBvYmplY3RzIGluIGFuIGFycmF5LCBhbGwgdG8gZG8gbGlzdHMgbGl2ZSB3aXRoaW4gdGhlaXIgb3duIHByb2plY3RcbiAgY29uc3QgdG9Eb09iamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvRG9Db250YWluZXIobXlJdGVtKSB7XG4gICAgLy8gICBhcnJheS5wdXNoKG15SXRlbSk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHRvRG9Db250YWluZXIsXG4gICAgICBhcnJheSxcbiAgICB9O1xuICB9O1xuXG4gIC8vY3JlYXRlIGEgbmV3IGNvbnRhaW5lciBvYmplY3QgZm9yIGVhc2llciBoYW5kbGluZ1xuICBmdW5jdGlvbiBjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbiAgfVxuXG4gIC8vZG9tIG1hbmlwdWxhdGlvbiB0byBiZSBkb25lIGhlcmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRvbUVsZW1lbnRNYW5pcHVsYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjcmVhdGVOZXdEaXYgPSAoZGl2TmFtZSkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdk5hbWUpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVOZXdCdG4gPSAodGFyZ2V0QXBwZW5kLCBidG5UeHQpID0+IHtcbiAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXRBcHBlbmQgPT0gXCJoZWFkZXJcIikge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldEFwcGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRBcHBlbmR9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYCR7YnRuVHh0fWApO1xuICAgICAgaWYgKGJ0blR4dCA9PSBcImFkZFwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvIERvIGl0ZW0hXCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcImhvbWVcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkdvIGJhY2sgdG8gcHJvamVjdCBsaXN0IVwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJPcGVuUHJvamVjdFwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT3BlbiBQcm9qZWN0XCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcIkRlbGV0ZVByb2plY3RcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0aGlzIHByb2plY3RcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwic29ydERlc2NcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIlNvcnQgcHJpbyAtIEhpZ2ggdG8gTG93XCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcInNvcnRBc2NcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIlNvcnQgcHJpbyAtIExvdyB0byBIaWdoXCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcIkRvbmVcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIk1hcmsgZG9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuVHh0O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlcyBhIGRpdiBpbnNpZGUgZGl2IHdpdGggYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSBhIHBhcmFncmFwaCB3aXRoaW4gc3Vic2VxdWVudCBkaXZcbiAgICBjb25zdCBjcmVhdGVOZXdEaXZJbnNpZGVEaXYgPSAodGFyZ2V0RGl2LCBuZXdEaXZDbGFzcykgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn1gKTtcbiAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQobmV3RGl2Q2xhc3MpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyYXRlTmV3RGl2SW5zaWRlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uQnV0dG9uc1wiKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG4gICAgLy8gdGhpcyBzaG91bGQgY3JlYXRlIG5ldyBwYXJhZ3JhcGggaW5zaWRlIGRpdlxuICAgIGNvbnN0IGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYgPSAoXG4gICAgICB0YXJnZXRQYXJlbnREaXYsXG4gICAgICB0YXJnZXREaXYsXG4gICAgICBuZXdEaXZDbGFzc1xuICAgICkgPT4ge1xuICAgICAgbGV0IHRhcmdldFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldFBhcmVudERpdn1gKTtcbiAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRQYXJlbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgICAgbGV0IG5ld1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG5ld1AuY2xhc3NMaXN0LmFkZChuZXdEaXZDbGFzcyk7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3UCk7XG4gICAgfTtcblxuICAgIC8vdGhpcyBzaG91bGQgY3JlYXRlIG5ldyBkaXYgaW5zaWRlIG5ldyBkaXZcbiAgICBjb25zdCBjcmVhdGVOZXdUaXRsZUluc2lkZURpdiA9ICh0YXJnZXREaXYsIG5ld0RpdkNsYXNzKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKG5ld0RpdkNsYXNzKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGVzIGFuIGVtcHR5IHByb2plY3QgY2FyZCBib2lsZXJwbGF0ZVxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgIGNyZWF0ZU5ld0Rpdihwcm9qZWN0TmFtZSk7XG5cbiAgICAgIGNyZWF0ZU5ld1RpdGxlSW5zaWRlRGl2KHByb2plY3ROYW1lLCBcInByb2plY3RUaXRsZVwiKTtcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJmaXJzdEl0ZW1cIik7XG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYocHJvamVjdE5hbWUsIFwic2Vjb25kSXRlbVwiKTtcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJ0aGlyZEl0ZW1cIik7XG5cbiAgICAgIGNyZWF0ZU5ld0J0bihwcm9qZWN0TmFtZSwgXCJPcGVuUHJvamVjdFwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bihwcm9qZWN0TmFtZSwgXCJEZWxldGVQcm9qZWN0XCIpO1xuICAgIH07XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0Q2FyZCA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuRGVsZXRlUHJvamVjdFwiKTtcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maXJtKFxuICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdCBhbmQgQUxMIG9mIHRoZSBUbyBEbyBpdGVtcyB3aXRoaW4/XCJcbiAgICAgICAgICApID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjaGlsZCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXG4gICAgICAgICAgdG9Eb01hcC5kZWxldGUoc291cmNlT2JqZWN0LmlkKTtcbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcnJheS5zcGxpY2UoXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5LmluZGV4T2Yoc291cmNlT2JqZWN0KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldENvbnRhaW5lcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIG9wZW4gcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBvcGVuUHJvamVjdENhcmQgPSAodGFyZ2V0Q2FyZCwgc291cmNlT2JqZWN0KSA9PiB7XG4gICAgICBsZXQgb3BlblByb2pDYXJkID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLk9wZW5Qcm9qZWN0XCIpO1xuXG4gICAgICBvcGVuUHJvakNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsQ29udCgpO1xuICAgICAgICAvLyBhbGVydChzb3VyY2VPYmplY3QuaWQpO1xuICAgICAgICAvLyBhbGVydChzb3VyY2VPYmplY3QuZmlyc3RPcGVuKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9XG4gICAgICAgICAgdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgICBpZiAodG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBhbGVydChcIm5vdGhpbmcgbWFwcGVkIHlldFwiKTtcbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQpO1xuXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRvRG9PYmplY3RzKCk7XG4gICAgICAgICAgcmVuZGVyVG9Eb1BhZ2Uoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIsIHByb2plY3RUaXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyVG9Eb1BhZ2UoXG4gICAgICAgICAgICBzb3VyY2VPYmplY3QuaWQsXG4gICAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBhcHBlbmQgcHJvamVjdCBjYXJkXG4gICAgLy8gaWYgc3RhdGVtZW50IGRpc3BsYXlzIHVwIHRvIDMgb2YgdGhlIHByb2plY3RzIGluIHRoZSBjYXJkIC0gdG9wIDMgcHJvamVjdHMgcmVsYXRpdmUgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBhcHBlbmRQcm9qZWN0Q2FyZCA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QsIHNvdXJjZUNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENhcmR9YCk7XG4gICAgICBsZXQgcHJvamVjdFRpdGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgbGV0IGZpcnN0SXRlbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0SXRlbVwiKTtcbiAgICAgIGxldCBzZWNvbmRJdGVtID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kSXRlbVwiKTtcbiAgICAgIGxldCB0aGlyZEl0ZW0gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi50aGlyZEl0ZW1cIik7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QucHJvamVjdFRpdGxlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRvRG9NYXAuaGFzKHNvdXJjZU9iamVjdC5pZCkgJiZcbiAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheS5sZW5ndGggPiAyXG4gICAgICApIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvRHVlRGF0ZTtcbiAgICAgICAgc2Vjb25kSXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsxXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb0R1ZURhdGU7XG4gICAgICAgIHRoaXJkSXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsyXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMl0udG9Eb0R1ZURhdGU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0b0RvTWFwLmhhcyhzb3VyY2VPYmplY3QuaWQpICYmXG4gICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXkubGVuZ3RoID4gMVxuICAgICAgKSB7XG4gICAgICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb0R1ZURhdGU7XG4gICAgICAgIHNlY29uZEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzFdLnRvRG9EdWVEYXRlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSAmJlxuICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9EdWVEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID0gXCJObyBUbyBEbyB0YXNrcyBhZGRlZCB5ZXQhXCI7XG4gICAgICB9XG5cbiAgICAgIG9wZW5Qcm9qZWN0Q2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgICByZW1vdmVQcm9qZWN0Q2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZXMgYW4gZW1wdHkgYm9pbGVycGxhdGUgY2FyZCB0byBiZSBmaWxsZWQgd2l0aCB1c2VyIHZhbHVlc1xuICAgIGNvbnN0IGNyZWF0ZUNhcmRCb2lsZXJwbGF0ZSA9ICh0b0RvTmFtZSkgPT4ge1xuICAgICAgY3JlYXRlTmV3VGl0bGVJbnNpZGVEaXYodG9Eb05hbWUsIFwidGl0bGVcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdih0b0RvTmFtZSwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjVGVtcFwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjVmFsXCIpO1xuXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYodG9Eb05hbWUsIFwicHJpb3JpdHlcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcInByaW9yaXR5XCIsIFwicHJpb1RlbXBcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcInByaW9yaXR5XCIsIFwicHJpb1ZhbFwiKTtcblxuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHRvRG9OYW1lLCBcImRhdGVcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcImRhdGVcIiwgXCJkYXRlVGVtcFwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGF0ZVwiLCBcImRhdGVWYWxcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJEb25lXCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIkRlbGV0ZVwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJFZGl0XCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIlNhdmVcIik7XG4gICAgfTtcbiAgICAvLyBjcmVhdGVzIG5ldyB0by1kbyBjYXJkIHVzaW5nIGRhdGEgZnJvbSBzdG9yZWQgb2JqZWN0IHdpdGhpbiB0aGUgY29udGFpbmVyLmFycmF5IGFycmF5XG4gICAgY29uc3QgYXBwZW5kQ2FyZEZyb21BcnJheSA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENhcmR9YCk7XG4gICAgICBsZXQgdGl0bGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgIGxldCBkZXNjID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgICBsZXQgcHJpbyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgICAgbGV0IGRhdGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuICAgICAgbGV0IGRhdGVUaXRsZSA9IGRhdGUucXVlcnlTZWxlY3RvcihcIi5kYXRlVGVtcFwiKTtcbiAgICAgIGxldCBkYXRlQ29udCA9IGRhdGUucXVlcnlTZWxlY3RvcihcIi5kYXRlVmFsXCIpO1xuICAgICAgbGV0IGRlc2NUaXRsZSA9IGRlc2MucXVlcnlTZWxlY3RvcihcIi5kZXNjVGVtcFwiKTtcbiAgICAgIGxldCBkZXNjQ29udCA9IGRlc2MucXVlcnlTZWxlY3RvcihcIi5kZXNjVmFsXCIpO1xuICAgICAgbGV0IHByaW9UaXRsZSA9IHByaW8ucXVlcnlTZWxlY3RvcihcIi5wcmlvVGVtcFwiKTtcbiAgICAgIGxldCBwcmlvQ29udCA9IHByaW8ucXVlcnlTZWxlY3RvcihcIi5wcmlvVmFsXCIpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvVGl0bGU7XG5cbiAgICAgIGRlc2NUaXRsZS50ZXh0Q29udGVudCA9IFwiRGV0YWlsczogXCI7XG4gICAgICBkZXNjQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvRGV0YWlscztcblxuICAgICAgcHJpb1RpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgICBwcmlvQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvUHJpbztcblxuICAgICAgZGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgICBkYXRlQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvRHVlRGF0ZTtcblxuICAgICAgcmVtb3ZlQ2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKTtcbiAgICAgIHRhc2tTdGF0dXModGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcik7XG4gICAgICBlZGl0VG9Ebyh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgICBzYXZlVG9Ebyh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGNvbXBsZXRlZCBzdGF0dXMsIGNoYW5nZSBiYWNrZ3JvdW5kIGlmIGNvbXBsZXRlZFxuICAgICAgaWYgKHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjQTRGRjlDXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUYXNrIFxcXCIke3RpdGxlLnRleHRDb250ZW50fVxcXCIgY29tcGxldGVkIWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VDb2xvcihzb3VyY2VPYmplY3QsIHRhcmdldCk7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIGZvciBjaGFuZ2luZyBiYWNrZ3JvdW5kIGNvbG91clxuICAgIC8vIHNldCBjb2xvdXIgb2YgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gcHJpb3JpdHlcbiAgICBjb25zdCBjaGFuZ2VDb2xvciA9IChzb3VyY2VPYmplY3QsIHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHNvdXJjZU9iamVjdC50b0RvUHJpbyA9PT0gXCJISUdIXCIpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiNGRjlBNTJcIjtcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlT2JqZWN0LnRvRG9QcmlvID09PSBcIk1FRFwiKSB7XG4gICAgICAgIC8vIGVkaXQgdmlzaWJpbGl0eSBmb3IgdGhpcyBzaGl0IGlmIHdoZW4gdG9nZ2xlZFxuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0ZGRjc2NlwiO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2VPYmplY3QudG9Eb1ByaW8gPT09IFwiTE9XXCIpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiM4MkM5RkZcIjtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHJlbW92ZXMgY2xpY2sgdGFyZ2V0IGZyb20gdmlzaWJsZSBjYXJkIChkZWxldGVzIGRvbSBvYmplY3QpIGFuZCBmcm9tIGFycmF5XG4gICAgY29uc3QgcmVtb3ZlQ2FyZCA9ICh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5EZWxldGVcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRvIGRvIGxpc3Q/XCIpID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjaGlsZCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcnJheS5zcGxpY2UoY29udGFpbmVyLmFycmF5LmluZGV4T2Yoc291cmNlT2JqZWN0KSwgMSk7XG4gICAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIpO1xuICAgICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGVuYWJsZXMgdGFzayBzdGF0dXMgdG9nZ2xlIG9uIGNhcmQgYW5kIHdpdGhpbiBhcnJheVxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSAodGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLkRvbmVcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2VPYmplY3QudG9Eb0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG4gICAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgICAgY2hhbmdlQ29sb3Ioc291cmNlT2JqZWN0LCB0YXJnZXQpO1xuICAgICAgICAgIGxldCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICAgICAgXG4gICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJUb2dnbGUgZG9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG5cbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgICBwYXJlbnQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0E0RkY5Q1wiO1xuICAgICAgICAgIGxldCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgVGFzayBcXFwiJHt0aXRsZS50ZXh0Q29udGVudH1cXFwiIGNvbXBsZXRlZCFgO1xuICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiVG9nZ2xlIGRvbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGVkaXQgYnV0dG9ucyBsZXRzIHlvdSBlZGl0IHN0dWZmIG9uIHRoZSBjYXJkXG4gICAgY29uc3QgZWRpdFRvRG8gPSAodGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuRWRpdFwiKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICBsZXQgZGVzY1ZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NWYWxcIik7XG4gICAgICAgIGxldCB0aXRsZVZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICBkZXNjVmFsLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIHRpdGxlVmFsLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2NWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZGRkYmRiXCI7XG4gICAgICAgIHRpdGxlVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RkZGJkYlwiO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHNhdmUgZWRpdFxuICAgIGNvbnN0IHNhdmVUb0RvID0gKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5TYXZlXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgIGxldCBkZXNjVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY1ZhbFwiKTtcbiAgICAgICAgbGV0IHRpdGxlVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIGRlc2NWYWwuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIHRpdGxlVmFsLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBzb3VyY2VPYmplY3QudG9Eb0RldGFpbHMgPSBkZXNjVmFsLnRleHRDb250ZW50O1xuICAgICAgICBzb3VyY2VPYmplY3QudG9Eb1RpdGxlID0gdGl0bGVWYWwudGV4dENvbnRlbnQ7XG4gICAgICAgIGRlc2NWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRpdGxlVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG4gICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdG9nZ2xlIGZvcm0gdmlzaWJpbGl0eSAtIGZvcm0gaXMgaW52aXNpYmxlIHdpdGggaGVpZ2h0IDAgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZ2dsZUZvcm1WaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvIERvIGl0ZW0hXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkNsaWNrIHRvIGhpZGUgZm9ybSFcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGNoYW5nZXMgcGFnZSB0aXRsZVxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VUaXRsZVRvRG9QYWdlID0gKG5ld1RpdGxlLCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGUgKyAnIGZvciBwcm9qZWN0OiBcIicgKyBwcm9qZWN0VGl0bGUgKyAnXCInO1xuICAgIH07XG5cbiAgICAvLyB0aGlzIHdpbGwgZGVsZXRlIGFsbCBjYXJkcyBpbiBjb250YWluZXJcbiAgICBjb25zdCBjbGVhckNhcmRzID0gKCkgPT4ge1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICAgIH07XG5cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHJlbmRlcnMgYWxsIGNhcmRzIGZyb20gdGhlIGNvbnRhaW5lciBhcnJheVxuICAgIC8vIGluIHRoZSBmdXR1cmUgaSBuZWVkIHRvIGFkZCBmdW5jdGlvbmFsaXR5IGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBhcnJheXMgb3RoZXJ3aXNlIG9ubHkgZmlyc3QgcHJvamVjdCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuXG4gICAgY29uc3QgcmVuZGVyVG9Eb0NhcmRzID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgLy8gYWxlcnQoY29udGFpbmVyLmFycmF5Lmxlbmd0aCArIFwiVGhlIGxlbmd0aCBvZiB0aGUgY29udGFpbmVyIGFycmF5IGlzIHRoaXNcIik7XG4gICAgICBjbGVhckNhcmRzKCk7XG4gICAgICBsZXQgbm9PZkNhcmRzID0gY29udGFpbmVyLmFycmF5Lmxlbmd0aDtcblxuICAgICAgbGV0IHJlbmRlckNvdW50ZXIgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZDYXJkczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZU5ld0RpdihgTmV3Q2FyZCR7aX1gKTtcbiAgICAgICAgZ29Eb20uY3JlYXRlQ2FyZEJvaWxlcnBsYXRlKGBOZXdDYXJkJHtpfWApO1xuICAgICAgICBnb0RvbS5hcHBlbmRDYXJkRnJvbUFycmF5KGBOZXdDYXJkJHtpfWAsIGNvbnRhaW5lci5hcnJheVtpXSwgY29udGFpbmVyKTtcbiAgICAgICAgcmVuZGVyQ291bnRlcisrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0Q2FyZHMgPSAoKSA9PiB7XG4gICAgICBsZXQgbm9PZlByb2plY3RzID0gcHJvamVjdENvbnRhaW5lci5hcnJheS5sZW5ndGg7XG5cbiAgICAgIGxldCBwcm9qZWN0UmVuZGVyQ291bnRlciA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZlByb2plY3RzOyBpKyspIHtcbiAgICAgICAgZ29Eb20uY3JlYXRlUHJvamVjdENhcmRCb2lsZXJwbGF0ZShgTmV3UHJvaiR7cHJvamVjdFJlbmRlckNvdW50ZXJ9YCk7XG4gICAgICAgIGdvRG9tLmFwcGVuZFByb2plY3RDYXJkKFxuICAgICAgICAgIGBOZXdQcm9qJHtwcm9qZWN0UmVuZGVyQ291bnRlcn1gLFxuICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXJyYXlbaV0sXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0UmVuZGVyQ291bnRlcisrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtQnV0dG9uQWN0aW9uID0gKGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpID0+IHtcbiAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEZvcm1cIik7XG4gICAgICBzdWJtaXQub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtU3VibWl0KGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybVJlc2V0QWN0aW9uID0gKCkgPT4ge1xuICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldEZvcm1cIik7XG4gICAgICByZXNldC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3JtUmVzZXQoKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVGb3JtQnV0dG9uQWN0aW9uID0gKCkgPT4ge1xuICAgICAgbGV0IGhpZGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWRlRm9ybVwiKTtcbiAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG4gICAgICBoaWRlRm9ybS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZm9ybS5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIikge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUbyBEbyBpdGVtIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJDbGljayB0byBoaWRlIGZvcm0hXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIGdvaW5nIGJhY2sgaG9tZSBmb3JtIGluIGFzY2VuZGluZyBvcmRlclxuICAgIGNvbnN0IGdvQmFja0hvbWUgPSAoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGJhY2tUb01haW5NZW51KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIHNvcnRpbmcgZm9ybSBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICBjb25zdCBzb3J0QXNjQWN0aW9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRBc2NcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNvcnRDYXJkc0FzYyhjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIHNvcnRpbmcgZm9ybSBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgY29uc3Qgc29ydERlc2NBY3Rpb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydERlc2NcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNvcnRDYXJkc0Rlc2MoY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gc29ydHMgY2FyZCBpbiBhc2NlbmRpbmcgb3JkZXIgLSBub3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBzYXZlIHRoZSBzdGF0ZSB1bmxlc3MgeW91IGdvIGJhY2tcbiAgICAvLyBpbiBjYXNlIHVzZXIgd291bGQgbGlrZSB0byBrZWVwIHRoZSBjYXJkcyB1bm9yZGVyZWQgdmlhIHJlZnJlc2hcbiAgICBjb25zdCBzb3J0Q2FyZHNBc2MgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9sZGVyID0gW107XG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJMT1dcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIk1FRFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiSElHSFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcnJheSA9IGhvbGRlcjtcblxuICAgICAgcmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgfTtcbiAgICAvLyBzb3J0cyBjYXJkIGluIGRlc2NlbmRpbmcgb3JkZXIgLSBub3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBzYXZlIHRoZSBzdGF0ZSB1bmxlc3MgeW91IGdvIGJhY2tcbiAgICAvLyBpbiBjYXNlIHVzZXIgd291bGQgbGlrZSB0byBrZWVwIHRoZSBjYXJkcyB1bm9yZGVyZWQgdmlhIHJlZnJlc2hcbiAgICBjb25zdCBzb3J0Q2FyZHNEZXNjID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbGRlciA9IFtdO1xuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiSElHSFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiTUVEXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJMT1dcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXJyYXkgPSBob2xkZXI7XG5cbiAgICAgIHJlbmRlclRvRG9DYXJkcyhjb250YWluZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhbmdlVGl0bGVUb0RvUGFnZSxcbiAgICAgIGhpZGVGb3JtQnV0dG9uQWN0aW9uLFxuICAgICAgZ29CYWNrSG9tZSxcbiAgICAgIHN1Ym1pdEZvcm1SZXNldEFjdGlvbixcbiAgICAgIHN1Ym1pdEZvcm1CdXR0b25BY3Rpb24sXG4gICAgICBjcmF0ZU5ld0Rpdkluc2lkZUhlYWRlcixcbiAgICAgIHNvcnRBc2NBY3Rpb24sXG4gICAgICBzb3J0RGVzY0FjdGlvbixcbiAgICAgIHJlbmRlclRvRG9DYXJkcyxcbiAgICAgIGFwcGVuZFByb2plY3RDYXJkLFxuICAgICAgcmVuZGVyUHJvamVjdENhcmRzLFxuICAgICAgY2hhbmdlVGl0bGUsXG4gICAgICBjcmVhdGVQcm9qZWN0Q2FyZEJvaWxlcnBsYXRlLFxuICAgICAgdG9nZ2xlRm9ybVZpc2liaWxpdHksXG4gICAgICBjcmVhdGVOZXdCdG4sXG4gICAgICBjcmVhdGVOZXdEaXYsXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYsXG4gICAgICBhcHBlbmRDYXJkRnJvbUFycmF5LFxuICAgICAgY3JlYXRlQ2FyZEJvaWxlcnBsYXRlLFxuICAgIH07XG4gIH07XG5cbiAgLy8gc3VibWl0IGZvcm0gbG9naWNcbiAgZnVuY3Rpb24gZm9ybVN1Ym1pdChjb250YWluZXIsIHNvdXJjZU9iamVjdElEKSB7XG4gICAgbGV0IGZvcm1Ub0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIGxldCBmb3JtVG9Eb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjXCIpO1xuXG4gICAgbGV0IGZvcm1Ub0RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG5cbiAgICAvLyBjb252ZXJ0cyBkYXRlIHRvIEVVIGRhdGUgZm9ybWF0XG4gICAgbGV0IGV1RGF0ZSA9IGZvcm1Ub0RvRGF0ZS52YWx1ZS5zcGxpdChcIi1cIik7XG4gICAgZXVEYXRlID0gZXVEYXRlWzJdICsgXCItXCIgKyBldURhdGVbMV0gKyBcIi1cIiArIGV1RGF0ZVswXTtcblxuICAgIGxldCBmb3JtVG9Eb1ByaW9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9Mb3dcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb01lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb01lZFwiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0hpZ2hcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpbztcblxuICAgIC8vIGNoZWNraW5nIHRvIG1ha2Ugc3VyZSBjb3JyZWN0IGZvcm0gc3VibWlzc2lvbiBmb3JtYXQgaXMgZm9sbG93ZWRcbiAgICBpZiAoZm9ybVRvRG9UaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlRpdGxlIGNhbm5vdCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChmb3JtVG9Eb0RhdGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJEYXRlIGNhbm5vdCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICtmb3JtVG9Eb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpWzBdID4gK3Rhc2tEYXRlLm1heC5zcGxpdChcIi1cIilbMF1cbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiRHVlIGRhdGUgY2Fubm90IGJlIG1vcmUgdGhhbiAxIHllYXIgaW4gdGhlIGZ1dHVyZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICtmb3JtVG9Eb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpWzBdIDwgK3Rhc2tEYXRlLm1pbi5zcGxpdChcIi1cIilbMF1cbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiRHVlIGRhdGUgY2Fubm90IGJlIGJlZm9yZSB0b2RheSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBwcmlvcml0eSBpcyBzZWxlY3RlZFxuICAgIGlmIChcbiAgICAgIGZvcm1Ub0RvUHJpb0xvdy5jaGVja2VkID09PSBmYWxzZSAmJlxuICAgICAgZm9ybVRvRG9QcmlvTWVkLmNoZWNrZWQgPT09IGZhbHNlICYmXG4gICAgICBmb3JtVG9Eb1ByaW9IaWdoLmNoZWNrZWQgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBhbGVydChcIllvdSBtdXN0IHNlbGVjdCBvbmUgdGFzayBwcmlvcml0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZm9yIHNldHRpbmcgcHJpb3JpdHkgZGVwZW5kaW5nIG9uIGJ1dHRvbnMgcHJlc3NlZFxuXG4gICAgaWYgKGZvcm1Ub0RvUHJpb0xvdy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBmb3JtVG9Eb1ByaW8gPSBcIkxPV1wiO1xuICAgIH0gZWxzZSBpZiAoZm9ybVRvRG9QcmlvTWVkLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGZvcm1Ub0RvUHJpbyA9IFwiTUVEXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1Ub0RvUHJpbyA9IFwiSElHSFwiO1xuICAgIH1cblxuICAgIGxldCBuZXdJdGVtID0gY3JlYXRlTmV3VG9kbyhcbiAgICAgIGZvcm1Ub0RvVGl0bGUudmFsdWUsXG4gICAgICBmb3JtVG9Eb0Rlc2MudmFsdWUsXG4gICAgICBldURhdGUsXG4gICAgICBmb3JtVG9Eb1ByaW9cbiAgICApO1xuXG4gICAgY29udGFpbmVyLmFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgZ29Eb20ucmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG4gICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAvLyBjcmVhdGVOZXdDYXJkKG5ld0l0ZW0sIGBOZXdDYXJkJHtjb3VudGVyfWAsIGNvbnRhaW5lcik7XG5cbiAgICBmb3JtUmVzZXQoXG4gICAgICBmb3JtVG9Eb0RhdGUsXG4gICAgICBmb3JtVG9Eb1RpdGxlLFxuICAgICAgZm9ybVRvRG9EZXNjLFxuICAgICAgZm9ybVRvRG9QcmlvTG93LFxuICAgICAgZm9ybVRvRG9QcmlvTWVkLFxuICAgICAgZm9ybVRvRG9QcmlvSGlnaFxuICAgICk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3QgY2FyZHMgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuICAvLyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGNoZWNrIGZvciBwcm9qZWN0IElEID9cbiAgY29uc3QgYWRkTmV3UHJvamVjdENhcmQgPSAoKSA9PiB7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiaGVhZGVyXCIsIFwiTmV3UHJvamVjdFwiKTtcbiAgICBsZXQgY291bnRlclAgPSBwcm9qZWN0Q29udGFpbmVyLmFycmF5Lmxlbmd0aDtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk5ld1Byb2plY3RcIik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgbmV3UHJvamVjdCA9IHByb21wdChcIkVudGVyIHRoZSBuZXcgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgLy8gaWYgKHByb21wdCgpKVxuICAgICAgaWYgKG5ld1Byb2plY3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3UHJvamVjdCA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIllvdSBtdXN0IGVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdQcm9qZWN0SXRlbSA9IGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdCwgY291bnRlclApO1xuXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0Q2FyZChuZXdQcm9qZWN0SXRlbSwgYE5ld1Byb2oke2NvdW50ZXJQfWApO1xuICAgICAgY291bnRlclArKztcbiAgICAgIHNldENvbnRhaW5lcigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50ZXJQO1xuICB9O1xuXG4gIC8vZnVuY3Rpb24gZm9yIGNyZWF0aW5nIG5ldyBwcm9qZWN0IGNhcmRzXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RDYXJkKGNvbnRJdGVtLCBwcm9qTmFtZSkge1xuICAgIGxldCBhcnJMZW5ndGggPSBwcm9qZWN0Q29udGFpbmVyLmFycmF5Lmxlbmd0aDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5LnB1c2goY29udEl0ZW0pO1xuICAgIGdvRG9tLmNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUocHJvak5hbWUpO1xuICAgIGdvRG9tLmFwcGVuZFByb2plY3RDYXJkKHByb2pOYW1lLCBwcm9qZWN0Q29udGFpbmVyLmFycmF5W2Fyckxlbmd0aF0pO1xuICB9XG5cbiAgLy9mdW5jdGlvbiB0byByZXNldCBmb3JtXG4gIGZ1bmN0aW9uIGZvcm1SZXNldCgpIHtcbiAgICBsZXQgZm9ybVRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgbGV0IGZvcm1Ub0RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIik7XG4gICAgbGV0IGZvcm1Ub0RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb0xvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0xvd1wiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvTWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvTWVkXCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9IaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvSGlnaFwiKTtcblxuICAgIGZvcm1Ub0RvRGF0ZS52YWx1ZSA9IG51bGw7XG4gICAgZm9ybVRvRG9UaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybVRvRG9EZXNjLnZhbHVlID0gXCJcIjtcbiAgICBmb3JtVG9Eb1ByaW9Mb3cuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGZvcm1Ub0RvUHJpb01lZC5jaGVja2VkID0gZmFsc2U7XG4gICAgZm9ybVRvRG9QcmlvSGlnaC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyAvL2Z1bmN0aW9uIHRvIGRlbGV0ZSB0byBkbyBjb250ZW50IGNvbnRhaW5lclxuICBmdW5jdGlvbiBkZWxDb250VGQoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGlvbkJ1dHRvbnNcIik7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoYWN0aW9uQnV0dG9ucyk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBkZWxldGUgY3VycmVudCBjb250YWluZXJcbiAgZnVuY3Rpb24gZGVsQ29udCgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBsZXQgY2hpbGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk5ld1Byb2plY3RcIik7XG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGRidXR0b24pO1xuICB9XG5cbiAgLy8gdGFrZXMgYmFjayB0byBtYWluIG1lbnUsIGNsZWFycyBwZXJ2aW91cyBwYWdlXG4gIGZ1bmN0aW9uIGJhY2tUb01haW5NZW51KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG5cbiAgICBpZiAodGl0bGUgIT09IFwiWW91ciBhY3RpdmUgcHJvamVjdHMgVG8gRG8gcHJvamVjdHNcIikge1xuICAgICAgdG9Eb01hcC5kZWxldGUoc291cmNlT2JqZWN0SUQpO1xuICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG5cbiAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG5cbiAgICAgIGRlbENvbnRUZCgpO1xuXG4gICAgICByZW5kZXJIb21lUGFnZShzb3VyY2VPYmplY3RJRCk7XG5cbiAgICAgIHJldHVybiBzb3VyY2VPYmplY3RJRC5hcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gc2V0IG1pbiBhbmQgbWF4IGN1cnJlbnQgZGF0ZXNcbiAgZnVuY3Rpb24gc2V0TWluTWF4RGF0ZSgpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgeWVhciA9IHllYXIgKyAxO1xuXG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoID0gXCIwXCIgKyBgJHttb250aH1gO1xuICAgIH1cblxuICAgIGxldCBtYXhEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblxuICAgIC8vc2V0cyBtYXggZGF0ZSB0byBjdXJyZW50IGRhdGUgKyAxIHllYXI7XG4gICAgdGFza0RhdGUubWF4ID0gbWF4RGF0ZTtcblxuICAgIC8vIHNldHMgbWluIGRhdCB0byBjdXJyZW50IGRhdGVcbiAgICB0YXNrRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9XG5cbiAgLy8gcmVuZGVycyB0aGUgaG9tZSBwYWdlICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxuICBmdW5jdGlvbiByZW5kZXJIb21lUGFnZShzb3VyY2VPYmplY3RJRCkge1xuICAgIGdvRG9tLmNoYW5nZVRpdGxlKFwiWW91ciBhY3RpdmUgVG8gRG8gcHJvamVjdHNcIik7XG4gICAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuXG4gICAgLy8gZ29Eb20uY3JlYXRlTmV3QnRuKFwiaGVhZGVyXCIsIFwiTmV3UHJvamVjdFwiKTtcblxuICAgIGxldCBhZGROZXdQcm9qZWN0Q2FyZEhlcmUgPSBhZGROZXdQcm9qZWN0Q2FyZCgpO1xuICAgIGFkZE5ld1Byb2plY3RDYXJkSGVyZTtcbiAgICBnb0RvbS5yZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgfVxuXG4gIC8vLyByZW5kZXJzIHRoZSB0byBkbyBwYWdlIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG4gIGZ1bmN0aW9uIHJlbmRlclRvRG9QYWdlKHNvdXJjZU9iamVjdElELCBob2xkZXJJbnB1dCwgcHJvamVjdFRpdGxlKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGhvbGRlcklucHV0O1xuXG4gICAgZ29Eb20uY2hhbmdlVGl0bGVUb0RvUGFnZShcIlRvIERvIExpc3RcIiwgcHJvamVjdFRpdGxlKTtcbiAgICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgICBnb0RvbS5jcmF0ZU5ld0Rpdkluc2lkZUhlYWRlcigpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJob21lXCIpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJhZGRcIik7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiYWN0aW9uQnV0dG9uc1wiLCBcInNvcnREZXNjXCIpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJzb3J0QXNjXCIpO1xuXG4gICAgZ29Eb20ucmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgZ29Eb20udG9nZ2xlRm9ybVZpc2liaWxpdHkoKTtcblxuICAgIC8vIHNvcnQgQXNjZW5kaW5nIHByaW9cbiAgICBnb0RvbS5zb3J0QXNjQWN0aW9uKGNvbnRhaW5lcik7XG5cbiAgICAvLyBzb3J0IERlc2MgcHJpb1xuICAgIGdvRG9tLnNvcnREZXNjQWN0aW9uKGNvbnRhaW5lcik7XG5cbiAgICAvLyBnbyBiYWNrIGhvbWVcbiAgICBnb0RvbS5nb0JhY2tIb21lKHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuXG4gICAgLy8gaGFuZGxlcyBzdWJtaXNzaW9uIG9mIGZvcm1cbiAgICBnb0RvbS5zdWJtaXRGb3JtQnV0dG9uQWN0aW9uKGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpO1xuXG4gICAgLy8gaGFuZGxlcyBmb3JtIHJlc2V0XG4gICAgZ29Eb20uc3VibWl0Rm9ybVJlc2V0QWN0aW9uKCk7XG5cbiAgICAvLyBoYW5kbGVzIGZvcm0gaGlkZSAtIGV4dHJhIGJ1dHRvbiBmb3IgYmV0dGVyIGNsaWNrYWJpbGl0eVxuICAgIGdvRG9tLmhpZGVGb3JtQnV0dG9uQWN0aW9uKCk7XG5cbiAgICAvLyBzZXQgY3VycmVudCB0aW1lIGZvciB0b2RheSB0byBwcmV2ZW50IHNlbGVjdGlvbiBvZiBkYXRlcyBlYXJsaWVyIHRoYW4gdG9hZHlcbiAgICBzZXRNaW5NYXhEYXRlKCk7XG4gIH1cblxuICAvLyBsb2NhbHN0b3JhZ2UgdGVzdGluZyBmb3IgcHJlc2VuY2Ugb2YgZmlsZXNcblxuICBmdW5jdGlvbiBjaGVja1Byb2plY3RTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RTdG9yZVwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHRlc3RDb250ID0gdG9Eb09iamVjdHMoKTtcbiAgICAgIHJldHVybiAocHJvamVjdENvbnRhaW5lciA9IHRlc3RDb250KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0U3RvcmVcIik7XG4gICAgICBsZXQgcHJvamVjdGNvbnRhaW5lcl9ub3JtYWwgPSBKU09OLnBhcnNlKHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkKTtcblxuICAgICAgcmV0dXJuIChwcm9qZWN0Q29udGFpbmVyID0gcHJvamVjdGNvbnRhaW5lcl9ub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC8vIHN0b3JpbmcgcHJvamVjdGNvbnRhaW5lciBpbiBsb2NhbCBkYXRhXG5cbiAgZnVuY3Rpb24gc2V0Q29udGFpbmVyKCkge1xuICAgIGxldCBwcm9qZWN0Y29udGFpbmVyX3NlcmlhbGl6ZCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RDb250YWluZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdFN0b3JlXCIsIHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnMScpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgaWYgdG8gZG8gaXRlbXMgZXhpc3RcbiAgZnVuY3Rpb24gY2hlY2tUb0RvU3RvcmFnZSgpIHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5teU1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgdGVzdENvbnQgPSBuZXcgTWFwKCk7XG4gICAgICByZXR1cm4gKHRvRG9NYXAgPSB0ZXN0Q29udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b0RvTWFwX25vcm1hbDtcbiAgICAgIHRvRG9NYXBfbm9ybWFsID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teU1hcCkpO1xuICAgICAgcmV0dXJuICh0b0RvTWFwID0gdG9Eb01hcF9ub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHNhdmUgc3RhdGUgb2YgY3VycmVudCB0byBkbyBwcm9qZWN0c1xuICBmdW5jdGlvbiBzZXRUb0RvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UubXlNYXAgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRvRG9NYXAuZW50cmllcygpKSk7XG4gIH1cblxuICAvLyBmb3IgdGVzdGluZyBwdXJwb3NlcyAvIHJlbW92aW5nIHN0b3JlZCBlbGVtZW50c1xuICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlByb2plY3RTdG9yZVwiKTtcbiAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUb0RvU3RvcmFnZVwiKTtcbiAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJteU1hcFwiKTtcblxuICAvLyBzZXRzIHZhcmlhYmxlcyB0byBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uIGZvciBzdG9yaW5nIHRoZSBtYXAgYW5kIHByb2plY3QgY29udGFpbmVyXG4gIGxldCBwcm9qZWN0Q29udGFpbmVyO1xuICBsZXQgdG9Eb01hcDtcblxuICAvLyBjaGVja2luZyBzdG9yYWdlIHdoZXRoZXIgYW55IHNhdmVkIHZhbHVlcyBhcmUgcHJlc2VudFxuICAvLyBpZiBub3QgcHJlc2VudCwgcmVuZGVyIG5ldyB2YWx1ZXNcbiAgY2hlY2tUb0RvU3RvcmFnZSgpO1xuICBjaGVja1Byb2plY3RTdG9yYWdlKCk7XG5cbiAgLy8gbmVlZCB0byBpbmNsdWRlIHRoaXMgb3Igbm90aGluZyB3b3JrcyAgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAtIC0gLSAtIC0gLSAtXG4gIGxldCBnb0RvbSA9IGRvbUVsZW1lbnRNYW5pcHVsYXRpb24oKTtcblxuICAvLyByZW5kZXJzIGhvbWUgcGFnZSBmb3Igc3RhcnQgb2Ygd2Vic2l0ZVxuICByZW5kZXJIb21lUGFnZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==