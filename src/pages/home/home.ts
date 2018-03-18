import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news: any;

  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 
    
  }

  ionViewWillEnter() { 
    this.newsProvider.getNews().subscribe(news => {
      console.log(news);
  });
  }
}


