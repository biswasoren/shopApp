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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gst_add_gst_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gst-add/gst-add.component */ "./src/app/gst-add/gst-add.component.ts");
/* harmony import */ var _gst_get_gst_get_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gst-get/gst-get.component */ "./src/app/gst-get/gst-get.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/register.component */ "./src/app/login/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'shop/create',
        component: _gst_add_gst_add_component__WEBPACK_IMPORTED_MODULE_2__["GstAddComponent"]
    },
    {
        path: '',
        component: _gst_get_gst_get_component__WEBPACK_IMPORTED_MODULE_3__["GstGetComponent"]
    },
    {
        path: 'user/create',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__["UserAddComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'register',
        component: _login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align:center;\n}\nh2{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5oMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br />\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _app_business_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/business.service */ "./src/app/business.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router, bs) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.bs = bs;
        this.title = 'angular7crud';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs
            .getVersion()
            .subscribe(function (data) {
            _this.version = data;
            console.log(_this.version);
        });
    };
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_business_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gst_add_gst_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gst-add/gst-add.component */ "./src/app/gst-add/gst-add.component.ts");
/* harmony import */ var _gst_get_gst_get_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gst-get/gst-get.component */ "./src/app/gst-get/gst-get.component.ts");
/* harmony import */ var _gst_edit_gst_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gst-edit/gst-edit.component */ "./src/app/gst-edit/gst-edit.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/register.component */ "./src/app/login/register.component.ts");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./business.service */ "./src/app/business.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _gst_add_gst_add_component__WEBPACK_IMPORTED_MODULE_8__["GstAddComponent"],
                _gst_get_gst_get_component__WEBPACK_IMPORTED_MODULE_9__["GstGetComponent"],
                _gst_edit_gst_edit_component__WEBPACK_IMPORTED_MODULE_10__["GstEditComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__["UserAddComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _login_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            providers: [_business_service__WEBPACK_IMPORTED_MODULE_14__["Service"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business.service.ts":
/*!*************************************!*\
  !*** ./src/app/business.service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Service = /** @class */ (function () {
    function Service(http, cs) {
        this.http = http;
        this.cs = cs;
        this.uri = 'http://localhost:4000/shops';
        this.versionuri = '/getversion';
    }
    Service.prototype.login = function (userName, password) {
        var _this = this;
        console.log(userName, password);
        var obj = {
            userName: userName,
            password: password,
        };
        this.http.post(this.uri + "/login", obj)
            .subscribe(function (res) {
            console.log(res);
            if (Object.values(res) && Object.values(res).length > 0 && Object.values(res)[0].password === password) {
                var date = new Date();
                var minutes = 30;
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                _this.cs.set('userName', res[0].userName, date);
                window.location.href = '/';
            }
            else {
                alert('Incorrect Username/Password');
            }
        });
    };
    Service.prototype.register = function (value) {
        console.log(value);
    };
    Service.prototype.addShop = function (shopName, shopMail, shopAddress, user) {
        var obj = {
            shopName: shopName,
            shopMail: shopMail,
            shopAddress: shopAddress,
            user: user,
        };
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return window.location.href = '/'; });
    };
    Service.prototype.getBusinesses = function () {
        return this
            .http
            .get("" + this.uri);
    };
    Service.prototype.getVersion = function () {
        return this
            .http
            .get("" + this.versionuri);
    };
    Service.prototype.editBusiness = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    Service.prototype.updateBusiness = function (person_name, business_name, business_gst_number, id) {
        var obj = {
            person_name: person_name,
            business_name: business_name,
            business_gst_number: business_gst_number
        };
        this
            .http
            .post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    Service.prototype.deleteBusiness = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/gst-add/gst-add.component.css":
/*!***********************************************!*\
  !*** ./src/app/gst-add/gst-add.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dzdC1hZGQvZ3N0LWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gst-add/gst-add.component.html":
/*!************************************************!*\
  !*** ./src/app/gst-add/gst-add.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Step 1: Add Shop </h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\">\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name/>\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Mail </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"mail\" #mail />\n      </div>\n      <div *ngIf=\"angForm.controls['mail'].invalid && (angForm.controls['mail'].dirty || angForm.controls['mail'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['mail'].errors.required\">\n          Mail is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n      <div formArrayName=\"address\" *ngFor=\"let item of angForm.controls['address'].controls; let i = index\">\n      <div [formGroupName]=\"i\">\n          <label class=\"col-md-4\">Address {{ i+1 }}</label>\n          <div class=\"form-group\">\n              <label class=\"col-md-4\" style=\"padding-left: 40px;\">Plot Number </label>\n              <input type=\"text\" class=\"form-control\" style=\"margin-left: 40px !important; width: calc(100% - 40px);\" formControlName=\"plotno\" #plotno />\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\" style=\"padding-left: 40px;\">Locality </label>\n                <input type=\"text\" class=\"form-control\" style=\"margin-left: 40px !important; width: calc(100% - 40px);\" formControlName=\"locality\" #locality />\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"col-md-4\" style=\"padding-left: 40px;\">PINCODE </label>\n                  <input type=\"text\" class=\"form-control\" style=\"margin-left: 40px !important; width: calc(100% - 40px);\" formControlName=\"pincode\" #pincode />\n                </div>\n      </div>\n      </div>\n      <button class=\"btn btn-primary mat-mini-fab\" style=\"margin-left: 40px !important\" (click)=\"addAddress()\">+</button>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"goToStep2()\"\n        [disabled]=\"angForm.pristine || angForm.invalid\" \n        class=\"btn btn-primary\">Add Sub-Users</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gst-add/gst-add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gst-add/gst-add.component.ts ***!
  \**********************************************/
/*! exports provided: GstAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstAddComponent", function() { return GstAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GstAddComponent = /** @class */ (function () {
    function GstAddComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.createForm();
    }
    GstAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: this.fb.array([this.createItem()])
        });
    };
    GstAddComponent.prototype.createItem = function () {
        return this.fb.group({
            plotno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    GstAddComponent.prototype.createUser = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    GstAddComponent.prototype.addAddress = function () {
        var addresses = this.angForm.controls.address;
        addresses.push(this.fb.group({
            plotno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }));
    };
    GstAddComponent.prototype.addUser = function () {
        var users = this.angForm.controls.user;
        users.push(this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }));
    };
    GstAddComponent.prototype.goToStep2 = function () {
        this.router.navigateByUrl('/user/create', { state: {
                shopName: this.angForm.controls.name.value,
                shopMail: this.angForm.controls.mail.value,
                shopAddress: this.angForm.controls.address.value
            } });
    };
    GstAddComponent.prototype.ngOnInit = function () {
    };
    GstAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gst-add',
            template: __webpack_require__(/*! ./gst-add.component.html */ "./src/app/gst-add/gst-add.component.html"),
            styles: [__webpack_require__(/*! ./gst-add.component.css */ "./src/app/gst-add/gst-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GstAddComponent);
    return GstAddComponent;
}());



/***/ }),

/***/ "./src/app/gst-edit/gst-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/gst-edit/gst-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dzdC1lZGl0L2dzdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gst-edit/gst-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/gst-edit/gst-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Person Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"person_name\" #person_name [(ngModel)] = \"business.person_name\" />\n      </div>\n      <div *ngIf=\"angForm.controls['person_name'].invalid && (angForm.controls['person_name'].dirty || angForm.controls['person_name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['person_name'].errors.required\">\n          Person Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Business Name </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"business_name\" #business_name [(ngModel)] = \"business.business_name\" />\n      </div>\n      <div *ngIf=\"angForm.controls['business_name'].invalid && (angForm.controls['business_name'].dirty || angForm.controls['business_name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['business_name'].errors.required\">\n          Person Business is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Business GST Number </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"business_gst_number\" #business_gst_number [(ngModel)] = \"business.business_gst_number\" />\n      </div>\n      <div *ngIf=\"angForm.controls['business_gst_number'].invalid && (angForm.controls['business_gst_number'].dirty || angForm.controls['business_gst_number'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['business_gst_number'].errors.required\">\n          Business GST Number is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"updateBusiness(person_name.value, business_name.value, business_gst_number.value)\"\n        [disabled]=\"angForm.invalid\" \n        class=\"btn btn-primary\">Update Business</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gst-edit/gst-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/gst-edit/gst-edit.component.ts ***!
  \************************************************/
/*! exports provided: GstEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstEditComponent", function() { return GstEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business.service */ "./src/app/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GstEditComponent = /** @class */ (function () {
    function GstEditComponent(route, router, bs, fb) {
        this.route = route;
        this.router = router;
        this.bs = bs;
        this.fb = fb;
        this.business = {};
        this.createForm();
    }
    GstEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            person_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            business_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            business_gst_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    GstEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.bs.editBusiness(params['id']).subscribe(function (res) {
                _this.business = res;
            });
        });
    };
    GstEditComponent.prototype.updateBusiness = function (person_name, business_name, business_gst_number) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']);
            _this.router.navigate(['business']);
        });
    };
    GstEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gst-edit',
            template: __webpack_require__(/*! ./gst-edit.component.html */ "./src/app/gst-edit/gst-edit.component.html"),
            styles: [__webpack_require__(/*! ./gst-edit.component.css */ "./src/app/gst-edit/gst-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _business_service__WEBPACK_IMPORTED_MODULE_3__["Service"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], GstEditComponent);
    return GstEditComponent;
}());



