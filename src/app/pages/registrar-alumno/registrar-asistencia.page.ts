import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

    
  navigateToPerfil() {
    this.navCtrl.navigateForward('/perfil-alumno');
  }

  navigateToHome() {
    this.navCtrl.navigateRoot('/menu-principal');
  }

  logout() {

    this.navCtrl.navigateRoot('/inicio-sesion');
  }

  goBack() {
    this.navCtrl.back();
  }
  navigateToQRScan() {
    this.navCtrl.navigateForward('/qr-alumn');}


  ngOnInit() {
  }

}
