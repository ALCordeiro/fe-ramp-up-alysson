import { Informations } from './../core/services/informations/informations';
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

  about = [];

  informations: Informations;

  constructor(private informationsService: InformationsService) {
  }

  ngOnInit() {
    this.informationsService.informations.subscribe(data => this.informations = data);
    this.about = [{
      label: 'Age',
      value: this.informations.age,
      type: Type.Date,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Adress',
      value: this.informations.address,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Email',
      value: this.informations.email,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Phone',
      value: this.informations.phone,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Freelance',
      value: this.informations.freelance,
      type: Type.Default,
      highlight: Highlight.NotHighlight
    }, {
      label: 'Vacation',
      value: this.informations.vacation,
      type: Type.Default,
      highlight: Highlight.Highlight
    }
    ]
  }
}