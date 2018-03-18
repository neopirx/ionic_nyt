import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutomobilesPage } from './automobiles';

@NgModule({
  declarations: [
    AutomobilesPage,
  ],
  imports: [
    IonicPageModule.forChild(AutomobilesPage),
  ],
})
export class AutomobilesPageModule {}
