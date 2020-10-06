(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/animations/ReactLogo/index.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/animations/ReactLogo/index.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.reactLogo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px; }\n\n.circles {\n  width: 30vmin;\n  height: 30vmin;\n  position: relative;\n  perspective: 50000px;\n  color: #61DAFB; }\n  .circles span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: block;\n    width: 18.4%;\n    height: 18.4%;\n    border-radius: 100%;\n    background: currentColor; }\n  .circles div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-left: 1.2vmin solid;\n    border-top: 1.2vmin solid transparent;\n    border-radius: 100%; }\n    .circles div:nth-child(1) {\n      animation: anim-1 1.5s linear infinite; }\n    .circles div:nth-child(2) {\n      animation: anim-2 1.5s linear infinite; }\n    .circles div:nth-child(3) {\n      animation: anim-3 1.5s linear infinite; }\n\n@keyframes anim-1 {\n  from {\n    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg); }\n  to {\n    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg); } }\n\n@keyframes anim-2 {\n  from {\n    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg); }\n  to {\n    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg); } }\n\n@keyframes anim-3 {\n  from {\n    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg); }\n  to {\n    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg); } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n  Headers\n  font-family: 'Bebas Neue', cursive;\n\n  Main\n  font-family: 'Montserrat', sans-serif;\n*/\n\n:root {\n  --red: #ED3F28;\n}\n\n.App {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  text-align: center;\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  font-family: 'Bebas Neue', cursive;\n}\n\n.whitespace__warning {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  color: grey;\n}\n\n.centered {\n  position: relative;\n  top: 50%;\n}\n\n.section__about {\n  position: relative;\n  width: 100vw;\n  margin-top: 10vh;\n  left: 0;\n  margin-bottom: 40px;\n}\n\n.section__about__info {\n  margin-top: 50px;\n  text-align: right;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.section__work {\n  position: relative;\n  width: 100vw;\n  top: 10vh;\n  left: 0;\n  margin-bottom: 50px;\n  height: 20vw;\n}\n\n.section__work-info {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  top: 6vw;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CardCarousel/index.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/CardCarousel/index.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: #100e17;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.cardCarousel {\n  position: absolute;\n  height: 300px;\n  width: 50vw;\n  display: flex;\n}\n\n.card {\n  display: flex;\n  height: 20vw;\n  width: 15vw;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: -1rem 0 3rem lightgrey;\n  border: none;\n  transition: 0.4s ease-out;\n  position: relative;\n  left: 0px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.selectedCard {\n  overflow: hidden;\n  height: 200vh;\n  position: absolute !important;\n  left: -50vw;\n  width: 200vw;\n  top: -50vh;\n}\n\n.card:not(:first-child) {\n    margin-left: -50px;\n}\n\n.card:hover {\n  transform: translateY(-40px);\n  transition: 0.4s ease-out;\n}\n\n.card:hover ~ .card {\n  position: relative;\n  left: 5vw;\n  transition: 0.4s ease-out;\n}\n\n.title {\n  font-weight: 300;\n  position: relative;\n  left: 15px;\n  top: 15px;\n}\n\n.card__info {\n  position: relative;\n  left: 15px;\n  width: 13vw;\n  margin-top: 30px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 0.9vw;\n}\n\n/* ------- FULL SCREEN CARDS ------ */\n\n.fullScreenCard {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.FSCard {\n  overflow: hidden;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0vh;\n  left: -100vw;\n  background-color: white;\n  transition: 0.6s ease-out;\n}\n\n.FSContent {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: calc(100vw);\n  top: 0px;\n  transition: 0.6s ease-out;\n  overflow: hidden;\n}\n\n.contentOpen {\n  left: 0;\n  transition: 0.6s ease-out;\n}\n\n.cardOpen {\n  top: 0;\n  left: 0;\n  transition: 0.6s ease-out;\n}\n\n.close {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: white;\n  cursor: pointer;\n  z-index: 10;\n}\n\n.andLogo {\n  margin-top: 20vh;\n  width: 50vw;\n}\n\n.modalContent {\n  overflow: scroll;\n}\n\n.imageLeft {\n  position: absolute;\n  left: 100px;\n  perspective: 300px;\n  transition: 0.3s ease-out;\n}\n\n.vogueBizHub {\n  height: 40vh;\n  transform: rotateY(7deg);\n  box-shadow: 1px 1px 10px 0px;\n  transition: 0.3s ease-out;\n}\n\n.imageLeft:hover {\n  perspective: 0px;\n  transition: 0.3s ease-out;\n}\n\n.imageLeft:hover .vogueBizHub {\n  height: 80vh;\n  transform: rotateY(0deg);\n  transition: 0.3s ease-out;\n}\n\n/* ------ CIRCLE FILL ANIMATION ------- */\n\n.bar {\n  position: absolute;\n  top: 100px;\n  left: 20px;\n  height: 5px;\n  width: 150px;\n}\n\n.emptybar {\n  background-color: #2e3033;\n  width: 100%;\n  height: 100%;\n}\n\n.filledbar {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  width: 0px;\n  height: 100%;\n  background: rgb(0,154,217);\n  background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);\n  transition: 0.6s ease-out;\n}\n\n.card:hover .filledbar {\n  width: 120px;\n  transition: 0.4s ease-out;\n}\n\n.circle {\n  position: absolute;\n  top: 150px;\n  left: calc(50% - 60px);\n}\n\n.stroke {\n  stroke: white;\n  stroke-dasharray: 360;\n  stroke-dashoffset: 360;\n  transition: 0.6s ease-out;\n}\n\nsvg {\n  fill: #17141d;\n  stroke-width: 2px;\n}\n\n.card:hover .stroke {\n  stroke-dashoffset: 100;\n  transition: 0.6s ease-out;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/ScrollDownIcon/index.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/animations/ScrollDownIcon/index.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".scrollDownIcon__row {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 10vh;\n\twidth: 100vw;\n}\n\n.scrollDownIcon__chevron-container {\n\tposition: relative;\n\tbottom: 2vh;\n\tanimation: bounceUpDown 1s ease-in-out;\n\tanimation-iteration-count: infinite;\n}\n\n@keyframes bounceUpDown {\n\t0% {bottom: 1vh;}\n\t50% {bottom: 0vh;}\n\t100% {bottom: 1vh;}\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/SlideUpLoad/index.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/animations/SlideUpLoad/index.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slide-up-panel-one {\n\tposition: absolute;\n\theight: 10vh;\n\twidth: 200vw;\n\ttop: 150vh;\n\tleft: -50vw;\n\ttransform: rotate(-10deg);\n\tbackground-color: #F5CB5C;\n\tanimation: onloadSlideUp ease-out;\n\tanimation-duration: 0.8s;\n\tanimation-delay: 0.5s;\n\tanimation-fill-mode: forwards;\n}\n\n.slide-up-panel-two {\n\tposition: absolute;\n\theight: 10vh;\n\twidth: 200vw;\n\ttop: 150vh;\n\tleft: -50vw;\n\ttransform: rotate(-10deg);\n\tbackground-color: #FC9E4F;\n\tanimation: onloadSlideUp ease-out;\n\tanimation-duration: 0.8s;\n\tanimation-delay: 0.55s;\n\tanimation-fill-mode: forwards;\n}\n\n.slide-up-load {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n@keyframes onloadSlideUp {\n\t0% {top: 150vh; height: 10vh;}\n\t50% {height: 30vh;}\n\t100% {top: -50vh; height: 10vh;}\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/RedBackText/index.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/atoms/RedBackText/index.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".redBackText {\n\tbackground-color: var(--red);\n\tcolor: white;\n\tfont-size: 20px;\n\tpadding: 1px 4px 0px 4px;\n\tfont-family: 'Bebas Neue', cursive !important;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/molecules/MainHeader/index.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/molecules/MainHeader/index.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mainHeader__text {\n\tfont-family: 'Bebas Neue', cursive;\n\tposition: relative;\n\ttop: 50%;\n\tanimation: whiteTextAnimation 5s ease-in-out;\n\tanimation-fill-mode: forwards;\n\tanimation-iteration-count: infinite;\n}\n\n.mainHeader__col {\n\tposition: relative;\n\ttop: 45%;\n}\n\n.mainHeader__animation-block {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n\twidth: 0;\n\tbackground-color: var(--red);\n\tanimation: redBackgroundSlide 5s ease-in-out;\n\tanimation-fill-mode: forwards;\n\tanimation-iteration-count: infinite;\n}\n\n@keyframes redBackgroundSlide {\n\t0% { left: 0; width: 0;}\n\t20% { left: 0; width: 0;}\n\t29% {width: 100%; left: 0;}\n\t30% {width: 100%; right: 0;}\n\t32% {width: 100%; left: unset;}\n\t40% {width: 0%; right: 0;}\n\t100% {width: 0%; right: 0;}\n}\n\n@keyframes whiteTextAnimation {\n\t0% { color: black;}\n\t20% { color: black; }\n\t26% { color: white;}\n\t34% { color: white;}\n\t40% { color: black;}\n\t100% { color: black;}\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/AreaTag/index.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/organisms/AreaTag/index.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".areaTag {\n\tposition: fixed;\n\tbottom: 20px;\n\tleft: 10px;\n\theight: 11px;\n\tfont-size: 10px;\n\toverflow: hidden;\n\tline-height: 0px;\n\twidth: 100px;\n\tanimation: dropDownText 0.5s ease-out;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes dropDownText {\n\tfrom {line-height: -20px;}\n\tto {line-height: 12px;}\n}\n\n.areaTag__circle {\n\tposition: absolute;\n\tleft: 0px;\n\theight: 11px;\n\twidth: 11px;\n\tborder: 1px solid black;\n\tborder-radius: 50%;\n}\n\n.areaTag__line {\n\tposition: absolute;\n\ttop: 5px;\n\theight: 1px;\n\twidth: 10px;\n\tleft: 13px;\n\tbackground-color: black;\n}\n\n.areaTag__text {\n\tposition: absolute;\n\tleft: 28px;\n\tfont-family: 'Montserrat', sans-serif;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/CardMenuCarousel/index.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/organisms/CardMenuCarousel/index.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cardMenuCarousel {\n\tposition: absolute;\n\twidth: 200vw;\n\theight: 70vh;\n\toverflow: hidden;\n\toverflow-x: hidden;\n}\n\n.cardMenuItem {\n\theight: 60vh;\n\twidth: 60vw;\n\tborder: 1px solid black;\n\tposition: relative;\n}\n\n.cardMenuItem:not(:first-child) {\n\tmargin-left: 50px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/MenuButton/index.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/organisms/MenuButton/index.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".menuButton {\n\tposition: fixed;\n\ttop: 20px;\n\tright: 20px;\n\theight: 50px;\n\twidth: 50px;\n}\n\n.menuButton__outer {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tz-index: 5;\n\tcursor: pointer;\n}\n\n.menuButton__outer:hover .menuButton__mid-line {\n\ttransition: 0.2s ease-out;\n\twidth: 40px;\n\tleft: -5px;\n\tbackground-color: var(--red);\n}\n\n.menuButton__outer:hover .menuButton__top-line {\n\ttransition: 0.2s ease-out;\n\twidth: 35px;\n\tleft: 0px;\n}\n\n.menuButton__outer:hover .menuButton__bottom-line {\n\ttransition: 0.2s ease-out;\n\twidth: 35px;\n\tleft: 0px;\n}\n\n.menuButton__top-line {\n\tposition: absolute;\n\ttop: 10px;\n\theight: 1px;\n\twidth: 30px;\n\tbackground-color: black;\n\tleft: 5px;\n\ttransition: 0.3s ease-out;\n}\n\n.menuButton__mid-line {\n\tposition: absolute;\n\ttop: 20px;\n\theight: 1px;\n\twidth: 30px;\n\tbackground-color: black;\n\tleft: 5px;\n\ttransition: 0.3s ease-out;\n\n}\n\n.menuButton__bottom-line {\n\tposition: absolute;\n\ttop: 30px;\n\theight: 1px;\n\twidth: 30px;\n\tbackground-color: black;\n\tleft: 5px;\n\ttransition: 0.3s ease-out;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/ScreenAreaWrapper/index.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/organisms/ScreenAreaWrapper/index.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".screenAreaWrapper {\n\tdisplay: block;\n\tposition: relative;\n\theight: 100vh;\n\twidth: 100vw;\n\ttop: 0;\n\tleft: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_animations_ReactLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/animations/ReactLogo */ "./src/components/animations/ReactLogo/index.jsx");
/* harmony import */ var _components_molecules_MainHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/molecules/MainHeader */ "./src/components/molecules/MainHeader/index.jsx");
/* harmony import */ var _components_organisms_MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/organisms/MenuButton */ "./src/components/organisms/MenuButton/index.jsx");
/* harmony import */ var _components_organisms_AreaTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/organisms/AreaTag */ "./src/components/organisms/AreaTag/index.jsx");
/* harmony import */ var _components_atoms_RedBackText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/atoms/RedBackText */ "./src/components/atoms/RedBackText/index.jsx");
/* harmony import */ var _components_CardCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CardCarousel */ "./src/components/CardCarousel/index.jsx");
/* harmony import */ var _components_animations_ScrollDownIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/animations/ScrollDownIcon */ "./src/components/animations/ScrollDownIcon/index.jsx");
/* harmony import */ var _components_organisms_ScreenAreaWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/organisms/ScreenAreaWrapper */ "./src/components/organisms/ScreenAreaWrapper/index.jsx");
/* harmony import */ var _components_organisms_CardMenuCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/organisms/CardMenuCarousel */ "./src/components/organisms/CardMenuCarousel/index.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/App.js";













