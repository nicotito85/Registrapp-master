import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-revisar-asistencia',
  templateUrl: './revisar-asistencia.page.html',
  styleUrls: ['./revisar-asistencia.page.scss'],
})
export class RevisarAsistenciaPage implements OnInit {

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


  
  ngOnInit() {
  }

}
