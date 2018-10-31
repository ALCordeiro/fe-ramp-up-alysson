import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ProfessionalSkillsModule } from '../professional-skills/professional-skills.module';
import { CardModule } from '../card/card.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CoreModule } from '../core/core.module';
import { ContactFormModule } from '../contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    ProfessionalSkillsModule,
    ContactFormModule,
    CardModule,
    NavbarModule,
    CoreModule,
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
