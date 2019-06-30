import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { EditBeautyComponent } from './edit-beauty/edit-beauty.component';
// import { NewBeautyComponent } from './new-beauty/new-beauty.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    // EditBeautyComponent,
    // NewBeautyComponent,
    HeaderComponent,
    HomeComponent,
    BeautyComponent,
    BeautyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
