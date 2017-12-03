import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDishPage } from './select-dish';

@NgModule({
  declarations: [
    SelectDishPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDishPage),
  ],
})
export class SelectDishPageModule {}
