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
      return this._http.post(`${URL}/tipoUsuario`,data).toPromise()
  }

  modificarTipoUsuario(id,data){
    return this._http.put(`${URL}/tipoUsuario/${id}`,data).toPromise()
  }


  eliminarUsuario(id) {
    Swal.fire({
      title: 'Desea eliminar este tipo de usuario?',
      text: 'No podras recuperarlo una vez eliminado!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._http.delete(`${URL}/tipoUsuario/${id}`).toPromise()
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
    this._http.post(`${URL}/tipoUsuario/buscar`,{nombre:buscar}).subscribe(((datos:any) => {
      this.tipoUsuarios = datos.data
      
    }), e => console.log(e));
  }




}



export interface tipoUser{
    nombre:string,
    estado?:number,
    _id?:string
  }