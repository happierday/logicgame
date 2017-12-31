import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class NocanactiveService {

    constructor() { }
    canActivate() {
        if(tokenNotExpired()){
            return false;
        }else{
            localStorage.clear();
            return true;
        }
    }
}
