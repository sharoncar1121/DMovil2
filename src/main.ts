import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient, withFetch } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'dmovil2-32dec',
        appId: '1:958353870658:web:89097ce2a9bc13860b82db',
        storageBucket: 'dmovil2-32dec.appspot.com',
        apiKey: 'AIzaSyDRzmlDfwdRtpa9bILai4gwVOXpPk8s1Dg',
        authDomain: 'dmovil2-32dec.firebaseapp.com',
        messagingSenderId: '958353870658',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
});
