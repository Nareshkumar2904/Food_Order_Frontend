import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { TagsComponent } from './component/tags/tags.component';
import { FoodPageComponent } from './component/food-page/food-page.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { TitleComponent } from './component/title/title.component';
import { PageNotFoundComponent } from './main_page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
