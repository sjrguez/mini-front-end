import { Injectable } from '@angular/core';
import { Usu, UsuariosService } from './usuarios.service';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { URL } from '../Global/enviment';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends UsuariosService {
  Usuario: Usu = {
    nombre: '',
    nick: '',
    password: '',
    direccion: '',
    telefono: '',
    tipo: ''
  };
  constructor(public _http: HttpClient, public Router: Router) {
      super(_http);
  }

  Loguear(data) {
    this._Http.post(`${URL}/login`, data).toPromise()
    .then((usuario: any) => {
      this.Router.navigate(['/mostrar']);
      this.Usuario = usuario.data;
      localStorage.setItem('usuario', JSON.stringify(usuario.data));

    }).catch(e => {
      const ERROR = e.error;
      Swal.fire({text: ERROR.mensaje, type: 'error'});
    });
  }

  cargarUsuario() {
    if (localStorage.getItem('usuario')) {
      this.Usuario = JSON.parse(localStorage.getItem('usuario'));
    }
  }
  logOut() {
    localStorage.removeItem('usuario');
    this.Usuario = {
      nombre: '',
      nick: '',
      password: '',
      direccion: '',
      telefono: '',
      tipo: '',
      _id: ''
    };
    location.href = '/login';
  }

}
