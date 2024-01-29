function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-linkexistingcompany-linkexistingcompany-module"], {
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
  "./src/app/pages/company/linkexistingcompany/linkexistingcompany-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/company/linkexistingcompany/linkexistingcompany-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: LinkexistingcompanyRoutingModule */

  /***/
  function srcAppPagesCompanyLinkexistingcompanyLinkexistingcompanyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkexistingcompanyRoutingModule", function () {
      return LinkexistingcompanyRoutingModule;
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


    var _linkexistingcompany_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./linkexistingcompany.component */
    "./src/app/pages/company/linkexistingcompany/linkexistingcompany.component.ts");

    var routes = [{
      path: '',
      component: _linkexistingcompany_component__WEBPACK_IMPORTED_MODULE_2__["LinkexistingcompanyComponent"]
    }];

    var LinkexistingcompanyRoutingModule = function LinkexistingcompanyRoutingModule() {
      _classCallCheck(this, LinkexistingcompanyRoutingModule);
    };

    LinkexistingcompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LinkexistingcompanyRoutingModule
    });
    LinkexistingcompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LinkexistingcompanyRoutingModule_Factory(t) {
        return new (t || LinkexistingcompanyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkexistingcompanyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkexistingcompanyRoutingModule, [{
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
  "./src/app/pages/company/linkexistingcompany/linkexistingcompany.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/company/linkexistingcompany/linkexistingcompany.component.ts ***!
    \************************************************************************************/

  /*! exports provided: LinkexistingcompanyComponent */

  /***/
  function srcAppPagesCompanyLinkexistingcompanyLinkexistingcompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkexistingcompanyComponent", function () {
      return LinkexistingcompanyComponent;
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


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
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

    function LinkexistingcompanyComponent_h2_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CreateNewUserCompanyMapping"));
      }
    }

    function LinkexistingcompanyComponent_h2_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "UpdateNewUserCompanyMapping"));
      }
    }

    function LinkexistingcompanyComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r858 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_div_34_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r858);

          var ctx_r857 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r857.common.mesage.showMessage = !ctx_r857.common.mesage.showMessage;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r850 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r850.common.mesage["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r850.common.mesage.mesage);
      }
    }

    function LinkexistingcompanyComponent_option_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emer_r859 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", emer_r859.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", emer_r859.Name, " ");
      }
    }

    function LinkexistingcompanyComponent_div_54_div_1_Template(rf, ctx) {
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

    function LinkexistingcompanyComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkexistingcompanyComponent_div_54_div_1_Template, 4, 6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r852 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r852.f.emirates.errors.required);
      }
    }

    function LinkexistingcompanyComponent_div_64_div_1_Template(rf, ctx) {
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

    function LinkexistingcompanyComponent_div_64_div_2_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "LicenseNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "ShouldNotBeMoreThan"), " 250 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Characters"), " ");
      }
    }

    function LinkexistingcompanyComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkexistingcompanyComponent_div_64_div_1_Template, 4, 6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LinkexistingcompanyComponent_div_64_div_2_Template, 5, 9, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r853 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r853.f.licenseNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r853.f.licenseNumber.errors.maxlength);
      }
    }

    function LinkexistingcompanyComponent_option_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ial_r863 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ial_r863.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ial_r863.Name, " ");
      }
    }

    function LinkexistingcompanyComponent_section_95_div_9_div_1_Template(rf, ctx) {
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

    function LinkexistingcompanyComponent_section_95_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkexistingcompanyComponent_section_95_div_9_div_1_Template, 4, 6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r864 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r864.f.file1.errors.required);
      }
    }

    function LinkexistingcompanyComponent_section_95_label_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r873 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_section_95_label_10_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r873);

          var ctx_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r872.downloadFile(ctx_r872.reactiveFormName.value.file1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r865 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r865.reactiveFormName.value.file1.FileName);
      }
    }

    function LinkexistingcompanyComponent_section_95_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "TradingLicense"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function LinkexistingcompanyComponent_section_95_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkexistingcompanyComponent_section_95_div_18_div_1_Template, 4, 6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r866 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r866.f.file2.errors.required);
      }
    }

    function LinkexistingcompanyComponent_section_95_label_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r876 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_section_95_label_19_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r876);

          var ctx_r875 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r875.downloadFile(ctx_r875.reactiveFormName.value.file2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r867 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r867.reactiveFormName.value.file2.FileName);
      }
    }

    function LinkexistingcompanyComponent_section_95_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ResidenceVisa"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
      }
    }

    function LinkexistingcompanyComponent_section_95_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkexistingcompanyComponent_section_95_div_27_div_1_Template, 4, 6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r868 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r868.f.file3.errors.required);
      }
    }

    function LinkexistingcompanyComponent_section_95_label_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r879 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_section_95_label_28_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r879);

          var ctx_r878 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r878.downloadFile(ctx_r878.reactiveFormName.value.file3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r869 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r869.reactiveFormName.value.file3.FileName);
      }
    }

    function LinkexistingcompanyComponent_section_95_label_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r881 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_section_95_label_36_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r881);

          var ctx_r880 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r880.downloadFile(ctx_r880.reactiveFormName.value.file4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r870 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r870.reactiveFormName.value.file4.FileName);
      }
    }

    function LinkexistingcompanyComponent_section_95_Template(rf, ctx) {
      if (rf & 1) {
        var _r883 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LinkexistingcompanyComponent_section_95_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r883);

          var ctx_r882 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r882.onChange($event, "file1");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LinkexistingcompanyComponent_section_95_div_9_Template, 2, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LinkexistingcompanyComponent_section_95_label_10_Template, 2, 1, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LinkexistingcompanyComponent_section_95_Template_input_change_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r883);

          var ctx_r884 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r884.onChange($event, "file2");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LinkexistingcompanyComponent_section_95_div_18_Template, 2, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LinkexistingcompanyComponent_section_95_label_19_Template, 2, 1, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LinkexistingcompanyComponent_section_95_Template_input_change_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r883);

          var ctx_r885 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r885.onChange($event, "file3");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LinkexistingcompanyComponent_section_95_div_27_Template, 2, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LinkexistingcompanyComponent_section_95_label_28_Template, 2, 1, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LinkexistingcompanyComponent_section_95_Template_input_change_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r883);

          var ctx_r886 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r886.onChange($event, "file4");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LinkexistingcompanyComponent_section_95_label_36_Template, 2, 1, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r855 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, "EmiratesID"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.f.file1.touched && ctx_r855.f.file1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.reactiveFormName.value.file1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 13, "TradingLicense"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.f.file2.touched && ctx_r855.f.file2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.reactiveFormName.value.file2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 15, "ResidenceVisa"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.f.file3.touched && ctx_r855.f.file3.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.reactiveFormName.value.file3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 17, "Other"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r855.reactiveFormName.value.file4);
      }
    }

    function LinkexistingcompanyComponent_table_112_tr_22_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 62);
      }
    }

    function LinkexistingcompanyComponent_table_112_tr_22_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 62);
      }
    }

    function LinkexistingcompanyComponent_table_112_tr_22_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 62);
      }
    }

    function LinkexistingcompanyComponent_table_112_tr_22_td_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r895 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_table_112_tr_22_td_14_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r895);

          var company_r888 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r893 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r893.navigateToUpdatePage(company_r888);
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

    function LinkexistingcompanyComponent_table_112_tr_22_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LinkexistingcompanyComponent_table_112_tr_22_td_11_Template, 1, 0, "td", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LinkexistingcompanyComponent_table_112_tr_22_td_12_Template, 1, 0, "td", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LinkexistingcompanyComponent_table_112_tr_22_td_13_Template, 1, 0, "td", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LinkexistingcompanyComponent_table_112_tr_22_td_14_Template, 4, 3, "td", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r888 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r888.CompanyID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r888.CompanyNameEN);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r888.CompanyNameAR);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r888.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r888.Comments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", company_r888.Status === "Approved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", company_r888.Status === "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", company_r888.Status === "Under Approval");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", company_r888.Status === "Need More Information");
      }
    }

    function LinkexistingcompanyComponent_table_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 58);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LinkexistingcompanyComponent_table_112_tr_22_Template, 15, 9, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r856 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r856.dtOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "CompanyId"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "CompanyNameEN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "CompanyNameAR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 14, "Status"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "Comments"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 18, "Action"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r856.listExestingCompany);
      }
    }

    var _c0 = function _c0() {
      return ["/company/listcompany"];
    };

    var _c1 = function _c1() {
      return ["/company/linkexistingcompany"];
    };

    var LinkexistingcompanyComponent =
    /*#__PURE__*/
    function () {
      function LinkexistingcompanyComponent(router, formBuilder, apiCall, common, translate, el, sanitizer) {
        _classCallCheck(this, LinkexistingcompanyComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.sanitizer = sanitizer;
        this.dtOptions = {
          order: [[1, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.issuingAuthorityList = [];
        this.emiratesList = [];
        this.userLoginDetails = [];
        this.selectedLang = "";
        this.listExestingCompany = [];
        this.companyList = [];
        this.selectedCompanyInfo = {};
        this.showDocumentSection = true;
        this.showTable = true;
        this.mesage = {}; //upload document method
        //readonly file1SubjectName: string = 'Business Name License';
        //readonly file2SubjectName: string = 'Passport';
        //readonly file3SubjectName: string = 'Other';
        //readonly file4SubjectName: string = 'Emirates Id';
        //readonly file5SubjectName: string = 'Generic';

        this.file1SubjectName = 'Emirates Id';
        this.file2SubjectName = 'Trading License';
        this.file3SubjectName = 'Residence Visa';
        this.file4SubjectName = 'Others';
      }

      _createClass(LinkexistingcompanyComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Do not forget to unsubscribe the event
          this.dtTrigger.unsubscribe();
        }
      }, {
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
                    _context.t0 = [[0, 'desc']];
                    _context.next = 5;
                    return this.translate.get('First').toPromise();

                  case 5:
                    _context.t1 = _context.sent;
                    _context.next = 8;
                    return this.translate.get('Last').toPromise();

                  case 8:
                    _context.t2 = _context.sent;
                    _context.next = 11;
                    return this.translate.get('Next').toPromise();

                  case 11:
                    _context.t3 = _context.sent;
                    _context.next = 14;
                    return this.translate.get('Previous').toPromise();

                  case 14:
                    _context.t4 = _context.sent;
                    _context.t5 = {
                      "first": _context.t1,
                      "last": _context.t2,
                      "next": _context.t3,
                      "previous": _context.t4
                    };
                    _context.next = 18;
                    return this.translate.get('infoEmpty').toPromise();

                  case 18:
                    _context.t6 = _context.sent;
                    _context.next = 21;
                    return this.translate.get('infoFiltered').toPromise();

                  case 21:
                    _context.t7 = _context.sent;
                    _context.next = 24;
                    return this.translate.get('Search').toPromise();

                  case 24:
                    _context.t8 = _context.sent;
                    _context.next = 27;
                    return this.translate.get('NoDataAvailable').toPromise();

                  case 27:
                    _context.t9 = _context.sent;
                    _context.next = 30;
                    return this.translate.get('Information').toPromise();

                  case 30:
                    _context.t10 = _context.sent;
                    _context.next = 33;
                    return this.translate.get('lengthMenu').toPromise();

                  case 33:
                    _context.t11 = _context.sent;
                    _context.t12 = {
                      "paginate": _context.t5,
                      "infoEmpty": _context.t6,
                      "infoFiltered": _context.t7,
                      "search": _context.t8,
                      "zeroRecords": _context.t9,
                      "info": _context.t10,
                      "lengthMenu": _context.t11
                    };
                    this.dtOptions = {
                      order: _context.t0,
                      language: _context.t12
                    };
                    this.reactiveFormName = this.formBuilder.group({
                      ID: [null],
                      emirates: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      licenseNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]],
                      comapanyNameEN: [''],
                      comapanyNameAR: [''],
                      issuingAuth: [''],
                      file1: [null],
                      file2: [null],
                      file3: [null],
                      file4: [null] //file5: [null],

                    });
                    this.userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
                    this.initMasterData();

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
            var companyList, selectedCompanyInfo;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.common.mesage = {};
                    _context2.next = 3;
                    return this.listCompanyLinking();

                  case 3:
                    this.userLoginDetails = this.common.getValueFromSessionStorage('userLoginInfo');
                    _context2.next = 6;
                    return this.getEmiratesList();

                  case 6:
                    _context2.next = 8;
                    return this.listIssuingAuthority();

                  case 8:
                    companyList = this.common.getValueFromSessionStorage('companyList');

                    if (companyList != null) {
                      selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');

                      if (selectedCompanyInfo != null) {
                        this.selectedCompanyInfo = selectedCompanyInfo;
                      } else {
                        if (companyList.length > 0) {
                          this.onChangeOfCompany(companyList[0]);
                          this.selectedCompanyInfo = selectedCompanyInfo;
                        }
                      }

                      this.companyList = companyList;
                    }

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onChangeOfCompany",
        value: function onChangeOfCompany(company) {
          this.common.setValueToSessionStorage('selectedCompanyInfo', company);
          this.selectedCompanyInfo = company;
        } // convenience getter for easy access to form fields

      }, {
        key: "f",
        get: function get() {
          return this.reactiveFormName.controls;
        } // Used for navigate to company list page

      }, {
        key: "navigateToCompanyListPage",
        value: function navigateToCompanyListPage() {
          this.router.navigateByUrl('/company/listcompany');
        } // Used for get list of exesting company name list for linking

      }, {
        key: "listCompanyLinking",
        value: function listCompanyLinking() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var jsonData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    jsonData = {};
                    jsonData.UserID = this.userLoginDetails.ID;
                    jsonData.EmiratesID = this.userLoginDetails.EmiratesID;
                    jsonData.Token = this.userLoginDetails.Token;
                    this.showTable = false;
                    _context3.next = 7;
                    return this.apiCall.postAPICallWithToken('api/CompanyManager/listCompanyLinking', jsonData).then(function (result) {
                      _this2.listExestingCompany = result;
                      _this2.showTable = true;
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // This fuction is used for get Emirates List

      }, {
        key: "getEmiratesList",
        value: function getEmiratesList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.apiCall.postEnquiryAPICallWithToken('api/EnquiryManager/getEmiratesList', {}).then(function (result) {
                      _this3.emiratesList = result;

                      _this3.listIssuingAuthority();
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Used for Submit the ass new user comapany mapping form

      }, {
        key: "onSubmitForm",
        value: function onSubmitForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var jsonData, endPoint;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.mesage = {};

                    if (!this.reactiveFormName.invalid) {
                      _context5.next = 5;
                      break;
                    }

                    this.reactiveFormName.markAllAsTouched();
                    this.common.autoFocusOnErrorFieldInRecativeForm(this.reactiveFormName, this.el);
                    return _context5.abrupt("return");

                  case 5:
                    jsonData = {};
                    jsonData.UserID = this.userLoginDetails.ID;
                    jsonData.EmiratesID = this.userLoginDetails.EmiratesID;
                    jsonData.CompanyNameEN = this.reactiveFormName.value.comapanyNameEN;
                    jsonData.CompanyNameAR = this.reactiveFormName.value.comapanyNameAR;
                    jsonData.LicenseNumber = this.reactiveFormName.value.licenseNumber;
                    jsonData.IssuingAuthority = this.reactiveFormName.value.issuingAuth;
                    jsonData.CompanyEmirate = this.reactiveFormName.value.emirates;
                    jsonData.Token = this.userLoginDetails.Token;
                    endPoint = '';

                    if (this.reactiveFormName.value.ID != null) {
                      jsonData.ID = this.reactiveFormName.value.ID;
                      endPoint = 'api/CompanyManager/CompanyLinkingUpdate';
                    } else {
                      endPoint = 'api/CompanyManager/addCompanyLinking';
                    }

                    _context5.next = 18;
                    return this.apiCall.postAPICallWithToken(endPoint, jsonData).then(function (result) {
                      if (result.Message) {
                        _this4.common.showSussessFailureMessage(2, result.Message);
                      } else {
                        _this4.onSubmitOfAttchmentForm(result.ID);
                      }
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onSubmitOfAttchmentForm",
        value: function onSubmitOfAttchmentForm(ID) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var file;
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
                    file = this.reactiveFormName.value.file1;

                    if (!(file != null)) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 6;
                    return this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file1SubjectName);

                  case 6:
                    file = this.reactiveFormName.value.file2;

                    if (!(file != null)) {
                      _context6.next = 10;
                      break;
                    }

                    _context6.next = 10;
                    return this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file2SubjectName);

                  case 10:
                    file = this.reactiveFormName.value.file3;

                    if (!(file != null)) {
                      _context6.next = 14;
                      break;
                    }

                    _context6.next = 14;
                    return this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file3SubjectName);

                  case 14:
                    file = this.reactiveFormName.value.file4;

                    if (!(file != null)) {
                      _context6.next = 18;
                      break;
                    }

                    _context6.next = 18;
                    return this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file4SubjectName);

                  case 18:
                    //file = this.reactiveFormName.value.file5;
                    //if (file != null) {
                    //  await this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file5SubjectName);
                    //}
                    //this.apiCall.spinner.hide();
                    if (this.reactiveFormName.value.ID != null) {
                      this.common.showSussessFailureMessage(1, 'Company Link Updated Successfully and Submitted for Approval', false);
                    } else {
                      this.common.showSussessFailureMessage(1, 'Company Link Added Successfully and Submitted for Approval', false);
                    }

                    this.showDocumentSection = false;
                    setTimeout(function () {
                      _this5.showDocumentSection = true;
                    }, 300);
                    this.reactiveFormName.reset();
                    this.listCompanyLinking();

                  case 23:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // API calling for upload Document

      }, {
        key: "uplaodAttachmentToServerOneByOne",
        value: function uplaodAttachmentToServerOneByOne(CompanyLinkingID, file, loader) {
          var Subject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Attachment';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var userLoginInfo, jsonData, fileData, APIEndPoint;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(CompanyLinkingID == null || CompanyLinkingID == '')) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 2:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.Token = userLoginInfo.Token;
                    jsonData.Subject = Subject;
                    jsonData.CompanyLinkingID = CompanyLinkingID;
                    jsonData.FileName = file.FileName;
                    fileData = file.Data.split('base64,');

                    if (fileData.length > 1) {
                      jsonData.Data = fileData[1];
                    } else {
                      jsonData.Data = file.Data;
                    }

                    APIEndPoint = 'api/CompanyManager/CompanyLinkingAttachment'; //if (file.AttachmentID) {
                    //  jsonData.AttachmentID = file.AttachmentID;
                    //  APIEndPoint = 'api/CompanyManager/UpdateCompanyLinkingAttachment';
                    //}

                    _context7.next = 14;
                    return this.apiCall.postAPICallWithToken(APIEndPoint, jsonData, loader).then(function (result) {})["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onChange",
        value: function onChange(event, keyIndex) {
          var _this6 = this;

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

              _this6.reactiveFormName.controls[keyIndex].setValue(json);
            };
          }
        } // Used for download file

      }, {
        key: "downloadFile",
        value: function downloadFile(json) {
          this.common.downloadFile(json);
        } // Used for navigate to update screen

      }, {
        key: "navigateToUpdatePage",
        value: function navigateToUpdatePage(company) {
          this.assighUpdateDataToForm(company);
        } // Used for navigate to data to form

      }, {
        key: "assighUpdateDataToForm",
        value: function assighUpdateDataToForm(company) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.reactiveFormName.reset();
                    this.reactiveFormName.controls['emirates'].setValue(company.CompanyEmirate);
                    this.reactiveFormName.controls['licenseNumber'].setValue(company.LicenseNumber);
                    this.reactiveFormName.controls['comapanyNameEN'].setValue(company.CompanyNameEN);
                    this.reactiveFormName.controls['comapanyNameAR'].setValue(company.CompanyNameAR);
                    this.reactiveFormName.controls['issuingAuth'].setValue(company.IssuingAuthority);
                    this.reactiveFormName.controls['ID'].setValue(company.ID);
                    window.scrollTo(0, 0);
                    _context8.next = 10;
                    return this.getViewCompanyLinkingAttachmentsList(company.ID, true);

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // Used for get list of Issuing Authority

      }, {
        key: "listIssuingAuthority",
        value: function listIssuingAuthority() {
          var _this7 = this;

          this.apiCall.postAPICallWithToken('api/CompanyManager/listIssuingAuthority', {}).then(function (result) {
            _this7.issuingAuthorityList = result;
          })["catch"](function (error) {
            console.log("error ", error);
          });
        } // Used for get list of View Vehicle Attachments Issuing Authority

      }, {
        key: "getViewCompanyLinkingAttachmentsList",
        value: function getViewCompanyLinkingAttachmentsList(id) {
          var loader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            var userLoginInfo, outerJsonData, jsonData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
                    outerJsonData = {};
                    jsonData = {};
                    jsonData.UserID = userLoginInfo.ID;
                    jsonData.CompanyLinkingID = id;
                    jsonData.Token = userLoginInfo.Token;
                    outerJsonData.inputParameter = JSON.stringify(jsonData);
                    _context9.next = 9;
                    return this.apiCall.postAPICallWithToken('api/CompanyManager/ViewCompanyLinkingAttachments', outerJsonData, loader).then(function (result) {
                      _this8.assignAttachmentToFrom(result);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } //assignAttachmentToFrom(result: any[]) {
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
        //  //indexArray = result.filter(value => value.Subject == this.file5SubjectName);
        //  //if (indexArray.length > 0) {
        //  //  let val = indexArray[0];
        //  //  let json: any = {}
        //  //  json.FileName = val.FileName;
        //  //  json.Data = val.Data;
        //  //  json.AttachmentID = val.AttachmentID
        //  //  json.attachment = 'data:image/jpg;base64,' + val.Data;
        //  //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
        //  //  this.reactiveFormName.controls['file5'].setValue(json);
        //  //}
        //}
        // Used for assign attachment to form

      }, {
        key: "assignAttachmentToFrom",
        value: function assignAttachmentToFrom(result) {
          //let indexArray = result.filter(value => value.Subject == this.file1SubjectName);
          if (result.length >= 1) {
            var indexArray = result[0];
            var val = indexArray;
            var json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.reactiveFormName.controls['file1'].setValue(json);
          }
          /*indexArray = result.filter(value => value.Subject == this.file2SubjectName);*/


          if (result.length >= 2) {
            var _indexArray = result[1];
            var _val = _indexArray;
            var _json = {};
            _json.FileName = _val.FileName;
            _json.Data = _val.Data;
            _json.AttachmentID = _val.AttachmentID;
            _json.attachment = 'data:image/jpg;base64,' + _val.Data;
            _json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json.attachment);
            this.reactiveFormName.controls['file2'].setValue(_json);
          } //indexArray = result.filter(value => value.Subject == this.file3SubjectName);


          if (result.length >= 3) {
            var _indexArray2 = result[2];
            var _val2 = _indexArray2;
            var _json2 = {};
            _json2.FileName = _val2.FileName;
            _json2.Data = _val2.Data;
            _json2.AttachmentID = _val2.AttachmentID;
            _json2.attachment = 'data:image/jpg;base64,' + _val2.Data;
            _json2.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json2.attachment);
            this.reactiveFormName.controls['file3'].setValue(_json2);
          } //indexArray = result.filter(value => value.Subject == this.file3SubjectName);


          if (result.length >= 4) {
            var _indexArray3 = result[3];
            var _val3 = _indexArray3;
            var _json3 = {};
            _json3.FileName = _val3.FileName;
            _json3.Data = _val3.Data;
            _json3.AttachmentID = _val3.AttachmentID;
            _json3.attachment = 'data:image/jpg;base64,' + _val3.Data;
            _json3.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(_json3.attachment);
            this.reactiveFormName.controls['file4'].setValue(_json3);
          }
        }
      }]);

      return LinkexistingcompanyComponent;
    }();

    LinkexistingcompanyComponent.ɵfac = function LinkexistingcompanyComponent_Factory(t) {
      return new (t || LinkexistingcompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]));
    };

    LinkexistingcompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LinkexistingcompanyComponent,
      selectors: [["app-linkexistingcompany"]],
      viewQuery: function LinkexistingcompanyComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
        }
      },
      decls: 114,
      vars: 77,
      consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "row"], [1, "col-12", "d-flex", "action_box", "py-3"], [1, "d-flex", "align-items-center", "action_box-first"], [1, "btn", "theme-blue-btn", "add_company_xs", 3, "click"], ["src", "../assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "col-12", "p-0"], [1, "card"], [1, "card-header", "bg-info", "list_esit_bg_info"], ["class", "mb-0 text-white", 4, "ngIf"], [1, "card-body", "wizard-content", "company_info_blk"], [1, "col-md-12"], [3, "class", 4, "ngIf"], [1, "validation-wizard", "wizard-circle", "mt-5", 3, "formGroup", "ngSubmit"], [1, "col-md-4"], [1, "form-group"], ["for", "wfirstName2"], [1, "danger"], ["formControlName", "emirates", 1, "form-control", "form-design"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "wlastName2"], ["type", "text", "formControlName", "licenseNumber", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "comapanyNameEN", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "comapanyNameAR", 1, "form-control", 3, "placeholder", "keypress"], ["formControlName", "issuingAuth", 1, "form-control", "form-design"], [4, "ngIf"], [1, "col-sm-12"], [1, "button"], ["type", "submit", 1, "btn", "theme-blue-btn", "add_company_xs"], [1, "col-12", "card", "add_company_tab_card"], [1, "col-12", "d-flex", "align-items-center", "justify-content-space-between", "p-0", "filter_action_row"], [1, "input-wrapper", "input-wrapper-company-card"], ["type", "search", "id", "search", 1, "pi-form-inputs", 3, "name"], [1, "fas", "fa-search", "text-777"], [1, "table-responsive"], ["datatable", "", "class", "mytable", 3, "dtOptions", 4, "ngIf"], [1, "mb-0", "text-white"], [1, "close", 3, "click"], [3, "value"], [1, "invalid-feedback"], ["for", "file1"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file1", "name", "file1", 1, "form-control", 3, "change"], ["class", "file_name", 3, "click", 4, "ngIf"], ["for", "file2"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file2", "name", "file2", 1, "form-control", 3, "change"], ["for", "file3"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file3", "name", "file3", 1, "form-control", 3, "change"], ["for", "file4"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file4", "name", "file4", 1, "form-control", 3, "change"], [1, "file_name", 3, "click"], ["datatable", "", 1, "mytable", 3, "dtOptions"], [4, "ngFor", "ngForOf"], ["class", "cursor_pointer", 4, "ngIf"], ["class", "cursor_pointer", 3, "click", 4, "ngIf"], [1, "cursor_pointer"], [1, "cursor_pointer", 3, "click"]],
      template: function LinkexistingcompanyComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkexistingcompanyComponent_Template_button_click_21_listener() {
            return ctx.navigateToCompanyListPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LinkexistingcompanyComponent_h2_29_Template, 3, 3, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LinkexistingcompanyComponent_h2_30_Template, 3, 3, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LinkexistingcompanyComponent_div_34_Template, 5, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LinkexistingcompanyComponent_Template_form_ngSubmit_35_listener() {
            return ctx.onSubmitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, LinkexistingcompanyComponent_option_53_Template, 2, 2, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, LinkexistingcompanyComponent_div_54_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LinkexistingcompanyComponent_Template_input_keypress_62_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, LinkexistingcompanyComponent_div_64_Template, 3, 2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LinkexistingcompanyComponent_Template_input_keypress_70_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LinkexistingcompanyComponent_Template_input_keypress_77_listener($event) {
            return ctx.common.allow_alphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, LinkexistingcompanyComponent_option_89_Template, 2, 2, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, LinkexistingcompanyComponent_section_95_Template, 37, 19, "section", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](109, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "em", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, LinkexistingcompanyComponent_table_112_Template, 23, 20, "table", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "app-globalfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 34, "Home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 36, "Company"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 38, "LinkExistingCompany"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 40, "BackToCompany"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reactiveFormName.value.ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reactiveFormName.value.ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 42, "CompanyInformation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 44, "Emirate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 46, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 48, "Emirate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emiratesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.emirates.touched && ctx.f.emirates.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 50, "LicenseNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 52, "LicenseNumber"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.licenseNumber.touched && ctx.f.licenseNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 54, "CompanyNameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 56, "CompanyNameEN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 58, "CompanyNameAR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](78, 60, "CompanyNameAR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 62, "IssuingAuthority"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 64, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 66, "IssuingAuthority"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.issuingAuthorityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 68, "FilesToBeUpload"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDocumentSection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](102, 70, "Submit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](109, 72, "Search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showTable);
        }
      },
      directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvbGlua2V4aXN0aW5nY29tcGFueS9saW5rZXhpc3Rpbmdjb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkexistingcompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-linkexistingcompany',
          templateUrl: './linkexistingcompany.component.html',
          styleUrls: ['./linkexistingcompany.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }];
      }, {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/company/linkexistingcompany/linkexistingcompany.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/company/linkexistingcompany/linkexistingcompany.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: LinkexistingcompanyModule */

  /***/
  function srcAppPagesCompanyLinkexistingcompanyLinkexistingcompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkexistingcompanyModule", function () {
      return LinkexistingcompanyModule;
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


    var _linkexistingcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./linkexistingcompany-routing.module */
    "./src/app/pages/company/linkexistingcompany/linkexistingcompany-routing.module.ts");
    /* harmony import */


    var _linkexistingcompany_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./linkexistingcompany.component */
    "./src/app/pages/company/linkexistingcompany/linkexistingcompany.component.ts");
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

    var LinkexistingcompanyModule = function LinkexistingcompanyModule() {
      _classCallCheck(this, LinkexistingcompanyModule);
    };

    LinkexistingcompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LinkexistingcompanyModule
    });
    LinkexistingcompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LinkexistingcompanyModule_Factory(t) {
        return new (t || LinkexistingcompanyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _linkexistingcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkexistingcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkexistingcompanyModule, {
        declarations: [_linkexistingcompany_component__WEBPACK_IMPORTED_MODULE_3__["LinkexistingcompanyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _linkexistingcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkexistingcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkexistingcompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_linkexistingcompany_component__WEBPACK_IMPORTED_MODULE_3__["LinkexistingcompanyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _linkexistingcompany_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkexistingcompanyRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalheaderModule"], _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_9__["GlobalfooterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-company-linkexistingcompany-linkexistingcompany-module-es5.js.map