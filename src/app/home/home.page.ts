import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonImg, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import{ Camera, CameraResultType} from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {  imagesOutline, locationOutline} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonImg, IonButton, IonButtons, IonIcon],
})
export class HomePage {

  imageSrc: string= '';
  constructor() {
    addIcons({ imagesOutline, locationOutline });
  }
  
  async pickPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      promptLabelHeader: 'Seleccionar una opción',
      promptLabelPicture: 'Tomar una foto',
      promptLabelPhoto: 'Elegir de galería',
    });

    if (!image) return;

    this.imageSrc = image.webPath ?? image.path ?? '';
  }

}
