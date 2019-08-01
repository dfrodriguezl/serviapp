import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  login(form){

  }

  async presentAlert(){
    let alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'El usuario inició sesión',
      message: "Inicio de sesión",
      buttons: ['OK']
    });

    await alert.present();
  }
}
