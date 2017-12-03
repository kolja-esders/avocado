import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef) {
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
    console.log(this.identifiedKeywords.length)
    var flag = false
    for (var j = 0; j < this.identifiedKeywords.length; j += 1) {
          for (var i = 0; i < this.meal.length; i += 1) {
            if(this.meal[i].name.toString() == this.identifiedKeywords[j].toString()){
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

  order() {
    this.navCtrl.push("OrderConfirmationPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurateMenuPage');


    this.getPermission();
  }
}
