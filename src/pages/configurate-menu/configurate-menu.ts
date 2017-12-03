import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';



@IonicPage()
@Component({
  selector: 'page-configurate-menu',
  templateUrl: 'configurate-menu.html',
})
export class ConfigurateMenuPage {
  matches: String[];
  loading = false;
  isDemoMode = false;
  isRecording = false;
  response = '';
  keywords = ['Avocado', 'Salad', 'Potatos', 'Chips', 'Rucola', 'Mushrooms']
  identifiedKeywords = [];
  currentImg = 'assets/img/pizza.jpg';
  meal = [{name: "Roast beef", status: "no change"}, {name: "Spaetzle", status: "no change"}, {name: "Salad", status: "no change"}, {name: "Sauce", status:"no Change"}];
  listening = false;
  wikitudePlugin;
  counter = true;
  requiredFeatures = [ "ir" ];
    arExperienceUrl = "www/assets/experience/target/index.html";
    startupConfiguration = {
    "camera_position": "back"
  };


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public plt: Platform,
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef) {
    plt.ready().then(() => {
      this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
      this.wikitudePlugin._sdkKey = "UeTP9NOygx567LhvQR6JaAer50BXGdAoVhV5SEXOs9o+5F1ookXLdFBGQhs15qrO3suHr3d8piUc5wgzGdj+CjByMEYSwmAJ0z6sbVgUZCWiTmmKbvQN6uUBHKjt6MebncSmamdAQyZlOUP3EL9BWnhZ0lIGPQbf2uQVFtNbYUxTYWx0ZWRfX+EzhW4DK6HYU8X7Xk+SLe2xMzq0XhxcKXlfnIyEzSeimbSqoU6TXkJ051qcKHoCpmPECcfSDGk53S0JyfTUajNRzmIC7K99+bVQKBZB2hzj7SFT90PIoqP6/gTztxMrnumqeMAAF3uzy0XqkiH4ugiaXMjXHb73lBqdiazHIMbg8Ysmnnpbd0VmqWEhLiTfThTmcEw59jxdGGsgz6zqx614HpMFpOFBkugfeWAkzG9C+WkyJuWrYAzdD7zTYftqfmQbuf3lGlocrbC8mOJHH15ZWOXBxONHYMCIfuqArxBRHmK23tNM138I43xDWj+kbByne11DeLAQLBjp1H8/UIdRPtFLGyD30ZG73Hrkpcf/2fOAH2oe1f+f4A/QZVc+ZMvGRna8FBriEyucSPKaK8M/z2mxLMhoua3Q9Qiv03kqooGolielSbqmwORlFudaMoRO8xAtUjmw6ZZg8qk6jwjhPMyLFWQl36I/jdRSTD2F1XuYousEBX8=";
      this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
    });
  }

  onDeviceSupported = () => {
    console.log('a');


  }

  onDeviceNotSupported = () => {
    console.log('b');
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      })
      .catch( () => {
        console.log("In Demo Mode");
        this.isDemoMode = true;
      });
  }


identifyKeywords(text: String){
  console.log("identify config");
  var words = text.split(" ");
  console.log(words)
  for (var i = 0; i < words.length; i += 1) {
    for (var j = 0; j < this.keywords.length; j += 1){
      if (words[i].toString().toLowerCase() == this.keywords[j].toString().toLowerCase()){
        this.identifiedKeywords.push(this.keywords[j]);
      }
    }

  }
  console.log("individualChanges done")
  }

  startListening(e) {
    console.log(e);
    this.listening = true;


      let options = {
        language: 'en-US',
        showPopup: false,  // Android only
        showPartial: true // iOS only
      };
      this.speechRecognition.startListening(options).subscribe(matches => {
        this.matches = matches;
        this.listening = false;
        this.cd.detectChanges();
        console.log(this.matches)
        console.log(this.matches[0])
        this.identifyKeywords(this.matches[0])
        this.changeMeal()
      }, errors => {
        console.log(errors);
      });

      this.isRecording = true;
    }

    stopListening() {
        this.speechRecognition.stopListening().then(() => {
          this.isRecording = false;
          console.log("stop listening")
        });
    }

  changeMeal(){
    console.log("changeMeal")
    var flag = false
    for (var j = 0; j < this.identifiedKeywords.length; j += 1) {
          for (var i = 0; i < this.meal.length; i += 1) {
            if(this.meal[i].name.toString() == this.identifiedKeywords[j].toString()){
              console.log("remove")
              this.meal[i].status = "removed"
            } else {
              flag = true
            }
      }
      if(flag){
        console.log("add")
        console.log(this.identifiedKeywords[j])
        this.meal.push({name: this.identifiedKeywords[j], status: "added"})
        flag = false
      }
   }

   console.log(this.meal)
   this.identifiedKeywords = []
  }

  startAR(){
    var config:any = {"camera_position": "back"};
if (this.counter) {
  this.wikitudePlugin.loadARchitectWorld(
        function(success) {
          console.log("ARchitect World loaded successfully.");
        },
        function(fail) {
          console.log("Failed to load ARchitect World!");
          console.log(fail)
        },
    "www/assets/experience/target_before/index.html",
    ['ir'],
    <JSON>config);
    this.counter = false;
} else {
  this.wikitudePlugin.loadARchitectWorld(
        function(success) {
          console.log("ARchitect World loaded successfully.");
        },
        function(fail) {
          console.log("Failed to load ARchitect World!");
          console.log(fail)
        },
    "www/assets/experience/target_after/index.html",
    ['ir'],
    <JSON>config);
}


  }

  order() {
    this.navCtrl.push("OrderConfirmationPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurateMenuPage');


    this.getPermission();
  }
}
