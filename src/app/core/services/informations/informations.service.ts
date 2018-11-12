import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Informations } from './informations';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationsService {

    readonly API = "http://localhost:3000/profile";
    readonly API_POST = "http://localhost:3000/contact";

    constructor(private http: HttpClient) { }

    get informations$(): Observable<Informations> {
        return this.http.get<Informations>(this.API);
    }

    post(form){
        this.http.post(this.API_POST, form.value).subscribe(data => console.log(data));
    }
}