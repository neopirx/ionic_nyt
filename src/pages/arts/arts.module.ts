import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtsPage } from './arts';

@NgModule({
  declarations: [
    ArtsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtsPage),
  ],
})
export class ArtsPageModule {}
