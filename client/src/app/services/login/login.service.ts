import { Injectable } from '@angular/core';
import { config } from '../../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient
    ) { }
    login(body){
        return this.http.post(config.api + '/login',body);
    }
}
