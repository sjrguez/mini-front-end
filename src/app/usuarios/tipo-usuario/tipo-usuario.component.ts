import { Component, OnInit } from '@angular/core';
import { TiposUsuarioService,tipoUser } from 'src/app/servicio/TiposUsuarioService';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {

  tipoUsu:tipoUser={
    nombre:'',
    _id:''
  }
  titulo="Registrar"
  constructor(public _Tipos:TiposUsuarioService) { }

  guardar(){
    
    if(this.tipoUsu._id == ''){
      this._Tipos.registrarTipoUsuario(this.tipoUsu)
        .then((data:any)=>{
          console.log(data);
          Swal.fire({text:data.mensaje,type:'success'})
          this._Tipos.mostrarTiposUsuarios()
        }).catch(e=>{
          Swal.fire({text:e.error.mensaje,type:'error'})
        })
    }else{
      this._Tipos.modificarTipoUsuario(this.tipoUsu._id,this.tipoUsu)
        .then((data:any)=>{
          Swal.fire({text:data.mensaje,type:'success'})
          this._Tipos.mostrarTiposUsuarios()
        }).catch(e=>console.log(e))
    }

  }
  
  obtenerTipoUsuario(data){
    this.titulo="Modificar"
    this.tipoUsu = Object.assign({},data)
  }

  buscarTipo(buscar){
    this._Tipos.buscarTipoUsuario(buscar)
  }

  ngOnInit() {
    this._Tipos.mostrarTiposUsuarios()
  }

}
