import { Injectable } from '@angular/core';
import { AgeTransformPipe } from '../../pipes/age-transform.pipe';

@Injectable()
export class InformationsService {

    getInformations() {
        return [
            {
                index:1,
                name: 'Age',
                value:  new AgeTransformPipe().transform(new Date('1996-08-30T03:00:00.000Z'))
            },
            {
                index:2,
                name: 'Address',
                value: '24058, Belgium, Brussels, Liutter 27, BE'
            },
            {
                index:3,
                name: 'Email',
                value: 'robertsmith@company.com'
            },
            {
                index:4,
                name: 'Phone',
                value: '+1 256 254 84 56'
            },
            {
                index:5,
                name: 'Freelance',
                value: 'till March 25, 2018'
            },            
            {
                index:6,
                name: 'Vacation',
                value: 'till April 15, 2018'
            },
            {
                index:7,
                name: 'Viber',
                value: '+1 256 254 84 56'
            },
            {
                index:8,
                name: 'Skype',
                value: 'robsmithcompany'
            }
        ];
    }
}