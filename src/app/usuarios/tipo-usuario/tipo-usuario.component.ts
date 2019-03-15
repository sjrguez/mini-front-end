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
    nombre:''
  }
  titulo="Registrar"
  constructor(public _Tipos:TiposUsuarioService) { }

  guardar(){
    
    if(isNullOrUndefined(this.tipoUsu._id)){
      this._Tipos.registrarTIpoUsuario(this.tipoUsu)
        .then((data:any)=>{
          console.log(data);
          Swal.fire({text:data.mensaje,type:'success'})
          this._Tipos.mostrarTiposUsuarios()
        }).catch(e=>{
          Swal.fire({text:e.error.mensaje,type:'error'})
        })
    }else{
      
    }

  }


  ngOnInit() {
    this._Tipos.mostrarTiposUsuarios()
  }

}
