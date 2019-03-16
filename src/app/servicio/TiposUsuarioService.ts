import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../Global/enviment';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class TiposUsuarioService {

  tipoUsuarios= [] 
  constructor(public _http: HttpClient) { }
  mostrarTiposUsuarios() {
    this._http.get(`${URL}/tipoUsuario`).subscribe(((datos:any) => {
        this.tipoUsuarios = datos.data
    }), e => console.log(e));
  }

  registrarTipoUsuario(data){
    const TOKEN = JSON.parse(localStorage.getItem('token'));
      return this._http.post(`${URL}/tipoUsuario?token=${TOKEN}`,data).toPromise()
  }

  modificarTipoUsuario(id,data){
    const TOKEN = JSON.parse(localStorage.getItem('token'));

    return this._http.put(`${URL}/tipoUsuario/${id}?token=${TOKEN}`,data).toPromise()
  }


  eliminarUsuario(id) {
    Swal.fire({
      title: 'Desea eliminar este tipo de usuario?',
      text: 'No podras recuperarlo una vez eliminado!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
    const TOKEN = JSON.parse(localStorage.getItem('token'));

        this._http.delete(`${URL}/tipoUsuario/${id}?token=${TOKEN}`).toPromise()
        .then((res: any) => {
          Swal.fire({text: res.mensaje, type: 'success'});
          this.mostrarTiposUsuarios();

        }).catch(e => console.log(e));
      } else {
        Swal.fire({text: 'El  tipo de usuario esta seguro', type: 'info'});
      }
    });
  }
  
  buscarTipoUsuario(buscar){
    const TOKEN = JSON.parse(localStorage.getItem('token'));
    this._http.post(`${URL}/tipoUsuario/buscaro?token=${TOKEN}`,{nombre:buscar}).subscribe(((datos:any) => {
      this.tipoUsuarios = datos.data
      
    }), e => console.log(e));
  }




}



export interface tipoUser{
    nombre:string,
    estado?:number,
    _id?:string
  }