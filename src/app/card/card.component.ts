import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
