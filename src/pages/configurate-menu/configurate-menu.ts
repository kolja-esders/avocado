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
  identifiedKeywords = ['Mushrooms'];
  currentImg= '../assets/img/spaetzle.jpg';
  meal = [{name: "Roast beef", status: "no change"}, {name: "Spaetzle", status: "no change"}, {name: "Salad", status: "no change"}, {name: "Sauce", status:"no Change"}];



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
  var individualChanges = [];
  console.log(words)

  for (var i = 0; i < words.length; i += 1) {
    for (var j = 0; j < this.keywords.length; i += 1){
      if (words[i].toLowerCase() == this.keywords[j].toLowerCase()){
        individualChanges.push(this.keywords[j]);
      }
  }

  }
  console.log("individualChanges")
  return individualChanges
}

  startListening() {
      let options = {
        language: 'en-US',
        showPopup: false,  // Android only
        showPartial: true // iOS only
      };
      this.speechRecognition.startListening(options).subscribe(matches => {
        this.matches = matches;
        console.log("start listening")

            //this.identifyConfigurations(this.matches[0]);
        this.cd.detectChanges();

      }, errors => {
        console.log(errors);

      });
      this.isRecording = true;
    }

    stopListening() {
        this.speechRecognition.stopListening().then(() => {
          this.isRecording = false;
          console.log("stop listening")
          console.log(this.matches[0])
          this.identifiedKeywords = this.identifyKeywords(this.matches[0])
          this.changeMeal()
        });
    }

  changeMeal(){
    console.log("changeMeal")
    console.log(this.identifiedKeywords.length)
    for (var j = 0; j < this.identifiedKeywords.length; j += 1) {
      if (this.identifiedKeywords[j].toString() in this.meal){
          for (var i = 0; i < this.meal.length; i += 1) {
            if(this.meal[i].name == this.identifiedKeywords[j]){
              this.meal[i].status = "removed"
            }
          }
        } else {
            console.log("add")
            console.log(this.identifiedKeywords[j])
            this.meal.push({name: this.identifiedKeywords[j], status: "added"})
        }





    this.currentImg = '../assets/img/spaetzle_mit_Braten.jpg';

   }
   console.log(this.meal)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurateMenuPage');


    this.getPermission();
  }
}
