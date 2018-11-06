import { Component, OnInit } from '@angular/core';
import { LoginService } from './../core/services/login/login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  makeLogin(){
    console.log(this.user);
    this.loginService.makeLogin(this.user);

  }

}
