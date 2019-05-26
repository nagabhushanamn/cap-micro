(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/product-form/product-form.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _products_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-resolver.service */ "./src/app/products-resolver.service.ts");
/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/product-resolver.service.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/product-view/product-view.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _de_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./de-guard.service */ "./src/app/de-guard.service.ts");
/* harmony import */ var _role_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./role-guard.service */ "./src/app/role-guard.service.ts");














var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'all',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
        resolve: {
            products: _products_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ProductsResolverService"]
        },
        canActivateChild: [_role_guard_service__WEBPACK_IMPORTED_MODULE_13__["RoleGuardService"]],
        children: [
            {
                path: 'view/:prodId',
                component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_9__["ProductViewComponent"],
                resolve: {
                    product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__["ProductResolverService"]
                }
            },
            {
                path: 'edit/:prodId',
                component: _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
                resolve: {
                    product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__["ProductResolverService"]
                }
            },
        ]
    },
    {
        path: 'new',
        component: _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        canDeactivate: [_de_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeGuardService"]]
    },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <app-navbar [title]=\"title\"></app-navbar>\n\n  <hr />\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"all\">View-All</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"new\">Add-New</a>\n    </li>\n  </ul>\n  <hr />\n\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PM-v1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/product-form/product-form.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/product-view/product-view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_11__["ProductFormComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_13__["ProductViewComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                // TableModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // check for access token, if exist
        // if (sessionStorage.getItem("access-token")) {
        //   return true
        // } else {
        //   this.router.navigate(['/login'])
        //   return false;
        // }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/de-guard.service.ts":
/*!*************************************!*\
  !*** ./src/app/de-guard.service.ts ***!
  \*************************************/
/*! exports provided: DeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeGuardService", function() { return DeGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeGuardService = /** @class */ (function () {
    function DeGuardService() {
    }
    DeGuardService.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return confirm("Are you sure?");
    };
    DeGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeGuardService);
    return DeGuardService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello, CG!</h1>\n    <hr class=\"my-4\" />\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn Angular..</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button *ngIf=\"!status\" (click)=\"handleLogin()\">login</button>\n  <div *ngIf=\"status\">You r in..</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.status = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleLogin = function () {
        //..
        sessionStorage.setItem('access-token', "ada4s54sd675sd587o56sda58d4");
        this.status = "Logged in..";
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-light bg-info\">\n  <a class=\"navbar-brand\" href=\"/\">{{title}}</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-form/custom-validators.ts":
/*!***************************************************!*\
  !*** ./src/app/product-form/custom-validators.ts ***!
  \***************************************************/
/*! exports provided: badWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badWord", function() { return badWord; });
var badWords = ["shit"];
function badWord(control) {
    var value = control.value;
    if (badWords.includes(value)) {
        return { bad: true };
    }
    else {
        return null;
    }
}
;


/***/ }),

