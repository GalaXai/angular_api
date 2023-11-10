import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  username: string = '';
  private formThreeSearchQuery: string = '';
  
  constructor() { }

  // Method to save the username
  saveUsername(username: string) {
    this.username = username;
  }
  saveFormThreeSearchQuery(query: string) {
    this.formThreeSearchQuery = query;
  }
  getFormThreeSearchQuery(): string {
    return this.formThreeSearchQuery;
  }
  // Method to get the saved username
  getUsername(): string {
    return this.username;
  }
}
