import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  array = [
    {
      id:1,
      name: 'Angular',
      value: 80
    },
    {
      id:2,
      name: 'Typescript',
      value: 10
    },
    {
      id:3,
      name: 'Javascript',
      value: 60
    },
    {
      id:4,
      name: 'HTML',
      value: 70
    },
    {
      id:5,
      name: 'CSS',
      value: 50
    },
    {
      id:6,
      name: 'SQL',
      value: 40
    },
    {
      id:7,
      name: 'C#',
      value: 20
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
