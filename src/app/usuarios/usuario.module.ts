import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';

import { USUARIO_ROUTER } from './usuario.router';

@NgModule({
  declarations: [
    MostrarComponent,
    RegistrarComponent
  ],
  exports:[
    MostrarComponent,
    RegistrarComponent
  ], 
  imports: [
    CommonModule,
    USUARIO_ROUTER,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
