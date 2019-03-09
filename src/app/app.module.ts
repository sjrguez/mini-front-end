import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App router
import {app_routing} from './app.router';
// Module
import {UsuarioModule} from './usuarios/usuario.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    HttpClientModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
