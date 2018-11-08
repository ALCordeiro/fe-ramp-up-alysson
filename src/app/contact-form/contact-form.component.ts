import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostBinding } from '@angular/core';
import { InformationsService } from 'src/app/core/services/informations/informations.service';
import { Type } from 'src/app/shared/enums/type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  contact = [];

  constructor(private informationsService: InformationsService,  private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  onSubmit(form){
    this.http.post('http://localhost:3000/contact', form.value).subscribe(data => console.log(data));
  }
  
  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
      this.contact = [{
        label: 'E-mail',
        value: data.contact.email,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Phone',
        value: data.contact.phone,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Viber',
        value: data.contact.viber,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Skype',
        value: data.contact.skype,
        type: Type.Default,
        highlight: false
      }, {
        label: 'Address',
        value: data.contact.address,
        type: Type.Default,
        highlight: false
      }]      
      }
    );
  }
}