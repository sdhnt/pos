webpackJsonp([16],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddProductCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductCategoryPage = /** @class */ (function () {
    function AddProductCategoryPage(navCtrl, navParams, sp, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.newprodCat = "";
    }
    AddProductCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    AddProductCategoryPage.prototype.getCategories = function () {
        var _this = this;
        console.log(this.listCat + " and " + this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                console.log("val = " + val);
                _this.listCat = JSON.parse(val);
                console.log(_this.listCat);
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    AddProductCategoryPage.prototype.addCategory = function () {
        var _this = this;
        console.log(this.listCat + " and " + this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Added new Category',
                        duration: 3000
                    });
                    _this.newprodCat = "";
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    AddProductCategoryPage.prototype.delCat = function (element) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.deleteCategory(element);
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Deleted Category',
                    duration: 3000
                });
                _this.getCategories();
                //this.navCtrl.push(ProductListPage);
                //this.events.publish('prodAdd:created',0);
                // (this.navCtrl.parent as Tabs).select(0);
                toast.present();
            }, 1000);
        });
    };
    AddProductCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product-category',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\add-product-category\add-product-category.html"*/'<!--\n  Generated template for the AddProductCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>add-product-category</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8>\n          <ion-item>\n              <ion-input type="text" placeholder="Enter Category Here"  [(ngModel)]=\'newprodCat\'></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col col-4>\n          <button ion-button full color="dark" (click)="addCategory()"> Add Category</button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n   \n    \n\n  <ion-item>\n     <h2> <b>View/Remove Categories: </b> </h2>\n  </ion-item>\n \n  <ion-list  *ngFor="let element of listCat">\n\n      <ion-item>\n          {{element.name}}\n          <ion-icon item-end name="close-circle" (click)="delCat(element)" color="danger"></ion-icon> \n      </ion-item>\n  </ion-list>\n \n\n\n  \n\n \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\add-product-category\add-product-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddProductCategoryPage);
    return AddProductCategoryPage;
}());

//# sourceMappingURL=add-product-category.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachBusinesstipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoachBusinesstipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachBusinesstipsPage = /** @class */ (function () {
    function CoachBusinesstipsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachBusinesstipsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachBusinesstipsPage');
    };
    CoachBusinesstipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-businesstips',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-businesstips\coach-businesstips.html"*/'<!--\n  Generated template for the CoachBusinesstipsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>coach-businesstips</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n  \n  <ion-card>\n    <ion-grid line>\n        <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n          <ion-col col-10 style="color: grey; font-size: 10px;"> Wed, 10th October 2018 </ion-col>\n          <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n        </ion-row>\n        <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n          <ion-col><h2><b>You\'ve got a winner!</b></h2></ion-col>\n        </ion-row>\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n        Your item XYZ sells 50% higher than any other product in its category. Item ABC sells only 2% the volume of XYZ. You should stock more XYZ and less ABC.\n      </ion-row>\n      <ion-row  style="background-color: #f0f0f0">\n        <ion-col col-6 style="text-align: center ">\n            <ion-icon name="thumbs-up" ></ion-icon>\n        </ion-col>\n        <ion-col col-6 style="text-align: center ">\n            <ion-icon name="thumbs-down"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card> \n\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-businesstips\coach-businesstips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachBusinesstipsPage);
    return CoachBusinesstipsPage;
}());

//# sourceMappingURL=coach-businesstips.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachCoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoachCoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachCoachPage = /** @class */ (function () {
    function CoachCoachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachCoachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachCoachPage');
    };
    CoachCoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-coach',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-coach\coach-coach.html"*/'<!--\n  Generated template for the CoachCoachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>coach-coach</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n    <ion-card>\n        <ion-grid line>\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n            </ion-row>\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n            </ion-row>\n    \n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n              Want to look professional? Provide your customers a receipt with their purchases.\n          </ion-row>\n          <ion-row  style="background-color: #f0f0f0">\n            <ion-col col-6 style="text-align: center ">\n                <ion-icon name="thumbs-up" ></ion-icon>\n            </ion-col>\n            <ion-col col-6 style="text-align: center ">\n                <ion-icon name="thumbs-down"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card> \n\n      \n    <ion-card>\n        <ion-grid line>\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n            </ion-row>\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n            </ion-row>\n    \n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n              Let your customers know that you are listening. Tell them, "I hear what you are saying" and ask "Tell me more about that". This way you indicate that you are paying attention without agreeing or disagreeing with them.\n          </ion-row>\n          <ion-row  style="background-color: #f0f0f0">\n            <ion-col col-6 style="text-align: center ">\n                <ion-icon name="thumbs-up" ></ion-icon>\n            </ion-col>\n            <ion-col col-6 style="text-align: center ">\n                <ion-icon name="thumbs-down"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-coach\coach-coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachCoachPage);
    return CoachCoachPage;
}());

//# sourceMappingURL=coach-coach.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoachGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachGoalsPage = /** @class */ (function () {
    function CoachGoalsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachGoalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachGoalsPage');
    };
    CoachGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-goals',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-goals\coach-goals.html"*/'<!--\n  Generated template for the CoachGoalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>coach-goals</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n\n      \n    <ion-card>\n        <ion-grid line>\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n            </ion-row>\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n              <ion-col><h2><b>Goal: Bulk Transaction</b></h2></ion-col>\n            </ion-row>\n    \n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n              Record 15 transactions and get the ability to add miltiple products in one transaction entry!              \n          </ion-row>\n          <ion-row  style="background-color: #f0f0f0">\n            <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n                <b>Go</b>\n            </ion-col>\n \n          </ion-row>\n        </ion-grid>\n      </ion-card> \n\n      <ion-card>\n          <ion-grid line>\n              <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n                <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n                <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n              </ion-row>\n              <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n                <ion-col><h2><b>Goal: Record Discounts</b></h2></ion-col>\n              </ion-row>\n      \n            <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n                Record 25 transactions to add discounts to sales & expenses              \n            </ion-row>\n            <ion-row  style="background-color: #f0f0f0">\n              <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n                  <b>Go</b>\n              </ion-col>\n   \n            </ion-row>\n          </ion-grid>\n        </ion-card> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-goals\coach-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachGoalsPage);
    return CoachGoalsPage;
}());

//# sourceMappingURL=coach-goals.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CoachHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachHomePage = /** @class */ (function () {
    function CoachHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Goals = __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__["a" /* CoachGoalsPage */];
        this.Coach = __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__["a" /* CoachCoachPage */];
        this.Tips = __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */];
    }
    CoachHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachHomePage');
    };
    CoachHomePage.prototype.contactpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    CoachHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-home\coach-home.html"*/'<!--\n  Generated template for the CoachHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Coach</ion-title>\n      <ion-buttons end><button ion-button (click)="contactpg()" style="align-self: right; background-color:#222"><ion-icon name="contact" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n          </ion-navbar>\n  </ion-header>\n   \n\n<ion-content padding>\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n        <ion-tab [root]="Goals" tabTitle="Goals" tabIcon="paper-plane"></ion-tab>\n        <ion-tab [root]="Coach" tabTitle="Coach" tabIcon="school"></ion-tab>\n        <ion-tab [root]="Tips" tabTitle="Business Tips" tabIcon="cash"></ion-tab>\n        \n       </ion-tabs>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\coach-home\coach-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachHomePage);
    return CoachHomePage;
}());

