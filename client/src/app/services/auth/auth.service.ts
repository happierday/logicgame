import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor() { }
    loggedIn(){
        if(tokenNotExpired()){
            return true;
        }else{
            localStorage.clear();
            return false;
        }
    }
}
