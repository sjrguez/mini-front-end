import { Routes, RouterModule } from '@angular/router';

import {UsuariosComponent} from './usuarios/usuarios.component'

import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path:'',
        component:UsuariosComponent,
        loadChildren:'./usuarios/usuario.module#UsuarioModule'
    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];


export const app_routing = RouterModule.forRoot(APP_ROUTES,);
