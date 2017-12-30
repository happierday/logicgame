import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
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
