import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ageTransform'
})
export class AgeTransformPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   let values = value.split('');
  //   let result = '';
  //   for (let v of values) {
  //     result += v;
  //   }

  //   return result;
  // }

  // capitalize(value: string) {
  //   return value.substr(0,1).toUpperCase() + 
  //     value.substr(1).toLowerCase();
  // }

  transform(value: Date): string {
    debugger;
    let valueFormat = moment(value).format('MM/DD/YYYY');
    let birthdate = moment(valueFormat);
    let age = "";
    age += moment().diff(birthdate, 'years');       
    return age;
  }

}
