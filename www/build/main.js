webpackJsonp([7],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_transaction_income_transaction__ = __webpack_require__(58);
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
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
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
    AllTransactionPage.prototype.createRec = function () {
        //Nav to Rec Page
        //Build Expand Feature on REC Page
        //this.events.publish('genRec:created', this.itemsprice);
        //this.navCtrl.push(CalculatorPage);
        //(this.navCtrl.parent as Tabs).select(1);
        this.navCtrl.parent.select(2);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__income_transaction_income_transaction__["a" /* IncomeTransactionPage */], this.itemsprice);
        this.events.publish('genRec:created', this.itemsprice);
        console.log("Sent: " + this.itemsprice);
    };
    AllTransactionPage.prototype.btnClicked = function (btn) {
        console.log('CalculatorPage::btnClicked = ' + btn);
        if (btn == "C") {
            this.result = "";
            this.itemsprice = [];
            this.lastsum = 0;
        }
        else if (btn == "=") {
            this.showSampleRec = true;
            //IF LAST = character then remove that character 
            var answ = this.result.split('+');
            this.itemsprice = this.itemsprice.concat(answ);
            //flag_mode=0 means normal (sample reciept is generated)
            //if(flag_mode==1) then go to reciept page directly - call createRec()
            //if(flag_mode=2) then just use as calc - no reciept is generated
            console.log(this.itemsprice);
            this.result = eval(this.result) + "";
            this.lastsum = parseInt(this.result);
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
    };
    AllTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\all-transaction\all-transaction.html"*/'<!--\n  Generated template for the AllTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n    <!-- <ion-fab bottom right>\n        <button ion-fab color="primary" item-right><ion-icon name="calculator"></ion-icon></button>\n      </ion-fab> -->\n      <ion-card *ngIf="showSampleRec==false">\n        Please type the amount for the item multiplied by its quantity and press equal to add to the existing bill.\n\n        To add multiple blank items enter each price*qty and press the + sign to enter the next item\n      </ion-card>\n      \n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n          <div class="calculator">\n            <div class="header">\n              <div class="window"></div>\n              <div class="input">\n                <ion-row>\n                  <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result">\n                  </ion-input>\n                  <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n                  \n                </ion-row> \n               \n                    \n                \n              </div>\n             \n              \n            </div>\n            <div class="keys">\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'7\')">7</span>\n                  <span (click)="btnClicked(\'8\')">8</span>\n                  <span (click)="btnClicked(\'9\')">9</span>\n                </div>\n                <div class="symbol">\n                  <span (click)="btnClicked(\'*\')">×</span>\n\n                </div>\n              </div>\n\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'4\')">4</span>\n                  <span (click)="btnClicked(\'5\')">5</span>\n                  <span (click)="btnClicked(\'6\')">6</span>\n                </div>\n\n                <div class="symbol">\n                  <span (click)="btnClicked(\'+\')">+</span>\n           </div>\n              </div>\n\n              <div class="row">\n                <div class="number">\n                  <span (click)="btnClicked(\'1\')">1</span>\n                  <span (click)="btnClicked(\'2\')">2</span>\n                  <span (click)="btnClicked(\'3\')">3</span>\n                </div>\n\n                <div class="symbol">\n                  <span (click)="btnClicked(\'/\')">÷</span>\n                  <span (click)="btnClicked(\'squareroot\')">√x</span>\n                </div>\n\n\n              </div>\n\n\n              <div class="row">\n                <div class="number">\n                  <span class=dull (click)="btnClicked(\'C\')">C</span>\n                  <span (click)="btnClicked(\'0\')">0</span>\n                  <span (click)="btnClicked(\'-\')">-</span>\n\n\n\n                </div>\n\n                <div class="symbol action">\n                  <span (click)="btnClicked(\'=\')">=</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n    \n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n\n        <ion-card *ngIf="showSampleRec==true">\n\n       \n\n          <ion-list>\n            <ion-item>\n\n                <button ion-button clear> SAMPLE RECIEPT </button>\n            </ion-item>\n            <ion-item>\n\n              <button ion-button clear>Sl no. </button>\n              <button ion-button clear>Item Name</button>\n              <button ion-button clear>Price</button>\n\n            </ion-item>\n          </ion-list>\n\n          <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n\n            <ion-item>\n\n\n\n              <button ion-button clear>{{i+1}}. </button>\n              <button ion-button clear>ထုတ်ကုန်ကိုရှေးခယျြ</button> <button ion-button clear>{{item}}</button>\n         \n\n            </ion-item>\n\n\n\n          </ion-list>\n\n          <ion-list>\n            <ion-item>\n\n\n              <button ion-button clear><b>စုစုပေါင်းဥပဒေကြမ်း </b></button>\n              <button ion-button clear>{{lastsum}}</button>\n\n\n            </ion-item>\n          </ion-list>\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n  </ion-grid>\n\n\n\n  <!-- Dynamically Generate All transactions from backend - see feed from prev -->\n\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n    <ion-title> <button ion-button (click)="createRec()">Generate Receipt</button></ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\all-transaction\all-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
    ], AllTransactionPage);
    return AllTransactionPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-transaction.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(115);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\login\login.html"*/'\n<ion-content padding>\n\n\n\n  <button ion-button block clear color="light" class="nametop">EasyCredit</button> \n\n\n\n  <ion-grid style="width: 75%;">\n\n    \n    <ion-row class="row-style">\n      \n      <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n      <ion-input type="email" placeholder="Email" [(ngModel)]="email" ></ion-input>\n    </ion-row>\n    <ion-row class="row-style">\n      <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="password" ></ion-input>\n    </ion-row>\n    <ion-row>\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">Login</button>\n    </ion-row>\n    <div class="btn_container">\n        <button ion-button full (click)="loginAction();">Login with Facebook</button>\n    </div>\n  \n  </ion-grid>\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="gotoSignUp()">Don\'t have an account? Sign Up</button> \n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
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
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (data) {
            var newUser = data.user;
            newUser.updateProfile({
                displayName: _this.name,
                photoURL: ""
            }).then(function (res) {
                console.log("Profile Updated");
                _this.alertCtrl.create({
                    title: "Account Created",
                    message: "Your account has been created successfully.",
                    buttons: [{
                            text: "OK",
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]); //navigate to feeds page
                            } //end handler
                        }] //end button
                }).present();
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    SignUpPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar transparent>\n   <!--  <ion-title>\n     AdMonkey\n    </ion-title> -->\n \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n		<button ion-button block clear color="light" class="nametop">EasyCredit</button> \n\n<ion-grid style="width: 75%;">\n	<ion-row class="row-style1" justify-content-center align-items-center style="height: 100%"> Register a business</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="text" placeholder="Name" [(ngModel)]="name"></ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="email" placeholder="Email" [(ngModel)]="email"> </ion-input>\n	</ion-row>\n	<ion-row class="row-style">\n		<ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n		<ion-input type="password" placeholder="Password"  [(ngModel)]="password"></ion-input>\n	</ion-row>\n	<ion-row>\n		<button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signup()">SignUp</button>\n	</ion-row>\n</ion-grid>\n<button ion-button block clear color="light" style="margin-top: 10px;" (click)="goBack()">Already have an account? LOGIN</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-transaction/all-transaction.module": [
		299,
		6
	],
	"../pages/calculator/calculator.module": [
		300,
		5
	],
	"../pages/expense-transaction/expense-transaction.module": [
		301,
		4
	],
	"../pages/income-transaction/income-transaction.module": [
		302,
		3
	],
	"../pages/login/login.module": [
		303,
		2
	],
	"../pages/sign-up/sign-up.module": [
		304,
		1
	],
	"../pages/transaction-home/transaction-home.module": [
		305,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(53);
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
    function AddProductPage(navCtrl, barcodeScanner, navParams, sp, toastCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodCode = this.navParams.get("code");
    }
    AddProductPage_1 = AddProductPage;
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
        var data = {
            "code": this.prodCode,
            "name": this.prodName,
            "price": this.prodPrice
        };
        this.sp.storageReady().then(function () {
            _this.sp.addProduct(data);
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Added new Product',
                    duration: 3000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
            }, 1000);
        });
    };
    AddProductPage = AddProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\addproduct\addproduct.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>Code</ion-label>\n      <ion-input type="text" [(ngModel)]=\'prodCode\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type="text" [(ngModel)]=\'prodName\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Price</ion-label>\n      <ion-input type="number" [(ngModel)]=\'prodPrice\'></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button block color="primary" (click)="addproduct()">Add Product</button>\n  <button ion-button block color="primary" (click)="scanQR()">Scan Code</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\addproduct\addproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddProductPage);
    return AddProductPage;
    var AddProductPage_1;
}());

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(53);
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
        this.product = this.navParams.get("data");
        this.prodCodeOld = this.product.code;
    }
    SingleProductPage_1 = SingleProductPage;
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
        var data = {
            "code": this.product.code,
            "name": this.product.name,
            "price": this.product.price
        };
        this.sp.updateProduct(data, this.prodCodeOld).then(function () {
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: "Product Updated !!",
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
            }, 1000);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
            }, 1000);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage = SingleProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\singleproduct\singleproduct.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Update Product</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>Code</ion-label>\n      <ion-input type="text" [(ngModel)]=\'product.code\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type="text" [(ngModel)]=\'product.name\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Price</ion-label>\n      <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button block color="primary" (click)="updateProduct()">Update</button>\n  <button ion-button block color="primary" (click)="scanQR()">Scan Code</button>\n  <button ion-button block color="danger" (click)="deleteproduct(product)">Delete</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\singleproduct\singleproduct.html"*/
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

