import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { InformationsService } from "../services/informations/informations.service";

@Injectable()
export class InformationsResolver implements Resolve<String> {
    constructor(private informationService: InformationsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            return this.informationService.informations$();
    }
}