//# sourceMappingURL=coach-home.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function (user) {
            console.log(user);
            _this.toastCtrl.create({
                message: "Welcome " + user.user.displayName,
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\login\login.html"*/'\n<ion-content padding>\n\n\n\n  <button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n\n\n  <ion-grid style="width: 75%;">\n\n    \n    <ion-row class="row-style">\n      \n      <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n      <ion-input type="email" placeholder="Email" [(ngModel)]="email" ></ion-input>\n    </ion-row>\n    <ion-row class="row-style">\n      <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="password" ></ion-input>\n    </ion-row>\n    <ion-row>\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">Login</button>\n    </ion-row>\n    <div class="btn_container">\n        <button ion-button full (click)="loginAction();">Login with Facebook</button>\n    </div>\n  \n  </ion-grid>\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="gotoSignUp()">Don\'t have an account? Sign Up</button> \n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.name = "";
        this.email = "";
        this.password = "";
        this.businessname = "";
        this.businessaddress = "";
        this.phno = "";
        this.language = "";
        this.currency = "";
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signup = function () {
        var _this = this;
        this.toastCtrl.create({
            message: "Please wait while your profile is being created..",
            duration: 3000
        }).present();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (data) {
            var newUser = data.user;
            newUser.updateProfile({
                displayName: _this.name,
            }).then(function (res) {
                console.log("Profile Updated");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").add({
                    // file_name: this.text,
                    created: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp(),
                    owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                    owner_name: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                    business_name: _this.businessname,
                    business_address: _this.businessaddress,
                    ph_no: _this.phno,
                    language: _this.language,
                    currency: _this.currency,
                    cash_balance: _this.cb,
                }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log(doc);
                        this.alertCtrl.create({
                            title: "Account Created",
                            message: "Your account has been created successfully.",
                            buttons: [{
                                    text: "OK",
                                    handler: function () {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]); //navigate to feeds page
                                    } //end handler
                                }] //end button
                        }).present();
                        return [2 /*return*/];
                    });
                }); }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 3000
                }).present();
            });
        });
    };
    SignUpPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar transparent>\n   <!--  <ion-title>\n     AdMonkey\n    </ion-title> -->\n \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n		<button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n<ion-grid style="width: 75%;">\n	<ion-row class="row-style1" justify-content-center align-items-center style="height: 100%"> Register a business</ion-row>\n	<ion-row class="row-style"> \n		<ion-icon name="person" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="text" placeholder="Name" [(ngModel)]="name"></ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="email" placeholder="Email" [(ngModel)]="email"> </ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="password" placeholder="Password"  [(ngModel)]="password"></ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="home" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="text" placeholder="Business Name"  [(ngModel)]="businessname"></ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="pin" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="text" placeholder="Business Address"  [(ngModel)]="businessaddress"></ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="call" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="text" placeholder="Phone Number"  [(ngModel)]="phno"></ion-input>\n	</ion-row>\n\n\n	<ion-row class="row-style">\n		<ion-icon name="chatboxes" color="semi-light" class="icon"></ion-icon>\n		<ion-label>Language</ion-label>\n		<ion-select [(ngModel)]="language">\n				<ion-option>English</ion-option>\n				<ion-option>Filipino</ion-option>\n				<ion-option>Burmese</ion-option>\n		</ion-select>\n		<!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n	</ion-row>\n\n	<ion-row class="row-style">\n			<ion-icon name="logo-usd" color="semi-light" class="icon"></ion-icon>\n			<ion-label>Currency</ion-label>\n			<ion-select [(ngModel)]="currency">\n					<ion-option>USD</ion-option>\n					<ion-option>PHP</ion-option>\n					<ion-option>MMK</ion-option>\n			</ion-select>\n			<!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n		</ion-row>\n\n	<ion-row class="row-style">\n		<ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="number" placeholder="Cash Balance"  [(ngModel)]="cb"></ion-input>\n	</ion-row>\n\n	<ion-row>\n		<button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signup()">SignUp</button>\n	</ion-row>\n</ion-grid>\n<button ion-button block clear color="light" style="margin-top: 10px;" (click)="goBack()">Already have an account? LOGIN</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the AllTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllTransactionPage = /** @class */ (function () {
    function AllTransactionPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.result = "";
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.itemsqty = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        this.userdata = { business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
        };
        this.getUserData();
    }
    AllTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllTransactionPage');
        console.log("Size of array: " + this.itemsprice.length);
        if (this.itemsprice.length > 0) {
            this.showSampleRec = false;
            this.flag_mode = 1;
        }
    };
    AllTransactionPage.prototype.ngOnInit = function () {
    };
    AllTransactionPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
            });
        });
    };
    AllTransactionPage.prototype.createRec = function () {
        //Nav to Rec Page
        //Build Expand Feature on REC Page
        //this.events.publish('genRec:created', this.itemsprice);
        //this.navCtrl.push(CalculatorPage);
        var _this = this;
        //(this.navCtrl.parent as Tabs).select(1);
        var myJsonString = JSON.stringify(this.itemsprice);
        var tempJSON = { "itemslist": [], };
        this.itemsprice.forEach(function (element, index) {
            tempJSON.itemslist.push({ 'name': "Blank_Item",
                'price': parseInt(element),
                'qty': _this.itemsqty[index],
            });
        });
        var sampledat = { 'itemslist': myJsonString, };
        var myObjStr = JSON.stringify(tempJSON);
        this.navCtrl.parent.select(2);
        this.delay(300).then(function (any) {
            _this.events.publish('genRec:created', myObjStr);
            console.log("Sent: " + myObjStr);
            //your task after delay.
        });
        this.result = "";
        this.itemsprice = [];
        this.lastsum = 0;
        this.itemsqty = [];
        //this.navCtrl.push(IncomeTransactionPage , myObjStr);
        //this.events.publish('genRec:created', myObjStr);
        //console.log("Sent1: "+ myObjStr);
    };
    AllTransactionPage.prototype.btnClicked = function (btn) {
        var _this = this;
        try {
            console.log('CalculatorPage::btnClicked = ' + btn);
            if (btn == "C") {
                this.result = "";
                this.itemsprice = [];
                this.lastsum = 0;
                this.itemsqty = [];
            }
            else if (btn == "=") {
                this.showSampleRec = true;
                //IF LAST = character then remove that character 
                var answ = this.result.split('+');
                var temp;
                answ.forEach(function (element, index) {
                    if (element.includes("*")) {
                        answ[index] = element.substring(0, element.indexOf("*"));
                        _this.itemsprice.push(answ[index]);
                        temp = parseInt(element.substring(element.indexOf("*") + 1));
                        console.log(element.substring(element.indexOf("*") + 1));
                        _this.itemsqty.push(temp);
                    }
                    else {
                        if (element != "") {
                            _this.itemsprice.push(element);
                            _this.itemsqty.push(parseInt("1"));
                        }
                    }
                    // this.itemsprice.push(
                    //   {'name': "Blank_Item",
                    //   'price': parseInt(element),
                    //   'qty': 0,
                    //   })      
                });
                //flag_mode=0 means normal (sample reciept is generated)
                //if(flag_mode==1) then go to reciept page directly - call createRec()
                //if(flag_mode=2) then just use as calc - no reciept is generated
                console.log(this.itemsprice);
                console.log(this.itemsqty);
                this.result = eval(this.result) + "";
                this.lastsum = 0;
                //this.lastsum=parseInt(this.result);
                for (var i = 0; i < this.itemsprice.length; i++) {
                    this.lastsum = this.lastsum + (parseInt(this.itemsprice[i]) * this.itemsqty[i]);
                    console.log(this.lastsum);
                }
            }
            else if (btn == "b") {
                this.result = this.result.substring(0, this.result.length - 1);
            }
            else if (btn == "squareroot") {
                this.result = Math.sqrt(eval(this.result)) + "";
            }
            else if (btn == "square") {
                this.result = eval("(" + this.result + ") * ( " + this.result + ")");
            }
            else if (btn == "reciproc") {
                this.result = eval(1 + "/ (" + this.result + ")");
            }
            else {
                if (parseInt(this.result) == this.lastsum) {
                    this.result = this.result.substring(0, 0);
                }
                console.log("Lastchar: " + this.lastchar + " Result: " + this.result);
                if ((btn == '+' || btn == '-' || btn == '*' || btn == '/') && (this.lastchar == '+' || this.lastchar == '-' || this.lastchar == '*' || this.lastchar == '/')) {
                    this.result = this.result = this.result.substring(0, this.result.length - 1);
                }
                this.lastchar = btn;
                this.result += btn;
            }
        }
        catch (err) {
            this.result = "Input Error!";
        }
        finally {
        }
    };
    AllTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\all-transaction\all-transaction.html"*/'<!--\n  Generated template for the AllTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n    <!-- <ion-fab bottom right>\n        <button ion-fab color="primary" item-right><ion-icon name="calculator"></ion-icon></button>\n      </ion-fab> -->\n      <ion-card *ngIf="showSampleRec==false">\n        Please type the amount for the item multiplied by its quantity and press equal to add to the existing bill.\n\n        To add multiple blank items enter each price*qty and press the + sign to enter the next item\n      </ion-card>\n      \n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n          <div class="calculator">\n            <div class="header">\n              <div class="window"></div>\n              <div class="input">\n                <ion-row>\n                  <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result">\n                  </ion-input>\n                  <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n                  \n                </ion-row> \n               \n                    \n                \n              </div>\n             \n              \n            </div>\n            <div class="keys">\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'7\')">7</span>\n                  <span (click)="btnClicked(\'8\')">8</span>\n                  <span (click)="btnClicked(\'9\')">9</span>\n                </div>\n                <div class="symbol">\n                  <span (click)="btnClicked(\'*\')">×</span>\n\n                </div>\n              </div>\n\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'4\')">4</span>\n                  <span (click)="btnClicked(\'5\')">5</span>\n                  <span (click)="btnClicked(\'6\')">6</span>\n                </div>\n\n                <div class="symbol">\n                  <span (click)="btnClicked(\'+\')">+</span>\n           </div>\n              </div>\n\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'1\')">1</span>\n                  <span (click)="btnClicked(\'2\')">2</span>\n                  <span (click)="btnClicked(\'3\')">3</span>\n                </div>\n\n                <div class="symbol">\n                  <span (click)="btnClicked(\'/\')">÷</span>\n                  <span (click)="btnClicked(\'squareroot\')">√x</span>\n                </div>\n\n\n              </div>\n\n\n              <div class="row">\n                <div class="number">\n                  <span class=dull (click)="btnClicked(\'C\')">C</span>\n                  <span (click)="btnClicked(\'0\')">0</span>\n                  <span (click)="btnClicked(\'-\')">-</span>\n\n\n\n                </div>\n\n                <div class="symbol action">\n                  <span (click)="btnClicked(\'=\')">=</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n    \n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n\n        <ion-card *ngIf="showSampleRec==true">\n\n       \n\n           \n\n                <ion-grid>\n          \n                  <ion-row> <ion-col style="text-align: center; padding-top: 5px;">{{userdata.business_name}} </ion-col> </ion-row>\n          \n                  <ion-row>\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata.business_address}}</ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> Ph: {{userdata.ph_no}}</ion-col>\n                  </ion-row>\n          \n                  <ion-row style="padding-top: 5px;">\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>Sl</b></ion-col>\n                      <ion-col col-4 style="color: black; font-size: 10px; text-align: center"><b>Item</b></ion-col>\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>Price</b></ion-col>\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>Qty</b></ion-col>\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n                  </ion-row>\n          \n                 \n          \n                  <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n          \n              \n                    <ion-row>\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center">{{i+1}}.</ion-col>\n                        <ion-col col-4 style="color: black; font-size: 10px; text-align: center">\n                         Item {{i+1}}</ion-col>   \n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{item}}</ion-col>\n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{itemsqty[i]}}</ion-col>\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n                    </ion-row>\n                \n          \n                  </ion-list>\n          \n                  <ion-row padding>\n                      <ion-col col-1></ion-col>  \n                    <ion-col col-4 style="text-align: center;font-size: 10px;"><b>Total</b> </ion-col>\n                      <ion-col col-2 style="text-align: center;font-size: 10px;"><b>{{lastsum}}</b> </ion-col>\n                      <ion-col col-5></ion-col>\n                    </ion-row>\n          \n          \n                   \n          \n          \n                </ion-grid>\n          \n          \n          \n\n        </ion-card>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n  </ion-grid>\n\n\n\n  <!-- Dynamically Generate All transactions from backend - see feed from prev -->\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <button ion-button (click)="createRec()" full style="background-color: #222">Generate Receipt</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n</ion-footer>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\all-transaction\all-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AllTransactionPage);
    return AllTransactionPage;
}());