/***/ }),

/***/ 172:
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_transaction_home_transaction_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_all_transaction_all_transaction__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_expense_transaction_expense_transaction__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_income_transaction_income_transaction__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calculator_calculator__ = __webpack_require__(112);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/all-transaction/all-transaction.module#AllTransactionPageModule', name: 'AllTransactionPage', segment: 'all-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculator/calculator.module#CalculatorPageModule', name: 'CalculatorPage', segment: 'calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-transaction/expense-transaction.module#ExpenseTransactionPageModule', name: 'ExpenseTransactionPage', segment: 'expense-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income-transaction/income-transaction.module#IncomeTransactionPageModule', name: 'IncomeTransactionPage', segment: 'income-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-home/transaction-home.module#TransactionHomePageModule', name: 'TransactionHomePage', segment: 'transaction-home', priority: 'low', defaultHistory: [] }
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__ = __webpack_require__(59);
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
            { title: 'Transactions', component: __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */] },
            { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(169);
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
    }
    Object.defineProperty(StorageProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]]];
        },
        enumerable: true,
        configurable: true
    });
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(171);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\list\list.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product List</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-list inset>\n    <ion-item *ngFor="let product of listProducts">\n      <h2>{{product.name}}</h2>\n      <p>Price: {{product.price}} USD</p>\n      <button ion-button clear item-end (click)="singleProduct(product)">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        this.result = "";
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        console.log(this.navParams.get('itemsprice'));
    }
    IncomeTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomeTransactionPage');
        this.events.subscribe('genRec:created', function (data) {
            console.log(data);
        });
    };
    IncomeTransactionPage.prototype.ngOnInit = function () {
    };
    IncomeTransactionPage.prototype.createRec = function () {
        //Nav to Rec Page
        //Build Expand Feature on REC Page
    };
    IncomeTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-income-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\income-transaction\income-transaction.html"*/'<!--\n  Generated template for the IncomeTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n\n    <ion-card >\n\n       \n\n        <ion-list>\n       \n          <ion-item>\n\n            <button ion-button clear>Sl no. </button>\n            <button ion-button clear>Item Name</button>\n            <button ion-button clear>Price</button>\n            <button ion-button round color="danger">remove</button>\n\n          </ion-item>\n\n          <ion-item>\n              <button ion-button color="secondary" round> Add from Calc </button>\n              <button ion-button color="secondary" round> Add from Product List </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n\n          <ion-item>\n\n\n\n            <button ion-button clear>{{i+1}}. </button>\n            <button ion-button clear>ထုတ်ကုန်ကိုရှေးခယျြ</button> <button ion-button clear>{{item}}</button>\n            <button ion-button round color="danger">\n              <ion-icon name="close"></ion-icon>\n            </button>\n\n          </ion-item>\n\n         \n\n\n\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n\n\n            <button ion-button clear><b>စုစုပေါင်းဥပဒေကြမ်း </b></button>\n            <button ion-button clear>{{lastsum}}</button>\n\n\n          </ion-item>\n        </ion-list>\n\n\n      </ion-card>\n  <!-- Dynamically Generate All expense from backend - see feed from prev -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\income-transaction\income-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], IncomeTransactionPage);
    return IncomeTransactionPage;
}());

