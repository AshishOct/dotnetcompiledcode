function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-listcompanypayments-listcompanypayments-module"], {
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
  "./src/app/pages/company/listcompanypayments/listcompanypayments-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/company/listcompanypayments/listcompanypayments-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ListcompanypaymentsRoutingModule */

  /***/
  function srcAppPagesCompanyListcompanypaymentsListcompanypaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListcompanypaymentsRoutingModule", function () {
      return ListcompanypaymentsRoutingModule;
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


    var _listcompanypayments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listcompanypayments.component */
    "./src/app/pages/company/listcompanypayments/listcompanypayments.component.ts");

    var routes = [{
      path: '',
      component: _listcompanypayments_component__WEBPACK_IMPORTED_MODULE_2__["ListcompanypaymentsComponent"]
    }];

    var ListcompanypaymentsRoutingModule = function ListcompanypaymentsRoutingModule() {
      _classCallCheck(this, ListcompanypaymentsRoutingModule);
    };

    ListcompanypaymentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListcompanypaymentsRoutingModule
    });
    ListcompanypaymentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListcompanypaymentsRoutingModule_Factory(t) {
        return new (t || ListcompanypaymentsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListcompanypaymentsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListcompanypaymentsRoutingModule, [{
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
  "./src/app/pages/company/listcompanypayments/listcompanypayments.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/company/listcompanypayments/listcompanypayments.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ListcompanypaymentsComponent */

  /***/
  function srcAppPagesCompanyListcompanypaymentsListcompanypaymentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListcompanypaymentsComponent", function () {
      return ListcompanypaymentsComponent;
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


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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


    var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.component */
    "./src/app/pages/common/globalheader/globalheader.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.component */
    "./src/app/pages/common/globalfooter/globalfooter.component.ts");

    function ListcompanypaymentsComponent_div_5_table_1_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r1543 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListcompanypaymentsComponent_div_5_table_1_tr_17_Template_img_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1543);

          var cmpypayments_r1541 = ctx.$implicit;

          var ctx_r1542 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1542.printcompanyData(cmpypayments_r1541);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cmpypayments_r1541 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cmpypayments_r1541.CompanyID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cmpypayments_r1541.PaymentReferenceID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cmpypayments_r1541.TotalAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cmpypayments_r1541.PaymentDate);
      }
    }

    function ListcompanypaymentsComponent_div_5_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 8);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListcompanypaymentsComponent_div_5_table_1_tr_17_Template, 11, 4, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1539 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1539.dtOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "CompanyId"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "PaymentReferenceId"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "TotalAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 12, "PaymentDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1539.listOfCompanyPayments);
      }
    }

    function ListcompanypaymentsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListcompanypaymentsComponent_div_5_table_1_Template, 18, 14, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1537 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1537.showListTable);
      }
    }

    function ListcompanypaymentsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

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

    var ListcompanypaymentsComponent =
    /*#__PURE__*/
    function () {
      function ListcompanypaymentsComponent(router, apiCall, common, translate) {
        _classCallCheck(this, ListcompanypaymentsComponent);

        this.router = router;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.dtOptions = {
          order: [[1, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedLang = "";
        this.amount = "";
        this.listOfCompanyPayments = [];
        this.selectedCompanyInfo = {};
        this.companyList = [];
        this.comapnyPrintDataforLatter = [];
        this.noRecordsFound = false;
        this.showListTable = true;
      }

      _createClass(ListcompanypaymentsComponent, [{
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
                    this.getListOfCompanyPayments();
                    this.onChangeOfCompany();
                    _context.t0 = [[0, 'desc']];
                    _context.next = 7;
                    return this.translate.get('NoDataAvailable').toPromise();

                  case 7:
                    _context.t1 = _context.sent;
                    _context.next = 10;
                    return this.translate.get('Search').toPromise();

                  case 10:
                    _context.t2 = _context.sent;
                    _context.next = 13;
                    return this.translate.get('Information').toPromise();

                  case 13:
                    _context.t3 = _context.sent;
                    _context.next = 16;
                    return this.translate.get('infoFiltered').toPromise();

                  case 16:
                    _context.t4 = _context.sent;
                    _context.next = 19;
                    return this.translate.get('infoEmpty').toPromise();

                  case 19:
                    _context.t5 = _context.sent;
                    _context.next = 22;
                    return this.translate.get('lengthMenu').toPromise();

                  case 22:
                    _context.t6 = _context.sent;
                    _context.next = 25;
                    return this.translate.get('First').toPromise();

                  case 25:
                    _context.t7 = _context.sent;
                    _context.next = 28;
                    return this.translate.get('Last').toPromise();

                  case 28:
                    _context.t8 = _context.sent;
                    _context.next = 31;
                    return this.translate.get('Next').toPromise();

                  case 31:
                    _context.t9 = _context.sent;
                    _context.next = 34;
                    return this.translate.get('Previous').toPromise();

                  case 34:
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

                  case 38:
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
          var _this2 = this;

          this.subscription = this.common.getContent().subscribe(function (msg) {
            var selectedCompanyInfo = _this2.common.getValueFromSessionStorage('selectedCompanyInfo');

            if (selectedCompanyInfo != null) {
              _this2.getListOfCompanyPayments();
            }
          });
        } // Used for get list of company payments

      }, {
        key: "getListOfCompanyPayments",
        value: function getListOfCompanyPayments() {
          var _this3 = this;

          var selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.UserID = userLoginInfo.ID;
          jsonData.CompanyID = selectedCompanyInfo.CompanyID;
          jsonData.Token = userLoginInfo.Token;
          this.showListTable = false;
          this.noRecordsFound = false;
          this.apiCall.postAPICallWithToken('api/CompanyManager/getCompanyPaymentsList', jsonData).then(function (result) {
            if (result.Message) {
              _this3.common.showSussessFailureMessage(2, result.Message);
            } else {
              _this3.listOfCompanyPayments = result;

              if (_this3.listOfCompanyPayments.length == 0) {
                _this3.noRecordsFound = true;
              }
            }

            _this3.showListTable = true;
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for Print Functionality

      }, {
        key: "printcompanyData",
        value: function printcompanyData(details) {
          var _this4 = this;

          var userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
          var jsonData = {};
          jsonData.CompanyID = details.CompanyID;
          jsonData.PaymentReferenceID = details.PaymentReferenceID;
          jsonData.UserID = userLoginInfo.ID;
          jsonData.Token = userLoginInfo.Token;
          this.apiCall.postAPICallWithToken('api/CompanyManager/CompanyPaymentReceipt', jsonData).then(function (result) {
            _this4.comapnyPrintDataforLatter = result;

            _this4.common.setValueToSessionStorage('comapnyPrintDataforLatter', _this4.comapnyPrintDataforLatter);

            _this4.router.navigate([]).then(function (result) {
              window.open('/print/invoice', '_blank');
            });
          })["catch"](function (error) {
            console.log("error ", error);
          });
        }
      }]);

      return ListcompanypaymentsComponent;
    }();

    ListcompanypaymentsComponent.ɵfac = function ListcompanypaymentsComponent_Factory(t) {
      return new (t || ListcompanypaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]));
    };

    ListcompanypaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListcompanypaymentsComponent,
      selectors: [["app-listcompanypayments"]],
      viewQuery: function ListcompanypaymentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
        }
      },
      decls: 8,
      vars: 3,
      consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], [1, "row"], [1, "col-12", "card", "add_company_tab_card"], ["class", "table-responsive", 4, "ngIf"], ["class", "col-md-12 p-0", 4, "ngIf"], [1, "table-responsive"], ["datatable", "", "class", "mytable", 3, "dtOptions", 4, "ngIf"], ["datatable", "", 1, "mytable", 3, "dtOptions"], [4, "ngFor", "ngForOf"], ["src", "assets/images/printer_icon.svg", "alt", "search_images", 1, "cursorpointer", 3, "click"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"]],
      template: function ListcompanypaymentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-globalheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListcompanypaymentsComponent_div_5_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListcompanypaymentsComponent_div_6_Template, 5, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-globalfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noRecordsFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noRecordsFound);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_10__["GlobalfooterComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvbGlzdGNvbXBhbnlwYXltZW50cy9saXN0Y29tcGFueXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListcompanypaymentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-listcompanypayments',
          templateUrl: './listcompanypayments.component.html',
          styleUrls: ['./listcompanypayments.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      }, {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/company/listcompanypayments/listcompanypayments.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/company/listcompanypayments/listcompanypayments.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ListcompanypaymentsModule */

  /***/
  function srcAppPagesCompanyListcompanypaymentsListcompanypaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListcompanypaymentsModule", function () {
      return ListcompanypaymentsModule;
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


    var _listcompanypayments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listcompanypayments-routing.module */
    "./src/app/pages/company/listcompanypayments/listcompanypayments-routing.module.ts");
    /* harmony import */


    var _listcompanypayments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listcompanypayments.component */
    "./src/app/pages/company/listcompanypayments/listcompanypayments.component.ts");
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


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/globalheader/globalheader.module */
    "./src/app/pages/common/globalheader/globalheader.module.ts");
    /* harmony import */


    var _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/globalfooter/globalfooter.module */
    "./src/app/pages/common/globalfooter/globalfooter.module.ts");

    var ListcompanypaymentsModule = function ListcompanypaymentsModule() {
      _classCallCheck(this, ListcompanypaymentsModule);
    };

    ListcompanypaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListcompanypaymentsModule
    });
    ListcompanypaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListcompanypaymentsModule_Factory(t) {
        return new (t || ListcompanypaymentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listcompanypayments_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListcompanypaymentsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListcompanypaymentsModule, {
        declarations: [_listcompanypayments_component__WEBPACK_IMPORTED_MODULE_3__["ListcompanypaymentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listcompanypayments_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListcompanypaymentsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListcompanypaymentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_listcompanypayments_component__WEBPACK_IMPORTED_MODULE_3__["ListcompanypaymentsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listcompanypayments_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListcompanypaymentsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-company-listcompanypayments-listcompanypayments-module-es5.js.map