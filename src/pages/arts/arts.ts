import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the ArtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arts',
  templateUrl: 'arts.html',
})
export class ArtsPage {
  news: any;
  
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 
    
  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsArt()
      .subscribe(news => {
        this.news = news;
    });
  }
}