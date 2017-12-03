import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CloverServiceProvider } from '../../providers/clover-service/clover-service';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage({
// templateUrl: 'build/pages/welcome/welcome.html',
// providers: [CloverService]
})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  public inventory: any;

  constructor(public navCtrl: NavController, public cloverService: CloverServiceProvider) {
  // constructor(public peopleService: PeopleService){
    this.loadPeople();
  }

  loadPeople(){
  this.cloverService.load()
  .then(data => {
    this.inventory = data;
    });
  }

  // var $ = require('jQuery');


  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }


}
