import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditBeautyComponent } from './edit-beauty/edit-beauty.component';
import { NewBeautyComponent } from './new-beauty/new-beauty.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { BeautyComponent } from './beauty/beauty.component';


@NgModule({
  declarations: [
    AppComponent,
    EditBeautyComponent,
    NewBeautyComponent,
    HeaderComponent,
    HomeComponent,
    BeautyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
