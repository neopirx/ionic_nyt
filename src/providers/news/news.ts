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

  constructor(
    public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
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

}