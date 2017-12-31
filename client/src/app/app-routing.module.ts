import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { CanactiveService } from './services/canactive/canactive.service'
import { NocanactiveService } from './services/nocanactive/nocanactive.service'

import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
        canActivate:[NocanactiveService]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NocanactiveService]
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
  ];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes,{useHash:environment.production})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
