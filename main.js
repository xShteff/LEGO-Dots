(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_pages_dots_dots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/dots/dots.component */ "./src/app/components/pages/dots/dots.component.ts");





const routes = [
    {
        component: _components_pages_dots_dots_component__WEBPACK_IMPORTED_MODULE_2__["DotsComponent"],
        path: '',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'legodots';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["lego-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lego-root',
                styleUrls: ['./app.component.less'],
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_dots_dots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/dots/dots.component */ "./src/app/components/pages/dots/dots.component.ts");
/* harmony import */ var _components_stud_stud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stud/stud.component */ "./src/app/components/stud/stud.component.ts");
/* harmony import */ var _pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/stud-style.pipe */ "./src/app/pipes/stud-style.pipe.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_stud_stud_component__WEBPACK_IMPORTED_MODULE_5__["StudComponent"], _components_pages_dots_dots_component__WEBPACK_IMPORTED_MODULE_4__["DotsComponent"], _pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_6__["StudStylePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_stud_stud_component__WEBPACK_IMPORTED_MODULE_5__["StudComponent"], _components_pages_dots_dots_component__WEBPACK_IMPORTED_MODULE_4__["DotsComponent"], _pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_6__["StudStylePipe"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pages/dots/dots.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/dots/dots.component.ts ***!
  \*********************************************************/
/*! exports provided: DotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsComponent", function() { return DotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stud_stud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stud/stud.component */ "./src/app/components/stud/stud.component.ts");





function DotsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lego-stud", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stud", col_r3);
} }
function DotsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_div_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class DotsComponent {
    constructor(dotsUtilsService) {
        this.dotsUtilsService = dotsUtilsService;
        this.randomise();
    }
    ngOnInit() { }
    randomise() {
        this.dotsGrid = this.dotsUtilsService.generateGrid(8, 8);
    }
}
DotsComponent.ɵfac = function DotsComponent_Factory(t) { return new (t || DotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"])); };
DotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DotsComponent, selectors: [["lego-dots"]], decls: 3, vars: 1, consts: [["class", "row", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [1, "row"], ["class", "stud-container", 4, "ngFor", "ngForOf"], [1, "stud-container"], [3, "stud"]], template: function DotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DotsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DotsComponent_Template_button_click_1_listener() { return ctx.randomise(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Randomise!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dotsGrid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _stud_stud_component__WEBPACK_IMPORTED_MODULE_3__["StudComponent"]], styles: [".stud-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  padding: 1px;\n  background: black;\n}\n.row[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 1px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0xFR08tRG90cy9MRUdPLURvdHMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2RvdHMvZG90cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb3RzL2RvdHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb3RzL2RvdHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZC1jb250YWluZXIge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4IDBweDtcbn1cbiIsIi5zdHVkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5yb3cge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lego-dots',
                styleUrls: ['./dots.component.less'],
                templateUrl: './dots.component.html',
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/stud/stud.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/stud/stud.component.ts ***!
  \***************************************************/
/*! exports provided: StudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudComponent", function() { return StudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/stud-style.pipe */ "./src/app/pipes/stud-style.pipe.ts");



class StudComponent {
}
StudComponent.ɵfac = function StudComponent_Factory(t) { return new (t || StudComponent)(); };
StudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudComponent, selectors: [["lego-stud"]], inputs: { stud: "stud" }, decls: 2, vars: 7, consts: [[1, "stud"]], template: function StudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "studStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, ctx.stud == null ? null : ctx.stud.colour, ctx.stud == null ? null : ctx.stud.pieceType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.stud == null ? null : ctx.stud.pieceType);
    } }, pipes: [_pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_1__["StudStylePipe"]], styles: [".stud[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.pizza-slice[_ngcontent-%COMP%] {\n  border-radius: 0 50px 0 0;\n  -moz-border-radius: 0 50px 0 0;\n  -webkit-border-radius: 0 50px 0 0;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0xFR08tRG90cy9MRUdPLURvdHMvc3JjL2FwcC9jb21wb25lbnRzL3N0dWQvc3R1ZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdHVkL3N0dWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0NGO0FER0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZC9zdHVkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuXG4ucGl6emEtc2xpY2Uge1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggMCAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgNTBweCAwIDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1MHB4IDAgMDtcbn1cblxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iLCIuc3R1ZCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnBpenphLXNsaWNlIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDAgMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDUwcHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNTBweCAwIDA7XG59XG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lego-stud',
                styleUrls: ['./stud.component.less'],
                templateUrl: './stud.component.html',
            }]
    }], null, { stud: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/model/colour.ts":
/*!*********************************!*\
  !*** ./src/app/model/colour.ts ***!
  \*********************************/
/*! exports provided: Colour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
var Colour;
(function (Colour) {
    // Credits to: https://brickipedia.fandom.com/wiki/Colour_Palette
    Colour["Red"] = "#ff0000";
    Colour["White"] = "#ffffff";
    // Black = '#000000',
    Colour["Lavender"] = "#cda4de";
    Colour["MediumReddishViolet"] = "#EE9DC3";
    Colour["MediumYellowishGreen"] = "#96B93B";
    Colour["Yellow"] = "#Ffff00";
})(Colour || (Colour = {}));


/***/ }),