//# sourceMappingURL=all-transaction.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomeTransactionPage = /** @class */ (function () {
    function IncomeTransactionPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.userdata = { business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
        };
        this.result = "";
        this.displayManual = 0;
        this.datastore = { 'itemslist': [] };
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        //console.log("Recieved -1" + this.navParams.get('itemslist'));
        this.getUserData();
    }
    IncomeTransactionPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomeTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomeTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IncomeTransactionPage');
        this.events.subscribe('genRec:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            var JSONitems = JSON.parse(data);
            _this.datastore = JSONitems;
            _this.lastsum = 0;
            for (var i = 0; i < _this.datastore.itemslist.length; i++) {
                _this.lastsum = _this.lastsum + (_this.datastore.itemslist[i].price * _this.datastore.itemslist[i].qty);
                console.log(_this.lastsum);
            }
        });
    };
    IncomeTransactionPage.prototype.dispM = function () {
        console.log("DisM = " + this.displayManual);
        if (this.displayManual == 0) {
            this.displayManual = 1;
        }
        else {
            this.displayManual = 0;
        }
    };
    IncomeTransactionPage.prototype.ngOnInit = function () {
        //this.itemsprice=JSON.parse(this.dataparm);
    };
    IncomeTransactionPage.prototype.createRec = function () {
        //Nav to Rec Page
        //Build Expand Feature on REC Page
    };
    IncomeTransactionPage.prototype.removeItem = function (index) {
        //this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);
        var rem = this.datastore.itemslist.splice(index, 1);
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
        console.log("I: " + index);
        console.log(this.datastore.itemslist[index]);
    };
    IncomeTransactionPage.prototype.addQty = function (index) {
        //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty + 1;
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
    };
    IncomeTransactionPage.prototype.removeQty = function (index) {
        //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty - 1;
        if (this.datastore.itemslist[index].qty == 0) {
            this.removeItem(index);
        }
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
    };
    IncomeTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-income-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\income-transaction\income-transaction.html"*/'<!--\n  Generated template for the IncomeTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n\n    <ion-card >\n\n      <ion-grid>\n\n        <ion-row> <ion-col style="text-align: center; padding-top: 5px;"> {{userdata.business_name}}  </ion-col> </ion-row>\n\n        <ion-row>\n            <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata.business_address}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12 style="color: grey; font-size: 10px; text-align: center">  Ph: {{userdata.ph_no}}</ion-col>\n        </ion-row>\n\n        <ion-row style="padding-top: 5px;">\n            <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>Sl</b></ion-col>\n            <ion-col col-4 style="color: black; font-size: 10px; text-align: center"><b>Item</b></ion-col>\n            <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>Price</b></ion-col>\n            <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>Qty</b></ion-col>\n            <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n            <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n            <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n        </ion-row>\n\n       \n\n        <ion-list *ngFor="let item of datastore.itemslist; let i = index" no-lines>\n\n    \n          <ion-row>\n              <ion-col col-1 style="color: black; font-size: 10px; text-align: center">{{i+1}}.</ion-col>\n              <ion-col col-4 style="color: black; font-size: 10px; text-align: center">\n                <div *ngIf="item.name==\'Blank_Item\'; else itemexist">\n                  <button ion-button full style="font-size: 10px; height: 15px;">Add</button>\n                </div>\n                <ng-template #itemexist>{{item.name}}</ng-template>\n              </ion-col>\n              <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{item.price}}</ion-col>\n              <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{item.qty}}</ion-col>\n              <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green" (click)="addQty(i)"></ion-icon></ion-col>\n              <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="removeQty(i)"></ion-icon></ion-col>\n              <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red" (click)="removeItem(i)"></ion-icon></ion-col>\n\n          </ion-row>\n      \n\n        </ion-list>\n\n        <ion-row padding>\n            <ion-col col-1></ion-col>  \n          <ion-col col-4 style="text-align: center;font-size: 10px;"><b>Total:</b> </ion-col>\n            <ion-col col-2 style="text-align: center;font-size: 10px;"><b>{{lastsum}}</b> </ion-col>\n            <ion-col col-5></ion-col>\n          </ion-row>\n\n\n         \n\n\n      </ion-grid>\n\n\n      </ion-card>\n  <!-- Dynamically Generate All expense from backend - see feed from prev -->\n\n  <ion-card padding>\n   \n          <ion-item>\n          <span style="vertical-align: middle; display: inline-block; color: black; font-size: 14px;" item-start>\n              Add Item Manually\n            </span>\n             <ion-toggle color="dark" style="vertical-align: middle; display: inline-block" item-end (ionChange)="dispM()"></ion-toggle>\n          \n        </ion-item>\n          \n\n     \n     \n       <div *ngIf="displayManual==1;">\n     \n        <ion-item>\n            <ion-label style="font-size: 1.0rem;">Item Name</ion-label>\n            <ion-input placeholder="Enter Item Name" style="font-size: 1.0rem;"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label style="font-size: 1.0rem;">Unit Price</ion-label>\n              <ion-input  placeholder="Enter Unit Price" style="font-size: 1.0rem;"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label style="font-size: 1.0rem;">Qty</ion-label>\n                <ion-input  placeholder="Enter Quantity" style="font-size: 1.0rem;"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label style="font-size: 1.0rem;">Select Category</ion-label>\n                  <ion-select multiple="false" style="font-size: 1.0rem;">\n                      <ion-option>Snacks</ion-option>\n                      <ion-option>Drinks</ion-option>\n                      <ion-option>Noodles</ion-option>\n                      <!-- New Category Option -->\n                  </ion-select>\n                </ion-item>\n                <button ion-button style="font-size: 10px;" full> Add Manual</button>\n              </div>\n  </ion-card>\n  <ion-grid>\n      <ion-row>\n         \n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 10px;"> Add from Calc</button></ion-col>\n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 10px;"> Add from List</button></ion-col>\n        \n\n   \n        </ion-row>\n      \n  </ion-grid>\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button full color="dark"> <ion-icon name="checkmark"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button full color="dark"> <ion-icon name="print"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n              <button ion-button full color="dark">  <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\income-transaction\income-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], IncomeTransactionPage);
    return IncomeTransactionPage;
}());

