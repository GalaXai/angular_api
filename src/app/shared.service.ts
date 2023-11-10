import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  private userInfo: any;
  
  setUserInfo(data: any) {
    this.userInfo = data;
  }
  
  getUserInfo() {
    return this.userInfo;
  }

  private isFormTwoVisible = new BehaviorSubject<boolean>(true);
  isFormTwoVisible$ = this.isFormTwoVisible.asObservable();

  constructor() {}

  setLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
    this.isFormTwoVisible.next(!value); // Hide FormTwo when logged in
  }

  // Optional: Method to explicitly control FormTwo visibility
  setFormTwoVisibility(value: boolean) {
    this.isFormTwoVisible.next(value);
  }
}
