import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworksComponent } from './networks/networks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListComponent } from './my-list/my-list.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NetworksComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    MyListComponent,
    DetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
