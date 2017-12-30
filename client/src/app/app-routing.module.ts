import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
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
