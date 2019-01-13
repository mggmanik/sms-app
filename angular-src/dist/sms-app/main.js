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

/***/ "./src/app/add-contact/add-contact.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-contact/add-contact.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3QvYWRkLWNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRkLWNvbnRhY3QvYWRkLWNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/add-contact/add-contact.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-contact/add-contact.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 d-flex justify-content-center\">\n  <form (submit)=\"onAddToContactList(addToContactForm)\" #addToContactForm=\"ngForm\" class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input\n        required\n        name=\"firstName\"\n        type=\"text\"\n        ngModel\n        matInput\n        placeholder=\"First Name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input\n        required\n        name=\"lastName\"\n        type=\"text\"\n        ngModel\n        matInput\n        placeholder=\"Last Name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input\n        required\n        maxlength=\"10\"\n        name=\"phoneNumber\"\n        type=\"text\"\n        ngModel\n        #phoneNumberInput=\"ngModel\"\n        matInput\n        placeholder=\"Phone Number\">\n      <mat-error *ngIf=\"phoneNumberInput.invalid\">Please enter a valid Phone Number!</mat-error>\n    </mat-form-field>\n\n    <hr>\n\n    <div class=\"float-right\">\n      <button mat-button color=\"primary\" type=\"submit\">Add</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/add-contact/add-contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-contact/add-contact.component.ts ***!
  \******************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(contactService) {
        this.contactService = contactService;
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.onAddToContactList = function (form) {
        if (form.invalid) {
            return;
        }
        var now = new Date();
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"](form.value.firstName, form.value.lastName, form.value.phoneNumber, now);
        this.contactService.onAddContacts(this.contact).subscribe();
        form.resetForm();
    };
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact',
            template: __webpack_require__(/*! ./add-contact.component.html */ "./src/app/add-contact/add-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-contact.component.css */ "./src/app/add-contact/add-contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// A separate module for Angular Material Components used in the Application
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



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
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/app/add-contact/add-contact.component.ts");
/* harmony import */ var _view_contacts_view_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-contacts/view-contacts.component */ "./src/app/view-contacts/view-contacts.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "./src/app/contact-info/contact-info.component.ts");
/* harmony import */ var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-message/send-message.component */ "./src/app/send-message/send-message.component.ts");
/* harmony import */ var _list_messages_list_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-messages/list-messages.component */ "./src/app/list-messages/list-messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'view-contacts', pathMatch: 'full' },
    { path: 'view-contacts', component: _view_contacts_view_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ViewContactsComponent"] },
    { path: 'add-contact', component: _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_2__["AddContactComponent"] },
    { path: 'contact/:id', component: _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__["ContactInfoComponent"] },
    { path: 'send-message/:id', component: _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_5__["SendMessageComponent"] },
    { path: 'messages', component: _list_messages_list_messages_component__WEBPACK_IMPORTED_MODULE_6__["ListMessagesComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/app/add-contact/add-contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_contacts_view_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-contacts/view-contacts.component */ "./src/app/view-contacts/view-contacts.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "./src/app/contact-info/contact-info.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./send-message/send-message.component */ "./src/app/send-message/send-message.component.ts");
/* harmony import */ var _list_messages_list_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-messages/list-messages.component */ "./src/app/list-messages/list-messages.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error/error-interceptor */ "./src/app/error/error-interceptor.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_7__["AddContactComponent"],
                _view_contacts_view_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ViewContactsComponent"],
                _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoComponent"],
                _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_12__["SendMessageComponent"],
                _list_messages_list_messages_component__WEBPACK_IMPORTED_MODULE_13__["ListMessagesComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _error_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-info/contact-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-info/contact-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 600px;\n}\n\n.example-header-image {\n  background-size: cover;\n}\n\n.image{\n  height: 400px;\n  width: 400px;\n  background-image: url('avatar.png');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBOEM7RUFDOUMsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWFnZXtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hdmF0YXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-info/contact-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-info/contact-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 d-flex justify-content-center\">\n  <mat-card class=\"example-card\" *ngIf=\"contact\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\">\n        <mat-icon mat-list-icon>account_circle</mat-icon>\n      </div>\n      <mat-card-title>{{contact?.firstName}}</mat-card-title>\n    </mat-card-header>\n    <div class=\"image\"></div>\n    <mat-card-content>\n      <p>\n        Name: {{contact?.firstName}} {{contact?.lastName}}\n      </p>\n      <p>\n        Phone Number: {{contact?.phoneNumber}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button routerLink=\"/send-message/{{contact._id}}\">SEND MESSAGE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact-info/contact-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-info/contact-info.component.ts ***!
  \********************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
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



var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent(contactService, route) {
        this.contactService = contactService;
        this.route = route;
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.contactId = paramMap.get('id');
            _this.contactService.getContact(_this.contactId).subscribe(function (result) {
                _this.contact = result.contact;
            });
        });
    };
    ContactInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-info',
            template: __webpack_require__(/*! ./contact-info.component.html */ "./src/app/contact-info/contact-info.component.html"),
            styles: [__webpack_require__(/*! ./contact-info.component.css */ "./src/app/contact-info/contact-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());



/***/ }),

/***/ "./src/app/error/error-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/error/error-interceptor.ts ***!
  \********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Check for errors if any HTTP request brings error with it and displays as a dialog on the screen
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMessage = 'An Unknown Error Occurred!';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            _this.dialog.open(_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{data.message}}</p>\n</div>\n<div>\n  <button color=\"primary\" mat-raised-button mat-dialog-close>Okay</button>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span routerLink=\"/view-contacts\">OTP App</span>\n    <div class=\"m-4\">\n      <button mat-button routerLink=\"/view-contacts\">Contacts</button>\n      <button mat-button routerLink=\"/messages\">Messages</button>\n    </div>\n    <span class=\"example-spacer\"></span>\n    <button mat-button routerLink=\"/add-contact\">Add Contact</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-messages/list-messages.component.css":
/*!***********************************************************!*\
  !*** ./src/app/list-messages/list-messages.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: grey;\n}\n\n.time-align{\n  width: 300px;\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tZXNzYWdlcy9saXN0LW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1tZXNzYWdlcy9saXN0LW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50aW1lLWFsaWdue1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/list-messages/list-messages.component.html":
/*!************************************************************!*\
  !*** ./src/app/list-messages/list-messages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 d-flex justify-content-center\">\n  <mat-list *ngIf=\"messages?.length>0; else empty\">\n    <h3 mat-subheader>Messages</h3>\n    <mat-list-item *ngFor=\"let message of messages\" (press)=\"onDelete(message._id)\">\n      <mat-icon mat-list-icon>speaker_notes</mat-icon>\n      <h4 mat-line>{{message.recipient.firstName}} {{message.recipient.lastName}}</h4>\n      <p mat-line>OTP: {{message.OTP}}</p>\n      <p class=\"time-align\">{{message.date | date:'shortTime'}}</p>\n    </mat-list-item>\n  </mat-list>\n\n  <ng-template #empty>\n    <p>No Messages to Display!</p>\n  </ng-template>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list-messages/list-messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-messages/list-messages.component.ts ***!
  \**********************************************************/
/*! exports provided: ListMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMessagesComponent", function() { return ListMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListMessagesComponent = /** @class */ (function () {
    function ListMessagesComponent(messageService) {
        this.messageService = messageService;
    }
    ListMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.onGetMessages().subscribe(function (result) {
            _this.messages = _this.messageService.sortMessages(result.messages);
        });
    };
    // onLong press delete messages
    ListMessagesComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.messageService.deleteMessage(id).subscribe(function () {
            _this.messages = _this.messages.filter(function (message) { return message._id !== id; });
        });
    };
    ListMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-messages',
            template: __webpack_require__(/*! ./list-messages.component.html */ "./src/app/list-messages/list-messages.component.html"),
            styles: [__webpack_require__(/*! ./list-messages.component.css */ "./src/app/list-messages/list-messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], ListMessagesComponent);
    return ListMessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
// Contact Model
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, phoneNumber, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
// Message Model
var Message = /** @class */ (function () {
    function Message(OTP, recipient, date) {
        this.OTP = OTP;
        this.recipient = recipient;
        this.date = date;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/send-message/send-message.component.css":
/*!*********************************************************!*\
  !*** ./src/app/send-message/send-message.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.details {\n  text-align: center;\n}\n\n.details p {\n  color: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tZXNzYWdlL3NlbmQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW1lc3NhZ2Uvc2VuZC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzIHAge1xuICBjb2xvcjogZ3JleTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/send-message/send-message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/send-message/send-message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 d-flex justify-content-center\">\n\n  <form (submit)=\"onSendMessage(sendForm)\" #sendForm=\"ngForm\" class=\"example-form\">\n    <div class=\"details\">\n      <h3>{{contact?.firstName}}</h3>\n      <p>{{contact?.phoneNumber}}</p>\n    </div>\n\n    <hr>\n\n    <mat-form-field class=\"example-full-width\">\n      <input\n        required\n        name=\"message\"\n        type=\"text\"\n        matInput\n        value=\"Hi. Your OTP is: {{OTP}}\">\n    </mat-form-field>\n\n    <div class=\"float-right\">\n      <button mat-button color=\"primary\" type=\"submit\">Send</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/send-message/send-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/send-message/send-message.component.ts ***!
  \********************************************************/
/*! exports provided: SendMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageComponent", function() { return SendMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendMessageComponent = /** @class */ (function () {
    function SendMessageComponent(contactService, messageService, route, router) {
        this.contactService = contactService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.OTP = Math.floor(100000 + Math.random() * 900000);
    }
    SendMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.contactId = paramMap.get('id');
            _this.contactService.getContact(_this.contactId).subscribe(function (result) {
                _this.contact = result.contact;
                var now = new Date();
                _this.message = new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"](_this.OTP, _this.contact, now);
            });
        });
    };
    SendMessageComponent.prototype.onSendMessage = function () {
        var _this = this;
        this.messageService.onSendMessage(this.message).subscribe(function () {
            _this.router.navigate(['/view-contacts']);
        });
    };
    SendMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-message',
            template: __webpack_require__(/*! ./send-message.component.html */ "./src/app/send-message/send-message.component.html"),
            styles: [__webpack_require__(/*! ./send-message.component.css */ "./src/app/send-message/send-message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SendMessageComponent);
    return SendMessageComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' })
};
var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/contact';
// Communicates with the node.js server to do the respective CRUD on Contacts.
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.onAddContacts = function (contact) {
        return this.http.post(BACKEND_URL, contact, httpOptions);
    };
    ContactService.prototype.onViewContacts = function () {
        return this.http.get(BACKEND_URL);
    };
    ContactService.prototype.getContact = function (id) {
        return this.http.get(BACKEND_URL + "/" + id);
    };
    ContactService.prototype.deleteContact = function (id) {
        return this.http.delete(BACKEND_URL + "/" + id, httpOptions);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-Type': 'application/json' })
};
var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/message';
// Communicates with the node.js server to do the respective CRUD on Messages.
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.onSendMessage = function (message) {
        return this.http.post(BACKEND_URL, message, httpOptions);
    };
    MessageService.prototype.onGetMessages = function () {
        return this.http.get(BACKEND_URL);
    };
    MessageService.prototype.sortMessages = function (messages) {
        messages.sort(function (message1, message2) {
            if (message1.date > message2.date) {
                return -1;
            }
            else if (message1.date < message2.date) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.messages = messages;
        return this.messages;
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http.delete(BACKEND_URL + "/" + id, httpOptions);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/view-contacts/view-contacts.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view-contacts/view-contacts.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-list-item:hover {\n  background-color: ghostwhite;\n}\n\np {\n  color: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jb250YWN0cy92aWV3LWNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC92aWV3LWNvbnRhY3RzL3ZpZXctY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pY29uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxucCB7XG4gIGNvbG9yOiBncmV5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/view-contacts/view-contacts.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-contacts/view-contacts.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 d-flex justify-content-center\">\n  <mat-list *ngIf=\"contacts?.length>0; else empty\">\n    <h3 mat-subheader>Contacts</h3>\n    <mat-list-item *ngFor=\"let contact of contacts\" routerLink=\"/contact/{{contact._id}}\"\n                   (press)=\"onDelete(contact._id)\">\n      <mat-icon mat-list-icon>account_circle</mat-icon>\n      <h4 mat-line>{{contact.firstName}} {{contact.lastName}}</h4>\n      <p mat-line> {{contact.date | date:'mediumDate'}} </p>\n    </mat-list-item>\n  </mat-list>\n\n  <ng-template #empty>\n    <p>No Contacts to Display!</p>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/view-contacts/view-contacts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-contacts/view-contacts.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactsComponent", function() { return ViewContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewContactsComponent = /** @class */ (function () {
    function ViewContactsComponent(contactService) {
        this.contactService = contactService;
    }
    ViewContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.onViewContacts().subscribe(function (result) {
            _this.contacts = result.contacts;
        });
    };
    // onLong press delete contacts
    ViewContactsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.contactService.deleteContact(id).subscribe(function () {
            _this.contacts = _this.contacts.filter(function (contact) { return contact._id !== id; });
        });
    };
    ViewContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-contacts',
            template: __webpack_require__(/*! ./view-contacts.component.html */ "./src/app/view-contacts/view-contacts.component.html"),
            styles: [__webpack_require__(/*! ./view-contacts.component.css */ "./src/app/view-contacts/view-contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ViewContactsComponent);
    return ViewContactsComponent;
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
    production: false,
    apiUrl: 'api'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/manik/Desktop/otp-app/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map