(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-detaildriver-detaildriver-module"],{

/***/ "./node_modules/angular-datatables/__ivy_ngcc__/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

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

/***/ }),

/***/ "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
  \******************************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTableDirective = /** @class */ (function () {
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
        }
        else {
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
                        rowCallback: function (row, data, index) {
                            if (dtOptions.columns) {
                                var columns_1 = dtOptions.columns;
                                // Filter columns with pipe declared
                                var colsWithPipe = columns_1.filter(function (x) { return x.ngPipeInstance; });
                                // Iterate
                                colsWithPipe.forEach(function (el) {
                                    var pipe = el.ngPipeInstance;
                                    // find index of column using `data` attr
                                    var i = columns_1.findIndex(function (e) { return e.data == el.data; });
                                    // get <td> element which holds data using index
                                    var rowFromCol = row.childNodes.item(i);
                                    // Transform data with Pipe
                                    var rowVal = $(rowFromCol).text();
                                    var rowValAfter = pipe.transform(rowVal);
                                    // Apply transformed string to <td>
                                    $(rowFromCol).text(rowValAfter);
                                });
                            }
                            // run user specified row callback if provided.
                            if (_this.dtOptions.rowCallback) {
                                _this.dtOptions.rowCallback(row, data, index);
                            }
                        }
                    };
                    // merge user's config with ours
                    options = Object.assign({}, dtOptions, options);
                    _this.dt = $(_this.el.nativeElement).DataTable(options);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DataTableDirective.propDecorators = {
        dtOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dtTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
DataTableDirective.ɵfac = function DataTableDirective_Factory(t) { return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableDirective, selectors: [["", "datatable", ""]], inputs: { dtOptions: "dtOptions", dtTrigger: "dtTrigger" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[datatable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return DataTableDirective;
}());


//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
  \***************************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesModule });
DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, { declarations: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
    }], function () { return []; }, null); })();
    return DataTablesModule;
}());


//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/pages/driver/detaildriver/detaildriver-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/driver/detaildriver/detaildriver-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DetaildriverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaildriverRoutingModule", function() { return DetaildriverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detaildriver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detaildriver.component */ "./src/app/pages/driver/detaildriver/detaildriver.component.ts");





