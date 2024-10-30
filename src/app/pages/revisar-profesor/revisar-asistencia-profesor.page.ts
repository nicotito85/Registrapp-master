import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-revisar-asistencia-profesor',
  templateUrl: './revisar-asistencia-profesor.page.html',
  styleUrls: ['./revisar-asistencia-profesor.page.scss'],
})
export class RevisarAsistenciaProfesorPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  navigateToPerfil() {
    this.navCtrl.navigateForward('/perfil-prof');
  }

  navigateToHome() {
    this.navCtrl.navigateRoot('/menu-profesor');
  }

  logout() {

    this.navCtrl.navigateRoot('/inicio-sesion');
  }

  goBack() {
    this.navCtrl.back();
  }  
  ngOnInit() {
  }

}
