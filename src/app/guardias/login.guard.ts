import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanActivate {
  
  canActivate(){
    if(localStorage.getItem('usuario')){
      return true;
    }else{
      location.href = '/login';
      return false;
    }
   
  }


}
