import { Component, OnInit, HostBinding } from '@angular/core';
import { Skills } from './skills';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

  @HostBinding('style.display') display = 'block';

  private skills: Skills = {
      angular: "Angular",
      typescript: "Typescript",
      javascript: "Javascript",
      html: "HTML",
      css: "CSS",
      sql: "SQL",
      csharp: "C#"
  };

  array = [
    {
      id:1,
      name: this.skills.angular,
      value: 80
    },
    {
      id:2,
      name: this.skills.typescript,
      value: 10
    },
    {
      id:3,
      name: this.skills.javascript,
      value: 60
    },
    {
      id:4,
      name: this.skills.html,
      value: 70
    },
    {
      id:5,
      name: this.skills.css,
      value: 50
    },
    {
      id:6,
      name: this.skills.sql,
      value: 40
    },
    {
      id:7,
      name: this.skills.csharp,
      value: 20
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
