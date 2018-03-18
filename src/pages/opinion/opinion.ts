import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-opinion',
  templateUrl: 'opinion.html'
})

export class OpinionPage {
  news: any;

  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 

  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsOpinion().subscribe(news => {
      this.news = news;
      console.log(news);
  });
  }
}