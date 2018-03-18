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
  url= 'https://api.nytimes.com/svc/topstories/v2/home.json';
  apiKey = '3eb428542e814a37826ddf39d65616fb';

  constructor(
    public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews() {
    return this.http.get(this.url + '?api-key=' + this.apiKey);
  }

}