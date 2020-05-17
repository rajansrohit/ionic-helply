webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leader_leader__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var tabs = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function tabs(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* info */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* map */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__leader_leader__["a" /* leader */];
    }
    tabs.prototype.segueToMenu = function () {
        // this.app.getRootNav().setRoot(HomePage);
        // this.navCtrl.pop();
        // this.navCtrl.navPop();
    };
    tabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:'<ion-header>\n  <!--\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n  -->\n</ion-header>\n\n<ion-content padding>\n  <!--\n  <button ion-button (click)="segueToMenu()">Back</button>\n  -->\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Recycle" tabIcon="ios-leaf-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Leaderboard" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], tabs);
    return tabs;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_success__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var map = /** @class */ (function () {
    function map(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    map.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    map.prototype.initMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    map.prototype.successAlert = function () {
        var loader = this.loadingCtrl.create({
            content: 'Posting Your Device',
            duration: 250,
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__success_success__["a" /* success */]);
    };
    map.prototype.takePhoto = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], map.prototype, "mapElement", void 0);
    map = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style> <ion-navbar>\n    <ion-title>\n      Rohit Rajan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<style>\n#map {\n height: 300px;\n width: 100%;\n}\n</style>\n<ion-content padding>\n <button ion-button style="border-radius:20px;" block color="secondary" (click)="takePhoto()">Take Picture</button>\n  <button ion-button style="border-radius:20px;" block color="secondary" (click)="takePhoto()">Load From Gallery</button>\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/cracked.jpg" alt="your image" />\n    <ion-card-content>\n      <ion-card-title>\n        Product Recyling Information\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="Product Name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Broken</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Functional</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Very Good</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>New</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <p><b>Points Worth</b>: 100</p>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="border-radius:20px;">\n    <ion-card-content>\n      <ion-card-title>\n        Shipping\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          <div #map id="map"></div>\n        </ion-item>\n        <ion-item>\n          <b>Generate Shipping Label</b>\n          <br />\n          <button ion-button style="border-radius:10px;" block color="secondary" ng-click="show = true">Generate</button>\n          <br />\n          <img ng-if="show" src="assets/imgs/shipping.png" id="shippingLabel"/>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button style="border-radius:20px;" block color="danger" (click)="successAlert()">recycle & redeem</button>\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], map);
    return map;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slides; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var slides = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function slides(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "welcome to helply!",
                description: "have old devices you want to throw away? what about old clothes, toys, books, and other things you might have thrown away? <b>helply</b> allows you to donate these things to those in need without having to leave the comforts of your home",
                image: "assets/imgs/floppy-disks.jpg",
            },
            {
                title: "why use helply?",
                description: "using <b>helply</b> not only helps you get rid of your old things, it also helps those in need, and the earth. you can also win <b>competitions</b> and <b>prizes</b> if you recycle.",
                image: "assets/imgs/IMG_5570.PNG",
            },
            {
                title: "helply helps the earth",
                description: "by repurposing old technology, clothing, and other products, <b>helply</b> reduces the amount of e-waste which winds up in our planet's landfills.",
                image: "assets/imgs/ewasteR.png",
            },
            {
                title: "get started",
                description: "helply is equally as easy to use as it is useful. after creating an account, list your item in the 'recycle' panel, follow the instructions, and get yourself some points.",
                image: "assets/imgs/secure.png",
            }
        ];
    }
    slides.prototype.openMain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    slides = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:'<style>\nion-slides ion-slide{\n  background: #E6F2D5;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color:white;\n}\n</style>\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n      <img style="border-radius:10px;" [src]="slide.image" class="slide-image"/>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <h2 class="slide-title">ready?</h2> \n <img src="assets/imgs/ewastelogo.png" class="slide-image"/> \n      <button style="color: #FFF;" ion-button clear icon-end color="primary" (click)="openMain()">\n start recycling now\n <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], slides);
    return slides;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_sign__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.segueToSecondPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* menu */]);
    };
    HomePage.prototype.segueToThirdPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_sign__["a" /* sign */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:'<!--\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Liberation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n<link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">\n\n<style>\n  ion-content{\n    background: #00F260;\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);\n    background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);\n    /*\n    align-items:center;\n    text-align:center;\n    */\n    font-family: \'Raleway\', sans-serif;\n  }\n  ion-content h1{\n    letter-spacing:0.1em;\n    font-size:4em;\n    text-shadow: 0 1px 0 #ccc,\n               0 2px 0 #c9c9c9,\n               0 3px 0 #bbb,\n               0 4px 0 #b9b9b9,\n               0 5px 0 #aaa,\n               0 6px 1px rgba(0,0,0,.1),\n               0 0 5px rgba(0,0,0,.1),\n               0 1px 3px rgba(0,0,0,.3),\n               0 3px 5px rgba(0,0,0,.2),\n               0 5px 10px rgba(0,0,0,.25),\n               0 10px 10px rgba(0,0,0,.2),\n               0 20px 20px rgba(0,0,0,.15);\n  }\n  ion-content button{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  ion-content div{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n  .choiceButton{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n</style>\n\n<ion-content padding>\n  <!--\n  <ion-card>\n\n    <ion-card-content>\n      <button ion-button (click)="openIt()">Open</button>\n    </ion-card-content>\n\n  </ion-card>\n  -->\n\n  <div style="height:100%;width:100%;">\n    <h1 style="color:white;">helply</h1>\n    <!--\n    <button ion-button color="secondary" (click)="segueToSecondPage()">START</button>\n    -->\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 (click)="segueToSecondPage()"><button style="border-radius:10px;" block ion-button color="secondary" class="choiceButton">login</button></ion-col>\n        <ion-col col-6 (click)="segueToThirdPage()"><button block style="border-radius:10px;" ion-button color="secondary" class="choiceButton">sign up</button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var menu = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function menu(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    menu.prototype.segueToHome = function () {
        this.navCtrl.pop();
    };
    menu.prototype.segueToTabs = function () {
        var loader = this.loadingCtrl.create({
            content: 'Logging you in...',
            duration: 250,
        });
        loader.present();
        window.realNavCtrl = this.navCtrl;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* tabs */]);
        // this.navCtrl.push(HomePage);
    };
    menu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:'<ion-header>\n  <!--\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n  -->\n</ion-header>\n<style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-family: \'Raleway\', sans-serif;\n  }\n  ion-content .loginDiv{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n   .choiceButton{\n     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   }\n</style>\n<ion-content padding>\n  <!--\n  <button ion-button color="secondary" (click)="segueToHome()">Back</button>\n  -->\n\n  <!--\n  <button ion-button clear icon-left (click)="segueToHome()">\n    <ion-icon ios="md-arrow-back" md="md-arrow-back" style="color:white;font-size:2em;"></ion-icon>\n  </button>\n  -->\n\n<!--\n  <div style="height:90%;width:100%;">\n    <button ion-button color="default" class="choiceButton">login</button>\n    <br />\n    <button ion-button color="default" class="choiceButton">SIGNUP</button>\n  </div>\n-->\n\n  <!--\n  <ion-icon ios="ios-close-circle-outline" md="md-close-circle" (click)="segueToHome()" style="font-size:4em;color:white;"></ion-icon>\n  -->\n\n  <div style="height:10%;width:100%;" class="arrowDiv">\n    <button ion-button clear icon-left (click)="segueToHome()">\n      <ion-icon ios="md-arrow-round-back" md="md-arrow-round-back" style="font-size:2em;" color="default"></ion-icon>\n    </button>\n  </div>\n\n  <div style="height:90%;width:100%;" class="loginDiv">\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item style="background:none;color:white;">\n              <ion-label color="primary" style="color:white;" floating>email/username</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item style="background:none;color:white;">\n              <ion-label color="primary" style="color:white;" floating>password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12><button ion-button block style="border-radius:10px;" class="choiceButton" (click)="segueToTabs()">login</button></ion-col>\n          <ion-col col-6><button ion-button style="border-radius:10px;" block color="danger" class="choiceButton"><ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon></button></ion-col>\n          <ion-col col-6><button ion-button style="border-radius:10px;" block color="danger" class="choiceButton"><ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon></button></ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n  </div>\n\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], menu);
    return menu;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return success; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var success = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function success(navCtrl) {
        this.navCtrl = navCtrl;
    }
    success.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    success = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success',template:'<ion-header>\n  <!--\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n  -->\n</ion-header>\n\n<link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">\n\n<style>\n  ion-content{\n    background: #11998e;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%)  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-family: \'Raleway\', sans-serif;\n    color:white;\n  }\n  ion-content h1{\n    letter-spacing:0.1em;\n    font-size:4em;\n    text-shadow: 0 1px 0 #ccc,\n               0 2px 0 #c9c9c9,\n               0 3px 0 #bbb,\n               0 4px 0 #b9b9b9,\n               0 5px 0 #aaa,\n               0 6px 1px rgba(0,0,0,.1),\n               0 0 5px rgba(0,0,0,.1),\n               0 1px 3px rgba(0,0,0,.3),\n               0 3px 5px rgba(0,0,0,.2),\n               0 5px 10px rgba(0,0,0,.25),\n               0 10px 10px rgba(0,0,0,.2),\n               0 20px 20px rgba(0,0,0,.15);\n  }\n  ion-content div{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n  .choiceButton{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n</style>\n<ion-content padding>\n  <div style="height:100%;width:100%;">\n    <h1>congrats!</h1>\n    <br />\n    <p>print your shipping label and ship your electronics to recive your points.</p>\n    <br />\n    <button ion-button block class="choiceButton" (click)="goBack()">Keep Recycling</button>\n  </div>\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], success);
    return success;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return info; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var info = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function info(navCtrl) {
        this.navCtrl = navCtrl;
    }
    info.prototype.logout = function () {
        // this.app.getRootNav().setRoot(HomePage);
        // this.navCtrl.pop();
        window.realNavCtrl.pop();
        window.realNavCtrl.pop();
    };
    info.prototype.recycleMore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* map */]);
    };
    info = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',
            template:'<ion-header>\n<style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style>  <ion-navbar>\n    <ion-title>\n      Rohit Rajan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/pic.jpg" alt="your image" />\n    <ion-card-content>\n      <ion-card-title>\n        Rohit Rajan\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <p><b>Username</b>: Rohit Rajan</p>\n          </ion-item>\n          <ion-item>\n            <p><b>Password</b>: &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</p>\n            <button style="border-radius:10px;" ion-button outline item-end icon-left>\n              change password\n            </button>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="border-radius:20px;">\n    <ion-card-content>\n      <ion-card-title>\n        Activity & Earnings\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          <b>Total Points</b>: 155\n          <!--\n          <button ion-button outline item-end icon-left>\n            Recycle\n          </button>\n          -->\n        </ion-item>\n        <ion-item>\n          <p><b>Recent</b>: Recyled your iPod for 100 <br />points @</p>\n          <p color="black"><b>Best Buy - Apple Center</b></p>\n          <p>123 Best Buy Street TX, 75019</p>\n        </ion-item>\n        <ion-item><button ion-button block style="border-radius:10px;" color="secondary" (click)="recycleMore()">recycle more</button></ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/map.jpg">\n    <ion-item>\n      <ion-icon name="logo-apple" item-start large></ion-icon>\n      <h2>Best Buy - Apple Center</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-apple" item-left large ></ion-icon>\n      <h2>Apple Store</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>18 min</span>\n      <span item-left>(2.6 mi)</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n    <button ion-button block color="danger" style="border-radius:20px;" (click)="logout()">log out</button>\n\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], info);
    return info;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return leader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_first__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var leader = /** @class */ (function () {
    function leader(navCtrl) {
        this.navCtrl = navCtrl;
    }
    leader.prototype.openProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_first__["a" /* first */]);
    };
    leader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leader',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style> <ion-navbar>\n    <ion-title>\n      May 2020\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n   <ion-list-header>\n    All Time\n  </ion-list-header>\n\n  <ion-item style="border-top-left-radius: 20px; border-top-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="data:image/jpeg;base64,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">\n    </ion-avatar>\n    <h2><strong>1 </strong>Elon Musk</h2>\n    <p>6,892 points</p>\n    <button ion-button clear item-end (click)="openProfile()">View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://specials-images.forbesimg.com/imageserve/5a8d93da31358e4955adf1c9/416x416.jpg?background=000000&cropX1=1399&cropX2=3806&cropY1=290&cropY2=2695">\n    </ion-avatar>\n    <h2><strong>2 </strong>Sergey Brin</h2>\n    <p>4,205 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFhUXFRUYGBUVFhcXFhcWFxcXGBcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAgMEBwj/xAA+EAABAwIFAQUHAgUDAgcAAAABAAIRAyEEBRIxQVEGImFxgRMykaGxwfBC8QdSctHhFCMzFrIVJDRigqLC/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAgICAwEBAQAAAAAAAAECEQMhEjEEUTJBYRNxIv/aAAwDAQACEQMRAD8A8XSTQtCAQhCAEISQDSKaQRoGNkICypsJMAJa0GMLbRwznbBTOVZC95ADS51u6Ba/UlWgdl6jW986doaNgqM+aYrMeK1TaWV2lxXbSwVOIi6teEyFv8pPEX9T81Ns7PU2us1ukgyYtb91ReZdjwPN3ZfTI913oYXHWyyNiV7BVyWkQQGtIEXAC5Mb2bpHvBoAI4tt+BKfISvxvp4/Uwjhtdc5HVelZl2JfuwzaY+whVTMsmdTOmq0tPB2/dX4c8qnPhyx/SASAXRWwrm+I6haCFo3KpJEpkJIARKEJAIRCEwEQhCNAShCEiNCEKRkmhCYCEQhIAIQsmNkgDlFDOgwuMBW7sl2fNZ07MaRqdz/AEt8Vw4DLDLKbR/uPdHl1PoF61lmEbQptpNAho36nknzWP5HLqdNHBxeV7bMFgKVNulrQ0AG43856+K76WXCq0si4NzO4N7fBc1ME+fVSuHolojbr081glb7h9OT/wAJa0nSfdsOlxwfVKtgzAaQI48J+qlG0QP3W11LqBbyKaUioVqjmEb2Glw/9tvoYUjhAC7iSDwPUKUr4CZtusWYOJPKO0+jbTEWC4M2ymnWYWvaDPOxnqCpMs6GCsXN8P7JCyPDO02RuwtSIOk+6fsVWsVQ5HwXvHa7KxWoPBFwJaQJMi/wXiz2aHEOE3uLrdw8lsc35HF43r0hiku2vhplwFuFxla5dst6BSCcpKQNCSaAQQmklQEIQl2DQmhTBITSQAhCEAKT7P0Q6qCdhHx4UaLq3ZBlwbS9o8WM+cbfnkq+TLWJydp/s3Q1Yl9QxDQWj7q4UX3uq72ZpgMHFyfj4qapPMlcvlu66vBjrFPYJ3X0UlQZfqoXB1uqmaD+eihjF1dgpwsmhJlSR+Ss2VFPUQ3WbaUrE0bSt1OoBstbqwj8ClZNK93blfT4SfQMT144+K2OI3lbDiRGkmxUZInbUXUomIP0heSdsspIrngGT4fJezOOox+QvP8A+IeHMaoAaJgck+Q4F1Zh1VfLPLF5yMF3Ymf7qBx2GLHEFWqhRd7siTdR2e4J2nXFx7xWzDLVc7KK8kU0legEICEAwkhCAEIQgGhNCYKEIKCgBCEIN3ZXhhUeGw4kkbfmy9Cq0mMoxf3QDI2PHlyqd2NeBiGj4dJ4V5zGmPZwSQYBIMdR/lZfkXvSWPtlkjwGAfkKWYbk8+nSygMrMRBVgwHetE+CwZ+3V4vTuwh2Km6JI6qPwuHINrfmymKDLIi2ttB56LoB2gLFo9VmHeKaFbAZtA+SxfsRHms9QP5CKm26aDjcPAhYFhtew9V0VpB4Wt37fBRTYOIH5yqf220uEuNwDa/5urPVcSbKvdpGgtMjfc9QpS9lcennbKLidVw0b+J6LGq7UxzTzK7Hag0tJ59bWhaa7C0G+w+v33WvG7c3OKLWbBWtSGatJeTb0+4XAVqx9KCRCE0wJSQhACEQhANOUICYBSQhANJCEBLdlj/5mn5/ZXzPcQ11V+mbNEDxgA/KVSOyTR7cOJgNDj8AVYcTiATq6/4gLNzfkng68ql0DxVzy7BmB5qtdn2Bplx4srRhMxYRAIEffYkrBnu11eLqJymyxvHluuihWHQnzhRbMWwbkW9UUMyZa45gJSaTWGmQTymQP8qHZjm3grI40xPj9Ex4pQWK3l3SYCr/AP4iA0HVzF1pxHaClT9+o1vqiC4/awyDusajeigML2sw7/ccXgG5aCY84W93aWhqAh30/dPxR8o7K9GBIVdzfDl3j9vFWRuKY9uprgR4XhRuLh23IsZS0lK88fhyXOBgaQSTbgiVEYmoSGuixmQOpKtPaCkGBx5cCPz0Vdo4aWAkfqFvWPutXH6c/nmqp2a2qOEmxt+64VMdqKYbXcIjZQ62Y+mQITCSkAgIQkDhCSEBkkgFBKYCEIQBKl+zOAp1apNYxSYNTrxqOzWz4n6KJUz2epam1fDQY9Sq+bK44Wxbw4zLOSrtjsmwmkVcM1tIlgDgHONMg/qEyWmN+LKuPk1adJpmHXPXj4WUpUw72UAGuMadvPeOg3XN2fe01BrgaB3Hmb2PccdgL2J+MLFjlbj32v5MMZl0lMbLWwJAjf5qAr4mrO9uOFacZUFRjy0t7pAIDgXHcCByLHZVsZPXxJs4MbNmmxMcpY9e07u+nHjcyrNs58eGpctHPKrTaoTPG8qYxX8O8UbtIJ2g2j1XM/sFi2zYEje/91ZvFX48m/TryntLWD2t1e8QATffhet5dgw9kyZ6bjj5rxyhkNSk9hfp1F3cuCC5pFjyBfovaMgwT2sGuoHukGdGltv0gNd7m+9z1VWcm2niyy1VI7dCthgS09wnf+U9F59XxOrvPJcTsCZA8SOfJeqdu6VR8NqaDRLm+7LDTP8A8nHU2/WypeN7EVDPsyPUjYiRA6QeUYXRckyyVsYovIDqxtEDUQ0eTRYeisGUmoYDawMx0K11f4d4twBaG7cui/pK6MH/AA0xbZOvS7o0O+tlZbNe1Uxyl9LhgRWa3QPE7b8kKYwEkd6fP/HxVRyvC5hhHNbXIqMdbeXNA5NrBXHDV26XSQAIJJOkdQTMXg9OVnrVKr/bCnpYOJcZ+iq/tCxo8NQ9RN/lKsHbfGtqUf8AaBfBu4RoHgHH3z/TKiuymFq16w1uhgBlkCDzEkWuN/BXYXWPbNzY+Weo11+xuJzPEmozTSo6WE1XgwTpEhrRdxnyF1Wu2PY2tl7m63NqU32bUaCBIvpIPumLr27Ms2fSpezwtMOrlvdZ+ljQPePUdByfVeaZljMRiMFi24p7naGtqt1ASHio0WgWs5w9U8fk5eUn6F+LPC2e485STSW9gNJCEAITQguzSQhMwhNJACsPY2DVcw7OZJ8mkEqvwrD2Dj/V6T+qnUA84B+yr5ZvCrOO6zi4VszptaWunS4EGwPC48qoAUyIu7vAxBjgwtVTBg1Q0iWzLhMSOngpMNDXGG6QAIF7W4lc3fToXHtIZbQZSh0CT6wb/JWing2Vo1MAIi47pHqOFVsuqgmXCQePLx/NlOU4DmljtQ8yHA73Eekgwo91fhJGzE5SCR36rR4Fpn4hZYzC06VMuLS5wH6pJPnf6KwYfTE2npdReaNBB1cCYvMdY++1kTpK3fShVcMDWbU0gQQ4bXjqvTcsfqpsI6C3ovPq5a50g78eHivQOzf/ABQTt/ZS9o2SRH9ocq9u0tBOoOa4R4G8dbSo1uVCmNLBDRxYQeRbmVZQ3Q/UTK5zdxbOokyCb6udzyOVE9omnlx3bVcw+Bt6g8qYwFKoQA7EOJG3dA+clOmwE6Z8xNwd7zdbalIgHSRPH1R2V1W92EZDmgxIPe/UJ5BMqu4jK2FtRh1VNZBh76jhAa0S9sxMgmAIFgAF2YN1WXhwAFombg/TyWVQBgMbmL7J7pXCf9cFPCsayCASALm9hYADgeC0YDDtpE1Gtge6SPD7ldGNswukD7iYt1XTlODZVwz6dQamuJ1QSD4EEbHZR7F1EnhsNSZcOBqOAL7gxazbcBee/wARaTKOHxZAA9p7FrfHU/WY+BU9h8rqUXlrHONOe65wguHiOvHoqn/HDEuH+loHlrqrvMHQ3/8AXxU+LHzzn8V8uXhx273uPK0k0LrOSAknCSAEIQgGgJoQAUIQggurKsc6hVZVbu0z6bH5SuRBRpKXT16rgm1NWIa4M0gamkEyT/LHF1H4yp3hB3A/JXdkGY66FJ+kOOhoLTcEhukn5fJcmYjU4uhoMkwLR0AHAXKs1bHRuW5K24apcRYWv5KxYKoXADrsYsqScVpI5E/JS+W5qYABhLLFo4svte8O6rYe1gDwb9wubMsRoD+9OoEHa4jooennbrNBubRaFvzOu0UiT3nRE7xPRQ0sukG/LHR7SR3rgK+diWvNKXePyBXkGPzCvTfNN4czoTcdVY8g7c+z0se+PG+6t8bO2fzl3HoGLpEVHTsdvLlRuZBtOIlzSZtuI/lKr+b9qK+IIpYZgmxLnGGtHUnqem6l8iZUaycRUa994DB3Gj1uT4qPitxy2zoYioYNKqx7Tw8THS3B8oUjQfX/AFmkBwGtj6z8lCZrgtM16BIfu5l4eOSOhXFgc/a4QTDuW8hR7Tki41Kg0+O/mVG16ojfa/wUa3NgCAStvtdRPmP3R7RymnPmz9WltheT5AGf7eqnuy1GWHcC5+Z39FWcdVIM22iOuq1xzZTuVYosoNEHvbxcgEmT6WT9RVbu9JSqS/QxswJJPQTP9l4x/GXM21sfobcUaTKc9SZeT5d4L22kxukNaSWcuO5sQY8Oq+a+1GYf6jF4itw+q8j+kHS3/wCoCv8Ai43y2z/KznjJEUmhC3sBITSQBKEQkgM0lkEimAhCEAIQhAWrsdnraJ9nUPdvpPTqFYq+aNranA2mB02+a80lWHIqp9kROx/ysvLxT8l+HJesU9iqR0gtmLkSPQx+cLTRaWgug9FJYUiphyJMg92bgCJt0vK6Mjw4r0ajSdTyC4cSVm21xD02PudRnceN4t1Uy2t3IDifE9Tx4qFzvGuYGgsJffbe358lD0s/dBbDvFS8doedldeMeQSPGfRRGh9R4a0E34Eruo5gDuwnzVlyvOsOxt2w4+ClvRTDy/Y7NVqtMd5p3i4t5nqZV0pVNTA6e+eOOVVMR2lohsNZN5JMi46Qoz/qoTOhw38vzZQva7H/AMftdsTXqCbX4CrOa5cTL6R/3GmQRsQNwR8Vq/6upvIHfLp90NLj42EqSpMNUdwEAm1odeJEcBRmOkrnv0ywY10mv6i/4VKZcO6J5C14ugadMMAjS2CRtPI+i3UTpY3oB84m88KCfluHmLxpNhvI2m37n5qwdlntDADE6QFUcwxDiLRfceew8F592m7QVhiXeyqvYGBrBpMCw71vOfgrMeO53UUZckwm69S/iL2tp4Si+nTcPb1Gua2IlodILz5AmPFeCrbiMQ+o4ue4ucd3OMk+pWpbuLi8IxcvJ50IQhWKghEIKYJCEIDNEJoQGJTKaEAkIQUAQpXIX++0zcAiPA8/FRS6MvxHs6jXXgETBgxzB4KWU3Dl7XLJMTMsJ3B9IUl2VxgZWDdrkc8iIPy+CrZeGvJbfeCSDI6yutj4c1w6g2MlYcsWzDPpaO0mA1PDnAC1oixPPqCqu7L2l0FpmdwvRHMFeiP5oMbC49ZG2xVXxINN20Rv9LqvG66X+M9uRvZGtUJfRxIY6zdJaCL8W+sFFHszmzRoa6hAFnkNJ+OgmfRTVDMGhsiZBXZTz+8EGfzxUplU/wDPiv8AENgOxubVGkVMRQY0x3tIc/yHcEfFSWA/h/Tpu9pVxFWq+LnugHw0wVJYbtBTIhxd5Sbruw2bCpZjTG3ryi5iYYT+uTK+z1GkSaTAJu5xgkyTuV04ZrGPLtIEC0Hcj6KVoshthc+qj8ya1jSDyWz0EwC6FXs8vSGzISe646TExMC3A85WqviAIE3+UWXR7FwA3O58BxHXYSuUYJxOqNW4tx0nn4I9leo5cU7QypUdBAaXWncX42XktWoXEuO5JJ8zdegdtcwDaDmNIBdpb4kcyPLleerZwY6m3P8AkZbuiSThELSoCAEBCQDUEohEIAQmhMMgkmkUyNIpykkIEk0IMk4QChBJXLK+qGRJG19wFO03ggRvz5eir3Z90V2eOr/tKnMU3SZvB6/3WXlk8tNPFvW1r7M44gNYDzaAST4REn0U9m+We1GtoBcRJVCyzE96xaOpPTnaw81f8kxLfZnS52kTNoj1IGr4eqoyxaMM99IGnkxaYjc8mL+XK21cndZuxttH16XKnH19DpOlw4tN/C66WN67nvAeEdfJR2u8YhsJkOqLe7MnaZ+qsOW5aKYDQNpI256lYYfEiCYBNiWjjbr4KRpYppLRtPHQTaTt9Ur2epG009Imfl1UfjcLrJBgxBHmCDt6fNdWLqzOl038NO+351UW7H/zmNiRIjpE72sjReTQXAAg2PHAPkVD5liWNB0jvSB1PMeSwz3Nmj3SDEWJgGd7zfYKGy9z6hdVee6xriN5mJvfoFKTU3VeeXldRTO02P8AaVNI2ZI83Tc3UMs3ukknm6xhdHGajnW7oSQghMghCJQDWKaEgJQhCDZpIQmQQmkgBCcpIBQgJykgJHIP/UU/M/8AaVZswaC0+H7KtZBauw+J+hVmr3Cyc/5NXB3jYg3VSwzt4f5VjyfPuJM3Lj73wFotPP8AiAxlCVFFxaYuozuI3eNenHMzVAk7AgAEASLyLWHgtdfPtGxHu+9ItbYcdF5kMc9vJunWzJ7veM3k+KXgl/tXqOX5s9xGl0xF+DO225m0KRo5yC0SDAJk+RFj0EXleQMzR7Z0uIHntExf1PxTq5zVcZLvTYI8IP8AevWM87SN0ljSWiATfnjz8fIKq4/P31DAcdMadW/w+vqqtg6j6huev5ZTOW5e4mHSY44ui6glyy9JHC4d1d4kkjc/ck8lT+bxRwVXTbuPjzIj7rPJ8I1ggb/llxdv8RpwhH8xa3z5+yqt8spGqY+GFteXFATKUrpuWEkIQAhNJACEICAcoShNANEJpQgBCyDTwsvY9bJWyBrT0pPqAbJU2k3OyheT6PTZo8UMAWLn2gJNKh5UabaVfQ8PH6SD8CrnVbJJBtwfBURytGT43XRA/UzunxA2Pwt6Knkn7X8F1dNuJbJ8Vyuwocu591gRCrl0vym0NiMDG4UfVwZFxdWesJt1UTWZBgKcqnLFEsok7KTwuTOMagQurB4cDvEXVkwWD1DUTAsPH6Iyy0eHHutGVZSBsNuf8qwYTChrYA8zyttJwDQAAt2Eknb9p2n4KjLLbbhhIzoMA2uL3VV/iRihFKkD1eR4bD7/AAVyqPaAXOIgbnYCJkrybtBmf+oxL6vBMNB4Y2zflf1T4JvLav5WesNfaLKULdVp8haiF05duYSEITMimmEigiCE0kA7IRAQgadgwwG5RpA4WHtChUW2hk5xWo055WwBZeiRuQtA3WRcYWdRi1OCRsITcVkRZa3FADl3ZFi9FS/uuEH7fnio4PSMIOXV2uNWswaHa2EOMAahqnxb7w8yFm4jY7KnFxMeCkcJm7mwHjUPn/lVXD6XY8v2slGiXEQLdV0Ny9txY+KeV41jxqYQRyNiPAypTDsa47ecWt91VbpomO3Bg8lBdeQOv4FNikGNAm3Ta3lsVIMotAgT5iB8VxYhm8OAvxM7XULdrscJDLdUAeHoPJd9OkGxx6fJasupAXIPwmfGOih+1Oetw7X6SDVMBrek/qjiPHcqMlt1E8spjN1Fdus97v8Ap2G59+OANgqJKK9UvcXEkkmSTyeqQW3DHxmnL5M7ndt9N6zMHdaWLNWbVaDqPS61Fq3tfCzkHdSmY05ELe6j0K1OaQpzKExQglCYJCcoTDa1ZIQswjOmsgkhCUJ3C0v4SQgjZytVRCEG53bpoQgwsghCCTfY/wD5nf0/deh5fuUIWbl/Jt+P+Lud7rvILXT48z9AhCpbEjl/uDzP2Xi+d/8ANU/qQhXcHusny/UcITahC0sLcxZhCEFGLVkUIQd9M6a2O2QhSiLiduk5CFbBGKEIUjf/2Q==">\n    </ion-avatar>\n    <h2><strong>3 </strong>Steve Jobs</h2>\n    <p>3,659 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://fthmb.tqn.com/AmPs04Ladr_CS7d5UvVWnmmOc3Y=/506x640/filters:fill(auto,1)/apple-exec-tim-cook-56c594403df78c763fa4f45f.jpg">\n    </ion-avatar>\n    <h2><strong>4 </strong>Tim Cook</h2>\n    <p>3,482 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://pbs.twimg.com/profile_images/929933611754708992/ioSgz49P_400x400.jpg">\n    </ion-avatar>\n    <h2><strong>5 </strong>Bill Gates</h2>\n    <p>3,189 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="https://specials-images.forbesimg.com/imageserve/5a8d920d31358e4955adf197/416x416.jpg?background=000000&cropX1=755&cropX2=2357&cropY1=494&cropY2=2097">\n    </ion-avatar>\n    <h2><strong>6 </strong>Jeff Bezos</h2>\n    <p>2,931 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    Friends\n  </ion-list-header>\n\n  <ion-item style="border-radius:20px;">\n    <ion-avatar item-start>\n      <img src="https://i.pinimg.com/originals/e5/51/63/e55163090db0b4158f4b69a50194fcc5.jpg">\n    </ion-avatar>\n    <h2><strong></strong>Mark Zuckerberg</h2>\n    <p>-9.4e+28 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], leader);
    return leader;
}());

