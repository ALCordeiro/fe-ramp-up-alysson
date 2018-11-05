import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "src/app/login/user";

@Injectable()
export class LoginService {

    private userAuth: boolean = false;
    showNavbarEmitter = new EventEmitter<boolean>();
    constructor(private router: Router) { }

    makeLogin(user: User) {
        if (user.name === 'user' && user.password === '123456') {
            this.userAuth = true;
            this.showNavbarEmitter.emit(true);
            this.router.navigate(['/about']);
        } else {
            this.showNavbarEmitter.emit(false);
            this.userAuth = false;
        }
    }

    userIsAuth() {
        return this.userAuth;
    }

}