import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { LoginService } from '../../servicio/login.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit, OnDestroy {
  

  constructor(public _usuarioService: UsuariosService,public _Login:LoginService) { }

  ngOnInit() {
    this._usuarioService.mostrarUsuarios()
  }

  obtenerUsuario(data) {
    this._usuarioService.Usuario = data;
    this._usuarioService.Usuario.password = ''
  }
  eliminarUsuario(id) {
    this._usuarioService.eliminarUsuario(id);
  }
  desactivarUsuario(data){
    if (data.estado == 1 ) {
      data.estado = 2
    }else{
      data.estado = 1
    }
    this._usuarioService.modificarUsuario(data._id,data)
    .then(()=>this._usuarioService.mostrarUsuarios())
    .catch(e=>console.log(e))
  }

  buscador(buscar) {
    const VERIFICAR = buscar.replace(/ /g, ''); 
    if (VERIFICAR == undefined || VERIFICAR == "" || VERIFICAR == " ") {
      this._usuarioService.mostrarUsuarios()
      return; 
    }
    this._usuarioService.buscarUsuario(buscar);
  }
  ngOnDestroy() {
  }
}
