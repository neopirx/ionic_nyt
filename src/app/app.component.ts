import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OpinionPage } from '../pages/opinion/opinion';
import { WorldPage } from '../pages/world/world';
import { SportsPage } from '../pages/sports/sports';
import { TechnologyPage } from '../pages/technology/technology';
import { HealthPage } from '../pages/health/health';
import { SciencePage } from '../pages/science/science';
import { MoviesPage } from '../pages/movies/movies';
import { FashionPage } from '../pages/fashion/fashion';
import { BooksPage } from '../pages/books/books';
import { NationalPage } from '../pages/national/national';
import { PoliticsPage } from '../pages/politics/politics';
import { UpshotPage } from '../pages/upshot/upshot';
import { TheaterPage } from '../pages/theater/theater';
import { FoodPage } from '../pages/food/food';
import { TravelPage } from '../pages/travel/travel';
import { AutomobilesPage } from '../pages/automobiles/automobiles';
import { InsiderPage } from '../pages/insider/insider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'World', component: WorldPage },
      { title: 'Opinions', component: OpinionPage },
      { title: 'Sports', component: SportsPage },
      { title: 'Technology', component: TechnologyPage },
      { title: 'Science', component: SciencePage },
      { title: 'Movies', component: MoviesPage },
      { title: 'Fashion', component: FashionPage },
      { title: 'Books', component: BooksPage},
      { title: 'Health', component: HealthPage },
      { title: 'National', component: NationalPage },
      { title: 'Politics', component: PoliticsPage },
      { title: 'Upshot', component: UpshotPage },
      { title: 'Theater', component: TheaterPage },
      { title: 'Food', component: FoodPage },
      { title: 'Cars', component: AutomobilesPage },
      { title: 'Insider', component: InsiderPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
