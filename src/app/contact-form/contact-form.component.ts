import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';
import { Highlight } from 'src/app/shared/enums/highlight.enum';
import { Informations } from '../core/services/informations/informations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  contact = [];

  informations: Informations;

  constructor(private informationsService: InformationsService) {
  }
  
  ngOnInit() {
    this.informationsService.informations.subscribe(data => this.informations = data);
    this.contact = [{
      label: 'E-mail',
      value: this.informations.email,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Phone',
      value: this.informations.phone,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Viber',
      value: this.informations.viber,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Skype',
      value: this.informations.skype,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Address',
      value: this.informations.address,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }
    ]
  }
}