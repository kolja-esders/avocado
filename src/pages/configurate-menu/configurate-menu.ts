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
        this.cd.detectChanges();

      }, errors => {
        console.log(errors);

      });
      this.isRecording = true;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurateMenuPage');


    this.getPermission();
  }





}
