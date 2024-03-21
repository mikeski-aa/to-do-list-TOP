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
  localStorage.removeItem("ProjectStore");
  localStorage.removeItem("ToDoStorage");
  localStorage.removeItem("myMap");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxnQ0FBZ0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsd0NBQXdDLDhCQUE4QixnQkFBZ0IsaUJBQWlCLDBKQUEwSixtQkFBbUIsR0FBRyxVQUFVLGdCQUFnQixHQUFHLGtCQUFrQixzQkFBc0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsR0FBRyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0IsR0FBRyxpQ0FBaUMsc0JBQXNCLHdDQUF3QyxtQkFBbUIsZ0JBQWdCLEdBQUcsMkJBQTJCLDBCQUEwQixTQUFTLFlBQVksb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGVBQWUsd0NBQXdDLG1CQUFtQixtQkFBbUIsMEJBQTBCLGdCQUFnQiwwQkFBMEIsOEJBQThCLDBCQUEwQix5Q0FBeUMsUUFBUSxrQkFBa0Isc0JBQXNCLGdCQUFnQix3QkFBd0IsMEJBQTBCLHFDQUFxQyxHQUFHLFlBQVksZ0JBQWdCLHdCQUF3QixTQUFTLFlBQVksb0JBQW9CLDhCQUE4QixtQkFBbUIsb0VBQW9FLGdCQUFnQixHQUFHLGtCQUFrQixvQkFBb0Isa0NBQWtDLDhCQUE4QixvQkFBb0IsR0FBRyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixzQkFBc0IsOEJBQThCLG1DQUFtQyx1QkFBdUIsdUJBQXVCLHlDQUF5QyxxQ0FBcUMsd0JBQXdCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsd0JBQXdCLE1BQU0sc0JBQXNCLDhDQUE4QyxRQUFRLGtCQUFrQixpQkFBaUIsa0JBQWtCLFVBQVUsMkJBQTJCLGdCQUFnQixzQ0FBc0Msd0NBQXdDLCtCQUErQixJQUFJLDhCQUE4QixpREFBaUQsVUFBVSxvQ0FBb0MsZ0JBQWdCLGtCQUFrQix5QkFBeUIsdUJBQXVCLEdBQUcsd0NBQXdDLHVCQUF1QixpQkFBaUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsTUFBTSx3Q0FBd0MsU0FBUyxtQkFBbUIsdUJBQXVCLFNBQVMscUVBQXFFLHVCQUF1QixrQkFBa0Isa0JBQWtCLHlCQUF5QixrREFBa0QscUJBQXFCLEdBQUcsVUFBVSx1QkFBdUIsb0JBQW9CLHlCQUF5QixnQkFBZ0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsNEJBQTRCLGtCQUFrQix3Q0FBd0MsMEJBQTBCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGNBQWMseUJBQXlCLEdBQUcsMEJBQTBCLG9CQUFvQixtQkFBbUIsd0JBQXdCLFNBQVMsY0FBYywwQkFBMEIsdUJBQXVCLDhCQUE4QixHQUFHLDRCQUE0QiwwQkFBMEIsOEJBQThCLHNCQUFzQixHQUFHLHFDQUFxQyxnQkFBZ0IsMEJBQTBCLG9CQUFvQixHQUFHLE9BQU8sbUJBQW1CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGtDQUFrQyxvQkFBb0IsaUJBQWlCLEdBQUcsaUNBQWlDLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG9DQUFvQyw0QkFBNEIsbUNBQW1DLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLHlDQUF5Qyx1Q0FBdUMsc0JBQXNCLHlCQUF5Qix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHVCQUF1QixHQUFHLDZCQUE2QiwwQkFBMEIsa0JBQWtCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsaUJBQWlCLDhCQUE4Qiw4QkFBOEIscUNBQXFDLHdDQUF3QyxtQkFBbUIsOEJBQThCLFNBQVMsd0NBQXdDLGtCQUFrQixvQkFBb0IscUNBQXFDLHFDQUFxQyxPQUFPLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLGVBQWUseUJBQXlCLEdBQUcsY0FBYyx3QkFBd0IsOEJBQThCLEdBQUcsbUJBQW1CO0FBQzVyUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3pTMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixVQUFVLGFBQWEsWUFBWSxjQUFjLFlBQVksY0FBYyxTQUFTO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsNENBQTRDLGFBQWE7QUFDekQ7O0FBRUE7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQsc0NBQXNDLGtCQUFrQjtBQUN4RCxRQUFRO0FBQ1I7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RDtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RCx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLGVBQWU7QUFDckMsK0JBQStCLEVBQUU7QUFDakMsOENBQThDLEVBQUU7QUFDaEQsNENBQTRDLEVBQUU7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLGtCQUFrQjtBQUN4QyxxREFBcUQscUJBQXFCO0FBQzFFO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscURBQXFELFNBQVM7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7O0FBRUEscUJBQXFCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5oMSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYWN0aW9uQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYWN0aW9uQnV0dG9ucz5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIFxufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDoycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAgMHB4IDBweCA1NXB4IDU1cHg7IFxuICAgXG59XG5cbmhlYWRlcj5idXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMC4xZnIpKTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jb250ZW50PmRpdiB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDM1LCAzNSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogMTR2aDtcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uT3BlblByb2plY3Qge1xuICAgd2lkdGg6IDQ1JTtcbiAgIGhlaWdodDogNzUlO1xuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuIFxufVxuLk9wZW5Qcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDI1NSwgMSwgMC4zNyk7XG4gICBcbn1cbi5EZWxldGVQcm9qZWN0IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIFxuIH1cblxuIC5EZWxldGVQcm9qZWN0OmhvdmVyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1ICwzNSk7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuIH1cblxuIC5EZWxldGUsIC5EZWxldGVQcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ1LCAwLCAwLjk4Nik7XG4gICAgXG4gfVxuXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+aDMge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddPmJ1dHRvbiB7XG4gICAgbWF4LWhlaWdodDogMzRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gXG59XG5cbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5idXR0b24ge1xuICAgIFxufVxuXG4ucHJvamVjdFRpdGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxufVxuW2NsYXNzKj0nZmlyc3RJdGVtJ10sIFtjbGFzcyo9J3NlY29uZEl0ZW0nXSwgW2NsYXNzKj0ndGhpcmRJdGVtJ10ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubGFiZWwsIGxlZ2VuZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdj5sYWJlbHtcbiAgICBmb250LXdlaWdodDogdW5zZXQ7XG59XG5cbltjbGFzcz0nZGF0ZVNlbGVjdCddIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cblxuI3Rhc2tEYXRle1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMC4xMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbmZvcm0+aW5wdXQsIGZvcm0+dGV4dGFyZWF7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG4jc3VibWl0Rm9ybSwgI3Jlc2V0Rm9ybSwgI2hpZGVGb3Jte1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6MC41ZW07XG59XG5cbmhye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGhlaWdodDoxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50PltjbGFzcyo9J05ld0NhcmQnXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA3dmg7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggNTBweCA1MHB4IDI1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmRlc2NWYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiA1MXB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbn1cbltjbGFzcyo9J05ld0NhcmQnXT5oMyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDoycmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5EZWxldGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKVxufVxuXG5bY2xhc3MqPSdOZXdDYXJkJ10+YnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIFxufVxuXG5cblxuLmRlc2NyaXB0aW9uLCAucHJpb3JpdHksIC5kYXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGdyZXk7XG4gIFxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGVzY1RlbXAsIC5wcmlvVGVtcCwgLmRhdGVUZW1wIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2NUZW1wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5kYXRlVmFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUpBQW1KO0lBQ25KLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixT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O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hY3Rpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hY3Rpb25CdXR0b25zPmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnM+YnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogIDBweCAwcHggNTVweCA1NXB4OyBcXG4gICBcXG59XFxuXFxuaGVhZGVyPmJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDAuMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQ+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAzNSwgMzUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNvbnRlbnQ+W2NsYXNzKj0nTmV3UHJvaiddIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogMTR2aDtcXG4gICAgbWF4LWhlaWdodDogMTV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkIHdoaXRlO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5PcGVuUHJvamVjdCB7XFxuICAgd2lkdGg6IDQ1JTtcXG4gICBoZWlnaHQ6IDc1JTtcXG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuIFxcbn1cXG4uT3BlblByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDI1NSwgMSwgMC4zNyk7XFxuICAgXFxufVxcbi5EZWxldGVQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIFxcbiB9XFxuXFxuIC5EZWxldGVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0NSwgMCwgMC45ODYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1ICwzNSk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG4gfVxcblxcbiAuRGVsZXRlLCAuRGVsZXRlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDUsIDAsIDAuOTg2KTtcXG4gICAgXFxuIH1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+aDMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jb250ZW50PltjbGFzcyo9J05ld1Byb2onXT5idXR0b24ge1xcbiAgICBtYXgtaGVpZ2h0OiAzNHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuIFxcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdQcm9qJ10+YnV0dG9uIHtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG59XFxuW2NsYXNzKj0nZmlyc3RJdGVtJ10sIFtjbGFzcyo9J3NlY29uZEl0ZW0nXSwgW2NsYXNzKj0ndGhpcmRJdGVtJ10ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5sYWJlbCwgbGVnZW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdj5sYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xcbn1cXG5cXG5bY2xhc3M9J2RhdGVTZWxlY3QnXSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4jdGFza0RhdGV7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDAuMTFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5mb3JtPmlucHV0LCBmb3JtPnRleHRhcmVhe1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4jc3VibWl0Rm9ybSwgI3Jlc2V0Rm9ybSwgI2hpZGVGb3Jte1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6MC41ZW07XFxufVxcblxcbmhye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGhlaWdodDoxcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudD5bY2xhc3MqPSdOZXdDYXJkJ10ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1pbi1oZWlnaHQ6IDd2aDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCA1MHB4IDUwcHggMjVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbn1cXG4uZGVzY1ZhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDUxcHg7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG59XFxuW2NsYXNzKj0nTmV3Q2FyZCddPmgzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuW2NsYXNzKj0nTmV3Q2FyZCddPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6MnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLkRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMClcXG59XFxuXFxuW2NsYXNzKj0nTmV3Q2FyZCddPmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgXFxufVxcblxcblxcblxcbi5kZXNjcmlwdGlvbiwgLnByaW9yaXR5LCAuZGF0ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgZ3JleTtcXG4gIFxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXNjVGVtcCwgLnByaW9UZW1wLCAuZGF0ZVRlbXAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlc2NUZW1wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZGF0ZVZhbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHRvLWRvIG9iamVjdFxuXG4gIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW8pID0+IHtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCB0b0RvRGV0YWlscyA9IGRldGFpbHM7XG4gICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGNvbnN0IHRvRG9QcmlvID0gcHJpbztcbiAgICBjb25zdCB0b0RvQ29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgdG9Eb0lEID0gMDtcblxuICAgIGNvbnN0IHByaW50ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBUaXRsZTogJHt0b0RvVGl0bGV9LCBEZXRhaWxzOiAke3RvRG9EZXRhaWxzfSwgRHVlIERhdGU6ICR7dG9Eb0R1ZURhdGV9LCBQcmlvcml0eTogJHt0b0RvUHJpb31gXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9Eb1RpdGxlLFxuICAgICAgdG9Eb0RldGFpbHMsXG4gICAgICB0b0RvRHVlRGF0ZSxcbiAgICAgIHRvRG9QcmlvLFxuICAgICAgdG9Eb0NvbXBsZXRlZCxcbiAgICAgIHRvRG9JRCxcbiAgICAgIHByaW50LFxuICAgIH07XG4gIH07XG5cbiAgLy9mYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGlvbiBvZiBuZXcgcHJvamVjdHMgd2hpY2ggYXJlIHRvIGdvIGludG8gcHJvamVjdHMgYXJyYXlcblxuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHRpdGxlLCBpZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IGlkO1xuICAgIGNvbnN0IGZpcnN0T3BlbiA9IHRydWU7XG4gICAgLy8gY29uc3QgcHJvamVjdEZpcnN0VGFzayA9IHRhc2s7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdFRpdGxlLFxuICAgICAgaWQsXG4gICAgICBmaXJzdE9wZW4sXG4gICAgICAvLyB0YXNrLFxuICAgIH07XG4gIH07XG4gIC8vIHN0b3Jpbmcgb2JqZWN0cyBpbiBhbiBhcnJheSwgYWxsIHRvIGRvIGxpc3RzIGxpdmUgd2l0aGluIHRoZWlyIG93biBwcm9qZWN0XG5cbiAgY29uc3QgdG9Eb09iamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvRG9Db250YWluZXIobXlJdGVtKSB7XG4gICAgLy8gICBhcnJheS5wdXNoKG15SXRlbSk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHRvRG9Db250YWluZXIsXG4gICAgICBhcnJheSxcbiAgICB9O1xuICB9O1xuXG4gIC8vY3JlYXRlIGEgbmV3IGNvbnRhaW5lciBvYmplY3QgZm9yIGVhc2llciBoYW5kbGluZ1xuICBmdW5jdGlvbiBjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbiAgfVxuXG4gIC8vZG9tIG1hbmlwdWxhdGlvbiB0byBiZSBkb25lIGhlcmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRvbUVsZW1lbnRNYW5pcHVsYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjcmVhdGVOZXdEaXYgPSAoZGl2TmFtZSkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdk5hbWUpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVOZXdCdG4gPSAodGFyZ2V0QXBwZW5kLCBidG5UeHQpID0+IHtcbiAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXRBcHBlbmQgPT0gXCJoZWFkZXJcIikge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldEFwcGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRBcHBlbmR9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYCR7YnRuVHh0fWApO1xuICAgICAgaWYgKGJ0blR4dCA9PSBcImFkZFwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvIERvIGl0ZW0hXCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcImhvbWVcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkdvIGJhY2sgdG8gcHJvamVjdCBsaXN0IVwiO1xuICAgICAgfSBlbHNlIGlmIChidG5UeHQgPT0gXCJPcGVuUHJvamVjdFwiKSB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT3BlbiBQcm9qZWN0XCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcIkRlbGV0ZVByb2plY3RcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0aGlzIHByb2plY3RcIjtcbiAgICAgIH0gZWxzZSBpZiAoYnRuVHh0ID09IFwic29ydERlc2NcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIlNvcnQgcHJpbyAtIEhpZ2ggdG8gTG93XCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcInNvcnRBc2NcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIlNvcnQgcHJpbyAtIExvdyB0byBIaWdoXCI7XG4gICAgICB9IGVsc2UgaWYgKGJ0blR4dCA9PSBcIkRvbmVcIikge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIk1hcmsgZG9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuVHh0O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlcyBhIGRpdiBpbnNpZGUgZGl2IHdpdGggYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSBhIHBhcmFncmFwaCB3aXRoaW4gc3Vic2VxdWVudCBkaXZcbiAgICBjb25zdCBjcmVhdGVOZXdEaXZJbnNpZGVEaXYgPSAodGFyZ2V0RGl2LCBuZXdEaXZDbGFzcykgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldERpdn1gKTtcbiAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQobmV3RGl2Q2xhc3MpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyYXRlTmV3RGl2SW5zaWRlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uQnV0dG9uc1wiKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG4gICAgLy8gdGhpcyBzaG91bGQgY3JlYXRlIG5ldyBwYXJhZ3JhcGggaW5zaWRlIGRpdlxuICAgIGNvbnN0IGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYgPSAoXG4gICAgICB0YXJnZXRQYXJlbnREaXYsXG4gICAgICB0YXJnZXREaXYsXG4gICAgICBuZXdEaXZDbGFzc1xuICAgICkgPT4ge1xuICAgICAgbGV0IHRhcmdldFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldFBhcmVudERpdn1gKTtcbiAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRQYXJlbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgICAgbGV0IG5ld1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG5ld1AuY2xhc3NMaXN0LmFkZChuZXdEaXZDbGFzcyk7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3UCk7XG4gICAgfTtcblxuICAgIC8vdGhpcyBzaG91bGQgY3JlYXRlIG5ldyBkaXYgaW5zaWRlIG5ldyBkaXZcbiAgICBjb25zdCBjcmVhdGVOZXdUaXRsZUluc2lkZURpdiA9ICh0YXJnZXREaXYsIG5ld0RpdkNsYXNzKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKG5ld0RpdkNsYXNzKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGVzIGFuIGVtcHR5IHByb2plY3QgY2FyZCBib2lsZXJwbGF0ZVxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgIGNyZWF0ZU5ld0Rpdihwcm9qZWN0TmFtZSk7XG5cbiAgICAgIGNyZWF0ZU5ld1RpdGxlSW5zaWRlRGl2KHByb2plY3ROYW1lLCBcInByb2plY3RUaXRsZVwiKTtcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJmaXJzdEl0ZW1cIik7XG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYocHJvamVjdE5hbWUsIFwic2Vjb25kSXRlbVwiKTtcbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdihwcm9qZWN0TmFtZSwgXCJ0aGlyZEl0ZW1cIik7XG5cbiAgICAgIGNyZWF0ZU5ld0J0bihwcm9qZWN0TmFtZSwgXCJPcGVuUHJvamVjdFwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bihwcm9qZWN0TmFtZSwgXCJEZWxldGVQcm9qZWN0XCIpO1xuICAgIH07XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0Q2FyZCA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QpID0+IHtcbiAgICAgIGxldCBidG4gPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuRGVsZXRlUHJvamVjdFwiKTtcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maXJtKFxuICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdCBhbmQgQUxMIG9mIHRoZSBUbyBEbyBpdGVtcyB3aXRoaW4/XCJcbiAgICAgICAgICApID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjaGlsZCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXG4gICAgICAgICAgdG9Eb01hcC5kZWxldGUoc291cmNlT2JqZWN0LmlkKTtcbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcnJheS5zcGxpY2UoXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5LmluZGV4T2Yoc291cmNlT2JqZWN0KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldENvbnRhaW5lcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIG9wZW4gcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBvcGVuUHJvamVjdENhcmQgPSAodGFyZ2V0Q2FyZCwgc291cmNlT2JqZWN0KSA9PiB7XG4gICAgICBsZXQgb3BlblByb2pDYXJkID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLk9wZW5Qcm9qZWN0XCIpO1xuXG4gICAgICBvcGVuUHJvakNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsQ29udCgpO1xuICAgICAgICAvLyBhbGVydChzb3VyY2VPYmplY3QuaWQpO1xuICAgICAgICAvLyBhbGVydChzb3VyY2VPYmplY3QuZmlyc3RPcGVuKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9XG4gICAgICAgICAgdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgICBpZiAodG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBhbGVydChcIm5vdGhpbmcgbWFwcGVkIHlldFwiKTtcbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQpO1xuXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRvRG9PYmplY3RzKCk7XG4gICAgICAgICAgcmVuZGVyVG9Eb1BhZ2Uoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIsIHByb2plY3RUaXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyVG9Eb1BhZ2UoXG4gICAgICAgICAgICBzb3VyY2VPYmplY3QuaWQsXG4gICAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBhcHBlbmQgcHJvamVjdCBjYXJkXG4gICAgLy8gaWYgc3RhdGVtZW50IGRpc3BsYXlzIHVwIHRvIDMgb2YgdGhlIHByb2plY3RzIGluIHRoZSBjYXJkIC0gdG9wIDMgcHJvamVjdHMgcmVsYXRpdmUgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBhcHBlbmRQcm9qZWN0Q2FyZCA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QsIHNvdXJjZUNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENhcmR9YCk7XG4gICAgICBsZXQgcHJvamVjdFRpdGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgbGV0IGZpcnN0SXRlbSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0SXRlbVwiKTtcbiAgICAgIGxldCBzZWNvbmRJdGVtID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kSXRlbVwiKTtcbiAgICAgIGxldCB0aGlyZEl0ZW0gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi50aGlyZEl0ZW1cIik7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBzb3VyY2VPYmplY3QucHJvamVjdFRpdGxlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRvRG9NYXAuaGFzKHNvdXJjZU9iamVjdC5pZCkgJiZcbiAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheS5sZW5ndGggPiAyXG4gICAgICApIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9UaXRsZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvRHVlRGF0ZTtcbiAgICAgICAgc2Vjb25kSXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsxXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb0R1ZURhdGU7XG4gICAgICAgIHRoaXJkSXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVsyXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMl0udG9Eb0R1ZURhdGU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0b0RvTWFwLmhhcyhzb3VyY2VPYmplY3QuaWQpICYmXG4gICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXkubGVuZ3RoID4gMVxuICAgICAgKSB7XG4gICAgICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdG9Eb01hcC5nZXQoc291cmNlT2JqZWN0LmlkKS5hcnJheVswXS50b0RvVGl0bGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb0R1ZURhdGU7XG4gICAgICAgIHNlY29uZEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMV0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzFdLnRvRG9EdWVEYXRlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdG9Eb01hcC5oYXMoc291cmNlT2JqZWN0LmlkKSAmJlxuICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRvRG9NYXAuZ2V0KHNvdXJjZU9iamVjdC5pZCkuYXJyYXlbMF0udG9Eb1RpdGxlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0b0RvTWFwLmdldChzb3VyY2VPYmplY3QuaWQpLmFycmF5WzBdLnRvRG9EdWVEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3RJdGVtLnRleHRDb250ZW50ID0gXCJObyBUbyBEbyB0YXNrcyBhZGRlZCB5ZXQhXCI7XG4gICAgICB9XG5cbiAgICAgIG9wZW5Qcm9qZWN0Q2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgICByZW1vdmVQcm9qZWN0Q2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZXMgYW4gZW1wdHkgYm9pbGVycGxhdGUgY2FyZCB0byBiZSBmaWxsZWQgd2l0aCB1c2VyIHZhbHVlc1xuICAgIGNvbnN0IGNyZWF0ZUNhcmRCb2lsZXJwbGF0ZSA9ICh0b0RvTmFtZSkgPT4ge1xuICAgICAgY3JlYXRlTmV3VGl0bGVJbnNpZGVEaXYodG9Eb05hbWUsIFwidGl0bGVcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0Rpdkluc2lkZURpdih0b0RvTmFtZSwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjVGVtcFwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjVmFsXCIpO1xuXG4gICAgICBjcmVhdGVOZXdEaXZJbnNpZGVEaXYodG9Eb05hbWUsIFwicHJpb3JpdHlcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcInByaW9yaXR5XCIsIFwicHJpb1RlbXBcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcInByaW9yaXR5XCIsIFwicHJpb1ZhbFwiKTtcblxuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2KHRvRG9OYW1lLCBcImRhdGVcIik7XG4gICAgICBjcmVhdGVOZXdQYXJhSW5zaWRlRGl2KHRvRG9OYW1lLCBcImRhdGVcIiwgXCJkYXRlVGVtcFwiKTtcbiAgICAgIGNyZWF0ZU5ld1BhcmFJbnNpZGVEaXYodG9Eb05hbWUsIFwiZGF0ZVwiLCBcImRhdGVWYWxcIik7XG5cbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJEb25lXCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIkRlbGV0ZVwiKTtcbiAgICAgIGNyZWF0ZU5ld0J0bih0b0RvTmFtZSwgXCJFZGl0XCIpO1xuICAgICAgY3JlYXRlTmV3QnRuKHRvRG9OYW1lLCBcIlNhdmVcIik7XG4gICAgfTtcbiAgICAvLyBjcmVhdGVzIG5ldyB0by1kbyBjYXJkIHVzaW5nIGRhdGEgZnJvbSBzdG9yZWQgb2JqZWN0IHdpdGhpbiB0aGUgY29udGFpbmVyLmFycmF5IGFycmF5XG4gICAgY29uc3QgYXBwZW5kQ2FyZEZyb21BcnJheSA9ICh0YXJnZXRDYXJkLCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENhcmR9YCk7XG4gICAgICBsZXQgdGl0bGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgIGxldCBkZXNjID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgICBsZXQgcHJpbyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgICAgbGV0IGRhdGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuICAgICAgbGV0IGRhdGVUaXRsZSA9IGRhdGUucXVlcnlTZWxlY3RvcihcIi5kYXRlVGVtcFwiKTtcbiAgICAgIGxldCBkYXRlQ29udCA9IGRhdGUucXVlcnlTZWxlY3RvcihcIi5kYXRlVmFsXCIpO1xuICAgICAgbGV0IGRlc2NUaXRsZSA9IGRlc2MucXVlcnlTZWxlY3RvcihcIi5kZXNjVGVtcFwiKTtcbiAgICAgIGxldCBkZXNjQ29udCA9IGRlc2MucXVlcnlTZWxlY3RvcihcIi5kZXNjVmFsXCIpO1xuICAgICAgbGV0IHByaW9UaXRsZSA9IHByaW8ucXVlcnlTZWxlY3RvcihcIi5wcmlvVGVtcFwiKTtcbiAgICAgIGxldCBwcmlvQ29udCA9IHByaW8ucXVlcnlTZWxlY3RvcihcIi5wcmlvVmFsXCIpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvVGl0bGU7XG5cbiAgICAgIGRlc2NUaXRsZS50ZXh0Q29udGVudCA9IFwiRGV0YWlsczogXCI7XG4gICAgICBkZXNjQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvRGV0YWlscztcblxuICAgICAgcHJpb1RpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgICBwcmlvQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvUHJpbztcblxuICAgICAgZGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgICBkYXRlQ29udC50ZXh0Q29udGVudCA9IHNvdXJjZU9iamVjdC50b0RvRHVlRGF0ZTtcblxuICAgICAgcmVtb3ZlQ2FyZCh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKTtcbiAgICAgIHRhc2tTdGF0dXModGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcik7XG4gICAgICBlZGl0VG9Ebyh0YXJnZXQsIHNvdXJjZU9iamVjdCk7XG4gICAgICBzYXZlVG9Ebyh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGNvbXBsZXRlZCBzdGF0dXMsIGNoYW5nZSBiYWNrZ3JvdW5kIGlmIGNvbXBsZXRlZFxuICAgICAgaWYgKHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gXCIjQTRGRjlDXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUYXNrIFxcXCIke3RpdGxlLnRleHRDb250ZW50fVxcXCIgY29tcGxldGVkIWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VDb2xvcihzb3VyY2VPYmplY3QsIHRhcmdldCk7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c291cmNlT2JqZWN0LnRvRG9UaXRsZX1gO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIGZvciBjaGFuZ2luZyBiYWNrZ3JvdW5kIGNvbG91clxuICAgIC8vIHNldCBjb2xvdXIgb2YgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gcHJpb3JpdHlcbiAgICBjb25zdCBjaGFuZ2VDb2xvciA9IChzb3VyY2VPYmplY3QsIHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHNvdXJjZU9iamVjdC50b0RvUHJpbyA9PT0gXCJISUdIXCIpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiNGRjlBNTJcIjtcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlT2JqZWN0LnRvRG9QcmlvID09PSBcIk1FRFwiKSB7XG4gICAgICAgIC8vIGVkaXQgdmlzaWJpbGl0eSBmb3IgdGhpcyBzaGl0IGlmIHdoZW4gdG9nZ2xlZFxuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0ZGRjc2NlwiO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2VPYmplY3QudG9Eb1ByaW8gPT09IFwiTE9XXCIpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBcIiM4MkM5RkZcIjtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHJlbW92ZXMgY2xpY2sgdGFyZ2V0IGZyb20gdmlzaWJsZSBjYXJkIChkZWxldGVzIGRvbSBvYmplY3QpIGFuZCBmcm9tIGFycmF5XG4gICAgY29uc3QgcmVtb3ZlQ2FyZCA9ICh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGxldCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcihcIi5EZWxldGVcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRvIGRvIGxpc3Q/XCIpID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjaGlsZCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcnJheS5zcGxpY2UoY29udGFpbmVyLmFycmF5LmluZGV4T2Yoc291cmNlT2JqZWN0KSwgMSk7XG4gICAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIpO1xuICAgICAgICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGVuYWJsZXMgdGFzayBzdGF0dXMgdG9nZ2xlIG9uIGNhcmQgYW5kIHdpdGhpbiBhcnJheVxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSAodGFyZ2V0LCBzb3VyY2VPYmplY3QsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLkRvbmVcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2VPYmplY3QudG9Eb0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG4gICAgICAgICAgc2V0VG9Eb1N0b3JhZ2UoKTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgICAgY2hhbmdlQ29sb3Ioc291cmNlT2JqZWN0LCB0YXJnZXQpO1xuICAgICAgICAgIGxldCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJNYXJrIHVuZG9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZU9iamVjdC50b0RvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICB0b0RvTWFwLnNldChzb3VyY2VPYmplY3QuaWQsIGNvbnRhaW5lcik7XG5cbiAgICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgICBwYXJlbnQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwiI0E0RkY5Q1wiO1xuICAgICAgICAgIGxldCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzb3VyY2VPYmplY3QudG9Eb1RpdGxlfWA7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgVGFzayBcXFwiJHt0aXRsZS50ZXh0Q29udGVudH1cXFwiIGNvbXBsZXRlZCFgO1xuICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiTWFyayBkb25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBlZGl0IGJ1dHRvbnMgbGV0cyB5b3UgZWRpdCBzdHVmZiBvbiB0aGUgY2FyZFxuICAgIGNvbnN0IGVkaXRUb0RvID0gKHRhcmdldCkgPT4ge1xuICAgICAgbGV0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLkVkaXRcIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgbGV0IGRlc2NWYWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjVmFsXCIpO1xuICAgICAgICBsZXQgdGl0bGVWYWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgZGVzY1ZhbC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICB0aXRsZVZhbC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICBkZXNjVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RkZGJkYlwiO1xuICAgICAgICB0aXRsZVZhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkZGRiZGJcIjtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBzYXZlIGVkaXRcbiAgICBjb25zdCBzYXZlVG9EbyA9ICh0YXJnZXQsIHNvdXJjZU9iamVjdCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuU2F2ZVwiKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICBsZXQgZGVzY1ZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NWYWxcIik7XG4gICAgICAgIGxldCB0aXRsZVZhbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICBkZXNjVmFsLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aXRsZVZhbC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgc291cmNlT2JqZWN0LnRvRG9EZXRhaWxzID0gZGVzY1ZhbC50ZXh0Q29udGVudDtcbiAgICAgICAgc291cmNlT2JqZWN0LnRvRG9UaXRsZSA9IHRpdGxlVmFsLnRleHRDb250ZW50O1xuICAgICAgICBkZXNjVmFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aXRsZVZhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdG9Eb01hcC5zZXQoc291cmNlT2JqZWN0LmlkLCBjb250YWluZXIpO1xuICAgICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZSBmb3JtIHZpc2liaWxpdHkgLSBmb3JtIGlzIGludmlzaWJsZSB3aXRoIGhlaWdodCAwIGJ5IGRlZmF1bHRcbiAgICBjb25zdCB0b2dnbGVGb3JtVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG5cbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZm9ybS5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIikge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgZm9ybS5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUbyBEbyBpdGVtIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJDbGljayB0byBoaWRlIGZvcm0hXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBjaGFuZ2VzIHBhZ2UgdGl0bGVcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlVGl0bGVUb0RvUGFnZSA9IChuZXdUaXRsZSwgcHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlICsgJyBmb3IgcHJvamVjdDogXCInICsgcHJvamVjdFRpdGxlICsgJ1wiJztcbiAgICB9O1xuXG4gICAgLy8gdGhpcyB3aWxsIGRlbGV0ZSBhbGwgY2FyZHMgaW4gY29udGFpbmVyXG4gICAgY29uc3QgY2xlYXJDYXJkcyA9ICgpID0+IHtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgIGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcbiAgICB9O1xuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiByZW5kZXJzIGFsbCBjYXJkcyBmcm9tIHRoZSBjb250YWluZXIgYXJyYXlcbiAgICAvLyBpbiB0aGUgZnV0dXJlIGkgbmVlZCB0byBhZGQgZnVuY3Rpb25hbGl0eSBmb3Igc3dpdGNoaW5nIGJldHdlZW4gYXJyYXlzIG90aGVyd2lzZSBvbmx5IGZpcnN0IHByb2plY3Qgd2lsbCB3b3JrIGNvcnJlY3RseS5cblxuICAgIGNvbnN0IHJlbmRlclRvRG9DYXJkcyA9IChjb250YWluZXIpID0+IHtcbiAgICAgIC8vIGFsZXJ0KGNvbnRhaW5lci5hcnJheS5sZW5ndGggKyBcIlRoZSBsZW5ndGggb2YgdGhlIGNvbnRhaW5lciBhcnJheSBpcyB0aGlzXCIpO1xuICAgICAgY2xlYXJDYXJkcygpO1xuICAgICAgbGV0IG5vT2ZDYXJkcyA9IGNvbnRhaW5lci5hcnJheS5sZW5ndGg7XG5cbiAgICAgIGxldCByZW5kZXJDb3VudGVyID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mQ2FyZHM7IGkrKykge1xuICAgICAgICBjcmVhdGVOZXdEaXYoYE5ld0NhcmQke2l9YCk7XG4gICAgICAgIGdvRG9tLmNyZWF0ZUNhcmRCb2lsZXJwbGF0ZShgTmV3Q2FyZCR7aX1gKTtcbiAgICAgICAgZ29Eb20uYXBwZW5kQ2FyZEZyb21BcnJheShgTmV3Q2FyZCR7aX1gLCBjb250YWluZXIuYXJyYXlbaV0sIGNvbnRhaW5lcik7XG4gICAgICAgIHJlbmRlckNvdW50ZXIrKztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdENhcmRzID0gKCkgPT4ge1xuICAgICAgbGV0IG5vT2ZQcm9qZWN0cyA9IHByb2plY3RDb250YWluZXIuYXJyYXkubGVuZ3RoO1xuXG4gICAgICBsZXQgcHJvamVjdFJlbmRlckNvdW50ZXIgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZQcm9qZWN0czsgaSsrKSB7XG4gICAgICAgIGdvRG9tLmNyZWF0ZVByb2plY3RDYXJkQm9pbGVycGxhdGUoYE5ld1Byb2oke3Byb2plY3RSZW5kZXJDb3VudGVyfWApO1xuICAgICAgICBnb0RvbS5hcHBlbmRQcm9qZWN0Q2FyZChcbiAgICAgICAgICBgTmV3UHJvaiR7cHJvamVjdFJlbmRlckNvdW50ZXJ9YCxcbiAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFycmF5W2ldLFxuICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdFJlbmRlckNvdW50ZXIrKztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybUJ1dHRvbkFjdGlvbiA9IChjb250YWluZXIsIHNvdXJjZU9iamVjdElEKSA9PiB7XG4gICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRGb3JtXCIpO1xuICAgICAgc3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9ybVN1Ym1pdChjb250YWluZXIsIHNvdXJjZU9iamVjdElEKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm1SZXNldEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXRGb3JtXCIpO1xuICAgICAgcmVzZXQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybVJlc2V0KCk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlRm9ybUJ1dHRvbkFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGxldCBoaWRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlkZUZvcm1cIik7XG4gICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuICAgICAgaGlkZUZvcm0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgIGZvcm0uc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgVG8gRG8gaXRlbSFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgdG8gaGlkZSBmb3JtIVwiO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgLy8gaGFuZGxlcyBidXR0b24gY2xpY2tzIGZvciBnb2luZyBiYWNrIGhvbWUgZm9ybSBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICBjb25zdCBnb0JhY2tIb21lID0gKHNvdXJjZU9iamVjdElELCBjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBiYWNrVG9NYWluTWVudShzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlcyBidXR0b24gY2xpY2tzIGZvciBzb3J0aW5nIGZvcm0gaW4gYXNjZW5kaW5nIG9yZGVyXG4gICAgY29uc3Qgc29ydEFzY0FjdGlvbiA9IChjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0QXNjXCIpO1xuICAgICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzb3J0Q2FyZHNBc2MoY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlcyBidXR0b24gY2xpY2tzIGZvciBzb3J0aW5nIGZvcm0gaW4gZGVzY2VuZGluZyBvcmRlclxuICAgIGNvbnN0IHNvcnREZXNjQWN0aW9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnREZXNjXCIpO1xuICAgICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzb3J0Q2FyZHNEZXNjKGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIHNvcnRzIGNhcmQgaW4gYXNjZW5kaW5nIG9yZGVyIC0gbm90ZSB0aGF0IHRoaXMgd2lsbCBub3Qgc2F2ZSB0aGUgc3RhdGUgdW5sZXNzIHlvdSBnbyBiYWNrXG4gICAgLy8gaW4gY2FzZSB1c2VyIHdvdWxkIGxpa2UgdG8ga2VlcCB0aGUgY2FyZHMgdW5vcmRlcmVkIHZpYSByZWZyZXNoXG4gICAgY29uc3Qgc29ydENhcmRzQXNjID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IGhvbGRlciA9IFtdO1xuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiTE9XXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4IG9mIGNvbnRhaW5lci5hcnJheSkge1xuICAgICAgICBpZiAoeC50b0RvUHJpbyA9PT0gXCJNRURcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIkhJR0hcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXJyYXkgPSBob2xkZXI7XG5cbiAgICAgIHJlbmRlclRvRG9DYXJkcyhjb250YWluZXIpO1xuICAgIH07XG4gICAgLy8gc29ydHMgY2FyZCBpbiBkZXNjZW5kaW5nIG9yZGVyIC0gbm90ZSB0aGF0IHRoaXMgd2lsbCBub3Qgc2F2ZSB0aGUgc3RhdGUgdW5sZXNzIHlvdSBnbyBiYWNrXG4gICAgLy8gaW4gY2FzZSB1c2VyIHdvdWxkIGxpa2UgdG8ga2VlcCB0aGUgY2FyZHMgdW5vcmRlcmVkIHZpYSByZWZyZXNoXG4gICAgY29uc3Qgc29ydENhcmRzRGVzYyA9IChjb250YWluZXIpID0+IHtcbiAgICAgIGxldCBob2xkZXIgPSBbXTtcbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIkhJR0hcIikge1xuICAgICAgICAgIGhvbGRlci5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggb2YgY29udGFpbmVyLmFycmF5KSB7XG4gICAgICAgIGlmICh4LnRvRG9QcmlvID09PSBcIk1FRFwiKSB7XG4gICAgICAgICAgaG9sZGVyLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgeCBvZiBjb250YWluZXIuYXJyYXkpIHtcbiAgICAgICAgaWYgKHgudG9Eb1ByaW8gPT09IFwiTE9XXCIpIHtcbiAgICAgICAgICBob2xkZXIucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFycmF5ID0gaG9sZGVyO1xuXG4gICAgICByZW5kZXJUb0RvQ2FyZHMoY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZVRpdGxlVG9Eb1BhZ2UsXG4gICAgICBoaWRlRm9ybUJ1dHRvbkFjdGlvbixcbiAgICAgIGdvQmFja0hvbWUsXG4gICAgICBzdWJtaXRGb3JtUmVzZXRBY3Rpb24sXG4gICAgICBzdWJtaXRGb3JtQnV0dG9uQWN0aW9uLFxuICAgICAgY3JhdGVOZXdEaXZJbnNpZGVIZWFkZXIsXG4gICAgICBzb3J0QXNjQWN0aW9uLFxuICAgICAgc29ydERlc2NBY3Rpb24sXG4gICAgICByZW5kZXJUb0RvQ2FyZHMsXG4gICAgICBhcHBlbmRQcm9qZWN0Q2FyZCxcbiAgICAgIHJlbmRlclByb2plY3RDYXJkcyxcbiAgICAgIGNoYW5nZVRpdGxlLFxuICAgICAgY3JlYXRlUHJvamVjdENhcmRCb2lsZXJwbGF0ZSxcbiAgICAgIHRvZ2dsZUZvcm1WaXNpYmlsaXR5LFxuICAgICAgY3JlYXRlTmV3QnRuLFxuICAgICAgY3JlYXRlTmV3RGl2LFxuICAgICAgY3JlYXRlTmV3RGl2SW5zaWRlRGl2LFxuICAgICAgYXBwZW5kQ2FyZEZyb21BcnJheSxcbiAgICAgIGNyZWF0ZUNhcmRCb2lsZXJwbGF0ZSxcbiAgICB9O1xuICB9O1xuXG4gIC8vIHN1Ym1pdCBmb3JtIGxvZ2ljXG4gIGZ1bmN0aW9uIGZvcm1TdWJtaXQoY29udGFpbmVyLCBzb3VyY2VPYmplY3RJRCkge1xuICAgIGxldCBmb3JtVG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBsZXQgZm9ybVRvRG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY1wiKTtcblxuICAgIGxldCBmb3JtVG9Eb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpO1xuXG4gICAgLy8gY29udmVydHMgZGF0ZSB0byBFVSBkYXRlIGZvcm1hdFxuICAgIGxldCBldURhdGUgPSBmb3JtVG9Eb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpO1xuICAgIGV1RGF0ZSA9IGV1RGF0ZVsyXSArIFwiLVwiICsgZXVEYXRlWzFdICsgXCItXCIgKyBldURhdGVbMF07XG5cbiAgICBsZXQgZm9ybVRvRG9QcmlvTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvTG93XCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9NZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9NZWRcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb0hpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9IaWdoXCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW87XG5cbiAgICAvLyBjaGVja2luZyB0byBtYWtlIHN1cmUgY29ycmVjdCBmb3JtIHN1Ym1pc3Npb24gZm9ybWF0IGlzIGZvbGxvd2VkXG4gICAgaWYgKGZvcm1Ub0RvVGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJUaXRsZSBjYW5ub3QgYmUgZW1wdHkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoZm9ybVRvRG9EYXRlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRGF0ZSBjYW5ub3QgYmUgZW1wdHkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICArZm9ybVRvRG9EYXRlLnZhbHVlLnNwbGl0KFwiLVwiKVswXSA+ICt0YXNrRGF0ZS5tYXguc3BsaXQoXCItXCIpWzBdXG4gICAgKSB7XG4gICAgICBhbGVydChcIkR1ZSBkYXRlIGNhbm5vdCBiZSBtb3JlIHRoYW4gMSB5ZWFyIGluIHRoZSBmdXR1cmUhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICArZm9ybVRvRG9EYXRlLnZhbHVlLnNwbGl0KFwiLVwiKVswXSA8ICt0YXNrRGF0ZS5taW4uc3BsaXQoXCItXCIpWzBdXG4gICAgKSB7XG4gICAgICBhbGVydChcIkR1ZSBkYXRlIGNhbm5vdCBiZSBiZWZvcmUgdG9kYXkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNraW5nIHRvIG1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgcHJpb3JpdHkgaXMgc2VsZWN0ZWRcbiAgICBpZiAoXG4gICAgICBmb3JtVG9Eb1ByaW9Mb3cuY2hlY2tlZCA9PT0gZmFsc2UgJiZcbiAgICAgIGZvcm1Ub0RvUHJpb01lZC5jaGVja2VkID09PSBmYWxzZSAmJlxuICAgICAgZm9ybVRvRG9QcmlvSGlnaC5jaGVja2VkID09PSBmYWxzZVxuICAgICkge1xuICAgICAgYWxlcnQoXCJZb3UgbXVzdCBzZWxlY3Qgb25lIHRhc2sgcHJpb3JpdHkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZvciBzZXR0aW5nIHByaW9yaXR5IGRlcGVuZGluZyBvbiBidXR0b25zIHByZXNzZWRcblxuICAgIGlmIChmb3JtVG9Eb1ByaW9Mb3cuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybVRvRG9QcmlvID0gXCJMT1dcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1Ub0RvUHJpb01lZC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBmb3JtVG9Eb1ByaW8gPSBcIk1FRFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtVG9Eb1ByaW8gPSBcIkhJR0hcIjtcbiAgICB9XG5cbiAgICBsZXQgbmV3SXRlbSA9IGNyZWF0ZU5ld1RvZG8oXG4gICAgICBmb3JtVG9Eb1RpdGxlLnZhbHVlLFxuICAgICAgZm9ybVRvRG9EZXNjLnZhbHVlLFxuICAgICAgZXVEYXRlLFxuICAgICAgZm9ybVRvRG9QcmlvXG4gICAgKTtcblxuICAgIGNvbnRhaW5lci5hcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgIGdvRG9tLnJlbmRlclRvRG9DYXJkcyhjb250YWluZXIpO1xuICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuICAgIHNldFRvRG9TdG9yYWdlKCk7XG4gICAgLy8gY3JlYXRlTmV3Q2FyZChuZXdJdGVtLCBgTmV3Q2FyZCR7Y291bnRlcn1gLCBjb250YWluZXIpO1xuXG4gICAgZm9ybVJlc2V0KFxuICAgICAgZm9ybVRvRG9EYXRlLFxuICAgICAgZm9ybVRvRG9UaXRsZSxcbiAgICAgIGZvcm1Ub0RvRGVzYyxcbiAgICAgIGZvcm1Ub0RvUHJpb0xvdyxcbiAgICAgIGZvcm1Ub0RvUHJpb01lZCxcbiAgICAgIGZvcm1Ub0RvUHJpb0hpZ2hcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBwcm9qZWN0IGNhcmRzIHdoZW4gYnV0dG9uIGlzIHByZXNzZWRcbiAgLy8gdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBjaGVjayBmb3IgcHJvamVjdCBJRCA/XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RDYXJkID0gKCkgPT4ge1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImhlYWRlclwiLCBcIk5ld1Byb2plY3RcIik7XG4gICAgbGV0IGNvdW50ZXJQID0gcHJvamVjdENvbnRhaW5lci5hcnJheS5sZW5ndGg7XG5cbiAgICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5OZXdQcm9qZWN0XCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9tcHQoXCJFbnRlciB0aGUgbmV3IHByb2plY3QgbmFtZVwiKTtcbiAgICAgIC8vIGlmIChwcm9tcHQoKSlcbiAgICAgIGlmIChuZXdQcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1Byb2plY3QgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBlbnRlciBhIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV3UHJvamVjdEl0ZW0gPSBjcmVhdGVOZXdQcm9qZWN0KG5ld1Byb2plY3QsIGNvdW50ZXJQKTtcblxuICAgICAgY3JlYXRlTmV3UHJvamVjdENhcmQobmV3UHJvamVjdEl0ZW0sIGBOZXdQcm9qJHtjb3VudGVyUH1gKTtcbiAgICAgIGNvdW50ZXJQKys7XG4gICAgICBzZXRDb250YWluZXIoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb3VudGVyUDtcbiAgfTtcblxuICAvL2Z1bmN0aW9uIGZvciBjcmVhdGluZyBuZXcgcHJvamVjdCBjYXJkc1xuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0Q2FyZChjb250SXRlbSwgcHJvak5hbWUpIHtcbiAgICBsZXQgYXJyTGVuZ3RoID0gcHJvamVjdENvbnRhaW5lci5hcnJheS5sZW5ndGg7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcnJheS5wdXNoKGNvbnRJdGVtKTtcbiAgICBnb0RvbS5jcmVhdGVQcm9qZWN0Q2FyZEJvaWxlcnBsYXRlKHByb2pOYW1lKTtcbiAgICBnb0RvbS5hcHBlbmRQcm9qZWN0Q2FyZChwcm9qTmFtZSwgcHJvamVjdENvbnRhaW5lci5hcnJheVthcnJMZW5ndGhdKTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gcmVzZXQgZm9ybVxuICBmdW5jdGlvbiBmb3JtUmVzZXQoKSB7XG4gICAgbGV0IGZvcm1Ub0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIGxldCBmb3JtVG9Eb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjXCIpO1xuICAgIGxldCBmb3JtVG9Eb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpO1xuICAgIGxldCBmb3JtVG9Eb1ByaW9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9Mb3dcIik7XG4gICAgbGV0IGZvcm1Ub0RvUHJpb01lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb01lZFwiKTtcbiAgICBsZXQgZm9ybVRvRG9QcmlvSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb0hpZ2hcIik7XG5cbiAgICBmb3JtVG9Eb0RhdGUudmFsdWUgPSBudWxsO1xuICAgIGZvcm1Ub0RvVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGZvcm1Ub0RvRGVzYy52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybVRvRG9QcmlvTG93LmNoZWNrZWQgPSBmYWxzZTtcbiAgICBmb3JtVG9Eb1ByaW9NZWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGZvcm1Ub0RvUHJpb0hpZ2guY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gLy9mdW5jdGlvbiB0byBkZWxldGUgdG8gZG8gY29udGVudCBjb250YWluZXJcbiAgZnVuY3Rpb24gZGVsQ29udFRkKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGxldCBhY3Rpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3Rpb25CdXR0b25zXCIpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBmb3JtLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuXG4gICAgYm9keS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGFjdGlvbkJ1dHRvbnMpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZGVsZXRlIGN1cnJlbnQgY29udGFpbmVyXG4gIGZ1bmN0aW9uIGRlbENvbnQoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgbGV0IGNoaWxkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5OZXdQcm9qZWN0XCIpO1xuXG4gICAgYm9keS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGNoaWxkYnV0dG9uKTtcbiAgfVxuXG4gIC8vIHRha2VzIGJhY2sgdG8gbWFpbiBtZW51LCBjbGVhcnMgcGVydmlvdXMgcGFnZVxuICBmdW5jdGlvbiBiYWNrVG9NYWluTWVudShzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuXG4gICAgaWYgKHRpdGxlICE9PSBcIllvdXIgYWN0aXZlIHByb2plY3RzIFRvIERvIHByb2plY3RzXCIpIHtcbiAgICAgIHRvRG9NYXAuZGVsZXRlKHNvdXJjZU9iamVjdElEKTtcbiAgICAgIHRvRG9NYXAuc2V0KHNvdXJjZU9iamVjdElELCBjb250YWluZXIpO1xuXG4gICAgICBzZXRUb0RvU3RvcmFnZSgpO1xuXG4gICAgICBkZWxDb250VGQoKTtcblxuICAgICAgcmVuZGVySG9tZVBhZ2Uoc291cmNlT2JqZWN0SUQpO1xuXG4gICAgICByZXR1cm4gc291cmNlT2JqZWN0SUQuYXJyYXk7XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHNldCBtaW4gYW5kIG1heCBjdXJyZW50IGRhdGVzXG4gIGZ1bmN0aW9uIHNldE1pbk1heERhdGUoKSB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgbGV0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHllYXIgPSB5ZWFyICsgMTtcblxuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICBtb250aCA9IFwiMFwiICsgYCR7bW9udGh9YDtcbiAgICB9XG5cbiAgICBsZXQgbWF4RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cbiAgICAvL3NldHMgbWF4IGRhdGUgdG8gY3VycmVudCBkYXRlICsgMSB5ZWFyO1xuICAgIHRhc2tEYXRlLm1heCA9IG1heERhdGU7XG5cbiAgICAvLyBzZXRzIG1pbiBkYXQgdG8gY3VycmVudCBkYXRlXG4gICAgdGFza0RhdGUubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgfVxuXG4gIC8vIHJlbmRlcnMgdGhlIGhvbWUgcGFnZSAgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cbiAgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2Uoc291cmNlT2JqZWN0SUQpIHtcbiAgICBnb0RvbS5jaGFuZ2VUaXRsZShcIllvdXIgYWN0aXZlIFRvIERvIHByb2plY3RzXCIpO1xuICAgIGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcblxuICAgIC8vIGdvRG9tLmNyZWF0ZU5ld0J0bihcImhlYWRlclwiLCBcIk5ld1Byb2plY3RcIik7XG5cbiAgICBsZXQgYWRkTmV3UHJvamVjdENhcmRIZXJlID0gYWRkTmV3UHJvamVjdENhcmQoKTtcbiAgICBhZGROZXdQcm9qZWN0Q2FyZEhlcmU7XG4gICAgZ29Eb20ucmVuZGVyUHJvamVjdENhcmRzKCk7XG4gIH1cblxuICAvLy8gcmVuZGVycyB0aGUgdG8gZG8gcGFnZSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxuICBmdW5jdGlvbiByZW5kZXJUb0RvUGFnZShzb3VyY2VPYmplY3RJRCwgaG9sZGVySW5wdXQsIHByb2plY3RUaXRsZSkge1xuICAgIGxldCBjb250YWluZXIgPSBob2xkZXJJbnB1dDtcblxuICAgIGdvRG9tLmNoYW5nZVRpdGxlVG9Eb1BhZ2UoXCJUbyBEbyBMaXN0XCIsIHByb2plY3RUaXRsZSk7XG4gICAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuXG4gICAgZ29Eb20uY3JhdGVOZXdEaXZJbnNpZGVIZWFkZXIoKTtcbiAgICBnb0RvbS5jcmVhdGVOZXdCdG4oXCJhY3Rpb25CdXR0b25zXCIsIFwiaG9tZVwiKTtcbiAgICBnb0RvbS5jcmVhdGVOZXdCdG4oXCJhY3Rpb25CdXR0b25zXCIsIFwiYWRkXCIpO1xuICAgIGdvRG9tLmNyZWF0ZU5ld0J0bihcImFjdGlvbkJ1dHRvbnNcIiwgXCJzb3J0RGVzY1wiKTtcbiAgICBnb0RvbS5jcmVhdGVOZXdCdG4oXCJhY3Rpb25CdXR0b25zXCIsIFwic29ydEFzY1wiKTtcblxuICAgIGdvRG9tLnJlbmRlclRvRG9DYXJkcyhjb250YWluZXIpO1xuICAgIGdvRG9tLnRvZ2dsZUZvcm1WaXNpYmlsaXR5KCk7XG5cbiAgICAvLyBzb3J0IEFzY2VuZGluZyBwcmlvXG4gICAgZ29Eb20uc29ydEFzY0FjdGlvbihjb250YWluZXIpO1xuXG4gICAgLy8gc29ydCBEZXNjIHByaW9cbiAgICBnb0RvbS5zb3J0RGVzY0FjdGlvbihjb250YWluZXIpO1xuXG4gICAgLy8gZ28gYmFjayBob21lXG4gICAgZ29Eb20uZ29CYWNrSG9tZShzb3VyY2VPYmplY3RJRCwgY29udGFpbmVyKTtcblxuICAgIC8vIGhhbmRsZXMgc3VibWlzc2lvbiBvZiBmb3JtXG4gICAgZ29Eb20uc3VibWl0Rm9ybUJ1dHRvbkFjdGlvbihjb250YWluZXIsIHNvdXJjZU9iamVjdElEKTtcblxuICAgIC8vIGhhbmRsZXMgZm9ybSByZXNldFxuICAgIGdvRG9tLnN1Ym1pdEZvcm1SZXNldEFjdGlvbigpO1xuXG4gICAgLy8gaGFuZGxlcyBmb3JtIGhpZGUgLSBleHRyYSBidXR0b24gZm9yIGJldHRlciBjbGlja2FiaWxpdHlcbiAgICBnb0RvbS5oaWRlRm9ybUJ1dHRvbkFjdGlvbigpO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgdGltZSBmb3IgdG9kYXkgdG8gcHJldmVudCBzZWxlY3Rpb24gb2YgZGF0ZXMgZWFybGllciB0aGFuIHRvYWR5XG4gICAgc2V0TWluTWF4RGF0ZSgpO1xuICB9XG5cbiAgLy8gbG9jYWxzdG9yYWdlIHRlc3RpbmcgZm9yIHByZXNlbmNlIG9mIGZpbGVzXG5cbiAgZnVuY3Rpb24gY2hlY2tQcm9qZWN0U3RvcmFnZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0U3RvcmVcIikgPT09IG51bGwpIHtcbiAgICAgIGxldCB0ZXN0Q29udCA9IHRvRG9PYmplY3RzKCk7XG4gICAgICByZXR1cm4gKHByb2plY3RDb250YWluZXIgPSB0ZXN0Q29udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcm9qZWN0Y29udGFpbmVyX3NlcmlhbGl6ZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdFN0b3JlXCIpO1xuICAgICAgbGV0IHByb2plY3Rjb250YWluZXJfbm9ybWFsID0gSlNPTi5wYXJzZShwcm9qZWN0Y29udGFpbmVyX3NlcmlhbGl6ZCk7XG5cbiAgICAgIHJldHVybiAocHJvamVjdENvbnRhaW5lciA9IHByb2plY3Rjb250YWluZXJfbm9ybWFsKTtcbiAgICB9XG4gIH1cblxuICAvLyAvLyBzdG9yaW5nIHByb2plY3Rjb250YWluZXIgaW4gbG9jYWwgZGF0YVxuXG4gIGZ1bmN0aW9uIHNldENvbnRhaW5lcigpIHtcbiAgICBsZXQgcHJvamVjdGNvbnRhaW5lcl9zZXJpYWxpemQgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RTdG9yZVwiLCBwcm9qZWN0Y29udGFpbmVyX3NlcmlhbGl6ZCk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJzEnKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRvIGRvIGl0ZW1zIGV4aXN0XG4gIGZ1bmN0aW9uIGNoZWNrVG9Eb1N0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5teU1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgdGVzdENvbnQgPSBuZXcgTWFwKCk7XG4gICAgICByZXR1cm4gKHRvRG9NYXAgPSB0ZXN0Q29udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b0RvTWFwX25vcm1hbDtcbiAgICAgIHRvRG9NYXBfbm9ybWFsID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teU1hcCkpO1xuICAgICAgcmV0dXJuICh0b0RvTWFwID0gdG9Eb01hcF9ub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gc2F2ZSBzdGF0ZSBvZiBjdXJyZW50IHRvIGRvIHByb2plY3RzXG4gIGZ1bmN0aW9uIHNldFRvRG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5teU1hcCA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odG9Eb01hcC5lbnRyaWVzKCkpKTtcbiAgfVxuXG4gIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzIC8gcmVtb3Zpbmcgc3RvcmVkIGVsZW1lbnRzXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiUHJvamVjdFN0b3JlXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRvRG9TdG9yYWdlXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm15TWFwXCIpO1xuXG4gIC8vIHNldHMgdmFyaWFibGVzIHRvIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24gZm9yIHN0b3JpbmcgdGhlIG1hcCBhbmQgcHJvamVjdCBjb250YWluZXJcbiAgbGV0IHByb2plY3RDb250YWluZXI7XG4gIGxldCB0b0RvTWFwO1xuXG4gIC8vIGNoZWNraW5nIHN0b3JhZ2Ugd2hldGhlciBhbnkgc2F2ZWQgdmFsdWVzIGFyZSBwcmVzZW50XG4gIC8vIGlmIG5vdCBwcmVzZW50LCByZW5kZXIgbmV3IHZhbHVlc1xuICBjaGVja1RvRG9TdG9yYWdlKCk7XG4gIGNoZWNrUHJvamVjdFN0b3JhZ2UoKTtcblxuICAvLyBuZWVkIHRvIGluY2x1ZGUgdGhpcyBvciBub3RoaW5nIHdvcmtzICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gIC0gLSAtIC0gLSAtIC1cbiAgbGV0IGdvRG9tID0gZG9tRWxlbWVudE1hbmlwdWxhdGlvbigpO1xuXG4gIC8vIHJlbmRlcnMgaG9tZSBwYWdlIGZvciBzdGFydCBvZiB3ZWJzaXRlXG4gIHJlbmRlckhvbWVQYWdlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9