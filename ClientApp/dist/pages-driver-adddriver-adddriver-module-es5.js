function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-adddriver-adddriver-module"], {
  /***/
  "./src/app/pages/driver/adddriver/adddriver-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/driver/adddriver/adddriver-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: AdddriverRoutingModule */

  /***/
  function srcAppPagesDriverAdddriverAdddriverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverRoutingModule", function () {
      return AdddriverRoutingModule;
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


    var _adddriver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adddriver.component */
    "./src/app/pages/driver/adddriver/adddriver.component.ts");

    var routes = [{
      path: '',
      component: _adddriver_component__WEBPACK_IMPORTED_MODULE_2__["AdddriverComponent"]
    }];

    var AdddriverRoutingModule = function AdddriverRoutingModule() {
      _classCallCheck(this, AdddriverRoutingModule);
    };

    AdddriverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdddriverRoutingModule
    });
    AdddriverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdddriverRoutingModule_Factory(t) {
        return new (t || AdddriverRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdddriverRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdddriverRoutingModule, [{
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
  "./src/app/pages/driver/adddriver/adddriver.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/driver/adddriver/adddriver.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdddriverComponent */

  /***/
  function srcAppPagesDriverAdddriverAdddriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverComponent", function () {
      return AdddriverComponent;
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


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
    /* harmony import */


    var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");

    var _c0 = function _c0() {
      return ["/driver/detaildriver"];
    };

    function AdddriverComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r933 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r933.driveInfo.DrivingLicenseNumber);
      }
    }

    function AdddriverComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AddDriver"));
      }
    }

    function AdddriverComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriver"));
      }
    }

    function AdddriverComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriver"));
      }
    }

    function AdddriverComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CreateDriverUpdateRequest"));
      }
    }

    function AdddriverComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriverUpdateRequest"));
      }
    }

    function AdddriverComponent_h4_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AddDriver"));
      }
    }

    function AdddriverComponent_h4_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriver"));
      }
    }

    function AdddriverComponent_h4_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriver"));
      }
    }

    function AdddriverComponent_h4_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CreateDriverUpdateRequest"));
      }
    }

    function AdddriverComponent_h4_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateDriverUpdateRequest"));
      }
    }

    function AdddriverComponent_div_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r979 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_60_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r979);

          var ctx_r978 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r978.common.mesage.showMessage = !ctx_r978.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r944 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r944.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r944.common.mesage.mesage);
      }
    }

    function AdddriverComponent_div_73_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmiratesID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_73_div_2_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "EmiratesID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeLessThan"), " 15 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function AdddriverComponent_div_73_div_3_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "EmiratesID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 15 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function AdddriverComponent_div_73_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Invalid"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "EmiratesID"), " ");
      }
    }

    function AdddriverComponent_div_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_73_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdddriverComponent_div_73_div_2_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdddriverComponent_div_73_div_3_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdddriverComponent_div_73_div_4_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r945 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r945.f.emiratesId.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r945.f.emiratesId.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r945.f.emiratesId.errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r945.f.emiratesId.errors.invaildEmiratesId);
      }
    }

    function AdddriverComponent_div_85_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DateOfBirth"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_85_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r947 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r947.f.emiratesIdExpiryDate.errors.required);
      }
    }

    function AdddriverComponent_div_96_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "NameEN"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_96_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r948 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r948.f.firstName.errors.required);
      }
    }

    function AdddriverComponent_div_113_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "NameAR"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_113_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_113_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r949 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r949.f.arabicName.errors.required);
      }
    }

    function AdddriverComponent_option_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nat_r987 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", nat_r987.Code);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", nat_r987.NameEN, " ");
      }
    }

    function AdddriverComponent_div_127_div_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Nationality"), "");
      }
    }

    function AdddriverComponent_div_127_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_127_div_1_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r951 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r951.f.nationality.errors.required);
      }
    }

    function AdddriverComponent_div_148_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Gender"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_148_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r952 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r952.f.gender.errors.required);
      }
    }

    function AdddriverComponent_div_160_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmailID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_160_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "EmailPattern"));
      }
    }

    function AdddriverComponent_div_160_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_160_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdddriverComponent_div_160_div_2_Template, 3, 3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r953 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r953.f.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r953.f.email.errors.pattern);
      }
    }

    function AdddriverComponent_div_170_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "MobileNo"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_170_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NumberOnly"));
      }
    }

    function AdddriverComponent_div_170_div_3_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "MobileNo"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeLessThan"), " 12 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Digits"), " ");
      }
    }

    function AdddriverComponent_div_170_div_4_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "MobileNo"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 12 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Digits"), " ");
      }
    }

    function AdddriverComponent_div_170_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_170_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdddriverComponent_div_170_div_2_Template, 3, 3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdddriverComponent_div_170_div_3_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdddriverComponent_div_170_div_4_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r954 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r954.f.mobileNo.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r954.f.mobileNo.errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r954.f.mobileNo.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r954.f.mobileNo.errors.maxlength);
      }
    }

    function AdddriverComponent_div_190_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "LicenseNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_190_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SpecialCharactersNotAllowed"));
      }
    }

    function AdddriverComponent_div_190_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_190_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdddriverComponent_div_190_div_2_Template, 3, 3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r955 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r955.f.licenseNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r955.f.licenseNumber.errors.pattern);
      }
    }

    function AdddriverComponent_option_203_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emer_r998 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", emer_r998.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", emer_r998.Name, " ");
      }
    }

    function AdddriverComponent_div_204_div_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Emirate"), "");
      }
    }

    function AdddriverComponent_div_204_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_204_div_1_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r957 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r957.f.emirate.errors.required);
      }
    }

    function AdddriverComponent_div_217_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "IssueDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_217_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_217_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r959 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r959.f.issueDate.errors.required);
      }
    }

    function AdddriverComponent_div_229_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_229_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_229_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r961 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r961.f.expiryDate.errors.required);
      }
    }

    function AdddriverComponent_option_244_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var vtl_r1002 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vtl_r1002.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vtl_r1002.NameEN, " ");
      }
    }

    function AdddriverComponent_div_245_div_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Type"), "");
      }
    }

    function AdddriverComponent_div_245_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_245_div_1_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r963 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r963.f.chooseType.errors.required);
      }
    }

    function AdddriverComponent_option_258_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dtpl_r1004 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dtpl_r1004.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dtpl_r1004.PermitName, " ");
      }
    }

    function AdddriverComponent_div_259_div_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "TypeOfPermit"), "");
      }
    }

    function AdddriverComponent_div_259_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_259_div_1_Template, 5, 9, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r965 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r965.f.typeOfPermit.errors.required);
      }
    }

    function AdddriverComponent_div_270_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitIssueDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_270_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_270_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r966 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r966.f.permitIssueDate.errors.required);
      }
    }

    function AdddriverComponent_div_280_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_280_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_280_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r967 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r967.f.permitExpiryDate.errors.required);
      }
    }

    function AdddriverComponent_div_291_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Fees"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_291_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_291_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r968 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r968.f.permitFees.errors.required);
      }
    }

    function AdddriverComponent_div_293_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmiratesID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_293_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_293_div_9_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1009 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1009.f.file1.errors.required);
      }
    }

    function AdddriverComponent_div_293_label_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1014 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_293_label_10_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1014);

          var ctx_r1013 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1013.downloadFile(ctx_r1013.reactiveFormName.value.file1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1010 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1010.reactiveFormName.value.file1.FileName);
      }
    }

    function AdddriverComponent_div_293_label_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r1016 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_293_label_17_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1016);

          var ctx_r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1015.downloadFile(ctx_r1015.reactiveFormName.value.file2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1011 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1011.reactiveFormName.value.file2.FileName);
      }
    }

    function AdddriverComponent_div_293_Template(rf, ctx) {
      if (rf & 1) {
        var _r1018 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_293_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1018);

          var ctx_r1017 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1017.onChange($event, "file1");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdddriverComponent_div_293_div_9_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdddriverComponent_div_293_label_10_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_293_Template_input_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1018);

          var ctx_r1019 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1019.onChange($event, "file2");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdddriverComponent_div_293_label_17_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r969 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "EmiratesID"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r969.f.file1.touched || ctx_r969.isFormSubmited) && ctx_r969.f.file1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r969.reactiveFormName.value.file1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "Passport"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r969.reactiveFormName.value.file2);
      }
    }

    function AdddriverComponent_div_294_label_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1023 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_294_label_7_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1023);

          var ctx_r1022 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1022.downloadFile(ctx_r1022.reactiveFormName.value.file3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1020 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1020.reactiveFormName.value.file3.FileName);
      }
    }

    function AdddriverComponent_div_294_label_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r1025 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_294_label_14_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1025);

          var ctx_r1024 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1024.downloadFile(ctx_r1024.reactiveFormName.value.file4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1021 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1021.reactiveFormName.value.file4.FileName);
      }
    }

    function AdddriverComponent_div_294_Template(rf, ctx) {
      if (rf & 1) {
        var _r1027 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_294_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1027);

          var ctx_r1026 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1026.onChange($event, "file3");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdddriverComponent_div_294_label_7_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_294_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1027);

          var ctx_r1028 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1028.onChange($event, "file4");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdddriverComponent_div_294_label_14_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r970 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "ResidenceVisa"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r970.reactiveFormName.value.file3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "DrivingLicense"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r970.reactiveFormName.value.file4);
      }
    }

    function AdddriverComponent_div_295_label_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r1033 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_295_label_9_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1033);

          var ctx_r1032 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1032.downloadFile(ctx_r1032.reactiveFormName.value.file5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1029 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1029.reactiveFormName.value.file5.FileName);
      }
    }

    function AdddriverComponent_div_295_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DriverPhoto"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AdddriverComponent_div_295_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_295_div_10_div_1_Template, 4, 6, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1030 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1030.f.file5.errors.required);
      }
    }

    function AdddriverComponent_div_295_label_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r1036 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_295_label_18_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1036);

          var ctx_r1035 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1035.downloadFile(ctx_r1035.reactiveFormName.value.file6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1031 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1031.reactiveFormName.value.file6.FileName);
      }
    }

    function AdddriverComponent_div_295_Template(rf, ctx) {
      if (rf & 1) {
        var _r1038 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_295_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1038);

          var ctx_r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1037.onChange($event, "file5");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdddriverComponent_div_295_label_9_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdddriverComponent_div_295_div_10_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_div_295_Template_input_change_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1038);

          var ctx_r1039 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1039.onChange($event, "file6");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdddriverComponent_div_295_label_18_Template, 2, 1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r971 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "DriverPhoto"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r971.reactiveFormName.value.file5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r971.f.file5.touched || ctx_r971.isFormSubmited) && ctx_r971.f.file5.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "Other"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r971.reactiveFormName.value.file6);
      }
    }

    function AdddriverComponent_div_296_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1043 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_div_296_div_1_Template_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1043);

          var attachment_r1041 = ctx.$implicit;

          var ctx_r1042 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1042.downloadFile(attachment_r1041);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attachment_r1041 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1041.Subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1041.FileName);
      }
    }

    function AdddriverComponent_div_296_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_296_div_1_Template, 6, 2, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r972 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r972.viewDriverAttachmentsList);
      }
    }

    function AdddriverComponent_div_297_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 104);

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

    function AdddriverComponent_div_306_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PleaseConfirmTermsAndCondition"));
      }
    }

    function AdddriverComponent_div_306_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdddriverComponent_div_306_div_1_Template, 3, 3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r974 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r974.f.checkAllCondition.errors.required);
      }
    }

    function AdddriverComponent_button_310_Template(rf, ctx) {
      if (rf & 1) {
        var _r1046 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_button_310_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1046);

          var ctx_r1045 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1045.previousOrNextBtnAction(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Previous"), " ");
      }
    }

    function AdddriverComponent_button_311_Template(rf, ctx) {
      if (rf & 1) {
        var _r1048 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_button_311_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1048);

          var ctx_r1047 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1047.previousOrNextBtnAction(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Next"), " ");
      }
    }

    function AdddriverComponent_button_312_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Submit"), " ");
      }
    }

    var _c1 = function _c1() {
      return ["/company/listcompany"];
    };

    var _c2 = function _c2() {
      return ["/driver/listdriver"];
    };

    var AdddriverComponent =
    /*#__PURE__*/
    function () {
      function AdddriverComponent(spinner, router, formBuilder, apiCall, common, translate, el, sanitizer, dateTimeAdapter) {
        _classCallCheck(this, AdddriverComponent);

        this.spinner = spinner;
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.sanitizer = sanitizer;
        this.selectedLang = "";
        this.userLoginDetails = [];
        this.emiratesList = [];
        this.nationalityList = [];
        this.driverTypeList = [];
        this.driverTypePermitList = [];
        this.driverTypePermitListWithFilter = [];
        this.typeOfPermit = [];
        this.viewDriverAttachmentsList = [];
        this.isFormSubmited = false;
        this.showAttachment = false;
        this.isFirstNameReadOnly = false;
        this.isLastNameReadOnly = false;
        this.isNameInArabicReadOnly = false;
        this.isEmailIDReadOnly = false;
        this.isMobileNoReadOnly = false;
        this.noAttacmentsFound = false;
        this.isEmiratesIdReadOnly = false;
        this.mesage = {};
        this.driveInfo = {};
        this.activeSection = 1;
        this.requestFlag = 1; // For checking correct EmiratesId

        this.oldBOD = '';
        this.newBOD = ''; //readonly file1SubjectName: string = 'Business Name License';
        //readonly file2SubjectName: string = 'Passport';
        //readonly file3SubjectName: string = 'Other';
        //readonly file4SubjectName: string = 'Emirates Id';
        //readonly file5SubjectName: string = 'Generic';

        this.file1SubjectName = 'Emirates Id';
        this.file2SubjectName = 'Passport';
        this.file3SubjectName = 'Residence Visa';
        this.file4SubjectName = 'Driving License';
        this.file5SubjectName = 'Driver Photo';
        this.file6SubjectName = 'Other';
        dateTimeAdapter.setLocale('en-IN');
      }

      _createClass(AdddriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('userLogin');
          var today = new Date();
          var month = today.getMonth() + 1;
          var day = today.getDate();
          var pemitIssueDate = (day > 9 ? day : '0' + day) + '-' + (month > 9 ? month : '0' + month) + '-' + today.getFullYear();
          this.userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
          this.reactiveFormName = this.formBuilder.group({
            emiratesId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: [''],
            arabicName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emiratesIdExpiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.emailPattern)]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            licenseNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.nameRegularExpression)]],
            emirate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issueDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            expiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            chooseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            typeOfPermit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitIssueDate: [pemitIssueDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitFees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            street: [''],
            address1: [''],
            address2: [''],
            city: [''],
            state: [''],
            zip: [''],
            country: [''],
            notes: [''],
            checkAllCondition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file2: [null],
            file3: [null],
            file4: [null],
            file5: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file6: [null]
          });
          this.getAllData();
        } // convenience getter for easy access to form fields

      }, {
        key: "f",
        get: function get() {
          return this.reactiveFormName.controls;
        } // Used for call all APIs

      }, {
        key: "getAllData",
        value: function getAllData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var companyinfo, updateDriverInfo;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    companyinfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');

                    if (companyinfo.CompanyType == "Franchise") {
                      this.common.isCompanyTypeFranchise = true;
                    } else {
                      this.common.isCompanyTypeFranchise = false;
                    }

                    updateDriverInfo = this.common.getValueFromSessionStorage('updateDriverInfo');
                    this.driveInfo = updateDriverInfo;

                    if (updateDriverInfo != null) {
                      if (updateDriverInfo.requestFrom == 'unapprovedUpdate') {
                        this.reactiveFormName.get('file1').clearValidators();
                        this.reactiveFormName.get('file5').clearValidators();
                        this.requestFlag = 2;
                        this.showAttachment = false;
                      } else if (updateDriverInfo.requestFrom == 'driverUpdateReqCreation') {
                        this.requestFlag = 3;
                      } else if (updateDriverInfo.requestFrom == 'driverUpdateReqUpdate') {
                        this.requestFlag = 4;
                      } else if (updateDriverInfo.requestFrom == 'editUpdate') {
                        this.requestFlag = 5;
                        debugger;

                        if (this.common.isCompanyTypeFranchise) {
                          this.showAttachment = false;
                        } else {
                          this.reactiveFormName.get('file1').clearValidators();
                          this.reactiveFormName.get('file5').clearValidators();
                          this.showAttachment = true;
                        }
                      }
                    }

                    this.reactiveFormName.get('file1').updateValueAndValidity();
                    this.reactiveFormName.get('file5').updateValueAndValidity();
                    _context.next = 9;
                    return this.getEmiratesList();

                  case 9:
                    _context.next = 11;
                    return this.getFilterNationalityList();

                  case 11:
                    _context.next = 13;
                    return this.getDriverTypePermitList();

                  case 13:
                    _context.next = 15;
                    return this.getDriverTypeList();

                  case 15:
                    if (!(updateDriverInfo != null)) {
                      _context.next = 19;
                      break;
                    }

                    _context.next = 18;
                    return this.assignDataToform(updateDriverInfo);

                  case 18:
                    this.getViewVehicleAttachmentsList();

                  case 19:
                    if (this.requestFlag && this.common.isCompanyTypeFranchise) {
                      debugger;
                      this.isEmiratesIdReadOnly = false;
                      this.isFirstNameReadOnly = false;
                      this.isLastNameReadOnly = false;
                      this.isNameInArabicReadOnly = false;
                      this.f.nationality.enable();
                      this.f.emiratesIdExpiryDate.enable();
                    } else if (this.requestFlag == 2 || this.requestFlag == 5 && !this.common.isCompanyTypeFranchise) {
                      //added franchise company check to make editable below fields radhika 14-12-2023
                      this.isEmiratesIdReadOnly = true;
                      this.isFirstNameReadOnly = true;
                      this.isLastNameReadOnly = true;
                      this.isNameInArabicReadOnly = true;
                      this.f.nationality.disable();
                      this.f.emiratesIdExpiryDate.disable();
                    } else {}

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.common.deleteValueFromSessionStorage('updateDriverInfo');
        }
      }, {
        key: "emiratesIDOnChangeEvent",
        value: function emiratesIDOnChangeEvent(event) {
          debugger;
          this.common.allow_numeric(event);
          var today = new Date();
          var month = today.getMonth() + 1;
          var day = today.getDate();
          var pemitIssueDate = (day > 9 ? day : '0' + day) + '-' + (month > 9 ? month : '0' + month) + '-' + today.getFullYear();
          this.reactiveFormName.controls['firstName'].setValue('');
          this.reactiveFormName.controls['lastName'].setValue('');
          this.reactiveFormName.controls['arabicName'].setValue('');
          this.reactiveFormName.controls['emiratesIdExpiryDate'].setValue(null);
          this.reactiveFormName.controls['nationality'].setValue('');
          this.reactiveFormName.controls['email'].setValue('');
          this.reactiveFormName.controls['mobileNo'].setValue('');
          this.reactiveFormName.controls['licenseNumber'].setValue('');
          this.reactiveFormName.controls['gender'].setValue('');
          this.reactiveFormName.controls['emirate'].setValue('');
          this.reactiveFormName.controls['issueDate'].setValue(null);
          this.reactiveFormName.controls['expiryDate'].setValue(null);
          this.reactiveFormName.controls['chooseType'].setValue('');
          this.reactiveFormName.controls['typeOfPermit'].setValue('');
          this.reactiveFormName.controls['permitIssueDate'].setValue(pemitIssueDate);
          this.reactiveFormName.controls['permitExpiryDate'].setValue(null);
          this.reactiveFormName.controls['permitFees'].setValue('');
          this.reactiveFormName.controls['street'].setValue('');
          this.reactiveFormName.controls['address1'].setValue('');
          this.reactiveFormName.controls['address2'].setValue('');
          this.reactiveFormName.controls['city'].setValue('');
          this.reactiveFormName.controls['state'].setValue('');
          this.reactiveFormName.controls['zip'].setValue('');
          this.reactiveFormName.controls['country'].setValue('');
          this.reactiveFormName.controls['notes'].setValue('');
          this.reactiveFormName.controls['checkAllCondition'].setValue('');
          this.reactiveFormName.controls['file1'].setValue(null);
          this.reactiveFormName.controls['file2'].setValue(null);
          this.reactiveFormName.controls['file3'].setValue(null);
          this.reactiveFormName.controls['file4'].setValue(null);
          this.reactiveFormName.controls['file5'].setValue(null);
          this.reactiveFormName.controls['file6'].setValue(null);
        } // Used for get Emirates List

      }, {
        key: "getEmiratesList",
        value: function getEmiratesList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var getEmiratesList;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    getEmiratesList = this.common.getValueFromSessionStorage('getEmiratesList');

                    if (!(getEmiratesList != null)) {
                      _context2.next = 4;
                      break;
                    }

                    this.emiratesList = getEmiratesList;
                    return _context2.abrupt("return");

                  case 4:
                    _context2.next = 6;
                    return this.apiCall.postEnquiryAPICallWithToken('api/EnquiryManager/getEmiratesList', {}).then(function (result) {
                      _this.emiratesList = result;

                      _this.common.setValueToSessionStorage('getEmiratesList', result);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Used for get nationality list

      }, {
        key: "getFilterNationalityList",
        value: function getFilterNationalityList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var getNationalityList;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    getNationalityList = this.common.getValueFromSessionStorage('getNationalityList');

                    if (!(getNationalityList != null)) {
                      _context3.next = 4;
                      break;
                    }

                    this.nationalityList = getNationalityList;
                    return _context3.abrupt("return");

                  case 4:
                    _context3.next = 6;
                    return this.apiCall.postAPICallWithToken('api/DriverManager/getNationalityList', {}).then(function (result) {
                      _this2.nationalityList = result;

                      _this2.common.setValueToSessionStorage('getNationalityList', result);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Used for get Driver Type List

      }, {
        key: "getDriverTypeList",
        value: function getDriverTypeList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var getDriverTypeList;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    getDriverTypeList = this.common.getValueFromSessionStorage('getDriverTypeList');

                    if (!(getDriverTypeList != null)) {
                      _context4.next = 4;
                      break;
                    }

                    this.driverTypeList = getDriverTypeList;
                    return _context4.abrupt("return");

                  case 4:
                    _context4.next = 6;
                    return this.apiCall.postAPICallWithToken('api/DriverManager/getDriverTypeList', {}).then(function (result) {
                      _this3.driverTypeList = result;

                      _this3.common.setValueToSessionStorage('getDriverTypeList', result);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "handleChange",
        value: function handleChange(evnt) {
          var res = this.reactiveFormName.value.gender;
          this.reactiveFormName.controls['gender'].setValue(res);
        } // Used for get Driver Type Permit List

      }, {
        key: "getDriverTypePermitList",
        value: function getDriverTypePermitList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var getDriverTypePermitList;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    getDriverTypePermitList = this.common.getValueFromSessionStorage('getDriverTypePermitList');

                    if (!(getDriverTypePermitList != null)) {
                      _context5.next = 4;
                      break;
                    }

                    this.driverTypePermitList = getDriverTypePermitList;
                    return _context5.abrupt("return");

                  case 4:
                    _context5.next = 6;
                    return this.apiCall.postAPICallWithToken('api/DriverManager/getDriverTypePermitList', {}).then(function (result) {
                      debugger;
                      _this4.driverTypePermitList = result;

                      _this4.common.setValueToSessionStorage('getDriverTypePermitList', result);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onFoucusOutOfEmiratesId",
        value: function onFoucusOutOfEmiratesId(event) {
          var _this5 = this;

          debugger;
          this.newBOD = this.common.dateFormatWithDash(this.f.emiratesIdExpiryDate.value);

          if (!this.newBOD) {
            return;
          }

          this.spinner.show();
          debugger;

          if (this.requestFlag != 2 && this.requestFlag != 5 || this.requestFlag == 5) {
            //(this.common.isCompanyTypeFranchise && this.requestFlag == 5)
            if (this.reactiveFormName.controls.emiratesId.invalid) {
              if (this.common.isCompanyTypeFranchise && this.requestFlag == 5) {
                this.isEmiratesIdReadOnly = false;
              } else {
                return;
              }
            } else {
              var formControl = this.reactiveFormName.controls.emiratesId;

              if (formControl) {
                // activate the error message
                formControl.setErrors(null);
              }

              debugger;
              var jsonData = {};
              jsonData.EmiratesID = this.reactiveFormName.value.emiratesId;
              var selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
              var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
              jsonData.UserID = userLoginInfo.ID;
              jsonData.CompanyID = selectedCompanyInfo.CompanyID;
              this.apiCall.PersonInqUnifiedNumberAPICall('api/LoginManager/PersonInqUnifiedNumberValidation', jsonData).then(function (result) {
                var _a, _b, _c, _d, _e, _f, _g, _h;

                _this5.spinner.hide();

                _this5.common.mesage = {};
                debugger; // For Response DOB

                var resultDate = _this5.common.dateFormatWithDash(_this5.common.stringDateToCalendarDateFormat(result.dateOfBirth));

                var dateOfBirth = _this5.common.dateFormatWithDash(_this5.f.emiratesIdExpiryDate.value); // Checking both DOB. Based on comparision fill data in other fields.


                if (resultDate == dateOfBirth) {
                  _this5.common.mesage = {};

                  if (result.personName) {
                    var arabicName = result.personName.fullArabicName;
                    var englishName = result.personName.firstNameEnglish;
                    var secondname = ((_a = result.personName) === null || _a === void 0 ? void 0 : _a.secondNameEnglish) == null ? "" : (_b = result.personName) === null || _b === void 0 ? void 0 : _b.secondNameEnglish;
                    var thirdname = ((_c = result.personName) === null || _c === void 0 ? void 0 : _c.thirdNameEnglish) == null ? "" : (_d = result.personName) === null || _d === void 0 ? void 0 : _d.thirdNameEnglish;
                    var forthname = ((_e = result.personName) === null || _e === void 0 ? void 0 : _e.fourthNameEnglish) == null ? "" : (_f = result.personName) === null || _f === void 0 ? void 0 : _f.fourthNameEnglish;
                    var familyname = ((_g = result.personName) === null || _g === void 0 ? void 0 : _g.familyNameEnglish) == null ? "" : (_h = result.personName) === null || _h === void 0 ? void 0 : _h.familyNameEnglish;

                    _this5.reactiveFormName.controls['firstName'].setValue(englishName + secondname + thirdname + forthname);

                    _this5.reactiveFormName.controls['lastName'].setValue(familyname);

                    _this5.reactiveFormName.controls['arabicName'].setValue(arabicName);

                    if (_this5.common.isCompanyTypeFranchise && _this5.requestFlag == 5) {
                      //enabled fields for franchise company on14-12-2023 radhika
                      _this5.isFirstNameReadOnly = false;
                      _this5.isNameInArabicReadOnly = false;
                    } else {
                      _this5.isFirstNameReadOnly = true;
                      _this5.isLastNameReadOnly = true;
                      _this5.isNameInArabicReadOnly = true;
                    }
                  }

                  if (result.addresses.address) {
                    if (result.addresses.address[0]) {
                      if (result.addresses.address[0].localAddress) {
                        if (result.addresses.address[0].localAddress.email && result.addresses.address[0].localAddress.email != null) {
                          var emailAdd = result.addresses.address[0].localAddress.email;

                          _this5.reactiveFormName.controls['email'].setValue(emailAdd);

                          if (emailAdd != '0') {
                            _this5.isEmailIDReadOnly = _this5.common.isCompanyTypeFranchise && _this5.requestFlag == 5 ? false : true;
                          }
                        }
                      }
                    }
                  }

                  if (result.addresses && result.addresses.address) {
                    if (result.addresses.address[0]) {
                      if (result.addresses.address[0].localAddress) {
                        if (result.addresses.address[0].localAddress.mobileNumber) {
                          var mobileNumber = result.addresses.address[0].localAddress.mobileNumber;

                          if (mobileNumber.length >= 12) {
                            var x = mobileNumber.split("+");

                            if (x.length > 1) {
                              _this5.reactiveFormName.controls['mobileNo'].setValue(x[1]);
                            } else {
                              _this5.reactiveFormName.controls['mobileNo'].setValue(mobileNumber);
                            }
                          } else {
                            _this5.reactiveFormName.controls['mobileNo'].setValue(mobileNumber);
                          }
                        }
                      }
                    }
                  }

                  if (result.nationality.enDesc) {
                    var nationCode = result.nationality.enDesc;

                    var nationalityCode = _this5.nationalityList.filter(function (value) {
                      return value.NameEN.toLowerCase() == nationCode.toLowerCase();
                    });

                    if (nationalityCode.length > 0) {
                      _this5.reactiveFormName.controls['nationality'].setValue(nationalityCode[0].Code);

                      if (_this5.common.isCompanyTypeFranchise && _this5.requestFlag == 5) {
                        //enabled fields for franchise company on14-12-2023 radhika
                        _this5.f.nationality.enable();
                      } else {
                        _this5.f.nationality.disable();
                      }
                    }
                  }
                } else {
                  _this5.oldBOD = _this5.common.dateFormatWithDash(_this5.f.emiratesIdExpiryDate.value);

                  _this5.common.showSussessFailureMessage(2, 'PleaseEnterValidInformation', true, true);

                  _this5.reactiveFormName.controls['firstName'].reset();

                  _this5.reactiveFormName.controls['lastName'].reset();

                  _this5.reactiveFormName.controls['arabicName'].reset();

                  _this5.reactiveFormName.controls['emiratesIdExpiryDate'].reset();

                  _this5.reactiveFormName.controls['email'].reset();

                  _this5.reactiveFormName.controls['mobileNo'].reset();

                  _this5.reactiveFormName.controls['nationality'].reset();
                }
              })["catch"](function (error) {
                _this5.spinner.hide();

                if (error.status == 401) {
                  _this5.common.showSussessFailureMessage(2, 'SomethingWentWorngPleaseLoginAgain', true, true);
                } else {
                  _this5.oldBOD = _this5.common.dateFormatWithDash(_this5.f.emiratesIdExpiryDate.value);
                  console.log("error ", error);

                  _this5.reactiveFormName.controls['firstName'].reset();

                  _this5.reactiveFormName.controls['lastName'].reset();

                  _this5.reactiveFormName.controls['arabicName'].reset();

                  _this5.reactiveFormName.controls['emiratesIdExpiryDate'].reset();

                  _this5.reactiveFormName.controls['email'].reset();

                  _this5.reactiveFormName.controls['mobileNo'].reset();

                  _this5.reactiveFormName.controls['nationality'].reset();

                  var _formControl = _this5.reactiveFormName.controls.emiratesId;

                  if (_formControl) {
                    // activate the error message
                    _this5.common.showSussessFailureMessage(2, 'PleaseEnterValidInformation', true, true);
                  }
                }
              });
            }
          }
        } //on click of submit form

      }, {
        key: "onSubmitForm",
        value: function onSubmitForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var selectedCompanyInfo, userLoginInfo, jsonData, date, apiEndPoint, updateDriverInfo;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isFormSubmited = true;

                    if (!this.reactiveFormName.invalid) {
                      _context6.next = 3;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 3:
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    jsonData.Email = this.reactiveFormName.value.email;
                    jsonData.MobilePhone = this.reactiveFormName.value.mobileNo;
                    jsonData.DrivingLicenseNumber = this.reactiveFormName.value.licenseNumber;
                    jsonData.LicenseEmirate = this.reactiveFormName.value.emirate;
                    jsonData.DrivingLicenseIssueDate = this.common.convertDateFormat(this.reactiveFormName.value.issueDate);
                    jsonData.DrivingLicenseExpiryDate = this.common.convertDateFormat(this.reactiveFormName.value.expiryDate);
                    jsonData.Notes = this.reactiveFormName.value.notes;
                    debugger; //if ((this.requestFlag != 5 && !this.common.isCompanyTypeFranchise)  || (this.common.isCompanyTypeFranchise && this.requestFlag==5)) {//added franchise company condition by radhika-04-09-2023

                    if (this.requestFlag != 5 && !this.common.isCompanyTypeFranchise || this.requestFlag == 5) {
                      //updated condition by radhika-28-11-2023 for all company types edit we are sending below details
                      jsonData.EmiratesID = this.common.isCompanyTypeFranchise == true ? this.reactiveFormName.value.emiratesId : this.driveInfo.EmiratesID;
                      jsonData.FirstName = this.common.isCompanyTypeFranchise == true ? this.reactiveFormName.value.firstName : this.driveInfo.FirstName;
                      jsonData.LastName = this.common.isCompanyTypeFranchise == true ? this.reactiveFormName.value.lastName : this.driveInfo.LastName;
                      jsonData.NameAR = this.common.isCompanyTypeFranchise == true ? this.reactiveFormName.value.arabicName : this.driveInfo.NameAR;
                      date = this.driveInfo.EmiratesIDExpiryDate.split("-").reverse().join("-");
                      jsonData.EmiratesIDExpiryDate = this.common.isCompanyTypeFranchise == true ? this.common.convertDateFormat(this.f.emiratesIdExpiryDate.value) : date;
                      jsonData.NationalityCode = this.f.nationality.value; // this.common.isCompanyTypeFranchise == true ? this.f.nationality.value;

                      jsonData.DriverTypeId = this.reactiveFormName.get('chooseType').value;
                      jsonData.TypeOfPermitId = this.reactiveFormName.get('typeOfPermit').value;
                      jsonData.PermitIssueDate = this.reactiveFormName.get('permitIssueDate').value.split("-").reverse().join("-");
                      jsonData.PermitExpiryDate = this.reactiveFormName.get('permitExpiryDate').value.split("-").reverse().join("-");
                      jsonData.Fees = this.reactiveFormName.get('permitFees').value;
                      jsonData.Gender = this.reactiveFormName.value.gender;
                    }

                    apiEndPoint = '';

                    if (this.requestFlag == 5) {
                      //if (this.common.isCompanyTypeFranchise) {
                      apiEndPoint = 'api/DriverManager/DriverEditUpdateFranchise'; //temporarly we are enabling this editupdate api 28-11-2023 
                      //}
                      //else {
                      //  apiEndPoint = 'api/DriverManager/DriverEditUpdate';//temporarly we are disabling this editupdate api 28-11-2023 
                      //}      
                    } else {
                      apiEndPoint = 'api/DriverManager/DriverCreateUpdate';
                    }

                    updateDriverInfo = this.common.getValueFromSessionStorage('updateDriverInfo');

                    if (updateDriverInfo != null) {
                      jsonData.DriverID = updateDriverInfo.DriverID;
                    }

                    _context6.next = 24;
                    return this.apiCall.postAPICallWithToken(apiEndPoint, jsonData).then(function (result) {
                      if (result.Message) {
                        _this6.common.showSussessFailureMessage(2, result.Message);
                      } else {
                        if (result.DriverID) {
                          _this6.onSubmitOfAttchmentForm(result.DriverID);
                        }
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 24:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // Used for upload attachment if attachment found

      }, {
        key: "onSubmitOfAttchmentForm",
        value: function onSubmitOfAttchmentForm(DriverID) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var file, updateDriverInfo;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(DriverID == null || DriverID == '')) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 2:
                    file = this.reactiveFormName.value.file1;

                    if (!(file != null)) {
                      _context7.next = 6;
                      break;
                    }

                    _context7.next = 6;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file1SubjectName);

                  case 6:
                    file = this.reactiveFormName.value.file2;

                    if (!(file != null)) {
                      _context7.next = 10;
                      break;
                    }

                    _context7.next = 10;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file2SubjectName);

                  case 10:
                    file = this.reactiveFormName.value.file3;

                    if (!(file != null)) {
                      _context7.next = 14;
                      break;
                    }

                    _context7.next = 14;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file3SubjectName);

                  case 14:
                    file = this.reactiveFormName.value.file4;

                    if (!(file != null)) {
                      _context7.next = 18;
                      break;
                    }

                    _context7.next = 18;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file4SubjectName);

                  case 18:
                    file = this.reactiveFormName.value.file5;

                    if (!(file != null)) {
                      _context7.next = 22;
                      break;
                    }

                    _context7.next = 22;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file5SubjectName);

                  case 22:
                    file = this.reactiveFormName.value.file6;

                    if (!(file != null)) {
                      _context7.next = 26;
                      break;
                    }

                    _context7.next = 26;
                    return this.uplaodAttachmentToServerOneByOne(DriverID, file, false, this.file6SubjectName);

                  case 26:
                    this.apiCall.spinner.hide();

                    if (this.requestFlag == 1) {
                      this.common.showSussessFailureMessage(1, 'Driver Added Successfully and Submitted for Approval', false);
                      this.router.navigateByUrl('/driver/listdriver');
                    } else if (this.requestFlag == 2) {
                      this.common.showSussessFailureMessage(1, 'Driver Updated Successfully and Submitted for Approval', false);
                      this.router.navigateByUrl('/driver/listdriver');
                    } else if (this.requestFlag == 5) {
                      this.common.showSussessFailureMessage(1, 'Driver Updated Successfully', false);
                      updateDriverInfo = this.common.getValueFromSessionStorage('updateDriverInfo');
                      this.common.setValueToSessionStorage('driverInfo', updateDriverInfo);
                      this.router.navigateByUrl('/driver/detaildriver');
                    }

                  case 28:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Used for upload document API call

      }, {
        key: "uplaodAttachmentToServerOneByOne",
        value: function uplaodAttachmentToServerOneByOne(DriverID, file, loader) {
          var Subject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Attachment';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var userLoginInfo, selectedCompanyInfo, jsonData, fileData, apiEndPoint, outerJsonData;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(DriverID == null || DriverID == '')) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 2:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                    jsonData.Subject = Subject;
                    jsonData.DriverID = DriverID;
                    jsonData.FileName = file.FileName;
                    ;
                    fileData = file.Data.split('base64,');

                    if (fileData.length > 1) {
                      jsonData.Data = fileData[1];
                    } else {
                      jsonData.Data = file.Data;
                    }

                    apiEndPoint = 'api/DriverManager/DriverAttachment';

                    if (file.AttachmentID) {
                      jsonData.AttachmentID = file.AttachmentID;
                      apiEndPoint = 'api/VehicleManager/UpdateAttachment';
                    }

                    outerJsonData = {};
                    outerJsonData.inputParameter = JSON.stringify(jsonData);
                    _context8.next = 20;
                    return this.apiCall.postAPICallWithToken(apiEndPoint, outerJsonData, loader).then(function (result) {})["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 20:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // Used for download file

      }, {
        key: "downloadFile",
        value: function downloadFile(json) {
          this.common.downloadFile(json);
        } // On file Select check file type and file size

      }, {
        key: "onChange",
        value: function onChange(event, keyIndex) {
          var _this7 = this;

          debugger;
          this.common.mesage = {};

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var fileExtanction = file.name.substring(file.name.lastIndexOf(".") + 1);

            if (!this.common.allowedFileType.includes(fileExtanction.toLowerCase())) {
              this.common.showSussessFailureMessage(2, 'You can upload only ' + this.common.allowedFileType + ' File Type. ');
              return;
            }

            if (keyIndex == "file5" && !this.common.allowedFileTypephoto.includes(fileExtanction.toLowerCase())) {
              this.common.showSussessFailureMessage(2, 'You can upload only ' + this.common.allowedFileTypephoto + ' File Type. ');
              return;
            }

            var allowedfileSize = this.common.allowedFileSizeInMB * 1024 * 1024;

            if (allowedfileSize < file.size) {
              this.common.showSussessFailureMessage(2, 'You can upload Maximum ' + this.common.allowedFileSizeInMB + ' MB File.');
              return;
            }

            var json = {};

            if (this.reactiveFormName.value[keyIndex]) {
              json = this.reactiveFormName.value[keyIndex];
            }

            json.FileName = file.name;
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function () {
              json.Data = reader.result;

              _this7.reactiveFormName.controls[keyIndex].setValue(json);
            };
          }
        } // Used for assign data to form

      }, {
        key: "assignDataToform",
        value: function assignDataToform(driverInfo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var nationalityCode, id, indexArray, permitTypeArray;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    debugger;
                    this.reactiveFormName.controls['emiratesId'].setValue(driverInfo.EmiratesID);
                    this.reactiveFormName.controls['emiratesIdExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(driverInfo.EmiratesIDExpiryDate));
                    this.reactiveFormName.controls['firstName'].setValue(driverInfo.FirstName);
                    this.reactiveFormName.controls['lastName'].setValue(driverInfo.LastName);
                    this.reactiveFormName.controls['arabicName'].setValue(driverInfo.NameAR);
                    this.reactiveFormName.controls['email'].setValue(driverInfo.Email);
                    this.reactiveFormName.controls['mobileNo'].setValue(driverInfo.MobilePhone);
                    nationalityCode = this.nationalityList.filter(function (value) {
                      return value.NameEN == driverInfo.Nationality;
                    });

                    if (nationalityCode.length > 0) {
                      this.reactiveFormName.controls['nationality'].setValue(nationalityCode[0].Code);
                    }

                    this.getEmiratesList();
                    this.reactiveFormName.controls['licenseNumber'].setValue(driverInfo.DrivingLicenseNumber);

                    if (driverInfo.LicenseEmirate != null) {
                      this.reactiveFormName.controls['emirate'].setValue(driverInfo.LicenseEmirate);
                    } else {
                      this.reactiveFormName.controls['emirate'].setValue('');
                    }

                    this.reactiveFormName.controls['issueDate'].setValue(this.common.stringDateToCalendarDateFormat(driverInfo.DrivingLicenseIssueDate));
                    this.reactiveFormName.controls['expiryDate'].setValue(this.common.stringDateToCalendarDateFormat(driverInfo.DrivingLicenseExpiryDate));
                    this.reactiveFormName.controls['permitIssueDate'].setValue(driverInfo.PermitIssueDate);
                    this.reactiveFormName.controls['permitExpiryDate'].setValue(driverInfo.PermitExpiryDate);
                    this.reactiveFormName.controls['permitFees'].setValue(driverInfo.Fees + '');
                    this.reactiveFormName.controls['notes'].setValue(driverInfo.Notes);
                    this.reactiveFormName.controls['checkAllCondition'].setValue(true);

                    if (driverInfo.Gender != "" && driverInfo.Gender != null) {
                      id = driverInfo.Gender == "Male" ? 1 : 2;
                      this.reactiveFormName.controls['gender'].setValue(id);
                    } else {
                      this.reactiveFormName.controls['gender'].setValue(null);
                    }

                    indexArray = this.driverTypeList.filter(function (value) {
                      return value.NameEN == driverInfo.DriverType;
                    });

                    if (indexArray.length > 0) {
                      this.reactiveFormName.controls['chooseType'].setValue(indexArray[0].ID);
                      this.getfilterVehicleTypePermitList();

                      if (this.requestFlag == 3) {
                        this.reactiveFormName.controls['chooseType'].disable({
                          onlySelf: true,
                          emitEvent: true
                        });
                      }
                    }

                    permitTypeArray = this.driverTypePermitListWithFilter.filter(function (value) {
                      return value.PermitName == driverInfo.TypeOfPermit;
                    });

                    if (permitTypeArray.length > 0) {
                      this.reactiveFormName.controls['typeOfPermit'].setValue(permitTypeArray[0].ID);

                      if (this.requestFlag == 3) {
                        this.reactiveFormName.controls['typeOfPermit'].disable({
                          onlySelf: true,
                          emitEvent: true
                        });
                      }
                    } //enabled fields for franchise company on14-12-2023 radhika


                    if (this.requestFlag == 5 && this.common.isCompanyTypeFranchise) {
                      this.reactiveFormName.controls['permitIssueDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitExpiryDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitFees'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['typeOfPermit'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['chooseType'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                    } //disabled fields for non franchise company on14-12-2023 radhika


                    if (this.requestFlag == 5 && !this.common.isCompanyTypeFranchise) {
                      this.reactiveFormName.controls['emiratesId'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['emiratesIdExpiryDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['firstName'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['arabicName'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitIssueDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitExpiryDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitFees'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['typeOfPermit'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['chooseType'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['nationality'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                    }

                  case 27:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } // Used for get list of attachments

      }, {
        key: "getViewVehicleAttachmentsList",
        value: function getViewVehicleAttachmentsList() {
          var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var selectedDriverInfo, selectedCompanyInfo, userLoginInfo, outerJsonData, jsonData, attachmentApiEndPoint, companyInfo;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    selectedDriverInfo = this.common.getValueFromSessionStorage('updateDriverInfo');
                    selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    outerJsonData = {};
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.DriverID = selectedDriverInfo.DriverID;
                    attachmentApiEndPoint = '';

                    if (this.requestFlag == 5) {
                      jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                      attachmentApiEndPoint = 'api/DriverManager/ViewDriverAttachments';
                    } else if (this.requestFlag == 2) {
                      companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
                      jsonData.CompanyID = companyInfo.CompanyID;
                      attachmentApiEndPoint = 'api/DriverManager/ViewDriverAttachmentsStaging';
                    }

                    this.noAttacmentsFound = false;
                    outerJsonData.inputParameter = JSON.stringify(jsonData);
                    _context10.next = 14;
                    return this.apiCall.postAPICallWithToken(attachmentApiEndPoint, outerJsonData, loader).then(function (result) {
                      debugger;

                      _this8.assignAttachmentToFrom(result);

                      var attachmentsArray = [];

                      var _iterator = _createForOfIteratorHelper(result),
                          _step;

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var data = _step.value;
                          data.attachment = 'data:image/jpg;base64,' + data.Data;
                          data.attachment = _this8.sanitizer.bypassSecurityTrustResourceUrl(data.attachment);
                          attachmentsArray.push(data);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      _this8.viewDriverAttachmentsList = attachmentsArray;

                      if (_this8.viewDriverAttachmentsList.length == "" || _this8.viewDriverAttachmentsList == null || _this8.viewDriverAttachmentsList == 0) {
                        _this8.noAttacmentsFound = true;
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        } // Used for navigate to section based on click of Next/Previous button

      }, {
        key: "previousOrNextBtnAction",
        value: function previousOrNextBtnAction(index) {
          if (index == 1) {
            --this.activeSection;
          } else {
            this.isFormSubmited = false;
            var form = this.reactiveFormName.controls;
            var validationStatus = false;

            if (this.activeSection == 1) {
              validationStatus = !form.emiratesId.invalid && !form.firstName.invalid && !form.arabicName.invalid && !form.emiratesIdExpiryDate.invalid && !form.nationality.invalid && !form.gender.invalid;
            } else if (this.activeSection == 2) {
              validationStatus = !form.email.invalid && !form.mobileNo.invalid && !form.notes.invalid;
            } else if (this.activeSection == 3) {
              validationStatus = !form.licenseNumber.invalid && !form.emirate.invalid && !form.issueDate.invalid && !form.expiryDate.invalid;
            } else if (this.activeSection == 4) {
              validationStatus = !form.chooseType.invalid && !form.typeOfPermit.invalid && !form.permitIssueDate.invalid && !form.permitExpiryDate.invalid && !form.permitFees.invalid;
            } else if (this.activeSection == 5) {
              //validationStatus = (!form.file1.invalid && !form.file2.invalid && !form.file3.invalid) 
              validationStatus = !form.file1.invalid && !form.file2.invalid && !form.file3.invalid && !form.file4.invalid && !form.file5.invalid && !form.file6.invalid;
            } else if (this.activeSection == 6) {
              validationStatus = !form.checkAllCondition.invalid;
            }

            if (validationStatus) {
              this.isFormSubmited = false;
              ++this.activeSection;
            } else {
              this.isFormSubmited = true;
            }
          }
        } // For filter Vehicle Type Permit List based on vehicle type

      }, {
        key: "getfilterVehicleTypePermitList",
        value: function getfilterVehicleTypePermitList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this9 = this;

            var indexArray, searchValue;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.reactiveFormName.controls['typeOfPermit'].setValue("");
                    indexArray = this.driverTypeList.filter(function (value) {
                      return value.ID == _this9.reactiveFormName.value.chooseType;
                    });
                    searchValue = '';

                    if (indexArray.length > 0) {
                      searchValue = indexArray[0].NameEN;
                    }

                    this.driverTypePermitListWithFilter = this.driverTypePermitList.filter(function (value) {
                      return value.DriverType == searchValue;
                    });

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "onchangeOfPermitType",
        value: function onchangeOfPermitType() {
          var _this10 = this;

          var indexArray = this.driverTypePermitList.filter(function (value) {
            return value.ID == _this10.reactiveFormName.value.typeOfPermit;
          });

          if (indexArray.length > 0) {
            var index = indexArray[0];
            this.reactiveFormName.controls['permitFees'].setValue(index.FeesForNew + '');
            var array = index.Duration.split(' ');
            var today = new Date();

            if (!isNaN(array[0])) {
              var fee = parseInt(array[0]); //var newDate = new Date(today.setMonth(today.getMonth() + fee));
              //changes made by radhika on 27-09-2022

              var yearorMonth = array[1];
              var newDate = new Date();

              if (yearorMonth == "Year" || yearorMonth == "Years") {
                var newDate = new Date(today.setFullYear(today.getFullYear() + fee));
              } else if (yearorMonth == "Day" || yearorMonth == "Days") {
                var newDate = new Date(today.setDate(today.getDate() + fee));
              } else {
                var newDate = new Date(today.setMonth(today.getMonth() + fee));
              } //changes made by radhika on 27-09-2022 end


              var month = newDate.getMonth() + 1;
              var day = newDate.getDate();
              var pemitIssueDate = (day > 9 ? day : '0' + day) + '-' + (month > 9 ? month : '0' + month) + '-' + newDate.getFullYear();
              this.reactiveFormName.controls['permitExpiryDate'].setValue(pemitIssueDate);
            } else {
              var _pemitIssueDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

              this.reactiveFormName.controls['permitExpiryDate'].setValue(_pemitIssueDate);
            }
          }
        } //// Used for assign attachment to form
        //assignAttachmentToFrom(result: any[]) {
        //  let indexArray = result.filter(value => value.Subject == this.file1SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file1'].setValue(json);
        //  }
        //  indexArray = result.filter(value => value.Subject == this.file2SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file2'].setValue(json);
        //  }
        //  indexArray = result.filter(value => value.Subject == this.file3SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file3'].setValue(json);
        //  }
        //  indexArray = result.filter(value => value.Subject == this.file4SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file4'].setValue(json);
        //  }
        //  indexArray = result.filter(value => value.Subject == this.file5SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file5'].setValue(json);
        //  }
        //  indexArray = result.filter(value => value.Subject == this.file6SubjectName);
        //  if (indexArray.length > 0) {
        //    let val = indexArray[0];
        //    let json: any = {}
        //    json.FileName = val.FileName;
        //    json.Data = val.Data;
        //    json.AttachmentID = val.AttachmentID
        //    json.attachment = 'data:image/jpg;base64,' + val.Data;
        //    json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //    this.reactiveFormName.controls['file6'].setValue(json);
        //  }
        //}
        // Used for assign attachment to form

      }, {
        key: "assignAttachmentToFrom",
        value: function assignAttachmentToFrom(result) {
          var _this11 = this;

          var indexArray = result.filter(function (value) {
            return value.Subject == _this11.file1SubjectName;
          });

          if (indexArray.length != 0) {
            //let indexArray = result[0];
            var val = indexArray[0];
            var json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.reactiveFormName.controls['file1'].setValue(json);
          }

          var indexArray2 = result.filter(function (value) {
            return value.Subject == _this11.file2SubjectName;
          });

          if (indexArray2.length != 0) {
            // let indexArray = result[1];
            var _val = indexArray2[0];
            var _json = {};
            _json.FileName = _val.FileName;
            _json.Data = _val.Data;
            _json.AttachmentID = _val.AttachmentID;
            _json.attachment = 'data:image/jpg;base64,' + _val.Data;
            _json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json.attachment);
            this.reactiveFormName.controls['file2'].setValue(_json);
          }

          var indexArray3 = result.filter(function (value) {
            return value.Subject == _this11.file3SubjectName;
          });

          if (indexArray3.length != 0) {
            //let indexArray = result[2];
            var _val2 = indexArray3[0];
            var _json2 = {};
            _json2.FileName = _val2.FileName;
            _json2.Data = _val2.Data;
            _json2.AttachmentID = _val2.AttachmentID;
            _json2.attachment = 'data:image/jpg;base64,' + _val2.Data;
            _json2.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json2.attachment);
            this.reactiveFormName.controls['file3'].setValue(_json2);
          }

          var indexArray4 = result.filter(function (value) {
            return value.Subject == _this11.file4SubjectName;
          });

          if (indexArray4.length != 0) {
            //let indexArray = result[3];
            var _val3 = indexArray4[0];
            var _json3 = {};
            _json3.FileName = _val3.FileName;
            _json3.Data = _val3.Data;
            _json3.AttachmentID = _val3.AttachmentID;
            _json3.attachment = 'data:image/jpg;base64,' + _val3.Data;
            _json3.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json3.attachment);
            this.reactiveFormName.controls['file4'].setValue(_json3);
          }

          var indexArray5 = result.filter(function (value) {
            return value.Subject == _this11.file5SubjectName;
          });

          if (indexArray5.length != 0) {
            //let indexArray = indexArray5[0];
            var _val4 = indexArray5[0];
            var _json4 = {};
            _json4.FileName = _val4.FileName;
            _json4.Data = _val4.Data;
            _json4.AttachmentID = _val4.AttachmentID;
            _json4.attachment = 'data:image/jpg;base64,' + _val4.Data;
            _json4.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json4.attachment);
            this.reactiveFormName.controls['file5'].setValue(_json4);
          }

          var indexArray6 = result.filter(function (value) {
            return value.Subject == _this11.file6SubjectName;
          });

          if (indexArray6.length != 0) {
            //let indexArray = indexArray6[0];
            var _val5 = indexArray6[0];
            var _json5 = {};
            _json5.FileName = _val5.FileName;
            _json5.Data = _val5.Data;
            _json5.AttachmentID = _val5.AttachmentID;
            _json5.attachment = 'data:image/jpg;base64,' + _val5.Data;
            _json5.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json5.attachment);
            this.reactiveFormName.controls['file6'].setValue(_json5);
          }
        }
      }]);

      return AdddriverComponent;
    }();

    AdddriverComponent.ɵfac = function AdddriverComponent_Factory(t) {
      return new (t || AdddriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["DateTimeAdapter"]));
    };

    AdddriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdddriverComponent,
      selectors: [["app-adddriver"]],
      decls: 314,
      vars: 258,
      consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "row", 3, "click"], [1, "col-12"], [1, "card"], [1, "card-header", "bg-info", "list_esit_bg_info"], ["class", "mb-0 text-white", 4, "ngIf"], [1, "card-body", "wizard-content"], [1, "progress_view", "steps_vehicle"], [1, "no"], [3, "class", 4, "ngIf"], [1, "validation-wizard", "wizard-circle", "mt-5", 3, "formGroup", "ngSubmit"], [1, "vehi_section"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "danger"], ["type", "text", "formControlName", "emiratesId", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "EmiratesExpiryDate"], ["formControlName", "emiratesIdExpiryDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder", "ngModelChange"], [3, "pickerType"], ["dt3", ""], ["for", "FirstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["for", "LastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["for", "NameInArabic"], ["type", "text", "formControlName", "arabicName", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["for", "Nationality"], ["formControlName", "nationality", 1, "form-control"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Fees"], [1, "input-group", "mb_10", "mt_5"], [1, "radio_check"], ["type", "radio", "formControlName", "gender", 1, "form-check-input", 3, "value", "change"], [1, "check"], [1, "ml_20"], ["for", "EmailID"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder", "readonly"], ["for", "MobileNo"], ["type", "text", "formControlName", "mobileNo", 1, "form-control", 3, "placeholder", "readonly", "keypress"], [1, "col-md-12"], ["for", "Notes"], ["type", "text", "formControlName", "notes", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], [1, "vehi_section", "third_vehi_section"], ["for", "LicenseNumber"], ["type", "text", "formControlName", "licenseNumber", 1, "form-control", 3, "placeholder", "keypress"], ["for", "Emirate"], ["formControlName", "emirate", 1, "form-control"], ["for", "IssueDate"], ["formControlName", "issueDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder"], ["dt1", ""], ["for", "ExpiryDate"], ["formControlName", "expiryDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder", "min"], ["dt2", ""], ["for", "Type"], ["formControlName", "chooseType", 1, "form-control", 3, "change"], ["for", "TypeOfPermit"], ["formControlName", "typeOfPermit", 1, "form-control", 3, "change"], ["for", "PermitIssueDate"], ["type", "text", "formControlName", "permitIssueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitExpiryDate"], ["type", "text", "formControlName", "permitExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "permitFees", "disabled", "", 1, "form-control", 3, "placeholder", "keypress"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["type", "checkbox", "id", "frmConfim", "formControlName", "checkAllCondition", 1, "material-inputs", "filled-in", "chk-col-light-blue"], ["for", "frmConfim"], [1, "col-md-12", "vehicle_add_btn"], ["class", "previous_btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "next_btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "next_btn", "type", "submit", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "mb-0", "text-white"], [1, "close", 3, "click"], [1, "invalid-feedback"], [3, "value"], ["for", "file1"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file1", "name", "file1", 1, "form-control", 3, "change"], ["class", "file_name", 3, "click", 4, "ngIf"], ["for", "file2"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file2", "name", "file2", 1, "form-control", 3, "change"], [1, "file_name", 3, "click"], ["for", "file3"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file3", "name", "file3", 1, "form-control", 3, "change"], ["for", "file4"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file4", "name", "file4", 1, "form-control", 3, "change"], ["for", "file5"], ["type", "file", "accept", "image/png,image/gif,image/jpeg", "id", "file5", "name", "file5", 1, "form-control", 3, "change"], ["for", "file6"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file6", "name", "file6", 1, "form-control", 3, "change"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "form-group", "attachment_section"], [1, "attach_lbl"], [1, "file_name", "text-center", 3, "click"], [1, "main_card", "no_record_found"], ["type", "button", 1, "previous_btn", 3, "click"], ["type", "button", 1, "next_btn", 3, "click"], ["type", "submit", 1, "next_btn"]],
      template: function AdddriverComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1049 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdddriverComponent_li_13_Template, 3, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdddriverComponent_li_14_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdddriverComponent_li_15_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdddriverComponent_li_16_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdddriverComponent_li_17_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdddriverComponent_li_18_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdddriverComponent_Template_div_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1049);

            var _r960 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](228);

            var _r958 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](216);

            var _r946 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](84);

            _r960.close();

            _r958.close();

            return _r946.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdddriverComponent_h4_23_Template, 3, 3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdddriverComponent_h4_24_Template, 3, 3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdddriverComponent_h4_25_Template, 3, 3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdddriverComponent_h4_26_Template, 3, 3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdddriverComponent_h4_27_Template, 3, 3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AdddriverComponent_div_60_Template, 5, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdddriverComponent_Template_form_ngSubmit_61_listener() {
            return ctx.onSubmitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_71_listener($event) {
            return ctx.emiratesIDOnChangeEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AdddriverComponent_div_73_Template, 5, 4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdddriverComponent_Template_input_ngModelChange_81_listener($event) {
            return ctx.onFoucusOutOfEmiratesId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "owl-date-time", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AdddriverComponent_div_85_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_94_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, AdddriverComponent_div_96_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](101, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_102_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_111_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, AdddriverComponent_div_113_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](124, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](125, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, AdddriverComponent_option_126_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, AdddriverComponent_div_127_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](132, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_Template_input_change_137_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](141, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_Template_input_change_143_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, AdddriverComponent_div_148_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](155, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](159, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](160, AdddriverComponent_div_160_Template, 3, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](165, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_168_listener($event) {
            return ctx.common.allow_numeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](169, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, AdddriverComponent_div_170_Template, 5, 4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](176, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_177_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](178, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "section", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](185, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_188_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](189, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, AdddriverComponent_div_190_Template, 3, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](195, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](202, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](203, AdddriverComponent_option_203_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](204, AdddriverComponent_div_204_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](210, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](214, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "owl-date-time", 27, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](217, AdddriverComponent_div_217_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](222, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](226, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "owl-date-time", 27, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](229, AdddriverComponent_div_229_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](236, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_Template_select_change_239_listener() {
            return ctx.getfilterVehicleTypePermitList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](242, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](243, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](244, AdddriverComponent_option_244_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](245, AdddriverComponent_div_245_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](250, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "select", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdddriverComponent_Template_select_change_253_listener() {
            return ctx.onchangeOfPermitType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](256, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](257, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](258, AdddriverComponent_option_258_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](259, AdddriverComponent_div_259_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](265, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](269, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](270, AdddriverComponent_div_270_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](275, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](279, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, AdddriverComponent_div_280_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](286, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AdddriverComponent_Template_input_keypress_289_listener($event) {
            return ctx.common.allow_numeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](290, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](291, AdddriverComponent_div_291_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](293, AdddriverComponent_div_293_Template, 18, 9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](294, AdddriverComponent_div_294_Template, 15, 8, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](295, AdddriverComponent_div_295_Template, 19, 9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](296, AdddriverComponent_div_296_Template, 2, 1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](297, AdddriverComponent_div_297_Template, 5, 3, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](305, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](306, AdddriverComponent_div_306_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](310, AdddriverComponent_button_310_Template, 3, 3, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](311, AdddriverComponent_button_311_Template, 3, 3, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](312, AdddriverComponent_button_312_Template, 3, 3, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "app-globalfooter");
        }

        if (rf & 2) {
          var _r946 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](84);

          var _r958 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](216);

          var _r960 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](228);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](256, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 152, "Home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](257, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 154, "Driver"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 1)("complte_section", ctx.activeSection >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 156, "BasicInfo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 2)("complte_section", ctx.activeSection >= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 158, "ContactDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 3)("complte_section", ctx.activeSection >= 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 160, "DriverLicenseDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 4)("complte_section", ctx.activeSection >= 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 162, "PermitType"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 5)("complte_section", ctx.activeSection >= 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 164, "FilesToBeUploaded"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 6)("complte_section", ctx.activeSection >= 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 166, "Confirm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 168, "EmiratesID"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 170, "EmiratesID"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isEmiratesIdReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.emiratesId.touched || ctx.isFormSubmited) && ctx.f.emiratesId.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](78, 172, "DateOfBirth"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 174, "DateOfBirth"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r946)("owlDateTimeTrigger", _r946);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.emiratesIdExpiryDate.touched || ctx.isFormSubmited) && ctx.f.emiratesIdExpiryDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 176, "FirstNameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 178, "NameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isFirstNameReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.firstName.touched || ctx.isFormSubmited) && ctx.f.firstName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](101, 180, "LastNameEN"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](103, 182, "LastNameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isLastNameReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 184, "NameAR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 186, "NameAR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isNameInArabicReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.arabicName.touched || ctx.isFormSubmited) && ctx.f.arabicName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 188, "Nationality"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](124, 190, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](125, 192, "Nationality"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nationalityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.nationality.touched || ctx.isFormSubmited) && ctx.f.nationality.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](132, 194, "Gender"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](141, 196, "Male"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 198, "Female"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.gender.touched || ctx.isFormSubmited) && ctx.f.gender.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](155, 200, "EmailID"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](159, 202, "EmailID"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isEmailIDReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.email.touched || ctx.isFormSubmited) && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](165, 204, "MobileNo"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](169, 206, "MobileNo"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isMobileNoReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.mobileNo.touched || ctx.isFormSubmited) && ctx.f.mobileNo.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](176, 208, "Notes"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](178, 210, "Notes"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](185, 212, "LicenseNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](189, 214, "LicenseNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.licenseNumber.touched || ctx.isFormSubmited) && ctx.f.licenseNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](195, 216, "Emirate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](201, 218, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](202, 220, "Emirate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emiratesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.emirate.touched || ctx.isFormSubmited) && ctx.f.emirate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](210, 222, "IssueDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](214, 224, "IssueDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r958)("owlDateTimeTrigger", _r958);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.issueDate.touched || ctx.isFormSubmited) && ctx.f.issueDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](222, 226, "ExpiryDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](226, 228, "ExpiryDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r960)("owlDateTimeTrigger", _r960)("min", ctx.common.minDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.expiryDate.touched || ctx.isFormSubmited) && ctx.f.expiryDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](236, 230, "Type"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](242, 232, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](243, 234, "Type"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.driverTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.chooseType.touched || ctx.isFormSubmited) && ctx.f.chooseType.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](250, 236, "TypeOfPermit"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](256, 238, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](257, 240, "TypeOfPermit"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.driverTypePermitListWithFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.typeOfPermit.touched || ctx.isFormSubmited) && ctx.f.typeOfPermit.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](265, 242, "PermitIssueDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](269, 244, "PermitIssueDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitIssueDate.touched || ctx.isFormSubmited) && ctx.f.permitIssueDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](275, 246, "PermitExpiryDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](279, 248, "PermitExpiryDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitExpiryDate.touched || ctx.isFormSubmited) && ctx.f.permitExpiryDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](286, 250, "Fees"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](290, 252, "Fees"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitFees.touched || ctx.isFormSubmited) && ctx.f.permitFees.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAttachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAttachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAttachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAttachment && !ctx.noAttacmentsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noAttacmentsFound && ctx.showAttachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](305, 254, "ConfirmAddVehicleMsg"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.checkAllCondition.touched || ctx.isFormSubmited) && ctx.f.checkAllCondition.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection < 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection == 6);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9hZGRkcml2ZXIvYWRkZHJpdmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdddriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-adddriver',
          templateUrl: './adddriver.component.html',
          styleUrls: ['./adddriver.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }, {
          type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["DateTimeAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/driver/adddriver/adddriver.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/driver/adddriver/adddriver.module.ts ***!
    \************************************************************/

  /*! exports provided: AdddriverModule */

  /***/
  function srcAppPagesDriverAdddriverAdddriverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverModule", function () {
      return AdddriverModule;
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


    var _adddriver_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adddriver-routing.module */
    "./src/app/pages/driver/adddriver/adddriver-routing.module.ts");
    /* harmony import */


    var _adddriver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adddriver.component */
    "./src/app/pages/driver/adddriver/adddriver.component.ts");
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


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");

    var AdddriverModule = function AdddriverModule() {
      _classCallCheck(this, AdddriverModule);
    };

    AdddriverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdddriverModule
    });
    AdddriverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdddriverModule_Factory(t) {
        return new (t || AdddriverModule)();
      },
      providers: [// use french locale
      {
        provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OWL_DATE_TIME_LOCALE"],
        useValue: 'us'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _adddriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdddriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdddriverModule, {
        declarations: [_adddriver_component__WEBPACK_IMPORTED_MODULE_3__["AdddriverComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _adddriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdddriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdddriverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_adddriver_component__WEBPACK_IMPORTED_MODULE_3__["AdddriverComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _adddriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdddriverRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          providers: [// use french locale
          {
            provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OWL_DATE_TIME_LOCALE"],
            useValue: 'us'
          }]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-driver-adddriver-adddriver-module-es5.js.map