//# sourceMappingURL=leader.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return first; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var first = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function first(navCtrl) {
        this.navCtrl = navCtrl;
    }
    first = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);</style> <ion-navbar>\n    <ion-title>1st Place | April 2018</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card style="border-radius:20px">\n    <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/02/07/104994088-RTX4RKWT.600x400.jpg?v=1518006600"/>\n    <ion-card-content>\n      <ion-card-title>\n        Elon Musk - 6,892 Points\n        </ion-card-title>\n      <p>\n        Joined April, 2018\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n        <ion-item style="border-top-left-radius: 20px; border-top-right-radius: 20px;">\n          <ion-thumbnail item-start>\n            <img src="https://cdn.vox-cdn.com/thumbor/1sOdznAirV20csmhHlsFizkK50k=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9699755/Roadster_Hero.jpg">\n          </ion-thumbnail>\n          <h2>Tesla Roadster</h2>\n          <p>Donated April, 2018</p>\n          <p>4500 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://lifeboat.com/blog.images/a-successful-spacex-falcon-heavy-launch-gives-nasa-new-options.jpg">\n          </ion-thumbnail>\n          <h2>SpaceX Falcon 9</h2>\n          <p>Donated April, 2018</p>\n          <p>2300 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n\n        <ion-item style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">\n          <ion-thumbnail item-start>\n            <img src="http://cdn.shopify.com/s/files/1/2271/1169/products/05_d9ce5be6-9f66-48a1-9b4d-c5002878745a_1024x1024.jpg?v=1507283487">\n          </ion-thumbnail>\n          <h2>Batman Costume</h2>\n          <p>Donated April, 2018</p>\n          <p>92 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], first);
    return first;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sign = /** @class */ (function () {
    ///constructor(public navCtrl: NavController) {}
    function sign(navCtrl) {
        this.navCtrl = navCtrl;
    }
    sign.prototype.segueToHome = function () {
        this.navCtrl.pop();
    };
    sign.prototype.segueToTabs = function () {
        window.realNavCtrl = this.navCtrl;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* tabs */]);
        // this.navCtrl.push(HomePage);
    };
    sign = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign',template:'<ion-header>\n  <!--\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n  -->\n</ion-header>\n<style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-family: \'Raleway\', sans-serif;\n  }\n  ion-content .loginDiv{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n   .choiceButton{\n     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   }\n</style>\n<ion-content padding>\n  <!--\n  <button ion-button color="secondary" (click)="segueToHome()">Back</button>\n  -->\n\n  <!--\n  <button ion-button clear icon-left (click)="segueToHome()">\n    <ion-icon ios="md-arrow-back" md="md-arrow-back" style="color:white;font-size:2em;"></ion-icon>\n  </button>\n  -->\n\n<!--\n  <div style="height:90%;width:100%;">\n    <button ion-button color="default" class="choiceButton">LOGIN</button>\n    <br />\n    <button ion-button color="default" class="choiceButton">SIGNUP</button>\n  </div>\n-->\n\n  <!--\n  <ion-icon ios="ios-close-circle-outline" md="md-close-circle" (click)="segueToHome()" style="font-size:4em;color:white;"></ion-icon>\n  -->\n\n  <div style="height:10%;width:100%;" class="arrowDiv">\n    <button ion-button clear icon-left (click)="segueToHome()">\n      <ion-icon ios="md-arrow-round-back" md="md-arrow-round-back" style="font-size:2em;" color="default"></ion-icon>\n    </button>\n  </div>\n\n  <div style="height:90%;width:100%;" class="loginDiv">\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item style="background:none;color:white;">\n              <ion-label color="primary" style="color:white;" floating>address</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item style="background:none;color:white;">\n              <ion-label color="primary" style="color:white;" floating>email/username</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item style="background:none;color:white;">\n              <ion-label color="primary" style="color:white;" floating>password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12><button ion-button block style="border-radius:10px;" class="choiceButton" (click)="segueToTabs()">sign up</button></ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n  </div>\n\n</ion-content>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], sign);
    return sign;
}());

//# sourceMappingURL=sign.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_info__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_leader_leader__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_success_success__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_sign__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_first_first__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* menu */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* tabs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* map */],
                __WEBPACK_IMPORTED_MODULE_10__pages_info_info__["a" /* info */],
                __WEBPACK_IMPORTED_MODULE_11__pages_leader_leader__["a" /* leader */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* success */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_sign__["a" /* sign */],
                __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__["a" /* slides */],
                __WEBPACK_IMPORTED_MODULE_16__pages_first_first__["a" /* first */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* menu */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* tabs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* map */],
                __WEBPACK_IMPORTED_MODULE_10__pages_info_info__["a" /* info */],
                __WEBPACK_IMPORTED_MODULE_11__pages_leader_leader__["a" /* leader */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* success */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_sign__["a" /* sign */],
                __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__["a" /* slides */],
                __WEBPACK_IMPORTED_MODULE_16__pages_first_first__["a" /* first */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__ = __webpack_require__(195);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__["a" /* slides */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:'<ion-nav [root]="rootPage"></ion-nav>\n'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
