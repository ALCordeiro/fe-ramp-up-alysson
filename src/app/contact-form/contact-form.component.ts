import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';
import { Highlight } from 'src/app/shared/enums/highlight.enum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  contact = [{
    label: 'E-mail',
    value: this.informationsService.informations.email,
    type: Type.Default,
    highlight: Highlight.NotHighlight
  }, {
    label: 'Phone',
    value: this.informationsService.informations.phone,
    type: Type.Default,
    highlight: Highlight.NotHighlight
  }, {
    label: 'Viber',
    value: this.informationsService.informations.viber,
    type: Type.Default,
    highlight: Highlight.NotHighlight
  }, {
    label: 'Skype',
    value: this.informationsService.informations.skype,
    type: Type.Default,
    highlight: Highlight.NotHighlight
  }, {
    label: 'Adress',
    value: this.informationsService.informations.address,
    type: Type.Default,
    highlight: Highlight.NotHighlight
  }
  ]

  constructor(private informationsService: InformationsService) {
  }

  ngOnInit() {
  }
}
