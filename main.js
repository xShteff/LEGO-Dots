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
/* harmony import */ var _services_stud_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/stud-interaction.service */ "./src/app/services/stud-interaction.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stud_stud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stud/stud.component */ "./src/app/components/stud/stud.component.ts");






function DotsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lego-stud", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stud", col_r3);
} }
function DotsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_div_13_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class DotsComponent {
    constructor(dotsUtilsService, studInteractionService) {
        this.dotsUtilsService = dotsUtilsService;
        this.studInteractionService = studInteractionService;
        this.randomise();
    }
    ngOnInit() { }
    randomise() {
        this.dotsGrid = this.dotsUtilsService.generateGrid(8, 8);
    }
}
DotsComponent.ɵfac = function DotsComponent_Factory(t) { return new (t || DotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stud_interaction_service__WEBPACK_IMPORTED_MODULE_2__["StudInteractionService"])); };
DotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DotsComponent, selectors: [["lego-dots"]], decls: 14, vars: 1, consts: [[1, "header"], [1, "logo"], ["src", "https://www.lego.com/cdn/cs/set/assets/blt6d3f7d252a252a42/LEGO-Logo-Ani2b.gif", "alt", "LOGO"], [1, "app-name"], [1, "menu"], [3, "click"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "stud-container", 4, "ngFor", "ngForOf"], [1, "stud-container"], [3, "stud"]], template: function DotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DotsComponent_Template_li_click_6_listener() { return ctx.randomise(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Randomise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DotsComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dotsGrid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _stud_stud_component__WEBPACK_IMPORTED_MODULE_4__["StudComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #ffcf00;\n  height: 60px;\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 5px;\n  margin-left: 25px;\n}\n.app-name[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-weight: bold;\n  margin-left: 10px;\n}\n.menu[_ngcontent-%COMP%] {\n  list-style: none;\n  line-height: 60px;\n  padding: 0;\n  margin: 0 20px;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n  cursor: pointer;\n  transition: background 0.4s;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n.stud-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  padding: 1px;\n  background: black;\n}\n.row[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 1px 0px;\n  width: -webkit-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0xFR08tRG90cy9MRUdPLURvdHMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2RvdHMvZG90cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb3RzL2RvdHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0hGO0FEREE7RUFNSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQ0ZGLGVBQWU7RURHYix5QkFBQTtFQ0RGLFdBQVc7RUFFWCxtQkFBbUI7RUFFbkIsNEJBQTRCO0VEQXRCLHFCQUFBO0VDRU4sMkJBQTJCO0VERGpCLGlCQUFBO0VDR1Y7MEVBQ3dFO0FBQzFFO0FEcEJBO0VBbUJJLDhCQUFBO0FDSUo7QURDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG90cy9kb3RzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgMCk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uYXBwLW5hbWUge1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMjBweDtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xuICB9XG4gIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbn1cblxuXG4uc3R1ZC1jb250YWluZXIge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNmMDA7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9nbyBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4uYXBwLW5hbWUge1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4ubWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG4ubWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zdHVkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5yb3cge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lego-dots',
                styleUrls: ['./dots.component.less'],
                templateUrl: './dots.component.html',
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"] }, { type: _services_stud_interaction_service__WEBPACK_IMPORTED_MODULE_2__["StudInteractionService"] }]; }, null); })();


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
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/stud-style.pipe */ "./src/app/pipes/stud-style.pipe.ts");




class StudComponent {
    constructor(dotsUtils, studInteractionService) {
        this.dotsUtils = dotsUtils;
        this.studInteractionService = studInteractionService;
    }
    interact(stud) {
        stud.colour = this.studInteractionService.colour;
        stud.pieceType = this.studInteractionService.piece;
    }
}
StudComponent.ɵfac = function StudComponent_Factory(t) { return new (t || StudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["StudInteractionService"])); };
StudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudComponent, selectors: [["lego-stud"]], inputs: { stud: "stud" }, decls: 2, vars: 8, consts: [[1, "stud", 3, "click"]], template: function StudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudComponent_Template_div_click_0_listener() { return ctx.interact(ctx.stud); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "studStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, ctx.stud == null ? null : ctx.stud.colour, ctx.stud == null ? null : ctx.stud.pieceType, ctx.stud == null ? null : ctx.stud.rotation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.stud == null ? null : ctx.stud.pieceType);
    } }, pipes: [_pipes_stud_style_pipe__WEBPACK_IMPORTED_MODULE_2__["StudStylePipe"]], styles: [".stud[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.pizza-slice[_ngcontent-%COMP%] {\n  border-radius: 0 50px 0 0;\n  -moz-border-radius: 0 50px 0 0;\n  -webkit-border-radius: 0 50px 0 0;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0xFR08tRG90cy9MRUdPLURvdHMvc3JjL2FwcC9jb21wb25lbnRzL3N0dWQvc3R1ZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdHVkL3N0dWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0NGO0FER0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZC9zdHVkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuXG4ucGl6emEtc2xpY2Uge1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggMCAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgNTBweCAwIDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1MHB4IDAgMDtcbn1cblxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iLCIuc3R1ZCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnBpenphLXNsaWNlIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDAgMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDUwcHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNTBweCAwIDA7XG59XG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lego-stud',
                styleUrls: ['./stud.component.less'],
                templateUrl: './stud.component.html',
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["DotsUtilsService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["StudInteractionService"] }]; }, { stud: [{
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
/*! exports provided: Colour, Interaction, PieceType, Rotation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colour */ "./src/app/model/colour.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return _colour__WEBPACK_IMPORTED_MODULE_0__["Colour"]; });

/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction */ "./src/app/model/interaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return _interaction__WEBPACK_IMPORTED_MODULE_1__["Interaction"]; });

/* harmony import */ var _piece_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece-type */ "./src/app/model/piece-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieceType", function() { return _piece_type__WEBPACK_IMPORTED_MODULE_2__["PieceType"]; });

/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotation */ "./src/app/model/rotation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rotation", function() { return _rotation__WEBPACK_IMPORTED_MODULE_3__["Rotation"]; });







