import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ProfessionalSkillsModule } from '../main/professional-skills/professional-skills.module';
import { CardModule } from '../main/card/card.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CoreModule } from '../core/core.module';
import { ContactFormModule } from '../main/contact-form/contact-form.module';
import { MainRoutingModule } from './main.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ProfessionalSkillsModule,
    ContactFormModule,
    CardModule,
    NavbarModule,
    CoreModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
