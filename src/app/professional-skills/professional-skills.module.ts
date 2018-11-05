import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalSkillsComponent } from './professional-skills.component';
import { ProfessionalSkillsRoutingModule } from './professional-skills.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfessionalSkillsRoutingModule
  ],
  declarations: [
    ProfessionalSkillsComponent
  ],
  exports: [
    ProfessionalSkillsComponent
  ]
})
export class ProfessionalSkillsModule { }
