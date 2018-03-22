import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the AutomobilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-automobiles',
  templateUrl: 'automobiles.html',
})

export class AutomobilesPage {
  news: any;
  
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 
    
  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsCars()
      .subscribe(news => {
        this.news = news;
    });
  }
}