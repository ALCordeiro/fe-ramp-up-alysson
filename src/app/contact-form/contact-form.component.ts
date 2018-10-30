import { Component, OnInit, HostBinding } from '@angular/core';

import { InformationsService } from '../core/services/informations/informations.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  array = [];

  constructor(private informationsService: InformationsService) {
  }

  ngOnInit() {
    this.array = this.informationsService.getInformations();
  }

  filterItemsOfIndex(index){
    var array = this.array.filter(x => !index.includes(x.index));
    return array;
  }
}
