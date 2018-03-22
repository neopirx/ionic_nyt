import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class NewsProvider {
  url= 'https://api.nytimes.com/svc/topstories/v2/';
  apiKey = '3eb428542e814a37826ddf39d65616fb';
  data: any;

  constructor(
    public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNewsArt() {
    return this.http.get(this.url + 'arts.json' + '?api-key=' + this.apiKey);
  }

  getNewsHome() {
    return this.http.get(this.url + 'home.json' + '?api-key=' + this.apiKey);
  }

  getNewsWorld() {
    return this.http.get(this.url + 'world.json' + '?api-key=' + this.apiKey);
  }

  getNewsOpinion() {
    return this.http.get(this.url + 'opinion.json' + '?api-key=' + this.apiKey);
  }
  
  getNewsPolitics() {
    return this.http.get(this.url + 'politics.json' + '?api-key=' + this.apiKey);
  }

  getNewsBusiness() {
    return this.http.get(this.url + 'business.json' + '?api-key=' + this.apiKey);
  }

  getNewsCars() {
    return this.http.get(this.url + 'automobiles.json' + '?api-key=' + this.apiKey);
  }

  getNewsBooks() {
    return this.http.get(this.url + 'books.json' + '?api-key=' + this.apiKey);
  }

  getNewsFashion() {
    return this.http.get(this.url + 'fashion.json' + '?api-key=' + this.apiKey);
  }

  getNewsFood() {
    return this.http.get(this.url + 'food.json' + '?api-key=' + this.apiKey);
  }

  getNewsHealth() {
    return this.http.get(this.url + 'health.json' + '?api-key=' + this.apiKey);
  }

  getNewsInsider() {
    return this.http.get(this.url + 'insider.json' + '?api-key=' + this.apiKey);
  }

  getNewsMovies() {
    return this.http.get(this.url + 'movies.json' + '?api-key=' + this.apiKey);
  }

  getNewsNational() {
    return this.http.get(this.url + 'national.json' + '?api-key=' + this.apiKey);
  }

  getNewsScience() {
    return this.http.get(this.url + 'science.json' + '?api-key=' + this.apiKey);
  }

  getNewsSports() {
    return this.http.get(this.url + 'sports.json' + '?api-key=' + this.apiKey);
  }

  getNewsTechnology() {
    return this.http.get(this.url + 'technology.json' + '?api-key=' + this.apiKey);
  }

  getNewsTheater() {
    return this.http.get(this.url + 'theater.json' + '?api-key=' + this.apiKey);
  }

  getNewsTravel() {
    return this.http.get(this.url + 'travel.json' + '?api-key=' + this.apiKey);
  }

  getNewsUpshot() {
    return this.http.get(this.url + 'upshot.json' + '?api-key=' + this.apiKey);
  }
}