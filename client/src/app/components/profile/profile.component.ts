import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    imgUrl;
    username;
    constructor() { }

    ngOnInit() {
        this.imgUrl = localStorage.getItem('imgUrl');
        this.username = localStorage.getItem('username');
    }

}
