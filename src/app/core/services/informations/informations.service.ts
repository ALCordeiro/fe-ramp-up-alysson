import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Informations } from './informations';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationsService {

    // private info: Informations = {
    //     address: "24058, Belgium, Brussels, Liutte 27, BE",
    //     age: "1996-08-30T03:00:00.000Z",
    //     email: "robertsmith@company.com",
    //     freelance: "till March 25, 2018",
    //     name: "Robert Smith",
    //     phone: "+1 256 254 84 56",
    //     position: "Developer and Startup entrepeneur",
    //     skype: "robsmithcompany",
    //     vacation: "till April 15, 2018",
    //     viber: "+1 256 254 84 56"
    // };

    private readonly API = "http://localhost:3000/profile";

    constructor(private http: HttpClient) { }

    get informations$(): Observable<Informations> {
        return this.http.get<Informations>(this.API);
    }
}