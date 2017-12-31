import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    @ViewChild("fileInput") fileInput;
    message;
    messageClass;
    response;
    userForm: FormGroup
    constructor(
        private signupService: SignupService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            username: [''],
            email: [''],
            password: [''],
            confirmPassword: ['']
        })
    }

    onSubmit(){
        let file = this.fileInput.nativeElement;
        if(file.files && file.files[0]){
            let fr = new FileReader();
            fr.readAsDataURL(file.files[0]);
            fr.onload = (() => {
                let body = {
                    username: this.userForm.get('username').value,
                    email: this.userForm.get('email').value,
                    password: this.userForm.get('password').value,
                    datauri: fr.result
                }
                this.signupService.signup(body).subscribe(data => {
                    this.response = JSON.parse(JSON.stringify(data));
                    if(this.response.success){
                        localStorage.setItem('token',this.response.data.token);
                        localStorage.setItem('username',this.response.data.username);
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
            })
        }
    }
}
