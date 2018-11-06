import { Component, OnInit, HostBinding } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  showNavbar: boolean= false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.showNavbarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }

}
