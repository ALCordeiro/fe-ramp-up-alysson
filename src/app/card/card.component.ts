import { Component, OnInit, HostBinding } from '@angular/core';

import { InformationsService } from './../services/informations.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