/***/ }),

/***/ "./src/app/model/interaction.ts":
/*!**************************************!*\
  !*** ./src/app/model/interaction.ts ***!
  \**************************************/
/*! exports provided: Interaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
var Interaction;
(function (Interaction) {
    Interaction["Rotate"] = "rotate";
    Interaction["Type"] = "type";
    Interaction["Colour"] = "colour";
})(Interaction || (Interaction = {}));


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

/***/ "./src/app/model/rotation.ts":
/*!***********************************!*\
  !*** ./src/app/model/rotation.ts ***!
  \***********************************/
/*! exports provided: Rotation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotation", function() { return Rotation; });
var Rotation;
(function (Rotation) {
    Rotation["ClockWise"] = "90";
    Rotation["UpsideDown"] = "180";
    Rotation["CounterClockWise"] = "270";
    Rotation["None"] = "0";
})(Rotation || (Rotation = {}));


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
    transform(colour, pieceType, rotation) {
        if (pieceType !== 'empty') {
            return `transform: rotate(${rotation}deg);background: ${colour}`;
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
                cols.push({
                    colour: this.randomEnum(src_app_model__WEBPACK_IMPORTED_MODULE_1__["Colour"]),
                    pieceType: this.randomEnum(src_app_model__WEBPACK_IMPORTED_MODULE_1__["PieceType"]),
                    rotation: this.randomEnum(src_app_model__WEBPACK_IMPORTED_MODULE_1__["Rotation"]),
                });
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
/*! exports provided: StudInteractionService, DotsUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dots_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots-utils.service */ "./src/app/services/dots-utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsUtilsService", function() { return _dots_utils_service__WEBPACK_IMPORTED_MODULE_0__["DotsUtilsService"]; });

/* harmony import */ var _stud_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stud-interaction.service */ "./src/app/services/stud-interaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudInteractionService", function() { return _stud_interaction_service__WEBPACK_IMPORTED_MODULE_1__["StudInteractionService"]; });





/***/ }),

/***/ "./src/app/services/stud-interaction.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/stud-interaction.service.ts ***!
  \******************************************************/
/*! exports provided: StudInteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudInteractionService", function() { return StudInteractionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/model/index.ts");



class StudInteractionService {
    constructor() {
        this.mode = _model__WEBPACK_IMPORTED_MODULE_1__["Interaction"].Colour;
        this.colour = _model__WEBPACK_IMPORTED_MODULE_1__["Colour"].Lavender;
        this.piece = _model__WEBPACK_IMPORTED_MODULE_1__["PieceType"].PizzaSlice;
        this.rotation = _model__WEBPACK_IMPORTED_MODULE_1__["Rotation"].None;
    }
}
StudInteractionService.ɵfac = function StudInteractionService_Factory(t) { return new (t || StudInteractionService)(); };
StudInteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudInteractionService, factory: StudInteractionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudInteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


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
const environment = {
    production: false,
};


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
    // tslint:disable-next-line: no-void-expression
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