import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public user = {
    name: 'Arianne',
    email: 'ari@hotmail.com',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigateByUrl('/'); //this navigates to the login page
  }

 
}

