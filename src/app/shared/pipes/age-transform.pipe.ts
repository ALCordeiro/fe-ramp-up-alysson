import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ageTransform'
})
export class AgeTransformPipe implements PipeTransform {

  transform(value: Date): string {
    let valueFormat = moment(value).format('MM/DD/YYYY');
    let birthdate = moment(valueFormat);
    let age = "";
    age += moment().diff(birthdate, 'years');       
    return age;
  }

}