/***/ }),

/***/ "./src/app/gst-get/gst-get.component.css":
/*!***********************************************!*\
  !*** ./src/app/gst-get/gst-get.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dzdC1nZXQvZ3N0LWdldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gst-get/gst-get.component.html":
/*!************************************************!*\
  !*** ./src/app/gst-get/gst-get.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light\">\n        <div class=\"container-fluid\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a routerLink=\"shop/create\" class=\"nav-link\" routerLinkActive=\"active\">\n                Create Shop\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"business\" class=\"nav-link\" routerLinkActive=\"active\">\n                Shops\n              </a>\n            </li> \n          </ul>\n        </div>\n    </nav>\n<table class=\"table table-hover\">\n  <thead style=\"background-color: #ffcccc;\">\n  <tr>\n      <td>Shop Name</td>\n      <td>Shop Email</td>\n      <td><div style=\"display: flex;\">\n      <div style=\"margin-right: 200px\">Address</div>\n      <div>Sub-Users</div>\n    </div>\n    </td>\n      <td>Actions</td>\n  </tr>\n  <tr>\n        <td></td>\n        <td></td>\n        <div style=\"display: flex;\">\n        <div style=\"margin-right: 40px\">\n        <td>Plot number</td>\n        <td>Area</td>\n        <td>PIN</td>\n        </div>\n        <div>\n                <td>Name</td>\n                <td>Email</td>\n        </div>\n        </div>\n        <td></td>\n      </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let shop of shops\">\n          <td>{{ shop.shopName }}</td>\n          <td>{{ shop.shopMail }}</td>\n          <div style=\"display: flex;\">\n          <div style=\"width: 200px; margin-right: 70px;\"><table>\n              <tbody>\n          <tr *ngFor=\"let address of shop.shopAddress\">\n            <td>{{ address.plotno }}</td>\n              <td>{{ address.locality }}</td>\n              <td>{{ address.pincode }}</td>\n          </tr>\n          </tbody>\n        </table>\n    </div>\n    <div>\n        <table>\n                <tbody>\n            <tr *ngFor=\"let user of shop.users\">\n              <td>{{ user.userName }}</td>\n                <td>{{ user.userMail }}</td>\n            </tr>\n            </tbody>\n          </table>\n                    </div>\n                    </div>\n          <td><a [routerLink]=\"['/user/create', shop.shopId]\" class=\"btn btn-primary\">Add More Users</a></td>\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/gst-get/gst-get.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gst-get/gst-get.component.ts ***!
  \**********************************************/
