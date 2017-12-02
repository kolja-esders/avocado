import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurateMenuPage } from './configurate-menu';


@NgModule({
  declarations: [
    ConfigurateMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurateMenuPage),
  ],
})
export class ConfigurateMenuPageModule {}
