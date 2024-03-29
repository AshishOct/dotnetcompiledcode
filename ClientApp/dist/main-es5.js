function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'home/login',
      pathMatch: 'full'
    }, {
      path: 'home/login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-login-login-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("pages-home-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/login/login.module */
        "./src/app/pages/home/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'common/dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-common-dashboard-dashboard-module */
        [__webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-detailcompany-detailcompany-module~pag~4ccb0b5c"), __webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-addcompany-addcompany-module"), __webpack_require__.e("pages-common-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/common/dashboard/dashboard.module */
        "./src/app/pages/common/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'payment/choosepaymentgetway',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-choosepaymentgetway-choosepaymentgetway-module */
        "pages-payment-choosepaymentgetway-choosepaymentgetway-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/choosepaymentgetway/choosepaymentgetway.module */
        "./src/app/pages/payment/choosepaymentgetway/choosepaymentgetway.module.ts")).then(function (m) {
          return m.ChoosepaymentgetwayModule;
        });
      }
    }, {
      path: 'print/print-layout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-print-layout-print-layout-module */
        "pages-print-print-layout-print-layout-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/print-layout/print-layout.module */
        "./src/app/pages/print/print-layout/print-layout.module.ts")).then(function (m) {
          return m.PrintLayoutModule;
        });
      }
    }, {
      path: 'print/invoice',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-invoice-invoice-module */
        "pages-print-invoice-invoice-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/invoice/invoice.module */
        "./src/app/pages/print/invoice/invoice.module.ts")).then(function (m) {
          return m.InvoiceModule;
        });
      }
    },
    /*{ path: 'print/printdriverdetail', loadChildren: () => import('./pages/print/printdriverdetail/printdriverdetail.module').then(m => m.PrintdriverdetailModule) },*/
    {
      path: 'print/printdriverdetail/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-printdriverdetail-printdriverdetail-module */
        "pages-print-printdriverdetail-printdriverdetail-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/printdriverdetail/printdriverdetail.module */
        "./src/app/pages/print/printdriverdetail/printdriverdetail.module.ts")).then(function (m) {
          return m.PrintdriverdetailModule;
        });
      }
    }, //{ path: 'print/driverEnquiry/:id', loadChildren: () => import('./pages/print/driverEnquiry/driverEnquiry.module').then(m => m.DriverEnquiryModule) },
    {
      path: 'print/printcompanydetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-printcompanydetail-printcompanydetail-module */
        "pages-print-printcompanydetail-printcompanydetail-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/printcompanydetail/printcompanydetail.module */
        "./src/app/pages/print/printcompanydetail/printcompanydetail.module.ts")).then(function (m) {
          return m.PrintcompanydetailModule;
        });
      }
    }, {
      path: 'print/printfinedetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-printfinedetail-printfinedetail-module */
        "pages-print-printfinedetail-printfinedetail-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/printfinedetail/printfinedetail.module */
        "./src/app/pages/print/printfinedetail/printfinedetail.module.ts")).then(function (m) {
          return m.PrintfinedetailModule;
        });
      }
    }, {
      path: 'vehicle/listvehicle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-vehicle-listvehicle-listvehicle-module */
        [__webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-detailcompany-detailcompany-module~pag~4ccb0b5c"), __webpack_require__.e("pages-vehicle-listvehicle-listvehicle-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/vehicle/listvehicle/listvehicle.module */
        "./src/app/pages/vehicle/listvehicle/listvehicle.module.ts")).then(function (m) {
          return m.ListvehicleModule;
        });
      }
    }, {
      path: 'vehicle/addvehicle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-vehicle-addvehicle-addvehicle-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("pages-vehicle-addvehicle-addvehicle-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/vehicle/addvehicle/addvehicle.module */
        "./src/app/pages/vehicle/addvehicle/addvehicle.module.ts")).then(function (m) {
          return m.AddvehicleModule;
        });
      }
    }, {
      path: 'company/listcompany',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-company-listcompany-listcompany-module */
        [__webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-detailcompany-detailcompany-module~pag~4ccb0b5c"), __webpack_require__.e("pages-company-listcompany-listcompany-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/company/listcompany/listcompany.module */
        "./src/app/pages/company/listcompany/listcompany.module.ts")).then(function (m) {
          return m.ListcompanyModule;
        });
      }
    }, {
      path: 'company/linkexistingcompany',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-company-linkexistingcompany-linkexistingcompany-module */
        "pages-company-linkexistingcompany-linkexistingcompany-module").then(__webpack_require__.bind(null,
        /*! ./pages/company/linkexistingcompany/linkexistingcompany.module */
        "./src/app/pages/company/linkexistingcompany/linkexistingcompany.module.ts")).then(function (m) {
          return m.LinkexistingcompanyModule;
        });
      }
    }, {
      path: 'common/globalheader',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/common/globalheader/globalheader.module */
        "./src/app/pages/common/globalheader/globalheader.module.ts")).then(function (m) {
          return m.GlobalheaderModule;
        });
      }
    }, {
      path: 'driver/listdriver',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-driver-listdriver-listdriver-module */
        [__webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-detailcompany-detailcompany-module~pag~4ccb0b5c"), __webpack_require__.e("pages-driver-listdriver-listdriver-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/driver/listdriver/listdriver.module */
        "./src/app/pages/driver/listdriver/listdriver.module.ts")).then(function (m) {
          return m.ListdriverModule;
        });
      }
    }, {
      path: 'driver/adddriver',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-driver-adddriver-adddriver-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("pages-driver-adddriver-adddriver-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/driver/adddriver/adddriver.module */
        "./src/app/pages/driver/adddriver/adddriver.module.ts")).then(function (m) {
          return m.AdddriverModule;
        });
      }
    }, {
      path: 'driver/detaildriver',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-driver-detaildriver-detaildriver-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("pages-driver-detaildriver-detaildriver-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/driver/detaildriver/detaildriver.module */
        "./src/app/pages/driver/detaildriver/detaildriver.module.ts")).then(function (m) {
          return m.DetaildriverModule;
        });
      }
    }, {
      path: 'company/addcompany',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-company-addcompany-addcompany-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-addcompany-addcompany-module"), __webpack_require__.e("pages-company-addcompany-addcompany-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/company/addcompany/addcompany.module */
        "./src/app/pages/company/addcompany/addcompany.module.ts")).then(function (m) {
          return m.AddcompanyModule;
        });
      }
    }, {
      path: 'common/globalfooter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/common/globalfooter/globalfooter.module */
        "./src/app/pages/common/globalfooter/globalfooter.module.ts")).then(function (m) {
          return m.GlobalfooterModule;
        });
      }
    }, {
      path: 'vehicle/detailvehicle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-vehicle-detailvehicle-detailvehicle-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("default~pages-company-detailcompany-detailcompany-module~pages-vehicle-detailvehicle-detailvehicle-module"), __webpack_require__.e("pages-vehicle-detailvehicle-detailvehicle-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/vehicle/detailvehicle/detailvehicle.module */
        "./src/app/pages/vehicle/detailvehicle/detailvehicle.module.ts")).then(function (m) {
          return m.DetailvehicleModule;
        });
      }
    }, {
      path: 'transactions/listtransactions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-transactions-listtransactions-listtransactions-module */
        "pages-transactions-listtransactions-listtransactions-module").then(__webpack_require__.bind(null,
        /*! ./pages/transactions/listtransactions/listtransactions.module */
        "./src/app/pages/transactions/listtransactions/listtransactions.module.ts")).then(function (m) {
          return m.ListtransactionsModule;
        });
      }
    }, {
      path: 'company/listcompanypayments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-company-listcompanypayments-listcompanypayments-module */
        "pages-company-listcompanypayments-listcompanypayments-module").then(__webpack_require__.bind(null,
        /*! ./pages/company/listcompanypayments/listcompanypayments.module */
        "./src/app/pages/company/listcompanypayments/listcompanypayments.module.ts")).then(function (m) {
          return m.ListcompanypaymentsModule;
        });
      }
    }, {
      path: 'print/printcancelfinedetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-printcancelfinedetails-printcancelfinedetails-module */
        "pages-print-printcancelfinedetails-printcancelfinedetails-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/printcancelfinedetails/printcancelfinedetails.module */
        "./src/app/pages/print/printcancelfinedetails/printcancelfinedetails.module.ts")).then(function (m) {
          return m.PrintcancelfinedetailsModule;
        });
      }
    }, {
      path: 'company/detailcompany',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-company-detailcompany-detailcompany-module */
        [__webpack_require__.e("default~pages-company-addcompany-addcompany-module~pages-company-detailcompany-detailcompany-module~~986684e9"), __webpack_require__.e("default~pages-common-dashboard-dashboard-module~pages-company-detailcompany-detailcompany-module~pag~4ccb0b5c"), __webpack_require__.e("default~pages-company-detailcompany-detailcompany-module~pages-vehicle-detailvehicle-detailvehicle-module"), __webpack_require__.e("pages-company-detailcompany-detailcompany-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/company/detailcompany/detailcompany.module */
        "./src/app/pages/company/detailcompany/detailcompany.module.ts")).then(function (m) {
          return m.DetailcompanyModule;
        });
      }
    }, {
      path: 'home/forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-forgotpassword-forgotpassword-module */
        "pages-home-forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/forgotpassword/forgotpassword.module */
        "./src/app/pages/home/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordModule;
        });
      }
    }, {
      path: 'transactions/listfines',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-transactions-listfines-listfines-module */
        "pages-transactions-listfines-listfines-module").then(__webpack_require__.bind(null,
        /*! ./pages/transactions/listfines/listfines.module */
        "./src/app/pages/transactions/listfines/listfines.module.ts")).then(function (m) {
          return m.ListfinesModule;
        });
      }
    }, {
      path: 'print/finepaymentrecepit',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-print-finepaymentrecepit-finepaymentrecepit-module */
        "pages-print-finepaymentrecepit-finepaymentrecepit-module").then(__webpack_require__.bind(null,
        /*! ./pages/print/finepaymentrecepit/finepaymentrecepit.module */
        "./src/app/pages/print/finepaymentrecepit/finepaymentrecepit.module.ts")).then(function (m) {
          return m.FinepaymentrecepitModule;
        });
      }
    }, {
      path: 'payment/onlinepayment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-onlinepayment-onlinepayment-module */
        "pages-payment-onlinepayment-onlinepayment-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/onlinepayment/onlinepayment.module */
        "./src/app/pages/payment/onlinepayment/onlinepayment.module.ts")).then(function (m) {
          return m.OnlinepaymentModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(translate, common, apiCall, Spinner) {
        _classCallCheck(this, AppComponent);

        this.translate = translate;
        this.common = common;
        this.apiCall = apiCall;
        this.Spinner = Spinner;
        this.title = 'raktaUI';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.setDefaultLang('en');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [["bdColor", "rgba(51, 51, 51, 0.8)", "size", "default", "type", "ball-spin-clockwise"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule, getBaseUrl */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pages_common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/common/globalheader/globalheader.module */
    "./src/app/pages/common/globalheader/globalheader.module.ts");
    /* harmony import */


    var _pages_common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/common/globalfooter/globalfooter.module */
    "./src/app/pages/common/globalfooter/globalfooter.module.ts");
    /* harmony import */


    var _services_dateformatter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/dateformatter.service */
    "./src/app/services/dateformatter.service.ts");
    /* harmony import */


    var angular_user_idle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-user-idle */
    "./node_modules/angular-user-idle/__ivy_ngcc__/fesm2015/angular-user-idle.js");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: 'BASE_URL',
        useFactory: getBaseUrl
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateAdapter"],
        useClass: _services_dateformatter_service__WEBPACK_IMPORTED_MODULE_13__["CustomAdapter"]
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateParserFormatter"],
        useClass: _services_dateformatter_service__WEBPACK_IMPORTED_MODULE_13__["CustomDateParserFormatter"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      }), // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
      // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes) 
      // and `ping` is 120 (2 minutes).
      angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"].forRoot({
        idle: 570,
        timeout: 30,
        ping: 0
      }), ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _pages_common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_11__["GlobalheaderModule"], _pages_common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _pages_common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_11__["GlobalheaderModule"], _pages_common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
            }
          }), // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
          // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes) 
          // and `ping` is 120 (2 minutes).
          angular_user_idle__WEBPACK_IMPORTED_MODULE_14__["UserIdleModule"].forRoot({
            idle: 570,
            timeout: 30,
            ping: 0
          }), ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _pages_common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_11__["GlobalheaderModule"], _pages_common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterModule"]],
          providers: [{
            provide: 'BASE_URL',
            useFactory: getBaseUrl
          }, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateAdapter"],
            useClass: _services_dateformatter_service__WEBPACK_IMPORTED_MODULE_13__["CustomAdapter"]
          }, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateParserFormatter"],
            useClass: _services_dateformatter_service__WEBPACK_IMPORTED_MODULE_13__["CustomDateParserFormatter"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }
    /***/

  },

  /***/
  "./src/app/pages/common/confirmdialog/confirmation-dialog-service.service.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/common/confirmdialog/confirmation-dialog-service.service.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConfirmationDialogServiceService */

  /***/
  function srcAppPagesCommonConfirmdialogConfirmationDialogServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialogServiceService", function () {
      return ConfirmationDialogServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _confirmdialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./confirmdialog.component */
    "./src/app/pages/common/confirmdialog/confirmdialog.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ConfirmationDialogServiceService =
    /*#__PURE__*/
    function () {
      function ConfirmationDialogServiceService(modalService) {
        _classCallCheck(this, ConfirmationDialogServiceService);

        this.modalService = modalService;
      }

      _createClass(ConfirmationDialogServiceService, [{
        key: "confirm",
        value: function confirm(title, message) {
          var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';
          var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Cancel';
          var dialogSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sm';
          var modalRef = this.modalService.open(_confirmdialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmdialogComponent"], {
            size: dialogSize,
            centered: true,
            backdrop: 'static',
            windowClass: 'confirm_dia_blk'
          });
          modalRef.componentInstance.title = title; // to show message

          modalRef.componentInstance.message = message; // to show ok button

          modalRef.componentInstance.btnOkText = btnOkText; // to show cancel button

          modalRef.componentInstance.btnCancelText = btnCancelText;
          return modalRef.result;
        }
      }]);

      return ConfirmationDialogServiceService;
    }();

    ConfirmationDialogServiceService.ɵfac = function ConfirmationDialogServiceService_Factory(t) {
      return new (t || ConfirmationDialogServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    ConfirmationDialogServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfirmationDialogServiceService,
      factory: ConfirmationDialogServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/confirmdialog/confirmdialog.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/common/confirmdialog/confirmdialog.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ConfirmdialogComponent */

  /***/
  function srcAppPagesCommonConfirmdialogConfirmdialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmdialogComponent", function () {
      return ConfirmdialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ConfirmdialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmdialogComponent(activeModal) {
        _classCallCheck(this, ConfirmdialogComponent);

        this.activeModal = activeModal;
        this.showButton = true;
      } //Use the constructor to initialize class members


      _createClass(ConfirmdialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //to decline

      }, {
        key: "decline",
        value: function decline() {
          this.activeModal.close(false);
        } //to accept

      }, {
        key: "accept",
        value: function accept() {
          this.activeModal.close(true);
        } //to dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.activeModal.dismiss();
        }
      }]);

      return ConfirmdialogComponent;
    }();

    ConfirmdialogComponent.ɵfac = function ConfirmdialogComponent_Factory(t) {
      return new (t || ConfirmdialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    ConfirmdialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmdialogComponent,
      selectors: [["app-confirmdialog"]],
      inputs: {
        title: "title",
        message: "message",
        btnOkText: "btnOkText",
        btnCancelText: "btnCancelText"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "modal-header", "form-header"], [1, "modal-body", "form-content", "text-center"], [1, "para"], [1, "modal-footer", "form-footer"], ["type", "button", 1, "alert_btn", "yes", 3, "click"], ["type", "button", 1, "alert_btn", "no", 3, "click"]],
      template: function ConfirmdialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmdialogComponent_Template_button_click_5_listener() {
            return ctx.accept();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmdialogComponent_Template_button_click_7_listener() {
            return ctx.decline();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide_btn", ctx.btnCancelText == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
        }
      },
      styles: [".hide_btn[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Jha3Rhc3lzdGVtdWktRGV2ZWxvcG1lbnQvcmFrdGFwb3J0YWwvQ2xpZW50QXBwL3NyYy9hcHAvcGFnZXMvY29tbW9uL2NvbmZpcm1kaWFsb2cvY29uZmlybWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uL2NvbmZpcm1kaWFsb2cvY29uZmlybWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9jb25maXJtZGlhbG9nL2NvbmZpcm1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9idG4ge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAiLCIuaGlkZV9idG4ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmdialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirmdialog',
          templateUrl: './confirmdialog.component.html',
          styleUrls: ['./confirmdialog.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        btnOkText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        btnCancelText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/globalfooter/globalfooter-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/common/globalfooter/globalfooter-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: GlobalfooterRoutingModule */

  /***/
  function srcAppPagesCommonGlobalfooterGlobalfooterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalfooterRoutingModule", function () {
      return GlobalfooterRoutingModule;
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


    var _globalfooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");

    var routes = [{
      path: '',
      component: _globalfooter_component__WEBPACK_IMPORTED_MODULE_2__["GlobalfooterComponent"]
    }];

    var GlobalfooterRoutingModule = function GlobalfooterRoutingModule() {
      _classCallCheck(this, GlobalfooterRoutingModule);
    };

    GlobalfooterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlobalfooterRoutingModule
    });
    GlobalfooterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlobalfooterRoutingModule_Factory(t) {
        return new (t || GlobalfooterRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalfooterRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalfooterRoutingModule, [{
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
  "./src/app/pages/common/globalfooter/globalfooter.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/common/globalfooter/globalfooter.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GlobalfooterComponent */

  /***/
  function srcAppPagesCommonGlobalfooterGlobalfooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalfooterComponent", function () {
      return GlobalfooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalfooterComponent =
    /*#__PURE__*/
    function () {
      function GlobalfooterComponent() {
        _classCallCheck(this, GlobalfooterComponent);

        this.year = 0;
      }

      _createClass(GlobalfooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var d = new Date();
          this.year = d.getFullYear();
        }
      }]);

      return GlobalfooterComponent;
    }();

    GlobalfooterComponent.ɵfac = function GlobalfooterComponent_Factory(t) {
      return new (t || GlobalfooterComponent)();
    };

    GlobalfooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlobalfooterComponent,
      selectors: [["app-globalfooter"]],
      decls: 2,
      vars: 1,
      consts: [[1, "footer"]],
      template: function GlobalfooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", ctx.year, " RAK Transport Authority. ");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9nbG9iYWxmb290ZXIvZ2xvYmFsZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalfooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-globalfooter',
          templateUrl: './globalfooter.component.html',
          styleUrls: ['./globalfooter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/globalfooter/globalfooter.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/common/globalfooter/globalfooter.module.ts ***!
    \******************************************************************/

  /*! exports provided: GlobalfooterModule */

  /***/
  function srcAppPagesCommonGlobalfooterGlobalfooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalfooterModule", function () {
      return GlobalfooterModule;
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


    var _globalfooter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./globalfooter-routing.module */
    "./src/app/pages/common/globalfooter/globalfooter-routing.module.ts");
    /* harmony import */


    var _globalfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");

    var GlobalfooterModule = function GlobalfooterModule() {
      _classCallCheck(this, GlobalfooterModule);
    };

    GlobalfooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlobalfooterModule
    });
    GlobalfooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlobalfooterModule_Factory(t) {
        return new (t || GlobalfooterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalfooter_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalfooterRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalfooterModule, {
        declarations: [_globalfooter_component__WEBPACK_IMPORTED_MODULE_3__["GlobalfooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalfooter_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalfooterRoutingModule"]],
        exports: [_globalfooter_component__WEBPACK_IMPORTED_MODULE_3__["GlobalfooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalfooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_globalfooter_component__WEBPACK_IMPORTED_MODULE_3__["GlobalfooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalfooter_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalfooterRoutingModule"]],
          exports: [_globalfooter_component__WEBPACK_IMPORTED_MODULE_3__["GlobalfooterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/globalheader/globalheader-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/common/globalheader/globalheader-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: GlobalheaderRoutingModule */

  /***/
  function srcAppPagesCommonGlobalheaderGlobalheaderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalheaderRoutingModule", function () {
      return GlobalheaderRoutingModule;
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


    var _globalheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");

    var routes = [{
      path: '',
      component: _globalheader_component__WEBPACK_IMPORTED_MODULE_2__["GlobalheaderComponent"]
    }];

    var GlobalheaderRoutingModule = function GlobalheaderRoutingModule() {
      _classCallCheck(this, GlobalheaderRoutingModule);
    };

    GlobalheaderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlobalheaderRoutingModule
    });
    GlobalheaderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlobalheaderRoutingModule_Factory(t) {
        return new (t || GlobalheaderRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalheaderRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalheaderRoutingModule, [{
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
  "./src/app/pages/common/globalheader/globalheader.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/common/globalheader/globalheader.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GlobalheaderComponent */

  /***/
  function srcAppPagesCommonGlobalheaderGlobalheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalheaderComponent", function () {
      return GlobalheaderComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GlobalheaderComponent_div_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r627.userLoginDetails.Firstname, " ", ctx_r627.userLoginDetails.Lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r627.userLoginDetails.EmailID);
      }
    }

    function GlobalheaderComponent_span_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CompanySelection"), " ");
      }
    }

    function GlobalheaderComponent_span_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r629 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r629.selectedCompanyInfo.CompanyNameEN);
      }
    }

    function GlobalheaderComponent_li_110_Template(rf, ctx) {
      if (rf & 1) {
        var _r634 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_li_110_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r634);

          var company_r632 = ctx.$implicit;

          var ctx_r633 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r633.onChangeOfCompany(company_r632);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r632 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r632.CompanyNameEN, " ");
      }
    }

    function GlobalheaderComponent_div_153_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r642 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_div_153_div_3_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r642);

          var ctx_r641 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r641.common.mesage.showMessage = !ctx_r641.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r635 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r635.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r635.common.mesage.mesage);
      }
    }

    function GlobalheaderComponent_div_153_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmailIDOrUsername"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function GlobalheaderComponent_div_153_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlobalheaderComponent_div_153_div_16_div_1_Template, 4, 6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r636 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r636.l.userId.errors.required);
      }
    }

    function GlobalheaderComponent_div_153_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CurrentPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function GlobalheaderComponent_div_153_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlobalheaderComponent_div_153_div_24_div_1_Template, 4, 6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r637 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r637.l.currentPassword.errors.required);
      }
    }

    function GlobalheaderComponent_div_153_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "CurrentPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeLessThan"), " 8 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function GlobalheaderComponent_div_153_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "CurrentPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 16 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function GlobalheaderComponent_div_153_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "PasswordError1"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "PasswordError2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "PasswordError3"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "PasswordError4"));
      }
    }

    function GlobalheaderComponent_div_153_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlobalheaderComponent_div_153_div_25_div_1_Template, 5, 9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GlobalheaderComponent_div_153_div_25_div_2_Template, 5, 9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GlobalheaderComponent_div_153_div_25_div_3_Template, 13, 12, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r638.l.currentPassword.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r638.l.currentPassword.errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r638.l.currentPassword.errors.pattern);
      }
    }

    function GlobalheaderComponent_div_153_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "NewPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function GlobalheaderComponent_div_153_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlobalheaderComponent_div_153_div_33_div_1_Template, 4, 6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r639 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r639.l.newPassword.errors.required);
      }
    }

    function GlobalheaderComponent_div_153_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "NewPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeLessThan"), " 8 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function GlobalheaderComponent_div_153_div_34_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "NewPassword"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 16 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function GlobalheaderComponent_div_153_div_34_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "PasswordError1"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "PasswordError2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "PasswordError3"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "PasswordError4"));
      }
    }

    function GlobalheaderComponent_div_153_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlobalheaderComponent_div_153_div_34_div_1_Template, 5, 9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GlobalheaderComponent_div_153_div_34_div_2_Template, 5, 9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GlobalheaderComponent_div_153_div_34_div_3_Template, 13, 12, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r640 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r640.l.newPassword.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r640.l.newPassword.errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r640.l.newPassword.errors.pattern);
      }
    }

    function GlobalheaderComponent_div_153_Template(rf, ctx) {
      if (rf & 1) {
        var _r653 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_div_153_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r653);

          var ctx_r652 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r652.showChangePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GlobalheaderComponent_div_153_div_3_Template, 5, 3, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, GlobalheaderComponent_div_153_div_16_Template, 2, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, GlobalheaderComponent_div_153_div_24_Template, 2, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GlobalheaderComponent_div_153_div_25_Template, 4, 3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, GlobalheaderComponent_div_153_div_33_Template, 2, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, GlobalheaderComponent_div_153_div_34_Template, 4, 3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_div_153_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r653);

          var ctx_r654 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r654.onSubmitFormChangePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r631 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.common.mesage.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, "ChangePassword"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r631.userLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, "EmailIDOrUsername"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 19, "EmailIDOrUsername"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.l.userId.touched && ctx_r631.l.userId.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 21, "CurrentPassword"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 23, "CurrentPassword"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.l.currentPassword.touched && ctx_r631.l.currentPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.l.currentPassword.touched && ctx_r631.l.currentPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 25, "NewPassword"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 27, "NewPassword"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.l.newPassword.touched && ctx_r631.l.newPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r631.l.newPassword.touched && ctx_r631.l.newPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 29, "ChangePassword"), " ");
      }
    }

    var GlobalheaderComponent =
    /*#__PURE__*/
    function () {
      function GlobalheaderComponent(router, apiCall, common, translate, el, formBuilder) {
        _classCallCheck(this, GlobalheaderComponent);

        this.router = router;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.formBuilder = formBuilder;
        this.iShowLoginPopup = false;
        this.activeLink = {};
        this.showCompanyList = false;
        this.showMobileCompanyList = false;
        this.listCompaniesData = [];
        this.totalListCompaniesData = 0; //async getCompanyLists(){
        //  let jsonData: any = {};
        //  let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
        //  let userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
        //  jsonData.UserID = userLoginDetails.ID;
        //  jsonData.EmiratesID = userLoginDetails.EmiratesID;
        //  jsonData.Token = userLoginDetails.Token;
        //  await this.apiCall.postAPICallWithToken('api/CompanyManager/getCompanyList', jsonData).then(result => {
        //    let totalListCompaniesData = result;
        //    this.common.setValueToSessionStorage('companyList', totalListCompaniesData);
        //    this.common.updateCompanyListContent(result);
        //    this.showDriverVehicleAddBtn(selectedCompanyInfo);
        //    if (this.totalListCompaniesData == 1) {
        //      this.common.setValueToSessionStorage('companyDataforDashboard', this.listCompaniesData[0]);
        //    } else {
        //      this.common.isLoginCompanyList = true;
        //    }
        //  }).catch(error => {
        //    console.log("error ", error);
        //  });
        //}
        // For change language

        this.isLanguageChange = false;
        this.userLoginDetails = {};
        this.companyList = [];
        this.selectedCompanyInfo = {};
        this.common.startWatchingIdleTime();
      }

      _createClass(GlobalheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var endPoint = this.router.url.lastIndexOf("/");
          var url = this.router.url.substring(endPoint + 1);
          this.activeLink[url] = true;
          this.common.isUserLoggedIn();
          this.assignCompanyListToDropdown();
          this.getCompanyList();
          this.reactiveFormName = this.formBuilder.group({
            languageName: ['']
          });
          this.userLogin = this.formBuilder.group({
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[&*@$%!()])[A-Za-z\d].{8,16}')]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[&*@$%!()])[A-Za-z\d].{8,16}')]]
          });
          this.selectedLanguage = this.common.getValueFromSessionStorage('selectedLanguage');

          if (this.selectedLanguage != null) {
            this.common.defaultSelectedUserLanguage = this.selectedLanguage;
            this.reactiveFormName.controls['languageName'].setValue(this.selectedLanguage);
            this.onSelectLanguage();
          } else {
            this.common.defaultSelectedUserLanguage = this.selectedLanguage;
            this.reactiveFormName.controls['languageName'].setValue(this.selectedLanguage);

            if (this.reactiveFormName.value.languageName == 'ar') {
              this.common.textAlignment = 'rtl';
            } else {
              this.common.textAlignment = 'ltr';
            }

            this.translate.setDefaultLang(this.common.defaultSelectedUserLanguage);
          }
        } // For changing Language based on selection

      }, {
        key: "languageShow",
        value: function languageShow() {
          if (!this.common.isLanguageChanges) {
            this.reactiveFormName.controls['languageName'].setValue("en");
            this.translate.setDefaultLang(this.reactiveFormName.value.languageName);
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('arabic-lang');
          } else {
            this.translate.setDefaultLang(this.reactiveFormName.value.languageName);
            var _body = document.getElementsByTagName('body')[0];

            _body.classList.add('arabic-lang');
          }
        }
      }, {
        key: "onLanguageChange",
        value: function onLanguageChange() {
          this.isLanguageChange = true;
          this.onSelectLanguage();
        } // For changing alignment based on language

      }, {
        key: "onSelectLanguage",
        value: function onSelectLanguage() {
          this.common.setValueToSessionStorage('selectedLanguage', this.reactiveFormName.value.languageName);
          this.common.prefLanguage = this.reactiveFormName.value.languageName;

          if (this.reactiveFormName.value.languageName == "ar") {
            this.common.textAlignment = 'rtl';
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('arabic-lang');
          } else {
            this.common.textAlignment = 'ltr';
            var _body2 = document.getElementsByTagName('body')[0];

            _body2.classList.remove('arabic-lang');
          }

          this.translate.use(this.reactiveFormName.value.languageName);

          if (this.isLanguageChange) {
            this.reloadCurrentRoute();
            this.isLanguageChange = false;
          }
        }
      }, {
        key: "reloadCurrentRoute",
        value: function reloadCurrentRoute() {
          var _this = this;

          var currentUrl = this.router.url;
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            _this.router.navigate([currentUrl]);
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "l",
        get: function get() {
          return this.userLogin.controls;
        }
      }, {
        key: "getCompanyList",
        value: function getCompanyList() {
          var _this2 = this;

          this.common.getCompanyListContent().subscribe(function (msg) {
            _this2.assignCompanyListToDropdown();
          });
        }
      }, {
        key: "assignCompanyListToDropdown",
        value: function assignCompanyListToDropdown() {
          this.userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
          var companyList = this.common.getValueFromSessionStorage('companyList');

          if (companyList != null) {
            var selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');

            if (selectedCompanyInfo != null) {
              this.selectedCompanyInfo = selectedCompanyInfo;
              this.showDriverVehicleAddBtn(this.selectedCompanyInfo);

              if (this.common.assignCompanyDashInfo) {
                this.selectedCompanyInfo = this.common.companyDashboardInfo;
                this.onChangeOfCompany(this.selectedCompanyInfo);
                this.common.assignCompanyDashInfo = false;
              }
            } else {
              if (companyList.length > 0) {
                this.selectedCompanyInfo = companyList[0];
                this.showDriverVehicleAddBtn(this.selectedCompanyInfo);
                this.onChangeOfCompany(this.selectedCompanyInfo);
              }
            }

            this.companyList = companyList;
          }
        } // Used for Logout functionality

      }, {
        key: "logOutAction",
        value: function logOutAction() {
          var _this3 = this;

          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          var outerJsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.EmiratesID = userLoginInfo.EmiratesID;
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.apiCall.postAPICallWithToken('api/LoginManager/Logout', outerJsonData).then(function (result) {
            if (result.Message) {
              _this3.common.showToastMessage(result.Message, 2);
            }

            localStorage.clear();
            /**Clear Session storage also, if user logout, Abhijith 23-11-2023 */

            sessionStorage.clear();

            _this3.router.navigateByUrl('/home/login');

            _this3.common.deleteValueFromSessionStorage('userLoginInfo');
          })["catch"](function (error) {
            console.log("error ", error);
          });
        }
      }, {
        key: "showMobileCompanyListMenu",
        value: function showMobileCompanyListMenu() {
          if (this.showMobileCompanyList) {
            this.showCompanyList = false;
          }

          if (!this.showMobileCompanyList) {
            this.showMobileCompanyList = true;
          } else {
            this.showMobileCompanyList = false;
          }
        }
      }, {
        key: "onChangeOfCompany",
        value: function onChangeOfCompany(company) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.showCompanyList = true;
                    this.showMobileCompanyList = false;
                    this.showDriverVehicleAddBtn(company);
                    this.common.setValueToSessionStorage('selectedCompanyInfo', company);
                    this.common.setValueToSessionStorage('companyDataforDashboard', company);
                    this.selectedCompanyInfo = company; //this.apiCall.postAPICallWithToken('api/EnquiryManager/DriverLetter', jsonData).then(result => {
                    //  this.driverDataforLatter = result;
                    //  this.common.setValueToSessionStorage('driverDataforLatter', this.driverDataforLatter);
                    //  this.router.navigate([]).then(result => { window.open('/print/printdriverdetail', '_blank'); });
                    //}).catch(error => {
                    //  console.log("error ", error);
                    //});

                    this.common.updateContent(company);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // For Hide/Show Add Driver/Vehicle button

      }, {
        key: "showDriverVehicleAddBtn",
        value: function showDriverVehicleAddBtn(company) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    debugger; // For Show/Hide add Company/Driver/Vehicle add button if  CompanyType is "Franchise"
                    //this.common.showAddCompanyBtn = true;
                    // this.common.showAddDriverBtn = true;
                    // this.common.showAddVehicleBtn = true;

                    this.common.showDriverVehicleAddBtnPendingPaymentValidation = false;
                    this.common.showDriverVehicleAddBtnLicenseNumberValidation = false;
                    this.common.showDriverVehicleAddBtnFineValidation = false;
                    this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;

                    if (company.CompanyType == "Franchise") {
                      this.common.isCompanyTypeFranchise = true;
                    } else {
                      this.common.isCompanyTypeFranchise = false;
                    } //Added below section by surya


                    if (company.CompanyType == "Franchise") {
                      debugger; //this.ispaybtnDis = true;
                      //this.common.showAddCompanyBtn = false;

                      this.common.showLateFee = false;
                    }

                    if (company.CompanyType == 'Company') {
                      this.common.isCompanyTypeFranchise = false; //this.common.showAddCompanyBtn = false;
                      //This boolean will be used to display renewals based on company type is franchise or not Abhijith

                      this.common.showLateFee = true; //End Abhijith      
                      // For Show/Hide add Driver/Vehicle  button based on Pending payment status of selected company
                      //   if (company.PendingPayments) {
                      //     this.common.AddDriverBtn_pay = company.PendingPayments;
                      //     this.common.AddVehicleBtn_pay = company.PendingPayments;
                      //     this.common.showDriverVehicleAddBtnPendingPaymentValidation = true;
                      //   } else {
                      //     this.common.AddDriverBtn_pay = company.PendingPayments;
                      //     this.common.AddVehicleBtn_pay = company.PendingPayments;
                      //     this.common.showDriverVehicleAddBtnPendingPaymentValidation = false;
                      //   }
                      //   // For Show/Hide add Driver/Vehicle add button and alert message if Company License Number is "0" and als
                      //   if (company.LicenseNumber == 0) {
                      //     this.common.AddDriverBtn_license = true;
                      //     this.common.AddVehicleBtn_license = true;
                      //     this.common.showDriverVehicleAddBtnLicenseNumberValidation = true;
                      //   } else {
                      //     this.common.AddDriverBtn_license = false;
                      //     this.common.AddVehicleBtn_license = false;
                      //     this.common.showDriverVehicleAddBtnLicenseNumberValidation = false;
                      //   }
                      //   // For Show/Hide add Driver/Vehicle button based on Selected Company is expired or not
                      //   if (company.PermitExpiryDate != null && company.PermitExpiryDate != '') {
                      //     var newdate = company.PermitExpiryDate.split("-").reverse().join("-");
                      //     let enddate = new Date(newdate);
                      //     let today = new Date();
                      //     enddate.setDate(enddate.getDate());
                      //     if (today >= enddate) {
                      //       this.common.AddDriverBtn_company = true;
                      //       this.common.AddVehicleBtn_company = true;
                      //       this.common.showDriverVehicleAddBtnCompanyExpireValidation = true;
                      //     }
                      //     else {
                      //       this.common.AddDriverBtn_company = false;
                      //       this.common.AddVehicleBtn_company = false;
                      //       this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;
                      //     }
                      //   } else {
                      //     this.common.AddDriverBtn_company = false;
                      //     this.common.AddVehicleBtn_company = false;
                      //     this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;
                      //   }
                      //   //based on all conditions at final we are enabling and disabling add driver buttons
                      //   if (this.common.AddDriverBtn_pay ||
                      //     this.common.AddDriverBtn_license || this.common.AddDriverBtn_company) {
                      //     this.common.showAddDriverBtn = true;
                      //   } else {
                      //     this.common.showAddDriverBtn = false;
                      //   }
                      //   if (this.common.AddVehicleBtn_pay ||
                      //     this.common.AddVehicleBtn_license || this.common.AddVehicleBtn_company) {
                      //     this.common.showAddVehicleBtn = true;
                      //   } else {
                      //     this.common.showAddVehicleBtn = false;
                      //   }
                    }

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // For Navigate to Company Dashboard Page

      }, {
        key: "navigatetoCompanyDashboardPage",
        value: function navigatetoCompanyDashboardPage() {
          this.common.mesage = {};
          this.router.navigateByUrl('/common/dashboard');
        } // For Navigate to Company List Page

      }, {
        key: "navigatetoCompanyListPage",
        value: function navigatetoCompanyListPage() {
          this.common.mesage = {};
          this.router.navigateByUrl('/company/listcompany');
        } // For Navigate to Vehicle List Page

      }, {
        key: "navigatetoVehicleListPage",
        value: function navigatetoVehicleListPage() {
          this.common.mesage = {};

          if (this.selectedCompanyInfo != null) {
            this.router.navigateByUrl('/vehicle/listvehicle');
          } else {
            this.common.showToastMessage('There is no Company associate with this user. Kindly contact to Administrator ', 2);
          }
        } //User for navigate to Driver List

      }, {
        key: "navigatetoDriverListPage",
        value: function navigatetoDriverListPage() {
          this.common.mesage = {};
          this.router.navigateByUrl('/driver/listdriver');
        } // For Navigate to Company List Fine Page

      }, {
        key: "navigatetoFineListPage",
        value: function navigatetoFineListPage() {
          this.common.mesage = {};

          if (this.selectedCompanyInfo != null) {
            this.router.navigateByUrl('/transactions/listfines');
          } else {
            this.common.showToastMessage('There is no Company associate with this user. Kindly contact to Administrator ', 2);
          }
        } //User for navigate to Company Payments

      }, {
        key: "navigatetoPaymentsListPage",
        value: function navigatetoPaymentsListPage() {
          this.common.mesage = {};
          this.router.navigateByUrl('/company/listcompanypayments');
        } // For Navigate to Company List Transaction Page

      }, {
        key: "navigatetoTransactionListPage",
        value: function navigatetoTransactionListPage() {
          this.common.mesage = {};

          if (this.selectedCompanyInfo != null) {
            this.router.navigateByUrl('/transactions/listtransactions');
          } else {
            this.common.showToastMessage('There is no Company associate with this user. Kindly contact to Administrator ', 2);
          }
        } // For Show/Hide Change Password Pop-up

      }, {
        key: "showChangePassword",
        value: function showChangePassword() {
          this.common.mesage = {};

          if (this.iShowLoginPopup) {
            this.iShowLoginPopup = false;
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('changePassword');
          } else {
            this.iShowLoginPopup = true;
            var _body3 = document.getElementsByTagName('body')[0];

            _body3.classList.add('changePassword');
          }
        } // Change Password Submit Form

      }, {
        key: "onSubmitFormChangePassword",
        value: function onSubmitFormChangePassword() {
          var _this4 = this;

          if (this.userLogin.invalid) {
            this.userLogin.markAllAsTouched();
            this.common.autoFocusOnErrorFieldInRecativeForm(this.userLogin, this.el);
            return;
          }

          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.Token = userLoginInfo.Token;
          jsonData.ID = userLoginInfo.ID;
          jsonData.Username = this.userLogin.value.userId;
          jsonData.CurrentPassword = this.userLogin.value.currentPassword;
          jsonData.NewPassword = this.userLogin.value.newPassword;
          this.apiCall.postAPICallWithToken('api/LoginManager/ResetPassword', jsonData).then(function (result) {
            if (result.Message) {
              _this4.common.showToastMessage(result.Message, 2);
            }

            _this4.iShowLoginPopup = false; //this.router.navigateByUrl('/home/login');

            _this4.logOutAction();
          })["catch"](function (error) {
            console.log("error ", error);
          });
        }
      }]);

      return GlobalheaderComponent;
    }();

    GlobalheaderComponent.ɵfac = function GlobalheaderComponent_Factory(t) {
      return new (t || GlobalheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    GlobalheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GlobalheaderComponent,
      selectors: [["app-globalheader"]],
      decls: 154,
      vars: 59,
      consts: [["id", "main-wrapper", "data-layout", "horizontal", "data-navbarbg", "skin1", "data-sidebartype", "full", "data-sidebar-position", "fixed", "data-header-position", "fixed", "data-boxed-layout", "boxed", 3, "dir"], ["data-navbarbg", "skin1", 1, "topbar"], [1, "navbar", "top-navbar", "navbar-expand-lg", "navbar-dark"], ["data-logobg", "skin1", 1, "navbar-header"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none"], ["data-toggle", "collapse", "data-target", "#navbarSupportedContent1", "aria-controls", "navbarSupportedContent1", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "ti-menu"], [1, "navbar-brand"], [1, "logo-icon"], ["src", "/assets/images/rakta-png.png", "alt", "homepage", 1, "dark-logo"], ["src", "/assets/images/rakta-png.png", "alt", "homepage", 1, "light-logo"], ["href", "javascript:void(0)", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "mr-auto"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], [1, "dropdown-menu", "dropdown-menu-right", "mailbox", "scale-up"], [1, "list-style-none"], [1, "border-bottom", "rounded-top", "py-3", "px-4"], [1, "mb-0", "font-weight-medium"], [1, "message-center", "notifications", "position-relative", "notifications-message-center-blk"], ["href", "javascript:void(0)", 1, "message-item", "d-flex", "align-items-center", "border-bottom", "px-3", "py-2"], [1, "btn", "btn-danger", "rounded-circle", "btn-circle"], [1, "fa", "fa-link"], [1, "w-75", "d-inline-block", "v-middle", "pl-2"], [1, "message-title", "mb-0", "mt-1"], [1, "font-12", "text-nowrap", "d-block", "text-muted", "text-truncate"], [1, "font-12", "text-nowrap", "d-block", "text-muted"], [1, "btn", "btn-success", "rounded-circle", "btn-circle"], [1, "ti-calendar"], [1, "btn", "btn-info", "rounded-circle", "btn-circle"], [1, "ti-settings"], [1, "btn", "btn-primary", "rounded-circle", "btn-circle"], [1, "ti-user"], ["href", "javascript:void(0);", 1, "nav-link", "border-top", "text-center", "text-dark", "pt-3"], [1, "fa", "fa-angle-right"], ["href", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "dropdown-menu", "mailbox", "dropdown-menu-right", "scale-up"], [1, "dropdown-user", "list-style-none"], [1, "dw-user-box", "p-3", "d-flex"], ["class", "u-text ml-2", 4, "ngIf"], ["role", "separator", 1, "dropdown-divider"], [1, "user-list", 3, "click"], [1, "px-3", "py-2"], [1, "fa", "fa-power-off"], [3, "formGroup"], ["formControlName", "languageName", 3, "change"], ["value", "en", "selected", "", 2, "color", "black"], ["value", "ar", 2, "color", "black"], ["data-sidebarbg", "skin6", "id", "navbarSupportedContent1", 1, "left-sidebar"], [1, "scroll-sidebar"], [1, "sidebar-nav"], ["id", "sidebarnav"], [1, "sidebar-item", "nav_search_field", 3, "click"], ["aria-expanded", "false", 1, "sidebar-link", "has-arrow", "waves-effect", "waves-dark"], ["class", "hide-menu", 4, "ngIf"], ["aria-expanded", "false", 1, "collapse", "first-level", "bg-white", "dp-down", "nav_search_field_dropdown"], ["class", "sidebar-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "click"], [1, "sidebar-link", "two-column", "waves-effect", "waves-dark", 3, "click"], [1, "hide-menu"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "click"], ["class", "rakta_login_blk", 4, "ngIf"], [1, "u-text", "ml-2"], [1, "mb-0"], [1, "text-muted", "mb-1", "font-14"], [1, "sidebar-link"], [1, "rakta_login_blk"], [1, "login_container_blk"], ["src", "/assets/images/close_image.svg", "alt", "close image", 1, "close_img", 3, "click"], [3, "class", 4, "ngIf"], [1, "heading"], [1, "login_container", 3, "formGroup"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["type", "text", "formControlName", "userId", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "currentPassword", 1, "form-control", "password_field", 3, "placeholder"], ["class", "invalid-feedback change_password_msg_error change_password_error", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", 1, "form-control", "password_field", 3, "placeholder"], [1, "login_btn", 3, "click"], [1, "close", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "change_password_msg_error", "change_password_error"]],
      template: function GlobalheaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " --> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "em", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "em", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "em", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Luanch Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Just see the my new admin! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "9:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "em", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Event today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Just a reminder that you have event ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "9:10 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "em", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " You can customize this template as you want ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "9:08 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "em", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Pavan kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Just see the my admin! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "9:02 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Check all notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "em", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, GlobalheaderComponent_div_79_Template, 5, 3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_81_listener() {
            return ctx.showChangePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "em", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_87_listener() {
            return ctx.logOutAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "em", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "form", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function GlobalheaderComponent_Template_select_change_94_listener() {
            return ctx.onLanguageChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "aside", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "nav", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ul", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_105_listener() {
            return ctx.showMobileCompanyListMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, GlobalheaderComponent_span_107_Template, 3, 3, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, GlobalheaderComponent_span_108_Template, 2, 1, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "ul", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, GlobalheaderComponent_li_110_Template, 4, 1, "li", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_111_listener() {
            return ctx.navigatetoCompanyDashboardPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_112_listener() {
            return ctx.navigatetoCompanyDashboardPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](115, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_116_listener() {
            return ctx.navigatetoCompanyDashboardPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_117_listener() {
            return ctx.navigatetoCompanyListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_118_listener() {
            return ctx.navigatetoCompanyListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_122_listener() {
            return ctx.navigatetoCompanyListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_123_listener() {
            return ctx.navigatetoVehicleListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_124_listener() {
            return ctx.navigatetoVehicleListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_128_listener() {
            return ctx.navigatetoVehicleListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_129_listener() {
            return ctx.navigatetoDriverListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_130_listener() {
            return ctx.navigatetoDriverListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](133, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_134_listener() {
            return ctx.navigatetoDriverListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_135_listener() {
            return ctx.navigatetoTransactionListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_136_listener() {
            return ctx.navigatetoTransactionListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](139, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_140_listener() {
            return ctx.navigatetoTransactionListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_141_listener() {
            return ctx.navigatetoFineListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_142_listener() {
            return ctx.navigatetoFineListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](145, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_146_listener() {
            return ctx.navigatetoFineListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_li_click_147_listener() {
            return ctx.navigatetoPaymentsListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_a_click_148_listener() {
            return ctx.navigatetoPaymentsListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](151, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "ul", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GlobalheaderComponent_Template_ul_click_152_listener() {
            return ctx.navigatetoPaymentsListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, GlobalheaderComponent_div_153_Template, 39, 31, "div", 62);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 35, "MyProfile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLoginDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 37, "ChangePassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 39, "Logout"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 41, "English"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 43, "Arabic"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.selectedCompanyInfo && ctx.selectedCompanyInfo.CompanyNameEN));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedCompanyInfo && ctx.selectedCompanyInfo.CompanyNameEN);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mobile_hide_field", ctx.showCompanyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.dashboard);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](115, 45, "Dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listcompany || ctx.activeLink.linkexistingcompany || ctx.activeLink.addcompany || ctx.activeLink.detailcompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 47, "Company"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listvehicle || ctx.activeLink.detailvehicle || ctx.activeLink.addvehicle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](127, 49, "Vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listdriver || ctx.activeLink.detaildriver || ctx.activeLink.adddriver);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](133, 51, "Driver"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listtransactions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](139, 53, "Transaction"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listfines);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](145, 55, "Fines"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_section", ctx.activeLink.listcompanypayments);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](151, 57, "Payments"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.iShowLoginPopup);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9nbG9iYWxoZWFkZXIvZ2xvYmFsaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-globalheader',
          templateUrl: './globalheader.component.html',
          styleUrls: ['./globalheader.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/globalheader/globalheader.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/common/globalheader/globalheader.module.ts ***!
    \******************************************************************/

  /*! exports provided: GlobalheaderModule */

  /***/
  function srcAppPagesCommonGlobalheaderGlobalheaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalheaderModule", function () {
      return GlobalheaderModule;
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


    var _globalheader_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./globalheader-routing.module */
    "./src/app/pages/common/globalheader/globalheader-routing.module.ts");
    /* harmony import */


    var _globalheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var GlobalheaderModule = function GlobalheaderModule() {
      _classCallCheck(this, GlobalheaderModule);
    };

    GlobalheaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlobalheaderModule
    });
    GlobalheaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlobalheaderModule_Factory(t) {
        return new (t || GlobalheaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalheader_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalheaderRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalheaderModule, {
        declarations: [_globalheader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalheaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalheader_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalheaderRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
        exports: [_globalheader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalheaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalheaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_globalheader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalheaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _globalheader_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalheaderRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          exports: [_globalheader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalheaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common.service */
    "./src/app/services/common.service.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(httpClient, spinner, common, baseUrl) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.spinner = spinner;
        this.common = common;
        this.needToShowLoader = true;
        this.APIBASEURL = baseUrl;
      } // API Error handler Method


      _createClass(ApiService, [{
        key: "errorHandler",
        value: function errorHandler(error) {
          console.log(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](error);
        } //Post response  or push data by Post method

      }, {
        key: "postAPICallWithoutToken",
        value: function postAPICallWithoutToken(APIEndpoint, formData) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      _this5.httpClient.post(_this5.APIBASEURL + APIEndpoint, formData).subscribe(function (res) {
                        resolve(res);
                      }, function (err) {
                        reject(err);
                      });
                    });

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        } //Post response  or push data by Post method

      }, {
        key: "PersonInqUnifiedNumberAPICall",
        value: function PersonInqUnifiedNumberAPICall(APIEndpoint, formData) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      var userLoginInfo = _this6.common.getValueFromSessionStorage('userLoginInfo');

                      var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'Token': userLoginInfo.Token ? userLoginInfo.Token : null
                        })
                      };

                      _this6.httpClient.post(_this6.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                        resolve(res);
                      }, function (err) {
                        reject(err);
                      });
                    });

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        } //Post response  or push data by Post method

      }, {
        key: "postAPICallWithToken",
        value: function postAPICallWithToken(APIEndpoint, formData) {
          var hideLoader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      var token = _this7.common.getValueFromSessionStorage('smartAccessTokenForSession');
                      /*if (token == null) {
                        (async (): Promise<void> => {
                          let res = await this.httpClient.post<any>("api/EnquiryManager/SmartGenerateToken", {}).toPromise();
                          token = res.access_token;
                          this.common.setValueToSessionStorage('smartAccessTokenForSession', token);
                        })();
                                 }*/


                      var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer Token",
                          'Token': "".concat(token)
                        })
                      };

                      _this7.spinner.show();

                      _this7.httpClient.post(_this7.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                        if (hideLoader) {
                          _this7.spinner.hide();
                        } //console.log("APIEndpoint ", APIEndpoint, " formData ", formData , " res ", res);


                        resolve(res);
                      }, function (err) {
                        var userdata = {};
                        userdata = _this7.common.getValueFromSessionStorage('userLoginInfo');
                        var txt = "You are not authorized";
                        var text = "You are not authorized User.";
                        var iserror = false;
                        var text1 = "You are not authorized user.";
                        var msg1 = "Not Authorized.";

                        if (err.error) {
                          if (typeof err.error == 'string') {
                            if (err.error.includes(text)) {
                              iserror = true;
                            }
                          } else {
                            if (err.error.Message == txt || err.error.Message == text || err.error.Message == text1 || err.error.Message == msg1) {
                              iserror = true;
                            }
                          }
                        } //console.warn("APIEndpoint ", APIEndpoint, " err ", err);


                        if (err.status == 400 && userdata && iserror) {
                          var jsonData = {};

                          var pass = _this7.common.getValueFromSessionStorage('password');

                          jsonData.Username = userdata.Username;
                          jsonData.Password = pass;

                          _this7.postAPICallWithToken('api/LoginManager/Login', jsonData).then(function (result) {
                            debugger;

                            if (result.Message) {
                              _this7.common.showToastMessage(result.Message, 2);
                            } else {
                              _this7.common.setValueToSessionStorage('userLoginInfo', result);

                              userdata = _this7.common.getValueFromSessionStorage('userLoginInfo');
                              if (formData.Token) formData.Token = userdata.Token;

                              _this7.spinner.show();

                              if (userdata && APIEndpoint == "api/LoginManager/Login") {
                                if (hideLoader) {
                                  _this7.spinner.hide();
                                }
                              } else {
                                _this7.httpClient.post(_this7.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                                  if (hideLoader) {
                                    _this7.spinner.hide();
                                  }

                                  resolve(res);
                                }, function (err) {
                                  _this7.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                                  if (hideLoader) {
                                    _this7.spinner.hide();
                                  }

                                  reject(err);
                                });
                              }
                            }
                          });
                        } else if (err.status == 401) {
                          _this7.httpClient.post("api/EnquiryManager/SmartGenerateToken", formData).subscribe(function (resGen) {
                            token = resGen.access_token;

                            _this7.common.setValueToSessionStorage('smartAccessTokenForSession', token);

                            var httpOptionsRed = {
                              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer Token",
                                'Token': "".concat(token)
                              })
                            };

                            _this7.spinner.show();

                            _this7.httpClient.post(_this7.APIBASEURL + APIEndpoint, formData, httpOptionsRed).subscribe(function (res) {
                              if (hideLoader) {
                                _this7.spinner.hide();
                              }

                              resolve(res);
                            }, function (err) {
                              _this7.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                              if (hideLoader) {
                                _this7.spinner.hide();
                              }

                              reject(err);
                            });
                          }, function (err) {
                            _this7.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                            if (hideLoader) {
                              _this7.spinner.hide();
                            }

                            reject(err);
                          });
                        } else {
                          // If 400 / 500 / 0 error occurs while calling API then showing that error message
                          if (APIEndpoint.indexOf('UserRegistration') == -1) {
                            if (APIEndpoint.indexOf('Login') == -1) {
                              _this7.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);
                            }
                          }

                          if (hideLoader) {
                            _this7.spinner.hide();
                          }

                          reject(err);
                        }
                      });
                    });

                  case 2:
                    return _context5.abrupt("return", _context5.sent);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        } // For Enquiry token Start
        //Post response  or push data by Post method

      }, {
        key: "postEnquiryAPICallWithToken",
        value: function postEnquiryAPICallWithToken(APIEndpoint, formData) {
          var hideLoader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      var token = _this8.common.getValueFromSessionStorage('enquiryAccessToken'); //console.log("token ", token);


                      if (token == null) {
                        (function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee6() {
                            var res;
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    _context6.next = 2;
                                    return this.httpClient.post("api/EnquiryManager/GenerateToken", {}).toPromise();

                                  case 2:
                                    res = _context6.sent;
                                    token = res.access_token;
                                    this.common.setValueToSessionStorage('enquiryAccessToken', token);

                                  case 5:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        })();
                      }

                      var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer Token",
                          'Token': "".concat(token)
                        })
                      };

                      _this8.spinner.show();

                      _this8.httpClient.post(_this8.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                        if (hideLoader) {
                          _this8.spinner.hide();
                        } //console.log("APIEndpoint ", APIEndpoint, " res ", res);


                        resolve(res);
                      }, function (err) {
                        var userdata = {}; //below code added by radhika if token will get expired we calling login api and getting token

                        userdata = _this8.common.getValueFromSessionStorage('userLoginInfo');
                        var txt = "You are not authorized";
                        var text1 = "You are not authorized user.";
                        var text = "You are not authorized User.";
                        var iserror = false;
                        var msg1 = "Not Authorized.";

                        if (err.error) {
                          if (typeof err.error == 'string') {
                            if (err.error.includes(text)) {
                              iserror = true;
                            }
                          } else {
                            if (err.error.Message == txt || err.error.Message == text || err.error.Message == text1 || err.error.Message == msg1) {
                              iserror = true;
                            }
                          }
                        } //console.warn("APIEndpoint ", APIEndpoint, " err ", err);


                        if (err.status == 400 && userdata && iserror) {
                          var jsonData = {};

                          var pass = _this8.common.getValueFromSessionStorage('password');

                          jsonData.Username = userdata.Username;
                          jsonData.Password = pass;

                          _this8.postAPICallWithToken('api/LoginManager/Login', jsonData).then(function (result) {
                            debugger;

                            if (result.Message) {
                              _this8.common.showToastMessage(result.Message, 2);
                            } else {
                              _this8.common.setValueToSessionStorage('userLoginInfo', result);

                              userdata = _this8.common.getValueFromSessionStorage('userLoginInfo');
                              if (formData.Token) formData.Token = userdata.Token;

                              _this8.spinner.show();

                              if (userdata && APIEndpoint == "api/LoginManager/Login") {
                                if (hideLoader) {
                                  _this8.spinner.hide();
                                }
                              } else {
                                _this8.httpClient.post(_this8.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                                  if (hideLoader) {
                                    _this8.spinner.hide();
                                  }

                                  resolve(res);
                                }, function (err) {
                                  _this8.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                                  if (hideLoader) {
                                    _this8.spinner.hide();
                                  }

                                  reject(err);
                                });
                              }
                            }
                          });
                        } else if (err.status == 401) {
                          _this8.httpClient.post("api/EnquiryManager/GenerateToken", formData).subscribe(function (resGen) {
                            token = resGen.access_token;

                            _this8.common.setValueToSessionStorage('enquiryAccessToken', token);

                            var httpOptionsRed = {
                              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer Token",
                                'Token': "".concat(token)
                              })
                            };

                            _this8.spinner.show();

                            _this8.httpClient.post(_this8.APIBASEURL + APIEndpoint, formData, httpOptionsRed).subscribe(function (res) {
                              if (hideLoader) {
                                _this8.spinner.hide();
                              }

                              resolve(res);
                            }, function (err) {
                              _this8.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                              if (hideLoader) {
                                _this8.spinner.hide();
                              }

                              reject(err);
                            });
                          }, function (err) {
                            _this8.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                            if (hideLoader) {
                              _this8.spinner.hide();
                            }

                            reject(err);
                          });
                        } else {
                          // If 400 / 500 / 0 error occurs while calling API then showing that error message
                          _this8.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                          if (hideLoader) {
                            _this8.spinner.hide();
                          }

                          reject(err);
                        }
                      });
                    });

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        } // For Enquiry token end
        //Post response  or push data by Post method

      }, {
        key: "postAPICallforLetterwithToken",
        value: function postAPICallforLetterwithToken(APIEndpoint, token, formData) {
          var hideLoader = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer Token",
                          'Token': "".concat(token)
                        })
                      };

                      _this9.spinner.show();

                      _this9.httpClient.post(_this9.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                        //console.log("APIEndpoint", APIEndpoint, " formData ", formData, " result ", res);
                        if (hideLoader) {
                          _this9.spinner.hide();
                        }

                        resolve(res);
                      }, function (err) {
                        // Check Type of the Error
                        //console.log("APIEndpoint", APIEndpoint, " formData ", formData, " Error ", err);
                        _this9.spinner.hide();

                        if (APIEndpoint.indexOf('UserRegistration') == -1) {
                          _this9.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);
                        }

                        reject(err);
                      });
                    });

                  case 2:
                    return _context8.abrupt("return", _context8.sent);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        } //Post response  or push data by Post method

      }, {
        key: "postAPICallforRefreshToken",
        value: function postAPICallforRefreshToken(APIEndpoint, token, formData) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return new Promise(function (resolve, reject) {
                      //Constructs a `POST` request that interprets the body as a JSON object
                      var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer Token",
                          'Token': "".concat(token)
                        })
                      }; //this.spinner.show();

                      _this10.httpClient.post(_this10.APIBASEURL + APIEndpoint, formData, httpOptions).subscribe(function (res) {
                        //console.log("APIEndpoint", APIEndpoint, " formData ", formData, " result ", res);
                        resolve(res);
                      }, function (err) {
                        // Check Type of the Error
                        //console.log("APIEndpoint", APIEndpoint, " formData ", formData, " Error ", err);
                        //this.spinner.hide();
                        _this10.common.showToastMessage('Something Went Worng.Please Try Again Later', 2);

                        reject(err);
                      });
                    });

                  case 2:
                    return _context9.abrupt("return", _context9.sent);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('BASE_URL'));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }, {
          type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['BASE_URL']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/common.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_user_idle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-user-idle */
    "./node_modules/angular-user-idle/__ivy_ngcc__/fesm2015/angular-user-idle.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pages_common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pages/common/confirmdialog/confirmation-dialog-service.service */
    "./src/app/pages/common/confirmdialog/confirmation-dialog-service.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(toastr, httpClient, userIdle, translate, confirmationDialogService, router, modalService) {
        _classCallCheck(this, CommonService);

        this.toastr = toastr;
        this.httpClient = httpClient;
        this.userIdle = userIdle;
        this.translate = translate;
        this.confirmationDialogService = confirmationDialogService;
        this.router = router;
        this.modalService = modalService;
        this.isProductionConfig = false;
        this.paymentServeId = this.isProductionConfig ? '1373' : '1448';
        /***************** Development/UAT  Cerdential Start ********************/
        //public readonly paymentServeId: string = '1448';

        /***************** Development/UAT  Cerdential END ********************/

        /***************** Production  Cerdential Start ********************/
        //public readonly paymentServeId: string = '1373';

        /***************** Production  Cerdential END ********************/
        // default language

        this.defaultSelectedUserLanguage = 'en'; // Text align direction

        this.textAlignment = "ltr"; // allow filetypes in Application

        this.allowedFileType = "png,jpg,jpeg,doc,docx,pdf";
        this.allowedFileTypephoto = "png,jpg,jpeg"; // allow file size in Application

        this.allowedFileSizeInMB = 5; // Used for reload the page

        this.isPageLoad = false; // Selected Language

        this.prefLanguage = 'en'; //For First time page load selected language

        this.isLanguageChanges = false; //For arabic language assigning value as 'an'

        this.arabicLanguage = 'ar'; // Used for Back to Search Fine Enquiry Page

        this.isBackToSearchFine = false; //Used for is Company Payment or not for Company List page

        this.isComapnyPayment = false; // To check Idle Time Started or not

        this.isIdleTimeStarted = false; // Used for Back to Fine Enquiry Search field

        this.isBackToFineEnquirySearch = false; // Used for show Add Driver button based on selected company payment status

        this.showAddDriverBtn = false; // Used for show Add Company button based on selected company Type 

        this.showAddCompanyBtn = false; // Used for show Add Vehicle button based on selected company payment status

        this.showAddVehicleBtn = false;
        this.AddDriverBtn_fine = false;
        this.AddDriverBtn_pay = false;
        this.AddDriverBtn_license = false;
        this.AddDriverBtn_company = false;
        this.AddVehicleBtn_fine = false;
        this.AddVehicleBtn_pay = false;
        this.AddVehicleBtn_license = false;
        this.AddVehicleBtn_company = false; // Used for show Add Driver button based on selected company payment status

        this.isCompanyTypeFranchise = false; // Used for show validation on Add Vehicle/Driver button based on pending fine payment

        this.showDriverVehicleAddBtnFineValidation = false; // Used for show validation on Add Vehicle/Driver button based on company license number is '0' or not

        this.showDriverVehicleAddBtnLicenseNumberValidation = false; // Used for show validation on Add Vehicle/Driver button based on company Pending Fine

        this.showDriverVehicleAddBtnPendingFineValidation = false; // Used for show validation on Add Vehicle/Driver button based on company Expire

        this.showDriverVehicleAddBtnCompanyExpireValidation = false; // Used for show validation on Add Vehicle/Driver button based on company Pending payment

        this.showDriverVehicleAddBtnPendingPaymentValidation = false; //Used for show display late fee & Total Amount if company type is not Franchise.

        this.showLateFee = true; // Used for assign company dashboard info

        this.companyDashboardInfo = [];
        this.assignCompanyDashInfo = false;
        this.isfine = false; //

        this.isLoginCompanyList = false; // Email Pattern

        this.emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[A-Za-z]{2,3}"; // inputField Pattern

        this.inputFieldPattern = "([a-zA-Z0-9']+( [a-zA-Z0-9']+)*)"; // Restrict Special Characters

        this.blockSpacialCherecter = "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z0-9-_]*$"; //"/^[^`~!@#$%\^&*()_+={}|[\]\\:';<>?,./1-9]*$/";

        this.nameRegularExpression = "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z0-9s]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z0-9-_s]*$";
        this.specialCharacterExpression = "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z0-9.,s]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z0-9.,-_s]*$";
        this.numberExpression = "^[0-9]*$";
        this.onlyALphaArabicRegx = "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Zs]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_s]*$";
        this.driverNotesRegx = "^[a-zA-Z0-9.,']+( [a-zA-Z0-9.,']+)*$";
        this.englishPattern = "[a-zA-Z0-9 ._@&-]*";
        this.arabicPattern = new RegExp("^[\u0621-\u064A\u0660-\u0669 0-9 ._@&-]+$"); // //temporarily we are making it as 0  based on client mail, othrwise it should be 20 -Abhijith 04-07-23
        // public readonly driverLateFee: number = 20;
        // //Vehicle Late Fee Amount
        // //temporarily we are making it as 0  based on client mail, othrwise it should be 70 -Abhijith 04-07-23
        // public readonly vehicleLateFee: number = 70;
        // //Company Late Fee Amount
        // //temporarily we are making it as 0  based on client mail, othrwise it should be 70 -Abhijith 04-07-23
        //public readonly companyLateFee: number = 70;

        this.closeNoticePopUp = false;
        this.disablefine = false;
        this.DisableFineRestriction = false; // For Select Min Date

        this.minimumDate = new Date();
        this.minDate = new Date(this.minimumDate.setDate(this.minimumDate.getDate() - 1)); //date format with dash in YYYY-MM-DD

        this.dateFields = []; // for show toast message

        this.mesage = {};
        this.isOnSamePage = true;
        this.siblingMsg = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.companyList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.signatures = {
          JVBERi0: "application/pdf",
          R0lGODdh: "image/gif",
          R0lGODlh: "image/gif",
          iVBORw0KGgo: "image/png",
          AAQSkZJRgA: "image/jpeg",
          UEsDBBQABgA: "application/octet-stream"
        };
        this.startWatchingIdleTime();
        this.routerNavigationDetection();
      }

      _createClass(CommonService, [{
        key: "showToastMessage",
        value: //Driver Late Fee Amount
        // for show toast message
        function showToastMessage(message, messageType) {
          var obj = {
            closeButton: true,
            timeOut: 3000,
            progressBar: true,
            positionClass: 'toast-top-full-width'
          };

          if (messageType == 1) {
            this.toastr.success('', message, obj);
          } else {
            this.toastr.error('', message, obj);
          }
        } //Date format - Abhijith 03-04-2023

      }, {
        key: "convertDateFormat",
        value: function convertDateFormat(inputData) {
          if (inputData != null) {
            var date = inputData.getDate();
            var month = inputData.getMonth() + 1;
            var convertedDate = inputData.getFullYear() + "-" + (month > 9 ? month : "0" + month) + "-" + (date > 9 ? date : "0" + date);
            return convertedDate;
          } else {
            return inputData;
          }
        } // get the Direction of word

      }, {
        key: "textDirection",
        value: function textDirection(selectedLanguage) {
          //var textAlignment = "";
          if (selectedLanguage == this.arabicLanguage) {
            this.textAlignment = 'rtl';
            this.prefLanguage = 'ar';
          } else {
            this.textAlignment = 'ltr';
            this.prefLanguage = 'en';
          }

          return this.textAlignment;
        } //Update an entry just as you would create a new one with setItem, but with a key that already exists:

      }, {
        key: "setValueToSessionStorage",
        value: function setValueToSessionStorage(key, value) {
          sessionStorage.setItem(key, JSON.stringify(value));
        } //Read entries with sessionStorage.getItem:

      }, {
        key: "getValueFromSessionStorage",
        value: function getValueFromSessionStorage(key) {
          try {
            return JSON.parse(sessionStorage.getItem(key));
          } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
          }
        } //Delete session storeage an entry with the removeItem method:

      }, {
        key: "deleteValueFromSessionStorage",
        value: function deleteValueFromSessionStorage(key) {
          sessionStorage.removeItem(key);
        } //Update an entry just as you would create a new one with setItem, but with a key that already exists:

      }, {
        key: "setValueToLocalStorage",
        value: function setValueToLocalStorage(key, value) {
          localStorage.setItem(key, JSON.stringify(value));
        } //Read entries with sessionStorage.getItem:

      }, {
        key: "getValueFromLocalStorage",
        value: function getValueFromLocalStorage(key) {
          try {
            return JSON.parse(localStorage.getItem(key));
          } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
          }
        } //Delete session storeage an entry with the removeItem method:

      }, {
        key: "deleteValueFromLocalStorage",
        value: function deleteValueFromLocalStorage(key) {
          localStorage.removeItem(key);
        } // For isRequired form validation highlight the form control

      }, {
        key: "autoFocusOnErrorFieldInRecativeForm",
        value: function autoFocusOnErrorFieldInRecativeForm(recativeForm, el) {
          try {
            for (var _i = 0, _Object$keys = Object.keys(recativeForm.controls); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];

              if (recativeForm.controls[key].invalid) {
                var invalidControl = el.nativeElement.querySelector('[formcontrolname="' + key + '"]');

                if (invalidControl != null) {
                  invalidControl.focus();
                  break;
                }
              }
            }
          } catch (e) {
            console.log("Error ignore it ", e);
          }
        } // for calendar date formate to string

      }, {
        key: "calDateFormatToString",
        value: function calDateFormatToString(calDate) {
          if (calDate == '' || calDate == null) return null;

          try {
            var assigningDate = calDate.year + '-' + (calDate.month < 10 ? '0' + calDate.month : calDate.month) + '-' + (calDate.day < 10 ? '0' + calDate.day : calDate.day);
            return assigningDate;
          } catch (e) {
            return null;
          }
        } // for calendar date to string date

      }, {
        key: "calendarDateFormatToString",
        value: function calendarDateFormatToString(calDate) {
          if (calDate == '' || calDate == null) return null;

          try {
            var assigningDate = (calDate.day < 10 ? '0' + calDate.day : calDate.day) + '-' + (calDate.month < 10 ? '0' + calDate.month : calDate.month) + '-' + calDate.year;
            return assigningDate;
          } catch (e) {
            return null;
          }
        }
      }, {
        key: "strintoUTCDate",
        value: function strintoUTCDate(stringDate) {
          if (stringDate == '' || stringDate == null) {
            return null;
          }

          var array = stringDate.split("-");
          var newdate = '';

          if (array[0].length == 2) {
            newdate = stringDate.split("-").reverse().join("-");
          } else {
            newdate = stringDate;
          }

          var date = newdate.split("-");

          if (date.length == 3) {
            var year = parseInt(date[0]);
            var month = parseInt(date[1]) - 1;
            var day = parseInt(date[2]);
            var d = Date.UTC(year, month, day);
            return new Date(d);
          } else {
            return null;
          }
        } // for convert string date to calendar date

      }, {
        key: "stringDateToCalDateFormat",
        value: function stringDateToCalDateFormat(stringDate) {
          if (stringDate == '' || stringDate == null || stringDate == '0001-01-01T00:00:00') return null;

          try {
            var array = stringDate.split("-");
            var newdate = '';

            if (array[0].length == 2) {
              newdate = stringDate.split("-").reverse().join("-");
            } else {
              newdate = stringDate;
            }

            var startdate = new Date(newdate);
            var dateStartFormat = {
              year: startdate.getFullYear(),
              month: startdate.getMonth() + 1,
              day: startdate.getDate()
            };
            return dateStartFormat;
          } catch (e) {
            return null;
          }
        } // for convert string date to calendar date for third party datepicker

      }, {
        key: "stringDateToCalendarDateFormat",
        value: function stringDateToCalendarDateFormat(stringDate) {
          if (stringDate == '' || stringDate == null || stringDate == '0001-01-01T00:00:00') return null;

          try {
            var array = stringDate.split("-");
            var newdate = '';

            if (array[0].length == 2) {
              newdate = stringDate.split("-").reverse().join("-");
            } else {
              newdate = stringDate;
            }

            var startdate = new Date(newdate);
            return startdate;
          } catch (e) {
            return null;
          }
        }
      }, {
        key: "dateFormatWithDash",
        value: function dateFormatWithDash(inputDate) {
          if (inputDate != null) {
            var stringDate = inputDate.toLocaleString();
            this.dateFields = stringDate.split(" ");
            var totalDate = this.dateFields[0].replace(/,/, "");
            var totalDateSplit = totalDate.split('/');
            var month = parseInt(totalDateSplit[0]);
            var day = parseInt(totalDateSplit[1]);
            var formatDate = totalDateSplit[2] + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day); // var formatDate = (day > 9 ? day : "0" + day) + "-" + (month > 9 ? month : "0" + month) + "-" + totalDateSplit[2];

            return formatDate;
          } else {
            return inputDate;
          }
        }
      }, {
        key: "showSussessFailureMessage",
        value: function showSussessFailureMessage(type, mesage) {
          var isOnSamePage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var isI18Data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.isOnSamePage = isOnSamePage;
                    this.mesage = {};
                    this.mesage.showMessage = true;

                    if (!isI18Data) {
                      _context10.next = 9;
                      break;
                    }

                    _context10.next = 6;
                    return this.translate.get(mesage).toPromise();

                  case 6:
                    this.mesage.mesage = _context10.sent;
                    _context10.next = 10;
                    break;

                  case 9:
                    this.mesage.mesage = mesage;

                  case 10:
                    if (type == 1) {
                      this.mesage["class"] = 'alert alert-success';
                    } else {
                      this.mesage["class"] = 'alert alert-danger';
                    }

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "routerNavigationDetection",
        value: function routerNavigationDetection() {
          var _this11 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              if (_this11.isOnSamePage) {
                _this11.mesage = {};
              }

              _this11.isOnSamePage = true;
            }
          });
        }
        /*
         * @return {Observable<string>} : siblingMsg
         */

      }, {
        key: "getContent",
        value: function getContent() {
          return this.siblingMsg.asObservable();
        }
        /*
         * @param {string} message : siblingMsg
         */

      }, {
        key: "updateContent",
        value: function updateContent(message) {
          this.siblingMsg.next(message);
        }
        /*
         * @return {Observable<string>} : companyList
         */

      }, {
        key: "getCompanyListContent",
        value: function getCompanyListContent() {
          return this.companyList.asObservable();
        }
        /*
         * @param {string} message : companyList
         */

      }, {
        key: "updateCompanyListContent",
        value: function updateCompanyListContent(message) {
          this.companyList.next(message);
        }
      }, {
        key: "detectMimeType",
        value: function detectMimeType(b64) {
          for (var s in this.signatures) {
            if (b64.indexOf(s) === 0) {
              return this.signatures[s];
            }
          }
        }
      }, {
        key: "convertBase64ToBlobData",
        value: function convertBase64ToBlobData(base64Data, contentType) {
          var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
          var byteCharacters = atob(base64Data);
          var byteArrays = [];

          for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);

            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          var blob = new Blob(byteArrays, {
            type: contentType
          });
          return blob;
        } // For download file

      }, {
        key: "downloadFile",
        value: function downloadFile(json) {
          if (json.Data) {
            var fileData = json.Data.split('base64,');

            if (fileData.length > 1) {
              json.Data = fileData[1];
            } else {
              json.Data = json.Data;
            }

            var contentType = this.detectMimeType(json.Data);
            var blobData = this.convertBase64ToBlobData(json.Data, contentType);

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              //IE
              window.navigator.msSaveOrOpenBlob(blobData, json.FileName);
            } else {
              // chrome
              var blob = new Blob([blobData], {
                type: contentType
              });
              var url = window.URL.createObjectURL(blob);
              var link = document.createElement('a');
              link.href = url;
              link.download = json.FileName;
              link.click();
            }
          }
        } // Check login Info & Session

      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (this.getValueFromSessionStorage('userLoginInfo') == null) {
                      localStorage.clear();
                      sessionStorage.clear();
                      this.router.navigateByUrl('/home/login');
                    } else {
                      this.restartIdleTime();
                    }

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // This method is used to perform action once it is Idle

      }, {
        key: "idleTimeActionPerform",
        value: function idleTimeActionPerform() {
          var _this12 = this;

          // Start watching when user idle is starting.
          this.userIdle.onTimerStart().subscribe(function (count) {
            return console.log(count);
          }); // Start watch when time is up.

          this.userIdle.onTimeout().subscribe(function () {
            var now = new Date(); //console.log("Over time = ", now)

            if (_this12.getValueFromSessionStorage('userLoginInfo') != null) {
              var userLoginInfo = _this12.getValueFromSessionStorage('userLoginInfo');

              var jsonData = {};
              var outerJsonData = {};
              jsonData.UserID = userLoginInfo.ID;
              jsonData.EmiratesID = userLoginInfo.EmiratesID;
              outerJsonData.inputParameter = JSON.stringify(jsonData);

              _this12.logOutAPICall(outerJsonData);
            }
          });
        } // For Logout

      }, {
        key: "logOutAPICall",
        value: function logOutAPICall(formData) {
          var hideLoader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.httpClient.post("api/LoginManager/Logout", formData).subscribe(function (res) {
                      sessionStorage.clear();

                      _this13.stopWatchingIdleTime();
                    }, function (err) {
                      console.log(err);
                    });

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // End logout
        // This Method is used to start Wathcing idle Time

      }, {
        key: "startWatchingIdleTime",
        value: function startWatchingIdleTime() {
          //console.log("Timer Started..")
          var now = new Date(); //console.log("Started time = ", now)

          if (!this.isIdleTimeStarted && this.getValueFromSessionStorage('userLoginInfo') != null) {
            //Start watching for user inactivity
            this.userIdle.startWatching();
            this.isIdleTimeStarted = true;
            this.idleTimeActionPerform();
          }
        } // This Method is used to Stop Wathcing idle Time

      }, {
        key: "stopWatchingIdleTime",
        value: function stopWatchingIdleTime() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this14 = this;

            var body, WantDetete, OK;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    body = document.getElementsByTagName('body')[0];
                    body.classList.add('confirm_dia_modal');
                    this.userIdle.stopWatching();
                    this.isIdleTimeStarted = false;
                    _context13.next = 6;
                    return this.translate.get('SessionExpire').toPromise();

                  case 6:
                    WantDetete = _context13.sent;
                    _context13.next = 9;
                    return this.translate.get('OK').toPromise();

                  case 9:
                    OK = _context13.sent;
                    this.confirmationDialogService.confirm('', WantDetete, OK, '').then(function (confirmed) {
                      var now = new Date(); //console.log("Over time after confirm = ", now)

                      _this14.modalService.dismissAll(); //localStorage.clear();


                      sessionStorage.clear();
                      _this14.textDir = _this14.textDirection('en');

                      _this14.router.navigate(['/home/login']);
                    });

                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } // This Method is used to Reset  idle Time

      }, {
        key: "restartIdleTime",
        value: function restartIdleTime() {
          this.userIdle.resetTimer();
        } //Checking only special characters

      }, {
        key: "special_char",
        value: function special_char(event) {
          /*var k;
          k = event.charCode;
          return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));*/
          var blockedCharArray = [123, 124, 125, 126, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
          var k = event.charCode; //console.log(k);

          if (blockedCharArray.indexOf(k) > -1) {
            return false;
          }

          return true;
        } // Not allowing some special character

        /*allow_some_special_char(event) {
          var k;
          k = event.charCode;
          return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 45 || k == 47 || (k >= 48 && k <= 57));
        }*/
        // allow alphanmeric keywords

      }, {
        key: "allow_alphanumeric",
        value: function allow_alphanumeric(event) {
          //console.log("hello3");
          var blockedCharArray = [123, 124, 125, 126, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
          var k = event.charCode; //console.log(k);

          if (blockedCharArray.indexOf(k) > -1) {
            return false;
          } //var flag = (k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57);
          //console.log("flag :: ", flag);


          return true;
        } // allow only number

      }, {
        key: "allow_numeric",
        value: function allow_numeric(event) {
          var k;
          k = event.charCode;
          return k >= 48 && k <= 57;
        } // allow only alphabets

      }, {
        key: "allow_alphabet",
        value: function allow_alphabet(event) {
          /* var k;
           k = event.charCode;
           return ((k >= 97 && k <= 122) || k == 8 || k == 32 || (k >= 65 && k <= 90));*/
          var blockedCharArray = [123, 124, 125, 126, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 46];
          var k = event.charCode; //console.log(k);

          if (blockedCharArray.indexOf(k) > -1) {
            return false;
          } //var flag = (k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57);
          //console.log("flag :: ", flag);


          return true;
        } // allow character for website

      }, {
        key: "allow_special_character_for_website",
        value: function allow_special_character_for_website(event) {
          var k;
          k = event.charCode;
          return k >= 97 && k <= 122 || k == 8 || k == 32 || k == 46 || k >= 65 && k <= 90 || k >= 48 && k <= 57;
        } // Only AlphaNumeric

      }, {
        key: "keyPressAlphaNumeric",
        value: function keyPressAlphaNumeric(event) {
          var inp = String.fromCharCode(event.keyCode);

          if (/[a-zA-Z0-9]/.test(inp)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }]);

      return CommonService;
    }();

    CommonService.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_user_idle__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_pages_common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationDialogServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]));
    };

    CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: angular_user_idle__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _pages_common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationDialogServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/dateformatter.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/dateformatter.service.ts ***!
    \***************************************************/

  /*! exports provided: CustomAdapter, CustomDateParserFormatter */

  /***/
  function srcAppServicesDateformatterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomAdapter", function () {
      return CustomAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
      return CustomDateParserFormatter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /**
     * This Service handles how the date is represented in scripts i.e. ngModel.
     */


    var CustomAdapter =
    /*#__PURE__*/
    function (_ng_bootstrap_ng_boot) {
      _inherits(CustomAdapter, _ng_bootstrap_ng_boot);

      var _super = _createSuper(CustomAdapter);

      function CustomAdapter() {
        var _this15;

        _classCallCheck(this, CustomAdapter);

        _this15 = _super.apply(this, arguments);
        _this15.DELIMITER = '-';
        return _this15;
      }

      _createClass(CustomAdapter, [{
        key: "fromModel",
        value: function fromModel(value) {
          var result = null;

          if (value) {
            var jsonData = this.isJson(value);

            if (jsonData != null && jsonData.day && jsonData.year) {
              result = jsonData;
            } else {
              var date = value.split(this.DELIMITER);
              result = {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }
          }

          return result;
        }
      }, {
        key: "toModel",
        value: function toModel(date) {
          var result = null;

          if (date) {
            result = date;
          }

          return result;
        }
      }, {
        key: "isJson",
        value: function isJson(item) {
          item = typeof item !== "string" ? JSON.stringify(item) : item;

          try {
            item = JSON.parse(item);
          } catch (e) {
            return null;
          }

          if (typeof item === "object" && item !== null) {
            return item;
          }

          return null;
        }
      }]);

      return CustomAdapter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]);

    CustomAdapter.ɵfac = function CustomAdapter_Factory(t) {
      return ɵCustomAdapter_BaseFactory(t || CustomAdapter);
    };

    CustomAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomAdapter,
      factory: CustomAdapter.ɵfac
    });

    var ɵCustomAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomAdapter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
     */


    var CustomDateParserFormatter =
    /*#__PURE__*/
    function (_ng_bootstrap_ng_boot2) {
      _inherits(CustomDateParserFormatter, _ng_bootstrap_ng_boot2);

      var _super2 = _createSuper(CustomDateParserFormatter);

      function CustomDateParserFormatter() {
        var _this16;

        _classCallCheck(this, CustomDateParserFormatter);

        _this16 = _super2.apply(this, arguments);
        _this16.DELIMITER = '-';
        _this16.monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        return _this16;
      }

      _createClass(CustomDateParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          var result = null;

          if (value) {
            var jsonData = this.isJson(value);

            if (jsonData != null && jsonData.day && jsonData.year) {
              result = jsonData;
            } else {
              var date = value.split(this.DELIMITER);
              result = {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }
          }

          return result;
        }
      }, {
        key: "format",
        value: function format(date) {
          var result = null;

          if (date) {
            result = (date.day < 10 ? "0" + date.day : date.day) + this.DELIMITER + this.monthArray[date.month - 1] + this.DELIMITER + date.year;
          }

          return result;
        }
      }, {
        key: "isJson",
        value: function isJson(item) {
          item = typeof item !== "string" ? JSON.stringify(item) : item;

          try {
            item = JSON.parse(item);
          } catch (e) {
            return null;
          }

          if (typeof item === "object" && item !== null) {
            return item;
          }

          return null;
        }
      }]);

      return CustomDateParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) {
      return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter);
    };

    CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomDateParserFormatter,
      factory: CustomDateParserFormatter.ɵfac
    });

    var ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /root/raktasystemui-Development/raktaportal/ClientApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map