//# sourceMappingURL=income-transaction.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TransactionProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionProductPage = /** @class */ (function () {
    function TransactionProductPage(navCtrl, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.searchterm = "";
        this.selectedCat = [];
        this.listArray = [];
        this.events.subscribe('prodAdd:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            _this.getProducts();
        });
        this.ionViewDidLoad();
        this.getCategories();
    }
    TransactionProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionProductPage');
        this.getProducts();
    };
    TransactionProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    // backBtn(){
    //     //Hide back btn if src is tab
    //     this.navCtrl.pop();
    // }
    TransactionProductPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
                console.log(_this.listProducts);
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    // singleProduct(data){
    //   this.navCtrl.setRoot(SingleProductPage, {'data': data});
    // }
    TransactionProductPage.prototype.filteredProduct = function () {
        var _this = this;
        this.filteredList = this.listProducts.filter(function (item) {
            //console.log(this.searchterm);
            console.log(item);
            if (item.name.toLowerCase().includes(_this.searchterm.toLowerCase())) {
                if (_this.selectedCat.length > 0) {
                    for (var i = 0; i < _this.selectedCat.length; i++) {
                        if (_this.selectedCat == null || item.cat.includes(_this.selectedCat[i])) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        });
        //console.log("FilteredProd: "+this.filteredList)
    };
    TransactionProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-product\transaction-product.html"*/'<!--\n  Generated template for the TransactionProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>transaction-product</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n  \n  <!-- <ion-item>\n      <ion-label>Categories</ion-label>\n      <ion-select [(ngModel)]="cat" multiple="true">\n        <ion-option>Noodle</ion-option>\n        <ion-option>Snack</ion-option>\n        <ion-option>Main Course</ion-option>\n        <ion-option>Dessert</ion-option>\n        <ion-option>Drinks</ion-option>\n      </ion-select>\n    </ion-item> -->\n  \n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n      </ion-select>\n    </ion-item>\n  \n  \n  <!-- <ion-card>\n      <ion-grid line>\n        <ion-row>\n        <ion-col col-2>\n          <ion-row>\n            <ion-avatar>\n                <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n              </ion-avatar>\n            </ion-row>\n        </ion-col>\n        <ion-col col-10>\n            <ion-row>\n                <ion-col col-7>\n                  Shan Noodle\n                </ion-col>\n                <ion-col col-3>\n                  568 - N/A?\n                  </ion-col>\n                  <ion-col col-1>\n                      <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1>\n                      <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n                <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6></ion-col>\n                <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n              </ion-row>\n  \n        </ion-col>\n      </ion-row>\n      </ion-grid>\n    </ion-card>  -->\n  \n  \n  \n    <ion-list inset  *ngFor="let product of filteredList">\n      \n        <ion-card>\n            <ion-grid> \n              <ion-row>\n              <ion-col col-2>\n                <ion-row> \n                  <ion-avatar>\n                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\n                    </ion-avatar>\n                  </ion-row>\n              </ion-col>\n              <ion-col col-10>\n                  <ion-row>\n                      <ion-col col-6>\n                          {{product.name}} \n                      </ion-col>\n                      <ion-col col-2>\n                        {{0}}\n                      </ion-col>\n                        <ion-col col-2>\n                            <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="addUp(product.code)"></ion-icon>\n                        </ion-col>\n                        <ion-col col-2>\n                            <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="addDown(product.code)"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-6 style="color: grey; font-size: 10px;"> Price {{product.price}} MMK </ion-col>\n                      <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: {{product.cat}} </ion-col>\n                    </ion-row>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n              <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">Add</button> </ion-col>\n            </ion-row> -->\n            </ion-grid>\n          </ion-card> \n       \n      </ion-list>\n    \n  \n    \n  \n  \n  \n  \n  </ion-content>\n  \n  \n<ion-footer>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <button ion-button (click)="createRec()" full style="background-color: #222">Generate Receipt</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-product\transaction-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TransactionProductPage);
    return TransactionProductPage;
}());

