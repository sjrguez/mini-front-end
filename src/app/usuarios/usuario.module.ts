import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';
import { UsuariosComponent } from './usuarios.component';

import { USUARIO_ROUTER } from './usuario.router';
@NgModule({
  declarations: [
    UsuariosComponent,
    MostrarComponent,
    RegistrarComponent
  ],
  
  imports: [
    CommonModule,
    USUARIO_ROUTER
  ]
})
export class UsuarioModule { }
