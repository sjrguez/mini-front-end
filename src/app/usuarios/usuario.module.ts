import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';

import { USUARIO_ROUTER } from './usuario.router';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';

@NgModule({
  declarations: [
    MostrarComponent,
    RegistrarComponent,
    TipoUsuarioComponent
  ],
  exports: [
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
