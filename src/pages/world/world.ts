import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-world',
  templateUrl: 'world.html'
})

export class WorldPage {
  news: any;

  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 

  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsWorld().subscribe(news => {
      this.news = news;
      console.log(news);
  });
  }
}