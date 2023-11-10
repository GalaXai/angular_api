import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.isLoggedIn$.subscribe(loggedIn => {
      this.isVisible = loggedIn;
    });
  }
}
