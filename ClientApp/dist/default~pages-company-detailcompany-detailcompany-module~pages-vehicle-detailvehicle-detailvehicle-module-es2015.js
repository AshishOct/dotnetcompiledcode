(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-company-detailcompany-detailcompany-module~pages-vehicle-detailvehicle-detailvehicle-module"],{

/***/ "./node_modules/ng-image-fullscreen-view/__ivy_ngcc__/fesm2015/ng-image-fullscreen-view.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ng-image-fullscreen-view/__ivy_ngcc__/fesm2015/ng-image-fullscreen-view.js ***!
  \*************************************************************************************************/
/*! exports provided: NgImageFullscreenViewComponent, NgImageFullscreenViewModule, NgImageFullscreenViewService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageFullscreenViewComponent", function() { return NgImageFullscreenViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageFullscreenViewModule", function() { return NgImageFullscreenViewModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageFullscreenViewService", function() { return NgImageFullscreenViewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderCustomImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");









const _c0 = ["lightboxDiv"];
const _c1 = ["lightboxImageDiv"];
function NgImageFullscreenViewComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "width": a0 }; };
function NgImageFullscreenViewComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchstart", function NgImageFullscreenViewComponent_div_0_div_7_Template_div_touchstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r377); const ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r376.swipeLightboxImg($event, "start"); })("touchend", function NgImageFullscreenViewComponent_div_0_div_7_Template_div_touchend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r377); const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r378.swipeLightboxImg($event, "end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "custom-img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r373 = ctx.$implicit;
    const i_r374 = ctx.index;
    const ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r369.popupWidth + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "ng-lightbox-image-" + i_r374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageUrl", img_r373.image || img_r373.video)("isVideo", !!(img_r373.posterImage || img_r373.video))("videoAutoPlay", ctx_r369.videoAutoPlay)("showVideoControls", ctx_r369.showVideoControls ? 1 : 0)("alt", img_r373.alt || img_r373.title || "")("title", img_r373.title || img_r373.alt || "")("direction", ctx_r369.direction);
} }
const _c3 = function (a0) { return { "disable": a0 }; };
function NgImageFullscreenViewComponent_div_0_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgImageFullscreenViewComponent_div_0_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r380); const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r379.prevImageLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2039");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, ctx_r370.lightboxPrevDisable));
} }
function NgImageFullscreenViewComponent_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgImageFullscreenViewComponent_div_0_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r382); const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r381.nextImageLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, ctx_r371.lightboxNextDisable));
} }
function NgImageFullscreenViewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r372.currentImageIndex + 1, " of ", ctx_r372.totalImages, "");
} }
const _c4 = function (a0, a1, a2) { return { "margin-left": a0, "grid-template-columns": a1, "transition": a2 }; };
const _c5 = function (a0, a1) { return { "show": a0, "hide": a1 }; };
function NgImageFullscreenViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgImageFullscreenViewComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r384); const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r383.closeLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgImageFullscreenViewComponent_div_0_div_5_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgImageFullscreenViewComponent_div_0_div_7_Template, 3, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NgImageFullscreenViewComponent_div_0_a_10_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NgImageFullscreenViewComponent_div_0_a_11_Template, 2, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NgImageFullscreenViewComponent_div_0_div_12_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r366.showLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](9, _c4, ctx_r366.marginLeft + "px", "repeat(" + ctx_r366.images.length + ",1fr)", ctx_r366.effectStyle));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r366.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx_r366.direction)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c5, ctx_r366.title, !ctx_r366.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r366.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r366.images.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r366.images.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r366.paginationShow);
} }
function SliderCustomImageComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r386.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r386.alt)("title", ctx_r386.title);
} }
function SliderCustomImageComponent_div_0_iframe_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 8);
} if (rf & 2) {
    const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r387.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function SliderCustomImageComponent_div_0_video_3_Template(rf, ctx) { if (rf & 1) {
    const _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderCustomImageComponent_div_0_video_3_Template_video_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r392); const ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r391.videoClickHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "source", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", ctx_r388.videoAutoPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("controls", ctx_r388.showVideoControls ? ctx_r388.showVideoControls : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r388.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SliderCustomImageComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid file format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx_r389.direction);
} }
function SliderCustomImageComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
} }
function SliderCustomImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderCustomImageComponent_div_0_img_1_Template, 1, 3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SliderCustomImageComponent_div_0_iframe_2_Template, 1, 1, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SliderCustomImageComponent_div_0_video_3_Template, 3, 3, "video", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SliderCustomImageComponent_div_0_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SliderCustomImageComponent_div_0_span_5_Template, 1, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r385.type === ctx_r385.IMAGE && ctx_r385.fileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r385.type === ctx_r385.YOUTUBE && ctx_r385.fileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r385.type === ctx_r385.VIDEO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r385.fileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r385.type === ctx_r385.YOUTUBE || ctx_r385.type === ctx_r385.VIDEO || ctx_r385.isVideo);
} }
let NgImageFullscreenViewService = class NgImageFullscreenViewService {
    constructor() { }
    isBase64(str) {
        const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        return base64regex.test(str);
    }
    base64FileExtension(str) {
        return str.substring('data:image/'.length, str.indexOf(';base64'));
    }
};
NgImageFullscreenViewService.ɵfac = function NgImageFullscreenViewService_Factory(t) { return new (t || NgImageFullscreenViewService)(); };
NgImageFullscreenViewService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgImageFullscreenViewService_Factory() { return new NgImageFullscreenViewService(); }, token: NgImageFullscreenViewService, providedIn: "root" });
NgImageFullscreenViewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NgImageFullscreenViewService);

const LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE = 'lightbox next', LIGHTBOX_PREV_ARROW_CLICK_MESSAGE = 'lightbox previous';
let NgImageFullscreenViewComponent = class NgImageFullscreenViewComponent {
    constructor(cdRef, sanitizer, elRef, imageFullscreenViewService, document) {
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.imageFullscreenViewService = imageFullscreenViewService;
        this.document = document;
        this.totalImages = 0;
        this.nextImageIndex = -1;
        this.popupWidth = 1200;
        this.marginLeft = 0;
        this.imageFullscreenView = false;
        this.lightboxPrevDisable = false;
        this.lightboxNextDisable = false;
        this.showLoading = true;
        this.effectStyle = 'none';
        this.speed = 1; // default speed in second
        this.title = '';
        this.currentImageIndex = 0;
        // @Inputs
        this.images = [];
        this.videoAutoPlay = false;
        this.direction = 'ltr';
        this.paginationShow = false;
        this.infinite = false;
        this.arrowKeyMove = true;
        this.showVideoControls = true;
        // @Output
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prevImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set imageIndex(index) {
        if (index !== undefined && index > -1 && index < this.images.length) {
            this.currentImageIndex = index;
        }
        this.nextPrevDisable();
    }
    set show(visiableFlag) {
        this.imageFullscreenView = visiableFlag;
        this.elRef.nativeElement.ownerDocument.body.style.overflow = '';
        if (visiableFlag === true) {
            this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
            // this.getImageData();
            this.setPopupSliderWidth();
        }
    }
    set animationSpeed(data) {
        if (data
            && typeof (data) === 'number'
            && data >= 0.1
            && data <= 5) {
            this.speed = data;
        }
    }
    onResize(event) {
        this.effectStyle = 'none';
        this.setPopupSliderWidth();
    }
    handleKeyboardEvent(event) {
        if (event && event.key && this.arrowKeyMove) {
            if (event.key.toLowerCase() === 'arrowright') {
                this.nextImageLightbox();
            }
            if (event.key.toLowerCase() === 'arrowleft') {
                this.prevImageLightbox();
            }
            if (event.key.toLowerCase() === 'escape') {
                this.closeLightbox();
            }
        }
    }
    ngOnDestroy() {
        this.resetState();
    }
    setPopupSliderWidth() {
        if (window && window.innerWidth) {
            this.popupWidth = window.innerWidth;
            this.totalImages = this.images.length;
            if (typeof (this.currentImageIndex) === 'number' && this.currentImageIndex !== undefined) {
                this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
                this.getImageData();
                this.nextPrevDisable();
                setTimeout(() => {
                    this.showLoading = false;
                }, 500);
            }
        }
    }
    closeLightbox() {
        this.close.emit();
    }
    prevImageLightbox() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
            this.currentImageIndex--;
            this.prevImage.emit();
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
        }
    }
    nextImageLightbox() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        if (this.currentImageIndex < this.images.length - 1 && !this.lightboxNextDisable) {
            this.currentImageIndex++;
            this.nextImage.emit();
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
        }
    }
    nextPrevDisable() {
        this.lightboxNextDisable = true;
        this.lightboxPrevDisable = true;
        setTimeout(() => {
            this.applyButtonDisableCondition();
        }, this.speed * 1000);
    }
    applyButtonDisableCondition() {
        this.lightboxNextDisable = false;
        this.lightboxPrevDisable = false;
        if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
            this.lightboxNextDisable = true;
        }
        if (!this.infinite && this.currentImageIndex <= 0) {
            this.lightboxPrevDisable = true;
        }
    }
    getImageData() {
        if (this.images
            && this.images.length
            && typeof (this.currentImageIndex) === 'number'
            && this.currentImageIndex !== undefined
            && this.images[this.currentImageIndex]
            && (this.images[this.currentImageIndex]['image'] || this.images[this.currentImageIndex]['video'])) {
            this.title = this.images[this.currentImageIndex]['title'] || '';
            this.totalImages = this.images.length;
            for (const iframeI in this.document.getElementsByTagName('iframe')) {
                if (this.document.getElementsByTagName('iframe')[iframeI]
                    && this.document.getElementsByTagName('iframe')[iframeI].contentWindow) {
                    this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            }
            for (const videoI in this.document.getElementsByTagName('video')) {
                if (this.document.getElementsByTagName('video')[videoI] && this.document.getElementsByTagName('video')[videoI].pause) {
                    this.document.getElementsByTagName('video')[videoI].pause();
                }
            }
        }
    }
    resetState() {
        this.images = [];
    }
    /**
     * Swipe event handler
     * Reference from https://stackoverflow.com/a/44511007/2067646
     */
    swipeLightboxImg(e, when) {
        const coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const time = new Date().getTime();
        if (when === 'start') {
            this.swipeLightboxImgCoord = coord;
            this.swipeLightboxImgTime = time;
        }
        else if (when === 'end') {
            const direction = [coord[0] - this.swipeLightboxImgCoord[0], coord[1] - this.swipeLightboxImgCoord[1]];
            const duration = time - this.swipeLightboxImgTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                if (direction[0] < 0) {
                    this.nextImageLightbox();
                }
                else {
                    this.prevImageLightbox();
                }
            }
        }
    }
};
NgImageFullscreenViewComponent.ɵfac = function NgImageFullscreenViewComponent_Factory(t) { return new (t || NgImageFullscreenViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgImageFullscreenViewService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
NgImageFullscreenViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgImageFullscreenViewComponent, selectors: [["ng-image-fullscreen-view"]], viewQuery: function NgImageFullscreenViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lightboxDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lightboxImageDiv = _t.first);
    } }, hostBindings: function NgImageFullscreenViewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function NgImageFullscreenViewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("keyup", function NgImageFullscreenViewComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { images: "images", videoAutoPlay: "videoAutoPlay", direction: "direction", paginationShow: "paginationShow", infinite: "infinite", arrowKeyMove: "arrowKeyMove", showVideoControls: "showVideoControls", imageIndex: "imageIndex", show: "show", animationSpeed: "animationSpeed" }, outputs: { close: "close", prevImage: "prevImage", nextImage: "nextImage" }, decls: 1, vars: 1, consts: [["class", "ng-image-fullscreen-view", 4, "ngIf"], [1, "ng-image-fullscreen-view"], [1, "lightbox-wrapper"], [1, "close", 3, "click"], [1, "lightbox-div"], ["lightboxDiv", ""], ["class", "pre-loader", 4, "ngIf"], [1, "lightbox-image-main", 3, "ngStyle"], ["class", "lightbox-image", 3, "ngStyle", "touchstart", "touchend", 4, "ngFor", "ngForOf"], [1, "caption", 3, "dir", "ngClass"], ["class", "prev icons prev-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "next icons next-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "popup-pagination", 4, "ngIf"], [1, "pre-loader"], [1, "mnml-spinner"], [1, "lightbox-image", 3, "ngStyle", "touchstart", "touchend"], ["lightboxImageDiv", ""], [3, "imageUrl", "isVideo", "videoAutoPlay", "showVideoControls", "alt", "title", "direction"], [1, "prev", "icons", "prev-icon", 3, "ngClass", "click"], [1, "next", "icons", "next-icon", 3, "ngClass", "click"], [1, "popup-pagination"]], template: function NgImageFullscreenViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgImageFullscreenViewComponent_div_0_Template, 13, 16, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageFullscreenView);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], SliderCustomImageComponent]; }, styles: ["ng-image-fullscreen-view .ng-image-fullscreen-view{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}ng-image-fullscreen-view .ng-image-fullscreen-view.image-fullview-hide{display:none!important}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader .mnml-spinner{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main{display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:100%;grid-column-gap:0;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{width:1299px;height:100%;position:relative}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-show{opacity:1;display:block}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-hide{opacity:0;display:none}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{transition:.5s ease-in-out;width:auto;height:auto;max-height:100%;max-width:100%;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.show{display:block}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.hide{display:none}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next:hover,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next.disable,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{left:10px}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .close{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}ng-image-fullscreen-view .ng-image-fullscreen-view .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}ng-image-fullscreen-view .ng-image-fullscreen-view .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper{width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}}"], encapsulation: 2 });
NgImageFullscreenViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: NgImageFullscreenViewService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lightboxDiv'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgImageFullscreenViewComponent.prototype, "lightboxDiv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lightboxImageDiv'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgImageFullscreenViewComponent.prototype, "lightboxImageDiv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], NgImageFullscreenViewComponent.prototype, "images", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], NgImageFullscreenViewComponent.prototype, "imageIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], NgImageFullscreenViewComponent.prototype, "show", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NgImageFullscreenViewComponent.prototype, "videoAutoPlay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgImageFullscreenViewComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NgImageFullscreenViewComponent.prototype, "paginationShow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], NgImageFullscreenViewComponent.prototype, "animationSpeed", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NgImageFullscreenViewComponent.prototype, "infinite", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NgImageFullscreenViewComponent.prototype, "arrowKeyMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NgImageFullscreenViewComponent.prototype, "showVideoControls", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgImageFullscreenViewComponent.prototype, "close", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgImageFullscreenViewComponent.prototype, "prevImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgImageFullscreenViewComponent.prototype, "nextImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], NgImageFullscreenViewComponent.prototype, "onResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], NgImageFullscreenViewComponent.prototype, "handleKeyboardEvent", null);
NgImageFullscreenViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        NgImageFullscreenViewService, Object])
], NgImageFullscreenViewComponent);

