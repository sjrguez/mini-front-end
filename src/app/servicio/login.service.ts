import { Injectable } from '@angular/core';
import { Usu, UsuariosService } from './usuarios.service';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { URL } from '../Global/enviment';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends UsuariosService {

  User: Usu = {
    nombre: '',
    nick: '',
    password: '',
    direccion: '',
    telefono: '',
    tipo: ''
  };
  // tslint:disable-next-line:variable-name
  constructor(public _http: HttpClient) {
      super(_http);
  }

  Loguear(data) {
    this._Http.post(`${URL}/login`, data).toPromise()
    .then((usuario: any) => {
      location.href = '/mostrar';
      this.Usuario = usuario.data;
      localStorage.setItem('usuario', JSON.stringify(usuario.data));
      localStorage.setItem('token', JSON.stringify(usuario.token));
 
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
    localStorage.removeItem('token');
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
