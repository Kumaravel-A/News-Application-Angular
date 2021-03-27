import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private covidUrl = 'https://api.covid19api.com/summary';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCricketUrl() {
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&q=cricket');
  }

  // tslint:disable-next-line: typedef
  getGeneralUrl() {
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&q=general');
  }

  // tslint:disable-next-line: typedef
  getScienceUrl() {
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&q=science');
  }

  // tslint:disable-next-line: typedef
  getTechUrl() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&q=smart%20phones');
  }

  // tslint:disable-next-line: typedef
  getPoliticsUrl() {
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&q=politics');
  }

  // tslint:disable-next-line: typedef
  getKollywoodUrl() {
    return this.http.get('https://gnews.io/api/v4/top-headlines?token=7bb1824bf9f9b22296b4bc23c5dce9e7&lang=en&country=in&topic=entertainment&q=kollywood');
  }

  // tslint:disable-next-line: typedef
  getCovidUrl() {
    return this.http.get(this.covidUrl);
  }
}