//# sourceMappingURL=income-transaction.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__ = __webpack_require__(58);
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
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionHomePage = /** @class */ (function () {
    //Calculator = CalculatorPage;
    //@ViewChild('transactionTabs') tabRef: Tabs;
    function TransactionHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AllTransactions = __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__["a" /* AllTransactionPage */];
        this.IncomeTransactions = __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__["a" /* IncomeTransactionPage */];
        //ExpenseTransactions = ExpenseTransactionPage;
        this.ExpenseTransactions = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
    }
    TransactionHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionHomePage');
    };
    TransactionHomePage.prototype.openCalc = function () {
        //this.navCtrl.push(CalculatorPage);
        this.tabRef.select(3);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */]) === "function" && _a || Object)
    ], TransactionHomePage.prototype, "tabRef", void 0);
    TransactionHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-home\transaction-home.html"*/'<!--\n  Generated template for the TransactionHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product List ကိစ္စ</ion-title>\n  </ion-navbar>\n</ion-header>\n \n  \n<ion-content padding>\n  \n  <ion-tabs tabsPlacement="top" #myTabs>\n    <ion-tab [root]="AllTransactions" tabTitle="အားလုံး" tabIcon="swap"></ion-tab>\n    <ion-tab [root]="ExpenseTransactions" tabTitle="ကုန်ကျစရိတ်" tabIcon="trending-down"></ion-tab>\n    <ion-tab [root]="IncomeTransactions" tabTitle="ဝငျငှေ" tabIcon="trending-up"></ion-tab>\n\n   </ion-tabs>\n\n\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\transaction-home\transaction-home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
    ], TransactionHomePage);
    return TransactionHomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=transaction-home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__ = __webpack_require__(172);
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
    // tab1Root = DashboardPage;
    // tab2Root = LoginPage;
    // tab3Root = LoginPage;
    function DashboardPage(navCtrl, barcodeScanner, alertCtrl, sp, getset, toastCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
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
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product-Dashboard</ion-title>\n\n    \n   \n  </ion-navbar>\n \n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>Total</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{total}} USD</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>Items</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{count}} Pcs</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-list>\n            <ion-item>\n              <ion-label>VAT</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{vat}} USD</ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="primary" (click)="manual()">Manual Entry</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="primary" (click)="qrscan()">Sales QR Scan</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" (click)="addproduct()">Add Products</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="secondary" (click)="showproduct()">Show Products</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button round block color="secondary" (click)="reset()">Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n\n<!-- \n  <ion-tabs tabsPlacement="top">\n    <ion-tab [root]="ListRoot" tabTitle="List" tabIcon="chat"></ion-tab>\n    <ion-tab [root]="AddRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n   </ion-tabs> -->\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-title>Track💰2Make💰</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\barcode-mpos\barcode-mpos\src\pages\dashboard\dashboard.html"*/
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

/***/ })

},[214]);
//# sourceMappingURL=main.js.map