function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_ScreenAreaWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whitespace__warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Don't be afraid of all this whitespace"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_molecules_MainHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_AreaTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_animations_ScrollDownIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "section__about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_animations_ReactLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 5,
    className: "section__about__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "My name is Will. I am a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_RedBackText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "software developer"), " currently working in London. I mostly work on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_RedBackText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "front end React code"), " but also get involved with plenty of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_RedBackText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "node.js and python"), " too when I can!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "section__work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 4,
    className: "offset-sm-1 pr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "section__work-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "I have worked for a range of companies and clients during my time in the software industry. Some big, some small and some just me!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CardCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_CardMenuCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/AndLogo.webp":
/*!*********************************!*\
  !*** ./src/assets/AndLogo.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AndLogo.4d8777e0.webp";

/***/ }),

/***/ "./src/assets/VogueBizHub.png":
/*!************************************!*\
  !*** ./src/assets/VogueBizHub.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/VogueBizHub.944c79fa.png";

/***/ }),

/***/ "./src/components/CardCarousel/index.css":
/*!***********************************************!*\
  !*** ./src/components/CardCarousel/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CardCarousel/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CardCarousel/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CardCarousel/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/CardCarousel/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/CardCarousel/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _atoms_RedBackText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/RedBackText */ "./src/components/atoms/RedBackText/index.jsx");
