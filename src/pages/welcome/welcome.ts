import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  options = {
    databaseXmlFile: 'PluginTest.xml',
    targetList: [ 'logo', 'iceland', 'canterbury-grass', 'brick-lane' ],
    vuforiaLicense: 'AXjbN3//////AAAAGXdiJsk9g0z9g8BUYDKoJ0c9V/XF3zdIgGhbexjPegqdH5bWbIz5xYVdV1c1OJtiKjvsGe9COak3V2bGB59ZVb9jpko+MEj6T3LSb1mU4/jPVXytzWQu7CewsK0J0guBBiDj5ztS2Lp2CCdScH6qs+rXw8mPRMaETvQM8NJCsgWHftw9dOlKEvlrvw2ML5oYOcArOHZVSBhmy2YsHX3VB7Hj+K+TKuxRHJ7+bFYcNEmbqLewaHkHMxa9vxqgu0LksnVLvZFIqIjBgABMn2j8xQbYS1NfgHIsxfB8oTZ3uhh0ccC50j0xDcXQiWrFmHOdk8KtvhMyPUP4CJKjQOs6A8P+yzWqS7ZLucSJxoUJ+a+3'
  };

  constructor(public navCtrl: NavController, public plt: Platform) {
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      var nav: any = navigator;
      if (nav.VuforiaPlugin) {
        nav.VuforiaPlugin.startVuforia(
          this.options,
          function(data) {
            // To see exactly what `data` can return, see 'Success callback `data` API' within the plugin's documentation.
            console.log(data);
            
            if(data.status.imageFound) {
              alert("Image name: "+ data.result.imageName);
            }
            else if (data.status.manuallyClosed) {
              //alert("User manually closed Vuforia by pressing back!");
            }
          },
          function(data) {
            alert("Error: " + data);
          }
        );
      }
    });
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
