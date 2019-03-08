import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App router
import {app_routing} from './app.router';

import {UsuarioModule} from './usuarios/usuario.module';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
