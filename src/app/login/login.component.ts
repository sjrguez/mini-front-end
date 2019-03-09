import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicio/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario={
      nick:'',
      password:''
    }
  constructor(public _Login:LoginService) { }
  enviar(){
    this._Login.Loguear(this.usuario)
  }
  ngOnInit() {
  }

}
