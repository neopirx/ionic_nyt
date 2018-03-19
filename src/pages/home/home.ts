import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  news: any;
  selectedNews: any;
  newsLength: any;

  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) { 

  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsHome().subscribe(news => {
      this.news = news;
      this.newsLength = this.news.length;
      console.log(news);
      select();
  });
  }
}


function select() {
  var counter: 0;
  for(var i = 1; i < this.newsLength; i++) {
    this.selectedNews[counter] = 'dick';
    counter++;
  }
}