/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    textInsertJumbo: [{
      jumbo: 'HOME'
    }, {
      jumbo: 'ABOUT'
    }, {
      jumbo: 'SERVICES'
    }, {
      jumbo: 'PROCESS'
    }, {
      jumbo: 'TEAM'
    }, {
      jumbo: 'BLOG'
    }],
    buttonText: [{
      button: "GET IN TOUCH"
    }],
    teamExpert: [{
      img: "./img/team-1.jpg",
      name: "David Cooper",
      category: "CTO & CO-FOUNDER",
      speechTitle: "CTO Speech",
      speechText1: "CTO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      speechText2: "CTO Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
      speechText3: "CTO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
    }, {
      img: "./img/team-2.jpg",
      name: "Emma Lopez",
      category: "CHIEF MARKETING",
      speechTitle: "Chief Marketing Speech",
      speechText1: "CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      speechText2: "CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
      speechText3: "CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
    }, {
      img: "./img/team-3.jpg",
      name: "Oliver Jones",
      category: "CHIEF PROCUREMENT",
      speechTitle: "Chief Speech",
      speechText1: "CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      speechText2: "CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
      speechText3: "CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
    }, {
      img: "./img/team-4.jpg",
      name: "T.Johnson",
      category: "CEO & PRESIDENT",
      speechTitle: "President Speech",
      speechText1: "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      speechText2: "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
      speechText3: "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
    }],
    infoAbout: [{
      title: "Tradition",
      text: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "class": "fa-medal"
    }, {
      title: "Security",
      text: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "class": "fa-lock"
    }, {
      title: "Certificate",
      text: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "class": "fa-edit"
    }, {
      title: "Expertise",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "class": "fa-graduation-cap"
    }],
    aboutList: [{
      headerList: "About"
    }],
    listAboutFooter: [{
      "class": "fa-chevron-right",
      list: "The company"
    }, {
      "class": "fa-chevron-right",
      list: "Institutional"
    }, {
      "class": "fa-chevron-right",
      list: "Social & Events"
    }, {
      "class": "fa-chevron-right",
      list: "Innovation"
    }, {
      "class": "fa-chevron-right",
      list: "Enviroment"
    }, {
      "class": "fa-chevron-right",
      list: "Technology"
    }],
    serviceList: [{
      headerList: "Services"
    }],
    listServiceFooter: [{
      "class": "fa-chevron-right",
      list: "Audit & Assurance"
    }, {
      "class": "fa-chevron-right",
      list: "Financial Advisory"
    }, {
      "class": "fa-chevron-right",
      list: "Analytics M&A"
    }, {
      "class": "fa-chevron-right",
      list: "Middle Marketing"
    }, {
      "class": "fa-chevron-right",
      list: "Legal Consulting"
    }, {
      "class": "fa-chevron-right",
      list: "Regulatory Risk"
    }],
    supportList: [{
      headerList: "Support"
    }],
    listSupportFooter: [{
      "class": "fa-chevron-right",
      list: "Responasbility"
    }, {
      "class": "fa-chevron-right",
      list: "Termo Of Use"
    }, {
      "class": "fa-chevron-right",
      list: "About Cookies"
    }, {
      "class": "fa-chevron-right",
      list: "Privacy Policy"
    }, {
      "class": "fa-chevron-right",
      list: "Accessibility"
    }, {
      "class": "fa-chevron-right",
      list: "Information"
    }]
  },
  methods: {
    setIuser: function setIuser(position) {
      this.index = position;
      return this.index;
    },
    backTopPage: function backTopPage() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}); //fine root

console.log("bababaab");

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/master": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;