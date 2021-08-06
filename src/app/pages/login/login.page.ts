import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  pass: string = "";

  constructor() { }

  ngOnInit() {

  }

  clicked() {
    console.log("username: ", this.username, " password: ", this.pass);
    this.username = "";
    this.pass = "";
  }
}
