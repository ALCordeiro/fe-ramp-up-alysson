import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  about = [];

  constructor(private informationsService: InformationsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.about = [{
          label: 'Age',
          value: data.about.age,
          type: Type.Date,
          highlight: false
        }, {
          label: 'Adress',
          value: data.about.address,
          type: Type.Default,
          highlight: false
        }, {
          label: 'Email',
          value: data.about.email,
          type: Type.Default,
          highlight: false
        }, {
          label: 'Phone',
          value: data.about.phone,
          type: Type.Default,
          highlight: false
        }, {
          label: 'Freelance',
          value: data.about.freelance,
          type: Type.Default,
          highlight: false
        }, {
          label: 'Vacation',
          value: data.about.vacation,
          type: Type.Default,
          highlight: true
        }]        
      }
    );
  }
}