const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/, validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'], validVideoExtensions = ['mp4'];
let SliderCustomImageComponent = class SliderCustomImageComponent {
    constructor(imageFullscreenViewService, sanitizer) {
        this.imageFullscreenViewService = imageFullscreenViewService;
        this.sanitizer = sanitizer;
        this.YOUTUBE = 'youtube';
        this.IMAGE = 'image';
        this.VIDEO = 'video';
        this.fileUrl = '';
        this.fileExtension = '';
        this.type = this.IMAGE;
        // @inputs
        this.videoAutoPlay = false;
        this.showVideoControls = 1;
        this.isVideo = false;
        this.alt = '';
        this.title = '';
        this.direction = 'ltr';
    }
    set imageUrl(url) {
        if (url && typeof (url) === 'string') {
            this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.fileExtension = url.replace(/^.*\./, '');
            if (this.imageFullscreenViewService.base64FileExtension(url)
                && (validFileExtensions.indexOf(this.imageFullscreenViewService.base64FileExtension(url).toLowerCase()) > -1
                    || validVideoExtensions.indexOf(this.imageFullscreenViewService.base64FileExtension(url).toLowerCase()) > -1)) {
                this.fileExtension = this.imageFullscreenViewService.base64FileExtension(url);
            }
            // verify for youtube url
            const match = url.match(youtubeRegExp);
            if (match && match[2].length === 11) {
                this.type = this.YOUTUBE;
                this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${'//www.youtube.com/embed/'}${match[2]}${this.videoAutoPlay ? '?autoplay=1&enablejsapi=1' : '?autoplay=0&enablejsapi=1'}${'&controls='}${this.showVideoControls}`);
            }
            else if (this.fileExtension && validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.IMAGE;
            }
            else if (this.fileExtension && validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.VIDEO;
            }
        }
    }
    videoClickHandler(event) {
        if (event && event.srcElement && !this.showVideoControls) {
            if (event.srcElement.paused) {
                event.srcElement.play();
            }
            else {
                event.srcElement.pause();
            }
        }
    }
};
SliderCustomImageComponent.ɵfac = function SliderCustomImageComponent_Factory(t) { return new (t || SliderCustomImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgImageFullscreenViewService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
SliderCustomImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SliderCustomImageComponent, selectors: [["custom-img"]], inputs: { videoAutoPlay: "videoAutoPlay", showVideoControls: "showVideoControls", isVideo: "isVideo", alt: "alt", title: "title", direction: "direction", imageUrl: "imageUrl" }, decls: 1, vars: 1, consts: [["class", "custom-image-main", 4, "ngIf"], [1, "custom-image-main"], ["class", "image", 3, "src", "alt", "title", 4, "ngIf"], ["class", "youtube", "frameborder", "0", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["class", "video", "type", "video/mp4", "controlsList", "nodownload", 3, "autoplay", "click", 4, "ngIf"], ["class", "invalid-msg", 3, "dir", 4, "ngIf"], ["class", "youtube-icon", 4, "ngIf"], [1, "image", 3, "src", "alt", "title"], ["frameborder", "0", "allowfullscreen", "", 1, "youtube", 3, "src"], ["type", "video/mp4", "controlsList", "nodownload", 1, "video", 3, "autoplay", "click"], ["type", "video/mp4", 3, "src"], [1, "invalid-msg", 3, "dir"], [1, "youtube-icon"]], template: function SliderCustomImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SliderCustomImageComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
SliderCustomImageComponent.ctorParameters = () => [
    { type: NgImageFullscreenViewService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SliderCustomImageComponent.prototype, "videoAutoPlay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SliderCustomImageComponent.prototype, "showVideoControls", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], SliderCustomImageComponent.prototype, "imageUrl", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderCustomImageComponent.prototype, "isVideo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SliderCustomImageComponent.prototype, "alt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SliderCustomImageComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SliderCustomImageComponent.prototype, "direction", void 0);
SliderCustomImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgImageFullscreenViewService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], SliderCustomImageComponent);

let NgImageFullscreenViewModule = class NgImageFullscreenViewModule {
};
NgImageFullscreenViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgImageFullscreenViewModule });
NgImageFullscreenViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgImageFullscreenViewModule_Factory(t) { return new (t || NgImageFullscreenViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgImageFullscreenViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgImageFullscreenViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-image-fullscreen-view',
                template: "<div *ngIf=\"imageFullscreenView\" class=\"ng-image-fullscreen-view\">\n    <div class=\"lightbox-wrapper\">\n        <a class=\"close\" (click)=\"closeLightbox()\"></a>\n        <div class=\"lightbox-div\" #lightboxDiv>\n            <div *ngIf=\"showLoading\" class=\"pre-loader\">\n                <div class=\"mnml-spinner\"></div>\n            </div>\n            <div class=\"lightbox-image-main\"\n                [ngStyle]=\"{'margin-left': marginLeft + 'px', 'grid-template-columns': 'repeat('+images.length+',1fr)', 'transition': effectStyle}\">\n                <div class=\"lightbox-image\"\n                    [ngStyle]=\"{'width': popupWidth + 'px'}\"\n                    *ngFor=\"let img of images; let i = index\"\n                    [attr.id]=\"'ng-lightbox-image-' + i\"\n                    (touchstart)=\"swipeLightboxImg($event, 'start')\"\n                    (touchend)=\"swipeLightboxImg($event, 'end')\"\n                    #lightboxImageDiv>\n                    <custom-img\n                        [imageUrl]=\"img.image || img.video\"\n                        [isVideo]=\"!!(img.posterImage || img.video)\"\n                        [videoAutoPlay]=\"videoAutoPlay\"\n                        [showVideoControls]=\"showVideoControls ? 1 : 0\"\n                        [alt]=\"img.alt || img.title || ''\"\n                        [title]=\"img.title || img.alt || ''\"\n                        [direction]=\"direction\">\n                    </custom-img>\n                </div>\n            </div>\n            <div [dir]=\"direction\" [ngClass]=\"{'show': title, 'hide': !title}\" class=\"caption\">{{ title }}</div>\n            <a *ngIf=\"images.length > 1\" [ngClass]=\"{'disable': lightboxPrevDisable}\" class=\"prev icons prev-icon\" (click)=\"prevImageLightbox()\">&lsaquo;</a>\n            <a *ngIf=\"images.length > 1\" [ngClass]=\"{'disable': lightboxNextDisable}\" class=\"next icons next-icon\" (click)=\"nextImageLightbox()\">&rsaquo;</a>\n        </div>\n    </div>\n    <div *ngIf=\"paginationShow\" class=\"popup-pagination\">{{currentImageIndex + 1}} of {{totalImages}}</div>\n</div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: ["ng-image-fullscreen-view .ng-image-fullscreen-view{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}ng-image-fullscreen-view .ng-image-fullscreen-view.image-fullview-hide{display:none!important}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader .mnml-spinner{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main{display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:100%;grid-column-gap:0;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{width:1299px;height:100%;position:relative}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-show{opacity:1;display:block}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-hide{opacity:0;display:none}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{transition:.5s ease-in-out;width:auto;height:auto;max-height:100%;max-width:100%;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.show{display:block}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.hide{display:none}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next:hover,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next.disable,ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{left:10px}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper .close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAQK0lEQVRYCQEgEN/vAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyMjLuvr60L8/Pwz/Pz8HAQEBBYAAAAA/Pz86gQEBOQEBATPFRUVvt3d3dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPT09DNPT02T4+Php/v7+FgQEBLwBAQHHCAgI4AQEBO4AAAAA/Pz8Evn5+SD+/v43/Pz8RAICAu4ICAiZKysrmsXFxfIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRVcBQUF5wkJCcEYGBhOZGRkBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY2NjBBgYGEwJCQm9BgYG6xQUFGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExDgwMDK0FBQXhGBgYSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZRgYGBt8LCwuvLCwsDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuLi4WBwcH0QsLC7EzMzMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU1NQ4LCwutBwcH0ygoKBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMA4ICAjRDQ0NnWxsbAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABycnICDQ0NlwcHB9UqKioQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsLC7ELCwuvcHBwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd3d3AgwMDKkLCwu3d3d3AgAAAAAAAAAAAAAAAAAAAAAAFBQUYgYGBt01NTUOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADk5OQwGBgbZFBQUagAAAAAAAAAAAAAAAAA3NzcQBgYG6xoaGkQAAAAAAAAAAAAAAAAAAAAACAgIkQMDA/sHBweZPz8/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/BAcHB5kDAwP7CAgIkwAAAAAAAAAAAAAAAAAAAAAaGho8BgYG7zIyMhQAAAAAAAAAAAAODg56CgoKuQAAAAAAAAAAAAAAAAAAAAAAAAAAAwMD+wAAAP8AAAD/BwcHoz8/PwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz8EBwcHowAAAP8AAAD/AgIC/QAAAAAAAAAAAAAAAAAAAAAAAAAACQkJsQ4ODoEAAAAAAHNzcwIHBwfjHBwcRAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHmwAAAP8AAAD/AAAA/wcHB6M/Pz8EAAAAAAAAAAAAAAAAAAAAAD8/PwQHBwejAAAA/wAAAP8AAAD/BwcHmwAAAAAAAAAAAAAAAAAAAAAAAAAAHh4ePgYGBudqamoEACAgIDwGBgblbW1tAgAAAAAAAAAAAAAAAAAAAAAAAAAAOjo6BAcHB6UAAAD/AAAA/wAAAP8HBwejPz8/BAAAAAAAAAAAPz8/BAcHB6MAAAD/AAAA/wAAAP8HBwelOjo6BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcHB98cHBxCAA4ODn4LCwudAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo6OgQHBwelAAAA/wAAAP8AAAD/BwcHoz8/PwQ/Pz8EBwcHowAAAP8AAAD/AAAA/wcHB6U6OjoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDJcNDQ2FAAoKCrESEhJoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6OjoEBwcHpQAAAP8AAAD/AAAA/wcHB6MHBwejAAAA/wAAAP8AAAD/BwcHpTo6OgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABISEmIICAi1AAkJCdUZGRlEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjo6BAcHB6UAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8HBwelOjo6BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0dHT4JCQnbAAUFBeElJSUyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo6OgQHBwelAAAA/wAAAP8AAAD/AAAA/wcHB6U6OjoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODiQCAgLjAv///wD+/v7+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAP4FBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/v4AAAACAAoKCtkcHBxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/BAcHB6MAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8HBwejPz8/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMjIzwJCQnfAAgICLcTExNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz8EBwcHowAAAP8AAAD/AAAA/wcHB6UHBwelAAAA/wAAAP8AAAD/BwcHoz8/PwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFgHBwe7AA0NDYkMDAyTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/PwQHBwejAAAA/wAAAP8AAAD/BwcHpTo6OgQ6OjoEBwcHpQAAAP8AAAD/AAAA/wcHB6M/Pz8EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDI0NDQ2PABcXF0YICAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/BAcHB6MAAAD/AAAA/wAAAP8HBwelOjo6BAAAAAAAAAAAOjo6BAcHB6UAAAD/AAAA/wAAAP8HBwejPz8/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICNMVFRVOAFtbWwYFBQXtIiIiMgAAAAAAAAAAAAAAAAAAAAAAAAAABwcHmQAAAP8AAAD/AAAA/wcHB6U6OjoEAAAAAAAAAAAAAAAAAAAAADo6OgQHBwelAAAA/wAAAP8AAAD/BwcHmwAAAAAAAAAAAAAAAAAAAAAAAAAAJSUlLAYGBvFLS0sIAAAAAAAMDAyPCwsLowAAAAAAAAAAAAAAAAAAAAAAAAAAAwMD+wAAAP8AAAD/BwcHpTo6OgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6OjoEBwcHpQAAAP8AAAD/AgIC/QAAAAAAAAAAAAAAAAAAAAAAAAAADAwMnQwMDJUAAAAAAAAAAAAnJyccBQUF8x8fHy4AAAAAAAAAAAAAAAAAAAAACAgIkwICAv0HBwebOjo6BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjo6BAcHB5sCAgL9CAgIlQAAAAAAAAAAAAAAAAAAAAAhISEoBQUF9SgoKCAAAAAAAAAAAAAAAAAAEBAQfggICMlaWloEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGpqagQJCQnDDw8PhQAAAAAAAAAAAAAAAAAAAAAASkpKBggICMsPDw+PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8PD4cICAjPPz8/CAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIh4GBgbnEBAQcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTbgYGBukhISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaGhooBgYG5xAQEItoaGgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAQPDw+FBQUF6RkZGSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyMjIAgICM8JCQnDICAgJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyMjJAkJCb8HBwfRISEhIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFBQQgODg6HBQUF9QwMDJcmJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYmJiIMDAyTBQUF9Q4ODo1BQUEKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiJOnp6Xf7+/taAgIC1AUFBbgLCwvLDg4O3DExMfYAAAD+0NDQDPLy8iT09PQy+/v7R/7+/jAFBQWoGBgYid3d3doAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3NzcM3t7eTvX19UH///8y/f39HgICAhQAAAAA/v7+7gMDA+ABAQHQCgoKvScnJ7TFxcXyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx6aIH59j4jkAAAAASUVORK5CYII=);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}ng-image-fullscreen-view .ng-image-fullscreen-view .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}ng-image-fullscreen-view .ng-image-fullscreen-view .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper{width:100%;height:100%}ng-image-fullscreen-view .ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NgImageFullscreenViewService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], videoAutoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paginationShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], infinite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], arrowKeyMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showVideoControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], prevImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nextImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], imageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animationSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keyup', ['$event']]
        }], lightboxDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['lightboxDiv']
        }], lightboxImageDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['lightboxImageDiv']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SliderCustomImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'custom-img',
                template: "<div *ngIf=\"fileUrl\" class=\"custom-image-main\">\n    <img class=\"image\"\n        *ngIf=\"type === IMAGE && fileUrl\"\n        [src]=\"fileUrl\"\n        [alt]=\"alt\"\n        [title]=\"title\">\n    <iframe class=\"youtube\"\n        *ngIf=\"type === YOUTUBE && fileUrl\"\n        [src]=\"fileUrl\"\n        frameborder=\"0\"\n        allowfullscreen></iframe>\n    <video class=\"video\"\n        (click)=\"videoClickHandler($event)\"\n        [autoplay]=\"videoAutoPlay\"\n        *ngIf=\"type === VIDEO\"\n        type=\"video/mp4\"\n        [attr.controls]=\"showVideoControls ? showVideoControls : null\"\n        controlsList=\"nodownload\">\n        <source [src]=\"fileUrl\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div [dir]=\"direction\" *ngIf=\"!fileUrl\" class=\"invalid-msg\">Invalid file format</div>\n    <span *ngIf=\"type === YOUTUBE || type === VIDEO || isVideo\" class=\"youtube-icon\"></span>\n</div>"
            }]
    }], function () { return [{ type: NgImageFullscreenViewService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { videoAutoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showVideoControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgImageFullscreenViewModule, { declarations: function () { return [SliderCustomImageComponent,
        NgImageFullscreenViewComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NgImageFullscreenViewComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgImageFullscreenViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    SliderCustomImageComponent,
                    NgImageFullscreenViewComponent
                ],
                exports: [
                    NgImageFullscreenViewComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-image-fullscreen-view
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-image-fullscreen-view.js.map

/***/ }),

/***/ "./src/app/pages/vehicle/detailvehicle/detailvehicle-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vehicle/detailvehicle/detailvehicle-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailvehicleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailvehicleRoutingModule", function() { return DetailvehicleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailvehicle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailvehicle.component */ "./src/app/pages/vehicle/detailvehicle/detailvehicle.component.ts");





const routes = [{ path: '', component: _detailvehicle_component__WEBPACK_IMPORTED_MODULE_2__["DetailvehicleComponent"] }];
class DetailvehicleRoutingModule {
}
DetailvehicleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailvehicleRoutingModule });
DetailvehicleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailvehicleRoutingModule_Factory(t) { return new (t || DetailvehicleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailvehicleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailvehicleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/vehicle/detailvehicle/detailvehicle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/vehicle/detailvehicle/detailvehicle.component.ts ***!
  \************************************************************************/
/*! exports provided: DetailvehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailvehicleComponent", function() { return DetailvehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
/* harmony import */ var _common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/globalheader/globalheader.component */ "./src/app/pages/common/globalheader/globalheader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/globalfooter/globalfooter.component */ "./src/app/pages/common/globalfooter/globalfooter.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
















function DetailvehicleComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r1421 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1421); const ctx_r1420 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](281); return ctx_r1420.openVehicleRenewalModel(_r1418); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "VehicleRenewal"), " ");
} }
function DetailvehicleComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r1423 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1423); const ctx_r1422 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1422.vehicleUpdateRequestCreation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "CreateUpdateRequest"));
} }
function DetailvehicleComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r1425 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_div_29_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1425); const ctx_r1424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1424.common.mesage.showMessage = !ctx_r1424.common.mesage.showMessage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1391.common.mesage.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1391.common.mesage.mesage);
} }
function DetailvehicleComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ChassisNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_45_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1392.f.chassisNumber.errors.required);
} }
function DetailvehicleComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "EngineNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_55_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1393.f.engineNumber.errors.required);
} }
function DetailvehicleComponent_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "OwnerNameEN"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_65_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1394.f.ownerNameEN.errors.required);
} }
function DetailvehicleComponent_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "OwnerNameAR"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_75_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1395.f.ownerNameAR.errors.required);
} }
function DetailvehicleComponent_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Notes"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_84_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1396.f.notes.errors.required);
} }
function DetailvehicleComponent_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Emirate"), "");
} }
function DetailvehicleComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_99_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1397.f.emirate.errors.required);
} }
function DetailvehicleComponent_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "PlateCode"), "");
} }
function DetailvehicleComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_109_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1398 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1398.f.plateCode.errors.required);
} }
function DetailvehicleComponent_div_119_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PlateNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_119_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1399.f.plateNumber.errors.required);
} }
function DetailvehicleComponent_div_129_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Make"), "");
} }
function DetailvehicleComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_129_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1400.f.make.errors.required);
} }
function DetailvehicleComponent_div_139_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Model"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_139_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1401.f.model.errors.required);
} }
function DetailvehicleComponent_div_149_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "Please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "PlateCode"), "");
} }
function DetailvehicleComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_149_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1402.f.vehicleColour.errors.required);
} }
function DetailvehicleComponent_div_159_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ModelNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_159_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1403 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1403.f.year.errors.required);
} }
function DetailvehicleComponent_div_172_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "TrafficFileNumber"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_172_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1404.f.trafficFileNumber.errors.required);
} }
function DetailvehicleComponent_div_181_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "IssueDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_181_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1405.f.issueDate.errors.required);
} }
function DetailvehicleComponent_div_189_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_189_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1406.f.expiryDate.errors.required);
} }
function DetailvehicleComponent_div_218_div_1_Template(rf, ctx) { if (rf & 1) {
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
function DetailvehicleComponent_div_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_218_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1407.f.type.errors.required);
} }
function DetailvehicleComponent_div_228_div_1_Template(rf, ctx) { if (rf & 1) {
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
function DetailvehicleComponent_div_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_228_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1408 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1408.f.permitType.errors.required);
} }
function DetailvehicleComponent_div_238_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "IssueDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_238_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1409 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1409.f.pemitIssueDate.errors.required);
} }
function DetailvehicleComponent_div_248_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_248_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1410 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1410.f.permitExpiryDate.errors.required);
} }
function DetailvehicleComponent_div_258_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Fees"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_div_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_258_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1411.f.fees.errors.required);
} }
function DetailvehicleComponent_div_259_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contract Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "ContractEnglishName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, "ContractEnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "ContractArabicName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "OwnerNameAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, "ContractIssueDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 18, "ContractIssueDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 20, "ContractExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 22, "ExpiryDate"));
} }
function DetailvehicleComponent_div_262_Template(rf, ctx) { if (rf & 1) {
    const _r1448 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_div_262_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1448); const attachment_r1446 = ctx.$implicit; const ctx_r1447 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1447.downloadFile(attachment_r1446); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attachment_r1446 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1446.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attachment_r1446.FileName);
} }
function DetailvehicleComponent_div_269_table_1_tr_25_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r1455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_div_269_table_1_tr_25_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1455); const vehicle_r1451 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1453 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r1418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](281); return ctx_r1453.navigateToUpdateRenewalPage(vehicle_r1451, _r1418); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Edit"));
} }
function DetailvehicleComponent_div_269_table_1_tr_25_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DetailvehicleComponent_div_269_table_1_tr_25_a_14_Template, 3, 3, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1451 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.InsurancePolicyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.VehicleExpiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.Fees);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1451.Comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r1451.Status == "Need More Information");
} }
function DetailvehicleComponent_div_269_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 82);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DetailvehicleComponent_div_269_table_1_tr_25_Template, 15, 7, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1449 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1449.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, "ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "InsurancePolicyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 13, "VehicleExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, "Fees"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 19, "Comments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 21, "Action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1449.vehicleRenewalsList);
} }
function DetailvehicleComponent_div_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_269_table_1_Template, 26, 23, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1414 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1414.showVehicleRenewalsTable);
} }
function DetailvehicleComponent_div_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 88);
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
function DetailvehicleComponent_div_277_table_1_tr_22_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r1462 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_div_277_table_1_tr_22_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1462); const vehicle_r1458 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1460 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1460.navigateToUpdateRequestPage(vehicle_r1458); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Edit"));
} }
function DetailvehicleComponent_div_277_table_1_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DetailvehicleComponent_div_277_table_1_tr_22_a_12_Template, 3, 3, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1458 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1458.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1458.VehicleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1458.VehicleColour);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1458.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r1458.Comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", vehicle_r1458.Status == "Need More Information");
} }
function DetailvehicleComponent_div_277_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 82);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetailvehicleComponent_div_277_table_1_tr_22_Template, 13, 6, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1456 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r1456.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "VehicleID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "Colour"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 14, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "Comments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 18, "Action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1456.vehicleUpdateRequestList);
} }
function DetailvehicleComponent_div_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_div_277_table_1_Template, 23, 20, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1416 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1416.showVehicleUpdateRequestTable);
} }
function DetailvehicleComponent_div_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 88);
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
function DetailvehicleComponent_ng_template_280_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "VehicleID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_22_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1464 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1464.g.vehicleId.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "CompanyId"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_32_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1465 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1465.g.companyId.errors.required);
} }
function DetailvehicleComponent_ng_template_280_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vtl_r1480 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vtl_r1480.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vtl_r1480.NameEN, " ");
} }
function DetailvehicleComponent_ng_template_280_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
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
function DetailvehicleComponent_ng_template_280_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_68_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1468 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1468.g.type.errors.required);
} }
function DetailvehicleComponent_ng_template_280_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vtpl_r1482 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vtpl_r1482.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vtpl_r1482.PermitName, " ");
} }
function DetailvehicleComponent_ng_template_280_div_82_div_1_Template(rf, ctx) { if (rf & 1) {
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
function DetailvehicleComponent_ng_template_280_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_82_div_1_Template, 5, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1470 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1470.g.permitType.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitStartDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_93_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1471 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1471.g.permitStartDate.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_103_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "PermitExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_103_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1472 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1472.f.permitExpiryDate.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Fees"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_114_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1473 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1473.f.fees.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_126_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "VehicleExpiryDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_126_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1475 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1475.g.vehicleExpiryDate.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_127_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Late Fee"));
} }
function DetailvehicleComponent_ng_template_280_div_127_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_127_div_8_div_1_Template, 3, 3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1488 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1488.g.vehicleLateFee.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_127_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "TotalAmount"), " ");
} }
function DetailvehicleComponent_ng_template_280_div_127_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_div_127_div_16_div_1_Template, 3, 3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1489 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1489.g.vehicleTotalAmount.errors.required);
} }
function DetailvehicleComponent_ng_template_280_div_127_Template(rf, ctx) { if (rf & 1) {
    const _r1493 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_ng_template_280_div_127_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1493); const ctx_r1492 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1492.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DetailvehicleComponent_ng_template_280_div_127_div_8_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_ng_template_280_div_127_Template_input_keypress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1493); const ctx_r1494 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1494.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DetailvehicleComponent_ng_template_280_div_127_div_16_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1476 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "LateFee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "Late Fee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1476.g.vehicleLateFee.touched || ctx_r1476.isFormSubmited) && ctx_r1476.g.vehicleLateFee.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "TotalAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "TotalAmount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1476.g.vehicleTotalAmount.touched || ctx_r1476.isFormSubmited) && ctx_r1476.g.vehicleTotalAmount.errors);
} }
function DetailvehicleComponent_ng_template_280_section_128_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "VehicleLicense"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_section_128_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_section_128_div_10_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1495.g.file1.errors.required);
} }
function DetailvehicleComponent_ng_template_280_section_128_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r1501 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_ng_template_280_section_128_label_11_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1501); const ctx_r1500 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1500.common.downloadFile(ctx_r1500.vehicleRenewalForm.value.file1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1496 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1496.vehicleRenewalForm.value.file1.FileName);
} }
function DetailvehicleComponent_ng_template_280_section_128_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Other"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "isRequired"), "");
} }
function DetailvehicleComponent_ng_template_280_section_128_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailvehicleComponent_ng_template_280_section_128_div_19_div_1_Template, 4, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1497.g.file2.errors.required);
} }
function DetailvehicleComponent_ng_template_280_section_128_label_20_Template(rf, ctx) { if (rf & 1) {
    const _r1504 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_ng_template_280_section_128_label_20_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1504); const ctx_r1503 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1503.common.downloadFile(ctx_r1503.vehicleRenewalForm.value.file2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1498 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1498.vehicleRenewalForm.value.file2.FileName);
} }
function DetailvehicleComponent_ng_template_280_section_128_Template(rf, ctx) { if (rf & 1) {
    const _r1506 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailvehicleComponent_ng_template_280_section_128_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1506); const ctx_r1505 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1505.onChange($event, "file1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DetailvehicleComponent_ng_template_280_section_128_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DetailvehicleComponent_ng_template_280_section_128_label_11_Template, 2, 1, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailvehicleComponent_ng_template_280_section_128_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1506); const ctx_r1507 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1507.onChange($event, "file2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DetailvehicleComponent_ng_template_280_section_128_div_19_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DetailvehicleComponent_ng_template_280_section_128_label_20_Template, 2, 1, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "VehicleLicense"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1477.g.file1.touched || ctx_r1477.isFormSubmited) && ctx_r1477.g.file1.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1477.vehicleRenewalForm.value.file1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "Other"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1477.g.file2.touched || ctx_r1477.isFormSubmited) && ctx_r1477.g.file2.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1477.vehicleRenewalForm.value.file2);
} }
function DetailvehicleComponent_ng_template_280_Template(rf, ctx) { if (rf & 1) {
    const _r1509 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_ng_template_280_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1508 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1508.closeModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailvehicleComponent_ng_template_280_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const _r1474 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](125); const _r1466 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52); _r1474.close(); return _r1466.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DetailvehicleComponent_ng_template_280_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1511 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1511.vehicleRenewalSubmitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetailvehicleComponent_ng_template_280_div_22_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DetailvehicleComponent_ng_template_280_div_32_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_ng_template_280_Template_input_keypress_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1512 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1512.common.allow_alphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "owl-date-time", 98, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailvehicleComponent_ng_template_280_Template_select_change_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1513 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1513.getfilterVehicleTypePermitList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, DetailvehicleComponent_ng_template_280_option_67_Template, 2, 2, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DetailvehicleComponent_ng_template_280_div_68_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailvehicleComponent_ng_template_280_Template_select_change_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1514 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1514.onchangeOfPermitType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, DetailvehicleComponent_ng_template_280_option_81_Template, 2, 2, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DetailvehicleComponent_ng_template_280_div_82_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DetailvehicleComponent_ng_template_280_div_93_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, DetailvehicleComponent_ng_template_280_div_103_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_ng_template_280_Template_input_keypress_112_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1509); const ctx_r1515 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1515.common.allow_numeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, DetailvehicleComponent_ng_template_280_div_114_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "owl-date-time", 98, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, DetailvehicleComponent_ng_template_280_div_126_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, DetailvehicleComponent_ng_template_280_div_127_Template, 17, 14, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, DetailvehicleComponent_ng_template_280_section_128_Template, 21, 10, "section", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](135, "translate");
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
    const _r1466 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);
    const _r1474 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](125);
    const ctx_r1419 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 43, "VehicleRenewal"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1419.vehicleRenewalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 45, "VehicleID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 47, "VehicleID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.vehicleId.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.vehicleId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 49, "CompanyId"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 51, "CompanyId"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.companyId.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.companyId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 53, "InsurancePolicyNumber"), " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 55, "InsurancePolicyNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 57, "InsuranceExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 59, "InsuranceExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1466)("owlDateTimeTrigger", _r1466);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 61, "Type"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 63, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 65, "Type"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1419.vehicleTypeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.type.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.type.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 67, "PermitType"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 69, "Select"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 71, "PermitType"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1419.vehicleTypePermitListWithFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.permitType.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.permitType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 73, "PermitStartDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](92, 75, "PermitStartDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.permitStartDate.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.permitStartDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 77, "PermitExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](102, 79, "PermitExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.f.permitExpiryDate.touched || ctx_r1419.isFormSubmited) && ctx_r1419.f.permitExpiryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](109, 81, "Fees"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](113, 83, "Fees"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.f.fees.touched || ctx_r1419.isFormSubmited) && ctx_r1419.f.fees.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 85, "VehicleExpiryDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](123, 87, "VehicleExpiryDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1474)("owlDateTimeTrigger", _r1474);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1419.g.vehicleExpiryDate.touched || ctx_r1419.isFormSubmited) && ctx_r1419.g.vehicleExpiryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1419.isVehicleLateFeeApplied && ctx_r1419.common.showLateFee == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1419.showDocumentSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](135, 89, "Submit"), " ");
} }
const _c0 = function () { return ["/company/listcompany"]; };
const _c1 = function () { return ["/vehicle/listvehicle"]; };
// import { threadId } from 'worker_threads';
class DetailvehicleComponent {
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
        this.vehicleInfo = {};
        this.emiratesList = [];
        this.vehicleRenewalResultInfo = [];
        this.plateCodeListWithFilter = [];
        this.vehicleMakeList = [];
        this.vehicleTypeList = [];
        this.vehicleTypePermitListWithFilter = [];
        this.vehicleUpdateRequestList = [];
        this.vehicleTypePermitList = [];
        this.vehicleRenewalsList = [];
        this.viewVehicleAttachmentsList = [];
        this.today = new Date();
        this.isFormSubmited = false;
        this.showDocumentSection = true;
        this.showVehicleUpdateRequestTable = true;
        this.showVehicleRenewalsTable = true;
        this.showVehicleRenewalBtn = false;
        this.showCreateUpdateRequestBtn = false;
        this.noVehicleRenewalRecordsFound = false;
        this.noVehicleUpdateRequestRecordsFound = false;
        this.isVehicleLateFeeApplied = false;
        this.isShownDiv = false;
        //readonly file1SubjectName: string = 'Mulkiya Card';
        //readonly file2SubjectName: string = 'Passport';
        //readonly file3SubjectName: string = 'Driving License';
        //readonly file4SubjectName: string = 'Other';
        //readonly file5SubjectName: string = 'Generic';
        this.file1SubjectName = 'Vehicle License';
        this.file2SubjectName = 'Others';
        dateTimeAdapter.setLocale('en-IN');
        this.common.isUserLoggedIn();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
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
            chassisNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            engineNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ownerNameEN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ownerNameAR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            notes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emirate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            plateCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            plateNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleColour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            make: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trafficFileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            expiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            insurance: [''],
            insuranceExpiryDate: [''],
            englishName: [''],
            arabicName: [''],
            contractIssueDate: [null],
            contractExpiryDate: [null],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pemitIssueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkAllCondition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file4: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.vehicleRenewalForm = this.formBuilder.group({
            ID: [null],
            vehicleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            insurancePolicyNumber: [null],
            insuranceExpiryDate: [null],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            permitExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleExpiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file2: [null],
            //file3: [null],
            //file4: [null],
            //file5: [null],
            vehicleLateFee: [''],
            vehicleTotalAmount: [''],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.reactiveFormName.controls; }
    // convenience getter for easy access to form fields
    get g() { return this.vehicleRenewalForm.controls; }
    // Used for call all APIs
    initMasterData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            this.showAddVehicleBtn = this.common.getValueFromSessionStorage("showAddVehicleBtn"); //Get showAddVehicleBtn true/false after all DisableFineRestriction check in listDriver page, Abhijith 15-12-2023
            this.assignDataToform(vehicleInfo);
            yield this.getVehicleDeatilInfo();
            yield this.getVehicleUpdateRequestList(false);
            yield this.getVehicleRenewalsList(false);
            yield this.getViewVehicleAttachmentsList();
            yield this.getVehicleTypePermitList();
            yield this.getVehicleTypeList();
            if (this.common.isCompanyTypeFranchise) {
                this.showCreateUpdateRequestBtn = false;
                this.showVehicleRenewalBtn = false;
            }
            else {
                if (this.showAddVehicleBtn) { //If addvehicle button is hided then hide renewal button also, just added comment, Abhijith 08-12-2023
                    this.showCreateUpdateRequestBtn = false;
                    this.showVehicleRenewalBtn = false;
                }
                else {
                    if (vehicleInfo.PermitExpiryDate != null && vehicleInfo.PermitExpiryDate != '') {
                        var newdate = vehicleInfo.PermitExpiryDate.split("-").reverse().join("-");
                        let startdate = new Date(newdate);
                        let today = new Date();
                        startdate.setDate(startdate.getDate() - 30);
                        if (today >= startdate && !vehicleInfo.PendingPayments &&
                            !vehicleInfo.PendingRequestsAvailable && !vehicleInfo.PendingRenewalsAvailable && !this.showAddVehicleBtn) { //If isFine is availbale & addDriverBtn is enabled(based on DisableFineRestrictionAPI) then show vehicle renewal button, Abhijith 08-12-2023
                            this.showVehicleRenewalBtn = true;
                        }
                    }
                }
            }
        });
    }
    // Used for navigate to update request crete screen
    vehicleUpdateRequestCreation() {
        let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
        vehicleInfo.requestFrom = 'vehicleUpdateReqCreation';
        this.common.setValueToSessionStorage('updateVehicleInfo', vehicleInfo);
        this.router.navigateByUrl('/vehicle/addvehicle');
    }
    // Used for navigate to update request update screen
    navigateToUpdateRequestPage(updateVehicleInfo) {
        let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
        updateVehicleInfo.ChassisNumber = vehicleInfo.ChassisNumber;
        updateVehicleInfo.VehicleType = vehicleInfo.VehicleType;
        /* <!--For UAT the below code should be uncomment, for live it should comment Radhika-- >*/
        if (vehicleInfo.VehicleType.includes("Outside RAK")) {
            this.isShownDiv = true;
        }
        else {
            this.isShownDiv = false;
        }
        //end
        updateVehicleInfo.TypeOfPermit = vehicleInfo.TypeOfPermit;
        updateVehicleInfo.PermitStartDate = vehicleInfo.PermitStartDate;
        updateVehicleInfo.PermitExpiryDate = vehicleInfo.PermitExpiryDate;
        updateVehicleInfo.Fees = vehicleInfo.Fees;
        updateVehicleInfo.requestFrom = 'vehicleUpdateReqUpdate';
        this.common.setValueToSessionStorage('updateVehicleInfo', updateVehicleInfo);
        this.router.navigateByUrl('/vehicle/addvehicle');
    }
    // Used for navigate update renewal screen
    navigateToUpdateRenewalPage(updateVehicleInfo, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isVehicleLateFeeApplied = true;
            this.vehicleRenewalForm.reset();
            this.showDocumentSection = false;
            setTimeout(() => {
                this.showDocumentSection = true;
            }, 100);
            let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            const indexArray = this.vehicleTypeList.filter(value => value.NameEN == vehicleInfo.VehicleType);
            if (indexArray.length > 0) {
                this.vehicleRenewalForm.controls['type'].setValue(indexArray[0].ID);
                this.getfilterVehicleTypePermitList();
                /* <!--For UAT the below code should be uncomment, for live it should comment Radhika-- >*/
                if (vehicleInfo.VehicleType.includes("Outside RAK")) {
                    this.isShownDiv = true;
                }
                else {
                    this.isShownDiv = false;
                }
            }
            //end
            this.vehicleRenewalForm.controls['vehicleId'].setValue(vehicleInfo.VehicleID);
            this.vehicleRenewalForm.controls['companyId'].setValue(vehicleInfo.CompanyID);
            this.vehicleRenewalForm.controls['fees'].setValue(updateVehicleInfo.Fees + '');
            this.vehicleRenewalForm.controls['ID'].setValue(updateVehicleInfo.ID);
            const typeArray = this.vehicleTypePermitListWithFilter.filter(value => value.PermitName == updateVehicleInfo.TypeOfPermit);
            if (typeArray.length > 0) {
                this.vehicleRenewalForm.controls['permitType'].setValue(typeArray[0].ID);
            }
            this.vehicleRenewalForm.controls['insurancePolicyNumber'].setValue(updateVehicleInfo.InsurancePolicyNumber);
            this.vehicleRenewalForm.controls['permitStartDate'].setValue(updateVehicleInfo.PermitStartDate);
            this.vehicleRenewalForm.controls['permitExpiryDate'].setValue(updateVehicleInfo.PermitExpiryDate);
            this.vehicleRenewalForm.controls['insuranceExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(updateVehicleInfo.InsuranceExpiryDate));
            this.vehicleRenewalForm.controls['vehicleExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(updateVehicleInfo.VehicleExpiryDate));
            //Added LateFee & TotalAmount while editing Vehicle renewal if status is "Need more information", Abhijith 11-08-2023
            this.vehicleRenewalForm.controls['vehicleLateFee'].setValue(updateVehicleInfo.LateFees);
            this.vehicleRenewalForm.controls['vehicleTotalAmount'].setValue(updateVehicleInfo.TotalAmount);
            yield this.getViewVehicleRenewalAttachments();
            this.modalService.open(content, {
                ariaLabelledBy: 'modal-basic-title', size: 'xl', centered: true,
                backdropClass: 'custom_backdrop_cls', backdrop: true, windowClass: 'custom_window_cls'
            }).result.then((result) => {
            }, (reason) => {
            });
        });
    }
    // Used for show renewal screen
    openVehicleRenewalModel(content) {
        let today = new Date();
        let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
        let expDate = this.common.strintoUTCDate(vehicleInfo.PermitExpiryDate);
        if (today <= expDate) {
            expDate.setDate(expDate.getDate() + 1);
            today = expDate;
        }
        let month = (today.getMonth() + 1);
        let day = today.getDate();
        let permitStartDate = (day > 9 ? day : ('0' + day)) + '-' + (month > 9 ? month : ('0' + month)) + '-' + today.getFullYear();
        this.vehicleRenewalForm.controls['vehicleId'].setValue(vehicleInfo.VehicleID);
        this.vehicleRenewalForm.controls['companyId'].setValue(vehicleInfo.CompanyID);
        this.vehicleRenewalForm.controls['permitStartDate'].setValue(permitStartDate);
        const indexArray = this.vehicleTypeList.filter(value => value.NameEN == vehicleInfo.VehicleType);
        if (indexArray.length > 0) {
            this.vehicleRenewalForm.controls['type'].setValue(indexArray[0].ID);
            this.getfilterVehicleTypePermitList();
        }
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title', size: 'xl', centered: true,
            backdropClass: 'custom_backdrop_cls', backdrop: true, windowClass: 'custom_window_cls'
        }).result.then((result) => {
        }, (reason) => {
        });
    }
    // Used for close model
    closeModel() {
        this.modalService.dismissAll();
    }
    // Used for get update request list
    getVehicleUpdateRequestList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let outerJsonData = {};
            let jsonData = {};
            let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            jsonData.Token = userLoginInfo.Token;
            jsonData.UserID = userLoginInfo.ID;
            jsonData.CompanyID = companyInfo.CompanyID;
            jsonData.VehicleID = vehicleInfo.VehicleID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            this.showVehicleUpdateRequestTable = false;
            this.noVehicleUpdateRequestRecordsFound = false;
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/ListVehicleUpdateRequests', outerJsonData, loader).then(result => {
                this.vehicleUpdateRequestList = result;
                this.showVehicleUpdateRequestTable = true;
                let indexArray = result.filter(value => value.Status == 'Under Approval');
                let needArray = result.filter(value => value.Status == 'Need More Information');
                if (indexArray.length == 0 && needArray.length == 0 && !vehicleInfo.PendingPayments &&
                    !vehicleInfo.PendingRequestsAvailable && !vehicleInfo.PendingRenewalsAvailable && (vehicleInfo.Status == 'Expired' || vehicleInfo.Status == 'Active')) {
                    if (!this.showAddVehicleBtn) {
                        this.showVehicleRenewalBtn = false;
                        this.showCreateUpdateRequestBtn = true;
                    }
                    if (this.common.isCompanyTypeFranchise) {
                        this.showCreateUpdateRequestBtn = false;
                        this.showVehicleRenewalBtn = false;
                    }
                }
            }).catch(error => {
                console.log("error ", error);
            });
            if (this.vehicleUpdateRequestList.length == 0) {
                this.noVehicleUpdateRequestRecordsFound = true;
            }
        });
    }
    // Used for get renewal list
    getVehicleRenewalsList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let outerJsonData = {};
            let jsonData = {};
            let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            let selectedcompanyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            jsonData.Token = userLoginInfo.Token;
            jsonData.UserID = userLoginInfo.ID;
            jsonData.CompanyID = selectedcompanyInfo.CompanyID;
            jsonData.VehicleID = vehicleInfo.VehicleID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            this.showVehicleRenewalsTable = false;
            this.noVehicleRenewalRecordsFound = false;
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/ListVehicleRenewals', outerJsonData, loader).then(result => {
                this.vehicleRenewalsList = result;
                let indexArray = result.filter(value => value.Status == 'Under Approval');
                let needArray = result.filter(value => value.Status == 'Need More Information');
                if (indexArray.length > 0 || needArray.length > 0 && !vehicleInfo.PendingPayments &&
                    !vehicleInfo.PendingRequestsAvailable && !vehicleInfo.PendingRenewalsAvailable && (vehicleInfo.Status == 'Expired' || vehicleInfo.Status == 'Active')) {
                    if (!this.showAddVehicleBtn) {
                        this.showVehicleRenewalBtn = false;
                        this.showCreateUpdateRequestBtn = false;
                    }
                    if (this.common.isCompanyTypeFranchise) {
                        this.showVehicleRenewalBtn = false;
                        this.showCreateUpdateRequestBtn = false;
                    }
                }
                this.showVehicleRenewalsTable = true;
            }).catch(error => {
                console.log("error ", error);
            });
            if (this.vehicleRenewalsList.length == 0) {
                this.noVehicleRenewalRecordsFound = true;
            }
        });
    }
    // Used for get attachment
    getViewVehicleAttachmentsList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let outerJsonData = {};
            let jsonData = {};
            let selectedCompanyInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            jsonData.CompanyID = companyInfo.CompanyID;
            jsonData.VehicleID = selectedCompanyInfo.VehicleID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.UserID = userLoginInfo.ID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/ViewVehicleAttachments', outerJsonData, loader).then(result => {
                let attachmentArray = [];
                for (let data of result) {
                    data.attachment = 'data:image/jpg;base64,' + data.Data;
                    data.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(data.attachment);
                    attachmentArray.push(data);
                }
                this.viewVehicleAttachmentsList = attachmentArray;
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get vehicle details
    getVehicleDeatilInfo(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let outerJsonData = {};
            let jsonData = {};
            let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let companyInfo = this.common.getValueFromSessionStorage('selectedCompanyInfo');
            jsonData.VehicleID = vehicleInfo.VehicleID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.UserID = userLoginInfo.ID;
            jsonData.CompanyID = companyInfo.CompanyID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/ViewVehicle', outerJsonData, loader).then(result => {
                if (result.Message) {
                    this.common.showSussessFailureMessage(2, result.Message);
                }
                else {
                    this.vehicleInfo = result;
                    this.assignDataToform(this.vehicleInfo);
                }
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for assign data to form
    assignDataToform(vehicleInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.reactiveFormName.controls['chassisNumber'].setValue(vehicleInfo.ChassisNumber);
            this.reactiveFormName.controls['engineNumber'].setValue(vehicleInfo.EngineNumber);
            this.reactiveFormName.controls['ownerNameEN'].setValue(vehicleInfo.OwnerNameEN);
            this.reactiveFormName.controls['ownerNameAR'].setValue(vehicleInfo.OwnerNameAR);
            this.reactiveFormName.controls['notes'].setValue(vehicleInfo.EngineNumber);
            this.reactiveFormName.controls['emirate'].setValue(vehicleInfo.VehiclePlateEmirate);
            this.reactiveFormName.controls['make'].setValue(vehicleInfo.VehicleMake);
            this.reactiveFormName.controls['model'].setValue(vehicleInfo.VehicleModel);
            this.reactiveFormName.controls['vehicleColour'].setValue(vehicleInfo.VehicleColour);
            this.reactiveFormName.controls['plateCode'].setValue(vehicleInfo.VehiclePlateCode);
            this.reactiveFormName.controls['type'].setValue(vehicleInfo.VehicleType);
            this.reactiveFormName.controls['year'].setValue(vehicleInfo.ModelNumber);
            this.reactiveFormName.controls['issueDate'].setValue(vehicleInfo.IssueDate);
            this.reactiveFormName.controls['insuranceExpiryDate'].setValue(vehicleInfo.InsuraceExpiryDate);
            this.reactiveFormName.controls['insurance'].setValue(vehicleInfo.InsurancePolicyNumber);
            this.reactiveFormName.controls['fees'].setValue(vehicleInfo.Fees);
            this.reactiveFormName.controls['permitExpiryDate'].setValue(vehicleInfo.PermitExpiryDate);
            this.reactiveFormName.controls['pemitIssueDate'].setValue(vehicleInfo.PermitStartDate);
            this.reactiveFormName.controls['plateNumber'].setValue(vehicleInfo.PlateNumber);
            this.reactiveFormName.controls['trafficFileNumber'].setValue(vehicleInfo.TraficFileNumber);
            this.reactiveFormName.controls['permitType'].setValue(vehicleInfo.TypeOfPermit);
            this.reactiveFormName.controls['expiryDate'].setValue(vehicleInfo.ExpiryDate);
            /* <!--For UAT the below code should be uncomment, for live it should comment Radhika-- >*/
            if (vehicleInfo.VehicleType.includes("Outside RAK")) {
                let info = {};
                debugger;
                info.IntVehicleId = null;
                info.VehicleId = vehicleInfo.VehicleID;
                yield this.apiCall.postAPICallWithToken("api/VehicleManager/ViewVehicleContract", info).then(result => {
                    debugger;
                    this.isShownDiv = true;
                    if (result.data.length != 0) {
                        var output = result.data;
                        this.reactiveFormName.controls['englishName'].setValue(output.EnglishName);
                        this.reactiveFormName.controls['arabicName'].setValue(output.ArabicName);
                        this.reactiveFormName.controls['contractIssueDate'].setValue(this.common.stringDateToCalendarDateFormat(output.IssueDate));
                        this.reactiveFormName.controls['contractExpiryDate'].setValue(this.common.stringDateToCalendarDateFormat(output.ExpiryDate));
                    }
                    this.reactiveFormName.controls['englishName'].disable({ onlySelf: true, emitEvent: true });
                    this.reactiveFormName.controls['arabicName'].disable({ onlySelf: true, emitEvent: true });
                    this.f.contractIssueDate.disable();
                    this.f.contractExpiryDate.disable();
                }).catch(error => {
                    console.log("error ", error);
                });
            }
            //end radhika
            this.reactiveFormName.disable();
        });
    }
    // Used for get Vehicle Type Permit List
    getVehicleTypePermitList(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //To store get data in Local
            let getVehicleTypePermitList = this.common.getValueFromSessionStorage('getVehicleTypePermitList');
            if (getVehicleTypePermitList != null) {
                this.vehicleTypePermitList = getVehicleTypePermitList;
                return;
            }
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/getVehicleTypePermitList', {}, loader).then(result => {
                this.vehicleTypePermitList = result;
                //To store Master data in Local
                this.common.setValueToSessionStorage('getVehicleTypePermitList', result);
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get Vehicle Type List
    getVehicleTypeList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //To store get data in Local
            let getVehicleTypeList = this.common.getValueFromSessionStorage('getVehicleTypeList');
            if (getVehicleTypeList != null) {
                this.vehicleTypeList = getVehicleTypeList;
                return;
            }
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/getVehicleTypeList', {}).then(result => {
                this.vehicleTypeList = result;
                //To store Master data in Local
                this.common.setValueToSessionStorage('getVehicleTypeList', result);
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // For filter Vehicle Type Permit List based on vehicle type
    getfilterVehicleTypePermitList() {
        this.vehicleRenewalForm.controls['permitType'].setValue("");
        const indexArray = this.vehicleTypeList.filter(value => value.ID == this.vehicleRenewalForm.value.type);
        var searchValue = '';
        if (indexArray.length > 0) {
            searchValue = indexArray[0].NameEN;
        }
        this.vehicleTypePermitListWithFilter = this.vehicleTypePermitList.filter(value => value.VehicleType == searchValue);
    }
    onchangeOfPermitType() {
        const indexArray = this.vehicleTypePermitList.filter(value => value.ID == this.vehicleRenewalForm.value.permitType);
        if (indexArray.length > 0) {
            let index = indexArray[0];
            this.vehicleRenewalForm.controls['fees'].setValue(index.FeesForRenew + '');
            let array = index.PermitName.split(' ');
            if (!isNaN(array[0])) {
                let permitStartDate = this.common.strintoUTCDate(this.g.permitStartDate.value);
                let fee = parseInt(array[0]);
                var newDate = new Date(permitStartDate.setMonth(permitStartDate.getMonth() + fee));
                let month = (newDate.getMonth() + 1);
                let day = newDate.getDate();
                let pemitIssueDate = (day > 9 ? day : ('0' + day)) + '-' + (month > 9 ? month : ('0' + month)) + '-' + newDate.getFullYear();
                this.vehicleRenewalForm.controls['permitExpiryDate'].setValue(pemitIssueDate);
                // Vehicle Late fee logic by Abhijith 19-04-2023                   
                var expiredDate = new Date(this.vehicleInfo.PermitExpiryDate.split("-").reverse().join("-"));
                var todaysDate = new Date(this.vehicleRenewalForm.value.permitStartDate.split("-").reverse().join("-"));
                var diffInTime = todaysDate.getTime() - expiredDate.getTime();
                // To calculate the no. of days between two dates and late fee applicable only after 30days from Exp date.
                let diffInDays = diffInTime / (1000 * 3600 * 24);
                if (diffInDays > 30) {
                    // New logic 70AED / Per Month Abhijith       
                    let date = expiredDate;
                    date.setDate(date.getDate() + 30);
                    // calculate num of months and year after 30days 
                    let monthDiff = todaysDate.getMonth() - date.getMonth();
                    let yearDiff = todaysDate.getFullYear() - date.getFullYear();
                    let numberOfMonth = monthDiff + yearDiff * 12;
                    //This late fee amount we are taking from API
                    let amount = numberOfMonth * index.LateFees;
                    this.isVehicleLateFeeApplied = true;
                    this.vehicleRenewalForm.controls['vehicleLateFee'].setValue(Number(amount));
                    this.vehicleRenewalForm.controls['vehicleTotalAmount'].setValue(Number(this.vehicleRenewalForm.value.fees) + Number(this.vehicleRenewalForm.value.vehicleLateFee));
                    // this.vehicleRenewalForm.controls['fees'].setValue(this.vehicleRenewalForm.value.vehicleTotalAmount);
                }
                else {
                    this.vehicleRenewalForm.controls['fees'].setValue(index.FeesForRenew + '');
                }
                //End
            }
        }
    }
    // Submit renewal form
    vehicleRenewalSubmitForm() {
        this.isFormSubmited = true;
        if (this.vehicleRenewalForm.invalid) {
            return;
        }
        let outerJsonData = {};
        let jsonData = {};
        let vehicleInfo = this.common.getValueFromSessionStorage('vehicleInfo');
        let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
        jsonData.VehicleID = vehicleInfo.VehicleID;
        jsonData.UserID = userLoginInfo.ID;
        jsonData.Token = userLoginInfo.Token;
        jsonData.CompanyID = vehicleInfo.CompanyID;
        jsonData.Fees = this.vehicleRenewalForm.value.fees;
        jsonData.VehicleTypeID = this.vehicleRenewalForm.value.type;
        jsonData.TypeOfPermitID = this.vehicleRenewalForm.value.permitType;
        jsonData.PermitStartDate = this.g.permitStartDate.value.split("-").reverse().join("-");
        jsonData.PermitExpiryDate = this.g.permitExpiryDate.value.split("-").reverse().join("-");
        jsonData.InsurancePolicyNumber = this.vehicleRenewalForm.value.insurancePolicyNumber;
        jsonData.InsuranceExpiryDate = this.common.convertDateFormat(this.vehicleRenewalForm.value.insuranceExpiryDate);
        jsonData.VehicleExpiryDate = this.common.convertDateFormat(this.vehicleRenewalForm.value.vehicleExpiryDate);
        // // Sending late fee only if company type is not franchise - Abhijith 05-05-2023
        if (this.common.showLateFee == true) {
            jsonData.LateFees = this.vehicleRenewalForm.value.vehicleLateFee.toString();
            jsonData.TotalAmount = this.vehicleRenewalForm.value.vehicleTotalAmount.toString();
        }
        else {
            jsonData.LateFees = '';
            jsonData.TotalAmount = '';
        }
        //End
        let ApiEndPoint = 'api/VehicleManager/VehicleRenewalCreation';
        if (this.vehicleRenewalForm.value.ID != null) {
            jsonData.ID = this.vehicleRenewalForm.value.ID;
            ApiEndPoint = 'api/VehicleManager/VehicleRenewalUpdate';
        }
        outerJsonData.inputParameter = JSON.stringify(jsonData);
        this.apiCall.postAPICallWithToken(ApiEndPoint, jsonData).then(result => {
            if (result.Message) {
                this.common.showSussessFailureMessage(2, result.Message);
            }
            else {
                this.vehicleRenewalResultInfo = result;
                this.onSubmitOfAttchmentForm(result.ID);
            }
        }).catch(error => {
            console.log("error ", error);
        });
    }
    // Used for dowload file
    downloadFile(json) {
        this.common.downloadFile(json);
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
            if (this.vehicleRenewalForm.value[keyIndex]) {
                json = this.vehicleRenewalForm.value[keyIndex];
            }
            json.FileName = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                json.Data = reader.result;
                this.vehicleRenewalForm.controls[keyIndex].setValue(json);
            };
        }
    }
    // Used for upload attachment if attachment found
    onSubmitOfAttchmentForm(VehicleID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (VehicleID == null || VehicleID == '') {
                return;
            }
            let file = this.vehicleRenewalForm.value.file1;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(VehicleID, file, false, this.file1SubjectName);
            }
            file = this.vehicleRenewalForm.value.file2;
            if (file != null) {
                yield this.uplaodAttachmentToServerOneByOne(VehicleID, file, false, this.file2SubjectName);
            }
            //file = this.vehicleRenewalForm.value.file3;
            //if (file != null) {
            //  await this.uplaodAttachmentToServerOneByOne(VehicleID, file, false, this.file3SubjectName);
            //}
            //file = this.vehicleRenewalForm.value.file4;
            //if (file != null) {
            //  await this.uplaodAttachmentToServerOneByOne(VehicleID, file, false, this.file4SubjectName);
            //}
            //file = this.vehicleRenewalForm.value.file5;
            //if (file != null) {
            //  await this.uplaodAttachmentToServerOneByOne(VehicleID, file, false, this.file5SubjectName);
            //}
            this.apiCall.spinner.hide();
            this.modalService.dismissAll();
            this.getVehicleRenewalsList();
            if (this.vehicleRenewalForm.value.ID != null) {
                this.common.showSussessFailureMessage(1, 'Vehicle Renewal Updated Successfully and submitted for approval');
            }
            else {
                this.common.showSussessFailureMessage(1, 'Vehicle Renewal Created Successfully and submitted for approval');
            }
            this.vehicleRenewalForm.reset();
            this.showDocumentSection = false;
            setTimeout(() => {
                this.showDocumentSection = true;
            }, 300);
        });
    }
    // Used for call upload attachment API call
    uplaodAttachmentToServerOneByOne(ID, file, loader, Subject = 'Attachment') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ID == null || ID == '') {
                return;
            }
            let selectedCompanyInfo = this.common.getValueFromSessionStorage('updateVehicleInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.VehicleRenewalID = ID;
            jsonData.VehicleID = this.vehicleRenewalResultInfo.VehicleID;
            jsonData.Subject = Subject;
            jsonData.FileName = file.FileName;
            let fileData = file.Data.split('base64,');
            if (fileData.length > 1) {
                jsonData.Data = fileData[1];
            }
            else {
                jsonData.Data = file.Data;
            }
            let APIEndPoint = 'api/VehicleManager/VehicleRenewalAttachment';
            if (file.AttachmentID) {
                jsonData.AttachmentID = file.AttachmentID;
                APIEndPoint = 'api/VehicleManager/UpdateAttachment';
            }
            let outerJsonData = {};
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken(APIEndPoint, outerJsonData, loader).then(result => {
            }).catch(error => {
                console.log("error ", error);
            });
        });
    }
    // Used for get renewal attachemnt
    getViewVehicleRenewalAttachments(loader = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.vehicleRenewalForm.value.ID) {
                return;
            }
            let selectedCompanyInfo = this.common.getValueFromSessionStorage('vehicleInfo');
            let userLoginInfo = this.common.getValueFromSessionStorage('userLoginInfo');
            let outerJsonData = {};
            let jsonData = {};
            jsonData.UserID = userLoginInfo.ID;
            jsonData.Token = userLoginInfo.Token;
            jsonData.VehicleID = selectedCompanyInfo.VehicleID;
            jsonData.VehicleRenewalID = this.vehicleRenewalForm.value.ID;
            outerJsonData.inputParameter = JSON.stringify(jsonData);
            yield this.apiCall.postAPICallWithToken('api/VehicleManager/ViewVehicleRenewalAttachments', outerJsonData, loader).then(result => {
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
    //// Used for assign attachment to form
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
    //    this.vehicleRenewalForm.controls['file1'].setValue(json);
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
    //    this.vehicleRenewalForm.controls['file2'].setValue(json);
    //  }
    //  //indexArray = result.filter(value => value.Subject == this.file3SubjectName);
    //  //if (indexArray.length > 0) {
    //  //  let val = indexArray[0];
    //  //  let json: any = {}
    //  //  json.FileName = val.FileName;
    //  //  json.Data = val.Data;
    //  //  json.AttachmentID = val.AttachmentID
    //  //  json.attachment = 'data:image/jpg;base64,' + val.Data;
    //  //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
    //  //  this.vehicleRenewalForm.controls['file3'].setValue(json);
    //  //}
    //  //indexArray = result.filter(value => value.Subject == this.file4SubjectName);
    //  //if (indexArray.length > 0) {
    //  //  let val = indexArray[0];
    //  //  let json: any = {}
    //  //  json.FileName = val.FileName;
    //  //  json.Data = val.Data;
    //  //  json.AttachmentID = val.AttachmentID
    //  //  json.attachment = 'data:image/jpg;base64,' + val.Data;
    //  //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
    //  //  this.vehicleRenewalForm.controls['file4'].setValue(json);
    //  //}
    //  //indexArray = result.filter(value => value.Subject == this.file5SubjectName);
    //  //if (indexArray.length > 0) {
    //  //  let val = indexArray[0];
    //  //  let json: any = {}
    //  //  json.FileName = val.FileName;
    //  //  json.Data = val.Data;
    //  //  json.AttachmentID = val.AttachmentID
    //  //  json.attachment = 'data:image/jpg;base64,' + val.Data;
    //  //  json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
    //  //  this.vehicleRenewalForm.controls['file5'].setValue(json);
    //  //}
    //}
    // Used for assign attachment to form
    assignAttachmentToFrom(result) {
        //let indexArray = result.filter(value => value.Subject == this.file1SubjectName);
        if (result.length >= 1) {
            let indexArray = result[0];
            let val = indexArray;
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.reactiveFormName.controls['file1'].setValue(json);
        }
        /*indexArray = result.filter(value => value.Subject == this.file2SubjectName);*/
        if (result.length >= 2) {
            let indexArray = result[1];
            let val = indexArray;
            let json = {};
            json.FileName = val.FileName;
            json.Data = val.Data;
            json.AttachmentID = val.AttachmentID;
            json.attachment = 'data:image/jpg;base64,' + val.Data;
            json.attachment = this.sanitizer.bypassSecurityTrustResourceUrl(json.attachment);
            this.reactiveFormName.controls['file2'].setValue(json);
        }
    }
}
DetailvehicleComponent.ɵfac = function DetailvehicleComponent_Factory(t) { return new (t || DetailvehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["DateTimeAdapter"])); };
DetailvehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailvehicleComponent, selectors: [["app-detailvehicle"]], decls: 282, vars: 197, consts: [[1, "page-wrapper", 3, "dir"], [1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "cus_bdm_cls"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "d-flex", "action_box", "py-3"], [1, "d-flex", "align-items-center", "action_box-first"], ["class", "btn theme-blue-btn add_company_xs", 3, "click", 4, "ngIf"], [1, "col-12", "p-0"], [1, "card"], [1, "card-header", "bg-info", "list_esit_bg_info"], [1, "mb-0", "text-white"], [1, "card-body", "wizard-content"], [3, "class", 4, "ngIf"], [1, "validation-wizard", "wizard-circle", "mt-5", 3, "formGroup"], [1, "col-md-4"], [1, "form-group"], ["for", "wfirstName2"], [1, "danger"], ["type", "text", "formControlName", "chassisNumber", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "wlastName2"], ["type", "text", "formControlName", "engineNumber", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "ownerNameEN", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "ownerNameAR", 1, "form-control", 3, "placeholder", "keypress"], [1, "col-md-12"], ["type", "text", "formControlName", "notes", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "emirate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "plateCode", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "plateNumber", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "make", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "model", 1, "form-control", 3, "placeholder", "keypress"], ["type", "text", "formControlName", "vehicleColour", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "year", 1, "form-control", 3, "placeholder"], ["for", "TrafficFile"], ["type", "text", "formControlName", "trafficFileNumber", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "issueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "ExpiryDate"], ["type", "text", "formControlName", "expiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "InsuranceNumber"], ["type", "text", "formControlName", "insurance", 1, "form-control", 3, "placeholder"], ["for", "InsExpiryDate"], ["type", "text", "formControlName", "insuranceExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "Type"], ["type", "text", "formControlName", "type", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitType"], ["type", "text", "formControlName", "permitType", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PemitIssueDate"], ["type", "text", "formControlName", "pemitIssueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitExpiryDate"], ["type", "text", "formControlName", "permitExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["for", "PermitFees"], ["type", "text", "formControlName", "fees", "readonly", "", 1, "form-control", 3, "placeholder"], ["class", "cont_det_div", 4, "ngIf"], [1, "vehi_section"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "col-12", "card", "add_company_tab_card"], ["class", "table-responsive", 4, "ngIf"], ["class", "col-md-12 p-0", 4, "ngIf"], ["mymodal", ""], [1, "btn", "theme-blue-btn", "add_company_xs", 3, "click"], ["src", "/assets/images/company-page/add.svg", "alt", "", 1, "theme-blue-btn-img"], [1, "close", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "cont_det_div"], [2, "font-weight", "600 !important", "margin-bottom", "14px"], [1, "col-md-6"], ["type", "text", "formControlName", "englishName", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "arabicName", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "contractIssueDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "contractExpiryDate", "readonly", "", 1, "form-control", 3, "placeholder"], [1, "col-md-3"], [1, "form-group", "attachment_section"], [1, "attach_lbl"], [1, "file_name", "text-center", 3, "click"], [1, "table-responsive"], ["datatable", "", "class", "mytable", 3, "dtOptions", 4, "ngIf"], ["datatable", "", 1, "mytable", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "cursor_pointer"], [3, "click", 4, "ngIf"], [3, "click"], [1, "col-md-12", "p-0"], [1, "main_card", "no_record_found"], [1, "modal-header", "vehicle_ren_header"], [1, "modal-title"], ["_ngcontent-kmx-c109", "", "src", "/assets/images/close_image.svg", "alt", "close image", 1, "close_img", 3, "click"], [1, "modal-body", "vehicle_ren_body", 3, "click"], [1, "validation-wizard", "wizard-circle", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "vehicleId", "disabled", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "companyId", "disabled", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "insurancePolicyNumber", 1, "form-control", 3, "placeholder", "keypress"], ["formControlName", "insuranceExpiryDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder"], [3, "pickerType"], ["dt1", ""], ["formControlName", "type", "disabled", "", 1, "form-control", "form-design", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "permitType", 1, "form-control", "form-design", 3, "change"], ["type", "text", "formControlName", "permitStartDate", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "fees", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["formControlName", "vehicleExpiryDate", 1, "form-control", "password_field", 3, "owlDateTime", "owlDateTimeTrigger", "placeholder"], ["dt2", ""], ["class", "row", 4, "ngIf"], [1, "button", "pop_btn"], ["type", "submit", 1, "btn", "theme-blue-btn", "add_company_xs"], [3, "value"], ["for", "LateFee"], ["type", "text", "formControlName", "vehicleLateFee", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["for", "TotalAmount"], ["type", "text", "formControlName", "vehicleTotalAmount", "readonly", "", 1, "form-control", 3, "placeholder", "keypress"], ["for", "file1"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file1", "name", "file1", 1, "form-control", 3, "change"], ["class", "file_name", 3, "click", 4, "ngIf"], ["for", "file2"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/x-png,image/jpg,image/jpeg", "id", "file2", "name", "file2", 1, "form-control", 3, "change"], [1, "file_name", 3, "click"]], template: function DetailvehicleComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DetailvehicleComponent_button_19_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DetailvehicleComponent_button_20_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DetailvehicleComponent_div_29_Template, 5, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_Template_input_keypress_43_listener($event) { return ctx.common.special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DetailvehicleComponent_div_45_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_Template_input_keypress_53_listener($event) { return ctx.common.special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DetailvehicleComponent_div_55_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_Template_input_keypress_63_listener($event) { return ctx.common.special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, DetailvehicleComponent_div_65_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_Template_input_keypress_73_listener($event) { return ctx.common.special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DetailvehicleComponent_div_75_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DetailvehicleComponent_div_84_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, DetailvehicleComponent_div_99_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, DetailvehicleComponent_div_109_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, DetailvehicleComponent_div_119_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, DetailvehicleComponent_div_129_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DetailvehicleComponent_Template_input_keypress_137_listener($event) { return ctx.common.special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, DetailvehicleComponent_div_139_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, DetailvehicleComponent_div_149_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, DetailvehicleComponent_div_159_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](169, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, DetailvehicleComponent_div_172_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](178, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, DetailvehicleComponent_div_181_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, DetailvehicleComponent_div_189_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](194, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](196, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](203, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](207, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](213, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](217, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](218, DetailvehicleComponent_div_218_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](227, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](228, DetailvehicleComponent_div_228_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](233, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](237, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](238, DetailvehicleComponent_div_238_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](243, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](247, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](248, DetailvehicleComponent_div_248_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](253, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](257, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](258, DetailvehicleComponent_div_258_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](259, DetailvehicleComponent_div_259_Template, 33, 24, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](262, DetailvehicleComponent_div_262_Template, 6, 2, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](267, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](269, DetailvehicleComponent_div_269_Template, 2, 1, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](270, DetailvehicleComponent_div_270_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](275, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](277, DetailvehicleComponent_div_277_Template, 2, 1, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](278, DetailvehicleComponent_div_278_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "app-globalfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, DetailvehicleComponent_ng_template_280_Template, 136, 91, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.common.textAlignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](195, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 89, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](196, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 91, "Vehicles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.vehicleInfo.VehicleMake, "-", ctx.vehicleInfo.VehicleModel, "-", ctx.vehicleInfo.ModelNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showVehicleRenewalBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCreateUpdateRequestBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 93, "ViewVehicle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.common.mesage.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveFormName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 95, "BasicInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 97, "ChassisNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 99, "ChassisNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.chassisNumber.touched || ctx.isFormSubmited) && ctx.f.chassisNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 101, "EngineNumber"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 103, "EngineNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.engineNumber.touched || ctx.isFormSubmited) && ctx.f.engineNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 105, "OwnerNameEN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 107, "OwnerNameEN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.ownerNameEN.touched || ctx.isFormSubmited) && ctx.f.ownerNameEN.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 109, "OwnerNameAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 111, "OwnerNameAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.ownerNameAR.touched || ctx.isFormSubmited) && ctx.f.ownerNameAR.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](81, 113, "Notes"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 115, "Notes"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.notes.touched || ctx.isFormSubmited) && ctx.f.notes.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 117, "VehicleInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 119, "Emirate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 121, "Emirate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.emirate.touched || ctx.isFormSubmited) && ctx.f.emirate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](104, 123, "PlateCode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 125, "PlateCode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.plateCode.touched || ctx.isFormSubmited) && ctx.f.plateCode.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 127, "PlateNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 129, "PlateNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.plateNumber.touched || ctx.isFormSubmited) && ctx.f.plateNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](124, 131, "Make"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](128, 133, "Make"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.make.touched || ctx.isFormSubmited) && ctx.f.make.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](134, 135, "Model"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](138, 137, "Model"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.model.touched || ctx.isFormSubmited) && ctx.f.model.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](144, 139, "VehicleColour"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](148, 141, "VehicleColour"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.vehicleColour.touched || ctx.isFormSubmited) && ctx.f.vehicleColour.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 143, "ModelNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](158, 145, "ModelNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.year.touched || ctx.isFormSubmited) && ctx.f.year.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](163, 147, "PlateInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](169, 149, "TrafficFileNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](171, 151, "TrafficFileNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.trafficFileNumber.touched || ctx.isFormSubmited) && ctx.f.trafficFileNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](178, 153, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](180, 155, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.issueDate.touched || ctx.isFormSubmited) && ctx.f.issueDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](186, 157, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](188, 159, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.expiryDate.touched || ctx.isFormSubmited) && ctx.f.expiryDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](194, 161, "Insurance"), " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](196, 163, "Insurance"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](201, 165, "InsuranceExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](203, 167, "InsuranceExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](207, 169, "PermitDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](213, 171, "Type"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](217, 173, "Type"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.type.touched || ctx.isFormSubmited) && ctx.f.type.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](223, 175, "PermitType"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](227, 177, "PermitType"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitType.touched || ctx.isFormSubmited) && ctx.f.permitType.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](233, 179, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](237, 181, "IssueDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.pemitIssueDate.touched || ctx.isFormSubmited) && ctx.f.pemitIssueDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](243, 183, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](247, 185, "ExpiryDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.permitExpiryDate.touched || ctx.isFormSubmited) && ctx.f.permitExpiryDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](253, 187, "Fees"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](257, 189, "Fees"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f.fees.touched || ctx.isFormSubmited) && ctx.f.fees.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShownDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewVehicleAttachmentsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](267, 191, "VehicleRenewal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noVehicleRenewalRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noVehicleRenewalRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](275, 193, "VehicleUpdateRequest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noVehicleUpdateRequestRecordsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noVehicleUpdateRequestRecordsFound);
    } }, directives: [_common_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_10__["GlobalheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _common_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_12__["GlobalfooterComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTableDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlaGljbGUvZGV0YWlsdmVoaWNsZS9kZXRhaWx2ZWhpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailvehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-detailvehicle',
                templateUrl: './detailvehicle.component.html',
                styleUrls: ['./detailvehicle.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }, { type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["DateTimeAdapter"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-company-detailcompany-detailcompany-module~pages-vehicle-detailvehicle-detailvehicle-module-es2015.js.map