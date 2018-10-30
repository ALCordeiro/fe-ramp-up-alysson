import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalSkillsComponent } from './professional-skills.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfessionalSkillsComponent
  ],
  exports: [
    ProfessionalSkillsComponent
  ]
})
export class ProfessionalSkillsModule { }
