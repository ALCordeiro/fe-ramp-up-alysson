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

  navbar = [
    {
      label: 'About',
      route: 'about'
    },
    {
      label: 'Skills',
      route: 'skills'
    },
    {
      label: 'Contact',
      route: 'contact'
    },
    {
      label: 'Portfolio',
      route: 'portfolio'
    },
    {
      label: 'Experience',
      route: 'experience'
    },
    {
      label: 'Pricing',
      route: 'pricing'
    },
    {
      label: 'Blog',
      route: 'blog'
    },
    {
      label: 'Calendar',
      route: 'calendar'
    },
    {
      label: 'Other',
      route: 'other'
    },
    {
      label: 'Logout',
      route: 'login'
    }
  ]

  ngOnInit() {
    this.loginService.showNavbarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }

}