/* harmony import */ var _assets_AndLogo_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/AndLogo.webp */ "./src/assets/AndLogo.webp");
/* harmony import */ var _assets_AndLogo_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_AndLogo_webp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_VogueBizHub_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/VogueBizHub.png */ "./src/assets/VogueBizHub.png");
/* harmony import */ var _assets_VogueBizHub_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_VogueBizHub_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/components/CardCarousel/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/CardCarousel/index.jsx";







const CardCarousel = ({
  cards
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

  const openModal = () => {
    setIsOpen(!isOpen);
  }; // Change this to be some sort of skills / experience for different areas etc


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cardCarousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: openModal,
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "AND Digital"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "My current place of residence! Working on project based work for clients such as Conde Nast, Arsenal Football Club and Shawbrook Bank.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Thomson Reuters"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Developed an innovation project for their flagship market trading platform, Eikon, where I also got to demo to clients such as HSBC, Nomura and BNP Paribas.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Firmstep"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Worked on the web platform for local councils back office systems. Also was responsible for setting up new developers environments and onboarding.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Freelance"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "When I have a little bit of time I like to get involved in various freelance projects. Some CMS build websites for clients as well as some more bespoke web animation pieces."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "fullScreenCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "FSCard ".concat(isOpen ? 'cardOpen' : null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: openModal,
    className: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "CLOSE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "FSContent ".concat(isOpen ? 'contentOpen' : null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "modalContent",
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "andLogo",
    src: _assets_AndLogo_webp__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imageLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "vogueBizHub",
    src: _assets_VogueBizHub_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardCarousel);

/***/ }),

