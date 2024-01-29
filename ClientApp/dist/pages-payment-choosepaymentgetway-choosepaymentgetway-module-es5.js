function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-choosepaymentgetway-choosepaymentgetway-module"], {
  /***/
  "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ChoosepaymentgetwayRoutingModule */

  /***/
  function srcAppPagesPaymentChoosepaymentgetwayChoosepaymentgetwayRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoosepaymentgetwayRoutingModule", function () {
      return ChoosepaymentgetwayRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _choosepaymentgetway_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./choosepaymentgetway.component */
    "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.component.ts");

    var routes = [{
      path: '',
      component: _choosepaymentgetway_component__WEBPACK_IMPORTED_MODULE_2__["ChoosepaymentgetwayComponent"]
    }];

    var ChoosepaymentgetwayRoutingModule = function ChoosepaymentgetwayRoutingModule() {
      _classCallCheck(this, ChoosepaymentgetwayRoutingModule);
    };

    ChoosepaymentgetwayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChoosepaymentgetwayRoutingModule
    });
    ChoosepaymentgetwayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChoosepaymentgetwayRoutingModule_Factory(t) {
        return new (t || ChoosepaymentgetwayRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChoosepaymentgetwayRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChoosepaymentgetwayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ChoosepaymentgetwayComponent */

  /***/
  function srcAppPagesPaymentChoosepaymentgetwayChoosepaymentgetwayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoosepaymentgetwayComponent", function () {
      return ChoosepaymentgetwayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ChoosepaymentgetwayComponent =
    /*#__PURE__*/
    function () {
      function ChoosepaymentgetwayComponent(router, formBuilder, apiCall, common, translate, el) {
        _classCallCheck(this, ChoosepaymentgetwayComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
      }

      _createClass(ChoosepaymentgetwayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.PageReload();
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('userLogin');
          var paymentDetailsData = this.common.getValueFromSessionStorage('paymentInfo');

          if (paymentDetailsData.requestFrom == 'fineEnquiry') {
            this.common.isBackToFineEnquirySearch = true;
          }
        }
      }, {
        key: "PageReload",
        value: function PageReload() {
          if (this.common.isPageLoad) {
            this.common.isPageLoad = false;
            document.location.reload();
          }
        } // Used for eDirham Payment

      }, {
        key: "EdirhamPaymentGateway",
        value: function EdirhamPaymentGateway() {
          this.PaymentGatewayRequestInitation(1);
        } // Used for Etisala Payment

      }, {
        key: "EtisalatPaymentGateway",
        value: function EtisalatPaymentGateway() {//this.PaymentGatewayRequestInitation(2);
        } // For navigating to back or previous page

      }, {
        key: "goBack",
        value: function goBack() {
          var paymentDetailsData = this.common.getValueFromSessionStorage('paymentInfo');

          if (paymentDetailsData.requestFrom == 'companyPayAll') {
            this.router.navigateByUrl('/transactions/listtransactions');
          } else if (paymentDetailsData.requestFrom == 'fineEnquiry') {
            this.router.navigateByUrl('/home/login');
          } else if (paymentDetailsData.requestFrom == 'finePayAll') {
            this.router.navigateByUrl('/transactions/listfines');
          }
        } // Used for Create or Update Payment Gateway Response

      }, {
        key: "PaymentGatewayRequestInitation",
        value: function PaymentGatewayRequestInitation(paymentGateway) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var getUnpaidTransactionsIdList, jsonData, userLoginInfo, paymentDetailsData, fineEnq, serviceListId;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /**Get unpaid transactions list ID's, Abhijith 22-11-2023 */
                    getUnpaidTransactionsIdList = JSON.parse(sessionStorage.getItem("GetUnpaidTransactionsIdList"));
                    jsonData = {};
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    paymentDetailsData = this.common.getValueFromSessionStorage('paymentInfo');

                    if (userLoginInfo != null) {
                      jsonData.UserID = userLoginInfo.ID;
                    }

                    if (paymentDetailsData.CompanyID) {
                      jsonData.CompanyID = paymentDetailsData.CompanyID;
                    }

                    if (paymentDetailsData.FineID) {
                      jsonData.FineID = paymentDetailsData.FineID;
                    }

                    if (paymentDetailsData.FineAmount) {
                      jsonData.Amount = paymentDetailsData.FineAmount + '';
                      jsonData.FinalizedAmount = paymentDetailsData.FineAmount + '';
                    }

                    jsonData.GatewayType = paymentGateway + '';

                    if (paymentDetailsData.PortalReferenceID) {
                      jsonData.ReferenceID = paymentDetailsData.PortalReferenceID;
                    }

                    if (paymentDetailsData.requestFrom == 'companyPayAll') {
                      jsonData.Type = 1;
                    } else if (paymentDetailsData.requestFrom == 'fineEnquiry') {
                      jsonData.Type = 2;
                      fineEnq = this.common.getValueFromSessionStorage('fineEnquirySearchParameters');

                      if (fineEnq && fineEnq.PlateEmirate) {
                        jsonData.PlateEmirate = fineEnq.PlateEmirate;
                        jsonData.PlateCode = fineEnq.PlateCode;
                        jsonData.PlateNumber = fineEnq.PlateNumber;
                      }
                    } else if (paymentDetailsData.requestFrom == 'finePayAll') {
                      jsonData.Type = 3;
                    }

                    serviceListId = '000000-0008';

                    if (paymentGateway == 1) {
                      if (paymentDetailsData.requestFrom == 'companyPayAll') {
                        //jsonData.Type = 1;
                        serviceListId = '198412-1210';
                      } else if (paymentDetailsData.requestFrom == 'fineEnquiry' || paymentDetailsData.requestFrom == 'finePayAll') {
                        serviceListId = '198412-1209'; //jsonData.Type = 2;
                      }
                    }

                    jsonData.ServiceID = this.common.paymentServeId;

                    if (!userLoginInfo) {
                      _context.next = 18;
                      break;
                    }

                    jsonData.Token = userLoginInfo.Token;
                    _context.next = 20;
                    break;

                  case 18:
                    _context.next = 20;
                    return this.apiCall.postAPICallWithoutToken('api/EnquiryManager/GenerateToken', {}).then(function (result) {
                      if (result.Message) {
                        _this.common.showSussessFailureMessage(2, result.Message);
                      } else {
                        jsonData.Token = result.access_token;
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 20:
                    /**Send unpaid transaction ID's list in this API entity data only if TYPE == 1(only company), Abhijith 22-11-2023 */
                    //if (jsonData.Type == 1) {
                    //  jsonData.PaymentTransactionsList = getUnpaidTransactionsIdList; 
                    //}else{
                    //  jsonData.PaymentTransactionsList = null;
                    //}
                    jsonData.PaymentTransactionsList = getUnpaidTransactionsIdList;
                    /**End, Abhijith 22-11-2023 */

                    _context.next = 23;
                    return this.apiCall.postAPICallWithToken('api/TransactionManager/PaymentGatewayResponseCreateUpdate', jsonData).then(function (result) {
                      if (result.Message) {
                        _this.common.showSussessFailureMessage(2, result.Message);
                      } else {
                        if (result.Outcome == 'Created') {
                          paymentDetailsData.paymentGateway = paymentGateway;
                          paymentDetailsData.ID = result.ID;
                          paymentDetailsData.serviceListId = serviceListId;
                          paymentDetailsData.showSubmitForm = true;
                          paymentDetailsData.PaymentTransactionsList = result.PaymentTransactionsList;

                          _this.common.setValueToSessionStorage('paymentInfo', paymentDetailsData);

                          _this.router.navigate(['/payment/onlinepayment'], {
                            replaceUrl: true
                          });
                        }
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChoosepaymentgetwayComponent;
    }();

    ChoosepaymentgetwayComponent.ɵfac = function ChoosepaymentgetwayComponent_Factory(t) {
      return new (t || ChoosepaymentgetwayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ChoosepaymentgetwayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChoosepaymentgetwayComponent,
      selectors: [["app-choosepaymentgetway"]],
      decls: 23,
      vars: 7,
      consts: [[1, "home_page_blk", 3, "dir"], [1, "container_fluid"], [1, "wrapper"], [1, "logo_block"], ["src", "../assets/images/RAKTA-LOGO.png", "alt", "logo image"], [1, "payment_gateway_blk"], [1, "payment_gateway"], [1, "title_blk"], [1, "content"], [1, "content_blk"], [1, "content_left"], [3, "click"], ["src", "../assets/images/LogoL.svg", "alt", "eDirham"], [1, "go_back_btn", 3, "click"], ["id", "Layer", "enable-background", "new 0 0 64 64", "height", "512", "viewBox", "0 0 64 64", "width", "512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"]],
      template: function ChoosepaymentgetwayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChoosepaymentgetwayComponent_Template_a_click_15_listener() {
            return ctx.EdirhamPaymentGateway();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChoosepaymentgetwayComponent_Template_a_click_17_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, "ChoosePaymentGateway"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 5, "GoBack"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvY2hvb3NlcGF5bWVudGdldHdheS9jaG9vc2VwYXltZW50Z2V0d2F5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChoosepaymentgetwayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-choosepaymentgetway',
          templateUrl: './choosepaymentgetway.component.html',
          styleUrls: ['./choosepaymentgetway.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ChoosepaymentgetwayModule */

  /***/
  function srcAppPagesPaymentChoosepaymentgetwayChoosepaymentgetwayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoosepaymentgetwayModule", function () {
      return ChoosepaymentgetwayModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _choosepaymentgetway_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./choosepaymentgetway-routing.module */
    "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway-routing.module.ts");
    /* harmony import */


    var _choosepaymentgetway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./choosepaymentgetway.component */
    "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChoosepaymentgetwayModule = function ChoosepaymentgetwayModule() {
      _classCallCheck(this, ChoosepaymentgetwayModule);
    };

    ChoosepaymentgetwayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChoosepaymentgetwayModule
    });
    ChoosepaymentgetwayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChoosepaymentgetwayModule_Factory(t) {
        return new (t || ChoosepaymentgetwayModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _choosepaymentgetway_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChoosepaymentgetwayRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChoosepaymentgetwayModule, {
        declarations: [_choosepaymentgetway_component__WEBPACK_IMPORTED_MODULE_3__["ChoosepaymentgetwayComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _choosepaymentgetway_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChoosepaymentgetwayRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChoosepaymentgetwayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_choosepaymentgetway_component__WEBPACK_IMPORTED_MODULE_3__["ChoosepaymentgetwayComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _choosepaymentgetway_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChoosepaymentgetwayRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-payment-choosepaymentgetway-choosepaymentgetway-module-es5.js.map