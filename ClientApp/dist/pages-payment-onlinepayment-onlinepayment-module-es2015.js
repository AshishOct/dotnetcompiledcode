(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-onlinepayment-onlinepayment-module"],{

/***/ "./src/app/pages/payment/onlinepayment/onlinepayment-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/payment/onlinepayment/onlinepayment-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OnlinepaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinepaymentRoutingModule", function() { return OnlinepaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onlinepayment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlinepayment.component */ "./src/app/pages/payment/onlinepayment/onlinepayment.component.ts");





const routes = [{ path: '', component: _onlinepayment_component__WEBPACK_IMPORTED_MODULE_2__["OnlinepaymentComponent"] }];
class OnlinepaymentRoutingModule {
}
OnlinepaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnlinepaymentRoutingModule });
OnlinepaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnlinepaymentRoutingModule_Factory(t) { return new (t || OnlinepaymentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlinepaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlinepaymentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/payment/onlinepayment/onlinepayment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/payment/onlinepayment/onlinepayment.component.ts ***!
  \************************************************************************/
/*! exports provided: OnlinepaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinepaymentComponent", function() { return OnlinepaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






const _c0 = ["merchantRequest"];
class OnlinepaymentComponent {
    constructor(router, apiCall, common, translate, el) {
        this.router = router;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.paymentDetailsData = [];
        this.referenceId = "";
        this.Amount = "";
        this.Email = "";
        this.serviceId = "";
        this.redirectUrl = "";
        this.payType = "";
        this.merchantId = "";
        this.terminalId = "";
        this.secretKey = "";
        this.serviceList = "";
        this.lang = "";
        this.serviceSessionId = "";
        this.formSubmitAction = '';
        this.getAllStaticData = [];
    }
    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('userLogin');
        this.paymentDetailsData = this.common.getValueFromSessionStorage('paymentInfo');
        this.common.isBackToSearchFine = true;
        this.referenceId = this.paymentDetailsData.PortalReferenceID; // Dynamic
        this.Amount = this.paymentDetailsData.FineAmount; // Dynamic
        let paymentGateway = 0;
        //Etisalat payment gateway
        if (this.paymentDetailsData.paymentGateway == 2) { //commented based on venkat comments by radhika
            //this.formSubmitAction = this.common.isProductionConfig ? 'https://rak.ae/etcpg/cpg/reg/' : 'https://stg.rak.ae/etcpg/cpg/reg/';
            //this.serviceList = "serviceid=" + this.paymentDetailsData.serviceListId + ",quantity=1,price=" + this.Amount; // Dynamic
            //paymentGateway = 2;
            //eDirham payment gateway
        }
        else {
            this.formSubmitAction = this.common.isProductionConfig ? 'https://www.rak.ae/cpgconnector/cpg/1' : 'https://stg.rak.ae/cpgconnector/cpg/1';
            //this.formSubmitAction = 'https://stg.rak.ae/cpgconnector/cpg/1';  // UAT
            //this.formSubmitAction = 'https://www.rak.ae/cpgconnector/cpg/1';  // Production
            this.serviceList = "serviceid=" + this.paymentDetailsData.serviceListId + ",quantity=1,price=" + this.Amount; // Dynamic
            paymentGateway = 1;
        }
        this.payType = "0"; // 1- Mobile  0- Web
        this.merchantId = this.common.isProductionConfig ? '467700000003532' : '811402000';
        //this.merchantId = "811402000";  // Static for UAT
        //this.merchantId = "467700000003532";  // Static for Production
        this.terminalId = '00081140';
        //this.terminalId = "00081140"; // Static for UAT
        //this.terminalId = "00081140"; // Static for Production
        this.secretKey = '33135ac9d9efccaf3460f1a78729dbb2';
        //this.secretKey = "33135ac9d9efccaf3460f1a78729dbb2";  // Static for UAT
        //this.secretKey = "33135ac9d9efccaf3460f1a78729dbb2";  // Static for Production
        this.Email = "20000200"; // Static
        this.serviceId = this.common.paymentServeId; // Static
        this.serviceSessionId = this.referenceId; // Dynamic
        this.lang = "en"; // Static
        this.redirectUrl = this.apiCall.APIBASEURL + "PostPayment/Index?gatewayContent=" + this.makeid(120);
        this.redirectUrl = this.redirectUrl + "&RefId=" + this.referenceId;
        this.redirectUrl = this.redirectUrl + "&FineId=" + (this.paymentDetailsData.FineID ? this.paymentDetailsData.FineID : '');
        this.redirectUrl = this.redirectUrl + "&UserID=" + (this.paymentDetailsData.UserID ? this.paymentDetailsData.UserID : '');
        this.redirectUrl = this.redirectUrl + "&CompanyID=" + (this.paymentDetailsData.CompanyID ? this.paymentDetailsData.CompanyID : '');
        this.redirectUrl = this.redirectUrl + "&RequestFrom=" + this.paymentDetailsData.requestFrom;
        this.redirectUrl = this.redirectUrl + "&key=" + "";
        this.redirectUrl = this.redirectUrl + "&PaymentGateway=" + paymentGateway;
        this.redirectUrl = this.redirectUrl + "&ID=" + this.paymentDetailsData.ID;
        this.redirectUrl = this.redirectUrl + "&ServiceID=" + this.common.paymentServeId;
        ;
        this.redirectUrl = this.redirectUrl + "&Amount=" + this.Amount;
        this.redirectUrl = this.redirectUrl + "&PaymentGatewayReferenceNumber=" + this.paymentDetailsData.ID;
        /**converted to base 64 and then sending unpaid transactions Id list, Because directly we
         * cant send via query, Abhijith 23-11-2023 */
        this.redirectUrl = this.redirectUrl + "&PaymentTransactionsList=" + btoa(JSON.stringify(this.paymentDetailsData.PaymentTransactionsList));
        let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
        if (userLoginInfo != null && userLoginInfo.Token) {
            this.redirectUrl = this.redirectUrl + "&Token=" + userLoginInfo.Token;
        }
    }
    ngAfterViewChecked() {
        let paymentInfo = this.common.getValueFromSessionStorage('paymentInfo');
        if (this.merchantRequest && paymentInfo.showSubmitForm) {
            paymentInfo.showSubmitForm = false;
            this.common.setValueToSessionStorage('paymentInfo', paymentInfo);
            this.merchantRequest.nativeElement.submit();
        }
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
OnlinepaymentComponent.ɵfac = function OnlinepaymentComponent_Factory(t) { return new (t || OnlinepaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OnlinepaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlinepaymentComponent, selectors: [["app-onlinepayment"]], viewQuery: function OnlinepaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.merchantRequest = _t.first);
    } }, decls: 38, vars: 13, consts: [[1, "home_page_blk"], [1, "container_fluid"], [1, "wrapper"], [1, "logo_block"], ["src", "../assets/images/RAKTA-LOGO.png", "alt", "logo image"], [1, "payment_gateway_blk"], [1, "payment_gateway"], [1, "title_blk", "PaymentPleaseWait"], [1, "content", "PaymentPleaseWaitMsg"], [1, "content_blk"], [1, "content_left"], ["ngNoForm", "", "name", "merchantRequest", "method", "POST", "enctype", "application/x-www-form-urlencoded", 3, "action"], ["merchantRequest", ""], [1, ""], ["type", "hidden", "id", "referenceId", "name", "referenceId", 3, "value"], ["type", "hidden", "id", "Amount", "name", "Amount", 3, "value"], ["type", "hidden", "id", "Email", "name", "Email", 3, "value"], ["type", "hidden", "id", "serviceId", "name", "serviceId", 3, "value"], ["type", "hidden", "id", "redirectUrl", "name", "redirectUrl", 3, "value"], ["type", "hidden", "id", "payType", "name", "payType", 3, "value"], ["type", "hidden", "id", "merchantId", "name", "merchantId", 3, "value"], ["type", "hidden", "id", "terminalId", "name", "terminalId", 3, "value"], ["type", "hidden", "id", "secretKey", "name", "secretKey", 3, "value"], ["type", "hidden", "id", "serviceList", "name", "serviceList", 3, "value"], ["type", "hidden", "id", "lang", "name", "lang", 3, "value"], ["type", "hidden", "id", "serviceSessionId", "name", "serviceSessionId", 3, "value"]], template: function OnlinepaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.formSubmitAction, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.referenceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.serviceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.redirectUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.payType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.merchantId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.terminalId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.secretKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.serviceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.serviceSessionId);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvb25saW5lcGF5bWVudC9vbmxpbmVwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlinepaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onlinepayment',
                templateUrl: './onlinepayment.component.html',
                styleUrls: ['./onlinepayment.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { merchantRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['merchantRequest']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/payment/onlinepayment/onlinepayment.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/payment/onlinepayment/onlinepayment.module.ts ***!
  \*********************************************************************/
/*! exports provided: OnlinepaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinepaymentModule", function() { return OnlinepaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _onlinepayment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlinepayment-routing.module */ "./src/app/pages/payment/onlinepayment/onlinepayment-routing.module.ts");
/* harmony import */ var _onlinepayment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onlinepayment.component */ "./src/app/pages/payment/onlinepayment/onlinepayment.component.ts");





class OnlinepaymentModule {
}
OnlinepaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnlinepaymentModule });
OnlinepaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnlinepaymentModule_Factory(t) { return new (t || OnlinepaymentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _onlinepayment_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlinepaymentRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlinepaymentModule, { declarations: [_onlinepayment_component__WEBPACK_IMPORTED_MODULE_3__["OnlinepaymentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _onlinepayment_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlinepaymentRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlinepaymentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_onlinepayment_component__WEBPACK_IMPORTED_MODULE_3__["OnlinepaymentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _onlinepayment_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlinepaymentRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-payment-onlinepayment-onlinepayment-module-es2015.js.map