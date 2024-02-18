import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoginComponent } from './main_page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './component/input-container/input-container.component';
import { InputValidationComponent } from './component/input-validation/input-validation.component';
import { RegisterComponent } from './main_page/register/register.component';
import { LoadingComponent } from './component/loading/loading.component'
import { LoadingInterceptor } from './shared/loading.interceptor';
import { CheckoutPageComponent } from './component/check-out-page/check-out-page.component';
import { OrderItemsListComponent } from './component/order-items-list/order-items-list.component';


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
    PageNotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    RegisterComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
