import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.scss']
})
export class FormFourComponent implements OnInit {
  userInfo: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userInfo = this.sharedService.getUserInfo();
  }
}
