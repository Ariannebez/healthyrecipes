import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {

  username: string |undefined;
  password: string| undefined;

  constructor(private router: Router) {}

  login() {
    // Simulating a simple login check
    if (this.username === 'user' && this.password === 'password') {
      console.log('Login successful!');
      // You can navigate to another page on successful login
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}