import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string = "";
  pass: string = "";

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    console.log("Login page: ", this.userService.logiran);
  }

  clicked() {
    this.userService.login(this.username, this.pass);
    this.username = "";
    this.pass = "";
  }
}
