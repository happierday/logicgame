import { Injectable } from '@angular/core';
import { config } from '../../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

    constructor(
        private httpClient: HttpClient
    ) { }
    signup(body){
        return this.httpClient.post(config.api + '/signup',body);
    }
}
