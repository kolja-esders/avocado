webpackJsonp([13],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurateMenuPageModule", function() { return ConfigurateMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configurate_menu__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigurateMenuPageModule = (function () {
    function ConfigurateMenuPageModule() {
    }
    ConfigurateMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configurate_menu__["a" /* ConfigurateMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configurate_menu__["a" /* ConfigurateMenuPage */]),
            ],
        })
    ], ConfigurateMenuPageModule);
    return ConfigurateMenuPageModule;
}());

//# sourceMappingURL=configurate-menu.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurateMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurateMenuPage = (function () {
    function ConfigurateMenuPage(navCtrl, navParams, plt, speechRecognition, cd) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.speechRecognition = speechRecognition;
        this.cd = cd;
        this.loading = false;
        this.isDemoMode = false;
        this.isRecording = false;
        this.response = '';
        this.keyword = '';
        this.currentImg = 'assets/img/pizza.jpg';
        this.meal = ["Roast beef", "Spaetzle", "Salad", "Sauce"];
        this.listening = false;
        this.requiredFeatures = ["ir"];
        this.arExperienceUrl = "www/assets/experience/target/index.html";
        this.startupConfiguration = {
            "camera_position": "back"
        };
        this.onDeviceSupported = function () {
            console.log('a');
            var config = { "camera_position": "back" };
            _this.wikitudePlugin.loadARchitectWorld(function (success) {
                console.log("ARchitect World loaded successfully.");
            }, function (fail) {
                console.log("Failed to load ARchitect World!");
            }, "www/assets/experience/target/index.html", ['ir'], config);
        };
        this.onDeviceNotSupported = function () {
            console.log('b');
        };
        plt.ready().then(function () {
            _this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
            _this.wikitudePlugin._sdkKey = "UeTP9NOygx567LhvQR6JaAer50BXGdAoVhV5SEXOs9o+5F1ookXLdFBGQhs15qrO3suHr3d8piUc5wgzGdj+CjByMEYSwmAJ0z6sbVgUZCWiTmmKbvQN6uUBHKjt6MebncSmamdAQyZlOUP3EL9BWnhZ0lIGPQbf2uQVFtNbYUxTYWx0ZWRfX+EzhW4DK6HYU8X7Xk+SLe2xMzq0XhxcKXlfnIyEzSeimbSqoU6TXkJ051qcKHoCpmPECcfSDGk53S0JyfTUajNRzmIC7K99+bVQKBZB2hzj7SFT90PIoqP6/gTztxMrnumqeMAAF3uzy0XqkiH4ugiaXMjXHb73lBqdiazHIMbg8Ysmnnpbd0VmqWEhLiTfThTmcEw59jxdGGsgz6zqx614HpMFpOFBkugfeWAkzG9C+WkyJuWrYAzdD7zTYftqfmQbuf3lGlocrbC8mOJHH15ZWOXBxONHYMCIfuqArxBRHmK23tNM138I43xDWj+kbByne11DeLAQLBjp1H8/UIdRPtFLGyD30ZG73Hrkpcf/2fOAH2oe1f+f4A/QZVc+ZMvGRna8FBriEyucSPKaK8M/z2mxLMhoua3Q9Qiv03kqooGolielSbqmwORlFudaMoRO8xAtUjmw6ZZg8qk6jwjhPMyLFWQl36I/jdRSTD2F1XuYousEBX8=";
            _this.wikitudePlugin.isDeviceSupported(_this.onDeviceSupported, _this.onDeviceNotSupported, _this.requiredFeatures);
        });
    }
    ConfigurateMenuPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
            }
        })
            .catch(function () {
            console.log("In Demo Mode");
            _this.isDemoMode = true;
        });
    };
    ConfigurateMenuPage.prototype.identifyConfigurations = function (text) {
        console.log("identify config");
        var words = text.split(" ");
        var individualConfig;
        console.log(words);
        for (var i = 0; i < words.length; i += 1) {
            if (words[i] == "avocado") {
                individualConfig = "avocado";
            }
        }
        console.log("individualConfig");
        return individualConfig;
    };
    ConfigurateMenuPage.prototype.startListening = function (e) {
        var _this = this;
        console.log(e);
        this.listening = true;
        var options = {
            language: 'en-US',
            showPopup: false,
            showPartial: true // iOS only
        };
        this.speechRecognition.startListening(options).subscribe(function (matches) {
            _this.matches = matches;
            _this.listening = false;
            _this.cd.detectChanges();
        }, function (errors) {
            console.log(errors);
        });
        this.isRecording = true;
    };
    ConfigurateMenuPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
            console.log("stop listening");
            console.log(_this.matches[0]);
            _this.keyword = _this.identifyConfigurations(_this.matches[0]);
            _this.changeMeal(_this.keyword);
        });
    };
    ConfigurateMenuPage.prototype.test = function () {
        this.changeMeal("Avocado");
    };
    ConfigurateMenuPage.prototype.changeMeal = function (word) {
        console.log("changeMeal");
        this.currentImg = 'assets/img/spaetzle_mit_Braten.jpg';
        this.meal.push(word);
    };
    ConfigurateMenuPage.prototype.order = function () {
        this.navCtrl.push("OrderConfirmationPage");
    };
    ConfigurateMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigurateMenuPage');
        this.getPermission();
    };
    ConfigurateMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configurate-menu',template:/*ion-inline-start:"/Users/kolja/Projects/avocado/src/pages/configurate-menu/configurate-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Margherita</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n\n  <img class="mealImg"  src="{{currentImg}}">\n  <div class="priceWrap">\n    <span class="price">\n      <span class="dollar">$</span>12.40\n    </span>\n  </div>\n\n  <div class="sec" padding>\n    <h3 class="head">Ingredients</h3>\n    <span *ngFor="let garnish of meal">\n       <span class="garnish">{{garnish}}</span>\n    </span>\n  </div>\n\n</ion-content>\n\n<ion-footer no-border padding>\n\n  <div class="equalBtn">\n    <button ion-button light color="grey" [class.hide]="listening" large outline (click)="startListening($event)">\n      <ion-icon  class="paddedIcon" name="mic" ng-hide="showing"></ion-icon>\n      Adjust\n    </button>\n\n    <button ion-button light color="grey" [class.hide]="!listening" large outline (click)="startListening($event)">\n      <!--Listening...-->\n      <ion-spinner></ion-spinner>\n    </button>\n\n    <button ion-button color="grey" large outline (click)="startAR()">\n      <ion-icon class="paddedIcon" name="eye"></ion-icon>\n      Preview\n    </button>\n  </div>\n\n  <button ion-button large class="order" color="green" full (click)="order()">\n    Order now\n  </button>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/kolja/Projects/avocado/src/pages/configurate-menu/configurate-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], ConfigurateMenuPage);
    return ConfigurateMenuPage;
}());

//# sourceMappingURL=configurate-menu.js.map

/***/ })

});
//# sourceMappingURL=13.js.map