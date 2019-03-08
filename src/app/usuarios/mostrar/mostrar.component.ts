import { Component, OnInit,OnDestroy } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit,OnDestroy {
  
  Usuarios = []
  UsuarioObs:Observable<any>

  constructor(public _usuarioService:UsuariosService) { }

  ngOnInit() {
    this.UsuarioObs = this._usuarioService.mostrarUsuarios()
    this.UsuarioObs.subscribe((res:any)=>{
        this.Usuarios =res.data
        console.log(this.Usuarios);
      },e=>console.log(e))
  }
  ngOnDestroy(){
    this.UsuarioObs
  }
}
