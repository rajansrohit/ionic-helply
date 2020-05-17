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
            selector: 'page-map',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style> <ion-navbar>\n    <ion-title>\n      Rohit Rajan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<style>\n#map {\n height: 300px;\n width: 100%;\n}\n</style>\n<ion-content padding>\n <button ion-button style="border-radius:20px;" block color="secondary" (click)="takePhoto()">Take Picture</button>\n  <button ion-button style="border-radius:20px;" block color="secondary" (click)="takePhoto()">Load From Gallery</button>\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/games.jpg" alt="your image" />\n    <ion-card-content>\n      <ion-card-title>\n        Product Recyling Analysis\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="Product Name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Poor</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Fair</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>Good</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label><p color="black"><b>New</b></p></ion-label>\n            <ion-checkbox color="danger" checked="false"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <p><b>Estimated Points</b>: 100</p>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="border-radius:20px;">\n    <ion-card-content>\n      <ion-card-title>\n        Shipping\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          <div #map id="map"></div>\n        </ion-item>\n        <ion-item>\n          <b>Generate Shipping Label</b>\n          <br />\n          <button ion-button style="border-radius:10px;" block color="secondary" ng-click="show = true">generate</button>\n          <br />\n          <img ng-if="show" src="assets/imgs/shipping.png" id="shippingLabel"/>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button style="border-radius:20px;" block color="danger" (click)="successAlert()">recycle & redeem</button>\n</ion-content>\n'
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
                description: "by repurposing old technology, clothing, and other products, <b>helply</b> reduces the amount of waste, which winds up in our planet's landfills.",
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
            selector: 'page-success',template:'<ion-header>\n  <!--\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n  -->\n</ion-header>\n\n<link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet">\n\n<style>\n  ion-content{\n    background: #11998e;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%)  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-family: \'Raleway\', sans-serif;\n    color:white;\n  }\n  ion-content h1{\n    letter-spacing:0.1em;\n    font-size:4em;\n    text-shadow: 0 1px 0 #ccc,\n               0 2px 0 #c9c9c9,\n               0 3px 0 #bbb,\n               0 4px 0 #b9b9b9,\n               0 5px 0 #aaa,\n               0 6px 1px rgba(0,0,0,.1),\n               0 0 5px rgba(0,0,0,.1),\n               0 1px 3px rgba(0,0,0,.3),\n               0 3px 5px rgba(0,0,0,.2),\n               0 5px 10px rgba(0,0,0,.25),\n               0 10px 10px rgba(0,0,0,.2),\n               0 20px 20px rgba(0,0,0,.15);\n  }\n  ion-content div{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n  .choiceButton{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n</style>\n<ion-content padding>\n  <div style="height:100%;width:100%;">\n    <h1>congrats!</h1>\n    <br />\n    <p>print your shipping label and ship your items to recive your points.</p>\n    <br />\n    <button ion-button style="border-radius:20px;" block class="choiceButton" (click)="goBack()">keep recycling</button>\n  </div>\n</ion-content>\n'
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
            template:'<ion-header>\n<style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style>  <ion-navbar>\n    <ion-title>\n      Rohit Rajan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/pic.jpg" alt="your image" />\n    <ion-card-content>\n      <ion-card-title>\n        Rohit Rajan\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <p><b>Username</b>: Rohit Rajan</p>\n          </ion-item>\n          <ion-item>\n            <p><b>Password</b>: &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</p>\n            <button style="border-radius:10px;" ion-button outline item-end icon-left>\n              change password\n            </button>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="border-radius:20px;">\n    <ion-card-content>\n      <ion-card-title>\n        Activity & Earnings\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          <b>Total Points</b>: 1,560\n          <!--\n          <button ion-button outline item-end icon-left>\n            Recycle\n          </button>\n          -->\n        </ion-item>\n        <ion-item>\n          <p><b>Recent</b>: Donated your iPhone 6s for<br />165 points at:</p>\n          <p color="black"><b>Micro Center - Apple Center</b></p>\n          <p>123 Central Expy, Dallas, TX 75243</p>\n        </ion-item>\n        <ion-item><button ion-button block style="border-radius:10px;" color="secondary" (click)="recycleMore()">recycle more</button></ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style="border-radius:20px;">\n    <img src="assets/imgs/map.jpg">\n    <ion-item>\n      <ion-icon name="logo-apple" item-start large></ion-icon>\n      <h2>Best Buy - Apple Center</h2>\n      <p>3333 Preston Rd, Frisco, TX 75034</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-apple" item-left large ></ion-icon>\n      <h2>Apple Store</h2>\n      <p>5299 W Eldorado, Frisco, TX 75033</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>18 min</span>\n      <span item-left>(2.6 mi)</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n    <button ion-button block color="danger" style="border-radius:20px;" (click)="logout()">log out</button>\n\n</ion-content>\n'
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
            selector: 'page-leader',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);}</style> <ion-navbar>\n    <ion-title>\n      May 2020\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n   <ion-list-header>\n    All Time\n  </ion-list-header>\n\n  <ion-item style="border-top-left-radius: 20px; border-top-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="https://www.newegg.com/insider/wp-content/uploads/elon-musk.jpeg">\n    </ion-avatar>\n    <h2><strong>1 </strong>Elon Musk</h2>\n    <p>6,892 points</p>\n    <button ion-button clear item-end (click)="openProfile()">View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://specials-images.forbesimg.com/imageserve/5a8d93da31358e4955adf1c9/416x416.jpg?background=000000&cropX1=1399&cropX2=3806&cropY1=290&cropY2=2695">\n    </ion-avatar>\n    <h2><strong>2 </strong>Sergey Brin</h2>\n    <p>4,205 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2">\n    </ion-avatar>\n    <h2><strong>3 </strong>Mark Zuckerberg</h2>\n    <p>3,659 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://image.cnbcfm.com/api/v1/image/106161367-1570054285153gettyimages-1151703932.jpeg?v=1570054387&w=1400&h=950">\n    </ion-avatar>\n    <h2><strong>4 </strong>Bill Gates</h2>\n    <p>3,482 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://fthmb.tqn.com/AmPs04Ladr_CS7d5UvVWnmmOc3Y=/506x640/filters:fill(auto,1)/apple-exec-tim-cook-56c594403df78c763fa4f45f.jpg">\n    </ion-avatar>\n    <h2><strong>5 </strong>Tim Cook</h2>\n    <p>3,189 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="https://specials-images.forbesimg.com/imageserve/5a8d920d31358e4955adf197/416x416.jpg?background=000000&cropX1=755&cropX2=2357&cropY1=494&cropY2=2097">\n    </ion-avatar>\n    <h2><strong>6 </strong>Jeff Bezos</h2>\n    <p>2,931 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    Friends\n  </ion-list-header>\n\n  <ion-item style="border-top-left-radius: 20px; border-top-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg">\n    </ion-avatar>\n    <h2><strong>1 </strong>Steve Jobs</h2>\n    <p>2,675 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n <ion-item style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">\n    <ion-avatar item-start>\n      <img src="https://specials-images.forbesimg.com/imageserve/5a8d93da31358e4955adf1c9/416x416.jpg?background=000000&cropX1=1399&cropX2=3806&cropY1=290&cropY2=2695">\n    </ion-avatar>\n    <h2><strong>2 </strong>Sergey Brin</h2>\n    <p>4,205 points</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item></ion-list>\n\n</ion-content>\n'
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
            selector: 'page-first',template:'<ion-header>\n  <style>\n  ion-content{\n    background: #1c92d2;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);</style> <ion-navbar>\n    <ion-title>1st Place | May 2020</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card style="border-radius:20px">\n    <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2020/02/07/104994088-RTX4RKWT.600x400.jpg?v=1518006600"/>\n    <ion-card-content>\n      <ion-card-title>\n        Elon Musk - 6,892 Points\n        </ion-card-title>\n      <p>\n        Joined May, 2020\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n        <ion-item style="border-top-left-radius: 20px; border-top-right-radius: 20px;">\n          <ion-thumbnail item-start>\n            <img src="https://cdn.vox-cdn.com/thumbor/1sOdznAirV20csmhHlsFizkK50k=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9699755/Roadster_Hero.jpg">\n          </ion-thumbnail>\n          <h2>Tesla Roadster</h2>\n          <p>Donated May, 2020</p>\n          <p>4500 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://lifeboat.com/blog.images/a-successful-spacex-falcon-heavy-launch-gives-nasa-new-options.jpg">\n          </ion-thumbnail>\n          <h2>SpaceX Falcon 9</h2>\n          <p>Donated May, 2020</p>\n          <p>2300 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n\n        <ion-item style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">\n          <ion-thumbnail item-start>\n            <img src="https://target.scene7.com/is/image/Target/GUEST_f343f002-0522-47f9-b3f7-32205ba161dd?wid=488&hei=488&fmt=pjpeg">\n          </ion-thumbnail>\n          <h2>Batman Costume</h2>\n          <p>Donated May, 2020</p>\n          <p>92 Points</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'
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
