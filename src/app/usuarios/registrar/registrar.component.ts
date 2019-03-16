import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';

import Swal from 'sweetalert2';
import {isNullOrUndefined } from 'util';
import { LoginService } from '../../servicio/login.service';
import { TiposUsuarioService } from 'src/app/servicio/TiposUsuarioService';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  confirmarPass = '';
  titulo="Registrar"
   id
// tslint:disable-next-line: variable-name
  constructor(public _usuarioService: UsuariosService, public _Login: LoginService,public _Tipo:TiposUsuarioService) { }

  enviar() {
    const PASS = this._usuarioService.Usuario.password;
    if ( PASS !== this.confirmarPass) {
      return Swal.fire({text: 'Password no coinciden', type: 'info'});
    }

    if (this.id == '') {
      this._usuarioService.registrarUsuario(this._usuarioService.Usuario)
      .then((res: any) => {
        Swal.fire({text: res.mensaje, type: 'success'});
        this._usuarioService.LimpiarObjeto();
      }).catch(error => console.log(error));
    } else {
      this._usuarioService.modificarUsuario(this.id, this._usuarioService.Usuario)
      .then((res: any) => {
        Swal.fire({text: res.mensaje, type: 'success'});
      }).catch(error => console.log(error));
    }
  }


  ngOnInit() {
    this.id= this._usuarioService.Usuario._id;
    if(this.id != ''){
      this.titulo="Modificar"
    }
    this._Login.cargarUsuario();
    this._Tipo.mostrarTiposUsuarios()
  }




}
