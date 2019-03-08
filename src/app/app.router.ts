import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];


export const app_routing = RouterModule.forRoot(APP_ROUTES,);
