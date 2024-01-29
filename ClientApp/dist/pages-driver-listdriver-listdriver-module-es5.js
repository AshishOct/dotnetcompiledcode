function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-listdriver-listdriver-module"], {
  /***/
  "./src/app/pages/driver/listdriver/listdriver-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/driver/listdriver/listdriver-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ListdriverRoutingModule */

  /***/
  function srcAppPagesDriverListdriverListdriverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdriverRoutingModule", function () {
      return ListdriverRoutingModule;
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


    var _listdriver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listdriver.component */
    "./src/app/pages/driver/listdriver/listdriver.component.ts");

    var routes = [{
      path: '',
      component: _listdriver_component__WEBPACK_IMPORTED_MODULE_2__["ListdriverComponent"]
    }];

    var ListdriverRoutingModule = function ListdriverRoutingModule() {
      _classCallCheck(this, ListdriverRoutingModule);
    };

    ListdriverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListdriverRoutingModule
    });
    ListdriverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListdriverRoutingModule_Factory(t) {
        return new (t || ListdriverRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListdriverRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListdriverRoutingModule, [{
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
  "./src/app/pages/driver/listdriver/listdriver.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/driver/listdriver/listdriver.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ListdriverComponent */

  /***/
  function srcAppPagesDriverListdriverListdriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdriverComponent", function () {
      return ListdriverComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function ListdriverComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r904 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_div_15_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r904);

          var ctx_r903 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r903.navigateToAddDrivers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "AddDriver"));
      }
    }

    function ListdriverComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r906 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_div_25_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r906);

          var ctx_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r905.common.mesage.showMessage = !ctx_r905.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r897.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r897.common.mesage.mesage);
      }
    }

    function ListdriverComponent_div_27_span_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r918 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_div_27_span_8_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r918);

          var ldd_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r916 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r916.printDriverData(ldd_r907);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ListdriverComponent_div_27_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ExpiryDate"));
      }
    }

    function ListdriverComponent_div_27_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ExpiryDate"));
      }
    }

    function ListdriverComponent_div_27_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ldd_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ldd_r907.PermitExpiryDate);
      }
    }

    function ListdriverComponent_div_27_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ldd_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ldd_r907.PermitExpiryDate);
      }
    }

    function ListdriverComponent_div_27_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "RenewalsPending"));
      }
    }

    function ListdriverComponent_div_27_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PaymentPending"));
      }
    }

    function ListdriverComponent_div_27_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Approved"), "");
      }
    }

    function ListdriverComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r922 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListdriverComponent_div_27_span_8_Template, 3, 0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ListdriverComponent_div_27_div_19_Template, 3, 3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListdriverComponent_div_27_div_20_Template, 3, 3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ListdriverComponent_div_27_div_21_Template, 2, 1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListdriverComponent_div_27_div_22_Template, 2, 1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListdriverComponent_div_27_span_34_Template, 3, 3, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ListdriverComponent_div_27_span_35_Template, 3, 3, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListdriverComponent_div_27_span_36_Template, 3, 3, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_div_27_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r922);

          var ldd_r907 = ctx.$implicit;

          var ctx_r921 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r921.navigateToDriverViewPage(ldd_r907);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ldd_r907 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ldd_r907.FirstName, " ", ldd_r907.LastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ldd_r907.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 16, "LicenseType"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ldd_r907.DriverType, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.Status === "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.Status === "Expired");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.Status === "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.Status === "Expired");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 18, "Fees"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ldd_r907.Fees);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ldd_r907.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.PendingRenewalsAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ldd_r907.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ldd_r907.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ldd_r907.DriverID, " ");
      }
    }

    function ListdriverComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "NoRecordFound"));
      }
    }

    function ListdriverComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r924 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pagination-controls", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListdriverComponent_div_30_Template_pagination_controls_pageChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r924);

          var ctx_r923 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r923.onPageChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r900 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxSize", ctx_r900.maxSize)("directionLinks", ctx_r900.directionLinks)("autoHide", ctx_r900.autoHide)("responsive", ctx_r900.responsive)("previousLabel", ctx_r900.labels.previousLabel)("nextLabel", ctx_r900.labels.nextLabel)("screenReaderPaginationLabel", ctx_r900.labels.screenReaderPaginationLabel)("screenReaderPageLabel", ctx_r900.labels.screenReaderPageLabel)("screenReaderCurrentLabel", ctx_r900.labels.screenReaderCurrentLabel);
      }
    }

    function ListdriverComponent_tr_66_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 69);
      }
    }

    function ListdriverComponent_tr_66_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r932 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_tr_66_td_16_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r932);

          var driver_r925 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r930 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r930.navigateToUpdatePage(driver_r925);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Edit"));
      }
    }

    function ListdriverComponent_tr_66_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 69);
      }
    }

    function ListdriverComponent_tr_66_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 69);
      }
    }

    function ListdriverComponent_tr_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListdriverComponent_tr_66_td_15_Template, 1, 0, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListdriverComponent_tr_66_td_16_Template, 4, 3, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListdriverComponent_tr_66_td_17_Template, 1, 0, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListdriverComponent_tr_66_td_18_Template, 1, 0, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var driver_r925 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.DriverID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.FirstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.Gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.DriverType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.DrivingLicenseExpiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r925.Comments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", driver_r925.Status === "Under Approval");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", driver_r925.Status === "Need More Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", driver_r925.Status === "Approved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", driver_r925.Status === "Rejected");
      }
    }

    function ListdriverComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "NoRecordFound"));
      }
    }

    var _c0 = function _c0() {
      return ["/company/listcompany"];
    };

    var ListdriverComponent =
    /*#__PURE__*/
    function () {
      function ListdriverComponent(router, formBuilder, apiCall, common, translate) {
        _classCallCheck(this, ListdriverComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.userLoginDetails = [];
        this.listDriversData = [];
        this.driverDataHeaderResponse = [];
        this.listDriversDataWithoutFilter = [];
        this.companyDriverStagingList = [];
        this.driverDataforLatter = [];
        this.selectedCompanyInfo = {};
        this.noData = false;
        this.selectedLang = "";
        this.totalListDriverData = 0;
        this.currentPageNumber = 1;
        this.tempCurrNumber = 1;
        this.noRecordsFound = false;
        this.dtOptions = {
          order: [[1, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.collection = {
          count: this.totalListDriverData,
          data: []
        };
        this.config = {
          itemsPerPage: 6,
          currentPage: 1,
          totalItems: this.totalListDriverData
        };
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.responsive = true;
        this.labels = {
          screenReaderPaginationLabel: 'Pagination',
          screenReaderPageLabel: 'page',
          screenReaderCurrentLabel: "You're on page"
        }; // Used for get Drivers List
        // Used for get Vehicle List

        this.listDriverDetails = []; // Used for get Driver Un Approved List

        this.isDtInitialized = false;
        this.isSearchFunction = false; //Used For Driver List Search functionality
        //onKeypressEvent(event: any) {
        //  this.noData = false;
        //  let searchValue = event.target.value;
        //  if (searchValue && searchValue.trim() != '') {
        //    this.listDriversData = this.listDriversDataWithoutFilter.filter((val) => {
        //      let driver_FirstName; let driver_LastName; let driver_DriverType; let driving_License_Expiry_Date;
        //      let driver_Status; let driver_Id;
        //      if (val.FirstName != null) {
        //        driver_FirstName = val.FirstName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.LastName != null) {
        //        driver_LastName = val.LastName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.DriverType != null) {
        //        driver_DriverType = val.DriverType.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.DrivingLicenseExpiryDate != null) {
        //        driving_License_Expiry_Date = val.DrivingLicenseExpiryDate.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.Status != null) {
        //        driver_Status = val.Status.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.DriverID != null) {
        //        driver_Id = val.DriverID.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      return (driver_FirstName || driver_LastName || driver_DriverType || driving_License_Expiry_Date || driver_Status || driver_Id);
        //    })
        //    this.config.currentPage = 1;
        //  } else {
        //    this.listDriversData = this.listDriversDataWithoutFilter;
        //    this.config.currentPage = this.tempPageNo;
        //  }
        //  if (this.listDriversData.length == 0) {
        //    this.noData = true;
        //  }
        //}
        // For Pagination

        this.tempPageNo = 0;
      }

      _createClass(ListdriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var body;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    body = document.getElementsByTagName('body')[0];
                    body.classList.remove('userLogin');
                    this.userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
                    this.reactiveFormName = this.formBuilder.group({
                      searchText: ['']
                    });
                    this.initMasterData();
                    _context.t0 = [[0, 'desc']];
                    _context.next = 8;
                    return this.translate.get('NoDataAvailable').toPromise();

                  case 8:
                    _context.t1 = _context.sent;
                    _context.next = 11;
                    return this.translate.get('Search').toPromise();

                  case 11:
                    _context.t2 = _context.sent;
                    _context.next = 14;
                    return this.translate.get('Information').toPromise();

                  case 14:
                    _context.t3 = _context.sent;
                    _context.next = 17;
                    return this.translate.get('infoFiltered').toPromise();

                  case 17:
                    _context.t4 = _context.sent;
                    _context.next = 20;
                    return this.translate.get('infoEmpty').toPromise();

                  case 20:
                    _context.t5 = _context.sent;
                    _context.next = 23;
                    return this.translate.get('lengthMenu').toPromise();

                  case 23:
                    _context.t6 = _context.sent;
                    _context.next = 26;
                    return this.translate.get('First').toPromise();

                  case 26:
                    _context.t7 = _context.sent;
                    _context.next = 29;
                    return this.translate.get('Last').toPromise();

                  case 29:
                    _context.t8 = _context.sent;
                    _context.next = 32;
                    return this.translate.get('Next').toPromise();

                  case 32:
                    _context.t9 = _context.sent;
                    _context.next = 35;
                    return this.translate.get('Previous').toPromise();

                  case 35:
                    _context.t10 = _context.sent;
                    _context.t11 = {
                      "first": _context.t7,
                      "last": _context.t8,
                      "next": _context.t9,
                      "previous": _context.t10
                    };
                    _context.t12 = {
                      "zeroRecords": _context.t1,
                      "search": _context.t2,
                      "info": _context.t3,
                      "infoFiltered": _context.t4,
                      "infoEmpty": _context.t5,
                      "lengthMenu": _context.t6,
                      "paginate": _context.t11
                    };
                    this.dtOptions = {
                      order: _context.t0,
                      language: _context.t12
                    };

                  case 39:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Used for call All APIs

      }, {
        key: "initMasterData",
        value: function initMasterData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var selectedCompanyInfo;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');

                    if (!(selectedCompanyInfo != null)) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 4;
                    return this.getDriversList();

                  case 4:
                    _context2.next = 6;
                    return this.getListCompanyDriverStagingList();

                  case 6:
                    _context2.next = 8;
                    return this.onChangeOfCompany();

                  case 8:
                    this.showDriverVehicleAddBtn(selectedCompanyInfo);
                    this.apiCall.spinner.hide();

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // onDestroy cancels the subscribe request
          if (this.subscription) {
            this.subscription.unsubscribe();
          } // Do not forget to unsubscribe the event


          if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
          }
        } //on changing the company name

      }, {
        key: "onChangeOfCompany",
        value: function onChangeOfCompany() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //this.apiCall.spinner.show();
                    this.subscription = this.common.getContent().subscribe(function (msg) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var selectedCompanyInfo;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');

                                if (!(selectedCompanyInfo != null)) {
                                  _context3.next = 11;
                                  break;
                                }

                                this.apiCall.spinner.show();
                                this.common.mesage = {};
                                this.selectedCompanyInfo = selectedCompanyInfo; //this.showLicenseNumberValidation();
                                //this.addDriverValidation();

                                this.showDriverVehicleAddBtn(selectedCompanyInfo);
                                _context3.next = 8;
                                return this.getDriversList();

                              case 8:
                                _context3.next = 10;
                                return this.getListCompanyDriverStagingList();

                              case 10:
                                this.apiCall.spinner.hide();

                              case 11:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Used for show validation msg if company license number is 0

      }, {
        key: "showLicenseNumberValidation",
        value: function showLicenseNumberValidation() {//if (this.common.showDriverVehicleAddBtnLicenseNumberValidation) {
          //  this.common.showSussessFailureMessage(2, 'Please do update License Number by raising Company Update Request to proceed with Vehicle and Driver Creation', false)
          //}
        } // Used for show Add Driver validation

      }, {
        key: "addDriverValidation",
        value: function addDriverValidation() {//if (this.common.showDriverVehicleAddBtnPendingPaymentValidation) {
          //  this.common.showSussessFailureMessage(2, 'Please Pay Pending Payment to proceed with Vehicle and Driver Creation', false)
          //}
          ////For UAT and production Enable this one
          ////If driver belongs to franchise then the below messgae should not show & allow user to renew driver, Abhijith 03-08-2023
          //if (this.common.isCompanyTypeFranchise == false) {
          //  if (this.common.showDriverVehicleAddBtnPendingFineValidation) {
          //    this.common.showSussessFailureMessage(2, 'Please Pay Pending Fine to proceed with Vehicle and Driver Creation', false)
          //  }
          //}
          ////End 03-08-2023
          //if (this.common.showDriverVehicleAddBtnCompanyExpireValidation) {
          //  this.common.showSussessFailureMessage(2, 'Please Renew Company License to proceed with Vehicle and Driver Creation', false)
          //}
        }
      }, {
        key: "getDriversList",
        value: function getDriversList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            var jsonData, selectedCompanyInfo, userLoginInfo;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.apiCall.spinner.show();
                    jsonData = {};
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.QueryCount = "6";
                    jsonData.PageNumber = this.currentPageNumber.toString();
                    this.noData = false;
                    _context5.next = 12;
                    return this.apiCall.postAPICallWithToken('api/DriverManager/getDriverList', jsonData).then(function (result) {
                      _this2.listDriverDetails = result.data;
                      _this2.listDriversData = result.data;
                      _this2.listDriversDataWithoutFilter = result.data;
                      _this2.totalListDriverData = result.headerResponse.totalCount;
                      _this2.config = {
                        itemsPerPage: 6,
                        currentPage: _this2.currentPageNumber,
                        totalItems: _this2.totalListDriverData
                      };

                      if (_this2.listDriversData.length == 0) {
                        _this2.noData = true;
                      }

                      _this2.apiCall.spinner.hide();
                    })["catch"](function (error) {
                      console.log("error ", error);

                      _this2.apiCall.spinner.hide();
                    });

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getListCompanyDriverStagingList",
        value: function getListCompanyDriverStagingList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var selectedCompanyInfo, userLoginInfo, jsonData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.apiCall.spinner.show();
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    this.noRecordsFound = false;
                    _context6.next = 10;
                    return this.apiCall.postAPICallWithToken('api/DriverManager/getListCompanyDriversStaging', jsonData).then(function (result) {
                      _this3.companyDriverStagingList = result;

                      if (_this3.isDtInitialized) {
                        _this3.dtElement.dtInstance.then(function (dtInstance) {
                          dtInstance.destroy();

                          _this3.dtTrigger.next();
                        });
                      } else {
                        _this3.dtTrigger.next();

                        _this3.isDtInitialized = true;
                      }

                      if (_this3.companyDriverStagingList.length == 0) {
                        _this3.noRecordsFound = true;
                      }

                      _this3.apiCall.spinner.hide();
                    })["catch"](function (error) {
                      console.log("error ", error);

                      _this3.apiCall.spinner.hide();
                    });

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // Used for navigate to Add Drivers page

      }, {
        key: "navigateToAddDrivers",
        value: function navigateToAddDrivers() {
          if (this.common.isCompanyTypeFranchise == false && this.common.showDriverVehicleAddBtnFineValidation) {
            this.common.showSussessFailureMessage(2, 'There are Un paid fines for this company and due to this the Activity/Vehicle/Driver can not be created! Please do pay pending fines and register!', false);
            return;
          } else {
            this.common.mesage = {};
            this.router.navigateByUrl('/driver/adddriver');
          }
        } //Used for navigate to driver view page

      }, {
        key: "navigateToDriverViewPage",
        value: function navigateToDriverViewPage(driver) {
          this.common.setValueToSessionStorage('driverInfo', driver);
          this.router.navigateByUrl('/driver/detaildriver');
        } // Used for navigate to UnApproved Driver update

      }, {
        key: "navigateToUpdatePage",
        value: function navigateToUpdatePage(driver) {
          driver.requestFrom = 'unapprovedUpdate';
          this.common.setValueToSessionStorage('updateDriverInfo', driver);
          this.router.navigateByUrl('/driver/adddriver');
        } //showing driver details with print option

      }, {
        key: "printDriverData",
        value: function printDriverData(driver) {
          var _this4 = this;

          var jsonData = {};
          jsonData.EmiratesID = driver.EmiratesID;
          jsonData.MobileNumber = driver.MobilePhone;
          jsonData.DriverID = driver.DriverID; //added new parameter as per the venkat comments

          jsonData.DriverGuid = "";
          this.apiCall.postAPICallWithToken('api/EnquiryManager/DriverLetter', jsonData).then(function (result) {
            _this4.driverDataforLatter = result;

            _this4.common.setValueToSessionStorage('driverDataforLatter', _this4.driverDataforLatter);

            _this4.router.navigate([]).then(function (result) {
              window.open('/print/printdriverdetail', '_blank');
            });
          })["catch"](function (error) {
            console.log("error ", error);
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.config.currentPage = event;
          this.currentPageNumber = event;
          this.tempCurrNumber = event;

          if (this.isSearchFunction) {
            this.tempPageNo = this.config.currentPage;
            this.tempCurrNumber = event;
            this.onSearchClick();
          } else {
            this.getDriversList();
          }
        }
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          var _this5 = this;

          this.isSearchFunction = true;
          this.noData = false;
          var searchValue = this.reactiveFormName.value.searchText;

          if (searchValue && searchValue.trim() != '') {
            this.isSearchFunction = true;
            var selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            var jsonData = {};
            jsonData.Token = userLoginInfo.Token;
            jsonData.UserID = userLoginInfo.ID;
            jsonData.CompanyID = selectedCompanyInfo.CompanyID;
            jsonData.SearchWord = searchValue;
            jsonData.QueryCount = 6;
            jsonData.PageNumber = this.currentPageNumber;
            this.noData = false;
            this.apiCall.postAPICallWithToken('api/DriverManager/SearchDriverRecords', jsonData).then(function (result) {
              _this5.listDriversData = result.data;
              var totalCount = result.headerResponse.totalCount;

              if (_this5.listDriversData.length == 0 && totalCount == 0) {
                _this5.noData = true;
                _this5.config = {
                  itemsPerPage: 6,
                  currentPage: 1,
                  totalItems: 0
                };
              } else {
                _this5.noData = false;
                _this5.config = {
                  itemsPerPage: 6,
                  currentPage: _this5.tempCurrNumber,
                  totalItems: totalCount
                };
              }
            })["catch"](function (error) {
              console.log("error ", error);
            });
            this.config.currentPage = 1;
          } else {
            this.listDriversData = this.listDriversDataWithoutFilter;
            this.config.currentPage = this.currentPageNumber;
            this.isSearchFunction = false;
            this.config = {
              itemsPerPage: 6,
              currentPage: this.currentPageNumber,
              totalItems: this.listDriversData.headerResponse.totalCount
            };
          }

          if (this.listDriversData.length == 0) {
            this.noData = true;
            this.isSearchFunction = false;
          }
        }
      }, {
        key: "onKeypressEvent",
        value: function onKeypressEvent(event) {
          //this.isSearchFunction = true;
          this.noData = false;
          var searchValue = event.target.value;

          if (searchValue && searchValue.trim() != '') {
            if (event.code == 'Enter') {//setTimeout(() => {
              //this.isSearchFunction = true;
              //let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
              //let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
              //let jsonData: any = {};
              //jsonData.Token = userLoginInfo.Token;
              //jsonData.UserID = userLoginInfo.ID;
              //jsonData.CompanyID = selectedCompanyInfo.CompanyID;
              //jsonData.SearchWord = searchValue;
              //this.noData = false;
              //this.apiCall.postAPICallWithToken('api/VehicleManager/SearchVehicleRecords', jsonData).then(result => {
              //  this.listVehicleData = result;
              //  console.log("this.listVehicleData = ", this.listVehicleData);
              //  console.log("this.listVehicleData.count = ", this.listVehicleData.length);
              //  if (this.listVehicleData.length == 0) {
              //    this.noData = true;
              //  } else {
              //    this.noData = false;
              //    this.config = {
              //      itemsPerPage: 6,
              //      currentPage: 1,
              //      totalItems: this.listVehicleData.length
              //    };
              //  }
              //}).catch(error => {
              //  console.log("error ", error);
              //});
              //}, 1000)
            } //this.config.currentPage = 1;

          } else {
            if (this.isSearchFunction) {
              this.isSearchFunction = false;
              this.onPageChange(1);
              this.getDriversList();
            } else {
              this.listDriversData = this.listDriversDataWithoutFilter; //this.config.currentPage = this.currentPageNumber;

              this.isSearchFunction = false;
              this.config = {
                itemsPerPage: 6,
                currentPage: this.currentPageNumber,
                totalItems: this.listDriverDetails.headerResponse.totalCount
              };
            }
          } //if (this.listDriversData.length == 0) {
          //  this.noData = true;
          //  this.isSearchFunction = false;
          //}

        }
      }, {
        key: "showDriverVehicleAddBtn",
        value: function showDriverVehicleAddBtn(company) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var jsonData, newdate, enddate, today;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    debugger; // For Show/Hide add Company/Driver/Vehicle add button if  CompanyType is "Franchise"

                    this.common.showAddCompanyBtn = true;
                    this.common.showAddDriverBtn = true;
                    this.common.showAddVehicleBtn = true;
                    this.common.showDriverVehicleAddBtnPendingPaymentValidation = false;
                    this.common.showDriverVehicleAddBtnLicenseNumberValidation = false;
                    this.common.showDriverVehicleAddBtnFineValidation = false;
                    this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;

                    if (company.CompanyType == "Franchise") {
                      this.common.isCompanyTypeFranchise = true;
                    } else {
                      this.common.isCompanyTypeFranchise = false;
                    } //added below code for disable fine restriction ,
                    //updated below code for diable fine restriction on 29-11-2023


                    if (!company.PendingFines) {
                      _context7.next = 16;
                      break;
                    }

                    debugger;
                    jsonData = {};
                    jsonData.CompanyID = company.CompanyID;
                    _context7.next = 15;
                    return this.apiCall.postAPICallWithToken('api/EnquiryManager/DisableFineRestriction', jsonData).then(function (result) {
                      debugger;
                      _this6.disableFineRestrictionAPIData = result;

                      if (result.DisableFineRestrictionOutput != null) {
                        for (var i = 0; i < result.DisableFineRestrictionOutput.length; i++) {
                          var stdate = result.DisableFineRestrictionOutput[i].StartDate.split("-").reverse().join("-");
                          var eddate = result.DisableFineRestrictionOutput[i].EndDate.split("-").reverse().join("-");
                          var start = new Date(stdate);
                          var end = new Date(eddate);
                          var today = new Date();
                          start.setDate(start.getDate());
                          end.setDate(end.getDate());
                          start.setHours(0, 0, 0, 0);
                          end.setHours(0, 0, 0, 0);
                          today.setHours(0, 0, 0, 0);
                          debugger;

                          if (today >= start && today <= end) {
                            //dates are between today date
                            _this6.common.disablefine = true;
                            break;
                          } else {
                            //dates are not bet ween today date
                            _this6.common.disablefine = false;
                            continue;
                          }
                        }
                      } else {
                        //dates are not there
                        console.log("Dates:" + result.DisableFineRestrictionOutput + "- DisableFineRestriction: " + result.DisableFineRestriction);
                        _this6.common.disablefine = false;
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 15:
                    if (this.common.disablefine || this.disableFineRestrictionAPIData.DisableFineRestriction) {
                      //disable fine restriction
                      this.common.isfine = true;
                    } else {
                      this.common.isfine = false;
                    }

                  case 16:
                    //end
                    this.common.setValueToSessionStorage("isFine", this.common.isfine); //Added below section by surya

                    if (company.CompanyType == "Franchise") {
                      debugger; //this.ispaybtnDis = true;

                      this.common.showAddCompanyBtn = false;
                      this.common.showLateFee = false;
                    }

                    if (company.CompanyType == 'Company') {
                      this.common.isCompanyTypeFranchise = false;
                      this.common.showAddCompanyBtn = false; //This boolean will be used to display renewals based on company type is franchise or not Abhijith

                      this.common.showLateFee = true; //End Abhijith
                      //added code for diabling fine restriction 30-11-2023

                      if (company.PendingFines) {
                        if (this.common.isfine) {
                          //dates are there or flag is true
                          this.common.showDriverVehicleAddBtnFineValidation = false; //hide validation

                          this.common.showDriverVehicleAddBtnPendingFineValidation = false;
                          this.common.AddDriverBtn_fine = false; //show button

                          this.common.AddVehicleBtn_fine = false;
                        } else {
                          this.common.showDriverVehicleAddBtnFineValidation = true; //show validation

                          this.common.showDriverVehicleAddBtnPendingFineValidation = true;
                          this.common.AddDriverBtn_fine = true; //hide button

                          this.common.AddVehicleBtn_fine = true;
                        }
                      } else {
                        this.common.showDriverVehicleAddBtnFineValidation = false;
                        this.common.showDriverVehicleAddBtnPendingFineValidation = false;
                        this.common.AddDriverBtn_fine = false;
                        this.common.AddVehicleBtn_fine = false;
                      } //end
                      // For Show/Hide add Driver/Vehicle  button based on Pending payment status of selected company


                      if (company.PendingPayments) {
                        this.common.AddDriverBtn_pay = company.PendingPayments;
                        this.common.AddVehicleBtn_pay = company.PendingPayments;
                        this.common.showDriverVehicleAddBtnPendingPaymentValidation = true;
                      } else {
                        this.common.AddDriverBtn_pay = company.PendingPayments;
                        this.common.AddVehicleBtn_pay = company.PendingPayments;
                        this.common.showDriverVehicleAddBtnPendingPaymentValidation = false;
                      } // For Show/Hide add Driver/Vehicle add button and alert message if Company License Number is "0" and als


                      if (company.LicenseNumber == 0) {
                        this.common.AddDriverBtn_license = true;
                        this.common.AddVehicleBtn_license = true;
                        this.common.showDriverVehicleAddBtnLicenseNumberValidation = true;
                      } else {
                        this.common.AddDriverBtn_license = false;
                        this.common.AddVehicleBtn_license = false;
                        this.common.showDriverVehicleAddBtnLicenseNumberValidation = false;
                      } // For Show/Hide add Driver/Vehicle button based on Selected Company is expired or not


                      if (company.PermitExpiryDate != null && company.PermitExpiryDate != '') {
                        newdate = company.PermitExpiryDate.split("-").reverse().join("-");
                        enddate = new Date(newdate);
                        today = new Date();
                        enddate.setDate(enddate.getDate());

                        if (today >= enddate) {
                          this.common.AddDriverBtn_company = true;
                          this.common.AddVehicleBtn_company = true;
                          this.common.showDriverVehicleAddBtnCompanyExpireValidation = true;
                        } else {
                          this.common.AddDriverBtn_company = false;
                          this.common.AddVehicleBtn_company = false;
                          this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;
                        }
                      } else {
                        this.common.AddDriverBtn_company = false;
                        this.common.AddVehicleBtn_company = false;
                        this.common.showDriverVehicleAddBtnCompanyExpireValidation = false;
                      } //based on all conditions at final we are enabling and disabling add driver buttons


                      if (this.common.AddDriverBtn_fine || this.common.AddDriverBtn_pay || this.common.AddDriverBtn_license || this.common.AddDriverBtn_company) {
                        this.common.showAddDriverBtn = true;
                      } else {
                        this.common.showAddDriverBtn = false;
                      }

                      if (this.common.AddVehicleBtn_fine || this.common.AddVehicleBtn_pay || this.common.AddVehicleBtn_license || this.common.AddVehicleBtn_company) {
                        this.common.showAddVehicleBtn = true;
                      } else {
                        this.common.showAddVehicleBtn = false;
                      } // Used for show License Number update validation id license number is "0"

                      /*showLicenseNumberValidation() {*/


                      if (this.common.showDriverVehicleAddBtnLicenseNumberValidation) {
                        this.common.showSussessFailureMessage(2, 'Please do update License Number by raising Company Update Request to proceed with Vehicle and Driver Creation', false);
                      } //}
                      // Used for show Add Driver validation
                      //addVehicleValidation() {


                      if (this.common.showDriverVehicleAddBtnPendingPaymentValidation) {
                        this.common.showSussessFailureMessage(2, 'Please Pay Pending Payment to proceed with Vehicle and Driver Creation', false);
                      } //For UAT and production Enable this one
                      //If driver belongs to franchise then the below messgae should not show & allow user to renew driver, Abhijith 03-08-2023


                      if (this.common.isCompanyTypeFranchise == false) {
                        if (this.common.showDriverVehicleAddBtnPendingFineValidation) {
                          this.common.showSussessFailureMessage(2, 'Please Pay Pending Fine to proceed with Vehicle and Driver Creation', false);
                        }
                      } //End 03-08-2023


                      if (this.common.showDriverVehicleAddBtnCompanyExpireValidation) {
                        this.common.showSussessFailureMessage(2, 'Please Renew Company License to proceed with Vehicle and Driver Creation', false);
                      } //}

                    }

                    this.common.setValueToSessionStorage("showAddDriverBtn", this.common.showAddDriverBtn);

                  case 20:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return ListdriverComponent;
    }();

    ListdriverComponent.ɵfac = function ListdriverComponent_Factory(t) {
      return new (t || ListdriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
    };

    ListdriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListdriverComponent,
      selectors: [["app-listdriver"]],
      viewQuery: function ListdriverComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      decls: 69,
      vars: 54,
      consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "d-flex", "action_box", "py-3"], [1, "d-flex", "align-items-center", "action_box-first"], [4, "ngIf"], [1, "col-12", "d-flex", "align-items-center", "justify-content-space-between", "pb-3", "filter_action_row", "search_icon_blk"], [1, "input-wrapper", "input-wrapper-company-card"], [3, "formGroup"], ["type", "text", "formControlName", "searchText", 1, "pi-form-inputs", 3, "placeholder", "keyup"], [1, "fas", "fa-search", "text-777", 3, "click"], [1, "col-md-12"], [3, "class", 4, "ngIf"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-md-12 p-0", 4, "ngIf"], [1, "col-12", "p-0"], [1, "col-12", "card", "add_company_tab_card"], [1, "table-responsive"], ["datatable", "", 1, "mytable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["class", "col-12 card add_company_tab_card", 4, "ngIf"], [1, "btn", "theme-blue-btn", "add_company_xs", 3, "click"], ["src", "/assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "close", 3, "click"], [1, "col-md-6"], [1, "main_card"], [1, "company_advertisement_upperdiv"], [1, "company_logo"], [1, "details_right"], [1, "heading"], [1, "company_name"], ["class", "icon_btn_wrapper", 3, "click", 4, "ngIf"], [1, "mt-2", "mb-3"], [1, "font-weight-bold", "fs--14"], [1, "permit_row"], [1, "subheading_wrapper"], [1, "text-777", "fs--13"], [1, "subheading"], ["class", "text-777 fs--13 ", 4, "ngIf"], ["class", "text-777 fs--13 ", "style", "color: red", 4, "ngIf"], ["class", "subheading", 4, "ngIf"], ["class", "subheading", "style", "color: red", 4, "ngIf"], [1, "d-flex", "company_advertisement_bottomdiv", "align-items-center", "pt-1", "pb-3", "justify-content-space-between", "px-3"], [1, ""], [1, "mb-0"], [1, "cstm-badges", "bg-blue", "text-white"], ["class", "cstm-badges bg-warning text-white", 4, "ngIf"], ["class", "cstm-badges  bg-info text-white", 4, "ngIf"], ["class", "cstm-badges bg-success text-white", 4, "ngIf"], [1, "button_action_wrapper"], [1, "btn", "cstm-badges", "sm-small-btn", 3, "click"], [1, "icon_btn_wrapper", 3, "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Display", 1, "icon_btn"], ["alt", "", "src", "/assets/images/company-page/printer.svg", 1, "icon_btn_printer"], [1, "text-777", "fs--13", 2, "color", "red"], [1, "subheading", 2, "color", "red"], [1, "cstm-badges", "bg-warning", "text-white"], [1, "cstm-badges", "bg-info", "text-white"], [1, "cstm-badges", "bg-success", "text-white"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"], [3, "maxSize", "directionLinks", "autoHide", "responsive", "previousLabel", "nextLabel", "screenReaderPaginationLabel", "screenReaderPageLabel", "screenReaderCurrentLabel", "pageChange"], ["class", "cursor_pointer", 4, "ngIf"], ["class", "cursor_pointer", 3, "click", 4, "ngIf"], [1, "cursor_pointer"], [1, "cursor_pointer", 3, "click"]],
      template: function ListdriverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-globalheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListdriverComponent_div_15_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ListdriverComponent_Template_input_keyup_19_listener($event) {
            return ctx.onKeypressEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "em", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_Template_em_click_21_listener() {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "em", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListdriverComponent_Template_em_click_22_listener() {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ListdriverComponent_div_25_Template, 5, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListdriverComponent_div_27_Template, 40, 20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListdriverComponent_div_29_Template, 5, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ListdriverComponent_div_30_Template, 2, 9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ListdriverComponent_tr_66_Template, 19, 11, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ListdriverComponent_div_67_Template, 6, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "app-globalfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 26, "Home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 28, "Driver"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.common.showAddDriverBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 30, "Search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 32, ctx.listDriversData, ctx.config));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 35, "UnApprovedDriverList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx.noRecordsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 37, "DriverID"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 39, "DriverName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 41, "Gender"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 43, "LicenseType"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 45, "ExpiryDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 47, "Status"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 49, "Comments"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 51, "Action"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyDriverStagingList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noRecordsFound);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_9__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_11__["GlobalfooterComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationControlsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9saXN0ZHJpdmVyL2xpc3Rkcml2ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListdriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-listdriver',
          templateUrl: './listdriver.component.html',
          styleUrls: ['./listdriver.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/driver/listdriver/listdriver.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/driver/listdriver/listdriver.module.ts ***!
    \**************************************************************/

  /*! exports provided: ListdriverModule */

  /***/
  function srcAppPagesDriverListdriverListdriverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdriverModule", function () {
      return ListdriverModule;
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


    var _listdriver_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listdriver-routing.module */
    "./src/app/pages/driver/listdriver/listdriver-routing.module.ts");
    /* harmony import */


    var _listdriver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listdriver.component */
    "./src/app/pages/driver/listdriver/listdriver.component.ts");
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
    /* harmony import */


    var _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.module */
    "./src/app/pages/common/globalheader/globalheader.module.ts");
    /* harmony import */


    var _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.module */
    "./src/app/pages/common/globalfooter/globalfooter.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var ListdriverModule = function ListdriverModule() {
      _classCallCheck(this, ListdriverModule);
    };

    ListdriverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListdriverModule
    });
    ListdriverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListdriverModule_Factory(t) {
        return new (t || ListdriverModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listdriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListdriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListdriverModule, {
        declarations: [_listdriver_component__WEBPACK_IMPORTED_MODULE_3__["ListdriverComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listdriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListdriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListdriverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_listdriver_component__WEBPACK_IMPORTED_MODULE_3__["ListdriverComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listdriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListdriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-driver-listdriver-listdriver-module-es5.js.map