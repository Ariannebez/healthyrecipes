import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {

  // " ", | undefined
  //variable without value
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    // Simulate a simple login check
    if (this.username === 'arianne' && this.password === 'password') {
      console.log('Login successful!');
      // You can navigate to another page on successful login
      this.router.navigate(['/tabs']);
    } else {
      console.log('Login failed. Please check your credentials.');
      // Display an alert for incorrect password
      await this.presentAlert('Login Failed', 'Incorrect username or password.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
}
}
