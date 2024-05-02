import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name!: string;
  surname?: string;
  email!: string;
  username!: string;
  password!: string;
  birthdate!: Date;

  constructor() {}

  login() {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    console.log(this.birthdate);
  }
}