//# sourceMappingURL=transaction-product.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryHomePage = /** @class */ (function () {
    function SummaryHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SummaryHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SummaryHomePage');
    };
    SummaryHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\summary-home\summary-home.html"*/'<!--\n  Generated template for the SummaryHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> Business Summary </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\summary-home\summary-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SummaryHomePage);
    return SummaryHomePage;
}());

//# sourceMappingURL=summary-home.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product-category/add-product-category.module": [
		308,
		15
	],
	"../pages/all-transaction/all-transaction.module": [
		322,
		14
	],
	"../pages/calculator/calculator.module": [
		309,
		13
	],
	"../pages/coach-businesstips/coach-businesstips.module": [
		310,
		12
	],
	"../pages/coach-coach/coach-coach.module": [
		311,
		11
	],
	"../pages/coach-goals/coach-goals.module": [
		312,
		10
	],
	"../pages/coach-home/coach-home.module": [
		313,
		9
	],
	"../pages/contact-us/contact-us.module": [
		315,
		8
	],
	"../pages/expense-transaction/expense-transaction.module": [
		314,
		7
	],
	"../pages/income-transaction/income-transaction.module": [
		323,
		6
	],
	"../pages/login/login.module": [
		316,
		5
	],
	"../pages/product-list/product-list.module": [
		317,
		4
	],
	"../pages/sign-up/sign-up.module": [
		318,
		3
	],
	"../pages/summary-home/summary-home.module": [
		319,
		2
	],
	"../pages/transaction-home/transaction-home.module": [
		320,
		1
	],
	"../pages/transaction-product/transaction-product.module": [
		321,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductPage = /** @class */ (function () {
    function AddProductPage(navCtrl, barcodeScanner, navParams, sp, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodCost = 0;
        this.prodCat = "";
        this.newprodCat = "";
        this.prodCode = this.navParams.get("code");
    }
    AddProductPage_1 = AddProductPage;
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    AddProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    AddProductPage.prototype.addCategory = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Added new Category',
                        duration: 3000
                    });
                    _this.newprodCat = "";
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    AddProductPage.prototype.addProdPic = function () {
    };
    AddProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            //this.prodCode = barcodeData.text;
            _this.navCtrl.setRoot(AddProductPage_1, { code: barcodeData.text });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AddProductPage.prototype.addproduct = function () {
        var _this = this;
        if (this.newprodCat != "") {
            this.addCategory();
            this.prodCat = this.newprodCat;
        }
        var data = {
            "code": this.prodCode,
            "name": this.prodName,
            "price": this.prodPrice,
            "cost": this.prodCost,
            "cat": this.prodCat,
        };
        console.log(data);
        this.sp.storageReady().then(function () {
            _this.sp.addProduct(data);
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Added new Product',
                    duration: 3000
                });
                _this.prodCode = "";
                _this.prodName = "";
                _this.prodPrice = 0;
                _this.prodCat = "";
                _this.prodCost = 0;
                //this.navCtrl.push(ProductListPage);
                _this.events.publish('prodAdd:created', 0);
                _this.navCtrl.parent.select(0);
                toast.present();
            }, 1000);
        });
    };
    AddProductPage = AddProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\addproduct\addproduct.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n    <ion-item>\n        <b>Enter Details of New Product:</b>\n    </ion-item>\n  \n  <ion-list inset>\n      <!-- <button ion-button full color="dark" (click)="getProdPic()">Upload Picture</button> -->\n\n  \n\n    <ion-item>\n      <ion-label>Code:</ion-label>\n      <ion-input type="text" [(ngModel)]=\'prodCode\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Name:</ion-label>\n      <ion-input type="text" [(ngModel)]=\'prodName\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sell Price:</ion-label>\n      <ion-input type="number" [(ngModel)]=\'prodPrice\'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Cost Price: </ion-label>\n        <ion-input type="number" [(ngModel)]=\'prodCost\'></ion-input>\n    </ion-item>\n    <ion-item>\n\n        <ion-label>Select Category</ion-label>\n        <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n\n            <!-- <ion-option>New</ion-option> -->\n            <ion-option>New</ion-option>\n            <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n          \n      </ion-select>\n\n      <!-- <ion-label>Select Category</ion-label>\n      <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n            <ion-option>New</ion-option>\n            <ion-option>Snacks</ion-option>\n            <ion-option>Drinks</ion-option>\n            <ion-option>Noodles</ion-option>\n      </ion-select> -->\n    </ion-item>\n\n    \n\n\n        <ion-item *ngIf="prodCat==\'New\'">\n          <ion-label >Enter New Category:</ion-label>\n          <ion-input type="text" placeholder="Enter Category Here"  [(ngModel)]=\'newprodCat\'></ion-input>\n        </ion-item>\n        \n  \n    <!-- <ion-item>\n      \n        <ion-label>Category</ion-label>\n        <ion-input type="text" [(ngModel)]=\'prodCat\'></ion-input>\n        \n      </ion-item> -->\n    \n  \n  </ion-list>\n  <button ion-button block color="primary" (click)="addproduct()"  color="dark">Add Product</button>\n  <button ion-button block color="primary" (click)="scanQR()"  color="dark">Scan Code</button>\n\n  <ion-card>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\addproduct\addproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AddProductPage);
    return AddProductPage;
    var AddProductPage_1;
}());

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, sp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.ionViewDidLoad();
    }
    ListPage.prototype.ionViewDidLoad = function () {
        this.getProducts();
    };
    ListPage.prototype.backBtn = function () {
        //Hide back btn if src is tab
        this.navCtrl.pop();
    };
    ListPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
                //alert(val);
                _this.listProducts = JSON.parse(val);
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ListPage.prototype.singleProduct = function (data) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { 'data': data });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\list\list.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product List</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-list inset>\n    <ion-item *ngFor="let product of listProducts">\n      <h2>{{product.name}}</h2>\n      <p>Price: {{product.price}} USD</p>\n      <button ion-button clear item-end (click)="singleProduct(product)">View</button>\n\n    </ion-item>\n  </ion-list>\n  <button ion-button clear item-end (click)="backBtn()">Back</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettersetterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GettersetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GettersetterProvider = /** @class */ (function () {
    function GettersetterProvider() {
        this.total = 0;
        this.count = 0;
        this.vat = 0;
    }
    GettersetterProvider.prototype.getTotal = function () {
        return this.total;
    };
    GettersetterProvider.prototype.setTotal = function (total) {
        this.total = total;
    };
    GettersetterProvider.prototype.getCount = function () {
        return this.count;
    };
    GettersetterProvider.prototype.setCount = function (count) {
        this.count = count;
    };
    GettersetterProvider.prototype.getVat = function () {
        return this.vat;
    };
    GettersetterProvider.prototype.setVat = function (vat) {
        this.vat = vat;
    };
    GettersetterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GettersetterProvider);
    return GettersetterProvider;
}());

