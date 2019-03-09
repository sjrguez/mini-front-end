import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicio/login.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public _Login:LoginService) { }

  ngOnInit() {
    this._Login.cargarUsuario()
  }

}