/***/ "./src/components/animations/ReactLogo/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/animations/ReactLogo/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/animations/ReactLogo/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/animations/ReactLogo/index.jsx";



const ReactLogoAnimation = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "reactLogo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "circles",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (ReactLogoAnimation);

/***/ }),

/***/ "./src/components/animations/ReactLogo/index.scss":
/*!********************************************************!*\
  !*** ./src/components/animations/ReactLogo/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/animations/ReactLogo/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/animations/ReactLogo/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/animations/ReactLogo/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/animations/ScrollDownIcon/index.css":
/*!************************************************************!*\
  !*** ./src/components/animations/ScrollDownIcon/index.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/ScrollDownIcon/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/ScrollDownIcon/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/ScrollDownIcon/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/animations/ScrollDownIcon/index.jsx":
/*!************************************************************!*\
  !*** ./src/components/animations/ScrollDownIcon/index.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/animations/ScrollDownIcon/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/animations/ScrollDownIcon/index.jsx";






const ScrollDownIcon = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "scrollDownIcon__row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: 12,
  className: "justify-content-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "This way"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "scrollDownIcon__chevron-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDown"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (ScrollDownIcon);

/***/ }),

/***/ "./src/components/animations/SlideUpLoad/index.css":
/*!*********************************************************!*\
  !*** ./src/components/animations/SlideUpLoad/index.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/SlideUpLoad/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/SlideUpLoad/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/animations/SlideUpLoad/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/animations/SlideUpLoad/index.jsx":
/*!*********************************************************!*\
  !*** ./src/components/animations/SlideUpLoad/index.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/animations/SlideUpLoad/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/animations/SlideUpLoad/index.jsx";



const SlideUpLoad = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-up-load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-up-panel-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-up-panel-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideUpLoad);

/***/ }),