const routes = [{ path: '', component: _detaildriver_component__WEBPACK_IMPORTED_MODULE_2__["DetaildriverComponent"] }];
class DetaildriverRoutingModule {
}
DetaildriverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetaildriverRoutingModule });
DetaildriverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetaildriverRoutingModule_Factory(t) { return new (t || DetaildriverRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetaildriverRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetaildriverRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/driver/detaildriver/detaildriver.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/driver/detaildriver/detaildriver.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetaildriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaildriverComponent", function() { return DetaildriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
/* harmony import */ var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/globalheader/globalheader.component */ "./src/app/pages/common/globalheader/globalheader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/globalfooter/globalfooter.component */ "./src/app/pages/common/globalfooter/globalfooter.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");

















function DetaildriverComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r1061 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1061); const ctx_r1060 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1058 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](192); return ctx_r1060.openDriverRenewalModel(_r1058); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "DriverRenewal"));
} }
function DetaildriverComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r1063 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1063); const ctx_r1062 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1062.navigateToUpdatePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "EditDriver"));
} }
function DetaildriverComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r1065 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_div_21_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1065); const ctx_r1064 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1064.common.mesage.showMessage = !ctx_r1064.common.mesage.showMessage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1052 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1052.common.mesage.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1052.common.mesage.mesage);
} }
function DetaildriverComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    const _r1068 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_div_173_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1068); const attachment_r1066 = ctx.$implicit; const ctx_r1067 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1067.downloadFile(attachment_r1066); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attachment_r1066 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1066.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1066.FileName);
} }
function DetaildriverComponent_div_180_table_1_tr_28_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r1075 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_div_180_table_1_tr_28_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1075); const drl_r1071 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1073 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r1058 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](192); return ctx_r1073.openDriverUpdateRenewalModel(drl_r1071, _r1058); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Edit"));
} }
function DetaildriverComponent_div_180_table_1_tr_28_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DetaildriverComponent_div_180_table_1_tr_28_a_16_Template, 3, 3, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drl_r1071 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.DriverID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.PermitStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.PermitExpiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.Fees);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](drl_r1071.Comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", drl_r1071.Status == "Need More Information");
} }
function DetaildriverComponent_div_180_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 70);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DetaildriverComponent_div_180_table_1_tr_28_Template, 17, 8, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1069 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1069.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, "ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, "DriverID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "PermitStartDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, "PermitExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, "Fees"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 20, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 22, "Comments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 24, "Action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1069.driverRenewalsList);
} }
function DetaildriverComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_div_180_table_1_Template, 29, 26, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1054 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1054.showDriverRenewalsTable);
} }
function DetaildriverComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "NoRecordFound"));
} }
function DetaildriverComponent_div_188_table_1_tr_22_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1078 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.DriverID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.DrivingLicenseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.MobilePhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r1078.Notes);
} }
function DetaildriverComponent_div_188_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 70);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetaildriverComponent_div_188_table_1_tr_22_Template, 13, 6, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1076 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1076.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "DriverID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "LicenseNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 14, "EmailID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "MobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 18, "Notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1076.driverUpdateRequestList);
} }
function DetaildriverComponent_div_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_div_188_table_1_Template, 23, 20, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1056 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1056.showDriverUpdateRequestTable);
} }
function DetaildriverComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "NoRecordFound"));
} }
function DetaildriverComponent_ng_template_191_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DriverID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_22_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1080 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1080.g.driverId.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyId"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_32_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1081 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1081.g.companyId.errors.required);
} }
function DetaildriverComponent_ng_template_191_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vtl_r1097 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vtl_r1097.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vtl_r1097.NameEN, " ");
} }
function DetaildriverComponent_ng_template_191_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Type"), "");
} }
function DetaildriverComponent_ng_template_191_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_48_div_1_Template, 5, 9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1083 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1083.g.driverTypeID.errors.required);
} }
function DetaildriverComponent_ng_template_191_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dtpl_r1099 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dtpl_r1099.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dtpl_r1099.PermitName, " ");
} }
function DetaildriverComponent_ng_template_191_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "PermitType"), "");
} }
function DetaildriverComponent_ng_template_191_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_62_div_1_Template, 5, 9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1085 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1085.g.typeOfPermitID.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitStartDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_74_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1086 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1086.g.permitStartDate.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_84_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1087 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1087.g.permitExpiryDate.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Fees"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_95_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1088 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1088.g.fees.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmiratesExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_107_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1090 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1090.g.emiratesIDExpiryDate.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_108_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Late Fee"));
} }
function DetaildriverComponent_ng_template_191_div_108_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_108_div_8_div_1_Template, 3, 3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1105.g.lateFee.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_108_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "TotalAmount"), " ");
} }
function DetaildriverComponent_ng_template_191_div_108_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_108_div_16_div_1_Template, 3, 3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1106.g.totalAmount.errors.required);
} }
function DetaildriverComponent_ng_template_191_div_108_Template(rf, ctx) { if (rf & 1) {
    const _r1110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetaildriverComponent_ng_template_191_div_108_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1110); const ctx_r1109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1109.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DetaildriverComponent_ng_template_191_div_108_div_8_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetaildriverComponent_ng_template_191_div_108_Template_input_keypress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1110); const ctx_r1111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1111.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DetaildriverComponent_ng_template_191_div_108_div_16_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1091 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "LateFee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "Late Fee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1091.g.lateFee.touched || ctx_r1091.isFormSubmited) && ctx_r1091.g.lateFee.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "TotalAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "TotalAmount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1091.g.totalAmount.touched || ctx_r1091.isFormSubmited) && ctx_r1091.g.totalAmount.errors);
} }
function DetaildriverComponent_ng_template_191_div_121_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DrivingLicenseExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_div_121_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1093 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1093.g.drivingLicenseExpiryDate.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EmiratesID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_10_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1113.g.file1.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r1127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_11_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1127); const ctx_r1126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1126.common.downloadFile(ctx_r1126.driverRenewalForm.value.file1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1114.driverRenewalForm.value.file1.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Passport"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_19_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1115.g.file2.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_20_Template(rf, ctx) { if (rf & 1) {
    const _r1130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_20_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1130); const ctx_r1129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1129.common.downloadFile(ctx_r1129.driverRenewalForm.value.file2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1116.driverRenewalForm.value.file2.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ResidenceVisa"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_29_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1117.g.file3.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_30_Template(rf, ctx) { if (rf & 1) {
    const _r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_30_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1133); const ctx_r1132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1132.common.downloadFile(ctx_r1132.driverRenewalForm.value.file3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1118.driverRenewalForm.value.file3.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DrivingLicense"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_38_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1119.g.file4.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_39_Template(rf, ctx) { if (rf & 1) {
    const _r1136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_39_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1136); const ctx_r1135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1135.common.downloadFile(ctx_r1135.driverRenewalForm.value.file4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1120.driverRenewalForm.value.file4.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "DriverPhoto"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_49_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1121.g.file5.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_50_Template(rf, ctx) { if (rf & 1) {
    const _r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_50_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1139); const ctx_r1138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1138.downloadFile(ctx_r1138.driverRenewalForm.value.file5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1122.driverRenewalForm.value.file5.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Other"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetaildriverComponent_ng_template_191_section_122_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetaildriverComponent_ng_template_191_section_122_div_58_div_1_Template, 4, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1123.g.file6.errors.required);
} }
function DetaildriverComponent_ng_template_191_section_122_label_59_Template(rf, ctx) { if (rf & 1) {
    const _r1142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_section_122_label_59_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1142); const ctx_r1141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1141.downloadFile(ctx_r1141.driverRenewalForm.value.file6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1124.driverRenewalForm.value.file5.FileName);
} }
function DetaildriverComponent_ng_template_191_section_122_Template(rf, ctx) { if (rf & 1) {
    const _r1144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1143.onChange($event, "file1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DetaildriverComponent_ng_template_191_section_122_div_10_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DetaildriverComponent_ng_template_191_section_122_label_11_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1145.onChange($event, "file2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DetaildriverComponent_ng_template_191_section_122_div_19_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DetaildriverComponent_ng_template_191_section_122_label_20_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1146.onChange($event, "file3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DetaildriverComponent_ng_template_191_section_122_div_29_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DetaildriverComponent_ng_template_191_section_122_label_30_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1147.onChange($event, "file4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DetaildriverComponent_ng_template_191_section_122_div_38_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DetaildriverComponent_ng_template_191_section_122_label_39_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1148.onChange($event, "file5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DetaildriverComponent_ng_template_191_section_122_div_49_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DetaildriverComponent_ng_template_191_section_122_label_50_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_section_122_Template_input_change_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1144); const ctx_r1149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1149.onChange($event, "file6"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DetaildriverComponent_ng_template_191_section_122_div_58_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DetaildriverComponent_ng_template_191_section_122_label_59_Template, 2, 1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1094 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 18, "EmiratesID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file1.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file1.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 20, "Passport"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file2.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file2.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 22, "ResidenceVisa"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file3.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file3.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 24, "DrivingLicense"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file4.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file4.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 26, "DriverPhoto"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file5.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file5.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 28, "Other"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1094.g.file6.touched || ctx_r1094.isFormSubmited) && ctx_r1094.g.file6.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1094.driverRenewalForm.value.file6);
} }
function DetaildriverComponent_ng_template_191_Template(rf, ctx) { if (rf & 1) {
    const _r1151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1150.closeModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetaildriverComponent_ng_template_191_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const _r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](120); const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](106); _r1092.close(); return _r1089.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DetaildriverComponent_ng_template_191_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1153.driverRenewalSubmitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetaildriverComponent_ng_template_191_div_22_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DetaildriverComponent_ng_template_191_div_32_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_Template_select_change_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1154.getfilterDriverTypePermitList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, DetaildriverComponent_ng_template_191_option_47_Template, 2, 2, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DetaildriverComponent_ng_template_191_div_48_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetaildriverComponent_ng_template_191_Template_select_change_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1155.onchangeOfPermitType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DetaildriverComponent_ng_template_191_option_61_Template, 2, 2, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, DetaildriverComponent_ng_template_191_div_62_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, DetaildriverComponent_ng_template_191_div_74_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DetaildriverComponent_ng_template_191_div_84_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetaildriverComponent_ng_template_191_Template_input_keypress_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1156.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, DetaildriverComponent_ng_template_191_div_95_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetaildriverComponent_ng_template_191_Template_input_ngModelChange_103_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1151); const ctx_r1157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1157.onSelectDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](104, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "owl-date-time", 99, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, DetaildriverComponent_ng_template_191_div_107_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, DetaildriverComponent_ng_template_191_div_108_Template, 17, 14, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "owl-date-time", 99, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, DetaildriverComponent_ng_template_191_div_121_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, DetaildriverComponent_ng_template_191_section_122_Template, 60, 30, "section", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](129, "translate");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](106);
    const _r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](120);
    const ctx_r1059 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 44, "DriverRenewal"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1059.driverRenewalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 46, "DriverID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 48, "DriverID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.driverId.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.driverId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 50, "CompanyId"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 52, "CompanyId"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.companyId.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.companyId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 54, "Type"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 56, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 58, "Type"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1059.driverTypeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.driverTypeID.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.driverTypeID.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 60, "PermitType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 62, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 64, "PermitType"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1059.driverTypePermitListWithFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.typeOfPermitID.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.typeOfPermitID.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 66, "PermitStartDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 68, "PermitStartDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.permitStartDate.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.permitStartDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 70, "PermitExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 72, "PermitExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.permitExpiryDate.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.permitExpiryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 74, "Fees"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 76, "Fees"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.fees.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.fees.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 78, "EmiratesExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](104, 80, "EmiratesExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1089)("owlDateTimeTrigger", _r1089)("min", ctx_r1059.minDateForEID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.emiratesIDExpiryDate.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.emiratesIDExpiryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.driveInfo == null ? null : ctx_r1059.driveInfo.Status) == "Expired" && ctx_r1059.isLateFeeApplied == true && ctx_r1059.common.showLateFee == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 82, "DrivingLicenseExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 84, "DrivingLicenseExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1092)("owlDateTimeTrigger", _r1092)("min", ctx_r1059.minDateForDriverLic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1059.g.drivingLicenseExpiryDate.touched || ctx_r1059.isFormSubmited) && ctx_r1059.g.drivingLicenseExpiryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1059.showDocumentSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](129, 86, "Submit"), " ");
} }
const _c0 = function () { return ["/company/listcompany"]; };
const _c1 = function () { return ["/driver/listdriver"]; };
class DetaildriverComponent {
    constructor(router, formBuilder, apiCall, common, translate, el, modalService, sanitizer, dateTimeAdapter) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.el = el;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.dtOptions = {
            order: [[1, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.today = new Date();
        this.driverInfo = {};
        this.renewalattach = false;
        this.viewDriverInfo = {};
        this.updatedriveInfo = {};
        this.driverRenewalsList = [];
        this.emiratesList = [];
        this.driverUpdateRequestList = [];
        this.vehicleTypeList = [];
        this.driverTypePermitListWithFilter = [];
        this.viewDriverAttachmentsList = [];
        this.driverTypeList = [];
        this.driverTypePermitList = [];
        this.showDriverRenewalBtn = false;
        this.showDriverEditBtn = false;
        this.showDriverRenewalsTable = true;
        this.showDriverUpdateRequestTable = false;
        this.showDocumentSection = true;
        this.isFormSubmited = false;
        this.noDriverUpdateRequestRecordsFound = false;
        this.noDriverRenewalRecordsFound = false;
        this.FranchiseDriverType = "Franchise Driver";
        this.FranchiseCompanyDriverType = "Franchise";
        this.FranchiseDrivertypeid = "8";
        this.FranchiseDriverpermittypeid = "DP14";
        this.FranchiseDriverpermittypename = "12 Months";
        this.isLateFeeApplied = false;
        this.isPermitypeSelected = false;
        this.driveInfo = {};
        //readonly file1SubjectName: string = 'Business Name License';
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.driveInfo = this.common.getValueFromSessionStorage('driverInfo');
            this.initRectiveForm();
            this.initMasterData();
            this.dtOptions = {
                order: [[0, 'desc']],
                language: ({
                    "zeroRecords": yield this.translate.get('NoDataAvailable').toPromise(),
                    "search": yield this.translate.get('Search').toPromise(),
                    "info": yield this.translate.get('Information').toPromise(),
                    "infoFiltered": yield this.translate.get('infoFiltered').toPromise(),
                    "infoEmpty": yield this.translate.get('infoEmpty').toPromise(),
                    "lengthMenu": yield this.translate.get('lengthMenu').toPromise(),
                    "paginate": {
                        "first": yield this.translate.get('First').toPromise(),
                        "last": yield this.translate.get('Last').toPromise(),
                        "next": yield this.translate.get('Next').toPromise(),
                        "previous": yield this.translate.get('Previous').toPromise(),
                    }
                }),
            };
        });
    }
    ngOnDestroy() {
    }
    initRectiveForm() {
        this.reactiveFormName = this.formBuilder.group({
            emiratesId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emiratesIdExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            licenseNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emirate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            expiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            chooseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            typeOfPermit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitIssueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitFees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.driverRenewalForm = this.formBuilder.group({
            ID: [null],
            driverId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            driverTypeID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            typeOfPermitID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emiratesIDExpiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            drivingLicenseExpiryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file2: [null],
            file3: [null],
            file4: [null],
            file5: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file6: [null],
            lateFee: [''],
            totalAmount: [''],
        });
        this.driverViewRenewalForm = this.formBuilder.group({
            driverId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            driverTypeID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            typeOfPermitID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emiratesIDExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            drivingLicenseExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.reactiveFormName.controls; }
    // convenience getter for easy access to form fields
    get g() { return this.driverRenewalForm.controls; }
    // Used for call all APIs
    initMasterData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common.mesage = {};
            this.showAddDriverBtn = this.common.getValueFromSessionStorage("showAddDriverBtn"); //Get showAddDriverBtn true/false after all DisableFineRestriction check in listDriver page, Abhijith 15-12-2023
            this.getDriverDeatilInfo();
            yield this.getDriverRenewalsList();
            yield this.getEmiratesList();
            yield this.getDriverUpdateRequestList();
            yield this.getViewDriverAttachmentsList();
            yield this.getDriverTypeList();
            yield this.getDriverTypePermitList();
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            if (selectedDriverInfo.DriverType == 'Special Service') {
                this.showDriverRenewalBtn = false;
            }
            else {
                this.showDriverRenewalBtn = true;
            }
            // this.common.isCompanyTypeFranchise = false;
            if (this.common.isCompanyTypeFranchise) {
                if (selectedDriverInfo.DriverTrainingStatus) {
                    this.showDriverRenewalBtn = true;
                }
                else {
                    this.showDriverRenewalBtn = false;
                }
                if (selectedDriverInfo.PendingPayments) {
                    this.showDriverRenewalBtn = false;
                }
                this.showDriverEditBtn = false;
            }
            else {
                if (this.showAddDriverBtn) { //If adddriver button is hided then hide renewal button also, just added comment, Abhijith 08-12-2023
                    this.showDriverRenewalBtn = false;
                    this.showDriverEditBtn = false;
                }
            }
            //Driver renewal button should be enabled only one month before permit expiry date, This should applicable for franchise & nornmal Company both
            //changes by client, Abhijith 03-08-2023    
            if (selectedDriverInfo.PermitExpiryDate != null && selectedDriverInfo.PermitExpiryDate != '') {
                var newdate = selectedDriverInfo.PermitExpiryDate.split("-").reverse().join("-");
                let startdate = new Date(newdate);
                let today = new Date();
                startdate.setDate(startdate.getDate() - 30);
                /*For Franchise company DisableFineRestriction is not applicable, Abhijith-04-01-2024  */
                if (this.common.isCompanyTypeFranchise && selectedDriverInfo.DriverTrainingStatus) {
                    if (today >= startdate && !selectedDriverInfo.PendingPayments &&
                        !selectedDriverInfo.PendingRenewalsAvailable) { //For franchise ADD Driver btn is always disabled, So DisableFineRestriction not applicable to franhise company drivers.
                        this.showDriverRenewalBtn = true;
                    }
                    else {
                        this.showDriverRenewalBtn = false;
                    }
                }
                /*For other company DisableFineRestriction is applicable based on showAddDriverBtn validation, Abhijith-04-01-2024*/
                else {
                    if (today >= startdate && !selectedDriverInfo.PendingPayments &&
                        !selectedDriverInfo.PendingRenewalsAvailable && !this.showAddDriverBtn) { //If isFine is availbale & addDriverBtn is enabled(based on DisableFineRestrictionAPI) then show driver renewal button, Abhijith 08-12-2023
                        this.showDriverRenewalBtn = true;
                    }
                    //01-08-2023 Driver renewal button should be enabled only one month before permit expiry date, Abhijith 
                    else {
                        this.showDriverRenewalBtn = false;
                        //end 01-08-2023
                    }
                }
            }
            if (!selectedDriverInfo.PendingPayments &&
                !selectedDriverInfo.PendingRenewalsAvailable) {
                this.showDriverEditBtn = true;
            }
        });
    }
    //open driver renewal popup form
    openDriverRenewalModel(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let today = new Date();
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let expDate = this.common.strintoUTCDate(selectedDriverInfo.PermitExpiryDate);
            if (today <= expDate) {
                expDate.setDate(expDate.getDate() + 1);
                today = expDate;
            }
            /**Min date changes for EID expiry date and dcrive license exiry date, Abhijith 19-01-2024 */
            this.minDateForEID = selectedDriverInfo.EmiratesIDExpiryDate;
            this.minDateForDriverLic = selectedDriverInfo.DrivingLicenseExpiryDate;
            /**End, 19-01-2024  */
            //If driver doesn't belongs to franchise then if condition will work or else condition will work
            if (this.common.isCompanyTypeFranchise == false) {
                let month = (today.getMonth() + 1);
                let day = today.getDate();
                let permitStartDate = (day > 9 ? day : ('0' + day)) + '-' + (month > 9 ? month : ('0' + month)) + '-' + today.getFullYear();
                this.driverRenewalForm.controls['permitStartDate'].setValue(permitStartDate);
            }
            else {
                //this.displayPermitStartDateBeforeSelectingDropDown();
                this.franchiseDriverRenewal();
            }
            const indexArray = this.driverTypeList.filter(value => value.NameEN == selectedDriverInfo.DriverType);
            if (indexArray.length > 0) {
                this.driverRenewalForm.controls['driverTypeID'].setValue(indexArray[0].ID);
                this.getfilterDriverTypePermitList();
            }
            if (selectedDriverInfo.DriverType == this.FranchiseDriverType && selectedDriverInfo.CompanyDriverType == this.FranchiseCompanyDriverType) { //added hardcoded values based on venkat comments
                indexArray[0].ID = this.FranchiseDrivertypeid;
                this.driverRenewalForm.controls['driverTypeID'].setValue(indexArray[0].ID);
                this.getfilterDriverTypePermitList();
            }
            this.driverRenewalForm.controls['driverId'].setValue(selectedDriverInfo.DriverID);
            this.driverRenewalForm.controls['companyId'].setValue(selectedCompanyInfo.CompanyID);
            this.driverRenewalForm.controls['emiratesIDExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(selectedDriverInfo.EmiratesIDExpiryDate));
            this.driverRenewalForm.controls['drivingLicenseExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(selectedDriverInfo.DrivingLicenseExpiryDate));
            this.renewalattach = true;
            yield this.getViewDriverAttachmentsList();
            this.modalService.open(content, {
                ariaLabelledBy: 'modal-basic-title', size: 'xl', centered: true,
                backdropClass: 'custom_backdrop_cls', backdrop: true, windowClass: 'custom_window_cls'
            }).result.then((result) => {
            }, (reason) => {
            });
        });
    }
    //close driver renewal popup form
    closeModel() {
        this.driverRenewalForm.reset();
        this.modalService.dismissAll();
    }
    //open view driver renewal popup from
    openDriverViewRenewalModel(id, content) {
        let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
        let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
        let jsonData = {};
        jsonData.ID = id;
        jsonData.DriverID = selectedDriverInfo.DriverID;
        jsonData.UserID = userLoginInfo.ID;
        jsonData.Token = userLoginInfo.Token;
        this.apiCall.postAPICallWithToken('api/DriverManager/getViewDriverRenewal', jsonData).then(result => {
            this.viewDriverInfo = result;
            this.assignDataToDriverViewRenewalForm(this.viewDriverInfo);
            this.modalService.open(content, {
                ariaLabelledBy: 'modal-basic-title', size: 'xl', centered: true,
                backdropClass: 'custom_backdrop_cls', backdrop: true, windowClass: 'custom_window_cls'
            }).result.then((result) => {
            }, (reason) => {
            });
        }).catch(error => {
            console.log("error ", error);
        });
    }
    //close view driver renewal popup from
    closeViewModel() {
        this.modalService.dismissAll();
    }
    // Used for open renewal form
    openDriverUpdateRenewalModel(driver, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLateFeeApplied = true;
            this.driverRenewalForm.reset();
            yield this.assignDataToDriverUpdateRenewalForm(driver);
            yield this.getViewDriverRenewalAttachments();
            this.modalService.open(content, {
                ariaLabelledBy: 'modal-basic-title', size: 'xl', centered: true,
                backdropClass: 'custom_backdrop_cls', backdrop: true, windowClass: 'custom_window_cls'
            }).result.then((result) => {
            }, (reason) => {
            });
        });
    }
    // Used for get driver details
    getDriverDeatilInfo() {
        let outerJsonData = {};
        let jsonData = {};
        let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
        let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
        let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
        jsonData.UserID = userLoginInfo.ID;
        jsonData.CompanyID = companyInfo.CompanyID;
        jsonData.DriverID = selectedDriverInfo.DriverID;
        jsonData.Token = userLoginInfo.Token;
        outerJsonData.inputParameter = JSON.stringify(jsonData);
        this.apiCall.postAPICallWithToken('api/DriverManager/getViewDriverDetails', jsonData).then(result => {
            this.driverInfo = result;
            this.assignDataToform(this.driverInfo);
        }).catch(error => {
            console.log("error ", error);
        });
    }
    //assigning data to driver details form
    assignDataToform(driverInfo) {
        debugger;
        this.reactiveFormName.controls['emiratesId'].setValue(driverInfo.EmiratesID);
        this.reactiveFormName.controls['emiratesIdExpiryDate'].setValue(driverInfo.EmiratesIDExpiryDate);
        this.reactiveFormName.controls['firstName'].setValue(driverInfo.FirstName);
        this.reactiveFormName.controls['lastName'].setValue(driverInfo.LastName);
        this.reactiveFormName.controls['email'].setValue(driverInfo.Email);
        this.reactiveFormName.controls['mobileNo'].setValue(driverInfo.MobilePhone);
        this.reactiveFormName.controls['gender'].setValue(driverInfo.Gender);
        this.reactiveFormName.controls['nationality'].setValue(driverInfo.Nationality);
        this.reactiveFormName.controls['licenseNumber'].setValue(driverInfo.DrivingLicenseNumber);
        this.reactiveFormName.controls['emirate'].setValue(driverInfo.LicenseEmirate);
        this.reactiveFormName.controls['issueDate'].setValue(driverInfo.DrivingLicenseIssueDate);
        this.reactiveFormName.controls['expiryDate'].setValue(driverInfo.DrivingLicenseExpiryDate);
        this.reactiveFormName.controls['chooseType'].setValue(driverInfo.DriverType);
        if (driverInfo.DriverType == this.FranchiseDriverType && driverInfo.CompanyDriverType == this.FranchiseCompanyDriverType) { //added hardcoded values based on venkat comments
            driverInfo.TypeOfPermit = this.FranchiseDriverpermittypename;
        }
        this.reactiveFormName.controls['typeOfPermit'].setValue(driverInfo.TypeOfPermit);
        this.reactiveFormName.controls['permitIssueDate'].setValue(driverInfo.PermitIssueDate);
        this.reactiveFormName.controls['permitExpiryDate'].setValue(driverInfo.PermitExpiryDate);
        this.reactiveFormName.controls['permitFees'].setValue(driverInfo.Fees);
    }
    //assigning data to view renewal form
    assignDataToDriverViewRenewalForm(viewDriverInfo) {
        debugger;
        let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
        this.driverViewRenewalForm.controls['driverId'].setValue(viewDriverInfo.DriverID);
        this.driverViewRenewalForm.controls['companyId'].setValue(selectedCompanyInfo.CompanyID);
        this.driverViewRenewalForm.controls['fees'].setValue(viewDriverInfo.Fees);
        this.driverViewRenewalForm.controls['driverTypeID'].setValue(viewDriverInfo.DriverType);
        if (viewDriverInfo.DriverType == this.FranchiseDriverType && viewDriverInfo.CompanyDriverType == this.FranchiseCompanyDriverType) { //added hardcoded values based on venkat comments
            this.driverViewRenewalForm.controls['typeOfPermitID'].setValue(this.FranchiseDriverpermittypeid);
        }
        else {
            this.driverViewRenewalForm.controls['typeOfPermitID'].setValue(viewDriverInfo.TypeOfPermit);
        }
        this.driverViewRenewalForm.controls['permitStartDate'].setValue(viewDriverInfo.PermitStartDate);
        this.driverViewRenewalForm.controls['permitExpiryDate'].setValue(viewDriverInfo.PermitExpiryDate);
        this.driverViewRenewalForm.controls['emiratesIDExpiryDate'].setValue(viewDriverInfo.EmiratesIDExpiryDate);
        this.driverViewRenewalForm.controls['drivingLicenseExpiryDate'].setValue(viewDriverInfo.DrivingLicenseExpiryDate);
    }
    //assigning data to view renewal form
    assignDataToDriverUpdateRenewalForm(viewDriverInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            this.driverRenewalForm.controls['ID'].setValue(viewDriverInfo.ID);
            this.driverRenewalForm.controls['driverId'].setValue(viewDriverInfo.DriverID);
            this.driverRenewalForm.controls['companyId'].setValue(selectedCompanyInfo.CompanyID);
            this.driverRenewalForm.controls['fees'].setValue(viewDriverInfo.Fees);
            this.driverRenewalForm.controls['permitStartDate'].setValue(viewDriverInfo.PermitStartDate);
            this.driverRenewalForm.controls['permitExpiryDate'].setValue(viewDriverInfo.PermitExpiryDate);
            this.driverRenewalForm.controls['emiratesIDExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(viewDriverInfo.EmiratesIDExpiryDate));
            this.driverRenewalForm.controls['drivingLicenseExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(viewDriverInfo.DrivingLicenseExpiryDate));
            //Added LateFee & TotalAmount while editing Driver renewal if status is "Need more information", Abhijith 11-08-2023
            this.driverRenewalForm.controls['lateFee'].setValue(viewDriverInfo.LateFees);
            this.driverRenewalForm.controls['totalAmount'].setValue(viewDriverInfo.TotalAmount);
            const indexArray = this.driverTypeList.filter(value => value.NameEN == viewDriverInfo.DriverType);
            if (indexArray.length > 0) {
                this.driverRenewalForm.controls['driverTypeID'].setValue(indexArray[0].ID);
                this.getfilterDriverTypePermitList();
            }
            if (viewDriverInfo.DriverType == this.FranchiseDriverType && viewDriverInfo.CompanyDriverType == this.FranchiseCompanyDriverType) { //added hardcoded values based on venkat comments
                indexArray[0].ID = this.FranchiseDrivertypeid;
                viewDriverInfo.TypeOfPermit = this.FranchiseDriverpermittypename;
                this.driverRenewalForm.controls['driverTypeID'].setValue(indexArray[0].ID);
                this.getfilterDriverTypePermitList();
            }
            const permitTypeArray = this.driverTypePermitListWithFilter.filter(value => value.PermitName == viewDriverInfo.TypeOfPermit);
            if (permitTypeArray.length > 0) {
                this.driverRenewalForm.controls['typeOfPermitID'].setValue(permitTypeArray[0].ID);
            }
        });
    }
    // Used for get driver renewal list
    getDriverRenewalsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.CompanyID = companyInfo.CompanyID;
            jsonData.DriverID = selectedDriverInfo.DriverID;
            this.showDriverRenewalsTable = false;
            this.noDriverRenewalRecordsFound = false;
            yield this.apiCall.postAPICallWithToken('api/DriverManager/getListDriverRenewals', jsonData).then(result => {
                this.driverRenewalsList = result;
                let indexArray = result.filter(value => value.Status == 'Under Approval');
                let needArray = result.filter(value => value.Status == 'Need More Information');
                if (indexArray.length > 0 || needArray.length > 0) {
                    if (!this.showAddDriverBtn) {
                        this.showDriverRenewalBtn = false;
                        this.showDriverEditBtn = false;
                    }
                }
                if (this.common.isCompanyTypeFranchise) {
                    this.showDriverRenewalBtn = false;
                    this.showDriverEditBtn = false;
                }
                this.showDriverRenewalsTable = true;
            }).catch(error => {
                console.log("error ", error);
            });
            if (this.driverRenewalsList.length == 0) {
                this.noDriverRenewalRecordsFound = true;
            }
        });
    }
    //driver renewal form submission
    driverRenewalSubmitForm() {
        this.isFormSubmited = true;
        if (this.driverRenewalForm.invalid) {
            return;
        }
        let outerJsonData = {};
        let jsonData = {};
        let driverInfo = this.common.getValueFromSessionStorage('driverInfo');
        let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
        let selectedCompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
        jsonData.DriverID = driverInfo.DriverID;
        jsonData.UserID = userLoginInfo.ID;
        jsonData.Token = userLoginInfo.Token;
        jsonData.CompanyID = selectedCompanyInfo.CompanyID;
        jsonData.Fees = this.driverRenewalForm.value.fees + '';
        jsonData.DriverTypeID = this.driverRenewalForm.value.driverTypeID;
        jsonData.TypeOfPermitID = this.driverRenewalForm.value.typeOfPermitID;
        jsonData.PermitStartDate = this.driverRenewalForm.value.permitStartDate.split("-").reverse().join("-");
        jsonData.PermitExpiryDate = this.driverRenewalForm.value.permitExpiryDate.split("-").reverse().join("-");
        //jsonData.EmiratesIDExpiryDate = this.common.dateFormatWithDash(this.driverRenewalForm.value.emiratesIDExpiryDate);
        //jsonData.DrivingLicenseExpiryDate = this.common.dateFormatWithDash(this.driverRenewalForm.value.drivingLicenseExpiryDate);
        jsonData.EmiratesIDExpiryDate = this.common.convertDateFormat(this.driverRenewalForm.value.emiratesIDExpiryDate);
        jsonData.DrivingLicenseExpiryDate = this.common.convertDateFormat(this.driverRenewalForm.value.drivingLicenseExpiryDate);
        //Sending late fee and total Amnt only if company type is not franchise - Abhijith 05-05-2023
        if (this.common.showLateFee == true) {
            jsonData.LateFees = this.driverRenewalForm.value.lateFee.toString();
            jsonData.TotalAmount = this.driverRenewalForm.value.totalAmount.toString();
        }
        else {
            jsonData.LateFees = '';
            jsonData.totalAmount = '';
        }
        //End
        let ApiEndPoint = '';
        ApiEndPoint = "api/DriverManager/DriverRenewalCreation";
        if (this.driverRenewalForm.value.ID != null) {
            jsonData.ID = this.driverRenewalForm.value.ID;
            ApiEndPoint = "api/DriverManager/DriverRenewalUpdate";
        }
        outerJsonData.inputParameter = JSON.stringify(jsonData);
        this.apiCall.postAPICallWithToken(ApiEndPoint, jsonData).then(result => {
            if (result.Message) {
                this.common.showSussessFailureMessage(2, result.Message);
            }
            else {
                if (result.ID) {
                    this.onSubmitOfAttchmentForm(result.ID);
                }
            }
        }).catch(error => {
            console.log("error ", error);
        });
    }
    // Used for get attachment
    getViewDriverAttachmentsList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let outerJsonData = {};
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.CompanyID = companyInfo.CompanyID;
            jsonData.DriverID = selectedDriverInfo.DriverID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken('api/DriverManager/ViewDriverAttachments', outerJsonData, loader).then(result => {
                if (this.renewalattach) {
                    this.assignAttachmentToFrom(result);
                }
                let attachmentArray = [];
                for (let data of result) {
                    data.attachment = 'data:image/jpg;base64,' + data.Data;
                    data.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(data.attachment);
                    attachmentArray.push(data);
                }
                this.viewDriverAttachmentsList = attachmentArray;
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get driver update request list
    getDriverUpdateRequestList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let outerJsonData = {};
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.CompanyID = companyInfo.CompanyID;
            jsonData.DriverID = selectedDriverInfo.DriverID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            this.showDriverUpdateRequestTable = false;
            this.noDriverUpdateRequestRecordsFound = false;
            yield this.apiCall.postAPICallWithToken('api/DriverManager/ListDriverUpdateRequests', outerJsonData, loader).then(result => {
                this.driverUpdateRequestList = result;
                this.showDriverUpdateRequestTable = true;
            }).catch(error => {
                console.log("error ", error);
            });
            if (this.driverUpdateRequestList.length == 0) {
                this.noDriverUpdateRequestRecordsFound = true;
            }
        });
    }
    // Used for navigate to drive update request create screen
    driverUpdateRequestCreation() {
        let driverInfom = this.common.getValueFromSessionStorage('driverInfo');
        driverInfom.requestFrom = 'driverUpdateReqCreation';
        this.common.setValueToSessionStorage('updateDriverInfo', driverInfom);
        this.router.navigateByUrl('/driver/adddriver');
    }
    // Used for get Emirates List
    getEmiratesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let getEmiratesList = this.common.getValueFromSessionStorage('getEmiratesList');
            if (getEmiratesList != null) {
                this.emiratesList = getEmiratesList;
                return;
            }
            yield this.apiCall.postEnquiryAPICallWithToken('api/EnquiryManager/getEmiratesList', {}).then(result => {
                this.emiratesList = result;
                this.common.setValueToSessionStorage('getEmiratesList', result);
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // This function is used for get Driver Type List
    getDriverTypeList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let getDriverTypeList = this.common.getValueFromSessionStorage('getDriverTypeList');
            if (getDriverTypeList != null) {
                this.driverTypeList = getDriverTypeList;
                return;
            }
            yield this.apiCall.postAPICallWithToken('api/DriverManager/getDriverTypeList', {}).then(result => {
                this.driverTypeList = result;
                this.common.setValueToSessionStorage('getDriverTypeList', result);
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get Driver Type Permit List
    getDriverTypePermitList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            let getDriverTypePermitList = this.common.getValueFromSessionStorage('getDriverTypePermitList');
            if (getDriverTypePermitList != null) {
                this.driverTypePermitList = getDriverTypePermitList;
                return;
            }
            yield this.apiCall.postAPICallWithToken('api/DriverManager/getDriverTypePermitList', {}).then(result => {
                this.driverTypePermitList = result;
                this.common.setValueToSessionStorage('getDriverTypePermitList', result);
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // For filter Vehicle Type Permit List based on vehicle type
    getfilterDriverTypePermitList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            this.driverRenewalForm.controls['typeOfPermitID'].setValue("");
            const indexArray = this.driverTypeList.filter(value => value.ID == this.driverRenewalForm.value.driverTypeID);
            var searchValue = '';
            if (indexArray.length > 0) {
                searchValue = indexArray[0].NameEN;
            }
            if (this.driverRenewalForm.value.driverTypeID == this.FranchiseDrivertypeid && this.driverRenewalForm.value.CompanyDriverType == this.FranchiseCompanyDriverType) { //added hardcoded values based on venkat comments on 10-1-2023
                searchValue = this.FranchiseDriverType;
            }
            this.driverTypePermitListWithFilter = this.driverTypePermitList.filter(value => value.DriverType == searchValue);
        });
    }
    onchangeOfPermitType() {
        this.isPermitypeSelected = true;
        const indexArray = this.driverTypePermitList.filter(value => value.ID == this.driverRenewalForm.value.typeOfPermitID);
        if (indexArray.length > 0) {
            let index = indexArray[0];
            this.driverRenewalForm.controls['fees'].setValue(index.FeesForRenew + '');
            let array = index.PermitName.split(' ');
            if (!isNaN(array[0])) {
                if (this.common.isCompanyTypeFranchise == false) {
                    let permitStartDate = this.common.strintoUTCDate(this.g.permitStartDate.value);
                    let fee = parseInt(array[0]);
                    var newDate = new Date(permitStartDate.setMonth(permitStartDate.getMonth() + fee));
                    let month = (newDate.getMonth() + 1);
                    let day = newDate.getDate();
                    let pemitIssueDate = (day > 9 ? day : ('0' + day)) + '-' + (month > 9 ? month : ('0' + month)) + '-' + newDate.getFullYear();
                    this.driverRenewalForm.controls['permitExpiryDate'].setValue(pemitIssueDate);
                    // Driver Late fee logic by Abhijith 19-04-2023 - start                  
                    var expiredDate = new Date(this.driverInfo.PermitExpiryDate.split("-").reverse().join("-"));
                    var todaysDate = new Date(this.driverRenewalForm.value.permitStartDate.split("-").reverse().join("-"));
                    var diffInTime = todaysDate.getTime() - expiredDate.getTime();
                    // To calculate the no. of days between two dates and late fee applicable only after 30days from Exp date.
                    let diffInDays = diffInTime / (1000 * 3600 * 24);
                    if (diffInDays > 30) {
                        // New logic 20AED / Per Month Abhijith       
                        let date = expiredDate;
                        date.setDate(date.getDate() + 30);
                        // calculate num of months and year after 30days 
                        let monthDiff = todaysDate.getMonth() - date.getMonth();
                        let yearDiff = todaysDate.getFullYear() - date.getFullYear();
                        let numberOfMonth = monthDiff + yearDiff * 12;
                        let amount = numberOfMonth * index.LateFees;
                        this.isLateFeeApplied = true;
                        this.driverRenewalForm.controls['lateFee'].setValue(Number(amount));
                        this.driverRenewalForm.controls['totalAmount'].setValue(Number(this.driverRenewalForm.value.fees) + Number(this.driverRenewalForm.value.lateFee));
                        // this.driverRenewalForm.controls['fees'].setValue(this.driverRenewalForm.value.totalAmount);
                    }
                    else {
                        this.driverRenewalForm.controls['fees'].setValue(index.FeesForRenew + '');
                    }
                    // End
                }
                else {
                    //Call Frnchise driver renwal method, Abhijith 17-07-2023
                    this.franchiseDriverRenewal();
                }
            }
        }
    }
    //Franchise driver renewal changes moved to production, Abhijith 03-08-2023
    //Franchise driver renewal based on over all years calculation from expiry date, Abhijith 20-07-2023
    franchiseDriverRenewal() {
        var expiredDate = new Date(this.driverInfo.PermitExpiryDate.split("-").reverse().join("-"));
        let currentDate = new Date();
        let getDateFromExpiredDate = expiredDate.getDate();
        let getMonthFromExpiredDate = (expiredDate.getMonth() + 1);
        // calculate number of years between permission expiry date and current date    
        let yearDiff = currentDate.getFullYear() - expiredDate.getFullYear();
        let getAmountfromForm = this.driverRenewalForm.value.fees;
        let calculateAmountOne = Number(getAmountfromForm) * yearDiff;
        //If expiry date year is equal to todays date year then if condition will work
        //If expiry date year is less then current date year then else condition will work
        //So here 2 functionalities will work for franchise driver renewal
        if (expiredDate.getFullYear() == currentDate.getFullYear()) {
            let assignSameExpiryDateToPermitStartDate = (getDateFromExpiredDate > 9 ? getDateFromExpiredDate : ('0' + getDateFromExpiredDate)) + '-' + (getMonthFromExpiredDate > 9 ? getMonthFromExpiredDate : ('0' + getMonthFromExpiredDate)) + '-' + expiredDate.getFullYear();
            this.driverRenewalForm.controls['permitStartDate'].setValue(assignSameExpiryDateToPermitStartDate);
            if (this.isPermitypeSelected == true) {
                let addOneYearToExpiryDate = (expiredDate.getFullYear() + 1);
                let newDateAfterAddingYearToExpiredDate = (getDateFromExpiredDate > 9 ? getDateFromExpiredDate : ('0' + getDateFromExpiredDate)) + '-' + (getMonthFromExpiredDate > 9 ? getMonthFromExpiredDate : ('0' + getMonthFromExpiredDate)) + '-' + addOneYearToExpiryDate;
                this.driverRenewalForm.controls['permitExpiryDate'].setValue(newDateAfterAddingYearToExpiredDate);
                //Make amount double to existing fee for franchise driver renewel only.
                this.franshiseTotalFee = getAmountfromForm * 2;
                this.driverRenewalForm.controls['fees'].setValue(this.franshiseTotalFee);
            }
        }
        else {
            //Based on num of years difference permission expiry date and current date calculate new date
            var yearForPermitStartDateOne = (expiredDate.getFullYear() + yearDiff);
            var yearsAddedToExpiryDate = (getDateFromExpiredDate > 9 ? getDateFromExpiredDate : ('0' + getDateFromExpiredDate)) + '-' + (getMonthFromExpiredDate > 9 ? getMonthFromExpiredDate : ('0' + getMonthFromExpiredDate)) + '-' + yearForPermitStartDateOne;
            //If dropdown selected then if condition will work, show expiry date and fees otherwise only show start date
            if (this.isPermitypeSelected == true) {
                var getDateFromYearsAddedToExpiryDate;
                //Check for month
                let month = (currentDate.getMonth() + 1);
                if (getMonthFromExpiredDate <= month) {
                    //check fot day
                    if (getMonthFromExpiredDate < (currentDate.getMonth() + 1) || getDateFromExpiredDate <= currentDate.getDate()) {
                        getDateFromYearsAddedToExpiryDate = new Date(yearsAddedToExpiryDate.split("-").reverse().join("-"));
                        let addOneMoreYear = (getDateFromYearsAddedToExpiryDate.getFullYear() + 1);
                        let getNewDateAdded = (getDateFromYearsAddedToExpiryDate.getDate() > 9 ? getDateFromYearsAddedToExpiryDate.getDate() : ('0' + getDateFromYearsAddedToExpiryDate.getDate())) + '-' + ((getDateFromYearsAddedToExpiryDate.getMonth() + 1) > 9 ? (getDateFromYearsAddedToExpiryDate.getMonth() + 1) : ('0' + (getDateFromYearsAddedToExpiryDate.getMonth() + 1))) + '-' + addOneMoreYear;
                        this.driverRenewalForm.controls['permitExpiryDate'].setValue(getNewDateAdded);
                        calculateAmountOne = calculateAmountOne + Number(getAmountfromForm);
                        //Minus one year so that will be our permit start date
                        var getDateFromNewDate = new Date(getNewDateAdded.split("-").reverse().join("-"));
                    }
                    else {
                        this.driverRenewalForm.controls['permitExpiryDate'].setValue(yearsAddedToExpiryDate);
                        getDateFromNewDate = new Date(yearsAddedToExpiryDate.split("-").reverse().join("-"));
                    }
                }
                else {
                    this.driverRenewalForm.controls['permitExpiryDate'].setValue(yearsAddedToExpiryDate);
                    getDateFromNewDate = new Date(yearsAddedToExpiryDate.split("-").reverse().join("-"));
                }
                //Make amount double to existing fee for franchise driver renewel only.
                this.franshiseTotalFee = calculateAmountOne * 2;
                this.driverRenewalForm.controls['fees'].setValue(this.franshiseTotalFee);
            }
            else {
                //Minus one year so that will be our permit start date
                var getDateFromNewDate = new Date(yearsAddedToExpiryDate.split("-").reverse().join("-"));
            }
            //This will be for start date
            let dayForPermitStartDateTwo = getDateFromNewDate.getDate();
            let monthForPermitStartDateTwo = (getDateFromNewDate.getMonth() + 1);
            let yearForPermitStartDateTwo = (getDateFromNewDate.getFullYear() - 1);
            let minusOneyear = (dayForPermitStartDateTwo > 9 ? dayForPermitStartDateTwo : ('0' + dayForPermitStartDateTwo)) + '-' + (monthForPermitStartDateTwo > 9 ? monthForPermitStartDateTwo : ('0' + monthForPermitStartDateTwo)) + '-' + yearForPermitStartDateTwo;
            this.driverRenewalForm.controls['permitStartDate'].setValue(minusOneyear);
        }
    }
    // Used for download file
    downloadFile(json) {
        this.common.downloadFile(json);
    }
    // For Navigate to Edit Driver Screen
    navigateToUpdatePage() {
        this.updatedriveInfo = this.common.getValueFromSessionStorage('driverInfo');
        this.updatedriveInfo.requestFrom = 'editUpdate';
        this.common.setValueToSessionStorage('updateDriverInfo', this.updatedriveInfo);
        this.router.navigateByUrl('/driver/adddriver');
    }
    // On file Select check file type and file size
    onChange(event, keyIndex) {
        this.common.mesage = {};
        if (event.target.files.length > 0) {
            let file = event.target.files[0];
            let fileExtanction = file.name.substring(file.name.lastIndexOf(".") + 1);
            if (!this.common.allowedFileType.includes(fileExtanction.toLowerCase())) {
                this.common.showSussessFailureMessage(2, 'You can upload only ' + this.common.allowedFileType + 'File Type. ');
                return;
            }
            let allowedfileSize = this.common.allowedFileSizeInMB * 1024 * 1024;
            if (allowedfileSize < file.size) {
                this.common.showSussessFailureMessage(2, 'You can upload Maximum ' + this.common.allowedFileSizeInMB + ' MB File.');
                return;
            }
            let json = {};
            if (this.driverRenewalForm.value[keyIndex]) {
                json = this.driverRenewalForm.value[keyIndex];
            }
            json.FileName = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                json.Data = reader.result;
                this.driverRenewalForm.controls[keyIndex].setValue(json);
            };
        }
    }
    // Used for upload attchment of attchment found
    onSubmitOfAttchmentForm(ID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ID == null || ID == '') {
                return;
            }
            let file = this.driverRenewalForm.value.file1;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file1SubjectName);
            }
            file = this.driverRenewalForm.value.file2;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file2SubjectName);
            }
            file = this.driverRenewalForm.value.file3;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file3SubjectName);
            }
            file = this.driverRenewalForm.value.file4;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file4SubjectName);
            }
            file = this.driverRenewalForm.value.file5;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file5SubjectName);
            }
            file = this.driverRenewalForm.value.file6;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(ID, file, false, this.file6SubjectName);
            }
            this.apiCall.spinner.hide();
            this.modalService.dismissAll();
            this.getDriverRenewalsList();
            if (this.driverRenewalForm.value.ID != null) {
                this.common.showSussessFailureMessage(1, 'Driver Renewal Updated Successfully and submitted for approval');
            }
            else {
                this.common.showSussessFailureMessage(1, 'Driver Renewal Created Successfully and submitted for approval');
            }
            this.driverRenewalForm.reset();
            this.showDocumentSection = false;
            setTimeout(() => {
                this.showDocumentSection = true;
            }, 300);
        });
    }
    // Used for call attachment upload API call
    uplaodAttachmentToServerOneByOne(ID, file, loader, Subject = 'Attachment') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ID == null || ID == '') {
                return;
            }
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.DriverID = selectedDriverInfo.DriverID;
            jsonData.DriverRenewalID = ID;
            jsonData.Subject = Subject;
            jsonData.FileName = file.FileName;
            let fileData = file.Data.split('base64,');
            if (fileData.length > 1) {
                jsonData.Data = fileData[1];
            }
            else {
                jsonData.Data = file.Data;
            }
            let APIEndPoint = 'api/DriverManager/DriverRenewalAttachment';
            if (file.AttachmentID) {
                jsonData.AttachmentID = file.AttachmentID;
                APIEndPoint = 'api/DriverManager/DriverRenewalAttachment'; //Before it was VehicleManager/UpdateAttachment, After issue raised by client in prod we fixed the issue, Changed on 10-01-2024, Abhijith
            }
            let outerJsonData = {};
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData, loader).then(result => {
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get renewal attachment
    getViewDriverRenewalAttachments(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            if (!this.driverRenewalForm.value.ID) {
                return;
            }
            let selectedDriverInfo = this.common.getValueFromSessionStorage('driverInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let outerJsonData = {};
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.DriverID = selectedDriverInfo.DriverID;
            jsonData.DriverRenewalID = this.driverRenewalForm.value.ID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken('api/DriverManager/ViewDriverRenewalAttachments', outerJsonData, loader).then(result => {
                if (result.Message) {
                    this.common.showSussessFailureMessage(2, result.Message);
                }
                else {
                    this.assignAttachmentToFrom(result);
                }
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for assign attachment to form
    assignAttachmentToFrom(result) {
        debugger;
        let indexArray = result.filter(value => value.Subject == this.file1SubjectName);
        if (indexArray.length != 0) {
            //let indexArray = result[0];
            let val = indexArray[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file1'].setValue(json);
        }
        let indexArray2 = result.filter(value => value.Subject == this.file2SubjectName);
        if (indexArray2.length != 0) {
            // let indexArray = result[1];
            let val = indexArray2[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file2'].setValue(json);
        }
        let indexArray3 = result.filter(value => value.Subject == this.file3SubjectName);
        if (indexArray3.length != 0) {
            //let indexArray = result[2];
            let val = indexArray3[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file3'].setValue(json);
        }
        let indexArray4 = result.filter(value => value.Subject == this.file4SubjectName);
        if (indexArray4.length != 0) {
            //let indexArray = result[3];
            let val = indexArray4[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file4'].setValue(json);
        }
        let indexArray5 = result.filter(value => value.Subject == this.file5SubjectName);
        if (indexArray5.length != 0) {
            //let indexArray = indexArray5[0];
            let val = indexArray5[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file5'].setValue(json);
        }
        let indexArray6 = result.filter(value => value.Subject == this.file6SubjectName);
        if (indexArray6.length != 0) {
            //let indexArray = indexArray6[0];
            let val = indexArray6[0];
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.driverRenewalForm.controls['file6'].setValue(json);
        }
    }
    /**Emirates ID Expiry date should work based on two cases,
     *  1. If user don't want to change it, then system should accept same date.
     *  2. If user wants to change the date then also system should accept the changed date, Abhijith 22-01-2024 */
    onSelectDate(event) {
        let currentDate = new Date();
        if (event.getFullYear() < currentDate.getFullYear()) {
            let getDay = event.getDate();
            let getMonth = event.getMonth() + 1;
            let convertDate = (getDay > 9 ? getDay : ('0' + getDay)) + '-' + (getMonth > 9 ? getMonth : (getMonth)) + '-' + this.common.minDate.getFullYear();
            this.minDateForEID = this.common.stringDateToCalendarDateFormat(convertDate);
            this.driverRenewalForm.controls['emiratesIDExpiryDate'].setValue(this.minDateForEID);
            return;
        }
        else {
            return;
        }
    }
}
DetaildriverComponent.ɵfac = function DetaildriverComponent_Factory(t) { return new (t || DetaildriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["DateTimeAdapter"])); };
DetaildriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetaildriverComponent, selectors: [["app-detaildriver"]], decls: 193, vars: 144, consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "d-flex", "action_box", "py-3"], [1, "d-flex", "align-items-center", "action_box-first"], ["class", "btn theme-blue-btn add_company_xs", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-header", "bg-info", "list_esit_bg_info"], [1, "mb-0", "text-white"], [1, "card-body", "wizard-content"], [1, "validation-wizard", "wizard-circle", "mt-5", 3, "formGroup"], [1, "vehi_section"], [1, "col-md-4"], [1, "form-group"], ["for", "EmiratesId"], ["type", "text", "formControlName", "emiratesId", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "EmiratesExpiryDate"], ["type", "text", "formControlName", "emiratesIdExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "FirstName"], ["type", "text", "formControlName", "firstName", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "LastName"], ["type", "text", "formControlName", "lastName", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "EmailID"], ["type", "text", "formControlName", "email", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "MobileNo"], ["type", "text", "formControlName", "mobileNo", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "Nationality"], ["type", "text", "formControlName", "nationality", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "Fees"], [1, "danger"], ["type", "text", "formControlName", "gender", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "LicenseNumber"], ["type", "text", "formControlName", "licenseNumber", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "Emirate"], ["type", "text", "formControlName", "emirate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "IssueDate"], ["type", "text", "formControlName", "issueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "ExpiryDate"], ["type", "text", "formControlName", "expiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "ChooseType"], ["type", "text", "formControlName", "chooseType", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "TypeOfPermit"], ["type", "text", "formControlName", "typeOfPermit", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitIssueDate"], ["type", "text", "formControlName", "permitIssueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitExpiryDate"], ["type", "text", "formControlName", "permitExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "permitFees", "readonly", "", 1, "form-control", 3, "placeholder"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-12", "p-0"], [1, "col-12", "card", "add_company_tab_card"], ["class", "table-responsive", 4, "ngIf"], ["class", "col-md-12 p-0", 4, "ngIf"], ["mymodal", ""], [1, "btn", "theme-blue-btn", "add_company_xs", 3, "click"], ["src", "/assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "close", 3, "click"], [1, "col-md-3"], [1, "form-group", "attachment_section"], [1, "attach_lbl"], [1, "file_name", "text-center", 3, "click"], [1, "table-responsive"], ["datatable", "", "class", "mytable", 3, "dtOptions", 4, "ngIf"], ["datatable", "", 1, "mytable", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "cursor_pointer"], [3, "click", 4, "ngIf"], [3, "click"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"], [1, "modal-header", "vehicle_ren_header"], [1, "modal-title"], ["_ngcontent-kmx-c109", "", "src", "/assets/images/close_image.svg", "alt", "close image", 1, "close_img", 3, "click"], [1, "modal-body", "vehicle_ren_body", 3, "click"], [1, "validation-wizard", "wizard-circle", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["for", "DriverId"], ["type", "text", "formControlName", "driverId", "readonly", "", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "CompanyId"], ["type", "text", "formControlName", "companyId", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "Type"], ["formControlName", "driverTypeID", "disabled", "", 1, "form-control", "form-design", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "PermitType"], ["formControlName", "typeOfPermitID", 1, "form-control", "form-design", 3, "change"], ["for", "PermitStartDate"], ["type", "text", "formControlName", "permitStartDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "fees", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["for", "EmiratesIDExpiryDate"], ["formControlName", "emiratesIDExpiryDate", "id", "date", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder", "min", "ngModelChange"], [3, "pickerType"], ["dt1", ""], ["class", "row", 4, "ngIf"], ["for", "DrivingLicenseExpiryDate"], ["formControlName", "drivingLicenseExpiryDate", 1, "form-control", "form_date", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder", "min"], ["dt2", ""], [4, "ngIf"], [1, "col-md-12"], [1, "button"], ["type", "submit", 1, "btn", "theme-blue-btn", "add_company_xs"], [1, "invalid-feedback"], [3, "value"], ["for", "LateFee"], ["type", "text", "formControlName", "lateFee", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["for", "TotalAmount"], ["type", "text", "formControlName", "totalAmount", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["for", "file1"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file1", "name", "file1", 1, "form-control", 3, "change"], ["class", "file_name", 3, "click", 4, "ngIf"], ["for", "file2"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file2", "name", "file2", 1, "form-control", 3, "change"], ["for", "file3"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file3", "name", "file3", 1, "form-control", 3, "change"], ["for", "file4"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file4", "name", "file4", 1, "form-control", 3, "change"], ["for", "file5"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file5", "name", "file5", 1, "form-control", 3, "change"], ["for", "file6"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file6", "name", "file6", 1, "form-control", 3, "change"], [1, "file_name", 3, "click"]], template: function DetaildriverComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DetaildriverComponent_button_19_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DetaildriverComponent_button_20_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DetaildriverComponent_div_21_Template, 5, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, DetaildriverComponent_div_173_Template, 6, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](178, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, DetaildriverComponent_div_180_Template, 2, 1, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, DetaildriverComponent_div_181_Template, 5, 3, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, DetaildriverComponent_div_188_Template, 2, 1, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, DetaildriverComponent_div_189_Template, 5, 3, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "app-globalfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](191, DetaildriverComponent_ng_template_191_Template, 130, 88, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](142, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 56, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](143, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 58, "Driver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driveInfo.DrivingLicenseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDriverRenewalBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDriverEditBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 60, "ViewDriver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 62, "BasicInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 64, "EmiratesID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 66, "EmiratesID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 68, "EmiratesExpiryDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 70, "EmiratesExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 72, "FirstName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 74, "FirstName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 76, "LastName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 78, "LastName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 80, "EmailID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 82, "EmailID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 84, "MobileNo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 86, "MobileNo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 88, "Nationality"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 90, "Nationality"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 92, "Gender"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 94, "Gender"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 96, "DriverLicenseDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](104, 98, "LicenseNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 100, "LicenseNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](111, 102, "Emirate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](113, 104, "Emirate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 106, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](120, 108, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](125, 110, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](127, 112, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](131, 114, "PermitType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](137, 116, "ChooseType"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](139, 118, "ChooseType"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](144, 120, "TypeOfPermit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](146, 122, "TypeOfPermit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](151, 124, "PermitIssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](153, 126, "PermitIssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](158, 128, "PermitExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](160, 130, "PermitExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](165, 132, "Fees"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](167, 134, "Fees"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](171, 136, "Attachments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewDriverAttachmentsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](178, 138, "DriverRenewal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noDriverRenewalRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noDriverRenewalRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](186, 140, "DriverUpdateRequest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noDriverUpdateRequestRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noDriverUpdateRequestRecordsFound);
    } }, directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_11__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_13__["GlobalfooterComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9kZXRhaWxkcml2ZXIvZGV0YWlsZHJpdmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetaildriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-detaildriver',
                templateUrl: './detaildriver.component.html',
                styleUrls: ['./detaildriver.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }, { type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["DateTimeAdapter"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/driver/detaildriver/detaildriver.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/driver/detaildriver/detaildriver.module.ts ***!
  \******************************************************************/
/*! exports provided: DetaildriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaildriverModule", function() { return DetaildriverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detaildriver_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detaildriver-routing.module */ "./src/app/pages/driver/detaildriver/detaildriver-routing.module.ts");
/* harmony import */ var _detaildriver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detaildriver.component */ "./src/app/pages/driver/detaildriver/detaildriver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/globalheader/globalheader.module */ "./src/app/pages/common/globalheader/globalheader.module.ts");
/* harmony import */ var _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/globalfooter/globalfooter.module */ "./src/app/pages/common/globalfooter/globalfooter.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");












class DetaildriverModule {
}
DetaildriverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetaildriverModule });
DetaildriverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetaildriverModule_Factory(t) { return new (t || DetaildriverModule)(); }, providers: [
        { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OWL_DATE_TIME_LOCALE"], useValue: 'us' },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _detaildriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetaildriverRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
            _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"],
            _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetaildriverModule, { declarations: [_detaildriver_component__WEBPACK_IMPORTED_MODULE_3__["DetaildriverComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _detaildriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetaildriverRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
        _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"],
        _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetaildriverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_detaildriver_component__WEBPACK_IMPORTED_MODULE_3__["DetaildriverComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _detaildriver_routing_module__WEBPACK_IMPORTED_MODULE_2__["DetaildriverRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
                    _common_globalheader_globalheader_module__WEBPACK_IMPORTED_MODULE_7__["GlobalheaderModule"],
                    _common_globalfooter_globalfooter_module__WEBPACK_IMPORTED_MODULE_8__["GlobalfooterModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
                ],
                providers: [
                    { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OWL_DATE_TIME_LOCALE"], useValue: 'us' },
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-driver-detaildriver-detaildriver-module-es2015.js.map