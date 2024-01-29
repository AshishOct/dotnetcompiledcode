function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vehicle-listvehicle-listvehicle-module"], {
  /***/
  "./src/app/pages/vehicle/listvehicle/listvehicle-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/vehicle/listvehicle/listvehicle-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ListvehicleRoutingModule */

  /***/
  function srcAppPagesVehicleListvehicleListvehicleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListvehicleRoutingModule", function () {
      return ListvehicleRoutingModule;
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


    var _listvehicle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listvehicle.component */
    "./src/app/pages/vehicle/listvehicle/listvehicle.component.ts");

    var routes = [{
      path: '',
      component: _listvehicle_component__WEBPACK_IMPORTED_MODULE_2__["ListvehicleComponent"]
    }];

    var ListvehicleRoutingModule = function ListvehicleRoutingModule() {
      _classCallCheck(this, ListvehicleRoutingModule);
    };

    ListvehicleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListvehicleRoutingModule
    });
    ListvehicleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListvehicleRoutingModule_Factory(t) {
        return new (t || ListvehicleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListvehicleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListvehicleRoutingModule, [{
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
  "./src/app/pages/vehicle/listvehicle/listvehicle.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/vehicle/listvehicle/listvehicle.component.ts ***!
    \********************************************************************/

  /*! exports provided: ListvehicleComponent */

  /***/
  function srcAppPagesVehicleListvehicleListvehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListvehicleComponent", function () {
      return ListvehicleComponent;
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

    function ListvehicleComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r670 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_div_15_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r670);

          var ctx_r669 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r669.navigateToAddVehicle();
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "AddVehicle"));
      }
    }

    function ListvehicleComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r672 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_div_25_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r672);

          var ctx_r671 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r671.common.mesage.showMessage = !ctx_r671.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r663.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r663.common.mesage.mesage);
      }
    }

    function ListvehicleComponent_div_27_button_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ListvehicleComponent_div_27_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "EndDate"));
      }
    }

    function ListvehicleComponent_div_27_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "EndDate"));
      }
    }

    function ListvehicleComponent_div_27_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lvd_r673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvd_r673.PermitExpiryDate);
      }
    }

    function ListvehicleComponent_div_27_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lvd_r673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvd_r673.PermitExpiryDate);
      }
    }

    function ListvehicleComponent_div_27_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "RenewalsPending"));
      }
    }

    function ListvehicleComponent_div_27_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "RequestPending"));
      }
    }

    function ListvehicleComponent_div_27_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PaymentPending"));
      }
    }

    function ListvehicleComponent_div_27_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Approved"));
      }
    }

    function ListvehicleComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r686 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_div_27_Template_span_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r686);

          var lvd_r673 = ctx.$implicit;

          var ctx_r685 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r685.printVehicleData(lvd_r673);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListvehicleComponent_div_27_button_8_Template, 2, 0, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ListvehicleComponent_div_27_div_24_Template, 3, 3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ListvehicleComponent_div_27_div_25_Template, 3, 3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ListvehicleComponent_div_27_div_26_Template, 2, 1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListvehicleComponent_div_27_div_27_Template, 2, 1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ListvehicleComponent_div_27_span_33_Template, 3, 3, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListvehicleComponent_div_27_span_34_Template, 3, 3, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ListvehicleComponent_div_27_span_35_Template, 3, 3, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListvehicleComponent_div_27_span_36_Template, 3, 3, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_div_27_Template_div_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r686);

          var lvd_r673 = ctx.$implicit;

          var ctx_r687 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r687.navigateToVehicleViewPage(lvd_r673);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lvd_r673 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", lvd_r673.VehicleMake, " - ", lvd_r673.VehicleModel, " - ", lvd_r673.ModelNumber, " -", lvd_r673.VehicleColour, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !lvd_r673.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvd_r673.VehicleType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", lvd_r673.TypeOfPermit, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 22, "StartDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvd_r673.PermitStartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.Status === "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.Status === "Expired");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.Status === "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.Status === "Expired");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvd_r673.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.PendingRenewalsAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.PendingRequestsAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvd_r673.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !lvd_r673.PendingPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", lvd_r673.ChassisNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", lvd_r673.VehiclePlateEmirate, " - ", lvd_r673.VehiclePlateCode, " - ", lvd_r673.PlateNumber, " ");
      }
    }

    function ListvehicleComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

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

    function ListvehicleComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r689 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pagination-controls", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListvehicleComponent_div_30_Template_pagination_controls_pageChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r689);

          var ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r688.onPageChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxSize", ctx_r666.maxSize)("directionLinks", ctx_r666.directionLinks)("autoHide", ctx_r666.autoHide)("responsive", ctx_r666.responsive)("previousLabel", ctx_r666.labels.previousLabel)("nextLabel", ctx_r666.labels.nextLabel)("screenReaderPaginationLabel", ctx_r666.labels.screenReaderPaginationLabel)("screenReaderPageLabel", ctx_r666.labels.screenReaderPageLabel)("screenReaderCurrentLabel", ctx_r666.labels.screenReaderCurrentLabel);
      }
    }

    function ListvehicleComponent_tr_66_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 72);
      }
    }

    function ListvehicleComponent_tr_66_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r697 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_tr_66_td_16_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r697);

          var vehicle_r690 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r695 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r695.navigateToUpdatePage(vehicle_r690);
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

    function ListvehicleComponent_tr_66_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 72);
      }
    }

    function ListvehicleComponent_tr_66_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 72);
      }
    }

    function ListvehicleComponent_tr_66_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListvehicleComponent_tr_66_td_15_Template, 1, 0, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListvehicleComponent_tr_66_td_16_Template, 4, 3, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListvehicleComponent_tr_66_td_17_Template, 1, 0, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListvehicleComponent_tr_66_td_18_Template, 1, 0, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var vehicle_r690 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.VehicleID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", vehicle_r690.VehicleMake, " ", vehicle_r690.VehicleModel, " ", vehicle_r690.ModelNumber, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.VehicleType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.ChassisNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.VehicleColour);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r690.Comments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r690.Status === "Under Approval");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r690.Status === "Need More Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r690.Status === "Approved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r690.Status === "Rejected");
      }
    }

    function ListvehicleComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 68);

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

    var ListvehicleComponent =
    /*#__PURE__*/
    function () {
      function ListvehicleComponent(router, formBuilder, apiCall, common, translate, el) {
        _classCallCheck(this, ListvehicleComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.currentPageNumber = 1;
        this.userLoginDetails = {};
        this.listVehicleData = [];
        this.listVehicleDataWithoutFilter = [];
        this.companyVehiclesStagingList = [];
        this.noData = false;
        this.noRecordsFound = false;
        this.totalListVehicleData = 0;
        this.selectedCompanyInfo = {};
        this.dtOptions = {
          order: [[1, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.collection = {
          count: this.totalListVehicleData,
          data: []
        };
        this.config = {
          itemsPerPage: 6,
          currentPage: 1,
          totalItems: this.totalListVehicleData
        };
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.responsive = true;
        this.labels = {
          screenReaderPaginationLabel: 'Pagination',
          screenReaderPageLabel: 'page',
          screenReaderCurrentLabel: "You're on page"
        }; // Used for get Vehicle List

        this.listVehicleDetails = []; // Used for get All Vehicle List

        this.listVehicleDataWithoutFilterWithCombination = []; // Used for get Staging Vehicle List

        this.isDtInitialized = false; //Used For Vehicle List Search functionality

        this.showPagination = false; //onKeypressEvent(event: any) {
        //  this.noData = false;
        //  this.showPagination = true;
        //  let searchValue = event.target.value;
        //  if (searchValue == null || searchValue == "") {
        //    this.showPagination = false;
        //  }
        //  if (searchValue && searchValue.trim() != '') {
        //    this.listVehicleData = this.listVehicleDataWithoutFilter.filter((val) => {
        //      let vehicle_Make; let vehicle_Model; let vehicle_PlateNumber;
        //      let ModelNumber; let VehicleType; let PermitStartDate; let PermitExpiryDate; let Status; let VehiclePlateEmirate;
        //      let VehiclePlateCodel; let TypeOfPermit; let ChassisNumber; let VehicleCombination;
        //      if (val.VehicleMake != null) {
        //        vehicle_Make = val.VehicleMake.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.VehicleModel != null) {
        //        vehicle_Model = val.VehicleModel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.PlateNumber != null) {
        //        vehicle_PlateNumber = val.PlateNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.ModelNumber != null) {
        //        ModelNumber = val.ModelNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.VehiclePlateEmirate != null && val.VehiclePlateCode != null && val.PlateNumber != null) {
        //        let combination = val.VehiclePlateEmirate.toLowerCase() + "-" + val.VehiclePlateCode.toLowerCase() + "-" + val.PlateNumber.toLowerCase();
        //        VehicleCombination = false;
        //        if (combination.indexOf(searchValue.toLowerCase()) !== -1) {
        //          VehicleCombination = true;
        //        }
        //      }
        //      if (val.VehicleType != null) {
        //        VehicleType = val.VehicleType.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.PermitStartDate != null) {
        //        PermitStartDate = val.PermitStartDate.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.PermitExpiryDate != null) {
        //        PermitExpiryDate = val.PermitExpiryDate.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.Status != null) {
        //        Status = val.Status.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.TypeOfPermit != null) {
        //        TypeOfPermit = val.TypeOfPermit.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.VehiclePlateEmirate != null) {
        //        VehiclePlateEmirate = val.VehiclePlateEmirate.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.VehiclePlateCodel != null) {
        //        VehiclePlateCodel = val.VehiclePlateCodel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      if (val.ChassisNumber != null) {
        //        ChassisNumber = val.ChassisNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        //      }
        //      return (vehicle_Make || vehicle_Model || vehicle_PlateNumber || ModelNumber || VehicleType || PermitStartDate ||
        //        PermitExpiryDate || Status || VehiclePlateEmirate || VehiclePlateCodel || TypeOfPermit || ChassisNumber || VehicleCombination);
        //    })
        //  } else {
        //    this.listVehicleData = this.listVehicleDataWithoutFilter;
        //  }
        //  if (this.listVehicleData.length == 0) {
        //    this.noData = true;
        //  }
        //}

        this.isSearchFunction = false; // For Pagination

        this.tempPageNo = 0;
      }

      _createClass(ListvehicleComponent, [{
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
        } // Used for call all APIs

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
                    return this.getVehicleList();

                  case 4:
                    _context2.next = 6;
                    return this.getListCompanyVehiclesStagingList();

                  case 6:
                    _context2.next = 8;
                    return this.onChangeOfCompany();

                  case 8:
                    this.apiCall.spinner.hide();
                    _context2.next = 11;
                    return this.showDriverVehicleAddBtn(selectedCompanyInfo);

                  case 11:
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
        }
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
                    this.apiCall.spinner.show();
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
                                //this.addVehicleValidation();

                                this.showDriverVehicleAddBtn(selectedCompanyInfo);
                                _context3.next = 8;
                                return this.getVehicleList();

                              case 8:
                                _context3.next = 10;
                                return this.getListCompanyVehiclesStagingList();

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

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getVehicleList",
        value: function getVehicleList() {
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
                    this.showPagination = false;
                    _context5.next = 13;
                    return this.apiCall.postAPICallWithToken('api/VehicleManager/getVehicleList', jsonData).then(function (result) {
                      _this2.listVehicleDetails = result;
                      _this2.listVehicleData = result.data;
                      _this2.totalListVehicleData = result.headerResponse.totalCount;
                      _this2.config = {
                        itemsPerPage: 6,
                        currentPage: _this2.currentPageNumber,
                        totalItems: _this2.totalListVehicleData
                      };
                      _this2.listVehicleDataWithoutFilter = result.data; //this.getAllVehicleRecords();

                      if (_this2.listVehicleData.length == 0) {
                        _this2.noData = true;
                        _this2.showPagination = true;
                      } else {}

                      _this2.apiCall.spinner.hide();
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getAllVehicleRecords",
        value: function getAllVehicleRecords() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var jsonData, selectedCompanyInfo, userLoginInfo;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    jsonData = {};
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.QueryCount = this.totalListVehicleData.toString();
                    jsonData.PageNumber = "1";
                    this.noData = false;
                    this.showPagination = false;
                    _context6.next = 12;
                    return this.apiCall.postAPICallWithToken('api/VehicleManager/getVehicleList', jsonData).then(function (result) {
                      //this.listVehicleData = result.data;
                      _this3.listVehicleDataWithoutFilter = result.data;
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getListCompanyVehiclesStagingList",
        value: function getListCompanyVehiclesStagingList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this4 = this;

            var jsonData, outerJsonData, selectedCompanyInfo, userLoginInfo;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.apiCall.spinner.show();
                    jsonData = {};
                    outerJsonData = {};
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    jsonData.Token = userLoginInfo.Token;
                    outerJsonData.inputParameter = JSON.stringify(jsonData);
                    this.noRecordsFound = false;
                    _context7.next = 12;
                    return this.apiCall.postAPICallWithToken('api/VehicleManager/ListCompanyVehiclesStaging', outerJsonData).then(function (result) {
                      _this4.companyVehiclesStagingList = result;

                      if (_this4.isDtInitialized) {
                        _this4.dtElement.dtInstance.then(function (dtInstance) {
                          dtInstance.destroy();

                          _this4.dtTrigger.next();
                        });
                      } else {
                        _this4.dtTrigger.next();

                        _this4.isDtInitialized = true;
                      }

                      if (result.length == 0) {
                        _this4.noRecordsFound = true;
                      }

                      _this4.apiCall.spinner.hide();
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Used for navigate to add vehicle page and show validation if there is any un paid fine

      }, {
        key: "navigateToAddVehicle",
        value: function navigateToAddVehicle() {
          if (this.common.isCompanyTypeFranchise == false && this.common.showDriverVehicleAddBtnFineValidation) {
            this.common.showSussessFailureMessage(2, 'There are Un paid fines for this company and due to this the Activity/Vehicle/Driver can not be created! Please do pay pending fines and register!', false);
            return;
          } else {
            this.common.mesage = {};
            this.router.navigateByUrl('/vehicle/addvehicle');
          }
        } // Used for navigate to vehicle details page

      }, {
        key: "navigateToVehicleViewPage",
        value: function navigateToVehicleViewPage(vehicle) {
          this.common.setValueToSessionStorage('vehicleInfo', vehicle);
          this.router.navigateByUrl('/vehicle/detailvehicle');
        } // Used for navigate to edit form of un approved vehicle

      }, {
        key: "navigateToUpdatePage",
        value: function navigateToUpdatePage(vehicle) {
          vehicle.requestFrom = 'unapprovedUpdate';
          this.common.setValueToSessionStorage('updateVehicleInfo', vehicle);
          this.router.navigateByUrl('/vehicle/addvehicle');
        } // Used for Print Vehicle details

      }, {
        key: "printVehicleData",
        value: function printVehicleData(vehicle) {
          var _this5 = this;

          var jsonData = {};
          var selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
          jsonData.Emirate = vehicle.VehiclePlateEmirate;
          jsonData.PlateCode = vehicle.VehiclePlateCode;
          jsonData.PlateNumber = vehicle.PlateNumber;
          jsonData.CompanyLicenseNumber = selectedCompanyInfo.LicenseNumber;
          jsonData.ChassisNumber = vehicle.ChassisNumber;
          jsonData.VehicleID = vehicle.VehicleID;
          this.apiCall.postAPICallWithToken('api/EnquiryManager/VehicleLetter', jsonData).then(function (result) {
            _this5.common.setValueToSessionStorage('vehicleDataforLatter', result);

            _this5.router.navigate([]).then(function (result) {
              window.open('/print/print-layout', '_blank');
            });
          })["catch"](function (error) {
            console.log("error ", error);
          });
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
              this.getVehicleList();
            } else {
              this.listVehicleData = this.listVehicleDataWithoutFilter;
              this.isSearchFunction = false;
              this.config = {
                itemsPerPage: 6,
                currentPage: this.currentPageNumber,
                totalItems: this.listVehicleDetails.headerResponse.totalCount
              };
            }
          }

          if (this.listVehicleData.length == 0) {
            this.noData = true;
            this.isSearchFunction = false;
          }
        }
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          var _this6 = this;

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
            this.apiCall.postAPICallWithToken('api/VehicleManager/SearchVehicleRecords', jsonData).then(function (result) {
              _this6.listVehicleData = result;
              _this6.totalListVehicleData = result.headerResponse.totalCount;
              _this6.listVehicleData = result.data;
              var totalCount = result.headerResponse.totalCount;

              if (_this6.listVehicleData.length == 0 && totalCount == 0) {
                _this6.noData = true;
                _this6.config = {
                  itemsPerPage: 6,
                  currentPage: 1,
                  totalItems: 0
                };
              } else {
                _this6.noData = false;
                _this6.config = {
                  itemsPerPage: 6,
                  currentPage: _this6.currentPageNumber,
                  totalItems: totalCount
                };
              }
            })["catch"](function (error) {
              console.log("error ", error);
            });
            this.config.currentPage = 1;
          } else {
            this.listVehicleData = this.listVehicleDataWithoutFilter;
            this.config.currentPage = this.currentPageNumber;
            this.isSearchFunction = false;
            this.config = {
              itemsPerPage: 6,
              currentPage: this.currentPageNumber,
              totalItems: this.listVehicleDetails.headerResponse.totalCount
            };
          }

          if (this.listVehicleData.length == 0) {
            this.noData = true;
            this.isSearchFunction = false;
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          if (this.isSearchFunction) {
            this.tempPageNo = this.config.currentPage;
            this.currentPageNumber = event;
            this.onSearchClick();
          }

          this.config.currentPage = event;
          this.currentPageNumber = event;

          if (!this.isSearchFunction) {
            this.getVehicleList();
          }
        }
      }, {
        key: "showDriverVehicleAddBtn",
        value: function showDriverVehicleAddBtn(company) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            var jsonData, newdate, enddate, today;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
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
                      _context8.next = 16;
                      break;
                    }

                    debugger;
                    jsonData = {};
                    jsonData.CompanyID = company.CompanyID;
                    _context8.next = 15;
                    return this.apiCall.postAPICallWithToken('api/EnquiryManager/DisableFineRestriction', jsonData).then(function (result) {
                      debugger;
                      _this7.disableFineRestrictionAPIData = result;

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
                            _this7.common.disablefine = true;
                            break;
                          } else {
                            //dates are not bet ween today date
                            _this7.common.disablefine = false;
                            continue;
                          }
                        }
                      } else {
                        //dates are not there
                        console.log("Dates:" + result.DisableFineRestrictionOutput + "- DisableFineRestriction: " + result.DisableFineRestriction);
                        _this7.common.disablefine = false;
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 15:
                    //11-12-2023
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
                      }

                      if (this.common.showDriverVehicleAddBtnPendingFineValidation) {
                        this.common.showSussessFailureMessage(2, 'Please Pay Pending Fine to proceed with Vehicle and Driver Creation', false);
                      }

                      if (this.common.showDriverVehicleAddBtnCompanyExpireValidation) {
                        this.common.showSussessFailureMessage(2, 'Please Renew Company License to proceed with Vehicle and Driver Creation', false);
                      } //}

                    }

                    this.common.setValueToSessionStorage("showAddVehicleBtn", this.common.showAddVehicleBtn);

                  case 20:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return ListvehicleComponent;
    }();

    ListvehicleComponent.ɵfac = function ListvehicleComponent_Factory(t) {
      return new (t || ListvehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ListvehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListvehicleComponent,
      selectors: [["app-listvehicle"]],
      viewQuery: function ListvehicleComponent_Query(rf, ctx) {
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
      consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "d-flex", "action_box", "py-3"], [1, "d-flex", "align-items-center", "action_box-first"], [4, "ngIf"], [1, "col-12", "d-flex", "align-items-center", "justify-content-space-between", "pb-3", "filter_action_row", "search_icon_blk"], [1, "input-wrapper", "input-wrapper-company-card"], [3, "formGroup"], ["type", "text", "formControlName", "searchText", 1, "pi-form-inputs", 3, "placeholder", "keyup"], [1, "fas", "fa-search", "text-777", 3, "click"], [1, "col-md-12"], [3, "class", 4, "ngIf"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-md-12 p-0", 4, "ngIf"], [1, "col-12", "p-0"], [1, "col-12", "card", "add_company_tab_card"], [1, "table-responsive"], ["datatable", "", 1, "mytable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["class", "col-12 card add_company_tab_card", 4, "ngIf"], [1, "btn", "theme-blue-btn", "add_company_xs", 3, "click"], ["src", "/assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "close", 3, "click"], [1, "col-md-6"], [1, "main_card"], [1, "company_advertisement_upperdiv"], [1, "details_right"], [1, "heading"], [1, "company_name"], [1, "icon_btn_wrapper", 3, "click"], ["class", "icon_btn", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Print", 4, "ngIf"], [1, "mt-2", "mb-3"], [1, "font-weight-bold", "fs--14"], [1, "permit_row"], [1, "subheading_wrapper"], [1, "text-777", "fs--13"], [1, "subheading"], ["class", "text-777 fs--13 ", 4, "ngIf"], ["class", "text-777 fs--13 ", "style", "color: red", 4, "ngIf"], ["class", "subheading", 4, "ngIf"], ["class", "subheading", "style", "color: red", 4, "ngIf"], [1, "d-flex", "company_advertisement_bottomdiv", "align-items-center", "pt-1", "pb-3", "justify-content-space-between", "px-3"], [1, ""], [1, "mb-0"], [1, "cstm-badges", "bg-blue", "text-white"], ["class", "cstm-badges bg-warning text-white", 4, "ngIf"], ["class", "cstm-badges  bg-secondary text-white", 4, "ngIf"], ["class", "cstm-badges  bg-info text-white", 4, "ngIf"], ["class", "cstm-badges bg-success text-white", 4, "ngIf"], [1, "button_action_wrapper"], [1, "cstm-badges", "sm-small-btn", "chassi_cls"], [3, "click"], [1, "btn", "cstm-badges", "sm-small-btn"], ["data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Print", 1, "icon_btn"], ["alt", "", "src", "/assets/images/company-page/printer.svg", 1, "icon_btn_printer"], [1, "text-777", "fs--13", 2, "color", "red"], [1, "subheading", 2, "color", "red"], [1, "cstm-badges", "bg-warning", "text-white"], [1, "cstm-badges", "bg-secondary", "text-white"], [1, "cstm-badges", "bg-info", "text-white"], [1, "cstm-badges", "bg-success", "text-white"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"], [3, "maxSize", "directionLinks", "autoHide", "responsive", "previousLabel", "nextLabel", "screenReaderPaginationLabel", "screenReaderPageLabel", "screenReaderCurrentLabel", "pageChange"], ["class", "cursor_pointer", 4, "ngIf"], ["class", "cursor_pointer", 3, "click", 4, "ngIf"], [1, "cursor_pointer"], [1, "cursor_pointer", 3, "click"]],
      template: function ListvehicleComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListvehicleComponent_div_15_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ListvehicleComponent_Template_input_keyup_19_listener($event) {
            return ctx.onKeypressEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "em", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_Template_em_click_21_listener() {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "em", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListvehicleComponent_Template_em_click_22_listener() {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ListvehicleComponent_div_25_Template, 5, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListvehicleComponent_div_27_Template, 43, 24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListvehicleComponent_div_29_Template, 5, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ListvehicleComponent_div_30_Template, 2, 9, "div", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ListvehicleComponent_tr_66_Template, 19, 13, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ListvehicleComponent_div_67_Template, 6, 3, "div", 25);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 28, "Vehicles"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.common.showAddVehicleBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 30, "Search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 32, ctx.listVehicleData, ctx.config));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 35, "UnApprovedVehicleList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx.noRecordsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 37, "VehicleID"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 39, "VehicleInfo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 41, "VehicleType"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 43, "ChassisNumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 45, "VehicleColour"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 47, "Status"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 49, "Comments"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 51, "Action"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyVehiclesStagingList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noRecordsFound);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_9__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_11__["GlobalfooterComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationControlsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlaGljbGUvbGlzdHZlaGljbGUvbGlzdHZlaGljbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListvehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-listvehicle',
          templateUrl: './listvehicle.component.html',
          styleUrls: ['./listvehicle.component.scss']
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
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
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
  "./src/app/pages/vehicle/listvehicle/listvehicle.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/vehicle/listvehicle/listvehicle.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ListvehicleModule */

  /***/
  function srcAppPagesVehicleListvehicleListvehicleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListvehicleModule", function () {
      return ListvehicleModule;
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


    var _listvehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listvehicle-routing.module */
    "./src/app/pages/vehicle/listvehicle/listvehicle-routing.module.ts");
    /* harmony import */


    var _listvehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listvehicle.component */
    "./src/app/pages/vehicle/listvehicle/listvehicle.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.module */
    "./src/app/pages/common/globalheader/globalheader.module.ts");
    /* harmony import */


    var _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.module */
    "./src/app/pages/common/globalfooter/globalfooter.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var ListvehicleModule = function ListvehicleModule() {
      _classCallCheck(this, ListvehicleModule);
    };

    ListvehicleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListvehicleModule
    });
    ListvehicleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListvehicleModule_Factory(t) {
        return new (t || ListvehicleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listvehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListvehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_5__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_6__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListvehicleModule, {
        declarations: [_listvehicle_component__WEBPACK_IMPORTED_MODULE_3__["ListvehicleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listvehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListvehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_5__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_6__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListvehicleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_listvehicle_component__WEBPACK_IMPORTED_MODULE_3__["ListvehicleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listvehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListvehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_5__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_6__["GlobalfooterModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-vehicle-listvehicle-listvehicle-module-es5.js.map