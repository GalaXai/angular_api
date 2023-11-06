import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl: string = 'https://sky.shiiyu.moe/api/v2/profile';

  constructor(private http: HttpClient) {}

  getProfile(playerName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${playerName}`);
  }
}
