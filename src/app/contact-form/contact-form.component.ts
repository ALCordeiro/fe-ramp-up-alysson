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
      value: 'max@hotmail.com'
    },
    {
      id:2,
      name: 'Phone',
      value: '+11 111111111'
    },
    {
      id:3,
      name: 'Viber',
      value: '+11 111111111'
    },
    {
      id:4,
      name: 'Skype',
      value: 'maxizin'
    },
    {
      id:5,
      name: 'Address',
      value: 'Dog Street 420'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
