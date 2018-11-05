import { Type } from './../../../shared/enums/type.enum';
import { Injectable } from '@angular/core';
import { Highlight } from 'src/app/shared/enums/highlight.enum';

@Injectable()
export class InformationsService {

    getInformations() {
        return [
            {
                index:1,
                name: 'Age',
                value: '1996-08-30T03:00:00.000Z',
                type: Type.Date,
                highlight: Highlight.NotHighlight
            },
            {
                index:2,
                name: 'Address',
                value: '24058, Belgium, Brussels, Liutter 27, BE',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            },
            {
                index:3,
                name: 'Email',
                value: 'robertsmith@company.com',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            },
            {
                index:4,
                name: 'Phone',
                value: '+1 256 254 84 56',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            },
            {
                index:5,
                name: 'Freelance',
                value: 'till March 25, 2018',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            },            
            {
                index:6,
                name: 'Vacation',
                value: 'till April 15, 2018',
                type: Type.Default,
                highlight: Highlight.Highlight
            },
            {
                index:7,
                name: 'Viber',
                value: '+1 256 254 84 56',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            },
            {
                index:8,
                name: 'Skype',
                value: 'robsmithcompany',
                type: Type.Default,
                highlight: Highlight.NotHighlight
            }
        ];
    }
}