import {RouterModule, Routes} from '@angular/router';

import {UsuariosComponent} from './usuarios.component';
import {MostrarComponent} from './mostrar/mostrar.component';
import {RegistrarComponent} from './registrar/registrar.component';
const usuarioRoutes: Routes = [

            { path: 'registrar', component: RegistrarComponent },
            { path: 'modificar', component: RegistrarComponent },
            { path: 'mostrar', component: MostrarComponent },
            {path: '', redirectTo: '/mostrar', pathMatch: 'full'}
]

export const USUARIO_ROUTER = RouterModule.forChild(usuarioRoutes)