import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{

  name: string | undefined;
  surname: string | undefined;
  username: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(private router: Router, private alertController: AlertController) {}

  async signup() {
    // Basic validation 
    // if password do not macth alert will show
    // if fields not fielded alert will show
    if (!this.name || !this.surname || !this.username || !this.password || !this.confirmPassword) {
      await this.presentAlert('Error', 'All fields are required.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      await this.presentAlert('Error', 'Password and confirm password do not match.');
      return;
    }

    //successful signup 
    console.log('Signup successful!');

    // Display a success alert
    await this.presentAlert('Success', 'Signup successful!');

    // Going to the tabs page after successful signup
    this.router.navigate(['/tabs']);
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
