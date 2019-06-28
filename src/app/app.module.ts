import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { BeautyComponent } from './beauty/beauty.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    EditArticleComponent,
    NewArticleComponent,
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
