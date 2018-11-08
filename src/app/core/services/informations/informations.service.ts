import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Informations } from './informations';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationsService {

    private readonly API = "http://localhost:3000/profile";

    constructor(private http: HttpClient) { }

    get informations$(): Observable<Informations> {
        return this.http.get<Informations>(this.API);
    }

    post(form) {
        
    }
}