/***/ "./src/app/model/index.ts":
/*!********************************!*\
  !*** ./src/app/model/index.ts ***!
  \********************************/
/*! exports provided: Colour, PieceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colour */ "./src/app/model/colour.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return _colour__WEBPACK_IMPORTED_MODULE_0__["Colour"]; });

/* harmony import */ var _piece_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece-type */ "./src/app/model/piece-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieceType", function() { return _piece_type__WEBPACK_IMPORTED_MODULE_1__["PieceType"]; });





/***/ }),

/***/ "./src/app/model/piece-type.ts":
/*!*************************************!*\
  !*** ./src/app/model/piece-type.ts ***!
  \*************************************/
/*! exports provided: PieceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceType", function() { return PieceType; });
var PieceType;
(function (PieceType) {
    PieceType["Circle"] = "circle";
    PieceType["Square"] = "square";
    PieceType["PizzaSlice"] = "pizza-slice";
    PieceType["Empty"] = "empty";
})(PieceType || (PieceType = {}));


/***/ }),

/***/ "./src/app/pipes/stud-style.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/stud-style.pipe.ts ***!
  \******************************************/
/*! exports provided: StudStylePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudStylePipe", function() { return StudStylePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudStylePipe {
    transform(colour, pieceType) {
        if (pieceType !== 'empty') {
            return `background: ${colour}`;
        }
        return '';
    }
}
StudStylePipe.ɵfac = function StudStylePipe_Factory(t) { return new (t || StudStylePipe)(); };
StudStylePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "studStyle", type: StudStylePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudStylePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'studStyle',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/dots-utils.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dots-utils.service.ts ***!
  \************************************************/
/*! exports provided: DotsUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsUtilsService", function() { return DotsUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model */ "./src/app/model/index.ts");



class DotsUtilsService {
    generateGrid(x, y) {
        const rows = [];
        for (let xi = 0; xi < x; xi -= -1) {
            const cols = [];
            for (let yi = 0; yi < y; yi -= -1) {
                const stud = {
                    colour: this.randomEnum(src_app_model__WEBPACK_IMPORTED_MODULE_1__["Colour"]),
                    pieceType: this.randomEnum(src_app_model__WEBPACK_IMPORTED_MODULE_1__["PieceType"]),
                };
                cols.push(stud);
            }
            rows.push(cols);
        }
        return rows;
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    randomEnum(anEnum) {
        const enumValues = Object.keys(anEnum);
        return anEnum[enumValues[this.randomNumber(0, enumValues.length)]];
    }
}
DotsUtilsService.ɵfac = function DotsUtilsService_Factory(t) { return new (t || DotsUtilsService)(); };
DotsUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DotsUtilsService, factory: DotsUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotsUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: DotsUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dots_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots-utils.service */ "./src/app/services/dots-utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsUtilsService", function() { return _dots_utils_service__WEBPACK_IMPORTED_MODULE_0__["DotsUtilsService"]; });




/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/LEGO-Dots/LEGO-Dots/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map