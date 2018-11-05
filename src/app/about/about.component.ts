import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
