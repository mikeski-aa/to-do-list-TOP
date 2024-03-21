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
          btn.textContent = "Mark undone";
        } else {
          sourceObject.toDoCompleted = true;
          toDoMap.set(sourceObject.id, container);

          setToDoStorage();
          let parent = btn.closest("div");
          parent.style.borderRightColor = "#A4FF9C";
          let title = parent.querySelector("h3");
          title.textContent = `${sourceObject.toDoTitle}`;
          title.textContent = `Task \"${title.textContent}\" completed!`;
          btn.textContent = "Mark done";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscURBQXFELFNBQVM7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7O0FBRUEscUJBQXFCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmgxIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5hY3Rpb25CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hY3Rpb25CdXR0b25zPmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uYWN0aW9uQnV0dG9ucz5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgXG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6ICAwcHggMHB4IDU1cHggNTVweDsgXG4gICBcbn1cblxuaGVhZGVyPmJ1dHRvbntcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAwLjFmcikpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNvbnRlbnQ+ZGl2IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uT3BlblByb2plY3Qge1xuICAgd2lkdGg6IDQ1JTtcbiAgIGhlaWdodDogNzUlO1xuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuIFxufVxuLk9wZW5Qcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDI1NSwgMSwgMC4zNyk7XG4gICBcbn1cbi5EZWxldGVQcm9qZWN0IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIFxuIH1cblxuIC5EZWxldGVQcm9qZWN0OmhvdmVyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1ICwzNSk7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuIH1cblxuIC5EZWxldGUsIC5EZWxldGVQcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ1LCAwLCAwLjk4Nik7XG4gICAgXG4gfVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+aDMge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XG4gICAgbWF4LWhlaWdodDogMzRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gXG59XG5cbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5idXR0b24ge1xuICAgIFxufVxuXG4ucHJvamVjdFRpdGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxufVxuW2NsYXNzKj0nZmlyc3RJdGVtJ10sIFtjbGFzcyo9J3NlY29uZEl0ZW0nXSwgW2NsYXNzKj0ndGhpcmRJdGVtJ10ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubGFiZWwsIGxlZ2VuZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdj5sYWJlbHtcbiAgICBmb250LXdlaWdodDogdW5zZXQ7XG59XG5cbltjbGFzcz0nZGF0ZVNlbGVjdCddIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cblxuI3Rhc2tEYXRle1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMC4xMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbmZvcm0+aW5wdXQsIGZvcm0+dGV4dGFyZWF7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG4jc3VibWl0Rm9ybSwgI3Jlc2V0Rm9ybSwgI2hpZGVGb3Jte1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6MC41ZW07XG59XG5cbmhye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGhlaWdodDoxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50PltjbGFzcyo9J05ld0NhcmQnXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA3dmg7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmRlc2NWYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiA1MXB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbn1cbltjbGFzcyo9J05ld0NhcmQnXT5oMyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDoycmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5EZWxldGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKVxufVxuXG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIFxufVxuXG5cblxuLmRlc2NyaXB0aW9uLCAucHJpb3JpdHksIC5kYXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGdyZXk7XG4gIFxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGVzY1RlbXAsIC5wcmlvVGVtcCwgLmRhdGVUZW1wIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2NUZW1wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5kYXRlVmFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUpBQW1KO0lBQ25KLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhC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Z0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hY3Rpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hY3Rpb25CdXR0b25zPmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogIDBweCAwcHggNTVweCA1NXB4OyBcXG4gICBcXG59XFxuXFxuaGVhZGVyPmJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDAuMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQ+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAzNSwgMzUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogMTR2aDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XFxuICAgIGJvcmRlci1yaWdodDogMjFweCBzb2xpZCB3aGl0ZTtcXG5cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uT3BlblByb2plY3Qge1xcbiAgIHdpZHRoOiA0NSU7XFxuICAgaGVpZ2h0OiA3NSU7XFxuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiBcXG59XFxuLk9wZW5Qcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAyNTUsIDEsIDAuMzcpO1xcbiAgIFxcbn1cXG4uRGVsZXRlUHJvamVjdCB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBcXG4gfVxcblxcbiAuRGVsZXRlUHJvamVjdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSAsMzUpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxuIH1cXG5cXG4gLkRlbGV0ZSwgLkRlbGV0ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ1LCAwLCAwLjk4Nik7XFxuICAgIFxcbiB9XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+YnV0dG9uIHtcXG4gICAgbWF4LWhlaWdodDogMzRweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiBcXG59XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgXFxufVxcbltjbGFzcyo9J2ZpcnN0SXRlbSddLCBbY2xhc3MqPSdzZWNvbmRJdGVtJ10sIFtjbGFzcyo9J3RoaXJkSXRlbSddIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxubGFiZWwsIGxlZ2VuZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXY+bGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiB1bnNldDtcXG59XFxuXFxuW2NsYXNzPSdkYXRlU2VsZWN0J10ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcXG59XFxuXFxuI3Rhc2tEYXRle1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAwLjExcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZm9ybT5pbnB1dCwgZm9ybT50ZXh0YXJlYXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuI3N1Ym1pdEZvcm0sICNyZXNldEZvcm0sICNoaWRlRm9ybXtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOjAuNWVtO1xcbn1cXG5cXG5ocntcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBoZWlnaHQ6MXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3Q2FyZCddIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtaW4taGVpZ2h0OiA3dmg7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XFxuICAgIGJvcmRlci1yaWdodDogMjFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG59XFxuLmRlc2NWYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA1MXB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxufVxcbltjbGFzcyo9J05ld0NhcmQnXT5oMyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5EZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApXFxufVxcblxcbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uZGVzY3JpcHRpb24sIC5wcmlvcml0eSwgLmRhdGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGdyZXk7XFxuICBcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGVzY1RlbXAsIC5wcmlvVGVtcCwgLmRhdGVUZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjVGVtcCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLmRhdGVWYWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDE5NiwgMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyB0by1kbyBvYmplY3RcblxuICBjb25zdCBjcmVhdGVOZXdUb2RvID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvKSA9PiB7XG4gICAgY29uc3QgdG9Eb1RpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgdG9Eb0RldGFpbHMgPSBkZXRhaWxzO1xuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBjb25zdCB0b0RvUHJpbyA9IHByaW87XG4gICAgY29uc3QgdG9Eb0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHRvRG9JRCA9IDA7XG5cbiAgICBjb25zdCBwcmludCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgVGl0bGU6ICR7dG9Eb1RpdGxlfSwgRGV0YWlsczogJHt0b0RvRGV0YWlsc30sIER1ZSBEYXRlOiAke3RvRG9EdWVEYXRlfSwgUHJpb3JpdHk6ICR7dG9Eb1ByaW99YFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvRG9UaXRsZSxcbiAgICAgIHRvRG9EZXRhaWxzLFxuICAgICAgdG9Eb0R1ZURhdGUsXG4gICAgICB0b0RvUHJpbyxcbiAgICAgIHRvRG9Db21wbGV0ZWQsXG4gICAgICB0b0RvSUQsXG4gICAgICBwcmludCxcbiAgICB9O1xuICB9O1xuXG4gIC8vZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpb24gb2YgbmV3IHByb2plY3RzIHdoaWNoIGFyZSB0byBnbyBpbnRvIHByb2plY3RzIGFycmF5XG5cbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICh0aXRsZSwgaWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBpZDtcbiAgICBjb25zdCBmaXJzdE9wZW4gPSB0cnVlO1xuICAgIC8vIGNvbnN0IHByb2plY3RGaXJzdFRhc2sgPSB0YXNrO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RUaXRsZSxcbiAgICAgIGlkLFxuICAgICAgZmlyc3RPcGVuLFxuICAgICAgLy8gdGFzayxcbiAgICB9O1xuICB9O1xuXG4gIC8vIHN0b3Jpbmcgb2JqZWN0cyBpbiBhbiBhcnJheSwgYWxsIHRvIGRvIGxpc3RzIGxpdmUgd2l0aGluIHRoZWlyIG93biBwcm9qZWN0XG4gIGNvbnN0IHRvRG9PYmplY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAvLyBmdW5jdGlvbiB0b0RvQ29udGFpbmVyKG15SXRlbSkge1xuICAgIC8vICAgYXJyYXkucHVzaChteUl0ZW0pO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyB0b0RvQ29udGFpbmVyLFxuICAgICAgYXJyYXksXG4gICAgfTtcbiAgfTtcblxuICAvL2NyZWF0ZSBhIG5ldyBjb250YWluZXIgb2JqZWN0IGZvciBlYXNpZXIgaGFuZGxpbmdcbiAgZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XG4gIH1cblxuICAvL2RvbSBtYW5pcHVsYXRpb24gdG8gYmUgZG9uZSBoZXJlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBkb21FbGVtZW50TWFuaXB1bGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgY3JlYXRlTmV3RGl2ID0gKGRpdk5hbWUpID0+IHtcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChkaXZOYW1lKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTmV3QnRuID0gKHRhcmdldEFwcGVuZCwgYnRuVHh0KSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0O1xuXG4gICAgICBpZiAodGFyZ2V0QXBwZW5kID09IFwiaGVhZGVyXCIpIHtcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRBcHBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0QXBwZW5kfWApO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGAke2J0blR4dH1gKTtcbiAgICAgIGlmIChidG5UeHQgPT0gXCJhZGRcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUbyBEbyBpdGVtIVwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJob21lXCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJHbyBiYWNrIHRvIHByb2plY3QgbGlzdCFcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwiT3BlblByb2plY3RcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIk9wZW4gUHJvamVjdFwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJEZWxldGVQcm9qZWN0XCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgdGhpcyBwcm9qZWN0XCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcInNvcnREZXNjXCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJTb3J0IHByaW8gLSBIaWdoIHRvIExvd1wiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJzb3J0QXNjXCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJTb3J0IHByaW8gLSBMb3cgdG8gSGlnaFwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJEb25lXCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJNYXJrIGRvbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0blR4dDtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZXMgYSBkaXYgaW5zaWRlIGRpdiB3aXRoIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUgYSBwYXJhZ3JhcGggd2l0aGluIHN1YnNlcXVlbnQgZGl2XG4gICAgY29uc3QgY3JlYXRlTmV3RGl2SW5zaWRlRGl2ID0gKHRhcmdldERpdiwgbmV3RGl2Q2xhc3MpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXREaXZ9YCk7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKG5ld0RpdkNsYXNzKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmF0ZU5ld0Rpdkluc2lkZUhlYWRlciA9ICgpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImFjdGlvbkJ1dHRvbnNcIik7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9O1xuICAgIC8vIHRoaXMgc2hvdWxkIGNyZWF0ZSBuZXcgcGFyYWdyYXBoIGluc2lkZSBkaXZcbiAgICBjb25zdCBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2ID0gKFxuICAgICAgdGFyZ2V0UGFyZW50RGl2LFxuICAgICAgdGFyZ2V0RGl2LFxuICAgICAgbmV3RGl2Q2xhc3NcbiAgICApID0+IHtcbiAgICAgIGxldCB0YXJnZXRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRQYXJlbnREaXZ9YCk7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGFyZ2V0UGFyZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn1gKTtcbiAgICAgIGxldCBuZXdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBuZXdQLmNsYXNzTGlzdC5hZGQobmV3RGl2Q2xhc3MpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld1ApO1xuICAgIH07XG5cbiAgICAvL3RoaXMgc2hvdWxkIGNyZWF0ZSBuZXcgZGl2IGluc2lkZSBuZXcgZGl2XG4gICAgY29uc3QgY3JlYXRlTmV3VGl0bGVJbnNpZGVEaXYgPSAodGFyZ2V0RGl2LCBuZXdEaXZDbGFzcykgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn1gKTtcbiAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChuZXdEaXZDbGFzcyk7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlcyBhbiBlbXB0eSBwcm9qZWN0IGNhcmQgYm9pbGVycGxhdGVcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0Q2FyZEJvaWxlcnBsYXRlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICBjcmVhdGVOZXdEaXYocHJvamVjdE5hbWUpO1xuXG4gICAgICBjcmVhdGVOZXdUaXRsZUluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYocHJvamVjdE5hbWUsIFwiZmlyc3RJdGVtXCIpO1xuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHByb2plY3ROYW1lLCBcInNlY29uZEl0ZW1cIik7XG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYocHJvamVjdE5hbWUsIFwidGhpcmRJdGVtXCIpO1xuXG4gICAgICBjcmVhdGVOZXdCdG4ocHJvamVjdE5hbWUsIFwiT3BlblByb2plY3RcIik7XG4gICAgICBjcmVhdGVOZXdCdG4ocHJvamVjdE5hbWUsIFwiRGVsZXRlUHJvamVjdFwiKTtcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdENhcmQgPSAodGFyZ2V0Q2FyZCwgc291cmNlT2JqZWN0KSA9PiB7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLkRlbGV0ZVByb2plY3RcIik7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29uZmlybShcbiAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3QgYW5kIEFMTCBvZiB0aGUgVG8gRG8gaXRlbXMgd2l0aGluP1wiXG4gICAgICAgICAgKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuICAgICAgICAgIHRvRG9NYXAuZGVsZXRlKHNvdXJjZU9iamVjdC5pZCk7XG4gICAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcblxuICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXJyYXkuc3BsaWNlKFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcnJheS5pbmRleE9mKHNvdXJjZU9iamVjdCksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRDb250YWluZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBvcGVuIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3Qgb3BlblByb2plY3RDYXJkID0gKHRhcmdldENhcmQsIHNvdXJjZU9iamVjdCkgPT4ge1xuICAgICAgbGV0IG9wZW5Qcm9qQ2FyZCA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcihcIi5PcGVuUHJvamVjdFwiKTtcblxuICAgICAgb3BlblByb2pDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRlbENvbnQoKTtcbiAgICAgICAgLy8gYWxlcnQoc291cmNlT2JqZWN0LmlkKTtcbiAgICAgICAgLy8gYWxlcnQoc291cmNlT2JqZWN0LmZpcnN0T3Blbik7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPVxuICAgICAgICAgIHRhcmdldENhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaWYgKHRvRG9NYXAuaGFzKHNvdXJjZU9iamVjdC5pZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWxlcnQoXCJub3RoaW5nIG1hcHBlZCB5ZXRcIik7XG4gICAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkKTtcblxuICAgICAgICAgIGxldCBjb250YWluZXIgPSB0b0RvT2JqZWN0cygpO1xuICAgICAgICAgIHJlbmRlclRvRG9QYWdlKHNvdXJjZU9iamVjdC5pZCwgY29udGFpbmVyLCBwcm9qZWN0VGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlclRvRG9QYWdlKFxuICAgICAgICAgICAgc291cmNlT2JqZWN0LmlkLFxuICAgICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gYXBwZW5kIHByb2plY3QgY2FyZFxuICAgIC8vIGlmIHN0YXRlbWVudCBkaXNwbGF5cyB1cCB0byAzIG9mIHRoZSBwcm9qZWN0cyBpbiB0aGUgY2FyZCAtIHRvcCAzIHByb2plY3RzIHJlbGF0aXZlIHRvIHRoZSBwYWdlXG4gICAgY29uc3QgYXBwZW5kUHJvamVjdENhcmQgPSAodGFyZ2V0Q2FyZCwgc291cmNlT2JqZWN0LCBzb3VyY2VDb250YWluZXIpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDYXJkfWApO1xuICAgICAgbGV0IHByb2plY3RUaXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZVwiKTtcbiAgICAgIGxldCBmaXJzdEl0ZW0gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5maXJzdEl0ZW1cIik7XG4gICAgICBsZXQgc2Vjb25kSXRlbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZEl0ZW1cIik7XG4gICAgICBsZXQgdGhpcmRJdGVtID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGhpcmRJdGVtXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gc291cmNlT2JqZWN0LnByb2plY3RUaXRsZTtcblxuICAgICAgaWYgKFxuICAgICAgICB0b0RvTWFwLmhhcyhzb3VyY2VPYmplY3QuaWQpICYmXG4gICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXkubGVuZ3RoID4gMlxuICAgICAgKSB7XG4gICAgICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb0R1ZURhdGU7XG4gICAgICAgIHNlY29uZEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzFdLnRvRG9EdWVEYXRlO1xuICAgICAgICB0aGlyZEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMl0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzJdLnRvRG9EdWVEYXRlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSAmJlxuICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5Lmxlbmd0aCA+IDFcbiAgICAgICkge1xuICAgICAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9EdWVEYXRlO1xuICAgICAgICBzZWNvbmRJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzFdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsxXS50b0RvRHVlRGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRvRG9NYXAuaGFzKHNvdXJjZU9iamVjdC5pZCkgJiZcbiAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvRHVlRGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9IFwiTm8gVG8gRG8gdGFza3MgYWRkZWQgeWV0IVwiO1xuICAgICAgfVxuXG4gICAgICBvcGVuUHJvamVjdENhcmQodGFyZ2V0LCBzb3VyY2VPYmplY3QpO1xuICAgICAgcmVtb3ZlUHJvamVjdENhcmQodGFyZ2V0LCBzb3VyY2VPYmplY3QpO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGVzIGFuIGVtcHR5IGJvaWxlcnBsYXRlIGNhcmQgdG8gYmUgZmlsbGVkIHdpdGggdXNlciB2YWx1ZXNcbiAgICBjb25zdCBjcmVhdGVDYXJkQm9pbGVycGxhdGUgPSAodG9Eb05hbWUpID0+IHtcbiAgICAgIGNyZWF0ZU5ld1RpdGxlSW5zaWRlRGl2KHRvRG9OYW1lLCBcInRpdGxlXCIpO1xuXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY1RlbXBcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY1ZhbFwiKTtcblxuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHRvRG9OYW1lLCBcInByaW9yaXR5XCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJwcmlvcml0eVwiLCBcInByaW9UZW1wXCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJwcmlvcml0eVwiLCBcInByaW9WYWxcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdih0b0RvTmFtZSwgXCJkYXRlXCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJkYXRlXCIsIFwiZGF0ZVRlbXBcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcImRhdGVcIiwgXCJkYXRlVmFsXCIpO1xuXG4gICAgICBjcmVhdGVOZXdCdG4odG9Eb05hbWUsIFwiRG9uZVwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJEZWxldGVcIik7XG4gICAgICBjcmVhdGVOZXdCdG4odG9Eb05hbWUsIFwiRWRpdFwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJTYXZlXCIpO1xuICAgIH07XG4gICAgLy8gY3JlYXRlcyBuZXcgdG8tZG8gY2FyZCB1c2luZyBkYXRhIGZyb20gc3RvcmVkIG9iamVjdCB3aXRoaW4gdGhlIGNvbnRhaW5lci5hcnJheSBhcnJheVxuICAgIGNvbnN0IGFwcGVuZENhcmRGcm9tQXJyYXkgPSAodGFyZ2V0Q2FyZCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDYXJkfWApO1xuICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICBsZXQgZGVzYyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICAgICAgbGV0IHByaW8gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbiAgICAgIGxldCBkYXRlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcbiAgICAgIGxldCBkYXRlVGl0bGUgPSBkYXRlLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVRlbXBcIik7XG4gICAgICBsZXQgZGF0ZUNvbnQgPSBkYXRlLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVZhbFwiKTtcbiAgICAgIGxldCBkZXNjVGl0bGUgPSBkZXNjLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY1RlbXBcIik7XG4gICAgICBsZXQgZGVzY0NvbnQgPSBkZXNjLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY1ZhbFwiKTtcbiAgICAgIGxldCBwcmlvVGl0bGUgPSBwcmlvLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb1RlbXBcIik7XG4gICAgICBsZXQgcHJpb0NvbnQgPSBwcmlvLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb1ZhbFwiKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QudG9Eb1RpdGxlO1xuXG4gICAgICBkZXNjVGl0bGUudGV4dENvbnRlbnQgPSBcIkRldGFpbHM6IFwiO1xuICAgICAgZGVzY0NvbnQudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QudG9Eb0RldGFpbHM7XG5cbiAgICAgIHByaW9UaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgcHJpb0NvbnQudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QudG9Eb1ByaW87XG5cbiAgICAgIGRhdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6IFwiO1xuICAgICAgZGF0ZUNvbnQudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QudG9Eb0R1ZURhdGU7XG5cbiAgICAgIHJlbW92ZUNhcmQodGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcik7XG4gICAgICB0YXNrU3RhdHVzKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpO1xuICAgICAgZWRpdFRvRG8odGFyZ2V0LCBzb3VyY2VPYmplY3QpO1xuICAgICAgc2F2ZVRvRG8odGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcik7XG5cbiAgICAgIC8vIGNoZWNrIGZvciBjb21wbGV0ZWQgc3RhdHVzLCBjaGFuZ2UgYmFja2dyb3VuZCBpZiBjb21wbGV0ZWRcbiAgICAgIGlmIChzb3VyY2VPYmplY3QudG9Eb0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0E0RkY5Q1wiO1xuICAgICAgICBsZXQgdGl0bGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NvdXJjZU9iamVjdC50b0RvVGl0bGV9YDtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgVGFzayBcXFwiJHt0aXRsZS50ZXh0Q29udGVudH1cXFwiIGNvbXBsZXRlZCFgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlQ29sb3Ioc291cmNlT2JqZWN0LCB0YXJnZXQpO1xuICAgICAgICBsZXQgdGl0bGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NvdXJjZU9iamVjdC50b0RvVGl0bGV9YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9mdW5jdGlvbiBmb3IgY2hhbmdpbmcgYmFja2dyb3VuZCBjb2xvdXJcbiAgICAvLyBzZXQgY29sb3VyIG9mIGJhY2tncm91bmQgZGVwZW5kaW5nIG9uIHByaW9yaXR5XG4gICAgY29uc3QgY2hhbmdlQ29sb3IgPSAoc291cmNlT2JqZWN0LCB0YXJnZXQpID0+IHtcbiAgICAgIGlmIChzb3VyY2VPYmplY3QudG9Eb1ByaW8gPT09IFwiSElHSFwiKSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjRkY5QTUyXCI7XG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZU9iamVjdC50b0RvUHJpbyA9PT0gXCJNRURcIikge1xuICAgICAgICAvLyBlZGl0IHZpc2liaWxpdHkgZm9yIHRoaXMgc2hpdCBpZiB3aGVuIHRvZ2dsZWRcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiNGRkY3NjZcIjtcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlT2JqZWN0LnRvRG9QcmlvID09PSBcIkxPV1wiKSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjODJDOUZGXCI7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyByZW1vdmVzIGNsaWNrIHRhcmdldCBmcm9tIHZpc2libGUgY2FyZCAoZGVsZXRlcyBkb20gb2JqZWN0KSBhbmQgZnJvbSBhcnJheVxuICAgIGNvbnN0IHJlbW92ZUNhcmQgPSAodGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuRGVsZXRlXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0byBkbyBsaXN0P1wiKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICBjb250YWluZXIuYXJyYXkuc3BsaWNlKGNvbnRhaW5lci5hcnJheS5pbmRleE9mKHNvdXJjZU9iamVjdCksIDEpO1xuICAgICAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdC5pZCwgY29udGFpbmVyKTtcbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBlbmFibGVzIHRhc2sgc3RhdHVzIHRvZ2dsZSBvbiBjYXJkIGFuZCB3aXRoaW4gYXJyYXlcbiAgICBjb25zdCB0YXNrU3RhdHVzID0gKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5Eb25lXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc291cmNlT2JqZWN0LnRvRG9Db21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3VyY2VPYmplY3QudG9Eb0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIpO1xuICAgICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIGNoYW5nZUNvbG9yKHNvdXJjZU9iamVjdCwgdGFyZ2V0KTtcbiAgICAgICAgICBsZXQgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiTWFyayB1bmRvbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2VPYmplY3QudG9Eb0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIpO1xuXG4gICAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgICAgcGFyZW50LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiNBNEZGOUNcIjtcbiAgICAgICAgICBsZXQgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFRhc2sgXFxcIiR7dGl0bGUudGV4dENvbnRlbnR9XFxcIiBjb21wbGV0ZWQhYDtcbiAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIk1hcmsgZG9uZVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZWRpdCBidXR0b25zIGxldHMgeW91IGVkaXQgc3R1ZmYgb24gdGhlIGNhcmRcbiAgICBjb25zdCBlZGl0VG9EbyA9ICh0YXJnZXQpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5FZGl0XCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgIGxldCBkZXNjVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY1ZhbFwiKTtcbiAgICAgICAgbGV0IHRpdGxlVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIGRlc2NWYWwuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGl0bGVWYWwuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgZGVzY1ZhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkZGRiZGJcIjtcbiAgICAgICAgdGl0bGVWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZGRkYmRiXCI7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBlZGl0XG4gICAgY29uc3Qgc2F2ZVRvRG8gPSAodGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLlNhdmVcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgbGV0IGRlc2NWYWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjVmFsXCIpO1xuICAgICAgICBsZXQgdGl0bGVWYWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgZGVzY1ZhbC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGl0bGVWYWwuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIHNvdXJjZU9iamVjdC50b0RvRGV0YWlscyA9IGRlc2NWYWwudGV4dENvbnRlbnQ7XG4gICAgICAgIHNvdXJjZU9iamVjdC50b0RvVGl0bGUgPSB0aXRsZVZhbC50ZXh0Q29udGVudDtcbiAgICAgICAgZGVzY1ZhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGl0bGVWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdC5pZCwgY29udGFpbmVyKTtcbiAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGUgZm9ybSB2aXNpYmlsaXR5IC0gZm9ybSBpcyBpbnZpc2libGUgd2l0aCBoZWlnaHQgMCBieSBkZWZhdWx0XG4gICAgY29uc3QgdG9nZ2xlRm9ybVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgVG8gRG8gaXRlbSFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgdG8gaGlkZSBmb3JtIVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gY2hhbmdlcyBwYWdlIHRpdGxlXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZVRpdGxlVG9Eb1BhZ2UgPSAobmV3VGl0bGUsIHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuZXdUaXRsZSArICcgZm9yIHByb2plY3Q6IFwiJyArIHByb2plY3RUaXRsZSArICdcIic7XG4gICAgfTtcblxuICAgIC8vIHRoaXMgd2lsbCBkZWxldGUgYWxsIGNhcmRzIGluIGNvbnRhaW5lclxuICAgIGNvbnN0IGNsZWFyQ2FyZHMgPSAoKSA9PiB7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG4gICAgfTtcblxuICAgIC8vIHRoaXMgZnVuY3Rpb24gcmVuZGVycyBhbGwgY2FyZHMgZnJvbSB0aGUgY29udGFpbmVyIGFycmF5XG4gICAgLy8gaW4gdGhlIGZ1dHVyZSBpIG5lZWQgdG8gYWRkIGZ1bmN0aW9uYWxpdHkgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIGFycmF5cyBvdGhlcndpc2Ugb25seSBmaXJzdCBwcm9qZWN0IHdpbGwgd29yayBjb3JyZWN0bHkuXG5cbiAgICBjb25zdCByZW5kZXJUb0RvQ2FyZHMgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAvLyBhbGVydChjb250YWluZXIuYXJyYXkubGVuZ3RoICsgXCJUaGUgbGVuZ3RoIG9mIHRoZSBjb250YWluZXIgYXJyYXkgaXMgdGhpc1wiKTtcbiAgICAgIGNsZWFyQ2FyZHMoKTtcbiAgICAgIGxldCBub09mQ2FyZHMgPSBjb250YWluZXIuYXJyYXkubGVuZ3RoO1xuXG4gICAgICBsZXQgcmVuZGVyQ291bnRlciA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZkNhcmRzOyBpKyspIHtcbiAgICAgICAgY3JlYXRlTmV3RGl2KGBOZXdDYXJkJHtpfWApO1xuICAgICAgICBnb0RvbS5jcmVhdGVDYXJkQm9pbGVycGxhdGUoYE5ld0NhcmQke2l9YCk7XG4gICAgICAgIGdvRG9tLmFwcGVuZENhcmRGcm9tQXJyYXkoYE5ld0NhcmQke2l9YCwgY29udGFpbmVyLmFycmF5W2ldLCBjb250YWluZXIpO1xuICAgICAgICByZW5kZXJDb3VudGVyKys7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclByb2plY3RDYXJkcyA9ICgpID0+IHtcbiAgICAgIGxldCBub09mUHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyLmFycmF5Lmxlbmd0aDtcblxuICAgICAgbGV0IHByb2plY3RSZW5kZXJDb3VudGVyID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mUHJvamVjdHM7IGkrKykge1xuICAgICAgICBnb0RvbS5jcmVhdGVQcm9qZWN0Q2FyZEJvaWxlcnBsYXRlKGBOZXdQcm9qJHtwcm9qZWN0UmVuZGVyQ291bnRlcn1gKTtcbiAgICAgICAgZ29Eb20uYXBwZW5kUHJvamVjdENhcmQoXG4gICAgICAgICAgYE5ld1Byb2oke3Byb2plY3RSZW5kZXJDb3VudGVyfWAsXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcnJheVtpXSxcbiAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RSZW5kZXJDb3VudGVyKys7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm1CdXR0b25BY3Rpb24gPSAoY29udGFpbmVyLCBzb3VyY2VPYmplY3RJRCkgPT4ge1xuICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Rm9ybVwiKTtcbiAgICAgIHN1Ym1pdC5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm1TdWJtaXQoY29udGFpbmVyLCBzb3VyY2VPYmplY3RJRCk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtUmVzZXRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBsZXQgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0Rm9ybVwiKTtcbiAgICAgIHJlc2V0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm1SZXNldCgpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZUZvcm1CdXR0b25BY3Rpb24gPSAoKSA9PiB7XG4gICAgICBsZXQgaGlkZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZGVGb3JtXCIpO1xuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbiAgICAgIGhpZGVGb3JtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvIERvIGl0ZW0hXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkNsaWNrIHRvIGhpZGUgZm9ybSFcIjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZXMgYnV0dG9uIGNsaWNrcyBmb3IgZ29pbmcgYmFjayBob21lIGZvcm0gaW4gYXNjZW5kaW5nIG9yZGVyXG4gICAgY29uc3QgZ29CYWNrSG9tZSA9IChzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYmFja1RvTWFpbk1lbnUoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZXMgYnV0dG9uIGNsaWNrcyBmb3Igc29ydGluZyBmb3JtIGluIGFzY2VuZGluZyBvcmRlclxuICAgIGNvbnN0IHNvcnRBc2NBY3Rpb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydEFzY1wiKTtcbiAgICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc29ydENhcmRzQXNjKGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZXMgYnV0dG9uIGNsaWNrcyBmb3Igc29ydGluZyBmb3JtIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICBjb25zdCBzb3J0RGVzY0FjdGlvbiA9IChjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0RGVzY1wiKTtcbiAgICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc29ydENhcmRzRGVzYyhjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBzb3J0cyBjYXJkIGluIGFzY2VuZGluZyBvcmRlciAtIG5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IHNhdmUgdGhlIHN0YXRlIHVubGVzcyB5b3UgZ28gYmFja1xuICAgIC8vIGluIGNhc2UgdXNlciB3b3VsZCBsaWtlIHRvIGtlZXAgdGhlIGNhcmRzIHVub3JkZXJlZCB2aWEgcmVmcmVzaFxuICAgIGNvbnN0IHNvcnRDYXJkc0FzYyA9IChjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBob2xkZXIgPSBbXTtcbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIkxPV1wiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiTUVEXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJISUdIXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFycmF5ID0gaG9sZGVyO1xuXG4gICAgICByZW5kZXJUb0RvQ2FyZHMoY29udGFpbmVyKTtcbiAgICB9O1xuICAgIC8vIHNvcnRzIGNhcmQgaW4gZGVzY2VuZGluZyBvcmRlciAtIG5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IHNhdmUgdGhlIHN0YXRlIHVubGVzcyB5b3UgZ28gYmFja1xuICAgIC8vIGluIGNhc2UgdXNlciB3b3VsZCBsaWtlIHRvIGtlZXAgdGhlIGNhcmRzIHVub3JkZXJlZCB2aWEgcmVmcmVzaFxuICAgIGNvbnN0IHNvcnRDYXJkc0Rlc2MgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9sZGVyID0gW107XG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJISUdIXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJNRURcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIkxPV1wiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcnJheSA9IGhvbGRlcjtcblxuICAgICAgcmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VUaXRsZVRvRG9QYWdlLFxuICAgICAgaGlkZUZvcm1CdXR0b25BY3Rpb24sXG4gICAgICBnb0JhY2tIb21lLFxuICAgICAgc3VibWl0Rm9ybVJlc2V0QWN0aW9uLFxuICAgICAgc3VibWl0Rm9ybUJ1dHRvbkFjdGlvbixcbiAgICAgIGNyYXRlTmV3RGl2SW5zaWRlSGVhZGVyLFxuICAgICAgc29ydEFzY0FjdGlvbixcbiAgICAgIHNvcnREZXNjQWN0aW9uLFxuICAgICAgcmVuZGVyVG9Eb0NhcmRzLFxuICAgICAgYXBwZW5kUHJvamVjdENhcmQsXG4gICAgICByZW5kZXJQcm9qZWN0Q2FyZHMsXG4gICAgICBjaGFuZ2VUaXRsZSxcbiAgICAgIGNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUsXG4gICAgICB0b2dnbGVGb3JtVmlzaWJpbGl0eSxcbiAgICAgIGNyZWF0ZU5ld0J0bixcbiAgICAgIGNyZWF0ZU5ld0RpdixcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdixcbiAgICAgIGFwcGVuZENhcmRGcm9tQXJyYXksXG4gICAgICBjcmVhdGVDYXJkQm9pbGVycGxhdGUsXG4gICAgfTtcbiAgfTtcblxuICAvLyBzdWJtaXQgZm9ybSBsb2dpY1xuICBmdW5jdGlvbiBmb3JtU3VibWl0KGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpIHtcbiAgICBsZXQgZm9ybVRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgbGV0IGZvcm1Ub0RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIik7XG5cbiAgICBsZXQgZm9ybVRvRG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcblxuICAgIC8vIGNvbnZlcnRzIGRhdGUgdG8gRVUgZGF0ZSBmb3JtYXRcbiAgICBsZXQgZXVEYXRlID0gZm9ybVRvRG9EYXRlLnZhbHVlLnNwbGl0KFwiLVwiKTtcbiAgICBldURhdGUgPSBldURhdGVbMl0gKyBcIi1cIiArIGV1RGF0ZVsxXSArIFwiLVwiICsgZXVEYXRlWzBdO1xuXG4gICAgbGV0IGZvcm1Ub0RvUHJpb0xvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0xvd1wiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvTWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvTWVkXCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9IaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvSGlnaFwiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvO1xuXG4gICAgLy8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlIGNvcnJlY3QgZm9ybSBzdWJtaXNzaW9uIGZvcm1hdCBpcyBmb2xsb3dlZFxuICAgIGlmIChmb3JtVG9Eb1RpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgY2Fubm90IGJlIGVtcHR5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGZvcm1Ub0RvRGF0ZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkRhdGUgY2Fubm90IGJlIGVtcHR5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgK2Zvcm1Ub0RvRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMF0gPiArdGFza0RhdGUubWF4LnNwbGl0KFwiLVwiKVswXVxuICAgICkge1xuICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDEgeWVhciBpbiB0aGUgZnV0dXJlIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgK2Zvcm1Ub0RvRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMF0gPCArdGFza0RhdGUubWluLnNwbGl0KFwiLVwiKVswXVxuICAgICkge1xuICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBjYW5ub3QgYmUgYmVmb3JlIHRvZGF5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVja2luZyB0byBtYWtlIHN1cmUgYXQgbGVhc3Qgb25lIHByaW9yaXR5IGlzIHNlbGVjdGVkXG4gICAgaWYgKFxuICAgICAgZm9ybVRvRG9QcmlvTG93LmNoZWNrZWQgPT09IGZhbHNlICYmXG4gICAgICBmb3JtVG9Eb1ByaW9NZWQuY2hlY2tlZCA9PT0gZmFsc2UgJiZcbiAgICAgIGZvcm1Ub0RvUHJpb0hpZ2guY2hlY2tlZCA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiWW91IG11c3Qgc2VsZWN0IG9uZSB0YXNrIHByaW9yaXR5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBmb3Igc2V0dGluZyBwcmlvcml0eSBkZXBlbmRpbmcgb24gYnV0dG9ucyBwcmVzc2VkXG5cbiAgICBpZiAoZm9ybVRvRG9QcmlvTG93LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGZvcm1Ub0RvUHJpbyA9IFwiTE9XXCI7XG4gICAgfSBlbHNlIGlmIChmb3JtVG9Eb1ByaW9NZWQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybVRvRG9QcmlvID0gXCJNRURcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVRvRG9QcmlvID0gXCJISUdIXCI7XG4gICAgfVxuXG4gICAgbGV0IG5ld0l0ZW0gPSBjcmVhdGVOZXdUb2RvKFxuICAgICAgZm9ybVRvRG9UaXRsZS52YWx1ZSxcbiAgICAgIGZvcm1Ub0RvRGVzYy52YWx1ZSxcbiAgICAgIGV1RGF0ZSxcbiAgICAgIGZvcm1Ub0RvUHJpb1xuICAgICk7XG5cbiAgICBjb250YWluZXIuYXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICBnb0RvbS5yZW5kZXJUb0RvQ2FyZHMoY29udGFpbmVyKTtcbiAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKTtcbiAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgIC8vIGNyZWF0ZU5ld0NhcmQobmV3SXRlbSwgYE5ld0NhcmQke2NvdW50ZXJ9YCwgY29udGFpbmVyKTtcblxuICAgIGZvcm1SZXNldChcbiAgICAgIGZvcm1Ub0RvRGF0ZSxcbiAgICAgIGZvcm1Ub0RvVGl0bGUsXG4gICAgICBmb3JtVG9Eb0Rlc2MsXG4gICAgICBmb3JtVG9Eb1ByaW9Mb3csXG4gICAgICBmb3JtVG9Eb1ByaW9NZWQsXG4gICAgICBmb3JtVG9Eb1ByaW9IaWdoXG4gICAgKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgcHJvamVjdCBjYXJkcyB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIC8vIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gY2hlY2sgZm9yIHByb2plY3QgSUQgP1xuICBjb25zdCBhZGROZXdQcm9qZWN0Q2FyZCA9ICgpID0+IHtcbiAgICBnb0RvbS5jcmVhdGVOZXdCdG4oXCJoZWFkZXJcIiwgXCJOZXdQcm9qZWN0XCIpO1xuICAgIGxldCBjb3VudGVyUCA9IHByb2plY3RDb250YWluZXIuYXJyYXkubGVuZ3RoO1xuXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTmV3UHJvamVjdFwiKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvbXB0KFwiRW50ZXIgdGhlIG5ldyBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAvLyBpZiAocHJvbXB0KCkpXG4gICAgICBpZiAobmV3UHJvamVjdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdQcm9qZWN0ID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3QgZW50ZXIgYSBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5ld1Byb2plY3RJdGVtID0gY3JlYXRlTmV3UHJvamVjdChuZXdQcm9qZWN0LCBjb3VudGVyUCk7XG5cbiAgICAgIGNyZWF0ZU5ld1Byb2plY3RDYXJkKG5ld1Byb2plY3RJdGVtLCBgTmV3UHJvaiR7Y291bnRlclB9YCk7XG4gICAgICBjb3VudGVyUCsrO1xuICAgICAgc2V0Q29udGFpbmVyKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY291bnRlclA7XG4gIH07XG5cbiAgLy9mdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHByb2plY3QgY2FyZHNcbiAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdENhcmQoY29udEl0ZW0sIHByb2pOYW1lKSB7XG4gICAgbGV0IGFyckxlbmd0aCA9IHByb2plY3RDb250YWluZXIuYXJyYXkubGVuZ3RoO1xuICAgIHByb2plY3RDb250YWluZXIuYXJyYXkucHVzaChjb250SXRlbSk7XG4gICAgZ29Eb20uY3JlYXRlUHJvamVjdENhcmRCb2lsZXJwbGF0ZShwcm9qTmFtZSk7XG4gICAgZ29Eb20uYXBwZW5kUHJvamVjdENhcmQocHJvak5hbWUsIHByb2plY3RDb250YWluZXIuYXJyYXlbYXJyTGVuZ3RoXSk7XG4gIH1cblxuICAvL2Z1bmN0aW9uIHRvIHJlc2V0IGZvcm1cbiAgZnVuY3Rpb24gZm9ybVJlc2V0KCkge1xuICAgIGxldCBmb3JtVG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBsZXQgZm9ybVRvRG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY1wiKTtcbiAgICBsZXQgZm9ybVRvRG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvTG93XCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9NZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9NZWRcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb0hpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9IaWdoXCIpO1xuXG4gICAgZm9ybVRvRG9EYXRlLnZhbHVlID0gbnVsbDtcbiAgICBmb3JtVG9Eb1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBmb3JtVG9Eb0Rlc2MudmFsdWUgPSBcIlwiO1xuICAgIGZvcm1Ub0RvUHJpb0xvdy5jaGVja2VkID0gZmFsc2U7XG4gICAgZm9ybVRvRG9QcmlvTWVkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBmb3JtVG9Eb1ByaW9IaWdoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIC8vZnVuY3Rpb24gdG8gZGVsZXRlIHRvIGRvIGNvbnRlbnQgY29udGFpbmVyXG4gIGZ1bmN0aW9uIGRlbENvbnRUZCgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBsZXQgYWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aW9uQnV0dG9uc1wiKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChhY3Rpb25CdXR0b25zKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGRlbGV0ZSBjdXJyZW50IGNvbnRhaW5lclxuICBmdW5jdGlvbiBkZWxDb250KCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGxldCBjaGlsZGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTmV3UHJvamVjdFwiKTtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChjaGlsZGJ1dHRvbik7XG4gIH1cblxuICAvLyB0YWtlcyBiYWNrIHRvIG1haW4gbWVudSwgY2xlYXJzIHBlcnZpb3VzIHBhZ2VcbiAgZnVuY3Rpb24gYmFja1RvTWFpbk1lbnUoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcikge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcblxuICAgIGlmICh0aXRsZSAhPT0gXCJZb3VyIGFjdGl2ZSBwcm9qZWN0cyBUbyBEbyBwcm9qZWN0c1wiKSB7XG4gICAgICB0b0RvTWFwLmRlbGV0ZShzb3VyY2VPYmplY3RJRCk7XG4gICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKTtcblxuICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcblxuICAgICAgZGVsQ29udFRkKCk7XG5cbiAgICAgIHJlbmRlckhvbWVQYWdlKHNvdXJjZU9iamVjdElEKTtcblxuICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdElELmFycmF5O1xuICAgIH0gZWxzZSByZXR1cm47XG4gIH1cblxuICAvLyBmdW5jdGlvbiBzZXQgbWluIGFuZCBtYXggY3VycmVudCBkYXRlc1xuICBmdW5jdGlvbiBzZXRNaW5NYXhEYXRlKCkge1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB5ZWFyID0geWVhciArIDE7XG5cbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgbW9udGggPSBcIjBcIiArIGAke21vbnRofWA7XG4gICAgfVxuXG4gICAgbGV0IG1heERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuXG4gICAgLy9zZXRzIG1heCBkYXRlIHRvIGN1cnJlbnQgZGF0ZSArIDEgeWVhcjtcbiAgICB0YXNrRGF0ZS5tYXggPSBtYXhEYXRlO1xuXG4gICAgLy8gc2V0cyBtaW4gZGF0IHRvIGN1cnJlbnQgZGF0ZVxuICAgIHRhc2tEYXRlLm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH1cblxuICAvLyByZW5kZXJzIHRoZSBob21lIHBhZ2UgIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG4gIGZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKHNvdXJjZU9iamVjdElEKSB7XG4gICAgZ29Eb20uY2hhbmdlVGl0bGUoXCJZb3VyIGFjdGl2ZSBUbyBEbyBwcm9qZWN0c1wiKTtcbiAgICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgICAvLyBnb0RvbS5jcmVhdGVOZXdCdG4oXCJoZWFkZXJcIiwgXCJOZXdQcm9qZWN0XCIpO1xuXG4gICAgbGV0IGFkZE5ld1Byb2plY3RDYXJkSGVyZSA9IGFkZE5ld1Byb2plY3RDYXJkKCk7XG4gICAgYWRkTmV3UHJvamVjdENhcmRIZXJlO1xuICAgIGdvRG9tLnJlbmRlclByb2plY3RDYXJkcygpO1xuICB9XG5cbiAgLy8vIHJlbmRlcnMgdGhlIHRvIGRvIHBhZ2UgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cbiAgZnVuY3Rpb24gcmVuZGVyVG9Eb1BhZ2Uoc291cmNlT2JqZWN0SUQsIGhvbGRlcklucHV0LCBwcm9qZWN0VGl0bGUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gaG9sZGVySW5wdXQ7XG5cbiAgICBnb0RvbS5jaGFuZ2VUaXRsZVRvRG9QYWdlKFwiVG8gRG8gTGlzdFwiLCBwcm9qZWN0VGl0bGUpO1xuICAgIGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcblxuICAgIGdvRG9tLmNyYXRlTmV3RGl2SW5zaWRlSGVhZGVyKCk7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiYWN0aW9uQnV0dG9uc1wiLCBcImhvbWVcIik7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiYWN0aW9uQnV0dG9uc1wiLCBcImFkZFwiKTtcbiAgICBnb0RvbS5jcmVhdGVOZXdCdG4oXCJhY3Rpb25CdXR0b25zXCIsIFwic29ydERlc2NcIik7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiYWN0aW9uQnV0dG9uc1wiLCBcInNvcnRBc2NcIik7XG5cbiAgICBnb0RvbS5yZW5kZXJUb0RvQ2FyZHMoY29udGFpbmVyKTtcbiAgICBnb0RvbS50b2dnbGVGb3JtVmlzaWJpbGl0eSgpO1xuXG4gICAgLy8gc29ydCBBc2NlbmRpbmcgcHJpb1xuICAgIGdvRG9tLnNvcnRBc2NBY3Rpb24oY29udGFpbmVyKTtcblxuICAgIC8vIHNvcnQgRGVzYyBwcmlvXG4gICAgZ29Eb20uc29ydERlc2NBY3Rpb24oY29udGFpbmVyKTtcblxuICAgIC8vIGdvIGJhY2sgaG9tZVxuICAgIGdvRG9tLmdvQmFja0hvbWUoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG5cbiAgICAvLyBoYW5kbGVzIHN1Ym1pc3Npb24gb2YgZm9ybVxuICAgIGdvRG9tLnN1Ym1pdEZvcm1CdXR0b25BY3Rpb24oY29udGFpbmVyLCBzb3VyY2VPYmplY3RJRCk7XG5cbiAgICAvLyBoYW5kbGVzIGZvcm0gcmVzZXRcbiAgICBnb0RvbS5zdWJtaXRGb3JtUmVzZXRBY3Rpb24oKTtcblxuICAgIC8vIGhhbmRsZXMgZm9ybSBoaWRlIC0gZXh0cmEgYnV0dG9uIGZvciBiZXR0ZXIgY2xpY2thYmlsaXR5XG4gICAgZ29Eb20uaGlkZUZvcm1CdXR0b25BY3Rpb24oKTtcblxuICAgIC8vIHNldCBjdXJyZW50IHRpbWUgZm9yIHRvZGF5IHRvIHByZXZlbnQgc2VsZWN0aW9uIG9mIGRhdGVzIGVhcmxpZXIgdGhhbiB0b2FkeVxuICAgIHNldE1pbk1heERhdGUoKTtcbiAgfVxuXG4gIC8vIGxvY2Fsc3RvcmFnZSB0ZXN0aW5nIGZvciBwcmVzZW5jZSBvZiBmaWxlc1xuXG4gIGZ1bmN0aW9uIGNoZWNrUHJvamVjdFN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdFN0b3JlXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgdGVzdENvbnQgPSB0b0RvT2JqZWN0cygpO1xuICAgICAgcmV0dXJuIChwcm9qZWN0Q29udGFpbmVyID0gdGVzdENvbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcHJvamVjdGNvbnRhaW5lcl9zZXJpYWxpemQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RTdG9yZVwiKTtcbiAgICAgIGxldCBwcm9qZWN0Y29udGFpbmVyX25vcm1hbCA9IEpTT04ucGFyc2UocHJvamVjdGNvbnRhaW5lcl9zZXJpYWxpemQpO1xuXG4gICAgICByZXR1cm4gKHByb2plY3RDb250YWluZXIgPSBwcm9qZWN0Y29udGFpbmVyX25vcm1hbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLy8gc3RvcmluZyBwcm9qZWN0Y29udGFpbmVyIGluIGxvY2FsIGRhdGFcblxuICBmdW5jdGlvbiBzZXRDb250YWluZXIoKSB7XG4gICAgbGV0IHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbnRhaW5lcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0U3RvcmVcIiwgcHJvamVjdGNvbnRhaW5lcl9zZXJpYWxpemQpO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCcxJyk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBjaGVjayBpZiB0byBkbyBpdGVtcyBleGlzdFxuICBmdW5jdGlvbiBjaGVja1RvRG9TdG9yYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKClcbiAgICBpZiAobG9jYWxTdG9yYWdlLm15TWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB0ZXN0Q29udCA9IG5ldyBNYXAoKTtcbiAgICAgIHJldHVybiAodG9Eb01hcCA9IHRlc3RDb250KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvRG9NYXBfbm9ybWFsO1xuICAgICAgdG9Eb01hcF9ub3JtYWwgPSBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15TWFwKSk7XG4gICAgICByZXR1cm4gKHRvRG9NYXAgPSB0b0RvTWFwX25vcm1hbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc2F2ZSBzdGF0ZSBvZiBjdXJyZW50IHRvIGRvIHByb2plY3RzXG4gIGZ1bmN0aW9uIHNldFRvRG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5teU1hcCA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odG9Eb01hcC5lbnRyaWVzKCkpKTtcbiAgfVxuXG4gIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzIC8gcmVtb3Zpbmcgc3RvcmVkIGVsZW1lbnRzXG4gIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiUHJvamVjdFN0b3JlXCIpO1xuICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRvRG9TdG9yYWdlXCIpO1xuICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm15TWFwXCIpO1xuXG4gIC8vIHNldHMgdmFyaWFibGVzIHRvIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24gZm9yIHN0b3JpbmcgdGhlIG1hcCBhbmQgcHJvamVjdCBjb250YWluZXJcbiAgbGV0IHByb2plY3RDb250YWluZXI7XG4gIGxldCB0b0RvTWFwO1xuXG4gIC8vIGNoZWNraW5nIHN0b3JhZ2Ugd2hldGhlciBhbnkgc2F2ZWQgdmFsdWVzIGFyZSBwcmVzZW50XG4gIC8vIGlmIG5vdCBwcmVzZW50LCByZW5kZXIgbmV3IHZhbHVlc1xuICBjaGVja1RvRG9TdG9yYWdlKCk7XG4gIGNoZWNrUHJvamVjdFN0b3JhZ2UoKTtcblxuICAvLyBuZWVkIHRvIGluY2x1ZGUgdGhpcyBvciBub3RoaW5nIHdvcmtzICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gIC0gLSAtIC0gLSAtIC1cbiAgbGV0IGdvRG9tID0gZG9tRWxlbWVudE1hbmlwdWxhdGlvbigpO1xuXG4gIC8vIHJlbmRlcnMgaG9tZSBwYWdlIGZvciBzdGFydCBvZiB3ZWJzaXRlXG4gIHJlbmRlckhvbWVQYWdlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9