/*! exports provided: GstGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstGetComponent", function() { return GstGetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business.service */ "./src/app/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GstGetComponent = /** @class */ (function () {
    function GstGetComponent(bs, cs) {
        this.bs = bs;
        this.cs = cs;
    }
    GstGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userName = this.cs.get('userName');
        console.log(userName);
        if (userName) {
            this.bs
                .getBusinesses()
                .subscribe(function (data) {
                _this.shops = data;
            });
        }
        else {
            window.location.href = '/login';
        }
    };
    GstGetComponent.prototype.deleteBusiness = function (id) {
        this.bs.deleteBusiness(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    GstGetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gst-get',
            template: __webpack_require__(/*! ./gst-get.component.html */ "./src/app/gst-get/gst-get.component.html"),
            styles: [__webpack_require__(/*! ./gst-get.component.css */ "./src/app/gst-get/gst-get.component.css")]
        }),
        __metadata("design:paramtypes", [_business_service__WEBPACK_IMPORTED_MODULE_2__["Service"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], GstGetComponent);
    return GstGetComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business.service */ "./src/app/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.service = service;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        console.log('Called');
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.service.login(this.f.username.value, this.f.password.value);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _business_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register.component.html":
/*!***********************************************!*\
  !*** ./src/app/login/register.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/register.component.ts":
/*!*********************************************!*\
  !*** ./src/app/login/register.component.ts ***!
  \*********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business.service */ "./src/app/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.service.register(this.registerForm.value);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _business_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-add/user-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-add/user-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYWRkL3VzZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-add/user-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-add/user-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Step 2: Add Sub User </h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div>\n      <label>Shop Details</label>\n      <div>Name of Shop: {{shopName}}</div>\n      <div>Mail of Shop: {{shopMail}}</div>\n      <div *ngFor=\"let ad of shopAddress\">\n        <div>{{ad.plotno}}</div>\n        <div>{{ad.locality}}</div>\n        <div>{{ad.pincode}}</div>\n        </div>\n    </div>\n    <form [formGroup]=\"userForm\">\n      <div class=\"form-group\">\n          <div formArrayName=\"user\" *ngFor=\"let item of userForm.controls['user'].controls; let i = index\">\n          <div [formGroupName]=\"i\">\n              <label class=\"col-md-4\">Sub User {{ i+1 }}</label>\n              <div class=\"form-group\">\n                  <label class=\"col-md-4\" style=\"padding-left: 40px;\">Name </label>\n                  <input type=\"text\" class=\"form-control\" style=\"margin-left: 40px !important; width: calc(100% - 40px);\" formControlName=\"name\" #name />\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-4\" style=\"padding-left: 40px;\">Email </label>\n                    <input type=\"text\" class=\"form-control\" style=\"margin-left: 40px !important; width: calc(100% - 40px);\" formControlName=\"email\" #email />\n                  </div>\n          </div>\n          </div>\n          <button class=\"btn btn-primary mat-mini-fab\" style=\"margin-left: 40px !important\" (click)=\"addUser()\">+</button>\n          </div>\n      <div class=\"form-group\">\n        <button routerLink=\"/user/create\"\n        [disabled]=\"userForm.pristine || userForm.invalid || !shopName\" \n        class=\"btn btn-primary\"\n        (click)=\"addUserAndShop(shopName, shopMail, shopAddress)\">Create Shop</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-add/user-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-add/user-add.component.ts ***!
  \************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business.service */ "./src/app/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(fb, bs, router, activatedRoute) {
        this.fb = fb;
        this.bs = bs;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.createForm();
    }
    UserAddComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            user: this.fb.array([this.createUser()]),
        });
    };
    UserAddComponent.prototype.createItem = function () {
        return this.fb.group({
            plotno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    UserAddComponent.prototype.createUser = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    UserAddComponent.prototype.addUserAndShop = function (shopName, shopMail, shopAddress) {
        this.bs.addShop(shopName, shopMail, shopAddress, this.userForm.controls.user.value);
    };
    UserAddComponent.prototype.addUser = function () {
        var users = this.userForm.controls.user;
        users.push(this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }));
    };
    UserAddComponent.prototype.ngOnInit = function () {
        console.log(history.state);
        this.shopName = history.state.shopName;
        this.shopMail = history.state.shopMail;
        this.shopAddress = history.state.shopAddress;
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _business_service__WEBPACK_IMPORTED_MODULE_3__["Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserAddComponent);
    return UserAddComponent;
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

module.exports = __webpack_require__(/*! /home/biswa/myProjects/Angular7CRUDExample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map