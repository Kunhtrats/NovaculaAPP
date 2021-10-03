(self["webpackChunkblank"] = self["webpackChunkblank"] || []).push([["src_app_imc_imc_module_ts"],{

/***/ 4215:
/*!*******************************************!*\
  !*** ./src/app/imc/imc-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPageRoutingModule": () => (/* binding */ ImcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _imc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imc.page */ 370);




const routes = [
    {
        path: '',
        component: _imc_page__WEBPACK_IMPORTED_MODULE_0__.ImcPage
    }
];
let ImcPageRoutingModule = class ImcPageRoutingModule {
};
ImcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImcPageRoutingModule);



/***/ }),

/***/ 1365:
/*!***********************************!*\
  !*** ./src/app/imc/imc.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPageModule": () => (/* binding */ ImcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _imc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imc-routing.module */ 4215);
/* harmony import */ var _imc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imc.page */ 370);







let ImcPageModule = class ImcPageModule {
};
ImcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _imc_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImcPageRoutingModule
        ],
        declarations: [_imc_page__WEBPACK_IMPORTED_MODULE_1__.ImcPage]
    })
], ImcPageModule);



/***/ }),

/***/ 370:
/*!*********************************!*\
  !*** ./src/app/imc/imc.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPage": () => (/* binding */ ImcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_imc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./imc.page.html */ 9357);
/* harmony import */ var _imc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imc.page.scss */ 2057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);







let ImcPage = class ImcPage {
    constructor(alertController, router, toastController) {
        this.alertController = alertController;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    calcularIMC() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.total = ((this.dataPeso / (this.dataAltura / 100 * this.dataAltura / 100)));
            const toast = yield this.toastController.create({
                message: 'El resultado se encuentra en el recuadro cyan.',
                duration: 2000
            });
            toast.present();
            switch (true) {
                case (this.total < 18.4):
                    this.estado = "Peso bajo";
                    break;
                case (this.total >= 18.5 && this.total <= 24.9):
                    this.estado = "Peso normal";
                    break;
                case (this.total >= 25 && this.total <= 29.9):
                    this.estado = "Sobrepeso";
                    break;
                case (this.total >= 30 && this.total <= 34.9):
                    this.estado = "Obesidad grado 1";
                    break;
                case (this.total >= 35 && this.total <= 39.9):
                    this.estado = "Obesidad grado 2";
                    break;
                case (this.total >= 40):
                    this.estado = "Obesidad grado 3";
                    break;
            }
        });
    }
};
ImcPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ImcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-imc',
        template: _raw_loader_imc_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_imc_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImcPage);



/***/ }),

/***/ 2057:
/*!***********************************!*\
  !*** ./src/app/imc/imc.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titleCSS {\n  font-family: \"calibri\";\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.roundedInput {\n  --border-color: white;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUVFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREYiLCJmaWxlIjoiaW1jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUNTU1xyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdjYWxpYnJpJztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3VuZGVkSW5wdXQgXHJcbntcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xyXG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ 9357:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imc/imc.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleCSS\">Calculadora de IMC</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\"> \r\n        <ion-item lines=\"full\" class=\"roundedInput\">\r\n          <ion-label position=\"floating\">Peso en Kg</ion-label>\r\n          <ion-input pattern=\"\\d*\" clearInput min=\"1\" step=\"0.01\" maxlength=\"4\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataPeso\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\"> \r\n        <ion-item lines=\"full\" class=\"roundedInput\">\r\n          <ion-label position=\"floating\">Altura en Cm</ion-label>\r\n          <ion-input pattern=\"\\d*\" clearInput min=\"1\" step=\"1\" maxlength=\"3\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataAltura\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button class=\"roundedInput\"[disabled]=\"!dataPeso || !dataAltura\" (click)=\"calcularIMC()\" type=\"submit\" color=\"danger\" expand=\"block\" >Calcular</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color= \"secondary\">\r\n          <ion-label floating>\r\n            IMC: {{this.total | number : '1.1-1'}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color= \"secondary\">\r\n          <ion-label>\r\n            {{this.estado}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"success\">\r\n          <ion-label>\r\n            Normal\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"success\">\r\n          <ion-label style=\"font-weight: bold;\">\r\n            Entre 18 y 24\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"warning\">\r\n          <ion-label >\r\n            Sobrepeso\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"warning\">\r\n          <ion-label style=\"font-weight: bold;\">\r\n            Entre 25 y 29\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label>\r\n            Obesidad grado 1\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label style=\"font-weight: bold;\">\r\n            Entre 30 y 34\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label>\r\n            Obesidad grado 2\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label style=\"font-weight: bold;\">\r\n            Entre 35 y 39\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label>\r\n            Obesidad grado 3\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"roundedInput\" color=\"danger\">\r\n          <ion-label style=\"font-weight: bold;\">\r\n            Más de 40\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_imc_imc_module_ts.js.map