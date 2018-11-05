import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './../../core/services/login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : boolean {
        if (this.loginService.isUserAuth) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}