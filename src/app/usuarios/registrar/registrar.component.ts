import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';

import Swal from 'sweetalert2';
import {isNullOrUndefined } from 'util';
import { LoginService } from '../../servicio/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  confirmarPass = '';
// tslint:disable-next-line: variable-name
  constructor(public _usuarioService: UsuariosService, public _Login:LoginService) { }

  enviar() {
    const PASS = this._usuarioService.Usuario.password;
    const ID = this._usuarioService.Usuario._id;
    if ( PASS != this.confirmarPass) {
      return Swal.fire({text: 'Password no coinciden', type: 'info'});
    }
    if(isNullOrUndefined(ID)){
      this._usuarioService.registrarUsuario(this._usuarioService.Usuario)
      .then((res:any) => {
        Swal.fire({text: res.mensaje, type: 'success'});
        this._usuarioService.LimpiarObjeto();
      }).catch(error => console.log(error));
    }else{
      this._usuarioService.modificarUsuario(ID,this._usuarioService.Usuario)
      .then((res:any)=>{
        Swal.fire({text: res.mensaje, type: 'success'});
      }).catch(error => console.log(error));
    }
  }


  ngOnInit() {
    this._Login.cargarUsuario()
  }




}
