import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-exitoso',
  templateUrl: './qr-exitoso.page.html',
  styleUrls: ['./qr-exitoso.page.scss'],
})
export class QrExitosoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  navigateToMenuPrincipal() {
    this.navCtrl.navigateForward('/menu-principal'); 
  }
}
