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
    max-height: 15vh;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(10, 10, 10);\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: white;\n}\n\n\nh1 {\n    margin: 0;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 1px solid white;\n}\n\n.actionButtons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n}\n\n.actionButtons>button:hover {\n    cursor: pointer;\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 0;\n}\n\n.actionButtons>button {\n    border-radius: 50px;\n    \n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap:2rem;\n    background-color: rgb(44, 44, 44);\n    width: 100vw;\n    color: white;\n    padding-bottom: 1em;\n    border: 0;\n    border-bottom: 15px;\n    border: 5px solid white;\n    border-color: white;\n    border-radius:  0px 0px 55px 55px; \n   \n}\n\nheader>button{\n    font-size: 1rem;\n    border: 0;\n    font-weight: bold;\n    border-radius: 12px;\n    border-bottom: 2px solid black;\n}\n\nbutton {\n    border: 0;\n    font-weight: bold;\n    \n}\n.content {\n    display: grid;\n    justify-content: center;\n    width: 100vw;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 0.1fr));\n    gap: 1rem;\n}\n\n.content>div {\n    height: 300px;\n    background: rgb(35, 35, 35);\n    border: 2px solid black;\n    display: grid;\n}\n\n.content>[class*='NewProj'] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: space-between;\n    min-height: 14vh;\n    max-height: 15vh;\n    border-radius: 25px 50px 50px 25px;\n    border-right: 21px solid white;\n\n    padding: 0.5rem;\n}\n\n.OpenProject {\n   width: 45%;\n   height: 75%;\n   margin-right: 10px;\n \n}\n.OpenProject:hover {\n    background-color: rgba(1, 255, 1, 0.37);\n   \n}\n.DeleteProject {\n    width: 45%;\n    height: 75%;\n    \n }\n\n .DeleteProject:hover {\n    border: 0;\n    color: rgba(255, 145, 0, 0.986);\n    background-color: rgb(35, 35 ,35);\n    outline: 1px solid white;\n }\n\n .Delete, .DeleteProject {\n    background-color: rgba(255, 145, 0, 0.986);\n    \n }\n\n.content>[class*='NewProj']>h3 {\n    margin: 0;\n    width: 100%;\n    padding-left: 15px;\n    text-align: left;\n}\n\n.content>[class*='NewProj']>button {\n    max-height: 34px;\n    padding: 0;\n    justify-items: center;\n    border-radius: 12px;\n    margin-bottom: 0.25rem;\n \n}\n\n.content>[class*='NewProj']>button {\n    \n}\n\n.projectTitle {\n    overflow: hidden;\n    \n}\n[class*='firstItem'], [class*='secondItem'], [class*='thirdItem'] {\n    overflow: hidden;\n    height: 1em;\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px solid rgb(255, 255, 255);\n    padding: 0.5em;\n}\n\nform {\n    margin-top: 1rem;\n    display: grid;\n    visibility: hidden;\n    height: 0;\n    border-radius: 55px;\n    border: 2px solid black;\n    padding: 0.5rem;\n    justify-items: center;\n    gap: 0.4rem;\n    background-color: rgb(56, 56, 56);\n    margin-bottom: 2rem;\n}\n\nlabel, legend {\n    font-weight: bold;\n}\n\ndiv>label{\n    font-weight: unset;\n}\n\n[class='dateSelect'] {\n    display: grid;\n    gap: 0.25rem;\n    font-weight: bold;\n    \n}\n\n#taskDate{\n    border-radius: 12px;\n    padding: 0.11rem;\n    border: 1px solid black;\n}\nform>input, form>textarea{\n    border-radius: 12px;\n    border: 1px solid black;\n    padding: 0.5rem;\n}\n#submitForm, #resetForm, #hideForm{\n    border: 0;\n    border-radius: 12px;\n    padding:0.5em;\n}\n\nhr{\n    width: 300px;\n    display:block;\n    height:1px;\n    border: 0;\n    border-top: 1px solid white;\n    margin: 1em 0;\n    padding: 0;\n}\n\n.content>[class*='NewCard'] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    justify-items: center;\n    align-content: space-between;\n    min-height: 7vh;\n    max-height: fit-content;\n    border: 0;\n    border-radius: 25px 50px 50px 25px;\n    border-right: 21px solid #ffffff;\n    padding: 0.5rem;\n    text-align: center;\n    min-width: 150px;\n}\n.descVal {\n    display: flex;\n    overflow: hidden;\n    max-height: 51px;\n    flex-grow: 0;\n}\n[class*='NewCard']>h3 {\n    width: 100%;\n    margin: 0;\n    text-align: left;\n}\n[class*='NewCard']>button {\n    border-radius: 55px;\n    width: 4rem;\n    height:2rem;\n    border: 0;\n    font-weight: bold;\n}\n.Delete:hover {\n    background-color: black;\n    color: rgb(255, 0, 0)\n}\n\n[class*='NewCard']>button:hover {\n    background-color: rgb(35, 35, 35);\n    color: white;\n    border: 1px solid white;\n    \n}\n\n\n\n.description, .priority, .date {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px dotted grey;\n  \n}\n\n.description {\n    display: flex;\n    justify-content: space-between;\n}\n\n.descTemp, .prioTemp, .dateTemp {\n    font-weight: bold;\n}\n\n.descTemp {\n    margin-right: 12px;\n}\n\n.dateVal {\n    font-weight: bold;\n    color: rgb(255, 196, 0);\n}"],"sourceRoot":""}]);
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

  //function to save state of current to do projects
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscURBQXFELFNBQVM7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7O0FBRUEscUJBQXFCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmgxIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5hY3Rpb25CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hY3Rpb25CdXR0b25zPmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uYWN0aW9uQnV0dG9ucz5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgXG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6ICAwcHggMHB4IDU1cHggNTVweDsgXG4gICBcbn1cblxuaGVhZGVyPmJ1dHRvbntcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAwLjFmcikpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNvbnRlbnQ+ZGl2IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIG1heC1oZWlnaHQ6IDE1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgd2hpdGU7XG5cbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5PcGVuUHJvamVjdCB7XG4gICB3aWR0aDogNDUlO1xuICAgaGVpZ2h0OiA3NSU7XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gXG59XG4uT3BlblByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMjU1LCAxLCAwLjM3KTtcbiAgIFxufVxuLkRlbGV0ZVByb2plY3Qge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgXG4gfVxuXG4gLkRlbGV0ZVByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUgLDM1KTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XG4gfVxuXG4gLkRlbGV0ZSwgLkRlbGV0ZVByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcbiAgICBcbiB9XG5cbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5oMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+YnV0dG9uIHtcbiAgICBtYXgtaGVpZ2h0OiAzNHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiBcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XG4gICAgXG59XG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgXG59XG5bY2xhc3MqPSdmaXJzdEl0ZW0nXSwgW2NsYXNzKj0nc2Vjb25kSXRlbSddLCBbY2xhc3MqPSd0aGlyZEl0ZW0nXSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5sYWJlbCwgbGVnZW5kIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2PmxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiB1bnNldDtcbn1cblxuW2NsYXNzPSdkYXRlU2VsZWN0J10ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuXG4jdGFza0RhdGV7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAwLjExcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuZm9ybT5pbnB1dCwgZm9ybT50ZXh0YXJlYXtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cbiNzdWJtaXRGb3JtLCAjcmVzZXRGb3JtLCAjaGlkZUZvcm17XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzowLjVlbTtcbn1cblxuaHJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaGVpZ2h0OjFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3Q2FyZCddIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDd2aDtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG4uZGVzY1ZhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDUxcHg7XG4gICAgZmxleC1ncm93OiAwO1xufVxuW2NsYXNzKj0nTmV3Q2FyZCddPmgzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OjJyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLkRlbGV0ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApXG59XG5cbltjbGFzcyo9J05ld0NhcmQnXT5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgXG59XG5cblxuXG4uZGVzY3JpcHRpb24sIC5wcmlvcml0eSwgLmRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgZ3JleTtcbiAgXG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZXNjVGVtcCwgLnByaW9UZW1wLCAuZGF0ZVRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY1RlbXAge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmRhdGVWYWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7SUFDVixtSkFBbUo7SUFDbkosWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lB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QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix1QkFBdUI7O0FBRTNCOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uYWN0aW9uQnV0dG9ucz5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAgMHB4IDBweCA1NXB4IDU1cHg7IFxcbiAgIFxcbn1cXG5cXG5oZWFkZXI+YnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMC4xZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudD5kaXYge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDUwcHggNTBweCAyNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgd2hpdGU7XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLk9wZW5Qcm9qZWN0IHtcXG4gICB3aWR0aDogNDUlO1xcbiAgIGhlaWdodDogNzUlO1xcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gXFxufVxcbi5PcGVuUHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMjU1LCAxLCAwLjM3KTtcXG4gICBcXG59XFxuLkRlbGV0ZVByb2plY3Qge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgXFxuIH1cXG5cXG4gLkRlbGV0ZVByb2plY3Q6aG92ZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQ1LCAwLCAwLjk4Nik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUgLDM1KTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiB9XFxuXFxuIC5EZWxldGUsIC5EZWxldGVQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xcbiAgICBcXG4gfVxcblxcbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XFxuICAgIG1heC1oZWlnaHQ6IDM0cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gXFxufVxcblxcbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5idXR0b24ge1xcbiAgICBcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG5bY2xhc3MqPSdmaXJzdEl0ZW0nXSwgW2NsYXNzKj0nc2Vjb25kSXRlbSddLCBbY2xhc3MqPSd0aGlyZEl0ZW0nXSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmxhYmVsLCBsZWdlbmQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2PmxhYmVse1xcbiAgICBmb250LXdlaWdodDogdW5zZXQ7XFxufVxcblxcbltjbGFzcz0nZGF0ZVNlbGVjdCddIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcblxcbiN0YXNrRGF0ZXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMC4xMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmZvcm0+aW5wdXQsIGZvcm0+dGV4dGFyZWF7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzdWJtaXRGb3JtLCAjcmVzZXRGb3JtLCAjaGlkZUZvcm17XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzowLjVlbTtcXG59XFxuXFxuaHJ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgaGVpZ2h0OjFweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50PltjbGFzcyo9J05ld0NhcmQnXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogN3ZoO1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDUwcHggNTBweCAyNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxufVxcbi5kZXNjVmFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogNTFweDtcXG4gICAgZmxleC1ncm93OiAwO1xcbn1cXG5bY2xhc3MqPSdOZXdDYXJkJ10+aDMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDoycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uRGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKVxcbn1cXG5cXG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmRlc2NyaXB0aW9uLCAucHJpb3JpdHksIC5kYXRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCBncmV5O1xcbiAgXFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRlc2NUZW1wLCAucHJpb1RlbXAsIC5kYXRlVGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY1RlbXAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxufVxcblxcbi5kYXRlVmFsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgdG8tZG8gb2JqZWN0XG5cbiAgY29uc3QgY3JlYXRlTmV3VG9kbyA9ICh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpbykgPT4ge1xuICAgIGNvbnN0IHRvRG9UaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IHRvRG9EZXRhaWxzID0gZGV0YWlscztcbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgY29uc3QgdG9Eb1ByaW8gPSBwcmlvO1xuICAgIGNvbnN0IHRvRG9Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCB0b0RvSUQgPSAwO1xuXG4gICAgY29uc3QgcHJpbnQgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFRpdGxlOiAke3RvRG9UaXRsZX0sIERldGFpbHM6ICR7dG9Eb0RldGFpbHN9LCBEdWUgRGF0ZTogJHt0b0RvRHVlRGF0ZX0sIFByaW9yaXR5OiAke3RvRG9QcmlvfWBcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b0RvVGl0bGUsXG4gICAgICB0b0RvRGV0YWlscyxcbiAgICAgIHRvRG9EdWVEYXRlLFxuICAgICAgdG9Eb1ByaW8sXG4gICAgICB0b0RvQ29tcGxldGVkLFxuICAgICAgdG9Eb0lELFxuICAgICAgcHJpbnQsXG4gICAgfTtcbiAgfTtcblxuICAvL2ZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW9uIG9mIG5ldyBwcm9qZWN0cyB3aGljaCBhcmUgdG8gZ28gaW50byBwcm9qZWN0cyBhcnJheVxuXG4gIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAodGl0bGUsIGlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgcHJvamVjdElEID0gaWQ7XG4gICAgY29uc3QgZmlyc3RPcGVuID0gdHJ1ZTtcbiAgICAvLyBjb25zdCBwcm9qZWN0Rmlyc3RUYXNrID0gdGFzaztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0VGl0bGUsXG4gICAgICBpZCxcbiAgICAgIGZpcnN0T3BlbixcbiAgICAgIC8vIHRhc2ssXG4gICAgfTtcbiAgfTtcblxuICAvLyBzdG9yaW5nIG9iamVjdHMgaW4gYW4gYXJyYXksIGFsbCB0byBkbyBsaXN0cyBsaXZlIHdpdGhpbiB0aGVpciBvd24gcHJvamVjdFxuICBjb25zdCB0b0RvT2JqZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgLy8gZnVuY3Rpb24gdG9Eb0NvbnRhaW5lcihteUl0ZW0pIHtcbiAgICAvLyAgIGFycmF5LnB1c2gobXlJdGVtKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gdG9Eb0NvbnRhaW5lcixcbiAgICAgIGFycmF5LFxuICAgIH07XG4gIH07XG5cbiAgLy9jcmVhdGUgYSBuZXcgY29udGFpbmVyIG9iamVjdCBmb3IgZWFzaWVyIGhhbmRsaW5nXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICB9XG5cbiAgLy9kb20gbWFuaXB1bGF0aW9uIHRvIGJlIGRvbmUgaGVyZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZG9tRWxlbWVudE1hbmlwdWxhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld0RpdiA9IChkaXZOYW1lKSA9PiB7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoZGl2TmFtZSk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld0J0biA9ICh0YXJnZXRBcHBlbmQsIGJ0blR4dCkgPT4ge1xuICAgICAgbGV0IHRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldEFwcGVuZCA9PSBcImhlYWRlclwiKSB7XG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0QXBwZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldEFwcGVuZH1gKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChgJHtidG5UeHR9YCk7XG4gICAgICBpZiAoYnRuVHh0ID09IFwiYWRkXCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgVG8gRG8gaXRlbSFcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwiaG9tZVwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiR28gYmFjayB0byBwcm9qZWN0IGxpc3QhXCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcIk9wZW5Qcm9qZWN0XCIpIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJPcGVuIFByb2plY3RcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwiRGVsZXRlUHJvamVjdFwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRoaXMgcHJvamVjdFwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJzb3J0RGVzY1wiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU29ydCBwcmlvIC0gSGlnaCB0byBMb3dcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwic29ydEFzY1wiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU29ydCBwcmlvIC0gTG93IHRvIEhpZ2hcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwiRG9uZVwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiTWFyayBkb25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBidG5UeHQ7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGVzIGEgZGl2IGluc2lkZSBkaXYgd2l0aCBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdG8gY3JlYXRlIGEgcGFyYWdyYXBoIHdpdGhpbiBzdWJzZXF1ZW50IGRpdlxuICAgIGNvbnN0IGNyZWF0ZU5ld0Rpdkluc2lkZURpdiA9ICh0YXJnZXREaXYsIG5ld0RpdkNsYXNzKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChuZXdEaXZDbGFzcyk7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JhdGVOZXdEaXZJbnNpZGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdXR0b25zXCIpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfTtcbiAgICAvLyB0aGlzIHNob3VsZCBjcmVhdGUgbmV3IHBhcmFncmFwaCBpbnNpZGUgZGl2XG4gICAgY29uc3QgY3JlYXRlTmV3UGFyYUluc2lkZURpdiA9IChcbiAgICAgIHRhcmdldFBhcmVudERpdixcbiAgICAgIHRhcmdldERpdixcbiAgICAgIG5ld0RpdkNsYXNzXG4gICAgKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0UGFyZW50RGl2fWApO1xuICAgICAgbGV0IHRhcmdldCA9IHRhcmdldFBhcmVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXREaXZ9YCk7XG4gICAgICBsZXQgbmV3UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbmV3UC5jbGFzc0xpc3QuYWRkKG5ld0RpdkNsYXNzKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdQKTtcbiAgICB9O1xuXG4gICAgLy90aGlzIHNob3VsZCBjcmVhdGUgbmV3IGRpdiBpbnNpZGUgbmV3IGRpdlxuICAgIGNvbnN0IGNyZWF0ZU5ld1RpdGxlSW5zaWRlRGl2ID0gKHRhcmdldERpdiwgbmV3RGl2Q2xhc3MpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXREaXZ9YCk7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQobmV3RGl2Q2xhc3MpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZXMgYW4gZW1wdHkgcHJvamVjdCBjYXJkIGJvaWxlcnBsYXRlXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdENhcmRCb2lsZXJwbGF0ZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgY3JlYXRlTmV3RGl2KHByb2plY3ROYW1lKTtcblxuICAgICAgY3JlYXRlTmV3VGl0bGVJbnNpZGVEaXYocHJvamVjdE5hbWUsIFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHByb2plY3ROYW1lLCBcImZpcnN0SXRlbVwiKTtcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJzZWNvbmRJdGVtXCIpO1xuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHByb2plY3ROYW1lLCBcInRoaXJkSXRlbVwiKTtcblxuICAgICAgY3JlYXRlTmV3QnRuKHByb2plY3ROYW1lLCBcIk9wZW5Qcm9qZWN0XCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHByb2plY3ROYW1lLCBcIkRlbGV0ZVByb2plY3RcIik7XG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RDYXJkID0gKHRhcmdldENhcmQsIHNvdXJjZU9iamVjdCkgPT4ge1xuICAgICAgbGV0IGJ0biA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcihcIi5EZWxldGVQcm9qZWN0XCIpO1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbmZpcm0oXG4gICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwcm9qZWN0IGFuZCBBTEwgb2YgdGhlIFRvIERvIGl0ZW1zIHdpdGhpbj9cIlxuICAgICAgICAgICkgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGNoaWxkID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cbiAgICAgICAgICB0b0RvTWFwLmRlbGV0ZShzb3VyY2VPYmplY3QuaWQpO1xuICAgICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG5cbiAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5LnNwbGljZShcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXJyYXkuaW5kZXhPZihzb3VyY2VPYmplY3QpLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0Q29udGFpbmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gb3BlbiBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IG9wZW5Qcm9qZWN0Q2FyZCA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QpID0+IHtcbiAgICAgIGxldCBvcGVuUHJvakNhcmQgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuT3BlblByb2plY3RcIik7XG5cbiAgICAgIG9wZW5Qcm9qQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWxDb250KCk7XG4gICAgICAgIC8vIGFsZXJ0KHNvdXJjZU9iamVjdC5pZCk7XG4gICAgICAgIC8vIGFsZXJ0KHNvdXJjZU9iamVjdC5maXJzdE9wZW4pO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID1cbiAgICAgICAgICB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGlmICh0b0RvTWFwLmhhcyhzb3VyY2VPYmplY3QuaWQpID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIGFsZXJ0KFwibm90aGluZyBtYXBwZWQgeWV0XCIpO1xuICAgICAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdC5pZCk7XG5cbiAgICAgICAgICBsZXQgY29udGFpbmVyID0gdG9Eb09iamVjdHMoKTtcbiAgICAgICAgICByZW5kZXJUb0RvUGFnZShzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lciwgcHJvamVjdFRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW5kZXJUb0RvUGFnZShcbiAgICAgICAgICAgIHNvdXJjZU9iamVjdC5pZCxcbiAgICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCksXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGFwcGVuZCBwcm9qZWN0IGNhcmRcbiAgICAvLyBpZiBzdGF0ZW1lbnQgZGlzcGxheXMgdXAgdG8gMyBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGNhcmQgLSB0b3AgMyBwcm9qZWN0cyByZWxhdGl2ZSB0byB0aGUgcGFnZVxuICAgIGNvbnN0IGFwcGVuZFByb2plY3RDYXJkID0gKHRhcmdldENhcmQsIHNvdXJjZU9iamVjdCwgc291cmNlQ29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2FyZH1gKTtcbiAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVcIik7XG4gICAgICBsZXQgZmlyc3RJdGVtID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3RJdGVtXCIpO1xuICAgICAgbGV0IHNlY29uZEl0ZW0gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRJdGVtXCIpO1xuICAgICAgbGV0IHRoaXJkSXRlbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRoaXJkSXRlbVwiKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC5wcm9qZWN0VGl0bGU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSAmJlxuICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5Lmxlbmd0aCA+IDJcbiAgICAgICkge1xuICAgICAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9EdWVEYXRlO1xuICAgICAgICBzZWNvbmRJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzFdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsxXS50b0RvRHVlRGF0ZTtcbiAgICAgICAgdGhpcmRJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzJdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsyXS50b0RvRHVlRGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRvRG9NYXAuaGFzKHNvdXJjZU9iamVjdC5pZCkgJiZcbiAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheS5sZW5ndGggPiAxXG4gICAgICApIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvRHVlRGF0ZTtcbiAgICAgICAgc2Vjb25kSXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsxXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb0R1ZURhdGU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0b0RvTWFwLmhhcyhzb3VyY2VPYmplY3QuaWQpICYmXG4gICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXkubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb0R1ZURhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPSBcIk5vIFRvIERvIHRhc2tzIGFkZGVkIHlldCFcIjtcbiAgICAgIH1cblxuICAgICAgb3BlblByb2plY3RDYXJkKHRhcmdldCwgc291cmNlT2JqZWN0KTtcbiAgICAgIHJlbW92ZVByb2plY3RDYXJkKHRhcmdldCwgc291cmNlT2JqZWN0KTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlcyBhbiBlbXB0eSBib2lsZXJwbGF0ZSBjYXJkIHRvIGJlIGZpbGxlZCB3aXRoIHVzZXIgdmFsdWVzXG4gICAgY29uc3QgY3JlYXRlQ2FyZEJvaWxlcnBsYXRlID0gKHRvRG9OYW1lKSA9PiB7XG4gICAgICBjcmVhdGVOZXdUaXRsZUluc2lkZURpdih0b0RvTmFtZSwgXCJ0aXRsZVwiKTtcblxuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHRvRG9OYW1lLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NUZW1wXCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NWYWxcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdih0b0RvTmFtZSwgXCJwcmlvcml0eVwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwicHJpb3JpdHlcIiwgXCJwcmlvVGVtcFwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwicHJpb3JpdHlcIiwgXCJwcmlvVmFsXCIpO1xuXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGF0ZVwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGF0ZVwiLCBcImRhdGVUZW1wXCIpO1xuICAgICAgY3JlYXRlTmV3UGFyYUluc2lkZURpdih0b0RvTmFtZSwgXCJkYXRlXCIsIFwiZGF0ZVZhbFwiKTtcblxuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIkRvbmVcIik7XG4gICAgICBjcmVhdGVOZXdCdG4odG9Eb05hbWUsIFwiRGVsZXRlXCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIkVkaXRcIik7XG4gICAgICBjcmVhdGVOZXdCdG4odG9Eb05hbWUsIFwiU2F2ZVwiKTtcbiAgICB9O1xuICAgIC8vIGNyZWF0ZXMgbmV3IHRvLWRvIGNhcmQgdXNpbmcgZGF0YSBmcm9tIHN0b3JlZCBvYmplY3Qgd2l0aGluIHRoZSBjb250YWluZXIuYXJyYXkgYXJyYXlcbiAgICBjb25zdCBhcHBlbmRDYXJkRnJvbUFycmF5ID0gKHRhcmdldENhcmQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2FyZH1gKTtcbiAgICAgIGxldCB0aXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgbGV0IGRlc2MgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgICAgIGxldCBwcmlvID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gICAgICBsZXQgZGF0ZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG4gICAgICBsZXQgZGF0ZVRpdGxlID0gZGF0ZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVUZW1wXCIpO1xuICAgICAgbGV0IGRhdGVDb250ID0gZGF0ZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVWYWxcIik7XG4gICAgICBsZXQgZGVzY1RpdGxlID0gZGVzYy5xdWVyeVNlbGVjdG9yKFwiLmRlc2NUZW1wXCIpO1xuICAgICAgbGV0IGRlc2NDb250ID0gZGVzYy5xdWVyeVNlbGVjdG9yKFwiLmRlc2NWYWxcIik7XG4gICAgICBsZXQgcHJpb1RpdGxlID0gcHJpby5xdWVyeVNlbGVjdG9yKFwiLnByaW9UZW1wXCIpO1xuICAgICAgbGV0IHByaW9Db250ID0gcHJpby5xdWVyeVNlbGVjdG9yKFwiLnByaW9WYWxcIik7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc291cmNlT2JqZWN0LnRvRG9UaXRsZTtcblxuICAgICAgZGVzY1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXRhaWxzOiBcIjtcbiAgICAgIGRlc2NDb250LnRleHRDb250ZW50ID0gc291cmNlT2JqZWN0LnRvRG9EZXRhaWxzO1xuXG4gICAgICBwcmlvVGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICAgIHByaW9Db250LnRleHRDb250ZW50ID0gc291cmNlT2JqZWN0LnRvRG9QcmlvO1xuXG4gICAgICBkYXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgICAgIGRhdGVDb250LnRleHRDb250ZW50ID0gc291cmNlT2JqZWN0LnRvRG9EdWVEYXRlO1xuXG4gICAgICByZW1vdmVDYXJkKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpO1xuICAgICAgdGFza1N0YXR1cyh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKTtcbiAgICAgIGVkaXRUb0RvKHRhcmdldCwgc291cmNlT2JqZWN0KTtcbiAgICAgIHNhdmVUb0RvKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpO1xuXG4gICAgICAvLyBjaGVjayBmb3IgY29tcGxldGVkIHN0YXR1cywgY2hhbmdlIGJhY2tncm91bmQgaWYgY29tcGxldGVkXG4gICAgICBpZiAoc291cmNlT2JqZWN0LnRvRG9Db21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiNBNEZGOUNcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFRhc2sgXFxcIiR7dGl0bGUudGV4dENvbnRlbnR9XFxcIiBjb21wbGV0ZWQhYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZUNvbG9yKHNvdXJjZU9iamVjdCwgdGFyZ2V0KTtcbiAgICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vZnVuY3Rpb24gZm9yIGNoYW5naW5nIGJhY2tncm91bmQgY29sb3VyXG4gICAgLy8gc2V0IGNvbG91ciBvZiBiYWNrZ3JvdW5kIGRlcGVuZGluZyBvbiBwcmlvcml0eVxuICAgIGNvbnN0IGNoYW5nZUNvbG9yID0gKHNvdXJjZU9iamVjdCwgdGFyZ2V0KSA9PiB7XG4gICAgICBpZiAoc291cmNlT2JqZWN0LnRvRG9QcmlvID09PSBcIkhJR0hcIikge1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0ZGOUE1MlwiO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2VPYmplY3QudG9Eb1ByaW8gPT09IFwiTUVEXCIpIHtcbiAgICAgICAgLy8gZWRpdCB2aXNpYmlsaXR5IGZvciB0aGlzIHNoaXQgaWYgd2hlbiB0b2dnbGVkXG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjRkZGNzY2XCI7XG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZU9iamVjdC50b0RvUHJpbyA9PT0gXCJMT1dcIikge1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiIzgyQzlGRlwiO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gcmVtb3ZlcyBjbGljayB0YXJnZXQgZnJvbSB2aXNpYmxlIGNhcmQgKGRlbGV0ZXMgZG9tIG9iamVjdCkgYW5kIGZyb20gYXJyYXlcbiAgICBjb25zdCByZW1vdmVDYXJkID0gKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgbGV0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLkRlbGV0ZVwiKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdG8gZG8gbGlzdD9cIikgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGNoaWxkID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgY29udGFpbmVyLmFycmF5LnNwbGljZShjb250YWluZXIuYXJyYXkuaW5kZXhPZihzb3VyY2VPYmplY3QpLCAxKTtcbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG4gICAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gZW5hYmxlcyB0YXNrIHN0YXR1cyB0b2dnbGUgb24gY2FyZCBhbmQgd2l0aGluIGFycmF5XG4gICAgY29uc3QgdGFza1N0YXR1cyA9ICh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuRG9uZVwiKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgc291cmNlT2JqZWN0LnRvRG9Db21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdC5pZCwgY29udGFpbmVyKTtcbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgICBjaGFuZ2VDb2xvcihzb3VyY2VPYmplY3QsIHRhcmdldCk7XG4gICAgICAgICAgbGV0IHRpdGxlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NvdXJjZU9iamVjdC50b0RvVGl0bGV9YDtcbiAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIk1hcmsgdW5kb25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlT2JqZWN0LnRvRG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdC5pZCwgY29udGFpbmVyKTtcblxuICAgICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIHBhcmVudC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjQTRGRjlDXCI7XG4gICAgICAgICAgbGV0IHRpdGxlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NvdXJjZU9iamVjdC50b0RvVGl0bGV9YDtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUYXNrIFxcXCIke3RpdGxlLnRleHRDb250ZW50fVxcXCIgY29tcGxldGVkIWA7XG4gICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJNYXJrIGRvbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGVkaXQgYnV0dG9ucyBsZXRzIHlvdSBlZGl0IHN0dWZmIG9uIHRoZSBjYXJkXG4gICAgY29uc3QgZWRpdFRvRG8gPSAodGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuRWRpdFwiKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICBsZXQgZGVzY1ZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NWYWxcIik7XG4gICAgICAgIGxldCB0aXRsZVZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICBkZXNjVmFsLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIHRpdGxlVmFsLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2NWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZGRkYmRiXCI7XG4gICAgICAgIHRpdGxlVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RkZGJkYlwiO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHNhdmUgZWRpdFxuICAgIGNvbnN0IHNhdmVUb0RvID0gKHRhcmdldCwgc291cmNlT2JqZWN0LCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5TYXZlXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgIGxldCBkZXNjVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY1ZhbFwiKTtcbiAgICAgICAgbGV0IHRpdGxlVmFsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIGRlc2NWYWwuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIHRpdGxlVmFsLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBzb3VyY2VPYmplY3QudG9Eb0RldGFpbHMgPSBkZXNjVmFsLnRleHRDb250ZW50O1xuICAgICAgICBzb3VyY2VPYmplY3QudG9Eb1RpdGxlID0gdGl0bGVWYWwudGV4dENvbnRlbnQ7XG4gICAgICAgIGRlc2NWYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRpdGxlVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG4gICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdG9nZ2xlIGZvcm0gdmlzaWJpbGl0eSAtIGZvcm0gaXMgaW52aXNpYmxlIHdpdGggaGVpZ2h0IDAgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZ2dsZUZvcm1WaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvIERvIGl0ZW0hXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkNsaWNrIHRvIGhpZGUgZm9ybSFcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGNoYW5nZXMgcGFnZSB0aXRsZVxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VUaXRsZVRvRG9QYWdlID0gKG5ld1RpdGxlLCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGUgKyAnIGZvciBwcm9qZWN0OiBcIicgKyBwcm9qZWN0VGl0bGUgKyAnXCInO1xuICAgIH07XG5cbiAgICAvLyB0aGlzIHdpbGwgZGVsZXRlIGFsbCBjYXJkcyBpbiBjb250YWluZXJcbiAgICBjb25zdCBjbGVhckNhcmRzID0gKCkgPT4ge1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICAgIH07XG5cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHJlbmRlcnMgYWxsIGNhcmRzIGZyb20gdGhlIGNvbnRhaW5lciBhcnJheVxuICAgIC8vIGluIHRoZSBmdXR1cmUgaSBuZWVkIHRvIGFkZCBmdW5jdGlvbmFsaXR5IGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBhcnJheXMgb3RoZXJ3aXNlIG9ubHkgZmlyc3QgcHJvamVjdCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuXG4gICAgY29uc3QgcmVuZGVyVG9Eb0NhcmRzID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgLy8gYWxlcnQoY29udGFpbmVyLmFycmF5Lmxlbmd0aCArIFwiVGhlIGxlbmd0aCBvZiB0aGUgY29udGFpbmVyIGFycmF5IGlzIHRoaXNcIik7XG4gICAgICBjbGVhckNhcmRzKCk7XG4gICAgICBsZXQgbm9PZkNhcmRzID0gY29udGFpbmVyLmFycmF5Lmxlbmd0aDtcblxuICAgICAgbGV0IHJlbmRlckNvdW50ZXIgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZDYXJkczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZU5ld0RpdihgTmV3Q2FyZCR7aX1gKTtcbiAgICAgICAgZ29Eb20uY3JlYXRlQ2FyZEJvaWxlcnBsYXRlKGBOZXdDYXJkJHtpfWApO1xuICAgICAgICBnb0RvbS5hcHBlbmRDYXJkRnJvbUFycmF5KGBOZXdDYXJkJHtpfWAsIGNvbnRhaW5lci5hcnJheVtpXSwgY29udGFpbmVyKTtcbiAgICAgICAgcmVuZGVyQ291bnRlcisrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0Q2FyZHMgPSAoKSA9PiB7XG4gICAgICBsZXQgbm9PZlByb2plY3RzID0gcHJvamVjdENvbnRhaW5lci5hcnJheS5sZW5ndGg7XG5cbiAgICAgIGxldCBwcm9qZWN0UmVuZGVyQ291bnRlciA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZlByb2plY3RzOyBpKyspIHtcbiAgICAgICAgZ29Eb20uY3JlYXRlUHJvamVjdENhcmRCb2lsZXJwbGF0ZShgTmV3UHJvaiR7cHJvamVjdFJlbmRlckNvdW50ZXJ9YCk7XG4gICAgICAgIGdvRG9tLmFwcGVuZFByb2plY3RDYXJkKFxuICAgICAgICAgIGBOZXdQcm9qJHtwcm9qZWN0UmVuZGVyQ291bnRlcn1gLFxuICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXJyYXlbaV0sXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0UmVuZGVyQ291bnRlcisrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtQnV0dG9uQWN0aW9uID0gKGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpID0+IHtcbiAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEZvcm1cIik7XG4gICAgICBzdWJtaXQub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtU3VibWl0KGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybVJlc2V0QWN0aW9uID0gKCkgPT4ge1xuICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldEZvcm1cIik7XG4gICAgICByZXNldC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3JtUmVzZXQoKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVGb3JtQnV0dG9uQWN0aW9uID0gKCkgPT4ge1xuICAgICAgbGV0IGhpZGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWRlRm9ybVwiKTtcbiAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG4gICAgICBoaWRlRm9ybS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZm9ybS5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIikge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUbyBEbyBpdGVtIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJDbGljayB0byBoaWRlIGZvcm0hXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIGdvaW5nIGJhY2sgaG9tZSBmb3JtIGluIGFzY2VuZGluZyBvcmRlclxuICAgIGNvbnN0IGdvQmFja0hvbWUgPSAoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGJhY2tUb01haW5NZW51KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIHNvcnRpbmcgZm9ybSBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICBjb25zdCBzb3J0QXNjQWN0aW9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRBc2NcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNvcnRDYXJkc0FzYyhjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGVzIGJ1dHRvbiBjbGlja3MgZm9yIHNvcnRpbmcgZm9ybSBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgY29uc3Qgc29ydERlc2NBY3Rpb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydERlc2NcIik7XG4gICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNvcnRDYXJkc0Rlc2MoY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gc29ydHMgY2FyZCBpbiBhc2NlbmRpbmcgb3JkZXIgLSBub3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBzYXZlIHRoZSBzdGF0ZSB1bmxlc3MgeW91IGdvIGJhY2tcbiAgICAvLyBpbiBjYXNlIHVzZXIgd291bGQgbGlrZSB0byBrZWVwIHRoZSBjYXJkcyB1bm9yZGVyZWQgdmlhIHJlZnJlc2hcbiAgICBjb25zdCBzb3J0Q2FyZHNBc2MgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgaG9sZGVyID0gW107XG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJMT1dcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIk1FRFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiSElHSFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcnJheSA9IGhvbGRlcjtcblxuICAgICAgcmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgfTtcbiAgICAvLyBzb3J0cyBjYXJkIGluIGRlc2NlbmRpbmcgb3JkZXIgLSBub3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBzYXZlIHRoZSBzdGF0ZSB1bmxlc3MgeW91IGdvIGJhY2tcbiAgICAvLyBpbiBjYXNlIHVzZXIgd291bGQgbGlrZSB0byBrZWVwIHRoZSBjYXJkcyB1bm9yZGVyZWQgdmlhIHJlZnJlc2hcbiAgICBjb25zdCBzb3J0Q2FyZHNEZXNjID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbGRlciA9IFtdO1xuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiSElHSFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiTUVEXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJMT1dcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXJyYXkgPSBob2xkZXI7XG5cbiAgICAgIHJlbmRlclRvRG9DYXJkcyhjb250YWluZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhbmdlVGl0bGVUb0RvUGFnZSxcbiAgICAgIGhpZGVGb3JtQnV0dG9uQWN0aW9uLFxuICAgICAgZ29CYWNrSG9tZSxcbiAgICAgIHN1Ym1pdEZvcm1SZXNldEFjdGlvbixcbiAgICAgIHN1Ym1pdEZvcm1CdXR0b25BY3Rpb24sXG4gICAgICBjcmF0ZU5ld0Rpdkluc2lkZUhlYWRlcixcbiAgICAgIHNvcnRBc2NBY3Rpb24sXG4gICAgICBzb3J0RGVzY0FjdGlvbixcbiAgICAgIHJlbmRlclRvRG9DYXJkcyxcbiAgICAgIGFwcGVuZFByb2plY3RDYXJkLFxuICAgICAgcmVuZGVyUHJvamVjdENhcmRzLFxuICAgICAgY2hhbmdlVGl0bGUsXG4gICAgICBjcmVhdGVQcm9qZWN0Q2FyZEJvaWxlcnBsYXRlLFxuICAgICAgdG9nZ2xlRm9ybVZpc2liaWxpdHksXG4gICAgICBjcmVhdGVOZXdCdG4sXG4gICAgICBjcmVhdGVOZXdEaXYsXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYsXG4gICAgICBhcHBlbmRDYXJkRnJvbUFycmF5LFxuICAgICAgY3JlYXRlQ2FyZEJvaWxlcnBsYXRlLFxuICAgIH07XG4gIH07XG5cbiAgLy8gc3VibWl0IGZvcm0gbG9naWNcbiAgZnVuY3Rpb24gZm9ybVN1Ym1pdChjb250YWluZXIsIHNvdXJjZU9iamVjdElEKSB7XG4gICAgbGV0IGZvcm1Ub0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIGxldCBmb3JtVG9Eb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjXCIpO1xuXG4gICAgbGV0IGZvcm1Ub0RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG5cbiAgICAvLyBjb252ZXJ0cyBkYXRlIHRvIEVVIGRhdGUgZm9ybWF0XG4gICAgbGV0IGV1RGF0ZSA9IGZvcm1Ub0RvRGF0ZS52YWx1ZS5zcGxpdChcIi1cIik7XG4gICAgZXVEYXRlID0gZXVEYXRlWzJdICsgXCItXCIgKyBldURhdGVbMV0gKyBcIi1cIiArIGV1RGF0ZVswXTtcblxuICAgIGxldCBmb3JtVG9Eb1ByaW9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9Mb3dcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb01lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb01lZFwiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0hpZ2hcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpbztcblxuICAgIC8vIGNoZWNraW5nIHRvIG1ha2Ugc3VyZSBjb3JyZWN0IGZvcm0gc3VibWlzc2lvbiBmb3JtYXQgaXMgZm9sbG93ZWRcbiAgICBpZiAoZm9ybVRvRG9UaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlRpdGxlIGNhbm5vdCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChmb3JtVG9Eb0RhdGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJEYXRlIGNhbm5vdCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICtmb3JtVG9Eb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpWzBdID4gK3Rhc2tEYXRlLm1heC5zcGxpdChcIi1cIilbMF1cbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiRHVlIGRhdGUgY2Fubm90IGJlIG1vcmUgdGhhbiAxIHllYXIgaW4gdGhlIGZ1dHVyZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICtmb3JtVG9Eb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpWzBdIDwgK3Rhc2tEYXRlLm1pbi5zcGxpdChcIi1cIilbMF1cbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiRHVlIGRhdGUgY2Fubm90IGJlIGJlZm9yZSB0b2RheSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBwcmlvcml0eSBpcyBzZWxlY3RlZFxuICAgIGlmIChcbiAgICAgIGZvcm1Ub0RvUHJpb0xvdy5jaGVja2VkID09PSBmYWxzZSAmJlxuICAgICAgZm9ybVRvRG9QcmlvTWVkLmNoZWNrZWQgPT09IGZhbHNlICYmXG4gICAgICBmb3JtVG9Eb1ByaW9IaWdoLmNoZWNrZWQgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBhbGVydChcIllvdSBtdXN0IHNlbGVjdCBvbmUgdGFzayBwcmlvcml0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZm9yIHNldHRpbmcgcHJpb3JpdHkgZGVwZW5kaW5nIG9uIGJ1dHRvbnMgcHJlc3NlZFxuXG4gICAgaWYgKGZvcm1Ub0RvUHJpb0xvdy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBmb3JtVG9Eb1ByaW8gPSBcIkxPV1wiO1xuICAgIH0gZWxzZSBpZiAoZm9ybVRvRG9QcmlvTWVkLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGZvcm1Ub0RvUHJpbyA9IFwiTUVEXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1Ub0RvUHJpbyA9IFwiSElHSFwiO1xuICAgIH1cblxuICAgIGxldCBuZXdJdGVtID0gY3JlYXRlTmV3VG9kbyhcbiAgICAgIGZvcm1Ub0RvVGl0bGUudmFsdWUsXG4gICAgICBmb3JtVG9Eb0Rlc2MudmFsdWUsXG4gICAgICBldURhdGUsXG4gICAgICBmb3JtVG9Eb1ByaW9cbiAgICApO1xuXG4gICAgY29udGFpbmVyLmFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgZ29Eb20ucmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG4gICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAvLyBjcmVhdGVOZXdDYXJkKG5ld0l0ZW0sIGBOZXdDYXJkJHtjb3VudGVyfWAsIGNvbnRhaW5lcik7XG5cbiAgICBmb3JtUmVzZXQoXG4gICAgICBmb3JtVG9Eb0RhdGUsXG4gICAgICBmb3JtVG9Eb1RpdGxlLFxuICAgICAgZm9ybVRvRG9EZXNjLFxuICAgICAgZm9ybVRvRG9QcmlvTG93LFxuICAgICAgZm9ybVRvRG9QcmlvTWVkLFxuICAgICAgZm9ybVRvRG9QcmlvSGlnaFxuICAgICk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3QgY2FyZHMgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuICAvLyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGNoZWNrIGZvciBwcm9qZWN0IElEID9cbiAgY29uc3QgYWRkTmV3UHJvamVjdENhcmQgPSAoKSA9PiB7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiaGVhZGVyXCIsIFwiTmV3UHJvamVjdFwiKTtcbiAgICBsZXQgY291bnRlclAgPSBwcm9qZWN0Q29udGFpbmVyLmFycmF5Lmxlbmd0aDtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk5ld1Byb2plY3RcIik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgbmV3UHJvamVjdCA9IHByb21wdChcIkVudGVyIHRoZSBuZXcgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgLy8gaWYgKHByb21wdCgpKVxuICAgICAgaWYgKG5ld1Byb2plY3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3UHJvamVjdCA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIllvdSBtdXN0IGVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdQcm9qZWN0SXRlbSA9IGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdCwgY291bnRlclApO1xuXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0Q2FyZChuZXdQcm9qZWN0SXRlbSwgYE5ld1Byb2oke2NvdW50ZXJQfWApO1xuICAgICAgY291bnRlclArKztcbiAgICAgIHNldENvbnRhaW5lcigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50ZXJQO1xuICB9O1xuXG4gIC8vZnVuY3Rpb24gZm9yIGNyZWF0aW5nIG5ldyBwcm9qZWN0IGNhcmRzXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RDYXJkKGNvbnRJdGVtLCBwcm9qTmFtZSkge1xuICAgIGxldCBhcnJMZW5ndGggPSBwcm9qZWN0Q29udGFpbmVyLmFycmF5Lmxlbmd0aDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5LnB1c2goY29udEl0ZW0pO1xuICAgIGdvRG9tLmNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUocHJvak5hbWUpO1xuICAgIGdvRG9tLmFwcGVuZFByb2plY3RDYXJkKHByb2pOYW1lLCBwcm9qZWN0Q29udGFpbmVyLmFycmF5W2Fyckxlbmd0aF0pO1xuICB9XG5cbiAgLy9mdW5jdGlvbiB0byByZXNldCBmb3JtXG4gIGZ1bmN0aW9uIGZvcm1SZXNldCgpIHtcbiAgICBsZXQgZm9ybVRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgbGV0IGZvcm1Ub0RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIik7XG4gICAgbGV0IGZvcm1Ub0RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb0xvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0xvd1wiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvTWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvTWVkXCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9IaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvSGlnaFwiKTtcblxuICAgIGZvcm1Ub0RvRGF0ZS52YWx1ZSA9IG51bGw7XG4gICAgZm9ybVRvRG9UaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybVRvRG9EZXNjLnZhbHVlID0gXCJcIjtcbiAgICBmb3JtVG9Eb1ByaW9Mb3cuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGZvcm1Ub0RvUHJpb01lZC5jaGVja2VkID0gZmFsc2U7XG4gICAgZm9ybVRvRG9QcmlvSGlnaC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyAvL2Z1bmN0aW9uIHRvIGRlbGV0ZSB0byBkbyBjb250ZW50IGNvbnRhaW5lclxuICBmdW5jdGlvbiBkZWxDb250VGQoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGlvbkJ1dHRvbnNcIik7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoYWN0aW9uQnV0dG9ucyk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBkZWxldGUgY3VycmVudCBjb250YWluZXJcbiAgZnVuY3Rpb24gZGVsQ29udCgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBsZXQgY2hpbGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk5ld1Byb2plY3RcIik7XG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGRidXR0b24pO1xuICB9XG5cbiAgLy8gdGFrZXMgYmFjayB0byBtYWluIG1lbnUsIGNsZWFycyBwZXJ2aW91cyBwYWdlXG4gIGZ1bmN0aW9uIGJhY2tUb01haW5NZW51KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG5cbiAgICBpZiAodGl0bGUgIT09IFwiWW91ciBhY3RpdmUgcHJvamVjdHMgVG8gRG8gcHJvamVjdHNcIikge1xuICAgICAgdG9Eb01hcC5kZWxldGUoc291cmNlT2JqZWN0SUQpO1xuICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0SUQsIGNvbnRhaW5lcik7XG5cbiAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG5cbiAgICAgIGRlbENvbnRUZCgpO1xuXG4gICAgICByZW5kZXJIb21lUGFnZShzb3VyY2VPYmplY3RJRCk7XG5cbiAgICAgIHJldHVybiBzb3VyY2VPYmplY3RJRC5hcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gc2V0IG1pbiBhbmQgbWF4IGN1cnJlbnQgZGF0ZXNcbiAgZnVuY3Rpb24gc2V0TWluTWF4RGF0ZSgpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgeWVhciA9IHllYXIgKyAxO1xuXG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoID0gXCIwXCIgKyBgJHttb250aH1gO1xuICAgIH1cblxuICAgIGxldCBtYXhEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblxuICAgIC8vc2V0cyBtYXggZGF0ZSB0byBjdXJyZW50IGRhdGUgKyAxIHllYXI7XG4gICAgdGFza0RhdGUubWF4ID0gbWF4RGF0ZTtcblxuICAgIC8vIHNldHMgbWluIGRhdCB0byBjdXJyZW50IGRhdGVcbiAgICB0YXNrRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9XG5cbiAgLy8gcmVuZGVycyB0aGUgaG9tZSBwYWdlICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxuICBmdW5jdGlvbiByZW5kZXJIb21lUGFnZShzb3VyY2VPYmplY3RJRCkge1xuICAgIGdvRG9tLmNoYW5nZVRpdGxlKFwiWW91ciBhY3RpdmUgVG8gRG8gcHJvamVjdHNcIik7XG4gICAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuXG4gICAgLy8gZ29Eb20uY3JlYXRlTmV3QnRuKFwiaGVhZGVyXCIsIFwiTmV3UHJvamVjdFwiKTtcblxuICAgIGxldCBhZGROZXdQcm9qZWN0Q2FyZEhlcmUgPSBhZGROZXdQcm9qZWN0Q2FyZCgpO1xuICAgIGFkZE5ld1Byb2plY3RDYXJkSGVyZTtcbiAgICBnb0RvbS5yZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgfVxuXG4gIC8vLyByZW5kZXJzIHRoZSB0byBkbyBwYWdlIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG4gIGZ1bmN0aW9uIHJlbmRlclRvRG9QYWdlKHNvdXJjZU9iamVjdElELCBob2xkZXJJbnB1dCwgcHJvamVjdFRpdGxlKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGhvbGRlcklucHV0O1xuXG4gICAgZ29Eb20uY2hhbmdlVGl0bGVUb0RvUGFnZShcIlRvIERvIExpc3RcIiwgcHJvamVjdFRpdGxlKTtcbiAgICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgICBnb0RvbS5jcmF0ZU5ld0Rpdkluc2lkZUhlYWRlcigpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJob21lXCIpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJhZGRcIik7XG4gICAgZ29Eb20uY3JlYXRlTmV3QnRuKFwiYWN0aW9uQnV0dG9uc1wiLCBcInNvcnREZXNjXCIpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJzb3J0QXNjXCIpO1xuXG4gICAgZ29Eb20ucmVuZGVyVG9Eb0NhcmRzKGNvbnRhaW5lcik7XG4gICAgZ29Eb20udG9nZ2xlRm9ybVZpc2liaWxpdHkoKTtcblxuICAgIC8vIHNvcnQgQXNjZW5kaW5nIHByaW9cbiAgICBnb0RvbS5zb3J0QXNjQWN0aW9uKGNvbnRhaW5lcik7XG5cbiAgICAvLyBzb3J0IERlc2MgcHJpb1xuICAgIGdvRG9tLnNvcnREZXNjQWN0aW9uKGNvbnRhaW5lcik7XG5cbiAgICAvLyBnbyBiYWNrIGhvbWVcbiAgICBnb0RvbS5nb0JhY2tIb21lKHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuXG4gICAgLy8gaGFuZGxlcyBzdWJtaXNzaW9uIG9mIGZvcm1cbiAgICBnb0RvbS5zdWJtaXRGb3JtQnV0dG9uQWN0aW9uKGNvbnRhaW5lciwgc291cmNlT2JqZWN0SUQpO1xuXG4gICAgLy8gaGFuZGxlcyBmb3JtIHJlc2V0XG4gICAgZ29Eb20uc3VibWl0Rm9ybVJlc2V0QWN0aW9uKCk7XG5cbiAgICAvLyBoYW5kbGVzIGZvcm0gaGlkZSAtIGV4dHJhIGJ1dHRvbiBmb3IgYmV0dGVyIGNsaWNrYWJpbGl0eVxuICAgIGdvRG9tLmhpZGVGb3JtQnV0dG9uQWN0aW9uKCk7XG5cbiAgICAvLyBzZXQgY3VycmVudCB0aW1lIGZvciB0b2RheSB0byBwcmV2ZW50IHNlbGVjdGlvbiBvZiBkYXRlcyBlYXJsaWVyIHRoYW4gdG9hZHlcbiAgICBzZXRNaW5NYXhEYXRlKCk7XG4gIH1cblxuICAvLyBsb2NhbHN0b3JhZ2UgdGVzdGluZyBmb3IgcHJlc2VuY2Ugb2YgZmlsZXNcblxuICBmdW5jdGlvbiBjaGVja1Byb2plY3RTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RTdG9yZVwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHRlc3RDb250ID0gdG9Eb09iamVjdHMoKTtcbiAgICAgIHJldHVybiAocHJvamVjdENvbnRhaW5lciA9IHRlc3RDb250KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0U3RvcmVcIik7XG4gICAgICBsZXQgcHJvamVjdGNvbnRhaW5lcl9ub3JtYWwgPSBKU09OLnBhcnNlKHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkKTtcblxuICAgICAgcmV0dXJuIChwcm9qZWN0Q29udGFpbmVyID0gcHJvamVjdGNvbnRhaW5lcl9ub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC8vIHN0b3JpbmcgcHJvamVjdGNvbnRhaW5lciBpbiBsb2NhbCBkYXRhXG5cbiAgZnVuY3Rpb24gc2V0Q29udGFpbmVyKCkge1xuICAgIGxldCBwcm9qZWN0Y29udGFpbmVyX3NlcmlhbGl6ZCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RDb250YWluZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdFN0b3JlXCIsIHByb2plY3Rjb250YWluZXJfc2VyaWFsaXpkKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnMScpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgaWYgdG8gZG8gaXRlbXMgZXhpc3RcbiAgZnVuY3Rpb24gY2hlY2tUb0RvU3RvcmFnZSgpIHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5teU1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgdGVzdENvbnQgPSBuZXcgTWFwKCk7XG4gICAgICByZXR1cm4gKHRvRG9NYXAgPSB0ZXN0Q29udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b0RvTWFwX25vcm1hbDtcbiAgICAgIHRvRG9NYXBfbm9ybWFsID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teU1hcCkpO1xuICAgICAgcmV0dXJuICh0b0RvTWFwID0gdG9Eb01hcF9ub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gc2F2ZSBzdGF0ZSBvZiBjdXJyZW50IHRvIGRvIHByb2plY3RzXG4gIGZ1bmN0aW9uIHNldFRvRG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5teU1hcCA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odG9Eb01hcC5lbnRyaWVzKCkpKTtcbiAgfVxuXG4gIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzIC8gcmVtb3Zpbmcgc3RvcmVkIGVsZW1lbnRzXG4gIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiUHJvamVjdFN0b3JlXCIpO1xuICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRvRG9TdG9yYWdlXCIpO1xuICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm15TWFwXCIpO1xuXG4gIC8vIHNldHMgdmFyaWFibGVzIHRvIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24gZm9yIHN0b3JpbmcgdGhlIG1hcCBhbmQgcHJvamVjdCBjb250YWluZXJcbiAgbGV0IHByb2plY3RDb250YWluZXI7XG4gIGxldCB0b0RvTWFwO1xuXG4gIC8vIGNoZWNraW5nIHN0b3JhZ2Ugd2hldGhlciBhbnkgc2F2ZWQgdmFsdWVzIGFyZSBwcmVzZW50XG4gIC8vIGlmIG5vdCBwcmVzZW50LCByZW5kZXIgbmV3IHZhbHVlc1xuICBjaGVja1RvRG9TdG9yYWdlKCk7XG4gIGNoZWNrUHJvamVjdFN0b3JhZ2UoKTtcblxuICAvLyBuZWVkIHRvIGluY2x1ZGUgdGhpcyBvciBub3RoaW5nIHdvcmtzICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gIC0gLSAtIC0gLSAtIC1cbiAgbGV0IGdvRG9tID0gZG9tRWxlbWVudE1hbmlwdWxhdGlvbigpO1xuXG4gIC8vIHJlbmRlcnMgaG9tZSBwYWdlIGZvciBzdGFydCBvZiB3ZWJzaXRlXG4gIHJlbmRlckhvbWVQYWdlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9