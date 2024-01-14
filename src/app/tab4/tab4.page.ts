import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public user = {
    name: 'Username',
    email: 'user@example.com',
    lastLogin: 'Date',
    accountCreated: 'Date',
  };

  constructor() { }

  ngOnInit() {
  }

}
