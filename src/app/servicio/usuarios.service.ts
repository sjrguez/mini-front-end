import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  URL = 'http://192.168.0.107:5000';

// tslint:disable-next-line: variable-name
  constructor(public _Http:HttpClient) { }


  mostrarUsuarios(){
    return this._Http.get(`${this.URL}/usuario`)
  }




}