//# sourceMappingURL=gettersetter.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalculatorPage = /** @class */ (function () {
    function CalculatorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.result = "";
    }
    CalculatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculatorPage');
    };
    CalculatorPage.prototype.ngOnInit = function () {
    };
    CalculatorPage.prototype.btnClicked = function (btn) {
        console.log('CalculatorPage::btnClicked = ' + btn);
        if (btn == "C") {
            this.result = "";
        }
        else if (btn == "=") {
            this.result = eval(this.result);
        }
        else if (btn == "squareroot") {
            this.result = Math.sqrt(eval(this.result)) + "";
        }
        else if (btn == "square") {
            this.result = eval("(" + this.result + ") * ( " + this.result + ")");
        }
        else if (btn == "reciproc") {
            this.result = eval(1 + "/ (" + this.result + ")");
        }
        else {
            this.result += btn;
        }
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\calculator\calculator.html"*/'<!--\n  Generated template for the CalculatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>calculator-page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n\n -->\n\n<ion-header>\n    <ion-navbar>\n\n    <ion-buttons slot="start">\n    </ion-buttons>\n    <ion-title>Calculator</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="calculator">\n    <div class="header">\n      <div class="window"></div>\n      <div class="input"><span>\n          <ion-input type="text" placeholder="0" name="display"\n                     [(ngModel)]="result">\n          </ion-input>\n        </span></div>\n    </div>\n    <div class="keys">\n      <div class="row">\n        <div class="number">\n          <span (click)="btnClicked(\'7\')">7</span>\n          <span (click)="btnClicked(\'8\')">8</span>\n          <span (click)="btnClicked(\'9\')">9</span>\n        </div>\n        <div class="symbol">\n          <span (click)="btnClicked(\'*\')">×</span>\n          \n      </div>\n      </div>\n\n      <div class="row">\n        <div class="number">\n          <span (click)="btnClicked(\'4\')">4</span>\n          <span (click)="btnClicked(\'5\')">5</span>\n          <span (click)="btnClicked(\'6\')">6</span>\n        </div>\n\n        <div class="symbol">\n        <span (click)="btnClicked(\'+\')">+</span>\n        <span (click)="btnClicked(\'-\')">-</span></div>\n      </div>\n\n      <div class="row">\n        <div class="number">\n          <span (click)="btnClicked(\'1\')">1</span>\n          <span (click)="btnClicked(\'2\')">2</span>\n          <span (click)="btnClicked(\'3\')">3</span>\n        </div>\n\n        <div class="symbol">\n            <span (click)="btnClicked(\'/\')">÷</span>\n          <span (click)="btnClicked(\'squareroot\')">√x</span>\n        </div>\n\n        \n      </div>\n\n      \n      <div class="row">\n        <div class="number">\n          <span class=dull (click)="btnClicked(\'C\')">C</span>\n          <span (click)="btnClicked(\'0\')">0</span>\n          <span (click)="btnClicked(\'-\')">-</span>\n\n\n          \n        </div>\n               \n        <div class="symbol action">\n            <span (click)="btnClicked(\'=\')">=</span>\n        </div>\n      \n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\calculator\calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalculatorPage);
    return CalculatorPage;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExpenseTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpenseTransactionPage = /** @class */ (function () {
    function ExpenseTransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExpenseTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpenseTransactionPage');
    };
    ExpenseTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expense-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\expense-transaction\expense-transaction.html"*/'<!--\n  Generated template for the ExpenseTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n\n Product List\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\expense-transaction\expense-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ExpenseTransactionPage);
    return ExpenseTransactionPage;
}());

//# sourceMappingURL=expense-transaction.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_transaction_home_transaction_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_all_transaction_all_transaction__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_expense_transaction_expense_transaction__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_income_transaction_income_transaction__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calculator_calculator__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_summary_home_summary_home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_coach_home_coach_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_coach_goals_coach_goals__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach_coach_coach__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_coach_businesstips_coach_businesstips__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contact_us_contact_us__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_transaction_product_transaction_product__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_product_list_product_list__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_add_product_category_add_product_category__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var config = {
    apiKey: "AIzaSyADjIbI3_GRS4eRHGVGFsT2hrkKvH9K06M",
    authDomain: "trialapp-1cb3d.firebaseapp.com",
    databaseURL: "https://trialapp-1cb3d.firebaseio.com",
    projectId: "trialapp-1cb3d",
    storageBucket: "trialapp-1cb3d.appspot.com",
    messagingSenderId: "591467524421"
};
__WEBPACK_IMPORTED_MODULE_16_firebase__["initializeApp"](config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_all_transaction_all_transaction__["a" /* AllTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_expense_transaction_expense_transaction__["a" /* ExpenseTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_income_transaction_income_transaction__["a" /* IncomeTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_summary_home_summary_home__["a" /* SummaryHomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_coach_home_coach_home__["a" /* CoachHomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_coach_goals_coach_goals__["a" /* CoachGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach_coach_coach__["a" /* CoachCoachPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_transaction_product_transaction_product__["a" /* TransactionProductPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_add_product_category_add_product_category__["a" /* AddProductCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-product-category/add-product-category.module#AddProductCategoryPageModule', name: 'AddProductCategoryPage', segment: 'add-product-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculator/calculator.module#CalculatorPageModule', name: 'CalculatorPage', segment: 'calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-businesstips/coach-businesstips.module#CoachBusinesstipsPageModule', name: 'CoachBusinesstipsPage', segment: 'coach-businesstips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-coach/coach-coach.module#CoachCoachPageModule', name: 'CoachCoachPage', segment: 'coach-coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-goals/coach-goals.module#CoachGoalsPageModule', name: 'CoachGoalsPage', segment: 'coach-goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-home/coach-home.module#CoachHomePageModule', name: 'CoachHomePage', segment: 'coach-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-transaction/expense-transaction.module#ExpenseTransactionPageModule', name: 'ExpenseTransactionPage', segment: 'expense-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-home/summary-home.module#SummaryHomePageModule', name: 'SummaryHomePage', segment: 'summary-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-home/transaction-home.module#TransactionHomePageModule', name: 'TransactionHomePage', segment: 'transaction-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-product/transaction-product.module#TransactionProductPageModule', name: 'TransactionProductPage', segment: 'transaction-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-transaction/all-transaction.module#AllTransactionPageModule', name: 'AllTransactionPage', segment: 'all-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income-transaction/income-transaction.module#IncomeTransactionPageModule', name: 'IncomeTransactionPage', segment: 'income-transaction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_expense_transaction_expense_transaction__["a" /* ExpenseTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_income_transaction_income_transaction__["a" /* IncomeTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_all_transaction_all_transaction__["a" /* AllTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_coach_home_coach_home__["a" /* CoachHomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_summary_home_summary_home__["a" /* SummaryHomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_coach_goals_coach_goals__["a" /* CoachGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach_coach_coach__["a" /* CoachCoachPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_transaction_product_transaction_product__["a" /* TransactionProductPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_add_product_category_add_product_category__["a" /* AddProductCategoryPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        //
        this.products = [];
        this.categories = [];
    }
    Object.defineProperty(StorageProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]]];
        },
        enumerable: true,
        configurable: true
    });
    StorageProvider.prototype.addCategory = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('categories').then(function (val) {
                if (val === null) {
                    _this.storage.set('categories', "[]").then(function () {
                        _this.storage.get('categories').then(function (valNull) {
                            _this.categories = JSON.parse(valNull);
                            _this.categories.push(data);
                            _this.storage.set('categories', JSON.stringify(_this.categories));
                        });
                    });
                }
                else {
                    _this.categories = JSON.parse(val);
                    _this.categories.push(data);
                    _this.storage.set('categories', JSON.stringify(_this.categories));
                }
                //this.products = JSON.stringify(this.products)
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.addProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('products').then(function (val) {
                if (val === null) {
                    _this.storage.set('products', "[]").then(function () {
                        _this.storage.get('products').then(function (valNull) {
                            _this.products = JSON.parse(valNull);
                            _this.products.push(data);
                            _this.storage.set('products', JSON.stringify(_this.products));
                        });
                    });
                }
                else {
                    _this.products = JSON.parse(val);
                    _this.products.push(data);
                    _this.storage.set('products', JSON.stringify(_this.products));
                }
                //this.products = JSON.stringify(this.products)
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getProducts = function () {
        return this.storage.get('products');
    };
    StorageProvider.prototype.getCategories = function () {
        return this.storage.get('categories');
    };
    StorageProvider.prototype.searchProduct = function (barcode) {
        var _this = this;
        var needle = null;
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage.get('products').then(function (val) {
                    if (val != null) {
                        _this.products = JSON.parse(val);
                        needle = _this.products.filter(function (product) {
                            return (product.code === barcode);
                        });
                    }
                    resolve(needle);
                }).catch(function (err) {
                    alert(err + 1);
                });
            });
        });
    };
    StorageProvider.prototype.updateProduct = function (data, old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    except = _this.products.filter(function (product) {
                        return (product.code != old_code);
                    });
                    except.push(data);
                    _this.storage.set('products', JSON.stringify(except));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.swapProductUp = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    for (var i = 0; i < _this.products.length; i++) {
                        if (_this.products[i].code == old_code && i != 0) {
                            var temp = _this.products[i];
                            _this.products[i] = _this.products[i - 1];
                            _this.products[i - 1] = temp;
                        }
                    }
                    //except.push(data);
                    _this.storage.set('products', JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.swapProductDown = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    for (var i = 0; i < _this.products.length; i++) {
                        if (_this.products[i].code == old_code && i < (_this.products.length - 1)) {
                            var temp = _this.products[i];
                            _this.products[i] = _this.products[i + 1];
                            _this.products[i + 1] = temp;
                        }
                    }
                    //except.push(data);
                    _this.storage.set('products', JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.deleteProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('products').then(function (val) {
                _this.products = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.products;
                arr2 = arr.filter(function (val) {
                    return (val.code != data.code && val.name != data.name);
                });
                _this.storage.set('products', JSON.stringify(arr2));
            }).catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.deleteCategory = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('categories').then(function (val) {
                _this.categories = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.categories;
                arr2 = arr.filter(function (val) {
                    return (val.name != data.name);
                });
                _this.storage.set('categories', JSON.stringify(arr2));
            }).catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.storageReady = function () {
        return this.storage.ready();
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_coach_home_coach_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Income', component: __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */] },
            { title: 'Business', component: __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__["a" /* SummaryHomePage */] },
            { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Coach', component: __WEBPACK_IMPORTED_MODULE_9__pages_coach_home_coach_home__["a" /* CoachHomePage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
        ];
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut().then(function () {
            _this.toastCtrl.create({
                message: "You have been logged out",
                duration: 3000
            }).present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logout()" >\n        Logout \n      </button>\n      \n       \n      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\contact-us\contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Contact Us</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n<h1>Contact an EC Coach</h1>\nDo you have a question about how to use the app? Want to discuss a business tip? Contact an EC coach! Send us a message via whatsapp/messanger or email and we will get back to you as soon as possible.\n\n<br><br>\n\n<ion-grid>\n\n  \n\n\n    <ion-row  style="background-color: #f0f0f0">\n        <ion-col col-12>\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred;">\n              +65 8871648904\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred; text-transform:lowercase">\n              coach@easycreditapp.com\n            </button>\n        </ion-col>\n\n      </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.searchterm = "";
        this.selectedCat = [];
        this.listArray = [];
        this.events.subscribe('prodAdd:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            _this.getProducts();
        });
        this.ionViewDidLoad();
        this.getCategories();
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getProducts();
    };
    ProductListPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ProductListPage.prototype.backBtn = function () {
        //Hide back btn if src is tab
        this.navCtrl.pop();
    };
    ProductListPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ProductListPage.prototype.singleProduct = function (data) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { 'data': data });
    };
    ProductListPage.prototype.filteredProduct = function () {
        var _this = this;
        this.filteredList = this.listProducts.filter(function (item) {
            //console.log(this.searchterm);
            console.log(item);
            if (item.name.toLowerCase().includes(_this.searchterm.toLowerCase())) {
                if (_this.selectedCat.length > 0) {
                    for (var i = 0; i < _this.selectedCat.length; i++) {
                        if (_this.selectedCat == null || item.cat.includes(_this.selectedCat[i])) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        });
        //console.log("FilteredProd: "+this.filteredList)
    };
    ProductListPage.prototype.swapUp = function (prodCodeOld) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.swapProductUp(prodCodeOld).then(function () {
                _this.getProducts();
            });
        });
    };
    ProductListPage.prototype.swapDown = function (prodCodeOld) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.swapProductDown(prodCodeOld).then(function () {
                _this.getProducts();
            });
        });
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\product-list\product-list.html"*/'<!--\n  Generated template for the ProductListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>product-list</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content padding>\n<ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n<!-- <ion-item>\n    <ion-label>Categories</ion-label>\n    <ion-select [(ngModel)]="cat" multiple="true">\n      <ion-option>Noodle</ion-option>\n      <ion-option>Snack</ion-option>\n      <ion-option>Main Course</ion-option>\n      <ion-option>Dessert</ion-option>\n      <ion-option>Drinks</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label>Select Category</ion-label>\n    <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n        <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n    </ion-select>\n  </ion-item>\n\n\n<!-- <ion-card>\n    <ion-grid line>\n      <ion-row>\n      <ion-col col-2>\n        <ion-row>\n          <ion-avatar>\n              <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n            </ion-avatar>\n          </ion-row>\n      </ion-col>\n      <ion-col col-10>\n          <ion-row>\n              <ion-col col-7>\n                Shan Noodle\n              </ion-col>\n              <ion-col col-3>\n                568 - N/A?\n                </ion-col>\n                <ion-col col-1>\n                    <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n                </ion-col>\n                <ion-col col-1>\n                    <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n              <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6></ion-col>\n              <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n            </ion-row>\n\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-card>  -->\n\n\n\n  <ion-list inset  *ngFor="let product of filteredList">\n    \n      <ion-card>\n          <ion-grid> \n            <ion-row>\n            <ion-col col-2>\n              <ion-row> \n                <ion-avatar>\n                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\n                  </ion-avatar>\n                </ion-row>\n            </ion-col>\n            <ion-col col-10>\n                <ion-row>\n                    <ion-col col-8>\n                        {{product.name}}\n                    </ion-col>\n                      <ion-col col-2>\n                          <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="swapUp(product.code)"></ion-icon>\n                      </ion-col>\n                      <ion-col col-2>\n                          <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="swapDown(product.code)"></ion-icon>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6 style="color: grey; font-size: 10px;"> Price {{product.price}} MMK </ion-col>\n                    <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: {{product.cat}} </ion-col>\n                  </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">View/Edit</button> </ion-col>\n          </ion-row>\n          </ion-grid>\n        </ion-card> \n     \n    </ion-list>\n  \n\n  \n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionHomePage = /** @class */ (function () {
    //Calculator = CalculatorPage;
    //@ViewChild('transactionTabs') tabRef: Tabs;
    function TransactionHomePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AllTransactions = __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__["a" /* AllTransactionPage */];
        this.IncomeTransactions = __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__["a" /* IncomeTransactionPage */];
        //ExpenseTransactions = ExpenseTransactionPage;
        this.ExpenseTransactions = __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__["a" /* TransactionProductPage */];
        this.getUserData();
    }
    TransactionHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionHomePage');
    };
    TransactionHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionHomePage.prototype.openCalc = function () {
        //this.navCtrl.push(CalculatorPage);
        this.tabRef.select(3);
    };
    TransactionHomePage.prototype.uploadbtn = function () {
        this.toastCtrl.create({
            message: "Online back-up completed!",
            duration: 2000
        }).present();
    };
    TransactionHomePage.prototype.cashbtn = function () {
        this.toastCtrl.create({
            message: "Cash Balance: " + this.userdata.cash_balance,
            duration: 3000
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */])
    ], TransactionHomePage.prototype, "tabRef", void 0);
    TransactionHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-home\transaction-home.html"*/'<!--\n  Generated template for the TransactionHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Income</ion-title>\n    <ion-buttons end><button ion-button (click)="uploadbtn()"><ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n    <ion-buttons end><button ion-button (click)="cashbtn()"><ion-icon name="logo-usd" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n \n  \n<ion-content padding>\n  \n  <ion-tabs tabsPlacement="top" #myTabs>\n    <ion-tab [root]="AllTransactions" tabTitle="Calculator" tabIcon="calculator"></ion-tab>\n    <ion-tab [root]="ExpenseTransactions" tabTitle="Products" tabIcon="apps"></ion-tab>\n    <ion-tab [root]="IncomeTransactions" tabTitle="Receipt" tabIcon="list-box"></ion-tab>\n\n   </ion-tabs>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-home\transaction-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TransactionHomePage);
    return TransactionHomePage;
}());