/***/ "./src/app/product-form/product-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-form/product-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-7\">\n      <div class=\"card\">\n        <div class=\"card-header\">Product Form</div>\n        <div class=\"card-body\">\n          <!--\n          <hr />\n          <pre>\n            {{productForm.value|json}}\n          </pre>\n          <hr />\n          <pre>\n            is pristine : {{productForm.pristine}}\n            is dirty    : {{productForm.dirty}}\n\n            is valid    : {{productForm.valid}}\n            is invalid  : {{productForm.invalid}}\n\n            is touched  : {{productForm.touched}}\n            is untouched: {{productForm.untouched}}\n         </pre>\n         <hr />\n          <pre>\n            is pristine : {{productForm.get('price').pristine}}\n            is dirty    : {{productForm.get('price').dirty}}\n\n            is valid    : {{productForm.get('price').valid}}\n            is invalid  : {{productForm.get('price').invalid}}\n\n            is touched  : {{productForm.get('price').touched}}\n            is untouched: {{productForm.get('price').untouched}}\n         </pre>\n\n         <hr />\n\n        -->\n          <form [formGroup]=\"productForm\"  (submit)=\"handleForm($event)\">\n            <input type=\"hidden\" formControlName=\"id\" />\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input class=\"form-control\" formControlName=\"name\" />\n              <!--\n              <div class=\"text-danger\" *ngIf=\"productForm.get('name').touched\">\n                <div *ngIf=\"productForm.get('name').errors?.required\">Name is Required</div>\n                <div *ngIf=\"productForm.get('name').errors?.minlength\"> > 3 chars</div>\n              </div>\n              -->\n              <div class=\"text-danger\">{{productFormErrors.name}}</div>\n            </div>\n            <div class=\"form-group\">\n              <label>Price</label>\n              <input class=\"form-control\" formControlName=\"price\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Image</label>\n              <input class=\"form-control\" formControlName=\"image\" />\n              <div *ngIf=\"productForm.get('image').errors?.required\" class=\"text-danger\">Image is Required</div>\n            </div>\n            <div class=\"form-group\">\n              <label>Can Buy?</label>\n              <input (click)=\"handleCanBuy($event)\" type=\"checkbox\" class=\"form-control\" formControlName=\"canBuy\">\n            </div>\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea class=\"form-control\" formControlName=\"description\"></textarea>\n              <div *ngIf=\"productForm.get('description').errors?.bad\" class=\"text-danger\">No bad words in description</div>\n            </div>\n            <button [disabled]=\"productForm.invalid\" class=\"btn btn-dark\">save</button>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-form/product-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-form/product-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/product-form/product-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-form/product-form.component.ts ***!
  \********************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-validators */ "./src/app/product-form/custom-validators.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(fb, productsService, router, route) {
        this.fb = fb;
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.productFormErrors = {};
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.productForm = new FormGroup({
        //   name: new FormControl(''),
        //   price: new FormControl(0)
        // });
        // -- OR --
        this.productForm = this.fb.group({
            id: '',
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            canBuy: [false],
            image: [''],
            description: ['', _custom_validators__WEBPACK_IMPORTED_MODULE_4__["badWord"]]
        });
        var nameControl = this.productForm.get('name');
        nameControl.statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(3000))
            .subscribe(function (status) {
            // console.log(status)
            // if (nameControl.touched) {
            if (status === 'INVALID') {
                if (nameControl.errors.required) {
                    _this.productFormErrors.name = "Name is required";
                }
                if (nameControl.errors.minlength) {
                    _this.productFormErrors.name = "Name must be > 3 chars";
                }
            }
            if (status === 'VALID') {
                delete _this.productFormErrors.name;
                // }
            }
        });
        this.productForm.get('name').valueChanges
            .subscribe(function (value) {
            // console.log(value)
        });
        // this.route.params.subscribe(params => {
        //   this.productsService.loadProduct(params.prodId)
        //     .subscribe(response => {
        //       this.productForm.patchValue(response)
        //     })
        // })
        this.route.data
            .subscribe(function (data) {
            if (data.product)
                _this.productForm.patchValue(data.product);
        });
    };
    ProductFormComponent.prototype.handleCanBuy = function (event) {
        var bo = this.productForm.get('canBuy').value;
        var imgControl = this.productForm.get('image');
        if (!bo) {
            imgControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            imgControl.clearValidators();
        }
        imgControl.updateValueAndValidity();
    };
    ProductFormComponent.prototype.handleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var productModel = this.productForm.value;
        if (productModel.id)
            this.productsService.updateProduct(productModel)
                .subscribe(function (response) {
                _this.router.navigate(['/all']);
            });
        else {
            delete productModel.id;
            this.productsService.saveProduct(productModel)
                .subscribe(function (response) {
                _this.router.navigate(['/all']);
            });
        }
    };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.scss */ "./src/app/product-form/product-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" *ngIf=\"products.length===0\">No products</div>\n\n  <!--\n  <p-table [value]=\"products\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Price</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-product>\n      <tr>\n        <td>{{product.name}}</td>\n        <td>{{product.price}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  -->\n\n  <div class=\"card\" *ngIf=\"products.length!==0\">\n    <div class=\"card-header\">All Products</div>\n    <div class=\"card-body\">\n      <span class=\"badge badge-info\">{{loadingMessage}}</span>\n      <table class=\"table table-bordered table-sm\">\n        <tbody>\n          <tr *ngFor=\"let product of products\">\n            <!-- <td>{{product.id}}</td> -->\n            <td><a [routerLink]=\"['/all/view',product.id]\">{{product.name}}</a></td>\n            <td>{{product.price|currency:'INR'}}</td>\n            <td><a [routerLink]=\"['/all/edit',product.id]\"><i class=\"fa fa-edit\"></i></a></td>\n            <td><a href (click)=\"deleteProduct(product.id,$event)\"><i class=\"fa fa-trash\"></i></a></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <hr />\n  <router-outlet></router-outlet>\n  <hr />\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductListComponent = /** @class */ (function () {
    // productsService = null;
    // constructor(productsService: ProductsService) {
    //   this.productsService = productsService;
    // }
    // -- OR --
    function ProductListComponent(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.products = [];
        this.loadingMessage = '';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        // this.products = [
        //   { id: 1, name: "item-1", price: 1000.00 },
        //   { id: 2, name: "item-2", price: 2000.00 }
        // ]
        var _this = this;
        // this.products = this.productsService.loadProducts(); // pull / sync
        // let promise = this.productsService.loadProducts()
        // this.loadingMessage = "Loading products...";
        // promise.then((response: any) => {
        //   this.loadingMessage = "";
        //   this.products = response;
        // })
        // let stream = this.productsService.loadProducts();
        // stream.subscribe(
        //   (response: any) => {
        //     this.products = response;
        //   }
        // )
        this.route.data
            .subscribe(function (data) {
            _this.products = data.products;
        });
    };
    ProductListComponent.prototype.deleteProduct = function (id, event) {
        var _this = this;
        event.preventDefault();
        this.productsService.deleteProduct(id)
            .subscribe(function (response) {
            _this.products = _this.products.filter(function (prod) { return prod.id !== id; });
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-resolver.service.ts":
/*!*********************************************!*\
  !*** ./src/app/product-resolver.service.ts ***!
  \*********************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");



var ProductResolverService = /** @class */ (function () {
    function ProductResolverService(productsService) {
        this.productsService = productsService;
    }
    ProductResolverService.prototype.resolve = function (route) {
        var id = route.params['prodId'];
        return this.productsService.loadProduct(id);
    };
    ProductResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductResolverService);
    return ProductResolverService;
}());



/***/ }),

