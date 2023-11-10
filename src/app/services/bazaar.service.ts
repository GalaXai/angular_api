import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BazaarService {
  private bazaarUrl = 'https://sky.shiiyu.moe/api/v2/bazaar';
  private bazaarData: any;

  constructor(private http: HttpClient) {}

  fetchBazaarData(): Observable<any> {
    if (!this.bazaarData) {
      return this.http.get(this.bazaarUrl);
    }
    return of(this.bazaarData); // 'of' should be imported from 'rxjs'
  }

  storeBazaarData(data: any): void {
    this.bazaarData = data;
  }
}
