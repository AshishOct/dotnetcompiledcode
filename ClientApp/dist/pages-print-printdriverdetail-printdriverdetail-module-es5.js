function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-print-printdriverdetail-printdriverdetail-module"], {
  /***/
  "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js ***!
    \*******************************************************************************/

  /*! exports provided: QRCodeComponent, QRCodeModule */

  /***/
  function node_modulesAngularxQrcode__ivy_ngcc__Fesm2015AngularxQrcodeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function () {
      return QRCodeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeModule", function () {
      return QRCodeModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! qrcode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/browser.js");
    /* harmony import */


    var qrcode__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_3__);

    var _c0 = ["qrcElement"];

    var QRCodeComponent =
    /*#__PURE__*/
    function () {
      function QRCodeComponent(renderer, platformId) {
        var _this = this;

        _classCallCheck(this, QRCodeComponent);

        this.renderer = renderer;
        this.platformId = platformId; // Deprecated

        this.colordark = '';
        this.colorlight = '';
        this.level = '';
        this.hidetitle = false;
        this.size = 0;
        this.usesvg = false; // Valid for 1.x and 2.x

        this.allowEmptyString = false;
        this.qrdata = ''; // New fields introduced in 2.0.0

        this.colorDark = '#000000ff';
        this.colorLight = '#ffffffff';
        this.cssClass = 'qrcode';
        this.elementType = 'canvas';
        this.errorCorrectionLevel = 'M';
        this.margin = 4;
        this.scale = 4;
        this.width = 10; // Introduced in 13.0.4, backported to 2.3.6

        this.alt = null;
        this.ariaLabel = null;
        this.title = null;
        this.qrcode = null;

        this.isValidQrCodeText = function (data) {
          if (_this.allowEmptyString === false) {
            return !(typeof data === 'undefined' || data === '' || data === 'null' || data === null);
          }

          return !(typeof data === 'undefined');
        }; // Deprectation warnings


        if (this.colordark !== '') {
          console.warn('[angularx-qrcode] colordark is deprecated, use colorDark.');
        }

        if (this.colorlight !== '') {
          console.warn('[angularx-qrcode] colorlight is deprecated, use colorLight.');
        }

        if (this.level !== '') {
          console.warn('[angularx-qrcode] level is deprecated, use errorCorrectionLevel.');
        }

        if (this.hidetitle !== false) {
          console.warn('[angularx-qrcode] hidetitle is deprecated.');
        }

        if (this.size !== 0) {
          console.warn('[angularx-qrcode] size is deprecated, use `width`. Defaults to 10.');
        }

        if (this.usesvg !== false) {
          console.warn("[angularx-qrcode] usesvg is deprecated, use [elementType]=\"'img'\".");
        }
      }

      _createClass(QRCodeComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            return;
          } // if (!QRCode) {
          //   QRCode = require('qrcode');
          // }


          this.createQRCode();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.createQRCode();
        }
      }, {
        key: "toDataURL",
        value: function toDataURL() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            Object(qrcode__WEBPACK_IMPORTED_MODULE_3__["toDataURL"])(_this2.qrdata, {
              color: {
                dark: _this2.colorDark,
                light: _this2.colorLight
              },
              errorCorrectionLevel: _this2.errorCorrectionLevel,
              margin: _this2.margin,
              scale: _this2.scale,
              version: _this2.version,
              width: _this2.width
            }, function (err, url) {
              if (err) {
                reject(err);
              } else {
                resolve(url);
              }
            });
          });
        }
      }, {
        key: "toCanvas",
        value: function toCanvas(canvas) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            Object(qrcode__WEBPACK_IMPORTED_MODULE_3__["toCanvas"])(canvas, _this3.qrdata, {
              color: {
                dark: _this3.colorDark,
                light: _this3.colorLight
              },
              errorCorrectionLevel: _this3.errorCorrectionLevel,
              margin: _this3.margin,
              scale: _this3.scale,
              version: _this3.version,
              width: _this3.width
            }, function (error) {
              if (error) {
                reject(error);
              } else {
                resolve('success');
              }
            });
          });
        }
      }, {
        key: "toSVG",
        value: function toSVG() {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            Object(qrcode__WEBPACK_IMPORTED_MODULE_3__["toString"])(_this4.qrdata, {
              color: {
                dark: _this4.colorDark,
                light: _this4.colorLight
              },
              errorCorrectionLevel: _this4.errorCorrectionLevel,
              margin: _this4.margin,
              scale: _this4.scale,
              type: 'svg',
              version: _this4.version,
              width: _this4.width
            }, function (err, url) {
              if (err) {
                reject(err);
              } else {
                resolve(url);
              }
            });
          });
        }
      }, {
        key: "renderElement",
        value: function renderElement(element) {
          var _iterator = _createForOfIteratorHelper(this.qrcElement.nativeElement.childNodes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var node = _step.value;
              this.renderer.removeChild(this.qrcElement.nativeElement, node);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.renderer.appendChild(this.qrcElement.nativeElement, element);
        }
      }, {
        key: "createQRCode",
        value: function createQRCode() {
          var _this5 = this;

          // Set sensitive defaults
          if (this.version && this.version > 40) {
            console.warn('[angularx-qrcode] max value for `version` is 40');
            this.version = 40;
          } else if (this.version && this.version < 1) {
            console.warn('[angularx-qrcode]`min value for `version` is 1');
            this.version = 1;
          } else if (this.version !== undefined && isNaN(this.version)) {
            console.warn('[angularx-qrcode] version should be a number, defaulting to auto');
            this.version = undefined;
          }

          try {
            if (!this.isValidQrCodeText(this.qrdata)) {
              throw new Error('[angularx-qrcode] Field `qrdata` is empty');
            }

            var element;

            switch (this.elementType) {
              case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function () {
                  if (_this5.ariaLabel) {
                    _this5.renderer.setAttribute(element, 'aria-label', "".concat(_this5.ariaLabel));
                  }

                  if (_this5.title) {
                    _this5.renderer.setAttribute(element, 'title', "".concat(_this5.title));
                  }

                  _this5.renderElement(element);
                })["catch"](function (e) {
                  console.error('[angularx-qrcode] canvas error: ', e);
                });
                break;

              case 'svg':
                element = this.renderer.createElement('svg', 'svg');
                this.toSVG().then(function (svgString) {
                  element.innerHTML = svgString;

                  _this5.renderer.setAttribute(element, 'height', "".concat(_this5.width));

                  _this5.renderer.setAttribute(element, 'width', "".concat(_this5.width));

                  _this5.renderElement(element);
                })["catch"](function (e) {
                  console.error('[angularx-qrcode] svg error: ', e);
                });
                break;

              case 'url':
              case 'img':
              default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (dataUrl) {
                  if (_this5.alt) {
                    element.setAttribute('alt', _this5.alt);
                  }

                  if (_this5.ariaLabel) {
                    element.setAttribute('aria-label', _this5.ariaLabel);
                  }

                  element.setAttribute('src', dataUrl);

                  if (_this5.title) {
                    element.setAttribute('title', _this5.title);
                  }

                  _this5.renderElement(element);
                })["catch"](function (e) {
                  console.error('[angularx-qrcode] img/url error: ', e);
                });
            }
          } catch (e) {
            console.error('[angularx-qrcode] Error generating QR Code: ', e.message);
          }
        }
      }]);

      return QRCodeComponent;
    }();

    QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) {
      return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
    };

    QRCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QRCodeComponent,
      selectors: [["qrcode"]],
      viewQuery: function QRCodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.qrcElement = _t.first);
        }
      },
      inputs: {
        colordark: "colordark",
        colorlight: "colorlight",
        level: "level",
        hidetitle: "hidetitle",
        size: "size",
        usesvg: "usesvg",
        allowEmptyString: "allowEmptyString",
        qrdata: "qrdata",
        colorDark: "colorDark",
        colorLight: "colorLight",
        cssClass: "cssClass",
        elementType: "elementType",
        errorCorrectionLevel: "errorCorrectionLevel",
        margin: "margin",
        scale: "scale",
        width: "width",
        alt: "alt",
        ariaLabel: "ariaLabel",
        title: "title",
        version: "version"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [["qrcElement", ""]],
      template: function QRCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    QRCodeComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "colordark", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "colorlight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "level", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "hidetitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "usesvg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "allowEmptyString", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "qrdata", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "colorDark", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "colorLight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "cssClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "elementType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "errorCorrectionLevel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "margin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "version", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "alt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QRCodeComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('qrcElement', {
      "static": true
    })], QRCodeComponent.prototype, "qrcElement", void 0);
    QRCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], QRCodeComponent);

    var QRCodeModule = function QRCodeModule() {
      _classCallCheck(this, QRCodeModule);
    };

    QRCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: QRCodeModule
    });
    QRCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function QRCodeModule_Factory(t) {
        return new (t || QRCodeModule)();
      },
      providers: []
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'qrcode',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "<div #qrcElement [class]=\"cssClass\"></div>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      }, {
        colordark: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        colorlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidetitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        usesvg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowEmptyString: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        qrdata: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        colorDark: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        colorLight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        elementType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorCorrectionLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        version: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        qrcElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['qrcElement', {
            "static": true
          }]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QRCodeModule, {
        declarations: [QRCodeComponent],
        exports: [QRCodeComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          providers: [],
          declarations: [QRCodeComponent],
          exports: [QRCodeComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angularx-qrcode
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angularx-qrcode.js.map

    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/isarray/index.js":
  /*!********************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/isarray/index.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesIsarrayIndexJs(module, exports) {
    var toString = {}.toString;

    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/browser.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/browser.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibBrowserJs(module, exports, __webpack_require__) {
    var canPromise = __webpack_require__(
    /*! ./can-promise */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/can-promise.js");

    var QRCode = __webpack_require__(
    /*! ./core/qrcode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/qrcode.js");

    var CanvasRenderer = __webpack_require__(
    /*! ./renderer/canvas */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/canvas.js");

    var SvgRenderer = __webpack_require__(
    /*! ./renderer/svg-tag.js */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/svg-tag.js");

    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      var args = [].slice.call(arguments, 1);
      var argsNum = args.length;
      var isLastArgCb = typeof args[argsNum - 1] === 'function';

      if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
      }

      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error('Too few arguments provided');
        }

        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = undefined;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === 'undefined') {
            cb = opts;
            opts = undefined;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = undefined;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error('Too few arguments provided');
        }

        if (argsNum === 1) {
          text = canvas;
          canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = undefined;
        }

        return new Promise(function (resolve, reject) {
          try {
            var data = QRCode.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }

      try {
        var data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }

    exports.create = QRCode.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL); // only svg for now.

    exports.toString = renderCanvas.bind(null, function (data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/can-promise.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/can-promise.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCanPromiseJs(module, exports) {
    // can-promise has a crash in some versions of react native that dont have
    // standard global objects
    // https://github.com/soldair/node-qrcode/issues/157
    module.exports = function () {
      return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alignment-pattern.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alignment-pattern.js ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreAlignmentPatternJs(module, exports, __webpack_require__) {
    /**
     * Alignment pattern are fixed reference pattern in defined positions
     * in a matrix symbology, which enables the decode software to re-synchronise
     * the coordinate mapping of the image modules in the event of moderate amounts
     * of distortion of the image.
     *
     * Alignment patterns are present only in QR Code symbols of version 2 or larger
     * and their number depends on the symbol version.
     */
    var getSymbolSize = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js").getSymbolSize;
    /**
     * Calculate the row/column coordinates of the center module of each alignment pattern
     * for the specified QR Code version.
     *
     * The alignment patterns are positioned symmetrically on either side of the diagonal
     * running from the top left corner of the symbol to the bottom right corner.
     *
     * Since positions are simmetrical only half of the coordinates are returned.
     * Each item of the array will represent in turn the x and y coordinate.
     * @see {@link getPositions}
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinate
     */


    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      var posCount = Math.floor(version / 7) + 2;
      var size = getSymbolSize(version);
      var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      var positions = [size - 7]; // Last coord is always (size - 7)

      for (var i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }

      positions.push(6); // First coord is always 6

      return positions.reverse();
    };
    /**
     * Returns an array containing the positions of each alignment pattern.
     * Each array's element represent the center point of the pattern as (x, y) coordinates
     *
     * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
     * and filtering out the items that overlaps with finder pattern
     *
     * @example
     * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
     * The alignment patterns, therefore, are to be centered on (row, column)
     * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
     * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
     * and are not therefore used for alignment patterns.
     *
     * var pos = getPositions(7)
     * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */


    exports.getPositions = function getPositions(version) {
      var coords = [];
      var pos = exports.getRowColCoords(version);
      var posLength = pos.length;

      for (var i = 0; i < posLength; i++) {
        for (var j = 0; j < posLength; j++) {
          // Skip if position is occupied by finder patterns
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            // top-right
            continue;
          }

          coords.push([pos[i], pos[j]]);
        }
      }

      return coords;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alphanumeric-data.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alphanumeric-data.js ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreAlphanumericDataJs(module, exports, __webpack_require__) {
    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");
    /**
     * Array of characters available in alphanumeric mode
     *
     * As per QR Code specification, to each character
     * is assigned a value from 0 to 44 which in this case coincides
     * with the array index
     *
     * @type {Array}
     */


    var ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];

    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }

    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };

    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };

    AlphanumericData.prototype.write = function write(bitBuffer) {
      var i; // Input data characters are divided into groups of two characters
      // and encoded as 11-bit binary codes.

      for (i = 0; i + 2 <= this.data.length; i += 2) {
        // The character value of the first character is multiplied by 45
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45; // The character value of the second digit is added to the product

        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]); // The sum is then stored as 11-bit binary number

        bitBuffer.put(value, 11);
      } // If the number of input data characters is not a multiple of two,
      // the character value of the final character is encoded as a 6-bit binary number.


      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };

    module.exports = AlphanumericData;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-buffer.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-buffer.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreBitBufferJs(module, exports) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }

    BitBuffer.prototype = {
      get: function get(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function put(num, length) {
        for (var i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function getLengthInBits() {
        return this.length;
      },
      putBit: function putBit(bit) {
        var bufIndex = Math.floor(this.length / 8);

        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }

        if (bit) {
          this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }

        this.length++;
      }
    };
    module.exports = BitBuffer;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-matrix.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-matrix.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreBitMatrixJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");
    /**
     * Helper class to handle QR Code symbol modules
     *
     * @param {Number} size Symbol size
     */


    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
      }

      this.size = size;
      this.data = new Buffer(size * size);
      this.data.fill(0);
      this.reservedBit = new Buffer(size * size);
      this.reservedBit.fill(0);
    }
    /**
     * Set bit value at specified location
     * If reserved flag is set, this bit will be ignored during masking process
     *
     * @param {Number}  row
     * @param {Number}  col
     * @param {Boolean} value
     * @param {Boolean} reserved
     */


    BitMatrix.prototype.set = function (row, col, value, reserved) {
      var index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    /**
     * Returns bit value at specified location
     *
     * @param  {Number}  row
     * @param  {Number}  col
     * @return {Boolean}
     */


    BitMatrix.prototype.get = function (row, col) {
      return this.data[row * this.size + col];
    };
    /**
     * Applies xor operator at specified location
     * (used during masking process)
     *
     * @param {Number}  row
     * @param {Number}  col
     * @param {Boolean} value
     */


    BitMatrix.prototype.xor = function (row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    /**
     * Check if bit at specified location is reserved
     *
     * @param {Number}   row
     * @param {Number}   col
     * @return {Boolean}
     */


    BitMatrix.prototype.isReserved = function (row, col) {
      return this.reservedBit[row * this.size + col];
    };

    module.exports = BitMatrix;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/byte-data.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/byte-data.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreByteDataJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");

    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    function ByteData(data) {
      this.mode = Mode.BYTE;
      this.data = new Buffer(data);
    }

    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };

    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };

    ByteData.prototype.write = function (bitBuffer) {
      for (var i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };

    module.exports = ByteData;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-code.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-code.js ***!
    \********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreErrorCorrectionCodeJs(module, exports, __webpack_require__) {
    var ECLevel = __webpack_require__(
    /*! ./error-correction-level */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-level.js");

    var EC_BLOCKS_TABLE = [// L  M  Q  H
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
    var EC_CODEWORDS_TABLE = [// L  M  Q  H
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    /**
     * Returns the number of error correction block that the QR Code should contain
     * for the specified version and error correction level.
     *
     * @param  {Number} version              QR Code version
     * @param  {Number} errorCorrectionLevel Error correction level
     * @return {Number}                      Number of error correction blocks
     */

    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];

        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];

        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];

        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];

        default:
          return undefined;
      }
    };
    /**
     * Returns the number of error correction codewords to use for the specified
     * version and error correction level.
     *
     * @param  {Number} version              QR Code version
     * @param  {Number} errorCorrectionLevel Error correction level
     * @return {Number}                      Number of error correction codewords
     */


    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];

        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];

        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];

        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];

        default:
          return undefined;
      }
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-level.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-level.js ***!
    \*********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreErrorCorrectionLevelJs(module, exports) {
    exports.L = {
      bit: 1
    };
    exports.M = {
      bit: 0
    };
    exports.Q = {
      bit: 3
    };
    exports.H = {
      bit: 2
    };

    function fromString(string) {
      if (typeof string !== 'string') {
        throw new Error('Param is not a string');
      }

      var lcStr = string.toLowerCase();

      switch (lcStr) {
        case 'l':
        case 'low':
          return exports.L;

        case 'm':
        case 'medium':
          return exports.M;

        case 'q':
        case 'quartile':
          return exports.Q;

        case 'h':
        case 'high':
          return exports.H;

        default:
          throw new Error('Unknown EC Level: ' + string);
      }
    }

    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
    };

    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }

      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/finder-pattern.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/finder-pattern.js ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreFinderPatternJs(module, exports, __webpack_require__) {
    var getSymbolSize = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js").getSymbolSize;

    var FINDER_PATTERN_SIZE = 7;
    /**
     * Returns an array containing the positions of each finder pattern.
     * Each array's element represent the top-left point of the pattern as (x, y) coordinates
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */

    exports.getPositions = function getPositions(version) {
      var size = getSymbolSize(version);
      return [// top-left
      [0, 0], // top-right
      [size - FINDER_PATTERN_SIZE, 0], // bottom-left
      [0, size - FINDER_PATTERN_SIZE]];
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/format-info.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/format-info.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreFormatInfoJs(module, exports, __webpack_require__) {
    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js");

    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    /**
     * Returns format information with relative error correction bits
     *
     * The format information is a 15-bit sequence containing 5 data bits,
     * with 10 error correction bits calculated using the (15, 5) BCH code.
     *
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Number} mask                 Mask pattern
     * @return {Number}                      Encoded format information bits
     */

    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      var data = errorCorrectionLevel.bit << 3 | mask;
      var d = data << 10;

      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      } // xor final data with mask pattern in order to ensure that
      // no combination of Error Correction Level and data mask pattern
      // will result in an all-zero data string


      return (data << 10 | d) ^ G15_MASK;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/galois-field.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/galois-field.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreGaloisFieldJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");

    var EXP_TABLE;
    var LOG_TABLE;

    if (Buffer.alloc) {
      EXP_TABLE = Buffer.alloc(512);
      LOG_TABLE = Buffer.alloc(256);
    } else {
      EXP_TABLE = new Buffer(512);
      LOG_TABLE = new Buffer(256);
    }
    /**
     * Precompute the log and anti-log tables for faster computation later
     *
     * For each possible value in the galois field 2^8, we will pre-compute
     * the logarithm and anti-logarithm (exponential) of this value
     *
     * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
     */


    ;

    (function initTables() {
      var x = 1;

      for (var i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.

        if (x & 0x100) {
          // similar to x >= 256, but a lot faster (because 0x100 == 256)
          x ^= 0x11D;
        }
      } // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
      // stay inside the bounds (because we will mainly use this table for the multiplication of
      // two GF numbers, no more).
      // @see {@link mul}


      for (i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    /**
     * Returns log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */


    exports.log = function log(n) {
      if (n < 1) throw new Error('log(' + n + ')');
      return LOG_TABLE[n];
    };
    /**
     * Returns anti-log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */


    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    /**
     * Multiplies two number inside Galois Field
     *
     * @param  {Number} x
     * @param  {Number} y
     * @return {Number}
     */


    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0; // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
      // @see {@link initTables}

      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/kanji-data.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/kanji-data.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreKanjiDataJs(module, exports, __webpack_require__) {
    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js");

    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }

    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };

    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };

    KanjiData.prototype.write = function (bitBuffer) {
      var i; // In the Shift JIS system, Kanji characters are represented by a two byte combination.
      // These byte values are shifted from the JIS X 0208 values.
      // JIS X 0208 gives details of the shift coded representation.

      for (i = 0; i < this.data.length; i++) {
        var value = Utils.toSJIS(this.data[i]); // For characters with Shift JIS values from 0x8140 to 0x9FFC:

        if (value >= 0x8140 && value <= 0x9FFC) {
          // Subtract 0x8140 from Shift JIS value
          value -= 0x8140; // For characters with Shift JIS values from 0xE040 to 0xEBBF
        } else if (value >= 0xE040 && value <= 0xEBBF) {
          // Subtract 0xC140 from Shift JIS value
          value -= 0xC140;
        } else {
          throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        } // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product


        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff); // Convert result to a 13-bit binary string

        bitBuffer.put(value, 13);
      }
    };

    module.exports = KanjiData;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mask-pattern.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mask-pattern.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreMaskPatternJs(module, exports) {
    /**
     * Data mask pattern reference
     * @type {Object}
     */
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    /**
     * Weighted penalty scores for the undesirable features
     * @type {Object}
     */

    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    /**
     * Check if mask pattern value is valid
     *
     * @param  {Number}  mask    Mask pattern
     * @return {Boolean}         true if valid, false otherwise
     */

    exports.isValid = function isValid(mask) {
      return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    /**
     * Returns mask pattern from a value.
     * If value is not valid, returns undefined
     *
     * @param  {Number|String} value        Mask pattern value
     * @return {Number}                     Valid mask pattern or undefined
     */


    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : undefined;
    };
    /**
    * Find adjacent modules in row/column with the same color
    * and assign a penalty value.
    *
    * Points: N1 + i
    * i is the amount by which the number of adjacent modules of the same color exceeds 5
    */


    exports.getPenaltyN1 = function getPenaltyN1(data) {
      var size = data.size;
      var points = 0;
      var sameCountCol = 0;
      var sameCountRow = 0;
      var lastCol = null;
      var lastRow = null;

      for (var row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;

        for (var col = 0; col < size; col++) {
          var module = data.get(row, col);

          if (module === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module;
            sameCountCol = 1;
          }

          module = data.get(col, row);

          if (module === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module;
            sameCountRow = 1;
          }
        }

        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }

      return points;
    };
    /**
     * Find 2x2 blocks with the same color and assign a penalty value
     *
     * Points: N2 * (m - 1) * (n - 1)
     */


    exports.getPenaltyN2 = function getPenaltyN2(data) {
      var size = data.size;
      var points = 0;

      for (var row = 0; row < size - 1; row++) {
        for (var col = 0; col < size - 1; col++) {
          var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }

      return points * PenaltyScores.N2;
    };
    /**
     * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
     * preceded or followed by light area 4 modules wide
     *
     * Points: N3 * number of pattern found
     */


    exports.getPenaltyN3 = function getPenaltyN3(data) {
      var size = data.size;
      var points = 0;
      var bitsCol = 0;
      var bitsRow = 0;

      for (var row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;

        for (var col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
          if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
          bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
          if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
      }

      return points * PenaltyScores.N3;
    };
    /**
     * Calculate proportion of dark modules in entire symbol
     *
     * Points: N4 * k
     *
     * k is the rating of the deviation of the proportion of dark modules
     * in the symbol from 50% in steps of 5%
     */


    exports.getPenaltyN4 = function getPenaltyN4(data) {
      var darkCount = 0;
      var modulesCount = data.data.length;

      for (var i = 0; i < modulesCount; i++) {
        darkCount += data.data[i];
      }

      var k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    /**
     * Return mask value at given position
     *
     * @param  {Number} maskPattern Pattern reference value
     * @param  {Number} i           Row
     * @param  {Number} j           Column
     * @return {Boolean}            Mask value
     */


    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;

        case exports.Patterns.PATTERN001:
          return i % 2 === 0;

        case exports.Patterns.PATTERN010:
          return j % 3 === 0;

        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;

        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;

        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;

        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;

        default:
          throw new Error('bad maskPattern:' + maskPattern);
      }
    }
    /**
     * Apply a mask pattern to a BitMatrix
     *
     * @param  {Number}    pattern Pattern reference number
     * @param  {BitMatrix} data    BitMatrix data
     */


    exports.applyMask = function applyMask(pattern, data) {
      var size = data.size;

      for (var col = 0; col < size; col++) {
        for (var row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    /**
     * Returns the best mask pattern for data
     *
     * @param  {BitMatrix} data
     * @return {Number} Mask pattern reference number
     */


    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      var numPatterns = Object.keys(exports.Patterns).length;
      var bestPattern = 0;
      var lowerPenalty = Infinity;

      for (var p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data); // Calculate penalty

        var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data); // Undo previously applied mask

        exports.applyMask(p, data);

        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }

      return bestPattern;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreModeJs(module, exports, __webpack_require__) {
    var VersionCheck = __webpack_require__(
    /*! ./version-check */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version-check.js");

    var Regex = __webpack_require__(
    /*! ./regex */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/regex.js");
    /**
     * Numeric mode encodes data from the decimal digit set (0 - 9)
     * (byte values 30HEX to 39HEX).
     * Normally, 3 data characters are represented by 10 bits.
     *
     * @type {Object}
     */


    exports.NUMERIC = {
      id: 'Numeric',
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    /**
     * Alphanumeric mode encodes data from a set of 45 characters,
     * i.e. 10 numeric digits (0 - 9),
     *      26 alphabetic characters (A - Z),
     *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
     * Normally, two input characters are represented by 11 bits.
     *
     * @type {Object}
     */

    exports.ALPHANUMERIC = {
      id: 'Alphanumeric',
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    /**
     * In byte mode, data is encoded at 8 bits per character.
     *
     * @type {Object}
     */

    exports.BYTE = {
      id: 'Byte',
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    /**
     * The Kanji mode efficiently encodes Kanji characters in accordance with
     * the Shift JIS system based on JIS X 0208.
     * The Shift JIS values are shifted from the JIS X 0208 values.
     * JIS X 0208 gives details of the shift coded representation.
     * Each two-byte character value is compacted to a 13-bit binary codeword.
     *
     * @type {Object}
     */

    exports.KANJI = {
      id: 'Kanji',
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    /**
     * Mixed mode will contain a sequences of data in a combination of any of
     * the modes described above
     *
     * @type {Object}
     */

    exports.MIXED = {
      bit: -1
    };
    /**
     * Returns the number of bits needed to store the data length
     * according to QR Code specifications.
     *
     * @param  {Mode}   mode    Data mode
     * @param  {Number} version QR Code version
     * @return {Number}         Number of bits
     */

    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);

      if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid version: ' + version);
      }

      if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    /**
     * Returns the most efficient mode to store the specified data
     *
     * @param  {String} dataStr Input data string
     * @return {Mode}           Best mode
     */


    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
    };
    /**
     * Return mode name as string
     *
     * @param {Mode} mode Mode object
     * @returns {String}  Mode name
     */


    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error('Invalid mode');
    };
    /**
     * Check if input param is a valid mode object
     *
     * @param   {Mode}    mode Mode object
     * @returns {Boolean} True if valid mode, false otherwise
     */


    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    /**
     * Get mode object from its name
     *
     * @param   {String} string Mode name
     * @returns {Mode}          Mode object
     */


    function fromString(string) {
      if (typeof string !== 'string') {
        throw new Error('Param is not a string');
      }

      var lcStr = string.toLowerCase();

      switch (lcStr) {
        case 'numeric':
          return exports.NUMERIC;

        case 'alphanumeric':
          return exports.ALPHANUMERIC;

        case 'kanji':
          return exports.KANJI;

        case 'byte':
          return exports.BYTE;

        default:
          throw new Error('Unknown mode: ' + string);
      }
    }
    /**
     * Returns mode from a value.
     * If value is not a valid mode, returns defaultValue
     *
     * @param  {Mode|String} value        Encoding mode
     * @param  {Mode}        defaultValue Fallback value
     * @return {Mode}                     Encoding mode
     */


    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }

      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/numeric-data.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/numeric-data.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreNumericDataJs(module, exports, __webpack_require__) {
    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }

    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };

    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };

    NumericData.prototype.write = function write(bitBuffer) {
      var i, group, value; // The input data string is divided into groups of three digits,
      // and each group is converted to its 10-bit binary equivalent.

      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      } // If the number of input digits is not an exact multiple of three,
      // the final one or two digits are converted to 4 or 7 bits respectively.


      var remainingNum = this.data.length - i;

      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };

    module.exports = NumericData;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/polynomial.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/polynomial.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCorePolynomialJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");

    var GF = __webpack_require__(
    /*! ./galois-field */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/galois-field.js");
    /**
     * Multiplies two polynomials inside Galois Field
     *
     * @param  {Buffer} p1 Polynomial
     * @param  {Buffer} p2 Polynomial
     * @return {Buffer}    Product of p1 and p2
     */


    exports.mul = function mul(p1, p2) {
      var coeff = new Buffer(p1.length + p2.length - 1);
      coeff.fill(0);

      for (var i = 0; i < p1.length; i++) {
        for (var j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }

      return coeff;
    };
    /**
     * Calculate the remainder of polynomials division
     *
     * @param  {Buffer} divident Polynomial
     * @param  {Buffer} divisor  Polynomial
     * @return {Buffer}          Remainder
     */


    exports.mod = function mod(divident, divisor) {
      var result = new Buffer(divident);

      while (result.length - divisor.length >= 0) {
        var coeff = result[0];

        for (var i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        } // remove all zeros from buffer head


        var offset = 0;

        while (offset < result.length && result[offset] === 0) {
          offset++;
        }

        result = result.slice(offset);
      }

      return result;
    };
    /**
     * Generate an irreducible generator polynomial of specified degree
     * (used by Reed-Solomon encoder)
     *
     * @param  {Number} degree Degree of the generator polynomial
     * @return {Buffer}        Buffer containing polynomial coefficients
     */


    exports.generateECPolynomial = function generateECPolynomial(degree) {
      var poly = new Buffer([1]);

      for (var i = 0; i < degree; i++) {
        poly = exports.mul(poly, [1, GF.exp(i)]);
      }

      return poly;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/qrcode.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/qrcode.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreQrcodeJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");

    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js");

    var ECLevel = __webpack_require__(
    /*! ./error-correction-level */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-level.js");

    var BitBuffer = __webpack_require__(
    /*! ./bit-buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-buffer.js");

    var BitMatrix = __webpack_require__(
    /*! ./bit-matrix */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/bit-matrix.js");

    var AlignmentPattern = __webpack_require__(
    /*! ./alignment-pattern */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alignment-pattern.js");

    var FinderPattern = __webpack_require__(
    /*! ./finder-pattern */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/finder-pattern.js");

    var MaskPattern = __webpack_require__(
    /*! ./mask-pattern */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mask-pattern.js");

    var ECCode = __webpack_require__(
    /*! ./error-correction-code */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-code.js");

    var ReedSolomonEncoder = __webpack_require__(
    /*! ./reed-solomon-encoder */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/reed-solomon-encoder.js");

    var Version = __webpack_require__(
    /*! ./version */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version.js");

    var FormatInfo = __webpack_require__(
    /*! ./format-info */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/format-info.js");

    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    var Segments = __webpack_require__(
    /*! ./segments */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/segments.js");

    var isArray = __webpack_require__(
    /*! isarray */
    "./node_modules/angularx-qrcode/node_modules/isarray/index.js");
    /**
     * QRCode for JavaScript
     *
     * modified by Ryan Day for nodejs support
     * Copyright (c) 2011 Ryan Day
     *
     * Licensed under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     *
    //---------------------------------------------------------------------
    // QRCode for JavaScript
    //
    // Copyright (c) 2009 Kazuhiko Arase
    //
    // URL: http://www.d-project.com/
    //
    // Licensed under the MIT license:
    //   http://www.opensource.org/licenses/mit-license.php
    //
    // The word "QR Code" is registered trademark of
    // DENSO WAVE INCORPORATED
    //   http://www.denso-wave.com/qrcode/faqpatent-e.html
    //
    //---------------------------------------------------------------------
    */

    /**
     * Add finder patterns bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */


    function setupFinderPattern(matrix, version) {
      var size = matrix.size;
      var pos = FinderPattern.getPositions(version);

      for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];

        for (var r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;

          for (var c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;

            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    /**
     * Add timing pattern bits to matrix
     *
     * Note: this function must be called before {@link setupAlignmentPattern}
     *
     * @param  {BitMatrix} matrix Modules matrix
     */


    function setupTimingPattern(matrix) {
      var size = matrix.size;

      for (var r = 8; r < size - 8; r++) {
        var value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    /**
     * Add alignment patterns bits to matrix
     *
     * Note: this function must be called after {@link setupTimingPattern}
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */


    function setupAlignmentPattern(matrix, version) {
      var pos = AlignmentPattern.getPositions(version);

      for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];

        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    /**
     * Add version info bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */


    function setupVersionInfo(matrix, version) {
      var size = matrix.size;
      var bits = Version.getEncodedBits(version);
      var row, col, mod;

      for (var i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    /**
     * Add format info bits to matrix
     *
     * @param  {BitMatrix} matrix               Modules matrix
     * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
     * @param  {Number}    maskPattern          Mask pattern reference value
     */


    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      var size = matrix.size;
      var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      var i, mod;

      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1; // vertical

        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        } // horizontal


        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      } // fixed module


      matrix.set(size - 8, 8, 1, true);
    }
    /**
     * Add encoded data bits to matrix
     *
     * @param  {BitMatrix} matrix Modules matrix
     * @param  {Buffer}    data   Data codewords
     */


    function setupData(matrix, data) {
      var size = matrix.size;
      var inc = -1;
      var row = size - 1;
      var bitIndex = 7;
      var byteIndex = 0;

      for (var col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;

        while (true) {
          for (var c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              var dark = false;

              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }

              matrix.set(row, col - c, dark);
              bitIndex--;

              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    /**
     * Create encoded codewords from data input
     *
     * @param  {Number}   version              QR Code version
     * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
     * @param  {ByteData} data                 Data input
     * @return {Buffer}                        Buffer containing encoded codewords
     */


    function createData(version, errorCorrectionLevel, segments) {
      // Prepare data buffer
      var buffer = new BitBuffer();
      segments.forEach(function (data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4); // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.

        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version)); // add binary data sequence to buffer

        data.write(buffer);
      }); // Calculate required number of bits

      var totalCodewords = Utils.getSymbolTotalCodewords(version);
      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8; // Add a terminator.
      // If the bit string is shorter than the total number of required bits,
      // a terminator of up to four 0s must be added to the right side of the string.
      // If the bit string is more than four bits shorter than the required number of bits,
      // add four 0s to the end.

      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      } // If the bit string is fewer than four bits shorter, add only the number of 0s that
      // are needed to reach the required number of bits.
      // After adding the terminator, if the number of bits in the string is not a multiple of 8,
      // pad the string on the right with 0s to make the string's length a multiple of 8.


      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      } // Add pad bytes if the string is still shorter than the total number of required bits.
      // Extend the buffer to fill the data capacity of the symbol corresponding to
      // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
      // and 00010001 (0x11) alternately.


      var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;

      for (var i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
      }

      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    /**
     * Encode input data with Reed-Solomon and return codewords with
     * relative error correction bits
     *
     * @param  {BitBuffer} bitBuffer            Data to encode
     * @param  {Number}    version              QR Code version
     * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
     * @return {Buffer}                         Buffer containing encoded codewords
     */


    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      // Total codewords for this QR code version (Data + Error correction)
      var totalCodewords = Utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

      var dataTotalCodewords = totalCodewords - ecTotalCodewords; // Total number of blocks

      var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel); // Calculate how many blocks each group should contain

      var blocksInGroup2 = totalCodewords % ecTotalBlocks;
      var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1; // Number of EC codewords is the same for both groups

      var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1; // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount

      var rs = new ReedSolomonEncoder(ecCount);
      var offset = 0;
      var dcData = new Array(ecTotalBlocks);
      var ecData = new Array(ecTotalBlocks);
      var maxDataSize = 0;
      var buffer = new Buffer(bitBuffer.buffer); // Divide the buffer into the required number of blocks

      for (var b = 0; b < ecTotalBlocks; b++) {
        var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2; // extract a block of data from buffer

        dcData[b] = buffer.slice(offset, offset + dataSize); // Calculate EC codewords for this data block

        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      } // Create final data
      // Interleave the data and error correction codewords from each block


      var data = new Buffer(totalCodewords);
      var index = 0;
      var i, r; // Add data codewords

      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      } // Apped EC codewords


      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }

      return data;
    }
    /**
     * Build QR Code symbol
     *
     * @param  {String} data                 Input string
     * @param  {Number} version              QR Code version
     * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
     * @param  {MaskPattern} maskPattern     Mask pattern
     * @return {Object}                      Object containing symbol data
     */


    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      var segments;

      if (isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === 'string') {
        var estimatedVersion = version;

        if (!estimatedVersion) {
          var rawSegments = Segments.rawSplit(data); // Estimate best version that can contain raw splitted segments

          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        } // Build optimized segments
        // If estimated version is undefined, try with the highest version


        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error('Invalid data');
      } // Get the min version that can contain data


      var bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel); // If no version is found, data cannot be stored

      if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
      } // If not specified, use min version as default


      if (!version) {
        version = bestVersion; // Check if the specified version can contain the data
      } else if (version < bestVersion) {
        throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
      }

      var dataBits = createData(version, errorCorrectionLevel, segments); // Allocate matrix buffer

      var moduleCount = Utils.getSymbolSize(version);
      var modules = new BitMatrix(moduleCount); // Add function modules

      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version); // Add temporary dummy bits for format info just to set them as reserved.
      // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
      // since the masking operation must be performed only on the encoding region.
      // These blocks will be replaced with correct values later in code.

      setupFormatInfo(modules, errorCorrectionLevel, 0);

      if (version >= 7) {
        setupVersionInfo(modules, version);
      } // Add data codewords


      setupData(modules, dataBits);

      if (isNaN(maskPattern)) {
        // Find best mask pattern
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
      } // Apply mask pattern


      MaskPattern.applyMask(maskPattern, modules); // Replace format info bits with correct values

      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
      };
    }
    /**
     * QR Code
     *
     * @param {String | Array} data                 Input data
     * @param {Object} options                      Optional configurations
     * @param {Number} options.version              QR Code version
     * @param {String} options.errorCorrectionLevel Error correction level
     * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
     */


    exports.create = function create(data, options) {
      if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
      }

      var errorCorrectionLevel = ECLevel.M;
      var version;
      var mask;

      if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);

        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }

      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/reed-solomon-encoder.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
    \*******************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreReedSolomonEncoderJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! ../utils/buffer */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js");

    var Polynomial = __webpack_require__(
    /*! ./polynomial */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/polynomial.js");

    function ReedSolomonEncoder(degree) {
      this.genPoly = undefined;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    /**
     * Initialize the encoder.
     * The input param should correspond to the number of error correction codewords.
     *
     * @param  {Number} degree
     */


    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      // create an irreducible generator polynomial
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    /**
     * Encodes a chunk of data
     *
     * @param  {Buffer} data Buffer containing input data
     * @return {Buffer}      Buffer containing encoded data
     */


    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error('Encoder not initialized');
      } // Calculate EC for this data block
      // extends data size to data+genPoly size


      var pad = new Buffer(this.degree);
      pad.fill(0);
      var paddedData = Buffer.concat([data, pad], data.length + this.degree); // The error correction codewords are the remainder after dividing the data codewords
      // by a generator polynomial

      var remainder = Polynomial.mod(paddedData, this.genPoly); // return EC data blocks (last n byte, where n is the degree of genPoly)
      // If coefficients number in remainder are less than genPoly degree,
      // pad with 0s to the left to reach the needed number of coefficients

      var start = this.degree - remainder.length;

      if (start > 0) {
        var buff = new Buffer(this.degree);
        buff.fill(0);
        remainder.copy(buff, start);
        return buff;
      }

      return remainder;
    };

    module.exports = ReedSolomonEncoder;
    /***/
  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/regex.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/regex.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreRegexJs(module, exports) {
    var numeric = '[0-9]+';
    var alphanumeric = '[A-Z $%*+\\-./:]+';
    var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
    kanji = kanji.replace(/u/g, "\\u");

    var _byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

    exports.KANJI = new RegExp(kanji, 'g');
    exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
    exports.BYTE = new RegExp(_byte, 'g');
    exports.NUMERIC = new RegExp(numeric, 'g');
    exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
    var TEST_KANJI = new RegExp('^' + kanji + '$');
    var TEST_NUMERIC = new RegExp('^' + numeric + '$');
    var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };

    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };

    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/segments.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/segments.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreSegmentsJs(module, exports, __webpack_require__) {
    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    var NumericData = __webpack_require__(
    /*! ./numeric-data */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/numeric-data.js");

    var AlphanumericData = __webpack_require__(
    /*! ./alphanumeric-data */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/alphanumeric-data.js");

    var ByteData = __webpack_require__(
    /*! ./byte-data */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/byte-data.js");

    var KanjiData = __webpack_require__(
    /*! ./kanji-data */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/kanji-data.js");

    var Regex = __webpack_require__(
    /*! ./regex */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/regex.js");

    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js");

    var dijkstra = __webpack_require__(
    /*! dijkstrajs */
    "./node_modules/dijkstrajs/dijkstra.js");
    /**
     * Returns UTF8 byte length
     *
     * @param  {String} str Input string
     * @return {Number}     Number of byte
     */


    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    /**
     * Get a list of segments of the specified mode
     * from a string
     *
     * @param  {Mode}   mode Segment mode
     * @param  {String} str  String to process
     * @return {Array}       Array of object with segments data
     */


    function getSegments(regex, mode, str) {
      var segments = [];
      var result;

      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode: mode,
          length: result[0].length
        });
      }

      return segments;
    }
    /**
     * Extracts a series of segments with the appropriate
     * modes from a string
     *
     * @param  {String} dataStr Input string
     * @return {Array}          Array of object with segments data
     */


    function getSegmentsFromString(dataStr) {
      var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      var byteSegs;
      var kanjiSegs;

      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }

      var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function (s1, s2) {
        return s1.index - s2.index;
      }).map(function (obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    /**
     * Returns how many bits are needed to encode a string of
     * specified length with the specified mode
     *
     * @param  {Number} length String length
     * @param  {Mode} mode     Segment mode
     * @return {Number}        Bit length
     */


    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);

        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);

        case Mode.KANJI:
          return KanjiData.getBitsLength(length);

        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    /**
     * Merges adjacent segments which have the same mode
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */


    function mergeSegments(segs) {
      return segs.reduce(function (acc, curr) {
        var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;

        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }

        acc.push(curr);
        return acc;
      }, []);
    }
    /**
     * Generates a list of all possible nodes combination which
     * will be used to build a segments graph.
     *
     * Nodes are divided by groups. Each group will contain a list of all the modes
     * in which is possible to encode the given text.
     *
     * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
     * The group for '12345' will contain then 3 objects, one for each
     * possible encoding mode.
     *
     * Each node represents a possible segment.
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */


    function buildNodes(segs) {
      var nodes = [];

      for (var i = 0; i < segs.length; i++) {
        var seg = segs[i];

        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.ALPHANUMERIC,
              length: seg.length
            }, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;

          case Mode.ALPHANUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;

          case Mode.KANJI:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
            break;

          case Mode.BYTE:
            nodes.push([{
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
        }
      }

      return nodes;
    }
    /**
     * Builds a graph from a list of nodes.
     * All segments in each node group will be connected with all the segments of
     * the next group and so on.
     *
     * At each connection will be assigned a weight depending on the
     * segment's byte length.
     *
     * @param  {Array} nodes    Array of object with segments data
     * @param  {Number} version QR Code version
     * @return {Object}         Graph of all possible segments
     */


    function buildGraph(nodes, version) {
      var table = {};
      var graph = {
        'start': {}
      };
      var prevNodeIds = ['start'];

      for (var i = 0; i < nodes.length; i++) {
        var nodeGroup = nodes[i];
        var currentNodeIds = [];

        for (var j = 0; j < nodeGroup.length; j++) {
          var node = nodeGroup[j];
          var key = '' + i + j;
          currentNodeIds.push(key);
          table[key] = {
            node: node,
            lastCount: 0
          };
          graph[key] = {};

          for (var n = 0; n < prevNodeIds.length; n++) {
            var prevNodeId = prevNodeIds[n];

            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
            }
          }
        }

        prevNodeIds = currentNodeIds;
      }

      for (n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]]['end'] = 0;
      }

      return {
        map: graph,
        table: table
      };
    }
    /**
     * Builds a segment from a specified data and mode.
     * If a mode is not specified, the more suitable will be used.
     *
     * @param  {String} data             Input data
     * @param  {Mode | String} modesHint Data mode
     * @return {Segment}                 Segment
     */


    function buildSingleSegment(data, modesHint) {
      var mode;
      var bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode); // Make sure data can be encoded

      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
      } // Use Mode.BYTE if Kanji support is disabled


      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }

      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);

        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);

        case Mode.KANJI:
          return new KanjiData(data);

        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    /**
     * Builds a list of segments from an array.
     * Array can contain Strings or Objects with segment's info.
     *
     * For each item which is a string, will be generated a segment with the given
     * string and the more appropriate encoding mode.
     *
     * For each item which is an object, will be generated a segment with the given
     * data and mode.
     * Objects must contain at least the property "data".
     * If property "mode" is not present, the more suitable mode will be used.
     *
     * @param  {Array} array Array of objects with segments data
     * @return {Array}       Array of Segments
     */


    exports.fromArray = function fromArray(array) {
      return array.reduce(function (acc, seg) {
        if (typeof seg === 'string') {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }

        return acc;
      }, []);
    };
    /**
     * Builds an optimized sequence of segments from a string,
     * which will produce the shortest possible bitstream.
     *
     * @param  {String} data    Input string
     * @param  {Number} version QR Code version
     * @return {Array}          Array of segments
     */


    exports.fromString = function fromString(data, version) {
      var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      var nodes = buildNodes(segs);
      var graph = buildGraph(nodes, version);
      var path = dijkstra.find_path(graph.map, 'start', 'end');
      var optimizedSegs = [];

      for (var i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }

      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    /**
     * Splits a string in various segments with the modes which
     * best represent their content.
     * The produced segments are far from being optimized.
     * The output of this function is only used to estimate a QR Code version
     * which may contain the data.
     *
     * @param  {string} data Input string
     * @return {Array}       Array of segments
     */


    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreUtilsJs(module, exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [0, // Not used
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    /**
     * Returns the QR Code size for the specified version
     *
     * @param  {Number} version QR Code version
     * @return {Number}         size of QR code
     */

    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    /**
     * Returns the total number of codewords used to store data and EC information.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Data length in bits
     */


    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    /**
     * Encode data with Bose-Chaudhuri-Hocquenghem
     *
     * @param  {Number} data Value to encode
     * @return {Number}      Encoded value
     */


    exports.getBCHDigit = function (data) {
      var digit = 0;

      while (data !== 0) {
        digit++;
        data >>>= 1;
      }

      return digit;
    };

    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
      }

      toSJISFunction = f;
    };

    exports.isKanjiModeEnabled = function () {
      return typeof toSJISFunction !== 'undefined';
    };

    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version-check.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version-check.js ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreVersionCheckJs(module, exports) {
    /**
     * Check if QR Code version is valid
     *
     * @param  {Number}  version QR Code version
     * @return {Boolean}         true if valid version, false otherwise
     */
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibCoreVersionJs(module, exports, __webpack_require__) {
    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/utils.js");

    var ECCode = __webpack_require__(
    /*! ./error-correction-code */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-code.js");

    var ECLevel = __webpack_require__(
    /*! ./error-correction-level */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/error-correction-level.js");

    var Mode = __webpack_require__(
    /*! ./mode */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/mode.js");

    var VersionCheck = __webpack_require__(
    /*! ./version-check */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/core/version-check.js");

    var isArray = __webpack_require__(
    /*! isarray */
    "./node_modules/angularx-qrcode/node_modules/isarray/index.js"); // Generator polynomial used to encode version information


    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);

    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }

      return undefined;
    }

    function getReservedBitsCount(mode, version) {
      // Character count indicator + mode indicator bits
      return Mode.getCharCountIndicator(mode, version) + 4;
    }

    function getTotalBitsFromDataArray(segments, version) {
      var totalBits = 0;
      segments.forEach(function (data) {
        var reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }

    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
        var length = getTotalBitsFromDataArray(segments, currentVersion);

        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }

      return undefined;
    }
    /**
     * Returns version number from a value.
     * If value is not a valid version, returns defaultValue
     *
     * @param  {Number|String} value        QR Code version
     * @param  {Number}        defaultValue Fallback value
     * @return {Number}                     QR Code version number
     */


    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }

      return defaultValue;
    };
    /**
     * Returns how much data can be stored with the specified QR code version
     * and error correction level
     *
     * @param  {Number} version              QR Code version (1-40)
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Mode}   mode                 Data mode
     * @return {Number}                      Quantity of storable data
     */


    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid QR Code version');
      } // Use Byte mode as default


      if (typeof mode === 'undefined') mode = Mode.BYTE; // Total codewords for this QR code version (Data + Error correction)

      var totalCodewords = Utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

      var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version); // Return max number of storable codewords

      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);

        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);

        case Mode.KANJI:
          return Math.floor(usableBits / 13);

        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    /**
     * Returns the minimum version needed to contain the amount of data
     *
     * @param  {Segment} data                    Segment of data
     * @param  {Number} [errorCorrectionLevel=H] Error correction level
     * @param  {Mode} mode                       Data mode
     * @return {Number}                          QR Code version
     */


    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      var seg;
      var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

      if (isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }

        if (data.length === 0) {
          return 1;
        }

        seg = data[0];
      } else {
        seg = data;
      }

      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    /**
     * Returns version information with relative error correction bits
     *
     * The version information is included in QR Code symbols of version 7 or larger.
     * It consists of an 18-bit sequence containing 6 data bits,
     * with 12 error correction bits calculated using the (18, 6) Golay code.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Encoded version info bits
     */


    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error('Invalid QR Code version');
      }

      var d = version << 12;

      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }

      return version << 12 | d;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/canvas.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/canvas.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibRendererCanvasJs(module, exports, __webpack_require__) {
    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/utils.js");

    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + 'px';
      canvas.style.width = size + 'px';
    }

    function getCanvasElement() {
      try {
        return document.createElement('canvas');
      } catch (e) {
        throw new Error('You need to specify a canvas element');
      }
    }

    exports.render = function render(qrData, canvas, options) {
      var opts = options;
      var canvasEl = canvas;

      if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
      }

      if (!canvas) {
        canvasEl = getCanvasElement();
      }

      opts = Utils.getOptions(opts);
      var size = Utils.getImageWidth(qrData.modules.size, opts);
      var ctx = canvasEl.getContext('2d');
      var image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };

    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      var opts = options;

      if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
      }

      if (!opts) opts = {};
      var canvasEl = exports.render(qrData, canvas, opts);
      var type = opts.type || 'image/png';
      var rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/svg-tag.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/svg-tag.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibRendererSvgTagJs(module, exports, __webpack_require__) {
    var Utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/utils.js");

    function getColorAttrib(color, attrib) {
      var alpha = color.a / 255;
      var str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }

    function svgCmd(cmd, x, y) {
      var str = cmd + x;
      if (typeof y !== 'undefined') str += ' ' + y;
      return str;
    }

    function qrToPath(data, size, margin) {
      var path = '';
      var moveBy = 0;
      var newRow = false;
      var lineLength = 0;

      for (var i = 0; i < data.length; i++) {
        var col = Math.floor(i % size);
        var row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;

        if (data[i]) {
          lineLength++;

          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
            moveBy = 0;
            newRow = false;
          }

          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd('h', lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }

      return path;
    }

    exports.render = function render(qrData, options, cb) {
      var opts = Utils.getOptions(options);
      var size = qrData.modules.size;
      var data = qrData.modules.data;
      var qrcodesize = size + opts.margin * 2;
      var bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
      var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
      var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
      var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

      if (typeof cb === 'function') {
        cb(null, svgTag);
      }

      return svgTag;
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/utils.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/renderer/utils.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibRendererUtilsJs(module, exports) {
    function hex2rgba(hex) {
      if (typeof hex === 'number') {
        hex = hex.toString();
      }

      if (typeof hex !== 'string') {
        throw new Error('Color should be defined as hex string');
      }

      var hexCode = hex.slice().replace('#', '').split('');

      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error('Invalid hex color: ' + hex);
      } // Convert from short to long form (fff -> ffffff)


      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
          return [c, c];
        }));
      } // Add default alpha value


      if (hexCode.length === 6) hexCode.push('F', 'F');
      var hexValue = parseInt(hexCode.join(''), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
      };
    }

    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      var margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
      var width = options.width && options.width >= 21 ? options.width : undefined;
      var scale = options.scale || 4;
      return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
          dark: hex2rgba(options.color.dark || '#000000ff'),
          light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };

    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };

    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      var scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };

    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      var size = qr.modules.size;
      var data = qr.modules.data;
      var scale = exports.getScale(size, opts);
      var symbolSize = Math.floor((size + opts.margin * 2) * scale);
      var scaledMargin = opts.margin * scale;
      var palette = [opts.color.light, opts.color.dark];

      for (var i = 0; i < symbolSize; i++) {
        for (var j = 0; j < symbolSize; j++) {
          var posDst = (i * symbolSize + j) * 4;
          var pxColor = opts.color.light;

          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            var iSrc = Math.floor((i - scaledMargin) / scale);
            var jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }

          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
    /***/

  },

  /***/
  "./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/angularx-qrcode/node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularxQrcodeNode_modulesQrcodeLibUtilsTypedarrayBufferJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Implementation of a subset of node.js Buffer methods for the browser.
     * Based on https://github.com/feross/buffer
     */

    /* eslint-disable no-proto */

    var isArray = __webpack_require__(
    /*! isarray */
    "./node_modules/angularx-qrcode/node_modules/isarray/index.js");

    function typedArraySupport() {
      // Can typed array instances be augmented?
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        };
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }

    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
    var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;

    function Buffer(arg, offset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, offset, length);
      }

      if (typeof arg === 'number') {
        return allocUnsafe(this, arg);
      }

      return from(this, arg, offset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array; // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97

      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }
    }

    function checked(length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
      }

      return length | 0;
    }

    function isnan(val) {
      return val !== val; // eslint-disable-line no-self-compare
    }

    function createBuffer(that, length) {
      var buf;

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        buf = that;

        if (buf === null) {
          buf = new Buffer(length);
        }

        buf.length = length;
      }

      return buf;
    }

    function allocUnsafe(that, size) {
      var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          buf[i] = 0;
        }
      }

      return buf;
    }

    function fromString(that, string) {
      var length = byteLength(string) | 0;
      var buf = createBuffer(that, length);
      var actual = buf.write(string);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
      }

      return buf;
    }

    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(that, length);

      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }

      return buf;
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
      }

      var buf;

      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        buf.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        buf = fromArrayLike(that, buf);
      }

      return buf;
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);

        if (buf.length === 0) {
          return buf;
        }

        obj.copy(buf, 0, 0, len);
        return buf;
      }

      if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0);
          }

          return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i); // is surrogate component

        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } // valid lead


            leadSurrogate = codePoint;
            continue;
          } // 2 leads in a row


          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue;
          } // valid surrogate pair


          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null; // encode utf8

        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
          throw new Error('Invalid code point');
        }
      }

      return bytes;
    }

    function byteLength(string) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }

      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }

      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0;
      return utf8ToBytes(string).length;
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }

      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }

    function from(that, value, offset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, offset, length);
      }

      if (typeof value === 'string') {
        return fromString(that, value, offset);
      }

      return fromObject(that, value);
    }

    Buffer.prototype.write = function write(string, offset, length) {
      // Buffer#write(string)
      if (offset === undefined) {
        length = this.length;
        offset = 0; // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        length = this.length;
        offset = 0; // Buffer#write(string, offset[, length])
      } else if (isFinite(offset)) {
        offset = offset | 0;

        if (isFinite(length)) {
          length = length | 0;
        } else {
          length = undefined;
        }
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
      }

      return utf8Write(this, string, offset, length);
    };

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;
      var newBuf;

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);

        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf;
    };

    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
      }

      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
      if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

      if (end > this.length) end = this.length;

      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }

      return len;
    };

    Buffer.prototype.fill = function fill(val, start, end) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          end = this.length;
        }

        if (val.length === 1) {
          var code = val.charCodeAt(0);

          if (code < 256) {
            val = code;
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      } // Invalid ranges are not set to a default, so can range check early.


      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;
      if (!val) val = 0;
      var i;

      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : new Buffer(val);
        var len = bytes.length;

        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    };

    Buffer.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return createBuffer(null, 0);
      }

      var i;

      if (length === undefined) {
        length = 0;

        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = allocUnsafe(null, length);
      var pos = 0;

      for (i = 0; i < list.length; ++i) {
        var buf = list[i];

        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        buf.copy(buffer, pos);
        pos += buf.length;
      }

      return buffer;
    };

    Buffer.byteLength = byteLength;
    Buffer.prototype._isBuffer = true;

    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };

    module.exports = Buffer;
    /***/
  },

  /***/
  "./src/app/pages/print/printdriverdetail/printdriverdetail-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/print/printdriverdetail/printdriverdetail-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PrintdriverdetailRoutingModule */

  /***/
  function srcAppPagesPrintPrintdriverdetailPrintdriverdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintdriverdetailRoutingModule", function () {
      return PrintdriverdetailRoutingModule;
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


    var _printdriverdetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./printdriverdetail.component */
    "./src/app/pages/print/printdriverdetail/printdriverdetail.component.ts");

    var routes = [{
      path: '',
      component: _printdriverdetail_component__WEBPACK_IMPORTED_MODULE_2__["PrintdriverdetailComponent"]
    }];

    var PrintdriverdetailRoutingModule = function PrintdriverdetailRoutingModule() {
      _classCallCheck(this, PrintdriverdetailRoutingModule);
    };

    PrintdriverdetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PrintdriverdetailRoutingModule
    });
    PrintdriverdetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PrintdriverdetailRoutingModule_Factory(t) {
        return new (t || PrintdriverdetailRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrintdriverdetailRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintdriverdetailRoutingModule, [{
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
  "./src/app/pages/print/printdriverdetail/printdriverdetail.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/print/printdriverdetail/printdriverdetail.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PrintdriverdetailComponent */

  /***/
  function srcAppPagesPrintPrintdriverdetailPrintdriverdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintdriverdetailComponent", function () {
      return PrintdriverdetailComponent;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js"); //import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


    var PrintdriverdetailComponent =
    /*#__PURE__*/
    function () {
      //isReport: boolean = false;
      function PrintdriverdetailComponent(apiCall, common, translate, baseUrl) {
        _classCallCheck(this, PrintdriverdetailComponent);

        this.apiCall = apiCall;
        this.common = common;
        this.translate = translate;
        this.data = false;
        this.GUIDN = "";
        this.driverLatterInfo = [];
        this.driverDataforLatter = [];
        this.APIBASEURL = baseUrl;
      }

      _createClass(PrintdriverdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            var isListprint, jsonData, letter;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    debugger;
                    isListprint = this.common.getValueFromSessionStorage('listdriverPrint');

                    if (!isListprint) {
                      _context.next = 7;
                      break;
                    }

                    this.driverLatterInfo = this.common.getValueFromSessionStorage('driverDataforLatter');
                    window.print();
                    _context.next = 14;
                    break;

                  case 7:
                    this.GUIDN = window.location.href.split('/').pop();
                    jsonData = {};
                    this.data = false;
                    letter = window.location.href;
                    jsonData.DriverGuid = this.GUIDN;
                    _context.next = 14;
                    return this.apiCall.postAPICallWithToken('api/EnquiryManager/DriverLetters', jsonData).then(function (result) {
                      debugger;
                      _this6.driverLatterInfo = result; //this.elementType = NgxQrcodeElementTypes.URL;
                      //this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
                      //var str = "driverEnquiry";
                      //var url = letter.replace("printdriverdetail", str);
                      // this.value = 'http://localhost:61122/print/driverEnquiry/' + this.GUIDN; //url;// 'https://smartportaluat.azurewebsites.net/print/printcompanydetail/' + this.GUIDN;

                      _this6.value = window.location.href; // 'http://localhost:61122/print/printdriverdetail/' + this.GUIDN;

                      setTimeout(function () {
                        return window.print();
                      }, 1000);
                    })["catch"](function (error) {
                      console.log("error ", error);
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PrintdriverdetailComponent;
    }();

    PrintdriverdetailComponent.ɵfac = function PrintdriverdetailComponent_Factory(t) {
      return new (t || PrintdriverdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('BASE_URL'));
    };

    PrintdriverdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PrintdriverdetailComponent,
      selectors: [["app-printdriverdetail"]],
      decls: 199,
      vars: 23,
      consts: [[1, "vehicle_pdf_block"], [1, "header_left_content"], ["src", "../assets/images/rakta.png", "alt", "logo"], [1, "header_right_content", 2, "width", "50%", "padding", "0px", "text-align", "right", "vertical-align", "top"], ["src", "../assets/images/RAKTA-LOGO.png", "alt", "logo"], [1, "vehicle_heading"], [1, "heading_td"], [1, "vehicle_no_table"], [1, "vehicle_no_table_left"], [2, "font-weight", "400"], [1, "vehicle_no_table_right"], [1, "vehicle_date_table"], [1, "vehicle_date_table_left"], [1, "vehicle_date_table_right"], [1, "vehicle_table_head"], [1, "vehicle_table_head_td"], [1, "vehicle_table_para"], [1, "vehicle_table_para_right"], [1, "vehicle_nformation_table"], [1, "vehicle_nfor_left_content"], [1, "vehicle_nfor_right_content"], [1, "vehicle_nformation_th"], [1, "vehicle_nformation_th_left"], [1, "vehicle_nformation_th_right"], [1, "vehicle_nformation_details"], [1, "vehicle_nformation_details_left"], [1, "vehicle_nformation_details_right"], [1, "vehicle_nformation_details_middle"], [1, "vehicle_nformation_table", "Activity_nformation_table"], [1, "vehicle_nformation_details", "Activity_nformation_details"], [1, "vehicle_nformation_details_middle", 2, "text-align", "center !important"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "vehicle_adresss_blk"], [1, "vehicle_footer"], ["src", "../assets/images/footer.png", "alt", "logo"]],
      template: function PrintdriverdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0634\u0647\u0627\u062F\u0629 \u0645\u0632\u0627\u0648\u0644\u0629 \u0645\u0647\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": \u0631\u0642\u0645 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ": \u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u0627\u0644\u0649 \u0645\u0646 \u064A\u0647\u0645\u0647 \u0627\u0644\u0623\u0645\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u062A\u0634\u0647\u062F \u0647\u064A\u0626\u0629 \u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629 \u0644\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A \u0628\u0623\u0646 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0628\u064A\u0627\u0646\u0627\u062A\u0647 \u0623\u062F\u0646\u0627\u0647 \u0642\u062F \u0642\u0627\u0645 \u0628\u0627\u0633\u062A\u064A\u0641\u0627\u0621");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u0627\u0634\u062A\u0631\u0627\u0637\u0627\u062A \u0645\u0632\u0627\u0648\u0644\u0629 \u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u0645\u0648\u0636\u062D \u0623\u062F\u0646\u0627\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Registrant Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Company Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Registrant Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u0627\u0633\u0645 \u0627\u0644\u0645\u064F\u0633\u062C\u064E\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "EID Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u0631\u0642\u0645 \u0647\u0648\u064A\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Driver License Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u0631\u0642\u0645 \u0631\u062E\u0635\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Permit Issue Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631\u0627\u0644\u062A\u0635\u0631\u064A\u062D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Permit Expiry Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062A\u0635\u0631\u064A\u062D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](131, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Activity Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0633\u062C\u064A\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Registration Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Created On");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Created By");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Modified On");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Modified On");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "qrcode", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "\u0648\u0639\u0644\u064A\u0647 \u0641\u0642\u062F \u062A\u0645 \u0627\u0635\u062F\u0627\u0631 \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0648\u0641\u0642\u0627\u064B \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0627\u0631\u062F\u0629 \u0623\u0639\u0644\u0627\u0647\u060C \u0648\u0641\u064A \u062D\u0627\u0644 \u0623\u064A \u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "\u0643\u0634\u0637 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0641\u062A\u0639\u062A\u0628\u0631 \u0644\u0627\u063A\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "\u0645\u0631\u0643\u0632 \u0625\u0633\u0639\u0627\u062F \u0627\u0644\u0645\u062A\u0639\u0627\u0645\u0644\u064A\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "\u0647\u064A\u0626\u0629 \u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629 \u0644\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "table", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.driverLatterInfo.DriverID, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.driverLatterInfo.PrintDateTime, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.CompanyNameEN);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.CompanyNameAR);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.NameEN);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.NameAR);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.EmiratesID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.DriverLicenseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.PrintDateTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.ExpiryDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](131, 21, "Notes"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.Notes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.driverLatterInfo.DriverType, " - ", ctx.driverLatterInfo.PermitName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.CreatedOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.CreatedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.ModifiedOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.driverLatterInfo.ModifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrdata", ctx.value)("width", 200)("errorCorrectionLevel", "L");
        }
      },
      directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: [".header[_ngcontent-%COMP%], .header-space[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%], .footer-space[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n}\n\n@media screen {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.arabic_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.print_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-left: 15px;\n}\n\n.print_ul.arabic_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 15px;\n}\n\n@media print {\n  .heading_text[_ngcontent-%COMP%] {\n    color: #fff !important;\n  }\n}\n\n.bshadow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  filter: drop-shadow(5px 5px 5px #e42424);\n  opacity: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Jha3Rhc3lzdGVtdWktRGV2ZWxvcG1lbnQvcmFrdGFwb3J0YWwvQ2xpZW50QXBwL3NyYy9hcHAvcGFnZXMvcHJpbnQvcHJpbnRkcml2ZXJkZXRhaWwvcHJpbnRkcml2ZXJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaW50L3ByaW50ZHJpdmVyZGV0YWlsL3ByaW50ZHJpdmVyZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRTtJQUNJLHNCQUFBO0VDS0o7QUFDRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FDS0Y7O0FERkE7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW50L3ByaW50ZHJpdmVyZGV0YWlsL3ByaW50ZHJpdmVyZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciwgLmhlYWRlci1zcGFjZSwgLmZvb3RlciwgLmZvb3Rlci1zcGFjZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxudGQsIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5hcmFiaWNfdWwgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnByaW50X3VsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBkaXNjO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4ucHJpbnRfdWwuYXJhYmljX3VsIGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmhlYWRpbmdfdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5ic2hhZG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjZTQyNDI0KTtcclxuICBvcGFjaXR5OiAuMTtcclxufVxyXG5cclxuLyp0ZXh0YXJlYSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG9wYWNpdHk6IC41O1xyXG59Ki9cclxuIiwiLmhlYWRlciwgLmhlYWRlci1zcGFjZSwgLmZvb3RlciwgLmZvb3Rlci1zcGFjZSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbnRkLCB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcmFiaWNfdWwgbGkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByaW50X3VsIGxpIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucHJpbnRfdWwuYXJhYmljX3VsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5oZWFkaW5nX3RleHQge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5ic2hhZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggI2U0MjQyNCk7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLyp0ZXh0YXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjUwcHg7XG4gIG9wYWNpdHk6IC41O1xufSovIl19 */"]
    });
    PrintdriverdetailComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PrintdriverdetailComponent,
      factory: PrintdriverdetailComponent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintdriverdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-printdriverdetail',
          templateUrl: './printdriverdetail.component.html',
          styleUrls: ['./printdriverdetail.component.scss']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
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
  "./src/app/pages/print/printdriverdetail/printdriverdetail.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/print/printdriverdetail/printdriverdetail.module.ts ***!
    \***************************************************************************/

  /*! exports provided: PrintdriverdetailModule */

  /***/
  function srcAppPagesPrintPrintdriverdetailPrintdriverdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintdriverdetailModule", function () {
      return PrintdriverdetailModule;
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


    var _printdriverdetail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./printdriverdetail-routing.module */
    "./src/app/pages/print/printdriverdetail/printdriverdetail-routing.module.ts");
    /* harmony import */


    var _printdriverdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./printdriverdetail.component */
    "./src/app/pages/print/printdriverdetail/printdriverdetail.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js"); //import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
    //import { QrCodeModule } from 'ng-qrcode';
    //import { AnQrcodeModule } from 'an-qrcode';


    var PrintdriverdetailModule = function PrintdriverdetailModule() {
      _classCallCheck(this, PrintdriverdetailModule);
    };

    PrintdriverdetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PrintdriverdetailModule
    });
    PrintdriverdetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PrintdriverdetailModule_Factory(t) {
        return new (t || PrintdriverdetailModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _printdriverdetail_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintdriverdetailRoutingModule"], // NgxQRCodeModule,
      angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], //QrCodeModule,
      //AnQrcodeModule,
      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrintdriverdetailModule, {
        declarations: [_printdriverdetail_component__WEBPACK_IMPORTED_MODULE_3__["PrintdriverdetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _printdriverdetail_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintdriverdetailRoutingModule"], // NgxQRCodeModule,
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], //QrCodeModule,
        //AnQrcodeModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintdriverdetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_printdriverdetail_component__WEBPACK_IMPORTED_MODULE_3__["PrintdriverdetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _printdriverdetail_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintdriverdetailRoutingModule"], // NgxQRCodeModule,
          angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], //QrCodeModule,
          //AnQrcodeModule,
          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-print-printdriverdetail-printdriverdetail-module-es5.js.map