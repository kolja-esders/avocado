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
  keyword ='';
  currentImg= '../assets/img/spaetzle.jpg';
  meal = ["Roast beef", "Spaetzle", "Salad", "Sauce"];

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


identifyConfigurations(text: String){
  console.log("identify config");
  var words = text.split(" ");
  var individualConfig
  console.log(words)

  for (var i = 0; i < words.length; i += 1) {

    if (words[i] == "avocado"){
      individualConfig = "avocado";
    }

  }
  console.log("individualConfig")
  return individualConfig
}

/*
  speechInput() {
    if (this.loading) {
      return;
    }
    this.loading = true;

    let options = {
      showPopup: false,  // Android only
      showPartial: true // iOS only
    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.cd.detectChanges();
      this.matches = matches;
      console.log(matches);

    }, errors => {
      console.log(errors);
    });
    this.isRecording = true;
  }
*/


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
          this.keyword = this.identifyConfigurations(this.matches[0])
          this.changeMeal(this.keyword)
        });
    }

  test(){
    this.changeMeal("Avocado")
  }


  changeMeal(word){
    console.log("changeMeal")
    this.currentImg = '../assets/img/spaetzle_mit_Braten.jpg';
    this.meal.push(word)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurateMenuPage');


    this.getPermission();
  }





}
