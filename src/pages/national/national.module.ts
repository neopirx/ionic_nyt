import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NationalPage } from './national';

@NgModule({
  declarations: [
    NationalPage,
  ],
  imports: [
    IonicPageModule.forChild(NationalPage),
  ],
})
export class NationalPageModule {}
