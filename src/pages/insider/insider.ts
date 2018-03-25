import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'page-insider',
  templateUrl: 'insider.html'
})

export class InsiderPage {
  news: any;
  
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider, public socialSharing: SocialSharing) { 
    
  }

  ionViewWillEnter() { 
    this.newsProvider.getNewsInsider()
      .subscribe(news => {
        this.news = news;
        let newsList = news['results'];
        console.log(newsList);
    });
  }
}
