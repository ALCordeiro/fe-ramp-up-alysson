import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  array = [
    {
      id:1,
      name: 'Email',
      value: 'robertsmith@company.com'
    },
    {
      id:2,
      name: 'Phone',
      value: '+1 256 254 84 56'
    },
    {
      id:3,
      name: 'Viber',
      value: '+1 256 254 84 56'
    },
    {
      id:4,
      name: 'Skype',
      value: 'robsmithcompany'
    },
    {
      id:5,
      name: 'Address',
      value: '24058, Belgium, Brussels, Liutter 27, BE'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
