import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {

  // " ", | undefined
  //variable without value
  username: string = "";
  password: string | undefined;

  constructor(private router: Router) {}

  //login function username is set to 'arianne'.
  //password is set to 'password'.
  login() {
    // Simple login check
    if (this.username == 'arianne' && this.password == 'password') {
      console.log('Login successful!');
      
      this.router.navigate(['/tabs']);
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}