/***/ "./src/components/atoms/RedBackText/index.css":
/*!****************************************************!*\
  !*** ./src/components/atoms/RedBackText/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/RedBackText/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/RedBackText/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/RedBackText/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/RedBackText/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/atoms/RedBackText/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/atoms/RedBackText/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/atoms/RedBackText/index.jsx";



const RedBackText = ({
  children,
  upper
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "redBackText",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children);

/* harmony default export */ __webpack_exports__["default"] = (RedBackText);

/***/ }),

/***/ "./src/components/molecules/MainHeader/index.css":
/*!*******************************************************!*\
  !*** ./src/components/molecules/MainHeader/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/molecules/MainHeader/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/molecules/MainHeader/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/molecules/MainHeader/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/molecules/MainHeader/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/molecules/MainHeader/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/molecules/MainHeader/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/molecules/MainHeader/index.jsx";




const MainHeader = ({
  title
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: 12,
  className: "mainHeader__col justify-content-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: 4,
  className: "offset-sm-4 mainHeader_container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "mainHeader__animation-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "mainHeader__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Hi, I'm Will; Software developer,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "mainHeader__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "UI/UX enthusiast and cycling fanatic")));

/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./src/components/organisms/AreaTag/index.css":
/*!****************************************************!*\
  !*** ./src/components/organisms/AreaTag/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/AreaTag/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/AreaTag/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/AreaTag/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/organisms/AreaTag/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/organisms/AreaTag/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/organisms/AreaTag/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/organisms/AreaTag/index.jsx";



const AreaTag = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Welcome"),
        _useState2 = Object(_Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        currentArea = _useState2[0],
        setCurrentArea = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "areaTag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "areaTag__circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "areaTag__line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "areaTag__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, currentArea));
};

/* harmony default export */ __webpack_exports__["default"] = (AreaTag);

/***/ }),

/***/ "./src/components/organisms/CardMenuCarousel/index.css":
/*!*************************************************************!*\
  !*** ./src/components/organisms/CardMenuCarousel/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/CardMenuCarousel/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/CardMenuCarousel/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/CardMenuCarousel/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/organisms/CardMenuCarousel/index.jsx":
/*!*************************************************************!*\
  !*** ./src/components/organisms/CardMenuCarousel/index.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/organisms/CardMenuCarousel/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/organisms/CardMenuCarousel/index.jsx";



const CardMenuCarousel = () => {
  const handleSelect = e => {};

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cardMenuCarousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleSelect,
    class: "cardMenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleSelect,
    class: "cardMenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleSelect,
    class: "cardMenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleSelect,
    class: "cardMenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardMenuCarousel);

/***/ }),

/***/ "./src/components/organisms/MenuButton/index.css":
/*!*******************************************************!*\
  !*** ./src/components/organisms/MenuButton/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/MenuButton/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/MenuButton/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/MenuButton/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/organisms/MenuButton/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/organisms/MenuButton/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/organisms/MenuButton/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/organisms/MenuButton/index.jsx";



const MenuButton = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_wgoldsworthy_Documents_Code_component_library_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menuButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menuButton__outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menuButton__top-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menuButton__mid-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menuButton__bottom-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./src/components/organisms/ScreenAreaWrapper/index.css":
/*!**************************************************************!*\
  !*** ./src/components/organisms/ScreenAreaWrapper/index.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/ScreenAreaWrapper/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/ScreenAreaWrapper/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/ScreenAreaWrapper/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/organisms/ScreenAreaWrapper/index.jsx":
/*!**************************************************************!*\
  !*** ./src/components/organisms/ScreenAreaWrapper/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations_SlideUpLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/SlideUpLoad */ "./src/components/animations/SlideUpLoad/index.jsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/organisms/ScreenAreaWrapper/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/components/organisms/ScreenAreaWrapper/index.jsx";




const ScreenAreaWrapper = ({
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "screenAreaWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenAreaWrapper);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/wgoldsworthy/Documents/Code/component-library/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/wgoldsworthy/Documents/Code/component-library/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/wgoldsworthy/Documents/Code/component-library/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map