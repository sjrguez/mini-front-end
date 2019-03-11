import { Injectable } from '@angular/core';
import { UsuariosService, Usu } from './usuarios.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends UsuariosService{

  User: Usu = {
    nombre: '',
    nick: '',
    password: '',
    direccion: '',
    telefono: '',
    tipo: '',
    token: false
  };
  constructor(public _http: HttpClient) {
      super(_http);
   }

   Loguear(data){
     this._http.post(`${this.URL}/login`, data).toPromise()
     .then((usuario: any) => {
       location.href = '/mostrar';
       usuario.data.token = true;
       this.User = usuario.data;
       localStorage.setItem('usuario', JSON.stringify(usuario.data));
     }).catch(e => console.log(e));
   }

   cargarUsuario(){
    this.User = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.User);
   }

   logOut(){
     localStorage.removeItem('usuario');
     location.href = '/login';
   }

}
