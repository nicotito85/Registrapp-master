import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registrar-asistencia-profesor',
  templateUrl: './registrar-asistencia-profesor.page.html',
  styleUrls: ['./registrar-asistencia-profesor.page.scss'],
})
export class RegistrarAsistenciaProfesorPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back();
  }
  
  navigateToQrProf(){
    this.navCtrl.navigateForward('/qr-prof')

  }
  navigateToPerfil() {
    this.navCtrl.navigateForward('/perfil-prof');
  }

  navigateToHome() {
    this.navCtrl.navigateRoot('/menu-profesor');
  }

  logout() {

    this.navCtrl.navigateRoot('/inicio-sesion');
  }
  ngOnInit() {
  }

}
