import {RouterModule, Routes} from '@angular/router';

import { LoginGuard } from '../guardias/login.guard';

import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';

const usuarioRoutes: Routes = [

    { path: 'tipousuario', component: TipoUsuarioComponent, canActivate: [LoginGuard] },
    { path: 'registrar', component: RegistrarComponent, canActivate: [LoginGuard] },
    { path: 'modificar', component: RegistrarComponent, canActivate: [LoginGuard] },
    { path: 'mostrar', component: MostrarComponent, canActivate: [LoginGuard] },
    {path: '', redirectTo: '/mostrar', pathMatch: 'full'}
]

export const USUARIO_ROUTER = RouterModule.forChild(usuarioRoutes)