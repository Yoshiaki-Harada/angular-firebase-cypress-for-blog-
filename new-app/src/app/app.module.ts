import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/firestore';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8080] : undefined
    },
    {
      provide: FIRESTORE_SETTINGS,
      useValue: environment.useEmulators ? {
        host: 'localhost:8080',
        ssl: false,
        experimentalForceLongPolling: true
      } : {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
