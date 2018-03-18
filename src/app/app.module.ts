import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OpinionPage,
    WorldPage,
    SportsPage,
    TechnologyPage,
    HealthPage,
    SciencePage,
    MoviesPage,
    FashionPage,
    BooksPage,
    NationalPage,
    PoliticsPage,
    UpshotPage,
    TheaterPage,
    FoodPage,
    TravelPage,
    AutomobilesPage,
    InsiderPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OpinionPage,
    WorldPage,
    SportsPage,
    TechnologyPage,
    HealthPage,
    SciencePage,
    MoviesPage,
    FashionPage,
    BooksPage,
    NationalPage,
    PoliticsPage,
    UpshotPage,
    TheaterPage,
    FoodPage,
    TravelPage,
    AutomobilesPage,
    InsiderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}
