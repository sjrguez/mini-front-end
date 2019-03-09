import {RouterModule, Routes} from '@angular/router';

import {UsuariosComponent} from './usuarios.component';
import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';
import { LoginGuard } from '../guardias/login.guard';

const usuarioRoutes: Routes = [

            { path: 'registrar', component: RegistrarComponent,canActivate:[LoginGuard] },
            { path: 'modificar', component: RegistrarComponent,canActivate:[LoginGuard] },
            { path: 'mostrar', component: MostrarComponent,canActivate:[LoginGuard] },
            {path: '', redirectTo: '/mostrar', pathMatch: 'full'}
]

export const USUARIO_ROUTER = RouterModule.forChild(usuarioRoutes)