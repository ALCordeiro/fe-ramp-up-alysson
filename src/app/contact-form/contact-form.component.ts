import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';
import { Informations } from '../core/services/informations/informations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  contact = [];

  constructor(private informationsService: InformationsService) {
  }
  
  ngOnInit() {
    this.informationsService.informations$.subscribe(data => {
      this.contact = [{
        label: 'E-mail',
        value: data.email,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Phone',
        value: data.phone,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Viber',
        value: data.viber,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Skype',
        value: data.skype,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Address',
        value: data.address,
        type: Type.Default,
        highlight: false
      }]
    });
  }
}