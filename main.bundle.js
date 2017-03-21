webpackJsonp([1,4],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextService = (function () {
    function TextService() {
        this.text = [];
    }
    TextService.prototype.setText = function (text) {
        this.text.length = 0;
        var tokens = text.split(' ');
        console.log(tokens);
        var buffer = '';
        for (var i = 0; i < tokens.length; i++) {
            buffer += tokens[i] + ' ';
            if (i % 80 === 0 && i !== 0) {
                this.text.push(buffer);
                buffer = '';
            }
        }
        if (buffer !== '') {
            this.text.push(buffer);
            buffer = '';
        }
        localStorage.setItem('reader', JSON.stringify(this.text));
    };
    TextService.prototype.getText = function () {
        if (this.text.length === 0) {
            this.text = JSON.parse(localStorage.getItem('reader'));
        }
        return this.text;
    };
    TextService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], TextService);
    return TextService;
}());
//# sourceMappingURL=text.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextInputComponent = (function () {
    function TextInputComponent(textService, router) {
        this.textService = textService;
        this.router = router;
    }
    TextInputComponent.prototype.ngOnInit = function () {
        this.textService.setText('Test text');
    };
    TextInputComponent.prototype.startReading = function () {
        this.textService.setText(this.text);
        this.router.navigate(['/read', 1]);
    };
    TextInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-input',
            template: __webpack_require__(528),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__["a" /* TextService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__["a" /* TextService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], TextInputComponent);
    return TextInputComponent;
    var _a, _b;
}());
//# sourceMappingURL=text-input.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextViewComponent = (function () {
    function TextViewComponent(textService, route, router) {
        this.textService = textService;
        this.route = route;
        this.router = router;
        this.textBackgroundColor = '#bfbfbf';
        this.textColor = '#000000';
        this.backgroundImage = 'http://4kwallpapershd.com/wp-content/uploads/2016/08/Colored-Nebula-In-Space-Large-Image.jpg';
        this.id = 'HAMukFBSm6s';
    }
    TextViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.textList = this.textService.getText();
        this.current = 0;
        this.sub = this.route.params.subscribe(function (params) {
            _this.current = +params['page'] - 1;
        });
    };
    TextViewComponent.prototype.next = function () {
        var page = this.current + 1;
        if (page < this.textList.length) {
            this.router.navigate(['/read', page + 1]);
        }
    };
    TextViewComponent.prototype.previous = function () {
        var page = this.current - 1;
        if (page >= 0) {
            this.router.navigate(['/read', page + 1]);
        }
    };
    TextViewComponent.prototype.getBackgroundImage = function () {
        return 'url(' + this.backgroundImage + ')';
    };
    TextViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TextViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-view',
            template: __webpack_require__(529),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__["a" /* TextService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__text_service_text_service__["a" /* TextService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], TextViewComponent);
    return TextViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=text-view.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_input_text_input_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_view_text_view_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_input_text_input_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_view_text_view_module__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ROUTES = [
    { path: '', redirectTo: 'input', pathMatch: 'full' },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_3__text_input_text_input_component__["a" /* TextInputComponent */] },
    { path: 'read', redirectTo: 'read/1', pathMatch: 'full' },
    { path: 'read/:page', component: __WEBPACK_IMPORTED_MODULE_4__text_view_text_view_component__["a" /* TextViewComponent */] },
    { path: '**', redirectTo: 'input', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__text_input_text_input_module__["a" /* TextInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__text_view_text_view_module__["a" /* TextViewModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(ROUTES, { useHash: true })
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(527),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_service_text_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__text_service_text_service__["a" /* TextService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_input_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextInputModule = (function () {
    function TextInputModule() {
    }
    TextInputModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__text_input_component__["a" /* TextInputComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__text_input_component__["a" /* TextInputComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TextInputModule);
    return TextInputModule;
}());
//# sourceMappingURL=text-input.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_view_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_color_picker__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TextViewModule = (function () {
    function TextViewModule() {
    }
    TextViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_color_picker__["ColorPickerModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player__["YoutubePlayerModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__text_view_component__["a" /* TextViewComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__text_view_component__["a" /* TextViewComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TextViewModule);
    return TextViewModule;
}());
//# sourceMappingURL=text-view.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, "div.wrapper {\r\n    padding: 50px 50px 50px 50px;\r\n}\r\n\r\ndiv.container {\r\n    width: 100%;\r\n    max-width: 1900px;\r\n    text-align: center;\r\n}\r\n\r\ntextarea {\r\n  background-color : #d1d1d1; \r\n}\r\n\r\nbutton {\r\n    color: black;\r\n    background-color: #d1d1d1;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    max-width: 200px;\r\n    height: 40px;\r\n    font-size: 22px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #bebebe;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, "div.wrapper {\r\n    padding: 50px 50px 0 50px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 1080px;\r\n    text-align: center;\r\n}\r\n\r\ndiv.container {\r\n    width: 100%;\r\n    height: auto;\r\n    max-width: 900px;\r\n    border-radius: 5px;\r\n    padding: 10px 20px 10px 20px;\r\n}\r\n\r\ndiv.container p {\r\n    font-size: 32px;\r\n    font-family: Verdana;\r\n    color: #000000;\r\n    text-align: left;\r\n}\r\n\r\ndiv.text-wrapper {\r\n    background-color: #bfbfbf;\r\n    min-height: 600px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\ndiv.button-class {\r\n    background-color: #1c394a;\r\n    border: solid white 1px;\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    color: white;\r\n    cursor: pointer;\r\n    max-width: 200px;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv.button-class:hover {\r\n    background-color: #254b63;\r\n}\r\n\r\n.text-input {\r\n    border-radius: 5px;\r\n    border: solid white 1px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n\r\nlabel {\r\n    font-size: 22px;\r\n    font-family: Verdana;\r\n    font-weight: normal;\r\n    color: #ffffff;\r\n}\r\n\r\ndiv.center-label {\r\n    background-color: #1c394a;\r\n    border: solid white 1px;\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    color: white;\r\n    max-width: 200px;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv.center-label:hover {\r\n    background-color: #254b63;\r\n    cursor: default;\r\n}\r\n\r\ndiv.button-wrapper {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"container\">\r\n        <textarea class=\"form-control\" \r\n            rows=\"20\" onclick=\"this.select()\"\r\n            [(ngModel)]=\"text\">\r\n            Enter your text here\r\n        </textarea>\r\n        <div class=\"vertical-spacer\"></div>\r\n        <button (click)=\"startReading()\">Start reading</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [style.background-image]=\"getBackgroundImage()\">\r\n  <div class=\"container button-wrapper\">\r\n    <div class=\"button-class\" [(colorPicker)]=\"textBackgroundColor\">background color</div>\r\n    <div class=\"button-class\" [(colorPicker)]=\"textColor\">text color</div>\r\n    <label>Backround image: </label>\r\n    <input class=\"text-input\" type=\"text\" [(ngModel)]=\"backgroundImage\" onclick=\"this.select()\">\r\n  </div>\r\n\r\n  <div class=\"container text-wrapper\" [style.background]=\"textBackgroundColor\">\r\n    <p [style.color]=\"textColor\">\r\n      {{textList[current]}}\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"vertical-spacer\"></div>\r\n\r\n  <div class=\"container button-wrapper\">\r\n    <div class=\"prev-button button-class\" (click)=\"previous()\">previous</div>\r\n    <div class=\"center-label\">{{current + 1}} out of {{textList.length}}</div>\r\n    <div class=\"right-button button-class\" (click)=\"next()\">next</div>\r\n  </div>\r\n\r\n  <youtube-player [videoId]=\"id\">\r\n  </youtube-player>\r\n</div>"

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[553]);
//# sourceMappingURL=main.bundle.js.map