import { Type } from './../../../shared/enums/type.enum';
import { Injectable } from '@angular/core';
import { Highlight } from 'src/app/shared/enums/highlight.enum';

@Injectable()
export class InformationsService {

    get informations() {
        return {
            address: "24058, Belgium, Brussels, Liutte 27, BE",
            age: "1996-08-30T03:00:00.000Z",
            email: "robertsmith@company.com",
            freelance: "till March 25, 2018",
            name: "Robert Smith",
            phone: "+1 256 254 84 56",
            position: "Developer and Startup entrepeneur",
            skype: "robsmithcompany",
            vacation: "till April 15, 2018",
            viber: "+1 256 254 84 56"
        };
    }
}