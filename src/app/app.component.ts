import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  isFormTwoVisible: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
    this.sharedService.isFormTwoVisible$.subscribe(visible => {
      this.isFormTwoVisible = visible;
    });
  }
}
