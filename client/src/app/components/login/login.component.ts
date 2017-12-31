import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    message;
    messageClass;
    response;
    constructor(
            private loginService: LoginService,
            private formBuilder: FormBuilder,
            private router: Router
    ) {
        this.createForm();
     }

    createForm(){
        this.userForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }

    onSubmit(){
        let body = {
            email: this.userForm.get('email').value,
            password: this.userForm.get('password').value,
        }
        this.loginService.login(body).subscribe(data => {
            this.response = JSON.parse(JSON.stringify(data));
            if(this.response.success){
                localStorage.setItem('token',this.response.data.token);
                localStorage.setItem('username',this.response.data.userForm);
                localStorage.setItem('imgUrl',this.response.data.imgUrl);
                this.message = "Successful Signed up";
                this.messageClass = "alert alert-success";
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 2000);
            }else{
                this.message = this.response.msg;
                this.messageClass = "alert alert-danger";
            }
        })
    }

    ngOnInit() {
    }

}
