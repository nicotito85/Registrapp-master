import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-alumn',
  templateUrl: './qr-alumn.page.html',
  styleUrls: ['./qr-alumn.page.scss'],
})
export class QrAlumnPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  navigateToQrExitoso() {
    this.navCtrl.navigateForward('/qr-exitoso'); 
  }
  ngOnInit() {
  }

}