/***/ "./src/app/product-view/product-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-view/product-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-3 col-sm-3 col-md-3\">\n      <img [src]=\"product.image\" class=\"img-fluid\" />\n    </div>\n    <div class=\"col-9 col-sm-9 col-md-9\">\n      <h5>{{product.name|uppercase}}</h5>\n      <h6>{{product.price|currency:'INR':undefined:'4.1-2'}}</h6>\n      <p>{{product.description}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-view/product-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-view/product-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/product-view/product-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-view/product-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(route) {
        this.route = route;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.product = data.product;
        });
    };
    ProductViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.scss */ "./src/app/product-view/product-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/products-resolver.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products-resolver.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsResolverService", function() { return ProductsResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");



var ProductsResolverService = /** @class */ (function () {
    function ProductsResolverService(productsService) {
        this.productsService = productsService;
    }
    ProductsResolverService.prototype.resolve = function () {
        return this.productsService.loadProducts();
    };
    ProductsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductsResolverService);
    return ProductsResolverService;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
        this.apiUrl = "http://localhost:8181/api/products";
    }
    ProductsService.prototype.loadProducts = function () {
        // return [
        //   { id: 1, name: "item-1", price: 1000.00 },
        //   { id: 2, name: "item-2", price: 2000.00 }
        // ]
        //-------------------------------------------------------------
        // way-1 : using Promise API
        //-------------------------------------------------------------
        // let promise = new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     let products = [
        //       { id: 1, name: "item-1", price: 1000.00 },
        //       { id: 2, name: "item-2", price: 2000.00 }
        //     ]
        //     resolve(products) // push / async
        //   }, 3000)
        // });
        // return promise;
        //-------------------------------------------------------------
        //-------------------------------------------------------------
        // way-2 : RxJS
        //-------------------------------------------------------------
        // let stream = new Observable(observer => {
        //   setInterval(() => {
        //     let products = [
        //       { id: 1, name: "item-1", price: 1000.00 },
        //       { id: 2, name: "item-2", price: 2000.00 }
        //     ]
        //     observer.next(products) // push / async
        //   }, 1000);
        // });
        // return stream
        return this._http.get(this.apiUrl);
    };
    ProductsService.prototype.loadProduct = function (prodId) {
        var apiUrl = this.apiUrl + "/" + prodId;
        return this._http.get(apiUrl);
    };
    ProductsService.prototype.saveProduct = function (product) {
        return this._http.post(this.apiUrl, product);
    };
    ProductsService.prototype.updateProduct = function (product) {
        var apiUrl = this.apiUrl + "/" + product.id;
        return this._http.put(apiUrl, product);
    };
    ProductsService.prototype.deleteProduct = function (prodId) {
        var apiUrl = this.apiUrl + "/" + prodId;
        return this._http.delete(apiUrl);
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/role-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/role-guard.service.ts ***!
  \***************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoleGuardService = /** @class */ (function () {
    function RoleGuardService() {
    }
    RoleGuardService.prototype.canActivateChild = function (childRoute, state) {
        return confirm("Do you need to activate child route?");
    };
    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoleGuardService);
    return RoleGuardService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nag-training/git/cap-micro/NG-PM/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map