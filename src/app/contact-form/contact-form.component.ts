import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
