import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SignupService } from './services/signup/signup.service';
import { AuthService } from './services/auth/auth.service';
import { CanactiveService } from './services/canactive/canactive.service';
import { NocanactiveService } from './services/nocanactive/nocanactive.service';
import { LoginService } from './services/login/login.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        SignupService,
        AuthService,
        CanactiveService,
        NocanactiveService,
        LoginService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
