import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import Swal from 'sweetalert2';
import {URL} from '../Global/enviment';
export interface Usu {
  nombre: string;
  nick: string;
  password: string;
  direccion: string;
  telefono: string;
  tipo: string;
  _id?: string;
  token?: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class UsuariosService  {


  Usuarios = [];

  Usuario: Usu = {
    nombre: '',
    nick: '',
    password: '',
    direccion: '',
    telefono: '',
    tipo: '',
    _id: ''

  };
// tslint:disable-next-line: variable-name
  constructor(public _Http: HttpClient) {

  }
s
  mostrarUsuarios() {
     this._Http.get(`${URL}/usuario`).subscribe((res: any) => {
      this.Usuarios = res.data;
      console.log(res.data);
    }, e => console.log(e));
  }

  registrarUsuario(data) {
    const SESION = JSON.parse(localStorage.getItem('usuario'));
    data.token  = SESION.token;
    return this._Http.post(`${URL}/usuario`, data).toPromise();
  }

  modificarUsuario(id, data) {
    const SESION = JSON.parse(localStorage.getItem('usuario'));
    data.token  = SESION.token;
    return this._Http.put(`${URL}/usuario/${id}`, data).toPromise();
  }

  eliminarUsuario(id) {
    const SESION = JSON.parse(localStorage.getItem('usuario'));
    Swal.fire({
      title: 'Desea eliminar este usuario?',
      text: 'No podras recuperarlo una vez eliminado!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._Http.delete(`${URL}/usuario/${id}/${SESION.token}`).toPromise()
        .then((res: any) => {
          Swal.fire({text: res.mensaje, type: 'success'});
          this.mostrarUsuarios();
        })

        .catch(e => console.log(e));
      } else {
        Swal.fire({text: 'El usuario esta seguro', type: 'info'});
      }
    });
  }

  buscarUsuario(data) {
    const SESION = JSON.parse(localStorage.getItem('usuario'));
    data.token  = SESION.token || false;
    this._Http.post(`${URL}/usuario/buscar`, {nombre: data, token: data.token}).subscribe((res: any) => {
      this.Usuarios = res.data;
    }, e => console.log(e));
  }

LimpiarObjeto() {
  this.Usuario = {
    nombre: '',
    nick: '',
    password: '',
    direccion: '',
    telefono: '',
    tipo: '',
    _id: ''
  };
}}
