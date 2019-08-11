import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: String,
    password: String
  }

  constructor(private router:Router, private alertCtrl: AlertController, public authService:AuthService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    if(this.usuario.email && this.usuario.password){
      this.authService.login(this.usuario).subscribe(
        (datos:any) => {
          localStorage.setItem('jwt',datos.jwt);
          localStorage.setItem('id',datos.id);
          this.presentAlert();
        },
        (errmsg) => { 
          this.presentAlertError();
        }
      );
    }
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

  async presentAlertError(){
    let alert = await this.alertCtrl.create({
      message: "Usuario no válido, intente nuevamente"
    });

    await alert.present();
  }
}
