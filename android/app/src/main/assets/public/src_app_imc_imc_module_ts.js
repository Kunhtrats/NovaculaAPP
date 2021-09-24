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
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
    }
    calcularIMC() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.total = Math.round((this.dataPeso / (this.dataAltura / 100 * this.dataAltura / 100)));
            switch (true) {
                case (this.total < 18.4):
                    const alert1 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Peso bajo.",
                        buttons: ['Aceptar']
                    });
                    yield alert1.present();
                    break;
                case (this.total >= 18.5 && this.total <= 24.9):
                    const alert2 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Peso normal.",
                        buttons: ['Aceptar']
                    });
                    yield alert2.present();
                    break;
                case (this.total >= 25 && this.total <= 29.9):
                    const alert3 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Sobrepeso.",
                        buttons: ['Aceptar']
                    });
                    yield alert3.present();
                    break;
                case (this.total >= 30 && this.total <= 34.9):
                    const alert4 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Obesidad grado 1.",
                        buttons: ['Aceptar']
                    });
                    yield alert4.present();
                    break;
                case (this.total >= 35 && this.total <= 39.9):
                    const alert5 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Obesidad grado 2.",
                        buttons: ['Aceptar']
                    });
                    yield alert5.present();
                    break;
                case (this.total >= 40):
                    const alert6 = yield this.alertController.create({
                        header: 'Resultado',
                        message: "IMC: " + (this.total) + "<br>" + "<br>" + "ESTADO: Obesidad mórbida.",
                        buttons: ['Aceptar']
                    });
                    yield alert6.present();
                    break;
            }
        });
    }
};
ImcPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titleCSS {\n  font-family: \"calibri\";\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.roundedInput {\n  --border-color: white;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUYiLCJmaWxlIjoiaW1jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUNTU1xyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdjYWxpYnJpJztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3VuZGVkSW5wdXQge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm94LXNoYWRvdzogMnB4IGdyYXk7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gfVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titleCSS\">Calculadora de IMC</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row no-padding justify-content-start align-items-start>\n      <ion-col ion-item no-lines no-padding text-center col-2> \n        <ion-item lines=\"full\" class=\"roundedInput\">\n          <ion-label position=\"floating\">Peso en kg</ion-label>\n          <ion-input pattern=\"\\d*\" clearInput min=\"1\" step=\"1\" maxlength=\"3\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataPeso\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item lines=\"full\" class=\"roundedInput\">\n          <ion-label position=\"floating\">Altura en cm</ion-label>\n          <ion-input pattern=\"\\d*\" clearInput min=\"1\" step=\"1\" maxlength=\"3\" minlength=\"2\" type=\"tel\" [(ngModel)]=\"dataAltura\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-button [disabled]=\"!dataPeso || !dataAltura\" (click)=\"calcularIMC()\" type=\"submit\" color=\"danger\" expand=\"block\" >Calcular</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_imc_imc_module_ts.js.map