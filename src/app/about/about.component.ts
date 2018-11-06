import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Highlight } from 'src/app/shared/enums/highlight.enum';
import { Type } from 'src/app/shared/enums/type.enum';
 @Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    @HostBinding('style.display') display = 'block';

    about = [{
      label: 'Age',
      value: this.informationsService.informations.age,
      type: Type.Date,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Adress',
      value: this.informationsService.informations.address,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Email',
      value: this.informationsService.informations.email,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Phone',
      value: this.informationsService.informations.phone,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Freelance',
      value: this.informationsService.informations.freelance,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Vacation',
      value: this.informationsService.informations.vacation,
      type: Type.Default,
      highlight: Highlight.Highlight
    }
    ]

    constructor(private informationsService: InformationsService) {
    }

    ngOnInit() {
    }

 }