//# sourceMappingURL=transaction-home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_list_product_list__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_product_category_add_product_category__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, barcodeScanner, alertCtrl, sp, getset, toastCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
        this.ViewList = __WEBPACK_IMPORTED_MODULE_7__product_list_product_list__["a" /* ProductListPage */];
        this.AddProd = __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */];
        this.AddCat = __WEBPACK_IMPORTED_MODULE_8__add_product_category_add_product_category__["a" /* AddProductCategoryPage */];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.total = this.getset.getTotal();
        this.count = this.getset.getCount();
        this.vat = this.getset.getVat();
    };
    DashboardPage.prototype.qrscan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var toast = _this.toastCtrl.create({
                        message: "Found Product " + val[0].name,
                        duration: 2000
                    });
                    toast.present();
                    _this.count++;
                    _this.total += parseFloat(val[0].price);
                    _this.vat += (parseFloat(val[0].price) * 0.05);
                    _this.getset.setTotal(_this.total);
                    _this.getset.setCount(_this.count);
                    _this.getset.setVat(_this.vat);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Product Not Found!!!",
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    DashboardPage.prototype.addproduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */]);
    };
    DashboardPage.prototype.showproduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    DashboardPage.prototype.manual = function () {
        var _this = this;
        var alertPop = this.alertCtrl.create({
            title: 'Product',
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Product Code'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Search',
                    handler: function (data) {
                        _this.sp.searchProduct(data.code).then(function (val) {
                            if (val[0] != null) {
                                var toast = _this.toastCtrl.create({
                                    message: "Found Product " + val[0].name,
                                    duration: 2000
                                });
                                toast.present();
                                _this.count++;
                                _this.total += parseFloat(val[0].price);
                                _this.vat += (parseFloat(val[0].price) * 0.05);
                                _this.getset.setTotal(_this.total);
                                _this.getset.setCount(_this.count);
                                _this.getset.setVat(_this.vat);
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: "Product Not Found!!!",
                                    duration: 2000
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alertPop.present();
    };
    DashboardPage.prototype.reset = function () {
        this.getset.setTotal(0);
        this.getset.setCount(0);
        this.getset.setVat(0);
        this.total = 0;
        this.count = 0;
        this.vat = 0;
        var toast = this.toastCtrl.create({
            message: "POS reset to Zero",
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */])
    ], DashboardPage.prototype, "tabRef", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product</ion-title>\n  </ion-navbar>\n \n</ion-header>\n<ion-content>\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n        <ion-tab [root]="ViewList" tabTitle="Products List" tabIcon="calculator"></ion-tab>\n        <ion-tab [root]="AddProd" tabTitle="Add Product" tabIcon="list-box"></ion-tab>\n        <ion-tab [root]="AddCat" tabTitle="View/Add Categories" tabIcon="albums"></ion-tab>\n  \n    \n       </ion-tabs>\n\n<!-- <ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>Total</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{total}} USD</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>Items</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{count}} Pcs</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>VAT</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{vat}} USD</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="primary" (click)="manual()">Manual Entry</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="primary" (click)="qrscan()">Sales QR Scan</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" (click)="addproduct()">Add Products</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="secondary" (click)="showproduct()">Show Products</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button round block color="secondary" (click)="reset()">Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n -->\n\n\n  \n\n\n<!-- \n  <ion-tabs tabsPlacement="top">\n    <ion-tab [root]="ListRoot" tabTitle="List" tabIcon="chat"></ion-tab>\n    <ion-tab [root]="AddRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n   </ion-tabs> -->\n<!-- \n  <ion-footer>\n    <ion-toolbar>\n      <ion-title>Track💰2Make💰</ion-title>\n    </ion-toolbar>\n  </ion-footer> -->\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleProductPage = /** @class */ (function () {
    function SingleProductPage(navCtrl, barcodeScanner, navParams, sp, toastCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodCost = 0;
        this.prodCat = "";
        this.newprodCat = "";
        this.product = this.navParams.get("data");
        this.prodCodeOld = this.product.code;
    }
    SingleProductPage_1 = SingleProductPage;
    SingleProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    SingleProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SingleProductPage.prototype.addCategory = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Added new Category',
                        duration: 3000
                    });
                    _this.newprodCat = "";
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    SingleProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            //this.prodCode = barcodeData.text;
            _this.navCtrl.setRoot(SingleProductPage_1, { code: barcodeData.text });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SingleProductPage.prototype.updateProduct = function () {
        var _this = this;
        if (this.newprodCat != "") {
            this.addCategory();
            this.product.cat = this.newprodCat;
        }
        var data = {
            "code": this.product.code,
            "name": this.product.name,
            "price": this.product.price,
            "cost": this.product.cost,
            "cat": this.product.cat,
        };
        this.sp.updateProduct(data, this.prodCodeOld).then(function () {
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: "Product Updated !!",
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
            }, 1000);
            _this.prodCode = "";
        });
    };
    SingleProductPage.prototype.deleteproduct = function (data) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.deleteProduct(data);
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: "Product Deleted !!",
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
            }, 1000);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage = SingleProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\singleproduct\singleproduct.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Update Product</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-list inset>\n\n    <!-- <ion-item>\n      <ion-label>Photo</ion-label>\n          <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n      </ion-item> -->\n    <ion-item>\n      <ion-label>Code</ion-label>\n      <ion-input type="text" [(ngModel)]=\'product.code\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type="text" [(ngModel)]=\'product.name\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sale Price</ion-label>\n      <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Cost</ion-label>\n        <ion-input type="number" [(ngModel)]=\'product.cost\'></ion-input>\n    </ion-item>\n      <ion-item>\n          <ion-label>Select Category</ion-label>\n          <ion-select multiple="false" [(ngModel)]=\'product.cat\'>\n              <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n          </ion-select>\n      </ion-item>\n    \n    \n\n  \n  </ion-list>\n  <button ion-button block color="primary" (click)="updateProduct()">Update</button>\n  <button ion-button block color="primary" (click)="scanQR()">Scan Code</button>\n  <button ion-button block color="danger" (click)="deleteproduct(product)">Delete</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\singleproduct\singleproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SingleProductPage);
    return SingleProductPage;
    var SingleProductPage_1;
}());

//# sourceMappingURL=singleproduct.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map