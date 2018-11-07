import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  about = [];

  constructor(private informationsService: InformationsService) {
  }

  ngOnInit() {
    this.informationsService.informations$.subscribe(data => {
      this.about = [{
        label: 'Age',
        value: data.age,
        type: Type.Date,
        highlight: false
      }, {
        label: 'Adress',
        value: data.address,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Email',
        value: data.email,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Phone',
        value: data.phone,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Freelance',
        value: data.freelance,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Vacation',
        value: data.vacation,
        type: Type.Default,
        highlight: true
      }]
    });
  }
}