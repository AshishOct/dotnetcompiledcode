function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-addcompany-addcompany-module"], {
  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/index.js":
  /*!***************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
    \***************************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */

    /**
     * @module
     * @description
     * Entry point from which you should import all public library APIs.
     */
    //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
    \******************************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__SrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var DataTableDirective =
    /** @class */
    function () {
      function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */

        this.dtOptions = {};
      }

      DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;

        if (this.dtTrigger) {
          this.dtTrigger.subscribe(function () {
            _this.displayTable();
          });
        } else {
          this.displayTable();
        }
      };

      DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
          this.dtTrigger.unsubscribe();
        }

        if (this.dt) {
          this.dt.destroy(true);
        }
      };

      DataTableDirective.prototype.displayTable = function () {
        var _this = this;

        this.dtInstance = new Promise(function (resolve, reject) {
          Promise.resolve(_this.dtOptions).then(function (dtOptions) {
            // Using setTimeout as a "hack" to be "part" of NgZone
            setTimeout(function () {
              // Assign DT properties here
              var options = {
                rowCallback: function rowCallback(row, data, index) {
                  if (dtOptions.columns) {
                    var columns_1 = dtOptions.columns; // Filter columns with pipe declared

                    var colsWithPipe = columns_1.filter(function (x) {
                      return x.ngPipeInstance;
                    }); // Iterate

                    colsWithPipe.forEach(function (el) {
                      var pipe = el.ngPipeInstance; // find index of column using `data` attr

                      var i = columns_1.findIndex(function (e) {
                        return e.data == el.data;
                      }); // get <td> element which holds data using index

                      var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

                      var rowVal = $(rowFromCol).text();
                      var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

                      $(rowFromCol).text(rowValAfter);
                    });
                  } // run user specified row callback if provided.


                  if (_this.dtOptions.rowCallback) {
                    _this.dtOptions.rowCallback(row, data, index);
                  }
                }
              }; // merge user's config with ours

              options = Object.assign({}, dtOptions, options);
              _this.dt = $(_this.el.nativeElement).DataTable(options);
              resolve(_this.dt);
            });
          });
        });
      };

      DataTableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      DataTableDirective.propDecorators = {
        dtOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dtTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
        return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DataTableDirective,
        selectors: [["", "datatable", ""]],
        inputs: {
          dtOptions: "dtOptions",
          dtTrigger: "dtTrigger"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[datatable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
    \***************************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__SrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
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


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule
        };
      };

      DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DataTablesModule
      });
      DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DataTablesModule_Factory(t) {
          return new (t || DataTablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, {
          declarations: function declarations() {
            return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./src/app/pages/company/addcompany/addcompany-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/company/addcompany/addcompany-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AddcompanyRoutingModule */

  /***/
  function srcAppPagesCompanyAddcompanyAddcompanyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcompanyRoutingModule", function () {
      return AddcompanyRoutingModule;
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


    var _addcompany_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addcompany.component */
    "./src/app/pages/company/addcompany/addcompany.component.ts");

    var routes = [{
      path: '',
      component: _addcompany_component__WEBPACK_IMPORTED_MODULE_2__["AddcompanyComponent"]
    }];

    var AddcompanyRoutingModule = function AddcompanyRoutingModule() {
      _classCallCheck(this, AddcompanyRoutingModule);
    };

    AddcompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddcompanyRoutingModule
    });
    AddcompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddcompanyRoutingModule_Factory(t) {
        return new (t || AddcompanyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddcompanyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcompanyRoutingModule, [{
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
  "./src/app/pages/company/addcompany/addcompany.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/company/addcompany/addcompany.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddcompanyComponent */

  /***/
  function srcAppPagesCompanyAddcompanyAddcompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcompanyComponent", function () {
      return AddcompanyComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
    /* harmony import */


    var _common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/confirmdialog/confirmation-dialog-service.service */
    "./src/app/pages/common/confirmdialog/confirmation-dialog-service.service.ts");
    /* harmony import */


    var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");

    var _c0 = function _c0() {
      return ["/company/detailcompany"];
    };

    function AddcompanyComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1158.companyInfo.CompanyID);
      }
    }

    function AddcompanyComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AddNewCompany"));
      }
    }

    function AddcompanyComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateCompany"));
      }
    }

    function AddcompanyComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CreateCompanyUpdateRequest"));
      }
    }

    function AddcompanyComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateCompanyUpdateRequest"));
      }
    }

    function AddcompanyComponent_h4_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AddNewCompany"));
      }
    }

    function AddcompanyComponent_h4_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateCompany"));
      }
    }

    function AddcompanyComponent_h4_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CreateCompanyUpdateRequest"));
      }
    }

    function AddcompanyComponent_h4_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateCompanyUpdateRequest"));
      }
    }

    function AddcompanyComponent_h6_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx_r1167.activeSection == 4)("complte_section", ctx_r1167.activeSection >= 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "CompanyActivity"));
      }
    }

    function AddcompanyComponent_div_61_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyNameEN"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_61_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Enter CompanyName in English"));
      }
    }

    function AddcompanyComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_61_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_61_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1168.f.companyName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1168.f.companyName.errors.pattern);
      }
    }

    function AddcompanyComponent_div_71_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyNameAR"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_71_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Enter CompanyName in Arabic"));
      }
    }

    function AddcompanyComponent_div_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_71_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_71_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1169.f.companyNameAr.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1169.f.companyNameAr.errors.pattern);
      }
    }

    function AddcompanyComponent_option_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var isal_r1221 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", isal_r1221.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", isal_r1221.Name, " ");
      }
    }

    function AddcompanyComponent_div_86_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "IssuingAuthority"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_86_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1171.f.issuingAuthority.errors.required);
      }
    }

    function AddcompanyComponent_option_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emer_r1223 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", emer_r1223.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", emer_r1223.Name, " ");
      }
    }

    function AddcompanyComponent_div_100_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Emirate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_100_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1173.f.emirate.errors.required);
      }
    }

    function AddcompanyComponent_div_112_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_112_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1175.f.permitIssueDate.errors.required);
      }
    }

    function AddcompanyComponent_div_123_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_123_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_123_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1177.f.permitExpiryDate.errors.required);
      }
    }

    function AddcompanyComponent_div_138_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CertificateNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), " ");
      }
    }

    function AddcompanyComponent_div_138_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_138_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_138_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_138_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1178.f.certificateNo.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1178.f.certificateNo.errors.pattern);
      }
    }

    function AddcompanyComponent_div_148_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Regnumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_148_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_148_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_148_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1179.f.registerNo.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1179.f.registerNo.errors.pattern);
      }
    }

    function AddcompanyComponent_div_159_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "FederalRegistryNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_159_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_159_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_159_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_159_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1180.f.fedregisterNo.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1180.f.fedregisterNo.errors.pattern);
      }
    }

    function AddcompanyComponent_div_174_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "LicenseNember"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_174_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_174_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_174_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_174_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1181.f.licenseNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1181.f.licenseNumber.errors.pattern);
      }
    }

    function AddcompanyComponent_div_175_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "LicenseNember"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "ShouldNotBe"), " 0");
      }
    }

    function AddcompanyComponent_div_187_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_187_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_187_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1184.f.issueDate.errors.required);
      }
    }

    function AddcompanyComponent_div_200_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_200_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_200_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1186.f.expiryDate.errors.required);
      }
    }

    function AddcompanyComponent_div_209_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "TRNNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_209_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_209_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_209_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_209_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1187.f.trnNo.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1187.f.trnNo.errors.pattern);
      }
    }

    function AddcompanyComponent_div_219_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "FaxNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_219_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_219_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_219_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_219_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1188.f.faxNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1188.f.faxNumber.errors.pattern);
      }
    }

    function AddcompanyComponent_div_235_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ManagerName"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_235_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_235_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_235_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_235_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1189.f.managerName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1189.f.managerName.errors.pattern);
      }
    }

    function AddcompanyComponent_div_245_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ManagerNameInArabic"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_245_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_245_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1190.f.managerNameAr.errors.required);
      }
    }

    function AddcompanyComponent_div_256_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_256_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_256_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_256_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_256_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1191.f.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1191.f.email.errors.pattern);
      }
    }

    function AddcompanyComponent_div_266_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ManagerMobile"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_266_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_266_div_3_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "ManagerMobile"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeLessThan"), " 12 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Digits"), " ");
      }
    }

    function AddcompanyComponent_div_266_div_4_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "ManagerMobile"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 12 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Digits"), " ");
      }
    }

    function AddcompanyComponent_div_266_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_266_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_266_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddcompanyComponent_div_266_div_3_Template, 5, 9, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddcompanyComponent_div_266_div_4_Template, 5, 9, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1192.f.managerMobile.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1192.f.managerMobile.errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1192.f.managerMobile.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1192.f.managerMobile.errors.maxlength);
      }
    }

    function AddcompanyComponent_div_283_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Notes"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_283_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_283_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1193.f.notes.errors.required);
      }
    }

    function AddcompanyComponent_div_298_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Street"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_298_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_298_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1194.f.street.errors.required);
      }
    }

    function AddcompanyComponent_div_308_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "City"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_308_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_308_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1195.f.city.errors.required);
      }
    }

    function AddcompanyComponent_option_322_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emer_r1253 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", emer_r1253.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", emer_r1253.Name, " ");
      }
    }

    function AddcompanyComponent_div_323_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Emirate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_323_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_323_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1197.f.state.errors.required);
      }
    }

    function AddcompanyComponent_div_333_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Zip"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_333_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_333_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_333_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_333_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1198.f.zip.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1198.f.zip.errors.pattern);
      }
    }

    function AddcompanyComponent_div_344_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CountryRegion"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_344_div_2_Template(rf, ctx) {
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

    function AddcompanyComponent_div_344_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_344_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_344_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1199.f.country.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1199.f.country.errors.pattern);
      }
    }

    function AddcompanyComponent_div_346_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_346_div_7_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1263);

          var ctx_r1262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1262.common.mesage.showMessage = !ctx_r1262.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1259.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1259.common.mesage.mesage);
      }
    }

    function AddcompanyComponent_div_346_table_8_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th");
      }
    }

    function AddcompanyComponent_div_346_table_8_tr_14_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_346_table_8_tr_14_td_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1270);

          var CompanyOwnersStaging_r1266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1268.deleteCompanyOwners(1, CompanyOwnersStaging_r1266);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "Delete"));
      }
    }

    function AddcompanyComponent_div_346_table_8_tr_14_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddcompanyComponent_div_346_table_8_tr_14_td_7_Template, 5, 3, "td", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var CompanyOwnersStaging_r1266 = ctx.$implicit;

        var ctx_r1265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyOwnersStaging_r1266.OwnerNameEN);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyOwnersStaging_r1266.OwnerNameAR);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyOwnersStaging_r1266.Nationality);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1265.requestFlag == 4 || ctx_r1265.requestFlag == 3);
      }
    }

    function AddcompanyComponent_div_346_table_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddcompanyComponent_div_346_table_8_th_12_Template, 1, 0, "th", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddcompanyComponent_div_346_table_8_tr_14_Template, 8, 4, "tr", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1260.dtOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "OwnerNameEN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "OwnerNameAR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "Nationality"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1260.requestFlag == 4 || ctx_r1260.requestFlag == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1260.CompanyOwnersStagingDetails);
      }
    }

    function AddcompanyComponent_div_346_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 97);

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

    function AddcompanyComponent_div_346_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddcompanyComponent_div_346_div_7_Template, 5, 3, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddcompanyComponent_div_346_table_8_Template, 15, 12, "table", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddcompanyComponent_div_346_div_9_Template, 6, 3, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "ListofOwners"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx_r1200.noCompanyOwnersStagingDetailsRecordsFound);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1200.common.mesage.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1200.showCompanyOwnersRequestTable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1200.noCompanyOwnersStagingDetailsRecordsFound);
      }
    }

    function AddcompanyComponent_table_360_tr_13_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var NewCompanyOwnersStaging_r1272 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](NewCompanyOwnersStaging_r1272.OwnerNameEN);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](NewCompanyOwnersStaging_r1272.OwnerNameAR);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](NewCompanyOwnersStaging_r1272.NationalityName);
      }
    }

    function AddcompanyComponent_table_360_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddcompanyComponent_table_360_tr_13_Template, 7, 3, "tr", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1201.dtOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "OwnerNameEN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "OwnerNameAR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, "Nationality"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1201.NewAddedCompanyOwnersStagingDetails);
      }
    }

    function AddcompanyComponent_div_361_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 97);

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

    function AddcompanyComponent_section_362_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_362_div_1_div_7_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1280);

          var ctx_r1279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1279.common.mesage.showMessage = !ctx_r1279.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1276.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1276.common.mesage.mesage);
      }
    }

    function AddcompanyComponent_section_362_div_1_table_8_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th");
      }
    }

    function AddcompanyComponent_section_362_div_1_table_8_tr_14_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_362_div_1_table_8_tr_14_td_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1287);

          var CompanyActivitie_r1283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1285.deleteCompanyActivities(1, CompanyActivitie_r1283);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "Delete"));
      }
    }

    function AddcompanyComponent_section_362_div_1_table_8_tr_14_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddcompanyComponent_section_362_div_1_table_8_tr_14_td_7_Template, 5, 3, "td", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var CompanyActivitie_r1283 = ctx.$implicit;

        var ctx_r1282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyActivitie_r1283.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyActivitie_r1283.Fees);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](CompanyActivitie_r1283.ExpiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1282.requestFlag == 4 || ctx_r1282.requestFlag == 3);
      }
    }

    function AddcompanyComponent_section_362_div_1_table_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddcompanyComponent_section_362_div_1_table_8_th_12_Template, 1, 0, "th", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddcompanyComponent_section_362_div_1_table_8_tr_14_Template, 8, 4, "tr", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1277.dtOptions1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "Name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "Fees"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "ExpiryDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1277.requestFlag == 4 || ctx_r1277.requestFlag == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1277.CompanyActivitiesStagingDetails);
      }
    }

    function AddcompanyComponent_section_362_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 97);

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

    function AddcompanyComponent_section_362_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddcompanyComponent_section_362_div_1_div_7_Template, 5, 3, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddcompanyComponent_section_362_div_1_table_8_Template, 15, 12, "table", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddcompanyComponent_section_362_div_1_div_9_Template, 6, 3, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "ListofActivities"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx_r1273.noCompanyActivitiesStagingDetailsRecordsFound);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1273.common.mesage.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1273.showCompanyActivitiesTable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1273.noCompanyActivitiesStagingDetailsRecordsFound);
      }
    }

    function AddcompanyComponent_section_362_table_15_tr_13_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var newAddedCompanyActivitie_r1289 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](newAddedCompanyActivitie_r1289.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](newAddedCompanyActivitie_r1289.Fees);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](newAddedCompanyActivitie_r1289.ExpiryDate);
      }
    }

    function AddcompanyComponent_section_362_table_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddcompanyComponent_section_362_table_15_tr_13_Template, 7, 3, "tr", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1274.dtOptions1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "Name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "Fees"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, "ExpiryDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1274.newAddedCompanyActivitiesStagingDetails);
      }
    }

    function AddcompanyComponent_section_362_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 97);

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

    function AddcompanyComponent_section_362_Template(rf, ctx) {
      if (rf & 1) {
        var _r1291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_362_div_1_Template, 10, 8, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_362_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1291);

          var ctx_r1290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1290.AddCompanyActivities();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddcompanyComponent_section_362_table_15_Template, 14, 11, "table", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddcompanyComponent_section_362_div_16_Template, 6, 3, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx_r1203.activeSection != 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1203.showCompanyActivityListTable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, "AddCompanyActivities"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, "NewlyAddedActivities"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx_r1203.noNewAddedCompanyActivitiesStagingDetailsRecordsFound);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1203.showCompanyActivitiesTable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1203.noNewAddedCompanyActivitiesStagingDetailsRecordsFound);
      }
    }

    function AddcompanyComponent_section_364_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_364_div_1_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1298);

          var ctx_r1297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1297.common.mesage.showMessage = !ctx_r1297.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1292.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1292.common.mesage.mesage);
      }
    }

    function AddcompanyComponent_section_364_div_2_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyDocument1"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_section_364_div_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_364_div_2_div_9_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1299.f.document1.errors.required);
      }
    }

    function AddcompanyComponent_section_364_div_2_label_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_364_div_2_label_10_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1305);

          var ctx_r1304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1304.downloadFile(ctx_r1304.reactiveFormName.value.document1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1300.reactiveFormName.value.document1.FileName);
      }
    }

    function AddcompanyComponent_section_364_div_2_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PassportCopy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_section_364_div_2_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_364_div_2_div_19_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1301.f.document2.errors.required);
      }
    }

    function AddcompanyComponent_section_364_div_2_label_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r1308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_364_div_2_label_20_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1308);

          var ctx_r1307 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1307.downloadFile(ctx_r1307.reactiveFormName.value.document2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1302.reactiveFormName.value.document2.FileName);
      }
    }

    function AddcompanyComponent_section_364_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_section_364_div_2_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1310);

          var ctx_r1309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1309.onChange($event, "document1");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddcompanyComponent_section_364_div_2_div_9_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddcompanyComponent_section_364_div_2_label_10_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_section_364_div_2_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1310);

          var ctx_r1311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1311.onChange($event, "document2");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddcompanyComponent_section_364_div_2_div_19_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddcompanyComponent_section_364_div_2_label_20_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "CompanyDocument1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1293.f.document1.touched || ctx_r1293.isFormSubmited) && ctx_r1293.f.document1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1293.reactiveFormName.value.document1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "PassportCopy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1293.f.document2.touched || ctx_r1293.isFormSubmited) && ctx_r1293.f.document2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1293.reactiveFormName.value.document2);
      }
    }

    function AddcompanyComponent_section_364_div_3_label_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_364_div_3_label_7_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1314);

          var ctx_r1313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1313.downloadFile(ctx_r1313.reactiveFormName.value.document3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1312.reactiveFormName.value.document3.FileName);
      }
    }

    function AddcompanyComponent_section_364_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1316 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_section_364_div_3_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1316);

          var ctx_r1315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1315.onChange($event, "document3");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddcompanyComponent_section_364_div_3_label_7_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "Other"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1294.reactiveFormName.value.document3);
      }
    }

    function AddcompanyComponent_section_364_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_section_364_div_4_div_1_Template_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1320);

          var attachment_r1318 = ctx.$implicit;

          var ctx_r1319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1319.downloadFile(attachment_r1318);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attachment_r1318 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1318.Subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1318.FileName);
      }
    }

    function AddcompanyComponent_section_364_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_364_div_4_div_1_Template, 6, 2, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1295.viewCompanyAttachmentsList);
      }
    }

    function AddcompanyComponent_section_364_div_12_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_section_364_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_364_div_12_div_1_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1296.f.checkAllCondition.errors.required);
      }
    }

    function AddcompanyComponent_section_364_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_section_364_div_1_Template, 5, 3, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_section_364_div_2_Template, 21, 10, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddcompanyComponent_section_364_div_3_Template, 8, 4, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddcompanyComponent_section_364_div_4_Template, 2, 1, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddcompanyComponent_section_364_div_12_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx_r1204.activeSection != 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1204.common.mesage.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1204.showAttachments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1204.showAttachments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1204.showAttachments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "ConfirmAddVehicleMsg"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1204.f.checkAllCondition.touched || ctx_r1204.isFormSubmited) && ctx_r1204.f.checkAllCondition.errors);
      }
    }

    function AddcompanyComponent_div_366_Template(rf, ctx) {
      if (rf & 1) {
        var _r1323 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_366_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1323);

          var ctx_r1322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1322.common.mesage.showMessage = !ctx_r1322.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1205.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1205.common.mesage.mesage);
      }
    }

    function AddcompanyComponent_div_368_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyDocument1"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_368_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_368_div_9_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1324.f.document1.errors.required);
      }
    }

    function AddcompanyComponent_div_368_label_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_368_label_10_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1330);

          var ctx_r1329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1329.downloadFile(ctx_r1329.reactiveFormName.value.document1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1325.reactiveFormName.value.document1.FileName);
      }
    }

    function AddcompanyComponent_div_368_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PassportCopy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_368_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_368_div_19_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1326.f.document2.errors.required);
      }
    }

    function AddcompanyComponent_div_368_label_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r1333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_368_label_20_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1333);

          var ctx_r1332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1332.downloadFile(ctx_r1332.reactiveFormName.value.document2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1327.reactiveFormName.value.document2.FileName);
      }
    }

    function AddcompanyComponent_div_368_Template(rf, ctx) {
      if (rf & 1) {
        var _r1335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_div_368_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1335);

          var ctx_r1334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1334.onChange($event, "document1");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddcompanyComponent_div_368_div_9_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddcompanyComponent_div_368_label_10_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_div_368_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1335);

          var ctx_r1336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1336.onChange($event, "document2");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddcompanyComponent_div_368_div_19_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddcompanyComponent_div_368_label_20_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "CompanyDocument1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1206.f.document1.touched || ctx_r1206.isFormSubmited) && ctx_r1206.f.document1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1206.reactiveFormName.value.document1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "PassportCopy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1206.f.document2.touched || ctx_r1206.isFormSubmited) && ctx_r1206.f.document2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1206.reactiveFormName.value.document2);
      }
    }

    function AddcompanyComponent_div_369_label_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r1339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_369_label_8_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1339);

          var ctx_r1338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1338.downloadFile(ctx_r1338.reactiveFormName.value.document3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1337.reactiveFormName.value.document3.FileName);
      }
    }

    function AddcompanyComponent_div_369_Template(rf, ctx) {
      if (rf & 1) {
        var _r1341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_div_369_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1341);

          var ctx_r1340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1340.onChange($event, "document3");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddcompanyComponent_div_369_label_8_Template, 2, 1, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "Other"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1207.reactiveFormName.value.document3);
      }
    }

    function AddcompanyComponent_div_370_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1345 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_370_div_1_Template_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1345);

          var attachment_r1343 = ctx.$implicit;

          var ctx_r1344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1344.downloadFile(attachment_r1343);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attachment_r1343 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1343.Subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1343.FileName);
      }
    }

    function AddcompanyComponent_div_370_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_370_div_1_Template, 6, 2, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1208.viewCompanyAttachmentsList);
      }
    }

    function AddcompanyComponent_div_378_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_378_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_378_div_1_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1209.f.checkAllCondition.errors.required);
      }
    }

    function AddcompanyComponent_button_382_Template(rf, ctx) {
      if (rf & 1) {
        var _r1348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_button_382_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1348);

          var ctx_r1347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1347.previousOrNextBtnAction(1);
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

    function AddcompanyComponent_button_383_Template(rf, ctx) {
      if (rf & 1) {
        var _r1350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_button_383_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1350);

          var ctx_r1349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1349.previousOrNextBtnAction(2);
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

    function AddcompanyComponent_button_384_Template(rf, ctx) {
      if (rf & 1) {
        var _r1352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_button_384_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1352);

          var ctx_r1351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1351.previousOrNextBtnAction(2);
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

    function AddcompanyComponent_button_385_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Submit"), " ");
      }
    }

    function AddcompanyComponent_button_386_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Submit"), " ");
      }
    }

    function AddcompanyComponent_div_388_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "OwnerNameEN"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_388_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Enter OwnerName in English"));
      }
    }

    function AddcompanyComponent_div_388_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_388_div_17_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_388_div_17_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1353.l.ownerNameEN.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1353.l.ownerNameEN.errors.pattern);
      }
    }

    function AddcompanyComponent_div_388_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "OwnerNameAR"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_388_div_27_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Enter OwnerName in Arabic"));
      }
    }

    function AddcompanyComponent_div_388_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_388_div_27_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddcompanyComponent_div_388_div_27_div_2_Template, 3, 3, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1354.l.ownerNameAR.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1354.l.ownerNameAR.errors.pattern);
      }
    }

    function AddcompanyComponent_div_388_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nat_r1361 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", nat_r1361.Code);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", nat_r1361.NameEN, " ");
      }
    }

    function AddcompanyComponent_div_388_div_41_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "NationalityCode"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_388_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_388_div_41_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1356.l.nationalityCode.errors.required);
      }
    }

    function AddcompanyComponent_div_388_Template(rf, ctx) {
      if (rf & 1) {
        var _r1364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_388_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var ctx_r1363 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1363.showCompanyOwners();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_div_388_Template_input_keypress_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var ctx_r1365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1365.common.allow_alphabet($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddcompanyComponent_div_388_div_17_Template, 3, 2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_div_388_Template_input_keypress_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var ctx_r1366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1366.common.allow_alphabet($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddcompanyComponent_div_388_div_27_Template, 3, 2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_div_388_Template_select_change_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var ctx_r1367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1367.onNationalityChange($event.target.selectedIndex);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddcompanyComponent_div_388_option_40_Template, 2, 2, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddcompanyComponent_div_388_div_41_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_388_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var ctx_r1368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1368.onSubmitCompanyOwnersForm(1, 0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 14, "AddCompanyOwner"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1215.CompanyOwnersForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 16, "OwnerNameEN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 18, "OwnerNameEN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1215.l.ownerNameEN.touched || ctx_r1215.isOwnerFormSubmited) && ctx_r1215.l.ownerNameEN.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, "OwnerNameAR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 22, "OwnerNameAR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1215.l.ownerNameAR.touched || ctx_r1215.isOwnerFormSubmited) && ctx_r1215.l.ownerNameAR.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "NationalityCode"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 26, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 28, "NationalityCode"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1215.nationalityList);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1215.l.nationalityCode.touched || ctx_r1215.isOwnerFormSubmited) && ctx_r1215.l.nationalityCode.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 30, "AddCompanyOwner"), " ");
      }
    }

    function AddcompanyComponent_div_389_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 132);
      }

      if (rf & 2) {
        var item_r1376 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r1376.NameEN, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AddcompanyComponent_div_389_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 132);
      }

      if (rf & 2) {
        var notFound_r1377 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r1377, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AddcompanyComponent_div_389_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ActivityID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function AddcompanyComponent_div_389_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_389_div_23_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1373.a.activityID.errors.required);
      }
    }

    function AddcompanyComponent_div_389_div_33_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_389_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_389_div_33_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1374.a.fees.errors.required);
      }
    }

    function AddcompanyComponent_div_389_div_43_div_1_Template(rf, ctx) {
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

    function AddcompanyComponent_div_389_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddcompanyComponent_div_389_div_43_div_1_Template, 4, 6, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1375.a.activitieExpiryDate.errors.required);
      }
    }

    function AddcompanyComponent_div_389_Template(rf, ctx) {
      if (rf & 1) {
        var _r1382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_389_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1381.showCompanyActivities();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ng-autocomplete", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function AddcompanyComponent_div_389_Template_ng_autocomplete_selected_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1383.selectEvent($event);
        })("inputChanged", function AddcompanyComponent_div_389_Template_ng_autocomplete_inputChanged_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1384 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1384.onChangeSearch($event);
        })("inputFocused", function AddcompanyComponent_div_389_Template_ng_autocomplete_inputFocused_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1385.onFocused($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddcompanyComponent_div_389_ng_template_19_Template, 1, 1, "ng-template", null, 128, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddcompanyComponent_div_389_ng_template_21_Template, 1, 1, "ng-template", null, 129, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddcompanyComponent_div_389_div_23_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_div_389_Template_input_keypress_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1386.common.allow_numeric($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddcompanyComponent_div_389_div_33_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddcompanyComponent_div_389_div_43_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_div_389_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1382);

          var ctx_r1387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1387.onSubmitCompanyActivitiesForm(1, 0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        var _r1371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

        var ctx_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 17, "AddCompanyActivities"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1216.CompanyActivitiesForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 19, "ActivityID"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 23, "ActivityID"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r1216.ActivitiesNames)("searchKeyword", ctx_r1216.keyword)("itemTemplate", _r1369)("notFoundTemplate", _r1371);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1216.a.activityID.touched || ctx_r1216.isActivityFormSubmited) && ctx_r1216.a.activityID.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 25, "Fees"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 27, "Fees"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1216.a.fees.touched || ctx_r1216.isActivityFormSubmited) && ctx_r1216.a.fees.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 29, "ExpiryDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 31, "ExpiryDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1216.a.activitieExpiryDate.touched || ctx_r1216.isActivityFormSubmited) && ctx_r1216.a.activitieExpiryDate.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 33, "AddCompanyActivities"), " ");
      }
    }

    var _c1 = function _c1() {
      return ["/company/listcompany"];
    };

    var AddcompanyComponent =
    /*#__PURE__*/
    function () {
      function AddcompanyComponent(router, formBuilder, apiCall, common, translate, el, sanitizer, dateTimeAdapter, confirmationDialogService) {
        _classCallCheck(this, AddcompanyComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.sanitizer = sanitizer;
        this.confirmationDialogService = confirmationDialogService;
        this.selectedLang = "";
        this.emiratesList = [];
        this.plateCodeList = [];
        this.vehicleMakeList = [];
        this.plateCodeListWithFilter = [];
        this.activeSection = 1;
        this.isFormSubmited = false;
        this.isOwnerFormSubmited = false;
        this.isActivityFormSubmited = false;
        this.mesage = {};
        this.requestFlag = 1;
        this.dynamicTabNumber = 5;
        this.keyword = 'NameEN';
        this.updateCompanyInfo = [];
        this.CompanyOwnersStagingDetails = [];
        this.NewAddedCompanyOwnersStagingDetails = [];
        this.iShowCompanyOwnersPopup = false;
        this.showCompanyOwnersRequestTable = true;
        this.CompanyActivitiesStagingDetails = [];
        this.resultOutput = [];
        this.newAddedCompanyActivitiesStagingDetails = [];
        this.addCompanyOwnersStagingDetails = [];
        this.addCompanyOwnersStaging = [];
        this.companyInfo = [];
        this.ID = [];
        this.companyResultInfo = [];
        this.addCompanyActivitiesStagingDetails = [];
        this.addCompanyActivitiesStaging = [];
        this.ActivitiesNamesWithoutFilter = [];
        this.disableActivityInfo = [];
        this.disableActivityCompanyId = [];
        this.disableOwnerInfo = [];
        this.disableOwnerCompanyId = [];
        this.activitiesNamesForAssign = [];
        this.viewCompanyAttachmentsList = [];
        this.nationalityList = [];
        this.ActivitiesNames = [];
        this.issuingAuthorityList = [];
        this.iShowCompanyActivitiesPopup = false;
        this.showCompanyActivitiesTable = false;
        this.showCompanyActivitiessection = false;
        this.showAttachments = false;
        this.isgreatertherZeroCertificateNumber = false;
        this.isgreatertherZeroRegnumber = false;
        this.isgreatertherZeroFederalRegistryNumber = false;
        this.isGreatertherZeroLicenseNumber = false;
        this.licenseNumberValidation = false;
        this.showCompanyOwnerListTable = false;
        this.showCompanyActivityListTable = false;
        this.ischeckboxSelected = false;
        this.noNewAddedCompanyOwnersStagingDetailsRecordsFound = false;
        this.noNewAddedCompanyActivitiesStagingDetailsRecordsFound = false;
        this.noCompanyActivitiesStagingDetailsRecordsFound = false;
        this.noCompanyOwnersStagingDetailsRecordsFound = false;
        this.dtOptions = {
          order: [[1, 'desc']],
          language: {
            searchPlaceholder: "Search Owner"
          }
        };
        this.dtOptions1 = {
          order: [[1, 'desc']],
          language: {
            searchPlaceholder: "Search Activity"
          }
        }; //readonly file1SubjectName: string = 'License copy/Business Name certificates';
        //readonly file2SubjectName: string = 'MOU/Letters';
        //readonly file3SubjectName: string = 'Passport Copy (Owner/Directors)';
        //readonly file4SubjectName: string = 'DED letters';
        //readonly file5SubjectName: string = 'Other Documents';

        this.file1SubjectName = 'License copy/Business Name certificates';
        this.file2SubjectName = 'Passport (Owner/Directors)';
        this.file3SubjectName = 'Others';
        this.nationalityName = "";
        dateTimeAdapter.setLocale('en-IN');
      }

      _createClass(AddcompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var body, today, month, day, pemitIssueDate, d, nDay, permitExpiryDate, activitieExpiryDate;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    body = document.getElementsByTagName('body')[0];
                    body.classList.remove('userLogin');
                    today = new Date();
                    this.minDate = {
                      year: today.getFullYear() - 0,
                      month: today.getMonth() + 1,
                      day: today.getDate()
                    };
                    month = today.getMonth() + 1;
                    day = today.getDate();
                    pemitIssueDate = (day > 9 ? day : '0' + day) + '-' + (month > 9 ? month : '0' + month) + '-' + today.getFullYear();
                    d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    d.setFullYear(d.getFullYear() + 1);
                    nDay = d.getDate();
                    permitExpiryDate = (nDay > 9 ? nDay : '0' + nDay) + '-' + (month > 9 ? month : '0' + month) + '-' + d.getFullYear();
                    activitieExpiryDate = permitExpiryDate;
                    this.reactiveFormName = this.formBuilder.group({
                      //Added client side validation for companyName, companyNameAr and street parameters, Abhijith 31-08-2023
                      companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.englishPattern)]],
                      companyNameAr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.arabicPattern)]],
                      notes: [''],
                      registerNo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      fedregisterNo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      certificateNo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      licenseNumber: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.nameRegularExpression)]],
                      emirate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      issuingAuthority: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      trnNo: [''],
                      issueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      expiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      managerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      managerNameAr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.emailPattern)]],
                      managerMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
                      street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      faxNumber: [''],
                      website: [''],
                      permitIssueDate: [pemitIssueDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      permitExpiryDate: [permitExpiryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      checkAllCondition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      document1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      document2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      document3: [null] //document4: [null],
                      //document5: [null]

                    });
                    this.CompanyOwnersForm = this.formBuilder.group({
                      ownerNameEN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      ownerNameAR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      nationalityCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                    this.CompanyActivitiesForm = this.formBuilder.group({
                      activityID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      activitieExpiryDate: [activitieExpiryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                    this.getAllData();
                    _context.t0 = [[0, 'desc']];
                    _context.next = 19;
                    return this.translate.get('NoDataAvailable').toPromise();

                  case 19:
                    _context.t1 = _context.sent;
                    _context.next = 22;
                    return this.translate.get('Search').toPromise();

                  case 22:
                    _context.t2 = _context.sent;
                    _context.next = 25;
                    return this.translate.get('Information').toPromise();

                  case 25:
                    _context.t3 = _context.sent;
                    _context.next = 28;
                    return this.translate.get('infoFiltered').toPromise();

                  case 28:
                    _context.t4 = _context.sent;
                    _context.next = 31;
                    return this.translate.get('infoEmpty').toPromise();

                  case 31:
                    _context.t5 = _context.sent;
                    _context.next = 34;
                    return this.translate.get('lengthMenu').toPromise();

                  case 34:
                    _context.t6 = _context.sent;
                    _context.next = 37;
                    return this.translate.get('First').toPromise();

                  case 37:
                    _context.t7 = _context.sent;
                    _context.next = 40;
                    return this.translate.get('Last').toPromise();

                  case 40:
                    _context.t8 = _context.sent;
                    _context.next = 43;
                    return this.translate.get('Next').toPromise();

                  case 43:
                    _context.t9 = _context.sent;
                    _context.next = 46;
                    return this.translate.get('Previous').toPromise();

                  case 46:
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
                    _context.t13 = [[0, 'desc']];
                    _context.next = 53;
                    return this.translate.get('NoDataAvailable').toPromise();

                  case 53:
                    _context.t14 = _context.sent;
                    _context.next = 56;
                    return this.translate.get('Search').toPromise();

                  case 56:
                    _context.t15 = _context.sent;
                    _context.next = 59;
                    return this.translate.get('Information').toPromise();

                  case 59:
                    _context.t16 = _context.sent;
                    _context.next = 62;
                    return this.translate.get('infoFiltered').toPromise();

                  case 62:
                    _context.t17 = _context.sent;
                    _context.next = 65;
                    return this.translate.get('infoEmpty').toPromise();

                  case 65:
                    _context.t18 = _context.sent;
                    _context.next = 68;
                    return this.translate.get('lengthMenu').toPromise();

                  case 68:
                    _context.t19 = _context.sent;
                    _context.next = 71;
                    return this.translate.get('First').toPromise();

                  case 71:
                    _context.t20 = _context.sent;
                    _context.next = 74;
                    return this.translate.get('Last').toPromise();

                  case 74:
                    _context.t21 = _context.sent;
                    _context.next = 77;
                    return this.translate.get('Next').toPromise();

                  case 77:
                    _context.t22 = _context.sent;
                    _context.next = 80;
                    return this.translate.get('Previous').toPromise();

                  case 80:
                    _context.t23 = _context.sent;
                    _context.t24 = {
                      "first": _context.t20,
                      "last": _context.t21,
                      "next": _context.t22,
                      "previous": _context.t23
                    };
                    _context.t25 = {
                      "zeroRecords": _context.t14,
                      "search": _context.t15,
                      "info": _context.t16,
                      "infoFiltered": _context.t17,
                      "infoEmpty": _context.t18,
                      "lengthMenu": _context.t19,
                      "paginate": _context.t24
                    };
                    this.dtOptions1 = {
                      order: _context.t13,
                      language: _context.t25
                    };

                  case 84:
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
          this.common.deleteValueFromSessionStorage('updateCompanyInfo');
        } // convenience getter for easy access to form fields

      }, {
        key: "f",
        get: function get() {
          return this.reactiveFormName.controls;
        } // convenience getter for easy access to form fields

      }, {
        key: "l",
        get: function get() {
          return this.CompanyOwnersForm.controls;
        } // convenience getter for easy access to form fields

      }, {
        key: "a",
        get: function get() {
          return this.CompanyActivitiesForm.controls;
        }
      }, {
        key: "getAllData",
        value: function getAllData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var updateCompanyInfo, _updateCompanyInfo;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.showCompanyOwnerListTable = false;
                    this.showCompanyActivityListTable = false;
                    updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    this.companyInfo = updateCompanyInfo;

                    if (updateCompanyInfo != null) {
                      if (updateCompanyInfo.requestFrom == 'unapprovedUpdate') {
                        this.requestFlag = 2;
                      } else if (updateCompanyInfo.requestFrom == 'companyUpdateReqCreation') {
                        this.requestFlag = 3;
                      } else if (updateCompanyInfo.requestFrom == 'companyUpdateReqUpdate') {
                        this.requestFlag = 4;
                        this.showAttachments = false;
                      }

                      this.hideActivitySection(2);
                    } else {
                      this.hideActivitySection(1);
                    }

                    this.getEmiratesList();
                    this.getFilterNationalityList();
                    this.getActivitiesNamesLists();
                    this.listIssuingAuthority();

                    if (!(updateCompanyInfo != null)) {
                      _context2.next = 29;
                      break;
                    }

                    _context2.next = 12;
                    return this.assignDataToform(updateCompanyInfo);

                  case 12:
                    if (!(this.requestFlag == 2)) {
                      _context2.next = 21;
                      break;
                    }

                    this.getListCompanyOwnersStaging(updateCompanyInfo, false);
                    this.getListCompanyActivitiesStaging(updateCompanyInfo, false);
                    _context2.next = 17;
                    return this.getViewCompanyAttachmentsList();

                  case 17:
                    this.showCompanyOwnerListTable = true;
                    this.showCompanyActivityListTable = true;
                    _context2.next = 29;
                    break;

                  case 21:
                    if (!(this.requestFlag == 4)) {
                      _context2.next = 29;
                      break;
                    }

                    _context2.next = 24;
                    return this.getViewCompanyAttachmentsList();

                  case 24:
                    _updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    this.ListCompanyActivities(_updateCompanyInfo.CompanyID);
                    this.ListCompanyOwners(_updateCompanyInfo.CompanyID);
                    this.showCompanyOwnerListTable = true;
                    this.showCompanyActivityListTable = true;

                  case 29:
                    if (this.requestFlag == 3) {
                      this.ListCompanyActivities(updateCompanyInfo.CompanyID);
                      this.ListCompanyOwners(updateCompanyInfo.CompanyID);
                      this.showCompanyOwnerListTable = true;
                      this.showCompanyActivityListTable = true;
                    }

                  case 30:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Used for get list of Nationality

      }, {
        key: "getFilterNationalityList",
        value: function getFilterNationalityList() {
          var _this2 = this;

          this.apiCall.postAPICallWithToken('api/DriverManager/getNationalityList', {}).then(function (result) {
            _this2.nationalityList = result;
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for get Activity list

      }, {
        key: "getActivitiesNamesLists",
        value: function getActivitiesNamesLists() {
          var _this3 = this;

          var jsonData = {};
          var outerJsonData = {};
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.apiCall.postAPICallWithToken('api/CompanyManager/Activities', outerJsonData).then(function (result) {
            _this3.ActivitiesNames = result;
            _this3.ActivitiesNamesWithoutFilter = result;
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for get list of Issuing Authority

      }, {
        key: "listIssuingAuthority",
        value: function listIssuingAuthority() {
          var _this4 = this;

          this.apiCall.postAPICallWithToken('api/CompanyManager/listIssuingAuthority', {}).then(function (result) {
            _this4.issuingAuthorityList = result;
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // This fuction is used for get Emirates List

      }, {
        key: "getEmiratesList",
        value: function getEmiratesList() {
          var _this5 = this;

          var getEmiratesList = this.common.getValueFromSessionStorage('getEmiratesList');

          if (getEmiratesList != null) {
            this.emiratesList = getEmiratesList;
            return;
          }

          this.apiCall.postEnquiryAPICallWithToken('api/EnquiryManager/getEmiratesList', {}).then(function (result) {
            _this5.emiratesList = result;

            _this5.common.setValueToSessionStorage('getEmiratesList', result);
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // This function is used for get Plate Code List

      }, {
        key: "getPlateCodeList",
        value: function getPlateCodeList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.apiCall.postEnquiryAPICallWithToken('api/EnquiryManager/getPlateCodeList', {}).then(function (result) {
                      _this6.plateCodeList = result;
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // For filter plate code list based on emirates

      }, {
        key: "hideActivitySection",
        value: function hideActivitySection(input) {
          var emirate;
          var updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');

          if (input != 1) {
            emirate = updateCompanyInfo.CompanyEmirate;
          } else {
            emirate = this.reactiveFormName.value.emirate;
          }

          if (emirate == 'RAK') {
            this.showCompanyActivitiessection = true;
            this.showCompanyActivitiesTable = true;
            this.dynamicTabNumber = 5;
          } else {
            this.showCompanyActivitiessection = false;
            this.showCompanyActivitiesTable = false;
            this.dynamicTabNumber = 4;
          }
        } // Used for navigate to section of company form based on click of Privious/Next button

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
              validationStatus = !form.companyName.invalid && !form.companyNameAr.invalid && !form.issuingAuthority.invalid && !form.certificateNo.invalid && !form.registerNo.invalid && !form.fedregisterNo.invalid && !form.licenseNumber.invalid && !form.issueDate.invalid && !form.expiryDate.invalid && !form.trnNo.invalid && !form.emirate.invalid && !form.faxNumber.invalid && !form.permitIssueDate.invalid && !form.permitExpiryDate.invalid;

              if (this.requestFlag == 3 || this.requestFlag == 4) {
                if (this.reactiveFormName.value.licenseNumber == 0) {
                  this.licenseNumberValidation = true;
                  validationStatus = false;
                } else {
                  this.licenseNumberValidation = false;
                  validationStatus = true;
                }
              }
            } else if (this.activeSection == 2) {
              validationStatus = !form.managerName.invalid && !form.managerNameAr.invalid && !form.email.invalid && !form.managerMobile.invalid && !form.notes.invalid && !form.street.invalid && !form.city.invalid && !form.state.invalid && !form.zip.invalid && !form.country.invalid;

              if (this.NewAddedCompanyOwnersStagingDetails.length > 0) {
                this.noNewAddedCompanyOwnersStagingDetailsRecordsFound = false;
              } else {
                this.noNewAddedCompanyOwnersStagingDetailsRecordsFound = true;
              }

              if (this.newAddedCompanyActivitiesStagingDetails.length > 0) {
                this.noNewAddedCompanyActivitiesStagingDetailsRecordsFound = false;
              } else {
                this.noNewAddedCompanyActivitiesStagingDetailsRecordsFound = true;
              }
            } else if (this.activeSection == 3) {
              if (this.requestFlag == 1) {
                if (this.NewAddedCompanyOwnersStagingDetails.length > 0) {
                  validationStatus = true;
                } else {
                  validationStatus = false;
                }
              } else {
                validationStatus = true;
              }
            } else if (this.activeSection == 4) {
              if (this.requestFlag == 1) {
                if (this.newAddedCompanyActivitiesStagingDetails.length > 0) {
                  validationStatus = true;
                } else {
                  validationStatus = false;
                }
              } else {
                validationStatus = true;
              }
            } else if (this.activeSection == 5) {
              validationStatus = !form.checkAllCondition.invalid;
            }

            if (validationStatus) {
              this.isFormSubmited = false;
              ++this.activeSection;
            } else {
              this.isFormSubmited = true;
            }
          }
        } //on click of submit form

      }, {
        key: "onSubmitForm",
        value: function onSubmitForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var updateCompanyInfo, userLoginInfo, jsonData, apiEndPoint, selectedCompanyInfo;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    this.isFormSubmited = true;

                    if (!(this.requestFlag == 2 || this.requestFlag == 3)) {
                      _context4.next = 6;
                      break;
                    }

                    this.updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    _context4.next = 8;
                    break;

                  case 6:
                    if (!this.reactiveFormName.invalid) {
                      _context4.next = 8;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 8:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.EmiratesID = userLoginInfo.EmiratesID;
                    jsonData.CompanyNameEN = this.reactiveFormName.value.companyName;
                    jsonData.CompanyNameAr = this.reactiveFormName.value.companyNameAr;
                    jsonData.Notes = this.reactiveFormName.value.notes;
                    jsonData.LocalRegistrationNumber = this.reactiveFormName.value.registerNo + '';
                    jsonData.BusinessNameCertificateNumber = this.reactiveFormName.value.certificateNo + '';
                    jsonData.FederalRegistryNumber = this.reactiveFormName.value.fedregisterNo + '';
                    jsonData.LicenseNumber = this.reactiveFormName.value.licenseNumber + '';
                    jsonData.CompanyEmirate = this.reactiveFormName.value.emirate;
                    jsonData.VATTRNNumber = this.reactiveFormName.value.trnNo;
                    jsonData.IssuingAuthority = this.reactiveFormName.value.issuingAuthority;

                    if (this.requestFlag == 4 || this.requestFlag == 3) {
                      this.updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    } else {
                      if (this.reactiveFormName.value.issueDate.month != 0) {
                        jsonData.IssueDate = this.common.dateFormatWithDash(this.reactiveFormName.value.issueDate);
                        jsonData.ExpiryDate = this.common.dateFormatWithDash(this.reactiveFormName.value.expiryDate);
                      } else {
                        jsonData.IssueDate = this.reactiveFormName.value.issueDate.split("-").reverse().join("-");
                        jsonData.ExpiryDate = this.reactiveFormName.value.expiryDate.split("-").reverse().join("-");
                      }
                    }

                    jsonData.ManagerNameEN = this.reactiveFormName.value.managerName;
                    jsonData.ManagerNameAR = this.reactiveFormName.value.managerNameAr;
                    jsonData.Email = this.reactiveFormName.value.email;
                    jsonData.ManagerMobile = this.reactiveFormName.value.managerMobile;
                    jsonData.Street = this.reactiveFormName.value.street;
                    jsonData.City = this.reactiveFormName.value.city;
                    jsonData.State = this.reactiveFormName.value.state;
                    jsonData.PostalCode = this.reactiveFormName.value.zip;
                    jsonData.CountryRegion = this.reactiveFormName.value.country;
                    jsonData.FaxNumber = this.reactiveFormName.value.faxNumber;
                    jsonData.Website = this.reactiveFormName.value.website;

                    if (this.requestFlag == 4 || this.requestFlag == 3) {
                      this.updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    } else {
                      if (this.reactiveFormName.value.permitIssueDate.month != 0 && this.reactiveFormName.value.permitIssueDate.month != "undefined" && this.reactiveFormName.value.permitIssueDate.month != null) {
                        jsonData.PermitIssueDate = this.common.calDateFormatToString(this.reactiveFormName.value.permitIssueDate);
                        jsonData.PermitExpiryDate = this.common.calDateFormatToString(this.reactiveFormName.value.permitExpiryDate);
                      } else {
                        jsonData.PermitIssueDate = this.reactiveFormName.value.permitIssueDate.split("-").reverse().join("-");
                        jsonData.PermitExpiryDate = this.reactiveFormName.value.permitExpiryDate.split("-").reverse().join("-");
                      }
                    }

                    apiEndPoint = 'api/CompanyManager/CompanyCreate';

                    if (updateCompanyInfo != null) {
                      jsonData.CompanyID = updateCompanyInfo.CompanyID;
                      apiEndPoint = 'api/CompanyManager/CompanyUpdate';
                      jsonData.CompanyID = updateCompanyInfo.CompanyID;

                      if (this.requestFlag == 3) {
                        apiEndPoint = 'api/CompanyManager/CompanyUpdateRequestCreation';
                      } else if (this.requestFlag == 4) {
                        apiEndPoint = 'api/CompanyManager/CompanyUpdateRequestUpdate';
                        selectedCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyRequestInfo');
                        jsonData.ID = selectedCompanyInfo.ID;
                        jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                      }
                    }

                    _context4.next = 40;
                    return this.apiCall.postAPICallWithToken(apiEndPoint, jsonData).then(function (result) {
                      if (result.Message) {
                        _this7.common.showSussessFailureMessage(2, result.Message);
                      } else {
                        _this7.companyResultInfo = result;

                        if (_this7.requestFlag == 1 || _this7.requestFlag == 2) {
                          if (result.CompanyID) {
                            _this7.onSubmitOfAttchmentForm(result.CompanyID);

                            _this7.comId = result.CompanyID;
                          }
                        } else if (_this7.requestFlag == 3 || _this7.requestFlag == 4) {
                          if (result.ID) {
                            _this7.ID = result.ID;

                            _this7.onSubmitOfAttchmentForm(result.ID);
                          }
                        }

                        if (_this7.requestFlag == 4) {
                          _this7.resultOutput = result;

                          if (_this7.resultOutput.Outcome = "Updated") {
                            _this7.common.showSussessFailureMessage(1, 'Company Update Request Updated Successfully', false);

                            _this7.router.navigateByUrl('/company/detailcompany');
                          }
                        }
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 40:
                    if (!(this.requestFlag != 4)) {
                      _context4.next = 56;
                      break;
                    }

                    if (!(this.requestFlag == 3)) {
                      _context4.next = 52;
                      break;
                    }

                    _context4.next = 44;
                    return this.onSubmitCompanyOwnersForm(2, this.companyResultInfo.CompanyID);

                  case 44:
                    _context4.next = 46;
                    return this.onSubmitCompanyActivitiesForm(2, this.companyResultInfo.CompanyID);

                  case 46:
                    _context4.next = 48;
                    return this.deleteCompanyOwners(2, this.ID);

                  case 48:
                    _context4.next = 50;
                    return this.deleteCompanyActivities(2, this.ID);

                  case 50:
                    _context4.next = 56;
                    break;

                  case 52:
                    _context4.next = 54;
                    return this.onSubmitCompanyOwnersForm(2, this.comId);

                  case 54:
                    _context4.next = 56;
                    return this.onSubmitCompanyActivitiesForm(2, this.comId);

                  case 56:
                    if (!(this.requestFlag == 4)) {
                      _context4.next = 65;
                      break;
                    }

                    _context4.next = 59;
                    return this.onSubmitCompanyOwnersForm(2, updateCompanyInfo.CompanyID);

                  case 59:
                    _context4.next = 61;
                    return this.onSubmitCompanyActivitiesForm(2, updateCompanyInfo.CompanyID);

                  case 61:
                    _context4.next = 63;
                    return this.deleteCompanyOwners(2, updateCompanyInfo.ID);

                  case 63:
                    _context4.next = 65;
                    return this.deleteCompanyActivities(2, updateCompanyInfo.ID);

                  case 65:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Used for submit file, if file found

      }, {
        key: "onSubmitOfAttchmentForm",
        value: function onSubmitOfAttchmentForm(CompanyID) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this8 = this;

            var file;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(CompanyID == null || CompanyID == '')) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    file = this.reactiveFormName.value.document1;

                    if (!(file != null)) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 6;
                    return this.uplaodAttachmentToServerOneByOne(CompanyID, file, false, this.file1SubjectName);

                  case 6:
                    file = this.reactiveFormName.value.document2;

                    if (!(file != null)) {
                      _context5.next = 10;
                      break;
                    }

                    _context5.next = 10;
                    return this.uplaodAttachmentToServerOneByOne(CompanyID, file, false, this.file2SubjectName);

                  case 10:
                    file = this.reactiveFormName.value.document3;

                    if (!(file != null)) {
                      _context5.next = 14;
                      break;
                    }

                    _context5.next = 14;
                    return this.uplaodAttachmentToServerOneByOne(CompanyID, file, false, this.file3SubjectName);

                  case 14:
                    //file = this.reactiveFormName.value.document4;
                    //if (file != null) {
                    //  await this.uplaodAttachmentToServerOneByOne(CompanyID, file, false, this.file4SubjectName);
                    //}
                    //file = this.reactiveFormName.value.document5;
                    //if (file != null) {
                    //  await this.uplaodAttachmentToServerOneByOne(CompanyID, file, false, this.file5SubjectName);
                    //}
                    this.apiCall.spinner.hide();

                    if (this.requestFlag == 1) {
                      setTimeout(function () {
                        _this8.common.showSussessFailureMessage(1, 'Company Added Successfully and Submitted for Approval', false);
                      }, 10);
                      this.router.navigateByUrl('/company/listcompany');
                    } else if (this.requestFlag == 2) {
                      setTimeout(function () {
                        _this8.common.showSussessFailureMessage(1, 'Company Updated Successfully and Submitted for Approval', false);
                      }, 10);
                      this.router.navigateByUrl('/company/listcompany');
                    } else if (this.requestFlag == 3) {
                      setTimeout(function () {
                        _this8.common.showSussessFailureMessage(1, 'Company Update Request Created Successfully', false);
                      }, 10);
                      this.router.navigateByUrl('/company/detailcompany');
                    } else if (this.requestFlag == 4) {
                      setTimeout(function () {
                        _this8.common.showSussessFailureMessage(1, 'Company Update Request Updated Successfully', false);
                      }, 10);
                      this.router.navigateByUrl('/company/detailcompany');
                    }

                  case 16:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Used for call attachment submit API

      }, {
        key: "uplaodAttachmentToServerOneByOne",
        value: function uplaodAttachmentToServerOneByOne(ID, file, loader) {
          var Subject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Attachment';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var userLoginInfo, jsonData, fileData, APIEndPoint, outerJsonData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(ID == null || ID == '')) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};

                    if (this.requestFlag == 1 || this.requestFlag == 2) {
                      jsonData.CompanyID = ID;
                    } else if (this.requestFlag == 3 || this.requestFlag == 4) {
                      jsonData.CompanyUpdateRequestID = ID;
                    }

                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.Subject = Subject;
                    jsonData.FileName = file.FileName;
                    fileData = file.Data.split('base64,');

                    if (fileData.length > 1) {
                      jsonData.Data = fileData[1];
                    } else {
                      jsonData.Data = file.Data;
                    }

                    APIEndPoint = 'api/CompanyManager/CompanyAttachment';

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      jsonData.CompanyID = this.companyResultInfo.CompanyID;
                      APIEndPoint = 'api/CompanyManager/CompanyUpdateRequestAttachment';
                    } else if (this.requestFlag == 2) {
                      if (file.AttachmentID != undefined) {
                        APIEndPoint = 'api/CompanyManager/UpdateCompanyAttachment';
                      } else {
                        APIEndPoint = 'api/CompanyManager/CompanyAttachment';
                      }
                    }

                    if (file.AttachmentID) {
                      jsonData.AttachmentID = file.AttachmentID;
                    }

                    outerJsonData = {};
                    outerJsonData.inputParameter = JSON.stringify(jsonData);
                    _context6.next = 18;
                    return this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData, loader).then(function (result) {})["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 18:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // On file Select checking file type and file size

      }, {
        key: "onChange",
        value: function onChange(event, keyIndex) {
          var _this9 = this;

          this.common.mesage = {};

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var fileExtanction = file.name.substring(file.name.lastIndexOf(".") + 1);

            if (!this.common.allowedFileType.includes(fileExtanction.toLowerCase())) {
              this.common.showSussessFailureMessage(2, 'You can upload only ' + this.common.allowedFileType + 'File Type. ');
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

              _this9.reactiveFormName.controls[keyIndex].setValue(json);
            };
          }
        } // Used for get uploaded attachment

      }, {
        key: "getViewCompanyAttachmentsList",
        value: function getViewCompanyAttachmentsList() {
          var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this10 = this;

            var userLoginInfo, outerJsonData, jsonData, selectedCompanyInfo, _selectedCompanyInfo, APIEndPoint;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    outerJsonData = {};
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;

                    if (this.requestFlag == 4) {
                      selectedCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyRequestInfo');
                      jsonData.CompanyUpdateRequestID = selectedCompanyInfo.ID;
                      jsonData.CompanyID = selectedCompanyInfo.CompanyID;
                      outerJsonData.inputParameter = JSON.stringify(jsonData);
                    } else {
                      _selectedCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                      jsonData.CompanyID = _selectedCompanyInfo.CompanyID;
                      outerJsonData.inputParameter = JSON.stringify(jsonData);
                    }

                    APIEndPoint = '';

                    if (this.requestFlag == 4) {
                      APIEndPoint = 'api/CompanyManager/ViewCompanyUpdateRequestAttachments';
                    } else {
                      APIEndPoint = 'api/CompanyManager/ViewCompanyAttachmentsStaging';
                    }

                    _context7.next = 10;
                    return this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData, loader).then(function (result) {
                      var attachmentArray = [];
                      var indexArray = result.filter(function (value) {
                        return value.Subject == _this10.file1SubjectName;
                      });

                      if (indexArray.length > 0) {
                        var val = indexArray[0];
                        var json = {};
                        json.FileName = val.FileName;
                        json.Data = val.Data;
                        json.AttachmentID = val.AttachmentID;
                        json.attachment = 'data:image/jpg;base64,' + val.Data;
                        json.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);

                        _this10.reactiveFormName.controls['document1'].setValue(json);
                      } else if (result.length >= 1) {
                        var _val = result[0];
                        var _json = {};
                        _json.FileName = _val.FileName;
                        _json.Data = _val.Data;
                        _json.AttachmentID = _val.AttachmentID;
                        _json.attachment = 'data:image/jpg;base64,' + _val.Data;
                        _json.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(_json.attachment);

                        _this10.reactiveFormName.controls['document1'].setValue(_json);
                      }

                      indexArray = result.filter(function (value) {
                        return value.Subject == _this10.file2SubjectName;
                      });

                      if (indexArray.length > 0) {
                        var _val2 = indexArray[0];
                        var _json2 = {};
                        _json2.FileName = _val2.FileName;
                        _json2.Data = _val2.Data;
                        _json2.AttachmentID = _val2.AttachmentID;
                        _json2.attachment = 'data:image/jpg;base64,' + _val2.Data;
                        _json2.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(_json2.attachment);

                        _this10.reactiveFormName.controls['document2'].setValue(_json2);
                      } else if (result.length >= 2) {
                        var _val3 = result[1];
                        var _json3 = {};
                        _json3.FileName = _val3.FileName;
                        _json3.Data = _val3.Data;
                        _json3.AttachmentID = _val3.AttachmentID;
                        _json3.attachment = 'data:image/jpg;base64,' + _val3.Data;
                        _json3.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(_json3.attachment);

                        _this10.reactiveFormName.controls['document2'].setValue(_json3);
                      }

                      indexArray = result.filter(function (value) {
                        return value.Subject == _this10.file3SubjectName;
                      });

                      if (indexArray.length > 0) {
                        var _val4 = indexArray[0];
                        var _json4 = {};
                        _json4.FileName = _val4.FileName;
                        _json4.Data = _val4.Data;
                        _json4.AttachmentID = _val4.AttachmentID;
                        _json4.attachment = 'data:image/jpg;base64,' + _val4.Data;
                        _json4.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(_json4.attachment);

                        _this10.reactiveFormName.controls['document3'].setValue(_json4);
                      } else if (result.length >= 3) {
                        var _val5 = result[2];
                        var _json5 = {};
                        _json5.FileName = _val5.FileName;
                        _json5.Data = _val5.Data;
                        _json5.AttachmentID = _val5.AttachmentID;
                        _json5.attachment = 'data:image/jpg;base64,' + _val5.Data;
                        _json5.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(_json5.attachment);

                        _this10.reactiveFormName.controls['document3'].setValue(_json5);
                      } //indexArray = result.filter(value => value.Subject == this.file4SubjectName);
                      //if (indexArray.length > 0) {
                      //  let val = indexArray[0];
                      //  let json: any = {}
                      //  json.FileName = val.FileName;
                      //  json.Data = val.Data;
                      //  json.AttachmentID = val.AttachmentID
                      //  json.attachment = 'data:image/jpg;base64,' + val.Data;
                      //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
                      //  this.reactiveFormName.controls['document4'].setValue(json);
                      //} else if (result.length >= 3) {
                      //  let val = result[2];
                      //  let json: any = {}
                      //  json.FileName = val.FileName;
                      //  json.Data = val.Data;
                      //  json.AttachmentID = val.AttachmentID
                      //  json.attachment = 'data:image/jpg;base64,' + val.Data;
                      //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
                      //  this.reactiveFormName.controls['document4'].setValue(json);
                      //}
                      //indexArray = result.filter(value => value.Subject == this.file5SubjectName);
                      //if (indexArray.length > 0) {
                      //  let val = indexArray[0];
                      //  let json: any = {}
                      //  json.FileName = val.FileName;
                      //  json.Data = val.Data;
                      //  json.AttachmentID = val.AttachmentID
                      //  json.attachment = 'data:image/jpg;base64,' + val.Data;
                      //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
                      //  this.reactiveFormName.controls['document5'].setValue(json);
                      //} else if (result.length >= 3) {
                      //  let val = result[2];
                      //  let json: any = {}
                      //  json.FileName = val.FileName;
                      //  json.Data = val.Data;
                      //  json.AttachmentID = val.AttachmentID
                      //  json.attachment = 'data:image/jpg;base64,' + val.Data;
                      //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
                      //  this.reactiveFormName.controls['document5'].setValue(json);
                      //}


                      var _iterator = _createForOfIteratorHelper(result),
                          _step;

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var data = _step.value;
                          data.attachment = 'data:image/jpg;base64,' + data.Data;
                          data.attachment = _this10.sanitizer.bypassSecurityTrustResourceUrl(data.attachment);
                          attachmentArray.push(data);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      _this10.viewCompanyAttachmentsList = attachmentArray;
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Used for assign data to form in edit mode

      }, {
        key: "assignDataToform",
        value: function assignDataToform(companyInfo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var updateCompanyRequestInfom;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.reactiveFormName.controls['companyName'].setValue(companyInfo.CompanyNameEN);
                    this.reactiveFormName.controls['companyNameAr'].setValue(companyInfo.CompanyNameAR);
                    this.reactiveFormName.controls['notes'].setValue(companyInfo.Notes);
                    this.reactiveFormName.controls['emirate'].setValue(companyInfo.CompanyEmirate);

                    if (companyInfo.CompanyEmirate == 'RAK') {
                      this.hideActivitySection(2);
                    }

                    this.reactiveFormName.controls['issuingAuthority'].setValue(companyInfo.IssuingAuthority);
                    this.reactiveFormName.controls['trnNo'].setValue(companyInfo.VATTRNNumber);
                    this.reactiveFormName.controls['issueDate'].setValue(this.common.stringDateToCalendarDateFormat(companyInfo.IssueDate));
                    this.reactiveFormName.controls['expiryDate'].setValue(this.common.stringDateToCalendarDateFormat(companyInfo.ExpiryDate));
                    this.reactiveFormName.controls['managerName'].setValue(companyInfo.ManagerNameEN);
                    this.reactiveFormName.controls['managerNameAr'].setValue(companyInfo.ManagerNameAR);
                    this.reactiveFormName.controls['email'].setValue(companyInfo.Email);
                    this.reactiveFormName.controls['managerMobile'].setValue(companyInfo.ManagerMobile);
                    this.reactiveFormName.controls['street'].setValue(companyInfo.Street);
                    this.reactiveFormName.controls['city'].setValue(companyInfo.City);
                    this.reactiveFormName.controls['state'].setValue(companyInfo.State);
                    this.reactiveFormName.controls['zip'].setValue(companyInfo.PostalCode);
                    this.reactiveFormName.controls['country'].setValue(companyInfo.CountryRegion);
                    this.reactiveFormName.controls['faxNumber'].setValue(companyInfo.FaxNumber);
                    this.reactiveFormName.controls['website'].setValue(companyInfo.Website);
                    this.reactiveFormName.controls['permitIssueDate'].setValue(this.common.stringDateToCalDateFormat(companyInfo.PermitIssueDate));
                    this.reactiveFormName.controls['permitExpiryDate'].setValue(this.common.stringDateToCalDateFormat(companyInfo.PermitExpiryDate));

                    if (this.requestFlag == 4) {
                      updateCompanyRequestInfom = this.common.getValueFromSessionStorage('updateCompanyRequestInfo');
                      this.reactiveFormName.controls['registerNo'].setValue(updateCompanyRequestInfom.LocalRegistrationNumber);
                      this.reactiveFormName.controls['fedregisterNo'].setValue(updateCompanyRequestInfom.FederalRegistryNumber);
                      this.reactiveFormName.controls['certificateNo'].setValue(updateCompanyRequestInfom.BusinessNameCertificateNumber);
                      this.reactiveFormName.controls['licenseNumber'].setValue(updateCompanyRequestInfom.LicenseNumber);

                      if (updateCompanyRequestInfom.LicenseNumber > 0) {
                        this.isGreatertherZeroLicenseNumber = true;
                      } else {
                        this.isGreatertherZeroLicenseNumber = false;
                      }
                    } else {
                      this.reactiveFormName.controls['registerNo'].setValue(companyInfo.LocalRegistrationNumber);
                      this.reactiveFormName.controls['fedregisterNo'].setValue(companyInfo.FederalRegistryNumber);
                      this.reactiveFormName.controls['certificateNo'].setValue(companyInfo.BusinessNameCertificateNumber);
                      this.reactiveFormName.controls['licenseNumber'].setValue(companyInfo.LicenseNumber);

                      if (companyInfo.LicenseNumber > 0) {
                        this.isGreatertherZeroLicenseNumber = true;
                      } else {
                        this.isGreatertherZeroLicenseNumber = false;
                      }

                      if (companyInfo.LocalRegistrationNumber > 0) {
                        this.isgreatertherZeroCertificateNumber = false;
                      } else {
                        this.isgreatertherZeroCertificateNumber = true;
                      }

                      if (companyInfo.BusinessNameCertificateNumber > 0) {
                        this.isgreatertherZeroRegnumber = false;
                      } else {
                        this.isgreatertherZeroRegnumber = true;
                      }

                      if (companyInfo.FederalRegistryNumber > 0) {
                        this.isgreatertherZeroFederalRegistryNumber = false;
                      } else {
                        this.isgreatertherZeroFederalRegistryNumber = true;
                      }
                    }

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      this.reactiveFormName.controls['permitExpiryDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['permitIssueDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['website'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['faxNumber'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['country'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['zip'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['state'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['city'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['street'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['managerMobile'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['email'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['managerNameAr'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['managerName'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['expiryDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['issueDate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['trnNo'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['issuingAuthority'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['emirate'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['notes'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['companyNameAr'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                      this.reactiveFormName.controls['companyName'].disable({
                        onlySelf: true,
                        emitEvent: true
                      });
                    }

                    this.reactiveFormName.controls['checkAllCondition'].setValue(true);

                  case 25:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // Used for donwload file

      }, {
        key: "downloadFile",
        value: function downloadFile(json) {
          this.common.downloadFile(json);
        } // Used for show add company owner form while clicking on add company owner button

      }, {
        key: "AddCompanyOwner",
        value: function AddCompanyOwner() {
          this.iShowCompanyOwnersPopup = true;
          this.CompanyOwnersForm = this.formBuilder.group({
            ownerNameEN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.englishPattern)]],
            ownerNameAR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.common.arabicPattern)]],
            nationalityCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } // Used for show add company activity form while clicking on add company activity button

      }, {
        key: "AddCompanyActivities",
        value: function AddCompanyActivities() {
          this.iShowCompanyActivitiesPopup = true;
          var today = new Date();
          this.minDate = {
            year: today.getFullYear() - 0,
            month: today.getMonth() + 1,
            day: today.getDate()
          };
          var month = today.getMonth() + 1;
          var d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
          d.setFullYear(d.getFullYear() + 1);
          var nDay = d.getDate();
          var permitExpiryDate = (nDay > 9 ? nDay : '0' + nDay) + '-' + (month > 9 ? month : '0' + month) + '-' + d.getFullYear();
          this.CompanyActivitiesForm = this.formBuilder.group({
            activityID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            activitieExpiryDate: [permitExpiryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } // Used for get Staging Company Owner

      }, {
        key: "getListCompanyOwnersStaging",
        value: function getListCompanyOwnersStaging(companyData) {
          var _this11 = this;

          var loader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.Token = userLoginInfo.Token;
          jsonData.CompanyID = companyData.CompanyID;
          this.showCompanyOwnersRequestTable = false;
          var outerJsonData = {};
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.noCompanyOwnersStagingDetailsRecordsFound = true;
          this.apiCall.postAPICallWithToken('api/CompanyManager/ListCompanyOwnersStaging', outerJsonData, loader).then(function (result) {
            _this11.showCompanyOwnersRequestTable = true;
            _this11.CompanyOwnersStagingDetails = result;

            if (_this11.CompanyOwnersStagingDetails.length != 0 || _this11.CompanyOwnersStagingDetails.length != null) {
              setTimeout(function () {
                _this11.showCompanyOwnersRequestTable = true;
                _this11.noCompanyOwnersStagingDetailsRecordsFound = false;
              }, 200);
            }
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for Dismiss add company owner popup

      }, {
        key: "showCompanyOwners",
        value: function showCompanyOwners() {
          if (this.iShowCompanyOwnersPopup) {
            this.iShowCompanyOwnersPopup = false;
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('changePassword');
          } else {
            this.iShowCompanyOwnersPopup = true;
            var _body = document.getElementsByTagName('body')[0];

            _body.classList.add('changePassword');
          }

          this.CompanyOwnersForm.controls['ownerNameEN'].setValue("");
          this.CompanyOwnersForm.controls['ownerNameAR'].setValue("");
          this.CompanyOwnersForm.controls['nationalityCode'].setValue("");
        } // Used for Dismiss add company activity popup

      }, {
        key: "showCompanyActivities",
        value: function showCompanyActivities() {
          if (this.iShowCompanyActivitiesPopup) {
            this.iShowCompanyActivitiesPopup = false;
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('changePassword');
          } else {
            this.iShowCompanyActivitiesPopup = true;
            var _body2 = document.getElementsByTagName('body')[0];

            _body2.classList.add('changePassword');
          }

          this.CompanyActivitiesForm.controls['activityID'].setValue("");
          this.CompanyActivitiesForm.controls['fees'].setValue("");
        }
      }, {
        key: "onNationalityChange",
        value: function onNationalityChange(event) {
          this.nationalityName = "";
          this.nationalityName = this.nationalityList[event - 1].NameEN;
        } // Used for submit add company owner form

      }, {
        key: "onSubmitCompanyOwnersForm",
        value: function onSubmitCompanyOwnersForm(input, CompanyID) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this12 = this;

            var _iterator2, _step2, val, userLoginInfo, jsonData, APIEndPoint;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.isOwnerFormSubmited = true;

                    if (!(input == 1)) {
                      _context9.next = 14;
                      break;
                    }

                    if (!this.CompanyOwnersForm.invalid) {
                      _context9.next = 4;
                      break;
                    }

                    return _context9.abrupt("return");

                  case 4:
                    this.noNewAddedCompanyOwnersStagingDetailsRecordsFound = false;
                    this.NewAddedCompanyOwnersStagingDetails.push({
                      CompanyID: CompanyID,
                      OwnerNameEN: this.CompanyOwnersForm.value.ownerNameEN,
                      OwnerNameAR: this.CompanyOwnersForm.value.ownerNameAR,
                      Nationality: this.CompanyOwnersForm.value.nationalityCode,
                      NationalityName: this.nationalityName
                    });
                    this.CompanyOwnersForm.controls['ownerNameEN'].setValue("");
                    this.CompanyOwnersForm.controls['ownerNameAR'].setValue("");
                    this.CompanyOwnersForm.controls['nationalityCode'].setValue("");
                    this.showCompanyOwnersRequestTable = false;
                    setTimeout(function () {
                      _this12.showCompanyOwnersRequestTable = true;
                    }, 200);
                    this.iShowCompanyOwnersPopup = false;
                    _context9.next = 41;
                    break;

                  case 14:
                    _iterator2 = _createForOfIteratorHelper(this.NewAddedCompanyOwnersStagingDetails);
                    _context9.prev = 15;

                    _iterator2.s();

                  case 17:
                    if ((_step2 = _iterator2.n()).done) {
                      _context9.next = 33;
                      break;
                    }

                    val = _step2.value;
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      jsonData.ComUpdateRequestID = this.companyResultInfo.ID;
                      jsonData.CompanyID = CompanyID;
                    } else {
                      jsonData.CompanyID = CompanyID;
                    }

                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.OwnerNameEN = val.OwnerNameEN;
                    jsonData.OwnerNameAR = val.OwnerNameAR;
                    jsonData.NationalityCode = val.Nationality;
                    APIEndPoint = '';

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      APIEndPoint = 'api/CompanyManager/CompanyUpdateRequestOwnerCreation';
                    } else {
                      APIEndPoint = 'api/CompanyManager/CompanyOwnerCreation';
                    }

                    _context9.next = 31;
                    return this.apiCall.postAPICallWithToken(APIEndPoint, jsonData).then(function (result) {})["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 31:
                    _context9.next = 17;
                    break;

                  case 33:
                    _context9.next = 38;
                    break;

                  case 35:
                    _context9.prev = 35;
                    _context9.t0 = _context9["catch"](15);

                    _iterator2.e(_context9.t0);

                  case 38:
                    _context9.prev = 38;

                    _iterator2.f();

                    return _context9.finish(38);

                  case 41:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[15, 35, 38, 41]]);
          }));
        } // Used for get lisgt of staging company activity

      }, {
        key: "getListCompanyActivitiesStaging",
        value: function getListCompanyActivitiesStaging(companyData) {
          var _this13 = this;

          var loader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.Token = userLoginInfo.Token;
          jsonData.CompanyID = companyData.CompanyID;
          var outerJsonData = {};
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.showCompanyActivitiesTable = false;
          this.noCompanyActivitiesStagingDetailsRecordsFound = true;
          this.apiCall.postAPICallWithToken('api/CompanyManager/ListCompanyActivitiesStaging', outerJsonData, loader).then(function (result) {
            _this13.CompanyActivitiesStagingDetails = result;
            _this13.showCompanyActivitiesTable = true;

            if (_this13.CompanyActivitiesStagingDetails.lenght != 0 || _this13.CompanyActivitiesStagingDetails.length != null || _this13.CompanyActivitiesStagingDetails != "") {
              setTimeout(function () {
                _this13.showCompanyActivitiesTable = true;
                _this13.noCompanyActivitiesStagingDetailsRecordsFound = false;
              }, 200);
            }
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for submit add company activity form

      }, {
        key: "onSubmitCompanyActivitiesForm",
        value: function onSubmitCompanyActivitiesForm(input, CompanyID) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this14 = this;

            var _iterator3, _step3, val, userLoginInfo, updateCompanyInfo, jsonData, APIEndPoint;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!this.showCompanyActivitiessection) {
                      _context10.next = 43;
                      break;
                    }

                    this.isActivityFormSubmited = true;

                    if (!(input == 1)) {
                      _context10.next = 15;
                      break;
                    }

                    if (!this.CompanyActivitiesForm.invalid) {
                      _context10.next = 5;
                      break;
                    }

                    return _context10.abrupt("return");

                  case 5:
                    this.noNewAddedCompanyActivitiesStagingDetailsRecordsFound = false;
                    this.newAddedCompanyActivitiesStagingDetails.push({
                      CompanyID: CompanyID,
                      Name: this.CompanyActivitiesForm.value.activityID.NameEN,
                      ID: this.CompanyActivitiesForm.value.activityID.ID,
                      Fees: this.CompanyActivitiesForm.value.fees,
                      ExpiryDate: this.CompanyActivitiesForm.value.activitieExpiryDate
                    });
                    this.addCompanyActivitiesStaging.push({
                      CompanyID: CompanyID,
                      Name: this.CompanyActivitiesForm.value.activityID.NameEN,
                      ID: this.CompanyActivitiesForm.value.activityID.ID,
                      Fees: this.CompanyActivitiesForm.value.fees,
                      ExpiryDate: this.CompanyActivitiesForm.value.activitieExpiryDate
                    });
                    this.CompanyActivitiesForm.controls['activityID'].setValue("");
                    this.CompanyActivitiesForm.controls['fees'].setValue("");
                    this.showCompanyActivitiesTable = false;
                    setTimeout(function () {
                      _this14.showCompanyActivitiesTable = true;
                    }, 200);
                    this.iShowCompanyActivitiesPopup = false;
                    _context10.next = 43;
                    break;

                  case 15:
                    _iterator3 = _createForOfIteratorHelper(this.newAddedCompanyActivitiesStagingDetails);
                    _context10.prev = 16;

                    _iterator3.s();

                  case 18:
                    if ((_step3 = _iterator3.n()).done) {
                      _context10.next = 35;
                      break;
                    }

                    val = _step3.value;
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');
                    jsonData = {};

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      jsonData.ComUpdateRequestID = this.companyResultInfo.ID;
                      jsonData.CompanyID = CompanyID;
                    } else {
                      jsonData.CompanyID = CompanyID;
                    }

                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.ActivityID = val.ID;
                    jsonData.Fees = val.Fees + '';
                    jsonData.ExpiryDate = val.ExpiryDate.split("-").reverse().join("-");
                    APIEndPoint = '';

                    if (this.requestFlag == 3 || this.requestFlag == 4) {
                      APIEndPoint = 'api/CompanyManager/CompanyUpdateRequestActivityCreation';
                    } else {
                      APIEndPoint = 'api/CompanyManager/CompanyActivityCreation';
                    }

                    _context10.next = 33;
                    return this.apiCall.postAPICallWithToken(APIEndPoint, jsonData).then(function (result) {})["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 33:
                    _context10.next = 18;
                    break;

                  case 35:
                    _context10.next = 40;
                    break;

                  case 37:
                    _context10.prev = 37;
                    _context10.t0 = _context10["catch"](16);

                    _iterator3.e(_context10.t0);

                  case 40:
                    _context10.prev = 40;

                    _iterator3.f();

                    return _context10.finish(40);

                  case 43:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[16, 37, 40, 43]]);
          }));
        } // Add Company activity form activity autocomplete methods

      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {}
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {}
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {}
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {}
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {
          this.CompanyActivitiesForm.controls['fees'].setValue(item.Fees);
        }
      }, {
        key: "onChangeSearch",
        value: function onChangeSearch(search) {}
      }, {
        key: "onFocused",
        value: function onFocused(e) {} // Used for Delete/Disable Company Activity

      }, {
        key: "deleteCompanyActivities",
        value: function deleteCompanyActivities(input, CompanyActivitie) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this15 = this;

            var updateCompanyInfo, WantDetete, YES, NO, _iterator4, _step4, val, userLoginInfo, jsonData, outerJsonData, APIEndPoint;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');

                    if (!(input == 1)) {
                      _context11.next = 15;
                      break;
                    }

                    this.disableActivityCompanyId = updateCompanyInfo.CompanyID;
                    _context11.next = 5;
                    return this.translate.get('AreYouSuretoDeleteActivitie').toPromise();

                  case 5:
                    WantDetete = _context11.sent;
                    _context11.next = 8;
                    return this.translate.get('YES').toPromise();

                  case 8:
                    YES = _context11.sent;
                    _context11.next = 11;
                    return this.translate.get('NO').toPromise();

                  case 11:
                    NO = _context11.sent;
                    this.confirmationDialogService.confirm('Confirm', WantDetete, YES, NO).then(function (confirmed) {
                      if (confirmed) {
                        if (CompanyActivitie != null) {
                          _this15.disableActivityInfo.push(CompanyActivitie);
                        }
                      }
                    });
                    _context11.next = 17;
                    break;

                  case 15:
                    _iterator4 = _createForOfIteratorHelper(this.disableActivityInfo);

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        val = _step4.value;
                        userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                        jsonData = {};
                        jsonData.UserID = userLoginInfo.ID;
                        jsonData.Token = userLoginInfo.Token;
                        jsonData.ComUpdateRequestID = CompanyActivitie;
                        jsonData.CompanyID = this.disableActivityCompanyId;
                        jsonData.ActivityID = val.ID;
                        jsonData.Fees = val.Fees;
                        jsonData.ExpiryDate = val.ExpiryDate.split("-").reverse().join("-");
                        outerJsonData = {};
                        outerJsonData.inputParameter = JSON.stringify(jsonData);
                        APIEndPoint = '';
                        APIEndPoint = 'api/CompanyManager/CompanyUpdateRequestDisableActivity';
                        this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData).then(function (result) {
                          _this15.resultOutput = result;
                        })["catch"](function (error) {
                          console.log("error ", error);
                        });
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }

                  case 17:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // Used for Delete/Disable Company Owner

      }, {
        key: "deleteCompanyOwners",
        value: function deleteCompanyOwners(input, CompanyOwnersStaging) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this16 = this;

            var updateCompanyInfo, WantDetete, YES, NO, _iterator5, _step5, val, userLoginInfo, jsonData, outerJsonData, APIEndPoint;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    updateCompanyInfo = this.common.getValueFromSessionStorage('updateCompanyInfo');

                    if (!(input == 1)) {
                      _context12.next = 15;
                      break;
                    }

                    this.disableOwnerCompanyId = updateCompanyInfo.CompanyID;
                    _context12.next = 5;
                    return this.translate.get('AreYouSuretoDeleteOwner').toPromise();

                  case 5:
                    WantDetete = _context12.sent;
                    _context12.next = 8;
                    return this.translate.get('YES').toPromise();

                  case 8:
                    YES = _context12.sent;
                    _context12.next = 11;
                    return this.translate.get('NO').toPromise();

                  case 11:
                    NO = _context12.sent;
                    this.confirmationDialogService.confirm('Confirm', WantDetete, YES, NO).then(function (confirmed) {
                      if (confirmed) {
                        if (CompanyOwnersStaging != null) {
                          _this16.disableOwnerInfo.push(CompanyOwnersStaging);
                        }
                      }
                    });
                    _context12.next = 17;
                    break;

                  case 15:
                    _iterator5 = _createForOfIteratorHelper(this.disableOwnerInfo);

                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        val = _step5.value;
                        userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                        jsonData = {};
                        jsonData.UserID = userLoginInfo.ID;
                        jsonData.Token = userLoginInfo.Token;
                        jsonData.ComUpdateRequestID = CompanyOwnersStaging;
                        jsonData.CompanyID = this.disableOwnerCompanyId;
                        jsonData.OwnerNameEN = val.OwnerNameEN;
                        jsonData.OwnerNameAR = val.OwnerNameAR;
                        jsonData.NationalityCode = val.Nationality;
                        outerJsonData = {};
                        outerJsonData.inputParameter = JSON.stringify(jsonData);
                        APIEndPoint = '';
                        APIEndPoint = 'api/CompanyManager/CompanyUpdateRequestDisableOwner';
                        this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData).then(function (result) {
                          _this16.resultOutput = result;
                        })["catch"](function (error) {
                          console.log("error ", error);
                        });
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }

                  case 17:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // Used for get list of staging company activity

      }, {
        key: "ListCompanyActivities",
        value: function ListCompanyActivities(cID) {
          var _this17 = this;

          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.CompanyID = cID;
          jsonData.Token = userLoginInfo.Token;
          var outerJsonData = {};
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.showCompanyActivitiesTable = false;
          this.noCompanyActivitiesStagingDetailsRecordsFound = true;
          this.apiCall.postAPICallWithToken('api/CompanyManager/ListCompanyActivities', outerJsonData).then(function (result) {
            _this17.CompanyActivitiesStagingDetails = result;

            if (_this17.CompanyActivitiesStagingDetails.length != 0) {
              _this17.noCompanyActivitiesStagingDetailsRecordsFound = false;
            }

            setTimeout(function () {
              _this17.showCompanyActivitiesTable = true;
            }, 200);
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for get list of staging company owner

      }, {
        key: "ListCompanyOwners",
        value: function ListCompanyOwners(cID) {
          var _this18 = this;

          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.CompanyID = cID;
          jsonData.Token = userLoginInfo.Token;
          var outerJsonData = {};
          outerJsonData.inputParameter = JSON.stringify(jsonData);
          this.showCompanyOwnersRequestTable = false;
          this.noCompanyOwnersStagingDetailsRecordsFound = true;
          this.apiCall.postAPICallWithToken('api/CompanyManager/ListCompanyOwners', outerJsonData).then(function (result) {
            _this18.CompanyOwnersStagingDetails = result;

            if (_this18.CompanyOwnersStagingDetails.length != 0) {
              _this18.noCompanyOwnersStagingDetailsRecordsFound = false;
            }

            setTimeout(function () {
              _this18.showCompanyOwnersRequestTable = true;
            }, 200);
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for check/unchecked add form term condition checkbox

      }, {
        key: "isCheck",
        value: function isCheck() {
          if (!this.reactiveFormName.value.checkAllCondition) {
            this.ischeckboxSelected = true;
          } else {
            this.ischeckboxSelected = false;
          }
        }
      }]);

      return AddcompanyComponent;
    }();

    AddcompanyComponent.ɵfac = function AddcompanyComponent_Factory(t) {
      return new (t || AddcompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["DateTimeAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogServiceService"]));
    };

    AddcompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddcompanyComponent,
      selectors: [["app-addcompany"]],
      decls: 390,
      vars: 299,
      consts: [[1, "page-wrapper", "add_company_blk", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "row", 3, "click"], [1, "col-12"], [1, "card"], [1, "card-header", "bg-info", "list_esit_bg_info"], ["class", "mb-0 text-white", 4, "ngIf"], [1, "card-body", "wizard-content"], [1, "progress_view", "steps_vehicle"], [1, "no"], [3, "active_block", "complte_section", 4, "ngIf"], [1, "validation-wizard", "wizard-circle", "mt-5", 3, "formGroup", "ngSubmit"], [1, "vehi_section"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "wfirstName2"], [1, "danger"], ["type", "text", "formControlName", "companyName", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "wlastName2"], ["type", "text", "formControlName", "companyNameAr", 1, "form-control", 3, "placeholder", "keypress"], ["for", "InsuranceNumber"], ["formControlName", "issuingAuthority", 1, "form-control"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "ExpiryDate"], ["formControlName", "emirate", 1, "form-control", 3, "change"], ["for", "PemitIssueDate"], ["type", "text", "formControlName", "permitIssueDate", "ngbDatepicker", "", "readonly", "", "disabled", "", 1, "form-control", "form_date", 3, "placeholder", "click"], ["permitIssueDatePicker", "ngbDatepicker"], ["for", "PermitExpiryDate"], ["type", "text", "formControlName", "permitExpiryDate", "ngbDatepicker", "", "readonly", "", "disabled", "", 1, "form-control", "form_date", 3, "placeholder", "click"], ["PermitExpiryDatePicker", "ngbDatepicker"], ["type", "text", "formControlName", "certificateNo", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["type", "text", "formControlName", "registerNo", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["type", "text", "formControlName", "fedregisterNo", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["type", "text", "id", "licenseNumber", "formControlName", "licenseNumber", 1, "form-control", 3, "placeholder", "readonly", "keypress"], ["formControlName", "issueDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder"], [3, "pickerType"], ["dt1", ""], ["formControlName", "expiryDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder"], ["dt2", ""], ["type", "text", "formControlName", "trnNo", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "faxNumber", 1, "form-control", 3, "placeholder", "keypress"], ["for", "Type"], ["type", "text", "formControlName", "managerName", 1, "form-control", 3, "placeholder", "keypress"], ["for", "PermitType"], ["type", "text", "formControlName", "managerNameAr", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "managerMobile", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "website", 1, "form-control", 3, "placeholder", "keypress"], [1, "col-md-12"], ["type", "text", "formControlName", "notes", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "street", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "city", 1, "form-control", 3, "placeholder", "keypress"], ["formControlName", "state", 1, "form-control"], ["type", "text", "formControlName", "zip", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "country", 1, "form-control", 3, "placeholder", "keypress"], ["class", "row add_company_row", 4, "ngIf"], [1, "row", "position-relative"], ["type", "button", 1, "btn", "theme-blue-btn", "add_company_xs", "add_com_owner_btn", 3, "click"], ["src", "../assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "row", "add_company_row"], [1, "col-12", "card", "add_company_tab_card"], [1, "table-responsive"], ["datatable", "", "class", "mytable", 3, "dtOptions", 4, "ngIf"], ["class", "col-12 card add_company_tab_card", 4, "ngIf"], ["class", "vehi_section", 3, "hide", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "fifth_block"], ["class", "row", 4, "ngIf"], [1, "form-group", "checkbox_label"], ["type", "checkbox", "id", "frmConfim", "formControlName", "checkAllCondition", 1, "material-inputs", "filled-in", "chk-col-light-blue", 3, "click"], ["for", "frmConfim", 1, "addCompany_label"], [1, "col-md-12", "vehicle_add_btn"], ["class", "previous_btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn next_btn sm-small-btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn next_btn sm-small-btn", "type", "submit", 4, "ngIf"], ["class", "rakta_login_blk", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "mb-0", "text-white"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "close", 3, "click"], ["datatable", "", 1, "mytable", 3, "dtOptions"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "theme-blue-btn", 3, "click"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"], ["type", "checkbox", "id", "frmConfim", "formControlName", "checkAllCondition", 1, "material-inputs", "filled-in", "chk-col-light-blue"], ["for", "frmConfim"], ["for", "document1"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "document1", "name", "document1", 1, "form-control", 3, "change"], ["class", "file_name", 3, "click", 4, "ngIf"], ["for", "document2"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "document2", "name", "document2", 1, "form-control", 3, "change"], [1, "file_name", 3, "click"], ["for", "document3"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "document3", "name", "document3", 1, "form-control", 3, "change"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "form-group", "attachment_section"], [1, "attach_lbl"], [1, "file_name", "text-center", 3, "click"], ["type", "button", 1, "previous_btn", 3, "click"], ["type", "button", 1, "btn", "next_btn", "sm-small-btn", 3, "click"], ["type", "submit", 1, "btn", "next_btn", "sm-small-btn"], [1, "rakta_login_blk"], [1, "login_container_blk"], ["src", "/assets/images/close_image.svg", "alt", "close image", 1, "close_img", 3, "click"], [1, "heading"], [1, "login_container", 3, "formGroup"], ["for", ""], ["type", "text", "formControlName", "ownerNameEN", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "ownerNameAR", 1, "form-control", 3, "placeholder", "keypress"], ["formControlName", "nationalityCode", 1, "form-control", 3, "change"], [1, "login_btn", 3, "click"], [2, "text-align", "left"], ["formControlName", "activityID", 3, "data", "searchKeyword", "placeholder", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["type", "text", "formControlName", "fees", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "activitieExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], [3, "innerHTML"]],
      template: function AddcompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddcompanyComponent_li_13_Template, 3, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddcompanyComponent_li_14_Template, 3, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddcompanyComponent_li_15_Template, 3, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddcompanyComponent_li_16_Template, 3, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddcompanyComponent_li_17_Template, 3, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_Template_div_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1388);

            var _r1185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](199);

            var _r1183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](186);

            _r1185.close();

            return _r1183.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddcompanyComponent_h4_22_Template, 3, 3, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddcompanyComponent_h4_23_Template, 3, 3, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddcompanyComponent_h4_24_Template, 3, 3, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddcompanyComponent_h4_25_Template, 3, 3, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddcompanyComponent_h6_43_Template, 5, 7, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddcompanyComponent_Template_form_ngSubmit_49_listener() {
            return ctx.onSubmitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_59_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddcompanyComponent_div_61_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_69_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AddcompanyComponent_div_71_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AddcompanyComponent_option_85_Template, 2, 2, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, AddcompanyComponent_div_86_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddcompanyComponent_Template_select_change_94_listener() {
            return ctx.hideActivitySection(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, AddcompanyComponent_option_99_Template, 2, 2, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, AddcompanyComponent_div_100_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_Template_input_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1388);

            var _r1174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](110);

            return _r1174.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](111, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, AddcompanyComponent_div_112_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](117, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_Template_input_click_120_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1388);

            var _r1176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](121);

            return _r1176.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](122, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, AddcompanyComponent_div_123_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](133, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_136_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](137, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, AddcompanyComponent_div_138_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](143, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_146_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, AddcompanyComponent_div_148_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_157_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, AddcompanyComponent_div_159_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](163, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](169, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_172_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](173, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](174, AddcompanyComponent_div_174_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, AddcompanyComponent_div_175_Template, 4, 6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](180, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](184, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "owl-date-time", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](187, AddcompanyComponent_div_187_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](193, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](197, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "owl-date-time", 46, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, AddcompanyComponent_div_200_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](205, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_207_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](208, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](209, AddcompanyComponent_div_209_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](215, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_217_listener($event) {
            return ctx.common.allow_numeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](218, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](219, AddcompanyComponent_div_219_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](224, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](230, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_233_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](234, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](235, AddcompanyComponent_div_235_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](240, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_243_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](244, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](245, AddcompanyComponent_div_245_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](251, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](255, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](256, AddcompanyComponent_div_256_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](261, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_264_listener($event) {
            return ctx.common.allow_numeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](265, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](266, AddcompanyComponent_div_266_Template, 5, 4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](272, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_273_listener($event) {
            return ctx.common.allow_special_character_for_website($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](274, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](280, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_281_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](282, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](283, AddcompanyComponent_div_283_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](287, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](293, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_296_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](297, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](298, AddcompanyComponent_div_298_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](303, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_306_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](307, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](308, AddcompanyComponent_div_308_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](314, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](320, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](321, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](322, AddcompanyComponent_option_322_Template, 2, 2, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](323, AddcompanyComponent_div_323_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](328, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_331_listener($event) {
            return ctx.common.allow_numeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](332, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](333, AddcompanyComponent_div_333_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](339, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_342_listener($event) {
            return ctx.common.allow_alphabet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](343, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](344, AddcompanyComponent_div_344_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](346, AddcompanyComponent_div_346_Template, 10, 8, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_Template_button_click_348_listener() {
            return ctx.AddCompanyOwner();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](352, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](357, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](360, AddcompanyComponent_table_360_Template, 14, 11, "table", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](361, AddcompanyComponent_div_361_Template, 6, 3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](362, AddcompanyComponent_section_362_Template, 17, 13, "section", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, " <");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](364, AddcompanyComponent_section_364_Template, 13, 10, "section", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](366, AddcompanyComponent_div_366_Template, 5, 3, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](368, AddcompanyComponent_div_368_Template, 21, 10, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](369, AddcompanyComponent_div_369_Template, 9, 4, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](370, AddcompanyComponent_div_370_Template, 2, 1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddcompanyComponent_Template_input_click_374_listener() {
            return ctx.isCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](377, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](378, AddcompanyComponent_div_378_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](382, AddcompanyComponent_button_382_Template, 3, 3, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](383, AddcompanyComponent_button_383_Template, 3, 3, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](384, AddcompanyComponent_button_384_Template, 3, 3, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](385, AddcompanyComponent_button_385_Template, 3, 3, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](386, AddcompanyComponent_button_386_Template, 3, 3, "button", 85);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](387, "app-globalfooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](388, AddcompanyComponent_div_388_Template, 46, 32, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](389, AddcompanyComponent_div_389_Template, 48, 35, "div", 86);
        }

        if (rf & 2) {
          var _r1183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](186);

          var _r1185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](199);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("checkboxSelected", ctx.ischeckboxSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](297, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 165, "Home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](298, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 167, "Company"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 3 || ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 1)("complte_section", ctx.activeSection >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 169, "BasicInfo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 2)("complte_section", ctx.activeSection >= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 171, "ContactDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == 3)("complte_section", ctx.activeSection >= 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 173, "CompanyOwner"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active_block", ctx.activeSection == ctx.dynamicTabNumber)("complte_section", ctx.activeSection >= ctx.dynamicTabNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dynamicTabNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 175, "Attachments"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 177, "CompanyNameEN"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 179, "CompanyNameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.requestFlag == 3 || ctx.requestFlag == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.companyName.touched || ctx.isFormSubmited) && ctx.f.companyName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 181, "CompanyNameAR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 183, "CompanyNameAR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.companyNameAr.touched || ctx.isFormSubmited) && ctx.f.companyNameAr.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 185, "IssuingAuthority"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 187, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 189, "IssuingAuthority"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.issuingAuthorityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.issuingAuthority.touched || ctx.isFormSubmited) && ctx.f.issuingAuthority.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 191, "Emirate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 193, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 195, "Emirate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emiratesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.emirate.touched || ctx.isFormSubmited) && ctx.f.emirate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 197, "PermitIssueDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](111, 199, "PermitIssueDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitIssueDate.touched || ctx.isFormSubmited) && ctx.f.permitIssueDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](117, 201, "PermitExpiryDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](122, 203, "PermitExpiryDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitExpiryDate.touched || ctx.isFormSubmited) && ctx.f.permitExpiryDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](127, 205, "BusinessNameInformation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](133, 207, "CertificateNumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](137, 209, "CertificateNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isgreatertherZeroCertificateNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.certificateNo.touched || ctx.isFormSubmited) && ctx.f.certificateNo.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](143, 211, "Regnumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 213, "Regnumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isgreatertherZeroRegnumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.registerNo.touched || ctx.isFormSubmited) && ctx.f.registerNo.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 215, "FederalRegistryNumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](158, 217, "FederalRegistryNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isgreatertherZeroFederalRegistryNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.fedregisterNo.touched || ctx.isFormSubmited) && ctx.f.fedregisterNo.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](163, 219, "LicenseInformation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](169, 221, "LicenseNember"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](173, 223, "LicenseNember"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isGreatertherZeroLicenseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.licenseNumber.touched || ctx.isFormSubmited) && ctx.f.licenseNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.licenseNumberValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](180, 225, "IssueDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](184, 227, "IssueDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1183)("owlDateTimeTrigger", _r1183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.issueDate.touched || ctx.isFormSubmited) && ctx.f.issueDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](193, 229, "ExpiryDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](197, 231, "ExpiryDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1185)("owlDateTimeTrigger", _r1185);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.expiryDate.touched || ctx.isFormSubmited) && ctx.f.expiryDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](205, 233, "TRNNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](208, 235, "TRNNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.trnNo.touched || ctx.isFormSubmited) && ctx.f.trnNo.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](215, 237, "FaxNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](218, 239, "FaxNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.faxNumber.touched || ctx.isFormSubmited) && ctx.f.faxNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](224, 241, "CeritificateDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](230, 243, "ManagerName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](234, 245, "ManagerName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.managerName.touched || ctx.isFormSubmited) && ctx.f.managerName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](240, 247, "ManagerNameInArabic"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](244, 249, "ManagerNameInArabic"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.managerNameAr.touched || ctx.isFormSubmited) && ctx.f.managerNameAr.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](251, 251, "EmailID"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](255, 253, "EmailID"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.email.touched || ctx.isFormSubmited) && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](261, 255, "ManagerMobile"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](265, 257, "ManagerMobile"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.managerMobile.touched || ctx.isFormSubmited) && ctx.f.managerMobile.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](272, 259, "Website"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](274, 261, "Website"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](280, 263, "Notes"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](282, 265, "Notes"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.notes.touched || ctx.isFormSubmited) && ctx.f.notes.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](287, 267, "AddressInformation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](293, 269, "Street"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](297, 271, "Street"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.street.touched || ctx.isFormSubmited) && ctx.f.street.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](303, 273, "City"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](307, 275, "City"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.city.touched || ctx.isFormSubmited) && ctx.f.city.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](314, 277, "Emirate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](320, 279, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](321, 281, "Emirate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emiratesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.state.touched || ctx.isFormSubmited) && ctx.f.state.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](328, 283, "Zip"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](332, 285, "Zip"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.zip.touched || ctx.isFormSubmited) && ctx.f.zip.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](339, 287, "CountryRegion"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](343, 289, "CountryRegion"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.country.touched || ctx.isFormSubmited) && ctx.f.country.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCompanyOwnerListTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](352, 291, "AddCompanyOwner"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](357, 293, "NewlyAddedOwners"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidetable", ctx.noNewAddedCompanyOwnersStagingDetailsRecordsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCompanyOwnersRequestTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noNewAddedCompanyOwnersStagingDetailsRecordsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection == 4 && !ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx.activeSection != 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAttachments);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAttachments);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAttachments);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](377, 295, "ConfirmAddVehicleMsg"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.checkAllCondition.touched || ctx.isFormSubmited) && ctx.f.checkAllCondition.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection < 4 && !ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection < 5 && ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection == 4 && !ctx.showCompanyActivitiessection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSection == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.iShowCompanyOwnersPopup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.iShowCompanyActivitiesPopup);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbInputDatepicker"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_13__["GlobalfooterComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTableDirective"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__["AutocompleteComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvYWRkY29tcGFueS9hZGRjb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddcompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-addcompany',
          templateUrl: './addcompany.component.html',
          styleUrls: ['./addcompany.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["DateTimeAdapter"]
        }, {
          type: _common_confirmdialog_confirmation_dialog_service_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/company/addcompany/addcompany.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/company/addcompany/addcompany.module.ts ***!
    \***************************************************************/

  /*! exports provided: AddcompanyModule */

  /***/
  function srcAppPagesCompanyAddcompanyAddcompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcompanyModule", function () {
      return AddcompanyModule;
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


    var _addcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addcompany-routing.module */
    "./src/app/pages/company/addcompany/addcompany-routing.module.ts");
    /* harmony import */


    var _addcompany_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addcompany.component */
    "./src/app/pages/company/addcompany/addcompany.component.ts");
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


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");

    var AddcompanyModule = function AddcompanyModule() {
      _classCallCheck(this, AddcompanyModule);
    };

    AddcompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddcompanyModule
    });
    AddcompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddcompanyModule_Factory(t) {
        return new (t || AddcompanyModule)();
      },
      providers: [// use french locale
      {
        provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OWL_DATE_TIME_LOCALE"],
        useValue: 'us'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _addcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddcompanyModule, {
        declarations: [_addcompany_component__WEBPACK_IMPORTED_MODULE_3__["AddcompanyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _addcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_addcompany_component__WEBPACK_IMPORTED_MODULE_3__["AddcompanyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _addcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]],
          providers: [// use french locale
          {
            provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OWL_DATE_TIME_LOCALE"],
            useValue: 'us'
          }]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-company-addcompany-addcompany-module-es5.js.map