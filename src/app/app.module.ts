import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Route, Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const appRoutes:Routes=[
  {path: 'login', component:LoginComponent},
]