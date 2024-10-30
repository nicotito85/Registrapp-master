import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-revisar-asistencia',
  templateUrl: './revisar-asistencia.page.html',
  styleUrls: ['./revisar-asistencia.page.scss'],
})
export class RevisarAsistenciaPage implements OnInit {
  asignaturas: any[] = [];
  constructor(
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}


  async loadAsignaturas() {
    const user = await this.afAuth.currentUser;
    if (user) {
      const alumnoDoc = await this.firestore.collection('Alumnos').doc(user.uid).get().toPromise();
      const alumnoData = alumnoDoc?.data() as any;

      if (alumnoData) {
        const siglas = [alumnoData.sigla1, alumnoData.sigla2, alumnoData.sigla3];
        const asignaturasSnapshot = await this.firestore
          .collection('Asignaturas', ref => ref.where('sigla', 'in', siglas))
          .get()
          .toPromise();

        this.asignaturas = asignaturasSnapshot?.docs.map(doc => doc.data()) || [];
      } else {
        console.error('No se encontró el alumno en la colección Alumnos.');
      }
    }
  }

    
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
    this.loadAsignaturas();
  }


}
