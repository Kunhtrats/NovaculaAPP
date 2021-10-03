(self["webpackChunkblank"] = self["webpackChunkblank"] || []).push([["src_app_calculadora_calculadora_module_ts"],{

/***/ 5176:
/*!***********************************************************!*\
  !*** ./src/app/calculadora/calculadora-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraPageRoutingModule": () => (/* binding */ CalculadoraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calculadora_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.page */ 2462);




const routes = [
    {
        path: '',
        component: _calculadora_page__WEBPACK_IMPORTED_MODULE_0__.CalculadoraPage
    }
];
let CalculadoraPageRoutingModule = class CalculadoraPageRoutingModule {
};
CalculadoraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalculadoraPageRoutingModule);



/***/ }),

/***/ 295:
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraPageModule": () => (/* binding */ CalculadoraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora-routing.module */ 5176);
/* harmony import */ var _calculadora_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora.page */ 2462);







let CalculadoraPageModule = class CalculadoraPageModule {
};
CalculadoraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalculadoraPageRoutingModule
        ],
        declarations: [_calculadora_page__WEBPACK_IMPORTED_MODULE_1__.CalculadoraPage]
    })
], CalculadoraPageModule);



/***/ }),

/***/ 2462:
/*!*************************************************!*\
  !*** ./src/app/calculadora/calculadora.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraPage": () => (/* binding */ CalculadoraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calculadora_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calculadora.page.html */ 3606);
/* harmony import */ var _calculadora_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora.page.scss */ 8664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let CalculadoraPage = class CalculadoraPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
    }
    calcular() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.total = Math.round((1 * this.dataSis + (2 * this.dataDia)) / 3);
            switch (true) {
                case (this.total >= 110 && this.total < 140):
                    const alert1 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "PAM: " + (this.total) + "<br>" + "<br>" + "ESTADO: Crisis hipertensiva.",
                        buttons: ['Aceptar']
                    });
                    yield alert1.present();
                    break;
                case (this.total >= 140 && this.total <= 300):
                    const alert2 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "PAM: " + (this.total) + "<br>" + "<br>" + "ESTADO: Emergencia hipertensiva.",
                        buttons: ['Aceptar']
                    });
                    yield alert2.present();
                    break;
                case (this.total < 110 && this.total > 40):
                    const alert3 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "PAM: " + (this.total) + "<br>" + "<br>" + "ESTADO: Presión arterial normal.",
                        buttons: ['Aceptar']
                    });
                    yield alert3.present();
                    break;
                case (this.total < 40 && this.total >= 0 && this.total > 300):
                    const alert4 = yield this.alertController.create({
                        header: 'Error de aplicación',
                        message: "Ingrese datos coherentes.",
                        buttons: ['Reintentar']
                    });
                    yield alert4.present();
                    break;
                default:
                    const alert5 = yield this.alertController.create({
                        header: 'Error de aplicación',
                        message: "Ingrese datos correctos.",
                        buttons: ['Reintentar']
                    });
                    yield alert5.present();
                    break;
            }
        });
    }
};
CalculadoraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CalculadoraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-calculadora',
        template: _raw_loader_calculadora_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calculadora_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalculadoraPage);



/***/ }),

/***/ 8664:
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titleCSS {\n  font-family: \"calibri\";\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.roundedInput {\n  --border-color: white;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGFkb3JhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJjYWxjdWxhZG9yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVDU1Ncclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnY2FsaWJyaSc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0IHtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xyXG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuIH1cclxuIl19 */");

/***/ }),

/***/ 3606:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"avanzado\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titleCSS\">Calculadora de presión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid no-padding>\r\n    <ion-row no-padding justify-content-start align-items-start>\r\n      <ion-col ion-item no-lines no-padding text-center col-2> \r\n        <ion-item lines=\"full\" class=\"roundedInput\">\r\n          <ion-label position=\"floating\">Presión sistólica</ion-label>\r\n          <ion-input   pattern=\"\\d*\" clearInput min=\"1\" step=\"1\" maxlength=\"3\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataSis\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-item lines=\"full\" class=\"roundedInput\">\r\n          <ion-label position=\"floating\">Presión diastólica</ion-label>\r\n          <ion-input   pattern=\"\\d*\" clearInput min=\"1\" step=\"1\" maxlength=\"3\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataDia\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button [disabled]=\"!dataSis || !dataDia || 0\" (click)=\"calcular()\" type=\"submit\" color=\"danger\" expand=\"block\" >Calcular</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calculadora_module_ts.js.map